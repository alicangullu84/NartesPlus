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
  async function send(method, params) {
    await ready;
    const id = ++next;
    const result = new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    ws.send(JSON.stringify({ id, method, params }));
    return result;
  }
  return { ws, send };
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
  await cdp.send("Page.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise((resolve) => setTimeout(resolve, 400));

  async function run(expression) {
    const result = await cdp.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true
    });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.text + " " + (result.exceptionDetails.exception && result.exceptionDetails.exception.description || ""));
    }
    return result.result.value;
  }

  const layout = await run(`(() => {
    const topics = [...document.querySelectorAll(".toc-topic")].map((item) => item.innerText.replace(/\\s+/g, " ").trim());
    const nav = getComputedStyle(document.querySelector("nav"));
    const main = getComputedStyle(document.querySelector("main"));
    const body = getComputedStyle(document.body);
    const navEl = document.querySelector("nav");
    return {
      count: topics.length,
      first: topics[0].slice(0, 80),
      last: topics[topics.length - 1],
      hasAsal: document.body.innerText.includes("Asal sayılar") && document.body.innerText.includes("Asal çarpan ağacı") && document.body.innerText.includes("Üslü çarpım biçiminde yazma"),
      locked: document.querySelector("#adim-2").innerText.includes("Kilitli"),
      video: document.body.innerText.includes("Video yakında"),
      overflow: { nav: nav.overflowY, main: main.overflowY, body: body.overflow },
      navScrolls: navEl.scrollHeight > navEl.clientHeight
    };
  })()`);
  console.log("LAYOUT", JSON.stringify(layout, null, 2));

  const wrong = await run(`(async () => {
    function submit(value) {
      const form = document.querySelector('form[data-kind="step"]');
      form.querySelector("input").value = value;
      form.requestSubmit();
    }
    submit("9");
    const hint = document.querySelector(".feedback").innerText;
    submit("9");
    const again = document.querySelector(".feedback").innerText;
    const kept = document.querySelector('form[data-kind="step"] input').value;
    const stillLocked = document.querySelector("#adim-2").innerText.includes("Kilitli");
    return { hint, again, kept, stillLocked };
  })()`);
  console.log("WRONG", JSON.stringify(wrong));

  const progress = await run(`(async () => {
    function leaf(id) {
      for (const section of NARTES.topics[0].sections)
        for (const item of section.leaves) if (item.id === id) return item;
    }
    const wait = () => new Promise((resolve) => setTimeout(resolve, 20));
    const current = leaf("1.1");
    const form = document.querySelector('form[data-kind="step"]');
    form.querySelector("input").value = current.steps[0].answers[0];
    form.requestSubmit();
    await wait();
    const link = document.querySelector('a[href="#/1.1"].is-leaf');
    const style = getComputedStyle(link);
    return { className: link.className, color: style.color, step2: document.querySelector("#adim-2").className };
  })()`);
  console.log("PROGRESS", JSON.stringify(progress));

  const done = await run(`(async () => {
    function leaf(id) {
      for (const section of NARTES.topics[0].sections)
        for (const item of section.leaves) if (item.id === id) return item;
    }
    const wait = () => new Promise((resolve) => setTimeout(resolve, 30));
    const current = leaf("1.1");
    for (let i = 1; i < current.steps.length; i += 1) {
      const form = document.querySelector('form[data-kind="step"][data-index="' + i + '"]');
      const inputs = form.querySelectorAll("input");
      current.steps[i].answers.forEach((answer, index) => { inputs[index].value = answer; });
      form.requestSubmit();
      await wait();
    }
    document.getElementById("seen").click();
    await wait();
    for (let i = 0; i < current.exercises.length; i += 1) {
      const form = document.querySelector('form[data-kind="exercise"][data-index="' + i + '"]');
      form.querySelector("input").value = current.exercises[i].answerText;
      form.requestSubmit();
      await wait();
    }
    const link = document.querySelector('a[href="#/1.1"].is-leaf');
    const style = getComputedStyle(link);
    const section = document.querySelector('a[href="#/1.1"].is-label');
    return {
      className: link.className,
      color: style.color,
      background: style.backgroundColor,
      sectionClass: section.className,
      sectionColor: getComputedStyle(section).color,
      next: document.querySelector(".leaf-foot").innerText,
      progress: document.getElementById("top-progress").innerText
    };
  })()`);
  console.log("DONE", JSON.stringify(done));

  const models = await run(`(async () => {
    location.hash = "#/1.3";
    await new Promise((resolve) => setTimeout(resolve, 40));
    const bars = document.querySelector(".model").innerText;
    location.hash = "#/2.3.3";
    await new Promise((resolve) => setTimeout(resolve, 40));
    const blanks = document.querySelectorAll(".divisor.blank").length;
    location.hash = "#/konu/12";
    await new Promise((resolve) => setTimeout(resolve, 40));
    const soonTopics = document.querySelectorAll(".toc-subs").length;
    return {
      bars: bars.includes("Tam oturur") && bars.includes("Artık var"),
      blanks,
      soonTitle: document.querySelector("h1").innerText,
      soonFlag: document.body.innerText.includes("Yakında"),
      subsHidden: soonTopics === 0
    };
  })()`);
  console.log("MODELS", JSON.stringify(models));

  const shot = await cdp.send("Page.captureScreenshot", { format: "png" });
  const fs = await import("fs");
  fs.writeFileSync("/tmp/nartes-soon.png", Buffer.from(shot.data, "base64"));
  await run(`location.hash = "#/1.1"`);
  await new Promise((resolve) => setTimeout(resolve, 80));
  const home = await cdp.send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("/tmp/nartes-home.png", Buffer.from(home.data, "base64"));
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise((resolve) => setTimeout(resolve, 80));
  const drawer = await run(`(() => {
    document.getElementById("nav-toggle").click();
    const open = document.body.classList.contains("nav-open");
    const topics = document.querySelectorAll(".toc-topic").length;
    return { open, topics, toggle: document.getElementById("nav-toggle").getAttribute("aria-expanded") };
  })()`);
  console.log("DRAWER", JSON.stringify(drawer));
  const mobile = await cdp.send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("/tmp/nartes-mobile.png", Buffer.from(mobile.data, "base64"));
  console.log("SHOTS ok");
  browser.ws.close();
  cdp.ws.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
