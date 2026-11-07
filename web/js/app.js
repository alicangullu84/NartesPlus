/* Nartes+ lesson shell. Opens from file:// — no account, no server. */
(function () {
  "use strict";

  var data = window.NARTES;
  var check = window.NartesCheck;
  var diagrams = window.NARTES_DIAGRAMS || {};
  var visual = window.NartesVisual;
  var STORAGE = "nartes-plus-lgs-v1";

  var navEl = document.getElementById("nav");
  var mainEl = document.getElementById("icerik");
  var liveEl = document.getElementById("live");
  var progressEl = document.getElementById("top-progress");
  var toggleEl = document.getElementById("nav-toggle");
  var scrimEl = document.getElementById("scrim");

  var leaves = {};
  data.topics[0].sections.forEach(function (section) {
    section.leaves.forEach(function (leaf) {
      leaf.sectionId = section.id;
      leaf.sectionTitle = section.title;
      leaves[leaf.id] = leaf;
    });
  });

  var state = load();
  var review = false;
  var route = { leaf: "1.1" };
  var openBlank = null;
  window.NARTES_UI = "iki-secenek";

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function load() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE) || "");
      if (!parsed || typeof parsed.leaves !== "object" || !parsed.leaves) return { leaves: {} };
      return parsed;
    } catch (err) {
      return { leaves: {} };
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE, JSON.stringify({ leaves: state.leaves }));
    } catch (err) {
      /* private mode */
    }
  }

  function blank() {
    return { values: [], wrong: 0, solved: false, unlocked: false, last: null };
  }

  function ensureLeaf(id) {
    var leaf = leaves[id];
    var saved = state.leaves[id];
    if (!saved) {
      saved = {
        steps: leaf.steps.map(function () { return blank(); }),
        exercises: leaf.exercises.map(function () { return blank(); }),
        examplesSeen: false,
        examplesUnlocked: false
      };
      state.leaves[id] = saved;
    }
    while (saved.steps.length < leaf.steps.length) saved.steps.push(blank());
    while (saved.exercises.length < leaf.exercises.length) saved.exercises.push(blank());
    if (saved.steps[0]) saved.steps[0].unlocked = true;
    saved.steps.forEach(function (step, index) {
      if (step.solved && saved.steps[index + 1]) saved.steps[index + 1].unlocked = true;
      if (index > 0 && saved.steps[index - 1].solved) step.unlocked = true;
    });
    if (saved.steps[saved.steps.length - 1].solved) saved.examplesUnlocked = true;
    saved.exercises.forEach(function (exercise, index) {
      if (exercise.solved && saved.exercises[index + 1]) saved.exercises[index + 1].unlocked = true;
    });
    return saved;
  }

  function isDone(saved) {
    return saved.steps.every(function (step) { return step.solved; }) &&
      saved.exercises.every(function (exercise) { return exercise.solved; });
  }

  function leafStatus(id) {
    var saved = state.leaves[id];
    if (!saved) return "start";
    if (isDone(saved)) return "done";
    var attempted = saved.steps.some(function (step) { return step.solved || step.wrong > 0; }) ||
      saved.exercises.some(function (exercise) { return exercise.solved || exercise.wrong > 0; });
    return attempted ? "progress" : "start";
  }

  function aggregate(ids) {
    if (!ids.length) return "start";
    var statuses = ids.map(leafStatus);
    if (statuses.every(function (status) { return status === "done"; })) return "done";
    if (statuses.some(function (status) { return status !== "start"; })) return "progress";
    return "start";
  }

  function sectionLeafIds(section) {
    return section.leaves.map(function (leaf) { return leaf.id; });
  }

  function statusLabel(status) {
    if (status === "done") return "tamamlandı";
    if (status === "progress") return "üzerinde çalışılıyor";
    return "henüz başlanmadı";
  }

  function doneCount() {
    return Object.keys(leaves).filter(function (id) {
      return state.leaves[id] && isDone(state.leaves[id]);
    }).length;
  }

  function parseRoute() {
    var hash = "";
    try { hash = decodeURIComponent(location.hash.replace(/^#/, "")); } catch (err) { hash = ""; }
    var topic = hash.match(/^\/konu\/(\d+)$/);
    if (topic) {
      var number = Number(topic[1]);
      if (number === 1) return { overview: true, topic: 1 };
      if (number >= 2 && number <= 12) return { soon: true, topic: number };
    }
    var leaf = hash.match(/^\/(\d+(?:\.\d+)+)$/);
    if (leaf && leaves[leaf[1]]) return { leaf: leaf[1], topic: 1 };
    return { leaf: "1.1", topic: 1 };
  }

  function activeTopic() {
    return route.topic || 1;
  }

  function say(message) {
    liveEl.textContent = "";
    window.setTimeout(function () { liveEl.textContent = message; }, 30);
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    toggleEl.setAttribute("aria-expanded", "false");
    scrimEl.hidden = true;
  }

  function renderProgress() {
    progressEl.textContent = doneCount() + " / " + Object.keys(leaves).length + " yaprak";
  }

  function tocLine(href, text, depth, status, current, kind) {
    var cls = "toc-line depth-" + depth + " is-" + (kind || "leaf") + " is-" + status + (current ? " is-current" : "");
    var statusText = kind === "plain" ? "" : '<span class="sr">' + statusLabel(status) + "</span>";
    return '<a class="' + cls + '" href="' + href + '"' + (current ? ' aria-current="page"' : "") + ">" +
      esc(text) + statusText + "</a>";
  }

  function renderNav() {
    var html = '<p class="toc-kicker">Konular</p><ol class="toc">';
    data.topics.forEach(function (topic) {
      var open = activeTopic() === topic.n;
      var topicClass = "toc-topic" + (open ? " is-open" : "");
      if (!topic.ready) topicClass += " is-soon";
      else topicClass += " is-" + aggregate(topic.sections.reduce(function (ids, section) {
        return ids.concat(sectionLeafIds(section));
      }, []));
      html += '<li class="' + topicClass + '">';
      html += '<a class="toc-topic-link" href="#/konu/' + topic.n + '"><span class="toc-num">' + topic.n + "</span><span><b>" +
        esc(topic.title) + "</b><small>" + esc(topic.code) + (topic.ready || open ? "" : " · Yakında") + "</small></span></a>";
      if (open && topic.ready) {
        html += '<div class="toc-subs">';
        topic.sections.forEach(function (section) {
          var ids = sectionLeafIds(section);
          html += tocLine("#/" + ids[0], section.id + ". " + section.title, 1, aggregate(ids), false, "label");
          section.items.forEach(function (item) {
            if (item.type === "group") {
              html += tocLine("#/" + item.leaves[0], item.title, 2, aggregate(item.leaves), false, "label");
              item.leaves.forEach(function (id) {
                html += tocLine("#/" + id, id + " " + leaves[id].title, 3, leafStatus(id), route.leaf === id, "leaf");
              });
            } else {
              html += tocLine("#/" + item.id, item.id + " " + leaves[item.id].title, 2, leafStatus(item.id), route.leaf === item.id, "leaf");
            }
          });
        });
        html += "</div>";
      } else if (open) {
        html += '<p class="toc-soon">Yakında</p>';
      }
      html += "</li>";
    });
    html += "</ol>";
    html += '<p class="toc-key"><span class="swatch is-start">○ henüz başlanmadı</span><span class="swatch is-progress">◐ üzerinde</span><span class="swatch is-done">✓ tamam</span></p>';
    html += '<p class="nav-foot"><button type="button" class="text-button" id="reset">İlerlemeyi sıfırla</button></p>';
    navEl.innerHTML = html;
    document.getElementById("reset").addEventListener("click", onReset);
    var current = navEl.querySelector(".is-current");
    if (current && current.scrollIntoView) current.scrollIntoView({ block: "nearest" });
  }

  function render() {
    route = parseRoute();
    renderNav();
    renderMain();
    renderProgress();
    document.title = route.leaf
      ? "Nartes+ · " + route.leaf + " " + leaves[route.leaf].title
      : "Nartes+ · " + (route.soon ? data.topics[route.topic - 1].title : "Çarpanlar ve Katlar");
  }

  function renderMain() {
    if (route.soon) renderSoon(data.topics[route.topic - 1]);
    else if (route.overview) renderOverview();
    else renderLeaf(leaves[route.leaf]);
  }

  function renderOverview() {
    var topic = data.topics[0];
    var html = '<article class="sheet"><p class="eyebrow">Konu 1 · ' + esc(topic.code) + "</p><h1>" + esc(topic.title) + "</h1>";
    html += "<p class=\"lead\">Sekiz kitap bölümü soldaki sırayla açılır. Doğru cevap bir sonraki adımı açar; yanlışta ipucu, yine yanlışta kısa açıklama gelir.</p><ol class=\"section-index\">";
    topic.sections.forEach(function (section) {
      html += '<li><a href="#/' + section.leaves[0].id + '"><span>' + esc(section.id) + ". " + esc(section.title) + "</span><small>" +
        esc(section.page) + " · " + esc(section.kazanım) + "</small></a></li>";
    });
    html += '</ol><p class="restriction">Bu konuda alan ve hacim hesabı yok. EBOB ve EKOK iki pozitif tam sayı içindir.</p>';
    html += '<p><a class="button" href="#/1.1">1.1 ile başla</a></p></article>';
    mainEl.innerHTML = html;
  }

  function renderSoon(topic) {
    mainEl.innerHTML = '<article class="sheet"><p class="eyebrow">Konu ' + topic.n + "</p><h1>" + esc(topic.title) +
      '</h1><p class="code-line">' + esc(topic.code) + '</p><p class="soon-flag">Yakında</p></article>';
  }

  function stepOpen(saved, index) {
    if (review) return true;
    if (index === 0) return true;
    return !!(saved.steps[index].unlocked || saved.steps[index].solved || saved.steps[index - 1].solved);
  }

  function examplesOpen(saved) {
    return review || saved.examplesUnlocked || saved.steps[saved.steps.length - 1].solved;
  }

  function exerciseOpen(saved, index) {
    if (review) return true;
    if (!saved.steps[saved.steps.length - 1].solved || !saved.examplesSeen) return false;
    if (index === 0) return true;
    return !!(saved.exercises[index].unlocked || saved.exercises[index].solved || saved.exercises[index - 1].solved);
  }

  function distractor(answer) {
    var text = String(answer).trim();
    var candidates = [];
    if (/^\d+$/.test(text)) {
      var n = Number(text);
      [n + 1, Math.max(0, n - 1), n + 2, n === 0 ? 2 : 0].forEach(function (value) {
        candidates.push(String(value));
      });
    } else if (/^\d+(?:\s*,\s*\d+)+$/.test(text)) {
      var parts = text.split(/\s*,\s*/);
      var bumped = parts.slice();
      bumped[bumped.length - 1] = String(Number(bumped[bumped.length - 1]) + 1);
      candidates.push(bumped.join(","));
    } else {
      var pairs = {
        "çarpanları": "katları", "çarpanı": "katı", "çarpan": "kat", "katı": "çarpanı", "kat": "çarpan",
        "bölen": "kat", "asal": "bileşik", "bileşik": "asal", "asaldır": "bileşiktir",
        "evet": "hayır", "hayır": "evet", "doğru": "yanlış", "değildir": "olur",
        "olamaz": "olabilir", "olabilir": "olamaz", "kalansız": "kalanlı",
        "çift": "tek", "tek": "çift", "alınmaz": "alınır", "alınır": "alınmaz",
        "biter": "sürer", "eklenmez": "eklenir", "eklenir": "eklenmez",
        "aynı": "farklı", "almaz": "alır"
      };
      var key = text.toLocaleLowerCase("tr-TR");
      if (pairs[key]) candidates.push(pairs[key]);
      ["asal", "bileşik", "evet", "hayır", "çarpanı", "katı"].forEach(function (word) {
        candidates.push(word);
      });
      if (text.length > 18) candidates.push("Hayır, bu ilişki kurulamaz");
    }
    for (var i = 0; i < candidates.length; i += 1) {
      var candidate = String(candidates[i]);
      if (!candidate) continue;
      if (check.tight(candidate) === check.tight(text)) continue;
      if (check.judgeBlank(candidate, text).ok) continue;
      return candidate;
    }
    return /^\d+$/.test(text) ? String(Number(text) + 3) : "başka bir cevap";
  }

  function pairFor(answer) {
    var right = String(answer);
    var wrong = distractor(right);
    var seed = 0;
    for (var i = 0; i < right.length; i += 1) seed = (seed + right.charCodeAt(i) * (i + 1)) % 2;
    return seed ? [wrong, right] : [right, wrong];
  }

  function blankButton(answer, value, item, kind, stepIndex, blankIndex) {
    var filled = String(value || "").trim();
    var cls = "blank-spot";
    if (!filled) cls += " is-empty";
    if (item.solved || (item.last && item.last[blankIndex] && item.last[blankIndex].ok)) cls += " is-ok";
    if (item.last && item.last[blankIndex] && !item.last[blankIndex].ok) cls += " is-bad";
    var label = kind === "exercise" ? "Cevabın" : "Boşluk " + (blankIndex + 1);
    var open = openBlank && !item.solved && openBlank.kind === kind && openBlank.step === stepIndex && openBlank.slot === blankIndex;
    var pair = pairFor(answer);
    function choice(text) {
      return '<button type="button" class="pair" data-choice="1" data-kind="' + kind + '" data-step="' + stepIndex +
        '" data-slot="' + blankIndex + '" data-value="' + esc(text) + '">' + esc(text) + "</button>";
    }
    var spot = '<button type="button" class="' + cls + '" data-blank="1" data-kind="' + kind + '" data-step="' + stepIndex +
      '" data-slot="' + blankIndex + '" aria-label="' + label + '"' + (item.solved ? " disabled" : "") +
      '><span class="blank-value">' + esc(filled || "______") + "</span></button>";
    return '<span class="blank-hold' + (open ? " is-open" : "") + '">' +
      (open ? choice(pair[0]) : "") + spot + (open ? choice(pair[1]) : "") + "</span>";
  }

  function promptHtml(prompt, answers, item, kind, stepIndex) {
    var parts = prompt.split("□");
    var html = "";
    parts.forEach(function (part, index) {
      html += esc(part);
      if (index < answers.length) {
        html += blankButton(answers[index], (item.values || [])[index], item, kind, stepIndex, index);
      }
    });
    return html;
  }

  function feedbackHtml(item, hint, explain) {
    if (!item.wrong || (item.solved && item.wrong < 2)) return "";
    var reasons = (item.last || []).map(function (result) { return result && result.reason; });
    var extra = "";
    if (reasons.indexOf("missing") !== -1) extra = "Listede eksik eleman var. ";
    else if (reasons.indexOf("extra") !== -1) extra = "Listede fazla eleman var. ";
    else if (reasons.indexOf("order") !== -1) extra = "Sıralama istenen yönde olmalı. ";
    else if (reasons.indexOf("empty") !== -1) extra = "Bütün boşlukları doldur. ";
    if (item.wrong === 1) return '<p class="feedback hint">' + esc(extra + hint) + "</p>";
    return '<p class="feedback explain">' + esc(extra + explain) + "</p>";
  }

  function renderLeaf(leaf) {
    var saved = ensureLeaf(leaf.id);
    var solvedSteps = saved.steps.filter(function (step) { return step.solved; }).length;
    var diagram = diagrams[leaf.id];
    var figure = visual.render(diagram, solvedSteps);
    var html = '<article class="sheet">';
    html += '<p class="crumb">Çarpanlar ve Katlar · ' + esc(leaf.sectionId) + ". " + esc(leaf.sectionTitle) + "</p>";
    var spoken = NartesVoice.speak(leaf);
    html += "<h1>" + esc(leaf.id) + " " + esc(leaf.title) + "</h1>";
    html += '<p class="goal">' + esc(spoken.goal) + "</p>";
    if (spoken.gold) html += '<p class="gold">' + esc(spoken.gold) + "</p>";
    html += '<p class="meta">Kazanım ' + esc(leaf.kazanım) + " · Ön bilgi: " + esc(leaf.prior) + "</p>";
    html += '<div class="tools"><button type="button" class="ghost" id="review" aria-pressed="' + (review ? "true" : "false") + '">' +
      (review ? "Adım adım kilide dön" : "Tüm adımları göster") + "</button></div>";
    html += '<div class="video-slot"><button type="button" class="video-btn" id="video-note">Video hazırlanıyor</button><p class="video-msg" id="video-msg" hidden>Bu anlatım hazırlanıyor. Birazdan burada, seninle beraber izleyeceğiz.</p></div>';
    html += '<figure class="model">' + figure + "<figcaption>" + esc(leaf.visual) + "</figcaption></figure>";
    html += '<ol class="steps">';
    leaf.steps.forEach(function (step, index) {
      var open = stepOpen(saved, index);
      var item = saved.steps[index];
      var stateClass = item.solved ? "is-solved" : open ? "is-active" : "is-locked";
      var badge = item.solved ? "Doğru" : open ? "Sıradaki" : "Kilitli";
      html += '<li class="step ' + stateClass + '" id="adim-' + (index + 1) + '"><div class="kicker"><h2>Adım ' + (index + 1) +
        '</h2><span class="badge ' + (item.solved ? "ok" : open ? "wait" : "") + '">' + badge + "</span></div>";
      var talk = spoken.steps[index];
      if (!open) {
        html += '<p class="prompt is-waiting">' + esc(talk.prompt.replace(/□/g, "______")) + "</p>";
        html += "<p class=\"hint-line\">Bu cümle, üstteki adım bitince açılır.</p>";
      } else {
        html += '<p class="step-lead">' + esc(talk.lead) + "</p>";
        html += '<p class="prompt">' + promptHtml(talk.prompt, talk.answers, item, "step", index) + "</p>";
        html += '<p class="hint-line">Boşluğa dokun. Hemen üstünde ve altında iki seçenek çıkar; doğru olanı seç.</p>';
        if (item.solved) html += '<div class="actions"><button class="ghost" type="button" data-retry="step" data-index="' + index + '">Yeniden dene</button></div>';
        html += feedbackHtml(item, talk.hint, talk.explain);
      }
      html += "</li>";
    });
    html += "</ol>";

    html += '<section class="block"><h2>Çalışılmış örnekler</h2>';
    if (!examplesOpen(saved)) {
      html += '<p class="locked-card">Üç adımı da doğru yapınca çözülmüş örnekleri birlikte okuyacağız.</p>';
    } else {
      html += '<div class="examples">';
      leaf.examples.forEach(function (example, index) {
        var intro = index === 0 ? "Birinci örneği birlikte okuyalım. " : "İkinci örnek de aynı fikri pekiştirir. ";
        html += '<article class="example"><h3>Örnek ' + (index + 1) + "</h3><p>" + esc(intro + example) + "</p></article>";
      });
      html += "</div>";
      if (!saved.examplesSeen) html += '<div class="actions"><button type="button" class="primary" id="seen">Alıştırmalara geç</button></div>';
    }
    html += "</section>";

    html += '<section class="block"><h2>Alıştırmalar</h2><ol class="exercises">';
    leaf.exercises.forEach(function (exercise, index) {
      var open = exerciseOpen(saved, index);
      var item = saved.exercises[index];
      var stateClass = item.solved ? "is-solved" : open ? "is-active" : "is-locked";
      html += '<li class="exercise ' + stateClass + '"><div class="kicker"><h3>Alıştırma ' + (index + 1) +
        '</h3><span class="badge ' + (item.solved ? "ok" : "") + '">' + (item.solved ? "Doğru" : open ? "Sıradaki" : "Kilitli") + "</span></div>";
      if (!open) {
        var waiting = !saved.steps[saved.steps.length - 1].solved
          ? "Önce üç adımı doğru tamamla. Sonra alıştırmalar senin."
          : !saved.examplesSeen
            ? "Örnekleri birlikte okuyunca alıştırmaya geçeriz."
            : "Önceki alıştırma doğru olunca bu da açılır.";
        html += "<p>" + waiting + "</p>";
      } else {
        var hintEx = "Sık düşülen yer: " + (leaf.mistakes[0] || "Modele ve koşula yeniden bak.");
        var explainEx = "Beraber düzeltelim. " + leaf.mistakes.join(" ") + " Kontrol cümlesi: " + exercise.answerText;
        html += "<p>" + esc("Şimdi kalem sende. " + exercise.question) + "</p>";
        html += blankButton(exercise.answerText, (item.values || [])[0] || "", item, "exercise", index, 0);
        html += feedbackHtml(item, hintEx, explainEx);
      }
      html += "</li>";
    });
    html += "</ol></section>";

    var order = data.leafOrder;
    var place = order.indexOf(leaf.id);
    html += '<div class="leaf-foot">';
    if (place > 0) html += '<a href="#/' + order[place - 1] + '">Önceki yaprak</a>';
    if (isDone(saved) && place < order.length - 1) {
      var next = leaves[order[place + 1]];
      html += '<a class="button" href="#/' + next.id + '">Sonraki yaprak: ' + esc(next.id) + " " + esc(next.title) + "</a>";
    } else if (isDone(saved)) {
      html += "<p>Çarpanlar ve Katlar yaprakları bitti. Diğer konular yakında.</p>";
    } else {
      html += "<p>Bu yaprağı bitirince sonraki yaprak açılır. Acele etme.</p>";
    }
    html += "</div>";
    if (isDone(saved) && leaf.mistakes.length) {
      html += '<aside class="mistakes"><h2>Dikkat</h2><ul>' + leaf.mistakes.map(function (item) {
        return "<li>" + esc(item) + "</li>";
      }).join("") + "</ul></aside>";
    }
    html += "</article>";
    mainEl.innerHTML = html;
    bindLeaf(leaf, saved);
  }

  function bindLeaf(leaf, saved) {
    var reviewButton = document.getElementById("review");
    if (reviewButton) reviewButton.addEventListener("click", function () {
      review = !review;
      openBlank = null;
      render();
    });
    var seen = document.getElementById("seen");
    if (seen) seen.addEventListener("click", function () {
      saved.examplesSeen = true;
      save();
      render();
      reveal("adim-1");
    });
    mainEl.querySelectorAll("[data-retry]").forEach(function (button) {
      button.addEventListener("click", function () {
        var index = Number(button.getAttribute("data-index"));
        saved.steps[index].solved = false;
        saved.steps[index].wrong = 0;
        saved.steps[index].last = null;
        save();
        openBlank = null;
        render();
      });
    });
    var video = document.getElementById("video-note");
    var videoMsg = document.getElementById("video-msg");
    if (video && videoMsg) video.addEventListener("click", function () {
      videoMsg.hidden = false;
    });
  }

  function reveal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top - mainEl.getBoundingClientRect().top + mainEl.scrollTop - 16;
    mainEl.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function answersOf(leaf, index) {
    return NartesVoice.speak(leaf).steps[index].answers;
  }

  function allCorrect(values, answers, ordered) {
    return answers.every(function (answer, index) {
      return check.judgeBlank(values[index] || "", answer, { ordered: ordered }).ok;
    });
  }

  function pickChoice(kind, stepIndex, slot, value) {
    var leaf = leaves[route.leaf];
    if (!leaf) return;
    var saved = ensureLeaf(leaf.id);
    var ordered = kind === "step" && leaf.steps[stepIndex].ordered;
    if (kind === "exercise") {
      var exercise = leaf.exercises[stepIndex];
      var practice = saved.exercises[stepIndex];
      var good = check.judgeBlank(value, exercise.answerText, {}).ok;
      practice.values = [value];
      practice.last = [{ ok: good, reason: good ? "ok" : "mismatch" }];
      if (good) {
        practice.solved = true;
        if (practice.wrong < 2) practice.wrong = 0;
        if (saved.exercises[stepIndex + 1]) saved.exercises[stepIndex + 1].unlocked = true;
        openBlank = null;
        save();
        say(isDone(saved) ? "Yaprak tamam. Güzel çalıştın." : "Doğru. Sonraki alıştırma açıldı.");
        render();
        return;
      }
      practice.wrong = (practice.wrong || 0) + 1;
      if (practice.wrong >= 2) {
        practice.values = [exercise.answerText];
        practice.last = [{ ok: true, reason: "ok" }];
        practice.solved = true;
        practice.wrong = 2;
        if (saved.exercises[stepIndex + 1]) saved.exercises[stepIndex + 1].unlocked = true;
        openBlank = null;
        save();
        say("Beraber netleştirdik. Devam edebilirsin.");
        render();
        return;
      }
      openBlank = { kind: "exercise", step: stepIndex, slot: 0 };
      save();
      render();
      return;
    }
    var answers = answersOf(leaf, stepIndex);
    var item = saved.steps[stepIndex];
    var values = (item.values || []).slice();
    while (values.length < answers.length) values.push("");
    item.last = item.last || [];
    while (item.last.length < answers.length) item.last.push(null);
    var goodStep = check.judgeBlank(value, answers[slot], { ordered: ordered }).ok;
    if (!goodStep) {
      item.misses = item.misses || [];
      item.misses[slot] = (item.misses[slot] || 0) + 1;
      item.wrong = item.misses[slot];
      if (item.misses[slot] >= 2) {
        values[slot] = answers[slot];
        item.last[slot] = { ok: true, reason: "ok" };
      } else {
        values[slot] = value;
        item.last[slot] = { ok: false, reason: "mismatch" };
        item.values = values;
        openBlank = { kind: "step", step: stepIndex, slot: slot };
        save();
        render();
        return;
      }
    } else {
      values[slot] = value;
      item.last[slot] = { ok: true, reason: "ok" };
    }
    item.values = values;
    if (allCorrect(values, answers, ordered)) {
      item.solved = true;
      if (!item.wrong || item.wrong < 2) item.wrong = 0;
      if (saved.steps[stepIndex + 1]) saved.steps[stepIndex + 1].unlocked = true;
      if (stepIndex === leaf.steps.length - 1) saved.examplesUnlocked = true;
      openBlank = null;
      save();
      say(item.wrong >= 2 ? "Beraber netleştirdik. Sıradaki adım açıldı." : "Doğru. Sıradaki adım açıldı.");
      render();
      reveal("adim-" + (stepIndex + 2));
      return;
    }
    var next = values.findIndex(function (part, index) {
      return !check.judgeBlank(part || "", answers[index], { ordered: ordered }).ok;
    });
    openBlank = { kind: "step", step: stepIndex, slot: next < 0 ? slot : next };
    save();
    render();
  }

  function onReset() {
    if (!window.confirm("Bu tarayıcıdaki işaretler silinsin mi?")) return;
    state.leaves = {};
    save();
    render();
  }

  toggleEl.addEventListener("click", function () {
    var open = !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", open);
    toggleEl.setAttribute("aria-expanded", open ? "true" : "false");
    scrimEl.hidden = !open;
  });
  scrimEl.addEventListener("click", closeNav);
  mainEl.addEventListener("click", function (event) {
    var choice = event.target.closest("[data-choice]");
    if (choice) {
      pickChoice(choice.getAttribute("data-kind"), Number(choice.getAttribute("data-step")), Number(choice.getAttribute("data-slot")), choice.getAttribute("data-value"));
      return;
    }
    var spot = event.target.closest("[data-blank]");
    if (!spot || spot.disabled) return;
    var next = {
      kind: spot.getAttribute("data-kind"),
      step: Number(spot.getAttribute("data-step")),
      slot: Number(spot.getAttribute("data-slot"))
    };
    if (openBlank && openBlank.kind === next.kind && openBlank.step === next.step && openBlank.slot === next.slot) openBlank = null;
    else openBlank = next;
    render();
  });
  window.addEventListener("hashchange", function () {
    closeNav();
    openBlank = null;
    mainEl.scrollTop = 0;
    render();
  });

  if (!location.hash) location.hash = "#/1.1";
  else render();
})();
