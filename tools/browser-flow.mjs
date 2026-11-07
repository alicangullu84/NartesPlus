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
    width: 390, height: 844, deviceScaleFactor: 2, mobile: true
  });
  await new Promise((resolve) => setTimeout(resolve, 400));
  async function run(expression) {
    const result = await cdp.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.text + " " + ((result.exceptionDetails.exception && result.exceptionDetails.exception.description) || ""));
    }
    return result.result.value;
  }
  const flow = await run(`(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const out = {
      ui: window.NARTES_UI,
      sheet: Boolean(document.getElementById("answer-sheet")),
      keypad: Boolean(document.querySelector(".sheet-keypad, input")),
      sentence: document.querySelector(".prompt").innerText,
      topics: document.querySelectorAll(".toc-topic").length,
      lockedPreview: document.getElementById("adim-2").innerText.includes("______")
    };
    document.querySelector("[data-blank]").click();
    await wait(30);
    const hold = document.querySelector(".blank-hold");
    const kids = [...hold.children].map((el) => el.className);
    const labels = [...hold.querySelectorAll(".pair")].map((el) => el.textContent);
    out.order = kids;
    out.labels = labels;
    out.synonymTrap = labels.includes("çarpanları") && labels.includes("bölenleri");
    const wrong = [...hold.querySelectorAll(".pair")].find((el) => el.textContent !== "çarpanları");
    wrong.click();
    await wait(20);
    out.afterWrong = {
      hint: document.querySelector(".feedback").innerText.slice(0, 80),
      stillTwo: document.querySelectorAll("#adim-1 .pair").length,
      step2locked: document.getElementById("adim-2").className.includes("is-locked")
    };
    const wrongAgain = [...document.querySelectorAll("#adim-1 .pair")].find((el) => el.textContent !== "çarpanları");
    wrongAgain.click();
    await wait(20);
    out.afterSecond = {
      explain: document.querySelector(".feedback") ? document.querySelector(".feedback").innerText.slice(0, 60) : "",
      filled: document.querySelector("#adim-1 .blank-value").textContent,
      step2: document.getElementById("adim-2").className
    };
    document.getElementById("video-note").click();
    out.video = document.getElementById("video-msg").hidden === false && document.getElementById("video-note").textContent;
    out.retry = document.body.innerText.includes("Yeniden dene");
    var locked = document.querySelector("#adim-3 .badge.lock");
    out.lock = locked ? { label: locked.getAttribute("aria-label"), text: locked.textContent.trim(), svg: Boolean(locked.querySelector("svg")) } : null;
    return out;
  })()`);
  console.log(JSON.stringify(flow, null, 2));
  const fs = await import("fs");
  const shot = await cdp.send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("/tmp/nartes-pairs.png", Buffer.from(shot.data, "base64"));
  browser.ws.close();
  cdp.ws.close();
  const ok = flow.ui === "iki-secenek" && !flow.sheet && !flow.keypad && flow.labels.length === 2 &&
    flow.labels.includes("çarpanları") && flow.labels.includes("katları") && !flow.synonymTrap &&
    flow.order[0] === "pair" && flow.order[2] === "pair" &&
    flow.afterWrong.stillTwo === 2 && flow.afterWrong.step2locked &&
    flow.afterSecond.filled === "çarpanları" && flow.afterSecond.step2.includes("is-active") &&
    flow.video && flow.topics === 12 && flow.lockedPreview &&
    flow.retry === false && flow.lock && flow.lock.label === "Kilitli" && flow.lock.text === "" && flow.lock.svg;
  if (!ok) process.exit(1);
}

main().catch((error) => { console.error(error); process.exit(1); });
