const port = process.env.CDP_PORT || "9223";

function connect(url) {
  const ws = new WebSocket(url);
  let next = 0;
  const pending = new Map();
  const ready = new Promise((resolve, reject) => {
    ws.addEventListener("open", () => resolve());
    ws.addEventListener("error", () => reject(new Error("CDP bağlantısı kurulamadı")));
  });
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    }
  });
  return {
    ws,
    send(method, params) {
      const id = ++next;
      const result = new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
      ready.then(() => ws.send(JSON.stringify({ id, method, params })));
      return result;
    }
  };
}

async function main() {
  const version = await fetch("http://127.0.0.1:" + port + "/json/version").then((res) => res.json());
  const browser = connect(version.webSocketDebuggerUrl);
  const { targetId } = await browser.send("Target.createTarget", {
    url: "file:///agent/repos/NartesPlus/web/index.html#/1.1"
  });
  const list = await fetch("http://127.0.0.1:" + port + "/json").then((res) => res.json());
  const page = list.find((item) => item.id === targetId);
  const cdp = connect(page.webSocketDebuggerUrl);
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1280, height: 800, deviceScaleFactor: 1, mobile: false
  });
  await new Promise((resolve) => setTimeout(resolve, 400));

  async function run(expression) {
    const result = await cdp.send("Runtime.evaluate", {
      expression, awaitPromise: true, returnByValue: true
    });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.text + " " + ((result.exceptionDetails.exception && result.exceptionDetails.exception.description) || ""));
    }
    return result.result.value;
  }

  const flow = await run(`(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const out = { ui: window.NARTES_UI, gold: document.body.innerText.includes("Çarpan, bölen demektir") };
    document.querySelector("[data-blank]").click();
    await wait(30);
    out.sheet = !document.getElementById("answer-sheet").hidden;
    document.getElementById("sheet-input").value = "9";
    document.getElementById("sheet-ok").click();
    out.afterWrong = {
      step2: document.getElementById("adim-2").innerText.includes("kilitli"),
      hint: document.getElementById("sheet-feedback").textContent,
      last: window.__fb,
      input: document.getElementById("sheet-input").value,
      saved: JSON.parse(localStorage.getItem("nartes-plus-lgs-v1") || "{}").leaves["1.1"].steps[0]
    };
    document.getElementById("sheet-input").value = "9";
    document.getElementById("sheet-ok").click();
    await wait(40);
    out.afterSecond = document.getElementById("sheet-feedback").innerText.slice(0, 80);
    document.getElementById("sheet-input").value = "2 grup";
    document.getElementById("sheet-ok").click();
    await wait(40);
    out.afterCorrect = {
      sheetHidden: document.getElementById("answer-sheet").hidden,
      step2class: document.getElementById("adim-2").className,
      step2locked: document.getElementById("adim-2").innerText.includes("kilitli"),
      nav: document.querySelector('a[href="#/1.1"].is-leaf').className
    };
    location.hash = "#/1.3";
    await wait(40);
    const spots = [...document.querySelectorAll("#adim-1 [data-blank]")];
    spots[0].click();
    await wait(20);
    document.getElementById("sheet-input").value = "4";
    document.getElementById("sheet-ok").click();
    await wait(30);
    out.multi = {
      title: document.title,
      ask: document.getElementById("sheet-title").innerText,
      branch: window.__branch,
      miss: window.__miss,
      vals: window.__vals,
      fb: window.__fb,
      err: window.__err,
      hash: location.hash,
      saved: (JSON.parse(localStorage.getItem("nartes-plus-lgs-v1") || "{}").leaves["1.3"] || {}).steps
    };
    document.getElementById("sheet-input").value = "0";
    document.getElementById("sheet-ok").click();
    await wait(30);
    out.multiDone = {
      sheetHidden: document.getElementById("answer-sheet").hidden,
      step2class: document.getElementById("adim-2").className
    };
    const blanks = [...document.querySelectorAll("#adim-2 [data-blank]")];
    out.step2blanks = blanks.map((button) => button.innerText.replace(/\\s+/g, " "));
    out.step2text = document.getElementById("adim-2").innerText.slice(0, 240);
    if (blanks[0]) blanks[0].click();
    await wait(20);
    out.choices = [...document.querySelectorAll(".choice")].map((button) => button.textContent);
    const choice = [...document.querySelectorAll(".choice")].find((button) => button.textContent.trim() === "çarpanı");
    if (choice) choice.click();
    await wait(30);
    const again = [...document.querySelectorAll("#adim-2 [data-blank]")];
    if (again[1]) {
      again[1].click();
      await wait(20);
      const other = [...document.querySelectorAll(".choice")].find((button) => button.textContent.trim() === "katı");
      if (other) other.click();
      await wait(30);
    }
    out.choice = { step3class: document.getElementById("adim-3").className, blankCount: again.length };
    return out;
  })()`);
  console.log(JSON.stringify(flow, null, 2));

  const shot = await cdp.send("Page.captureScreenshot", { format: "png" });
  const fs = await import("fs");
  fs.writeFileSync("/tmp/nartes-flow.png", Buffer.from(shot.data, "base64"));
  browser.ws.close();
  cdp.ws.close();
  if (!flow.sheet || flow.afterWrong.step2 !== true || !flow.afterSecond.includes("Beraber") || flow.afterCorrect.step2locked || !flow.afterCorrect.nav.includes("is-progress") || flow.multiDone.step2class.indexOf("is-locked") !== -1 || flow.choice.step3class.indexOf("is-locked") !== -1) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
