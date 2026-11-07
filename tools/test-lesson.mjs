import { createRequire } from "module";

const require = createRequire(import.meta.url);
const data = require("../web/js/lesson-data.js");
const check = require("../web/js/check.js");
const diagrams = require("../web/js/diagrams.js");
const visuals = require("../web/js/visuals.js");

let failed = 0;
function assert(cond, message) {
  if (!cond) {
    failed += 1;
    console.error("FAIL", message);
  }
}

const topic = data.topics[0];
const leaves = topic.sections.flatMap((section) => section.leaves);
assert(data.topics.length === 12, "12 konu");
assert(data.topics[0].title === "Çarpanlar ve Katlar", "ilk konu");
assert(leaves.length === 59, "59 yaprak, gelen " + leaves.length);
assert(data.topics.slice(1).every((item) => item.ready === false), "diğer konular boş");

const group = topic.sections[1].items.filter((item) => item.type === "group").map((item) => item.title);
assert(group.join("|") === "Asal sayılar|Asal çarpan ağacı|Asal çarpan algoritması|Üslü çarpım biçiminde yazma", "2. başlık alt alanları");

for (const leaf of leaves) {
  assert(leaf.steps.length === 3, leaf.id + " adım sayısı");
  assert(leaf.examples.length >= 2, leaf.id + " örnek");
  assert(leaf.exercises.length >= 2, leaf.id + " alıştırma");
  assert(diagrams[leaf.id], leaf.id + " görsel yok");
  leaf.steps.forEach((step) => {
    assert(step.prompt.split("□").length === step.answers.length + 1, leaf.id + " boşluk");
    const good = check.judgeAll(step.answers, step.answers, { ordered: step.ordered });
    assert(good.ok, leaf.id + " resmi adım");
    const bad = check.judgeAll(step.answers.map(() => "99999"), step.answers, { ordered: step.ordered });
    assert(!bad.ok, leaf.id + " yanlış adım geçti");
  });
  leaf.exercises.forEach((exercise) => {
    assert(check.judgeBlank(exercise.answerText, exercise.answerText).ok, leaf.id + " alıştırma anahtarı");
  });
  const html = visuals.render(diagrams[leaf.id], 0);
  assert(html && html.indexOf("undefined") === -1 && html.indexOf("NaN") === -1, leaf.id + " görsel çizimi");
}

const hidden = visuals.render(diagrams["2.3.3"], 0);
const shown = visuals.render(diagrams["2.3.3"], 2);
assert(hidden.split("divisor blank").length === 5, "84 şeridi başta boş");
assert(shown.indexOf("divisor blank") === -1, "84 şeridi iki adımdan sonra dolu");
assert(visuals.render(diagrams["1.3"], 0).indexOf("Artık var") !== -1, "10 ÷ 4 artığı");
assert(visuals.render(diagrams["1.3"], 0).indexOf("Tam oturur") !== -1, "12 ÷ 3 oturması");

const cases = [
  ["çarpan", "çarpanı", true],
  ["ÇARPANI", "çarpanı", true],
  ["hayır", "evet", false],
  ["evet", "doğru", true],
  ["2^2", "2²", true],
  ["2**2", "2²", true],
  ["3, 2", "2,3", true],
  ["1,2,3", "1,2,3,6", false],
  ["1×26, 2×13", "1×26,2×13", true],
  ["48", "16×3=48", true],
  ["47", "16×3=48", false],
  ["Evet, 16/4=4, kalan 0", "Evet; 16÷4=4, kalan 0.", true],
  ["123", "1,2,3", false]
];
for (const [given, expected, ok] of cases) {
  const result = check.judgeBlank(given, expected, {});
  assert(result.ok === ok, given + " / " + expected + " → " + result.ok);
}

console.log(failed ? "FAILED " + failed : "PASS");
process.exit(failed ? 1 : 0);
