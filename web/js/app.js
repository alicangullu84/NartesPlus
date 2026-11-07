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
  var focusId = "";

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
    if (focusId) {
      var field = document.getElementById(focusId);
      if (field) field.focus();
      focusId = "";
    }
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

  function fieldHtml(answer, index, value, item, prefix) {
    var wide = String(answer).length > 18;
    var numeric = /^\d+$/.test(String(answer).trim());
    var cls = "";
    if (item.solved || (item.last && item.last[index] && item.last[index].ok)) cls = "is-ok";
    if (item.last && item.last[index] && !item.last[index].ok) cls = "is-bad";
    var size = Math.min(22, Math.max(3, String(answer).length + 1));
    return '<label class="blank' + (wide ? " wide" : "") + '"><span class="blank-name">Boşluk ' + (index + 1) +
      '</span><input id="' + prefix + "-" + index + '" value="' + esc(value || "") + '" size="' + size + '" class="' + cls + '"' +
      (numeric ? ' inputmode="numeric"' : "") + (item.solved ? " readonly" : "") +
      ' autocomplete="off" spellcheck="false" aria-label="Boşluk ' + (index + 1) + '"></label>';
  }

  function promptHtml(prompt, answers, item, prefix) {
    var parts = prompt.split("□");
    var html = "";
    parts.forEach(function (part, index) {
      html += esc(part);
      if (index < answers.length) html += fieldHtml(answers[index], index, (item.values || [])[index], item, prefix);
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
    if (item.wrong === 1) return '<p class="feedback hint"><strong>İpucu.</strong> ' + esc(extra + hint) + "</p>";
    return '<p class="feedback explain"><strong>Kısa açıklama.</strong> ' + esc(extra + explain) + "</p>";
  }

  function renderLeaf(leaf) {
    var saved = ensureLeaf(leaf.id);
    var solvedSteps = saved.steps.filter(function (step) { return step.solved; }).length;
    var diagram = diagrams[leaf.id];
    var figure = visual.render(diagram, solvedSteps);
    var html = '<article class="sheet">';
    html += '<p class="crumb">Çarpanlar ve Katlar · ' + esc(leaf.sectionId) + ". " + esc(leaf.sectionTitle) + "</p>";
    html += "<h1>" + esc(leaf.id) + " " + esc(leaf.title) + "</h1>";
    html += '<p class="goal">' + esc(leaf.goal) + "</p>";
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
        html += "<p>Bu adım, önceki cevap doğru olunca açılır.</p>";
      } else {
        html += '<form data-kind="step" data-index="' + index + '"><p class="prompt">' +
          promptHtml(step.prompt, step.answers, item, "s" + index) + "</p>";
        html += '<p class="hint-line">Tüm boşluklar birlikte kontrol edilir.</p>';
        if (!item.solved) html += '<div class="actions"><button class="primary" type="submit">Kontrol et</button></div>';
        else html += '<div class="actions"><button class="ghost" type="button" data-retry="step" data-index="' + index + '">Yeniden dene</button></div>';
        html += feedbackHtml(item, step.hint, step.explain);
        html += "</form>";
      }
      html += "</li>";
    });
    html += "</ol>";

    html += '<section class="block"><h2>Çalışılmış örnekler</h2>';
    if (!examplesOpen(saved)) {
      html += '<p class="locked-card">Üç adım doğru olunca örnekler açılır.</p>';
    } else {
      html += '<div class="examples">';
      leaf.examples.forEach(function (example, index) {
        html += '<article class="example"><h3>Örnek ' + (index + 1) + "</h3><p>" + esc(example) + "</p></article>";
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
          ? "Üç adım doğru olunca açılır."
          : !saved.examplesSeen
            ? "Örnekler incelenince açılır."
            : "Önceki alıştırma doğru olunca açılır.";
        html += "<p>" + waiting + "</p>";
      }
      else {
        var hint = leaf.mistakes[0] || "Görsel modele ve koşullara yeniden bak.";
        var explain = leaf.mistakes.join(" ") + " Kontrol: " + exercise.answerText;
        html += '<form data-kind="exercise" data-index="' + index + '"><p>' + esc(exercise.question) + "</p>";
        html += '<label class="blank wide"><span class="blank-name">Cevabın</span><input id="e' + index +
          '" value="' + esc((item.values || [])[0] || "") + '" class="' + (item.solved ? "is-ok" : item.last && item.last[0] && !item.last[0].ok ? "is-bad" : "") +
          '"' + (item.solved ? " readonly" : "") + ' autocomplete="off" aria-label="Cevabın"></label>';
        if (!item.solved) html += '<div class="actions"><button class="primary" type="submit">Kontrol et</button></div>';
        html += feedbackHtml(item, hint, explain);
        html += "</form>";
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
      html += "<p>Sonraki yaprak, bu yaprak tamamlanınca açılır.</p>";
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
      render();
    });
    var seen = document.getElementById("seen");
    if (seen) seen.addEventListener("click", function () {
      saved.examplesSeen = true;
      save();
      focusId = "e0";
      render();
    });
    mainEl.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var index = Number(form.getAttribute("data-index"));
        if (form.getAttribute("data-kind") === "step") submitStep(leaf, saved, index, form);
        else submitExercise(leaf, saved, index, form);
      });
    });
    mainEl.querySelectorAll("[data-retry]").forEach(function (button) {
      button.addEventListener("click", function () {
        var index = Number(button.getAttribute("data-index"));
        saved.steps[index].solved = false;
        saved.steps[index].wrong = 0;
        saved.steps[index].last = null;
        save();
        focusId = "s" + index + "-0";
        render();
      });
    });
  }

  function readValues(form) {
    return Array.prototype.map.call(form.querySelectorAll("input"), function (input) {
      return input.value;
    });
  }

  function submitStep(leaf, saved, index, form) {
    var step = leaf.steps[index];
    var item = saved.steps[index];
    item.values = readValues(form);
    var result = check.judgeAll(item.values, step.answers, { ordered: step.ordered });
    item.last = result.blanks;
    if (result.ok) {
      item.solved = true;
      item.wrong = 0;
      if (saved.steps[index + 1]) saved.steps[index + 1].unlocked = true;
      if (index === leaf.steps.length - 1) saved.examplesUnlocked = true;
      save();
      say("Doğru. Sonraki adım açıldı.");
      focusId = saved.steps[index + 1] ? "s" + (index + 1) + "-0" : "";
      render();
      var next = document.getElementById("adim-" + (index + 2));
      if (next && next.scrollIntoView) next.scrollIntoView({ block: "nearest" });
      return;
    }
    item.wrong += 1;
    save();
    var firstBad = result.blanks.findIndex(function (blank) { return !blank.ok; });
    focusId = "s" + index + "-" + Math.max(0, firstBad);
    say(item.wrong === 1 ? "İpucu. " + step.hint : "Kısa açıklama. " + step.explain);
    render();
  }

  function submitExercise(leaf, saved, index, form) {
    var exercise = leaf.exercises[index];
    var item = saved.exercises[index];
    item.values = readValues(form);
    var result = check.judgeBlank(item.values[0] || "", exercise.answerText, {});
    item.last = [result];
    if (result.ok) {
      item.solved = true;
      item.wrong = 0;
      if (saved.exercises[index + 1]) saved.exercises[index + 1].unlocked = true;
      save();
      say(isDone(saved) ? "Yaprak tamam." : "Doğru. Sonraki alıştırma açıldı.");
      focusId = saved.exercises[index + 1] ? "e" + (index + 1) : "";
      render();
      return;
    }
    item.wrong += 1;
    save();
    focusId = "e" + index;
    var hint = leaf.mistakes[0] || "Görsel modele yeniden bak.";
    say(item.wrong === 1 ? "İpucu. " + hint : "Kısa açıklama.");
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
  window.addEventListener("hashchange", function () {
    closeNav();
    mainEl.scrollTop = 0;
    render();
  });

  if (!location.hash) location.hash = "#/1.1";
  else render();
})();
