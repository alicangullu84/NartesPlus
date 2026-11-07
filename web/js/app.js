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
  var sheet = null;
  window.NARTES_UI = "ogretmen-4";

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

  function blankButton(answer, value, item, kind, stepIndex, blankIndex) {
    var filled = String(value || "").trim();
    var cls = "blank-spot";
    if (!filled) cls += " is-empty";
    if (item.solved || (item.last && item.last[blankIndex] && item.last[blankIndex].ok)) cls += " is-ok";
    if (item.last && item.last[blankIndex] && !item.last[blankIndex].ok) cls += " is-bad";
    var label = kind === "exercise" ? "Cevabın" : "Boşluk " + (blankIndex + 1);
    return '<button type="button" class="' + cls + '" data-blank="1" data-kind="' + kind + '" data-step="' + stepIndex +
      '" data-slot="' + blankIndex + '"' + (item.solved ? " disabled" : "") + '><span class="blank-name">' + label +
      '</span><span class="blank-value">' + esc(filled || "dokun") + "</span></button>";
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
    if (!item.wrong || item.solved) return "";
    var reasons = (item.last || []).map(function (result) { return result.reason; });
    var extra = "";
    if (reasons.indexOf("missing") !== -1) extra = "Listede eksik eleman var. ";
    else if (reasons.indexOf("extra") !== -1) extra = "Listede fazla eleman var. ";
    else if (reasons.indexOf("order") !== -1) extra = "Sıralama istenen yönde olmalı. ";
    else if (reasons.indexOf("empty") !== -1) extra = "Bütün boşlukları doldur. ";
    if (item.wrong === 1) return '<p class="feedback hint"><strong>Bir kez daha bak.</strong> ' + esc(extra + hint) + "</p>";
    return '<p class="feedback explain"><strong>Beraber netleştirelim.</strong> ' + esc(extra + explain) + "</p>";
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
    html += '<div class="video-slot"><span class="play" aria-hidden="true">▶</span><div><strong>Video yakında</strong><p>Bu yaprak için kısa konu videosu henüz yok.</p></div></div>';
    html += '<figure class="model">' + figure + "<figcaption>" + esc(leaf.visual) + "</figcaption></figure>";
    html += '<ol class="steps">';
    leaf.steps.forEach(function (step, index) {
      var open = stepOpen(saved, index);
      var item = saved.steps[index];
      var stateClass = item.solved ? "is-solved" : open ? "is-active" : "is-locked";
      var badge = item.solved ? "Doğru" : open ? "Sıradaki" : "Kilitli";
      html += '<li class="step ' + stateClass + '" id="adim-' + (index + 1) + '"><div class="kicker"><h2>Adım ' + (index + 1) +
        '</h2><span class="badge ' + (item.solved ? "ok" : open ? "wait" : "") + '">' + badge + "</span></div>";
      if (!open) {
        html += "<p>Bu adım kilitli. Üstteki doğru olunca açılır; o zaman sıra sende.</p>";
      } else {
        var talk = spoken.steps[index];
        html += '<p class="step-lead">' + esc(talk.lead) + "</p>";
        html += '<p class="prompt">' + promptHtml(talk.prompt, step.answers, item, "step", index) + "</p>";
        html += '<p class="hint-line">Boşluğa dokun. Küçük pencereden yaz veya bir seçeneğe bas.</p>';
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
      closeSheet();
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
        closeSheet();
        render();
      });
    });
  }

  function reveal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top - mainEl.getBoundingClientRect().top + mainEl.scrollTop - 16;
    mainEl.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function choicesFor(answer) {
    if (String(answer).length > 28) return [];
    var options = [String(answer)];
    function add(value) {
      if (options.length >= 4) return;
      var text = String(value);
      if (!text) return;
      if (options.some(function (item) { return check.tight(item) === check.tight(text); })) return;
      if (check.judgeBlank(text, answer).ok && check.tight(text) !== check.tight(String(answer))) return;
      options.push(text);
    }
    if (/^\d+$/.test(String(answer).trim())) {
      var n = Number(answer);
      add(n + 1);
      add(Math.max(0, n - 1));
      add(n + 2);
    } else if (String(answer).length <= 28) {
      ["çarpanı", "katı", "bölen", "asal", "bileşik", "evet", "hayır", "doğru", "değildir", "olamaz", "kalansız", "çift", "alınmaz", "alınır", "biter", "eklenmez", "aynı"].forEach(add);
    }
    var seed = String(answer);
    var hash = 0;
    for (var i = 0; i < seed.length; i += 1) hash = (hash * 33 + seed.charCodeAt(i)) >>> 0;
    var copy = options.slice();
    for (var j = copy.length - 1; j > 0; j -= 1) {
      hash = (hash * 1664525 + 1013904223) >>> 0;
      var k = hash % (j + 1);
      var tmp = copy[j];
      copy[j] = copy[k];
      copy[k] = tmp;
    }
    return copy;
  }

  function openSheet(leafId, kind, stepIndex, blankIndex) {
    var leaf = leaves[leafId];
    var saved = ensureLeaf(leafId);
    var item = kind === "step" ? saved.steps[stepIndex] : saved.exercises[stepIndex];
    if (!item || item.solved) return;
    var answer = kind === "step" ? leaf.steps[stepIndex].answers[blankIndex] : leaf.exercises[stepIndex].answerText;
    var current = (item.values || [])[blankIndex] || "";
    sheet = { leafId: leafId, kind: kind, step: stepIndex, blank: blankIndex, answer: answer };
    var box = document.getElementById("answer-sheet");
    box.hidden = false;
    document.getElementById("sheet-title").textContent = kind === "exercise" ? "Cevabın" : "Boşluk " + (blankIndex + 1);
    document.getElementById("sheet-ask").textContent = "Yaz veya aşağıdaki seçeneklerden birine bas.";
    document.getElementById("sheet-input").value = current;
    var choices = document.getElementById("sheet-choices");
    choices.innerHTML = "";
    choicesFor(answer).forEach(function (choice) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.textContent = choice;
      button.addEventListener("click", function () {
        document.getElementById("sheet-input").value = choice;
        confirmSheet();
      });
      choices.appendChild(button);
    });
    var keypad = document.getElementById("sheet-keypad");
    var showKeys = /^\d+$/.test(String(answer).trim()) || /^[\d,]+$/.test(String(answer).replace(/\s/g, ""));
    keypad.hidden = !showKeys;
    keypad.innerHTML = "";
    if (showKeys) {
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach(function (key) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "key";
        button.textContent = key;
        button.addEventListener("click", function () {
          var input = document.getElementById("sheet-input");
          input.value += key;
        });
        keypad.appendChild(button);
      });
      if (String(answer).indexOf(",") !== -1) {
        var comma = document.createElement("button");
        comma.type = "button";
        comma.className = "key";
        comma.textContent = ",";
        comma.addEventListener("click", function () {
          document.getElementById("sheet-input").value += ",";
        });
        keypad.appendChild(comma);
      }
      var back = document.createElement("button");
      back.type = "button";
      back.className = "key";
      back.textContent = "sil";
      back.addEventListener("click", function () {
        var input = document.getElementById("sheet-input");
        input.value = input.value.slice(0, -1);
      });
      keypad.appendChild(back);
    }
    var spoken = NartesVoice.speak(leaf);
    var note = "";
    var tone = "";
    if (item.wrong >= 2) {
      note = kind === "step" ? spoken.steps[stepIndex].explain : ("Beraber düzeltelim. " + leaf.mistakes.join(" "));
      tone = "explain";
    } else if (item.wrong === 1) {
      note = kind === "step" ? spoken.steps[stepIndex].hint : ("Sık düşülen yer: " + (leaf.mistakes[0] || "Modele yeniden bak."));
      tone = "hint";
    }
    setSheetFeedback(note, tone);
  }

  function setSheetFeedback(message, tone) {
    var node = document.getElementById("sheet-feedback");
    node.className = "sheet-feedback" + (tone ? " " + tone : "");
    node.textContent = message || "";
  }

  function closeSheet() {
    sheet = null;
    document.getElementById("answer-sheet").hidden = true;
  }

  function confirmSheet() {
    if (!sheet) return;
    var leaf = leaves[sheet.leafId];
    var saved = ensureLeaf(sheet.leafId);
    var draft = document.getElementById("sheet-input").value;
    if (!String(draft || "").trim()) {
      setSheetFeedback("Önce bir cevap yaz ya da bir seçeneğe bas.", "hint");
      return;
    }
    if (sheet.kind === "exercise") {
      gradeExercise(leaf, saved, sheet.step, draft);
      return;
    }
    var count = leaf.steps[sheet.step].answers.length;
    var values = (saved.steps[sheet.step].values || []).slice();
    while (values.length < count) values.push("");
    values[sheet.blank] = draft;
    saved.steps[sheet.step].values = values;
    var missing = -1;
    for (var i = 0; i < values.length; i += 1) {
      if (!String(values[i] || "").replace(/\s/g, "")) {
        missing = i;
        break;
      }
    }
    if (missing !== -1) {
      save();
      var leafId = sheet.leafId;
      var stepIndex = sheet.step;
      render();
      openSheet(leafId, "step", stepIndex, missing);
      if (!document.getElementById("sheet-feedback").textContent) {
        setSheetFeedback("Bu boşluğu aldım. Şimdi diğer boşluğu da doldur.", "hint");
      }
      return;
    }
    gradeStep(leaf, saved, sheet.step, values);
  }

  function gradeStep(leaf, saved, index, values) {
    var step = leaf.steps[index];
    var item = saved.steps[index];
    var spoken = NartesVoice.speak(leaf);
    item.values = values.slice();
    var result = check.judgeAll(item.values, step.answers, { ordered: step.ordered });
    item.last = result.blanks;
    if (result.ok) {
      item.solved = true;
      item.wrong = 0;
      if (saved.steps[index + 1]) saved.steps[index + 1].unlocked = true;
      if (index === leaf.steps.length - 1) saved.examplesUnlocked = true;
      save();
      closeSheet();
      say("Doğru. Sıradaki adım açıldı.");
      render();
      reveal(index + 1 < leaf.steps.length ? "adim-" + (index + 2) : "adim-" + (index + 1));
      return;
    }
    item.wrong += 1;
    save();
    var bad = result.blanks.findIndex(function (blank) { return !blank.ok; });
    var message = item.wrong === 1 ? spoken.steps[index].hint : spoken.steps[index].explain;
    var tone = item.wrong === 1 ? "hint" : "explain";
    render();
    openSheet(leaf.id, "step", index, bad < 0 ? 0 : bad);
    setSheetFeedback(message, tone);
    window.__lastFeedback = message;
    say(message);
  }

  function gradeExercise(leaf, saved, index, value) {
    var exercise = leaf.exercises[index];
    var item = saved.exercises[index];
    item.values = [value];
    var result = check.judgeBlank(value, exercise.answerText, {});
    item.last = [result];
    if (result.ok) {
      item.solved = true;
      item.wrong = 0;
      if (saved.exercises[index + 1]) saved.exercises[index + 1].unlocked = true;
      save();
      closeSheet();
      say(isDone(saved) ? "Yaprak tamam. Güzel çalıştın." : "Doğru. Sonraki alıştırma açıldı.");
      render();
      return;
    }
    item.wrong += 1;
    save();
    var hint = "Sık düşülen yer: " + (leaf.mistakes[0] || "Modele yeniden bak.");
    var explain = "Beraber düzeltelim. " + leaf.mistakes.join(" ") + " Kontrol cümlesi: " + exercise.answerText;
    var message = item.wrong === 1 ? hint : explain;
    render();
    openSheet(leaf.id, "exercise", index, 0);
    setSheetFeedback(message, item.wrong === 1 ? "hint" : "explain");
    say(message);
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
    var spot = event.target.closest("[data-blank]");
    if (!spot || spot.disabled) return;
    openSheet(route.leaf, spot.getAttribute("data-kind"), Number(spot.getAttribute("data-step")), Number(spot.getAttribute("data-slot")));
  });
  document.getElementById("sheet-ok").addEventListener("click", confirmSheet);
  document.getElementById("sheet-close").addEventListener("click", closeSheet);
  document.addEventListener("keydown", function (event) {
    if (!sheet || document.getElementById("answer-sheet").hidden) return;
    var input = document.getElementById("sheet-input");
    if (event.key === "Escape") { closeSheet(); return; }
    if (event.key === "Enter") { event.preventDefault(); confirmSheet(); return; }
    if (document.activeElement === input) return;
    if (/^[0-9]$/.test(event.key)) { input.value += event.key; event.preventDefault(); }
    if (event.key === "Backspace") { input.value = input.value.slice(0, -1); event.preventDefault(); }
  });
  window.addEventListener("hashchange", function () {
    closeNav();
    closeSheet();
    mainEl.scrollTop = 0;
    render();
  });

  if (!location.hash) location.hash = "#/1.1";
  else render();
})();
