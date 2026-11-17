/* ==========================================================================
   Nartes+ • 1–12. Sınıf Otomatik İlerlemeli Karşılama & Hazır Bulunuşluk Akışı
   - 1–12. Sınıf Özel Karakter & Renk Seçimi + 8 (Okul/LGS) & 12 (Okul/YKS)
   - Sesli (ElevenLabs / Kızagan) & Sessiz Mod + "İleri"siz Otomatik Geçiş
   - Sıfır "$" KaTeX Matematik Dizgisi & 3 Yetkinlik (İşlem, Muhakeme, Modelleme)
   ========================================================================== */
(function () {
  "use strict";

  const STORAGE_KEY = "nartes_readiness_v4";
  const LEGACY_PROFILE_KEY = "nartes_readiness_v3";
  const BRIDGE_DONE_KEY = "nartes_bridges_done_v2";
  const TRIAL_UNLOCK_KEY = "matflow_student_trial_unlocked_v1";
  const TOTAL_STEPS = 11;
  const LETTERS = ["A", "B", "C", "D"];

  const COMP_META = {
    islem: {
      key: "islem",
      icon: "🧮",
      label: "İşlem Becerisi",
      badge: "🧮 İşlem Becerisi"
    },
    muhakeme: {
      key: "muhakeme",
      icon: "🧠",
      label: "Mantık ve Muhakeme",
      badge: "🧠 Mantık ve Muhakeme"
    },
    modelleme: {
      key: "modelleme",
      icon: "📐",
      label: "Modelleme Yetkinliği",
      badge: "📐 Modelleme Yetkinliği"
    }
  };

  const PACE_OPTIONS = [
    { minutes: 10, label: "Günde 10 dk", tag: "Hafif Isınma", desc: "Kısa ama düzenli adım" },
    { minutes: 15, label: "Günde 15 dk", tag: "Önerilen Ritim", desc: "Kalıcı gelişim dengesi" },
    { minutes: 25, label: "Günde 25 dk", tag: "Hızlı İlerleme", desc: "Hedef odaklı yoğun tempo" }
  ];

  const MOTIVATION_OPTIONS = [
    { id: "exam_boost", icon: "🚀", title: "Konuları sağlam öğrenip sınavlarda hızlanmak" },
    { id: "basics", icon: "🌱", title: "Eksik temelleri kapatıp özgüven kazanmak" },
    { id: "top_goal", icon: "🏆", title: "Yeni nesil sorularda zirveye oynamak" }
  ];

  // Sınıf ızgarasında gösterilecek 12 kart (8 ve 12 çift yol çekmecesi açar)
  const GRADE_GRID_ORDER = [
    { grade: 1, directTrack: "1" },
    { grade: 2, directTrack: "2" },
    { grade: 3, directTrack: "3" },
    { grade: 4, directTrack: "4" },
    { grade: 5, directTrack: "5" },
    { grade: 6, directTrack: "6" },
    { grade: 7, directTrack: "7" },
    { grade: 8, dualTracks: ["8_okul", "8_lgs"] },
    { grade: 9, directTrack: "9" },
    { grade: 10, directTrack: "10" },
    { grade: 11, directTrack: "11" },
    { grade: 12, dualTracks: ["12_okul", "12_yks"] }
  ];

  function getCurriculumDb() {
    return window.NARTES_GRADES_1_12 || { tracks: [], readinessByTrack: {}, bridges: [], unitsByTrack: {} };
  }

  function getTracksList() {
    const db = getCurriculumDb();
    return Array.isArray(db.tracks) ? db.tracks : [];
  }

  function getTrackMeta(trackId) {
    const list = getTracksList();
    return list.find(t => t.trackId === trackId) || list.find(t => t.trackId === "8_lgs") || list[0] || {
      trackId: trackId || "8_lgs",
      grade: 8,
      stage: "ortaokul",
      title: "8. Sınıf LGS",
      shortBadge: "8. Sınıf • LGS",
      curriculumBadge: "2018 MEB + LGS",
      desc: "LGS yeni nesil matematik hazırlığı",
      characterName: "LGS Roketi",
      characterTitle: "Strateji Pilotu",
      accent: "#6366F1",
      accentDark: "#3730A3",
      accentSoft: "#EEF2FF",
      accentBorder: "#A5B4FC",
      renderCharacterSvg: () => ""
    };
  }

  function getBridgesList() {
    const db = getCurriculumDb();
    return Array.isArray(db.bridges) ? db.bridges : [];
  }

  function getTrackQuestions(trackId) {
    const db = getCurriculumDb();
    const map = db.readinessByTrack || {};
    return map[trackId] || map["8_lgs"] || [];
  }

  function escHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function playSfx(kind) {
    try {
      if (window.NartesApp && typeof window.NartesApp.playSfx === "function") {
        window.NartesApp.playSfx(kind);
        return;
      }
      if (window.NartesSFX && typeof window.NartesSFX.play === "function") {
        window.NartesSFX.play(kind);
      }
    } catch (_) {}
  }

  function triggerBurst(anchorEl) {
    try {
      if (anchorEl && window.NartesApp && typeof window.NartesApp.spawnBurst === "function") {
        window.NartesApp.spawnBurst(anchorEl);
      }
    } catch (_) {}
  }

  function stopVoiceNow() {
    try {
      if (window.NartesMentor && typeof window.NartesMentor.stopSpeaking === "function") {
        window.NartesMentor.stopSpeaking();
      }
    } catch (_) {}
  }

  function speakText(text) {
    if (!sessionState.voiceEnabled) return Promise.resolve(false);
    try {
      if (window.NartesMentor && typeof window.NartesMentor.speak === "function") {
        return window.NartesMentor.speak(text);
      }
    } catch (_) {}
    return Promise.resolve(false);
  }

  function applyMath(el) {
    if (!el) return;
    try {
      if (typeof window.renderMathInElement === "function") {
        window.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false,
          strict: false
        });
      }
      if (window.NartesMentor && typeof window.NartesMentor.renderMathInside === "function") {
        window.NartesMentor.renderMathInside(el);
      }
      if (window.NartesApp && typeof window.NartesApp.applyKaTeX === "function") {
        window.NartesApp.applyKaTeX(el);
      }
    } catch (_) {}
  }

  function getAvatarHtml(mood) {
    if (window.NartesMentor && typeof window.NartesMentor.getNatiAvatarHtml === "function") {
      return window.NartesMentor.getNatiAvatarHtml(mood || "greeting", "wf-nati-avatar", true);
    }
    return `<img src="assets/nati/nati_greeting.png" alt="Nati" class="wf-nati-fallback">`;
  }

  function normalizeTrackKey(raw) {
    if (!raw) return "8_lgs";
    const s = String(raw).trim();
    const valid = new Set(getTracksList().map(t => t.trackId));
    if (valid.has(s)) return s;
    if (s === "8") return "8_lgs";
    if (s === "12") return "12_yks";
    return "8_lgs";
  }

  function getProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          parsed.trackId = normalizeTrackKey(parsed.trackId || parsed.grade);
          return parsed;
        }
      }
      const oldRaw = localStorage.getItem(LEGACY_PROFILE_KEY);
      if (oldRaw) {
        const old = JSON.parse(oldRaw);
        if (old && typeof old === "object") {
          return {
            ...old,
            trackId: normalizeTrackKey(old.trackId || old.grade)
          };
        }
      }
      return null;
    } catch (_) {
      return null;
    }
  }

  function saveProfile(profile) {
    try {
      const clean = {
        ...profile,
        trackId: normalizeTrackKey(profile.trackId || profile.grade)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    } catch (_) {}
  }

  function getBridgeDoneMap() {
    try {
      const raw = localStorage.getItem(BRIDGE_DONE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function markBridgeDone(bridgeId) {
    try {
      const map = getBridgeDoneMap();
      map[bridgeId] = true;
      localStorage.setItem(BRIDGE_DONE_KEY, JSON.stringify(map));
    } catch (_) {}
  }

  function isBridgeDone(bridgeId) {
    return Boolean(getBridgeDoneMap()[bridgeId]);
  }

  function getRecommendedBridges() {
    const prof = getProfile();
    const allBridges = getBridgesList();
    const track = getTrackMeta(prof ? prof.trackId : "8_lgs");
    const staged = allBridges.filter(b => !track.stage || b.stage === track.stage);
    if (prof && Array.isArray(prof.recommendedBridges) && prof.recommendedBridges.length) {
      const matched = prof.recommendedBridges
        .map(id => allBridges.find(b => b.id === id))
        .filter(b => b && (!track.stage || b.stage === track.stage));
      if (matched.length) return matched;
    }
    return (staged.length ? staged : allBridges).slice(0, 3);
  }

  const savedInit = getProfile();
  let sessionState = {
    step: 1,
    name: (savedInit && savedInit.name) || "",
    voiceEnabled: savedInit && typeof savedInit.voiceEnabled === "boolean"
      ? savedInit.voiceEnabled
      : (window.NartesMentor && typeof window.NartesMentor.isVoiceEnabled === "function" ? window.NartesMentor.isVoiceEnabled() : true),
    voiceChosenInStep1: false,
    selectedGradeBucket: (savedInit && Number(savedInit.grade)) || null,
    trackId: normalizeTrackKey(savedInit && (savedInit.trackId || savedInit.grade)),
    dailyMinutes: (savedInit && savedInit.dailyMinutes) || 15,
    motivation: (savedInit && savedInit.motivation) || "exam_boost",
    diagAnswers: {}
  };

  let activeAutoTimer = null;
  let activeSpeechSeq = 0;
  let lastSpokenPromptKey = "";
  let bridgeState = { bridgeId: null, step: 0, chosenOptId: null, solved: false };

  function clearAutoAdvance() {
    if (activeAutoTimer) {
      clearTimeout(activeAutoTimer);
      activeAutoTimer = null;
    }
    activeSpeechSeq += 1;
  }

  function ensureOverlaysInDom() {
    let welcomeOv = document.getElementById("natiWelcomeOverlay");
    if (!welcomeOv) {
      welcomeOv = document.createElement("div");
      welcomeOv.id = "natiWelcomeOverlay";
      welcomeOv.className = "wf-overlay";
      welcomeOv.hidden = true;
      document.body.appendChild(welcomeOv);
    }
    let bridgeMod = document.getElementById("natiBridgeModal");
    if (!bridgeMod) {
      bridgeMod = document.createElement("div");
      bridgeMod.id = "natiBridgeModal";
      bridgeMod.className = "wf-bridge-modal";
      bridgeMod.hidden = true;
      document.body.appendChild(bridgeMod);
    }
    return { welcomeOv, bridgeMod };
  }

  function computeReadinessSummary() {
    const track = getTrackMeta(sessionState.trackId);
    const qs = getTrackQuestions(track.trackId);
    const stats = {
      islem: { correct: 0, total: 0 },
      muhakeme: { correct: 0, total: 0 },
      modelleme: { correct: 0, total: 0 }
    };
    const recBridgeSet = new Set();

    qs.forEach(q => {
      const bucket = stats[q.competency] || stats.islem;
      bucket.total += 1;
      const ans = sessionState.diagAnswers[q.id];
      if (ans && ans.status === "correct") {
        bucket.correct += 1;
      } else if (ans && q.bridgeId) {
        recBridgeSet.add(q.bridgeId);
      }
    });

    if (recBridgeSet.size === 0) {
      const stageBridges = getBridgesList().filter(b => b.stage === track.stage);
      const fallbackBridge = stageBridges[0] || getBridgesList()[0];
      if (fallbackBridge) recBridgeSet.add(fallbackBridge.id);
    }

    const competencies = ["islem", "muhakeme", "modelleme"].map(key => {
      const meta = COMP_META[key];
      const st = stats[key];
      const pct = st.total > 0 ? Math.max(35, Math.round((st.correct / st.total) * 100)) : 70;
      const strong = st.correct === st.total && st.total > 0;
      const statusText = strong ? "Güçlü Hazır Bulunuşluk" : "Köprülerle Desteklenecek";
      return {
        key,
        icon: meta.icon,
        label: meta.label,
        correct: st.correct,
        total: st.total,
        pct,
        strong,
        statusText
      };
    });

    const totalCorrect = Object.values(sessionState.diagAnswers).filter(a => a && a.status === "correct").length;
    return { competencies, totalCorrect, recommendedIds: Array.from(recBridgeSet) };
  }

  function saveCurrentProfile(trialStarted) {
    const track = getTrackMeta(sessionState.trackId);
    const { competencies, totalCorrect, recommendedIds } = computeReadinessSummary();
    const profile = {
      version: 4,
      completed: Boolean(trialStarted),
      trialStarted: Boolean(trialStarted),
      name: String(sessionState.name || "").trim(),
      voiceEnabled: Boolean(sessionState.voiceEnabled),
      grade: track.grade,
      trackId: track.trackId,
      trackLabel: track.shortBadge || track.title,
      curriculumBadge: track.curriculumBadge || "",
      dailyMinutes: sessionState.dailyMinutes,
      motivation: sessionState.motivation,
      diagScore: totalCorrect,
      diagTotal: getTrackQuestions(track.trackId).length || 6,
      competencies,
      recommendedBridges: recommendedIds,
      updatedAt: Date.now()
    };
    saveProfile(profile);
    return profile;
  }

  function finishWelcomeAndStartTrial() {
    clearAutoAdvance();
    const profile = saveCurrentProfile(true);
    const track = getTrackMeta(profile.trackId);

    if (window.NartesMentor) {
      if (profile.name && typeof window.NartesMentor.setStudentName === "function") {
        window.NartesMentor.setStudentName(profile.name);
      }
      if (typeof window.NartesMentor.setVoiceEnabled === "function") {
        window.NartesMentor.setVoiceEnabled(profile.voiceEnabled, false);
      }
    }

    try {
      localStorage.setItem(TRIAL_UNLOCK_KEY, "1");
    } catch (_) {}

    const { welcomeOv } = ensureOverlaysInDom();
    welcomeOv.hidden = true;
    document.body.classList.remove("wf-open");

    if (window.NartesApp && typeof window.NartesApp.syncGradeTrack === "function") {
      window.NartesApp.syncGradeTrack(track.trackId);
    }

    playSfx("celebrate");
    if (profile.voiceEnabled) {
      speakText(`${track.title} çalışma yolun hazır! İyi dersler!`);
    }

    if (window.NartesApp && typeof window.NartesApp.activateStudentTrial === "function") {
      window.NartesApp.activateStudentTrial();
    } else if (typeof window.__nartesActivateTrialUnlock === "function") {
      window.__nartesActivateTrialUnlock();
    } else {
      const gate = document.getElementById("authGateOverlay");
      if (gate) gate.hidden = true;
      document.body.classList.remove("auth-locked");
      if (window.NartesApp && typeof window.NartesApp.renderBrilliantPathView === "function") {
        window.NartesApp.renderBrilliantPathView();
      }
    }
  }

  function closeWelcomeOnly() {
    clearAutoAdvance();
    stopVoiceNow();
    saveCurrentProfile(Boolean(getProfile() && getProfile().trialStarted));
    const { welcomeOv } = ensureOverlaysInDom();
    welcomeOv.hidden = true;
    document.body.classList.remove("wf-open");
    if (window.NartesApp && typeof window.NartesApp.renderBrilliantPathView === "function") {
      window.NartesApp.renderBrilliantPathView();
    }
  }

  function advanceToStep(nextStep) {
    clearAutoAdvance();
    stopVoiceNow();
    const clamped = Math.max(1, Math.min(TOTAL_STEPS, nextStep));
    if (sessionState.step !== clamped) {
      lastSpokenPromptKey = "";
    }
    sessionState.step = clamped;
    renderWelcomeStep();
  }

  function scheduleAutoNext(targetStep, ms, waitForSpeechPromise) {
    clearAutoAdvance();
    const mySeq = activeSpeechSeq;
    const go = () => {
      if (mySeq !== activeSpeechSeq) return;
      advanceToStep(targetStep);
    };
    if (waitForSpeechPromise && sessionState.voiceEnabled) {
      let done = false;
      const maxCap = setTimeout(() => {
        if (!done) {
          done = true;
          go();
        }
      }, Math.max(ms + 6500, 9500));
      Promise.resolve(waitForSpeechPromise).then(() => {
        if (done || mySeq !== activeSpeechSeq) return;
        clearTimeout(maxCap);
        activeAutoTimer = setTimeout(() => {
          if (!done) {
            done = true;
            go();
          }
        }, 420);
      }).catch(() => {
        if (done || mySeq !== activeSpeechSeq) return;
        clearTimeout(maxCap);
        activeAutoTimer = setTimeout(go, ms);
      });
      return;
    }
    activeAutoTimer = setTimeout(go, ms);
  }

  function getCardTrackData(gradeNum) {
    const entry = GRADE_GRID_ORDER.find(g => g.grade === gradeNum);
    if (!entry) return getTrackMeta("8_lgs");
    if (entry.dualTracks) {
      return entry.dualTracks.includes(sessionState.trackId)
        ? getTrackMeta(sessionState.trackId)
        : getTrackMeta(entry.dualTracks[entry.dualTracks.length - 1]);
    }
    return getTrackMeta(entry.directTrack);
  }

  function renderWelcomeStep() {
    const { welcomeOv } = ensureOverlaysInDom();
    const s = sessionState.step;
    const progressPct = Math.round((s / TOTAL_STEPS) * 100);
    const displayName = sessionState.name.trim();
    const activeTrack = getTrackMeta(sessionState.trackId);
    const qs = getTrackQuestions(activeTrack.trackId);
    const bridgesAll = getBridgesList();

    let bodyHtml = "";
    let footerHtml = "";
    const wideMode = s === 2;

    if (s === 1) {
      bodyHtml = `
        <div class="wf-center-head">
          <div class="wf-nati-ring">${getAvatarHtml("greeting")}</div>
          <span class="wf-step-tag">ADIM 1 / ${TOTAL_STEPS} • TANIŞMA &amp; SES SEÇİMİ</span>
          <h1 class="wf-title">Merhaba, ben Nati! Sesli mi ilerleyelim?</h1>
          <p class="wf-sub">Adını yaz (isteğe bağlı) ve aşağıdaki modlardan birine dokun; seni hemen 1–12. sınıf ekranına geçireyim.</p>
        </div>
        <div class="wf-form-card">
          <label class="wf-field-label" for="welcomeNameInput">Sana nasıl hitap edeyim?</label>
          <input type="text" id="welcomeNameInput" class="wf-text-input" maxlength="28"
            placeholder="Adın (ör. Ali, Zeynep...)" value="${escHtml(sessionState.name)}" autocomplete="off">
          <div class="wf-dual-track-cards" style="margin-top:14px;">
            <button type="button" class="wf-dual-card ${sessionState.voiceChosenInStep1 && sessionState.voiceEnabled ? "is-selected" : ""}" data-voice-pick="on">
              <strong>🔊 Sesli Rehberle Başla</strong>
              <small>Nati soruları ve ipuçlarını sevimli sesiyle okuyarak seninle ilerler.</small>
            </button>
            <button type="button" class="wf-dual-card ${sessionState.voiceChosenInStep1 && !sessionState.voiceEnabled ? "is-selected" : ""}" data-voice-pick="off">
              <strong>🔇 Sessiz Modda Başla</strong>
              <small>Sadece keyifli dokunuş efektleri ve görsel anlatımlarla hızlı ilerle.</small>
            </button>
          </div>
        </div>
      `;
      footerHtml = `
        <span style="font-size:12.5px; color:#64748b; font-weight:600;">Bir ses moduna dokunduğunda otomatik ilerler</span>
      `;
    } else if (s === 2) {
      const selBucket = sessionState.selectedGradeBucket;
      const show8Dual = selBucket === 8;
      const show12Dual = selBucket === 12;

      bodyHtml = `
        <div class="wf-center-head">
          <div class="wf-nati-ring wf-nati-sm">${getAvatarHtml("guiding")}</div>
          <span class="wf-step-tag">ADIM 2 / ${TOTAL_STEPS} • SINIF &amp; KARAKTERİNİ SEÇ</span>
          <h1 class="wf-title">${displayName ? `${escHtml(displayName)}, kaçıncı sınıftasın?` : "Şu anda kaçıncı sınıfta okuyorsun?"}</h1>
          <p class="wf-sub">1–12 arası sınıfına dokun; Maarif Modeli ve MEB/LGS/YKS çizgisine göre hazır bulunuşluk yolun otomatik açılsın.</p>
        </div>

        <div class="wf-grade-grid-12" role="group" aria-label="1'den 12'ye Sınıf Seçimi">
          ${GRADE_GRID_ORDER.map(item => {
            const tr = getCardTrackData(item.grade);
            const isDual = Boolean(item.dualTracks);
            const isSel = isDual
              ? selBucket === item.grade
              : (sessionState.trackId === item.directTrack && selBucket === item.grade);
            const badgeText = item.grade === 8
              ? "2018 MEB • Okul / LGS"
              : (item.grade === 12
                ? "2018 MEB • Okul / YKS"
                : (item.grade === 4 ? "2018 MEB • Eski Sistem" : "Maarif Modeli"));
            return `
              <button type="button"
                class="wf-grade-char-card${isSel ? " is-selected" : ""}${isDual ? " is-exam-grade" : ""}"
                data-pick-grade="${item.grade}"
                style="--grade-color:${escHtml(tr.accent)}; --grade-bg:${escHtml(tr.accentSoft)};">
                <div class="wf-grade-char-svg">${typeof tr.renderCharacterSvg === "function" ? tr.renderCharacterSvg() : ""}</div>
                <span class="wf-grade-char-title">${item.grade}. Sınıf</span>
                <span class="wf-grade-char-name">${escHtml(tr.characterName || "")}</span>
                <span class="wf-grade-char-badge">${badgeText}</span>
              </button>
            `;
          }).join("")}
        </div>

        ${show8Dual ? `
          <div class="wf-dual-track-drawer" id="wfDualTrackDrawer">
            <div class="wf-dual-track-head">🎯 8. Sınıf için iki ayrı yolumuz var — hangisiyle ilerlemek istersin?</div>
            <div class="wf-dual-track-cards">
              <button type="button" class="wf-dual-card ${sessionState.trackId === "8_okul" ? "is-selected" : ""}" data-pick-track="8_okul">
                <strong>🏫 8. Sınıf Okul Dersleri</strong>
                <small>MEB yazılıları, okul kazanımları ve sağlam temel pekiştirme</small>
              </button>
              <button type="button" class="wf-dual-card ${sessionState.trackId === "8_lgs" ? "is-selected" : ""}" data-pick-track="8_lgs">
                <strong>🚀 8. Sınıf LGS Hazırlık</strong>
                <small>MEB örnek soruları ve 12 ünitelik yeni nesil LGS matematik rotası</small>
              </button>
            </div>
          </div>
        ` : ""}

        ${show12Dual ? `
          <div class="wf-dual-track-drawer" id="wfDualTrackDrawer">
            <div class="wf-dual-track-head">🏆 12. Sınıf için iki ayrı hedefimiz var — hangisini seçiyorsun?</div>
            <div class="wf-dual-track-cards">
              <button type="button" class="wf-dual-card ${sessionState.trackId === "12_okul" ? "is-selected" : ""}" data-pick-track="12_okul">
                <strong>🏫 12. Sınıf Okul Dersleri</strong>
                <small>2018 MEB Programı • Logaritma, Diziler, Limit, Türev ve İntegral</small>
              </button>
              <button type="button" class="wf-dual-card ${sessionState.trackId === "12_yks" ? "is-selected" : ""}" data-pick-track="12_yks">
                <strong>🏆 12. Sınıf YKS (TYT + AYT)</strong>
                <small>ÖSYM son sınav soruları çizgisinde TYT hızı ve AYT matematik derinliği</small>
              </button>
            </div>
          </div>
        ` : ""}
      `;
      footerHtml = `
        <button type="button" class="wf-ghost-btn" id="wfPrevBtn">← Geri</button>
        <span style="font-size:12.5px; color:#64748b; font-weight:600;">Seçiminle otomatik devam edilir</span>
      `;
    } else if (s === 3) {
      bodyHtml = `
        <div class="wf-center-head">
          <div class="wf-nati-ring wf-nati-sm" style="border:2px solid ${escHtml(activeTrack.accentBorder)}; background:${escHtml(activeTrack.accentSoft)}; border-radius:50%; padding:4px;">
            ${typeof activeTrack.renderCharacterSvg === "function" ? activeTrack.renderCharacterSvg() : getAvatarHtml("guiding")}
          </div>
          <span class="wf-step-tag">ADIM 3 / ${TOTAL_STEPS} • ${escHtml(activeTrack.shortBadge)}</span>
          <h1 class="wf-title">Günde kaç dakika ayırmak istersin?</h1>
          <p class="wf-sub">${escHtml(activeTrack.curriculumBadge)} rotan için günlük süreni seç; seçer seçmez 6 soruluk <strong>İşlem • Muhakeme • Modelleme</strong> hazır bulunuşluk sınavın başlasın.</p>
        </div>

        <div class="wf-pace-row" role="group" aria-label="Günlük çalışma süresi">
          ${PACE_OPTIONS.map(p => `
            <button type="button" class="wf-pace-pill ${sessionState.dailyMinutes === p.minutes ? "is-selected" : ""}" data-pace="${p.minutes}">
              <strong>${p.label}</strong>
              <small>${p.tag}</small>
            </button>
          `).join("")}
        </div>

        <div class="wf-choice-list">
          ${MOTIVATION_OPTIONS.map(opt => `
            <button type="button" class="wf-choice-card ${sessionState.motivation === opt.id ? "is-selected" : ""}" data-motivation="${opt.id}">
              <span class="wf-choice-icon" aria-hidden="true">${opt.icon}</span>
              <span class="wf-choice-texts">
                <strong>${opt.title}</strong>
              </span>
              <span class="wf-choice-check" aria-hidden="true">${sessionState.motivation === opt.id ? "✓" : ""}</span>
            </button>
          `).join("")}
        </div>
      `;
      footerHtml = `
        <button type="button" class="wf-ghost-btn" id="wfPrevBtn">← Geri</button>
        <span style="font-size:12.5px; color:#64748b; font-weight:600;">Süre kartına dokunduğunda test otomatik başlar</span>
      `;
    } else if (s >= 4 && s <= 9) {
      const idx = s - 4;
      const q = qs[idx] || qs[0];
      const compInfo = COMP_META[q.competency] || COMP_META.islem;
      const ans = sessionState.diagAnswers[q.id] || null;
      const answered = Boolean(ans);

      bodyHtml = `
        <div class="wf-diag-wrap">
          <div class="wf-diag-meta">
            <span class="wf-comp-pill">${compInfo.badge}</span>
            <span class="wf-step-tag">SORU ${idx + 1} / ${qs.length || 6} • ${escHtml(activeTrack.shortBadge)}</span>
          </div>
          <div class="wf-svg-box">${typeof q.renderSvg === "function" ? q.renderSvg() : ""}</div>
          <div class="wf-diag-prompt wf-stem">${q.prompt}</div>
          <div class="wf-diag-options">
            ${(q.options || []).map((opt, oIdx) => {
              let cls = "wf-opt-btn";
              if (ans && ans.selectedId === opt.id) {
                cls += opt.correct ? " is-correct" : " is-nudge";
              }
              return `
                <button type="button" class="${cls}" data-diag-opt="${opt.id}" ${answered ? "disabled" : ""}>
                  <span class="wf-opt-letter">${LETTERS[oIdx] || ""}</span>
                  <span class="wf-opt-text">${opt.text}</span>
                </button>
              `;
            }).join("")}
            <button type="button" class="wf-unsure-btn ${ans && ans.status === "unsure" ? "is-selected" : ""}" id="wfUnsureBtn" ${answered ? "disabled" : ""}>
              🤔 Henüz bu konudan emin değilim — temel köprüsü ekle
            </button>
          </div>
          ${ans ? `
            <div class="wf-feedback-drawer ${ans.status === "correct" ? "is-correct" : "is-nudge"}">
              <div class="wf-fb-nati">${getAvatarHtml(ans.status === "correct" ? "celebrating" : "guiding")}</div>
              <div class="wf-fb-text">
                <strong>${ans.status === "correct" ? "Harika Çözüm!" : "Anlık Açıklama & Köprü"}</strong>
                <p>${ans.message}</p>
                <div class="wf-auto-toast">✨ ${idx + 1 < (qs.length || 6) ? "Sıradaki soruya otomatik geçiliyor..." : "Hazır bulunuşluk profilin hazırlanıyor..."}</div>
              </div>
            </div>
          ` : ""}
        </div>
      `;
      footerHtml = `
        <button type="button" class="wf-ghost-btn" id="wfPrevBtn">← Geri</button>
        <span style="font-size:12.5px; color:#64748b; font-weight:600;">Cevabını seçtiğinde otomatik ilerler</span>
      `;
    } else if (s === 10) {
      const { competencies, recommendedIds } = computeReadinessSummary();
      const recBridges = recommendedIds.map(id => bridgesAll.find(b => b.id === id)).filter(Boolean);

      bodyHtml = `
        <div class="wf-center-head">
          <div class="wf-nati-ring wf-nati-sm">${getAvatarHtml("celebrating")}</div>
          <span class="wf-step-tag">ADIM 10 / ${TOTAL_STEPS} • BECERİ PROFİLİN</span>
          <h1 class="wf-title">${displayName ? `${escHtml(displayName)} için ${escHtml(activeTrack.title)} Profili` : `${escHtml(activeTrack.title)} Hazır Bulunuşluk Özeti`}</h1>
          <p class="wf-sub">${escHtml(activeTrack.curriculumBadge)} kapsamında işlem, mantık-muhakeme ve modelleme alanlarındaki başlangıç noktan hazır.</p>
        </div>

        <div class="wf-comp-summary">
          ${competencies.map(c => `
            <div class="wf-comp-bar-row">
              <div class="wf-comp-bar-head">
                <strong>${c.icon} ${c.label}</strong>
                <span>${c.statusText}</span>
              </div>
              <div class="wf-comp-track">
                <div class="wf-comp-fill ${c.strong ? "" : "is-growing"}" style="width:${c.pct}%"></div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="wf-synth-col">
          <h3>🌉 Sana Özel Önerilen 3 Dakikalık Temel Köprüler</h3>
          ${recBridges.length ? `
            <div class="wf-bridge-list">
              ${recBridges.map(b => `
                <div class="wf-bridge-pill-item">
                  <strong>${escHtml(b.title)}</strong>
                  <small>${escHtml(b.gradeLabel)} → ${escHtml(b.feedsUnit)}</small>
                </div>
              `).join("")}
            </div>
          ` : `<p class="wf-empty-note">Üç yetkinlikte de başlangıç seviyen çok sağlam. Doğrudan derslere geçebiliriz!</p>`}
        </div>
      `;
      footerHtml = `
        <button type="button" class="wf-ghost-btn" id="wfPrevBtn">← Geri</button>
        <button type="button" class="wf-primary-btn" id="wfLetsStartBtn">Haydi Başlayalım →</button>
      `;
    } else {
      bodyHtml = `
        <div class="wf-center-head">
          <div class="wf-nati-ring" style="border:2px solid ${escHtml(activeTrack.accentBorder)}; background:${escHtml(activeTrack.accentSoft)}; border-radius:50%; padding:6px;">
            ${typeof activeTrack.renderCharacterSvg === "function" ? activeTrack.renderCharacterSvg() : getAvatarHtml("celebrating")}
          </div>
          <span class="wf-step-tag">ADIM 11 / ${TOTAL_STEPS} • DENEME SÜRÜMÜ HAZIR</span>
          <h1 class="wf-title">${displayName ? `${escHtml(displayName)}, Kişisel Deneme Sürümün Hazır!` : "Kişisel Deneme Sürümün Oluşturuldu!"}</h1>
          <p class="wf-sub"><strong>${escHtml(activeTrack.title)}</strong> (${escHtml(activeTrack.curriculumBadge)}) ve günlük <strong>${sessionState.dailyMinutes} dk</strong> ritminle derslerin şimdi açılıyor.</p>
        </div>
        <div class="wf-trial-card">
          <ul class="wf-trial-checklist">
            <li><span class="wf-trial-check-dot">✓</span><span>${escHtml(activeTrack.title)} hazır bulunuşluk profilin ve seviye haritan kaydedildi</span></li>
            <li><span class="wf-trial-check-dot">✓</span><span>İşlem becerisi, mantık muhakeme ve modelleme yolun oluşturuldu</span></li>
            <li><span class="wf-trial-check-dot">✓</span><span>Seviyene özel 3 dakikalık ön bilgi köprülerin eklendi</span></li>
            <li><span class="wf-trial-check-dot">✓</span><span>Sevimli sesli &amp; yazılı yapay zeka rehberin Nati tüm adımlarda yanında</span></li>
          </ul>
        </div>
      `;
      footerHtml = `
        <button type="button" class="wf-ghost-btn" id="wfPrevBtn">← Geri</button>
        <button type="button" class="wf-primary-btn" id="wfStartTrialBtn">Deneme Sürümünü Başlat →</button>
      `;
    }

    welcomeOv.innerHTML = `
      <div class="wf-shell ${wideMode ? "wf-card-wide" : ""}" style="--wf-accent:${escHtml(activeTrack.accent)}; --wf-accent-soft:${escHtml(activeTrack.accentSoft)};">
        <header class="wf-topbar">
          <div class="wf-brand">
            <img src="assets/logos/nartes_minimal_logo.svg" alt="Nartes+" height="24">
          </div>
          <div class="wf-progress-track" aria-label="Hazır bulunuşluk ilerlemesi">
            <div class="wf-progress-fill" style="width:${progressPct}%"></div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button type="button" class="wf-skip-btn" id="wfVoiceHeadToggle" title="Sesli / Sessiz Modu Değiştir">${sessionState.voiceEnabled ? "🔊 Sesli" : "🔇 Sessiz"}</button>
            <button type="button" class="wf-skip-btn" id="wfSkipBtn">Şimdilik Geç</button>
          </div>
        </header>
        <main class="wf-main">${bodyHtml}</main>
        <footer class="wf-footer">${footerHtml}</footer>
      </div>
    `;

    applyMath(welcomeOv);
    bindWelcomeEvents(welcomeOv, qs);

    // Sesli mod aktifse soruyu / adım yönergesini ilk gösterimde oku
    if (sessionState.voiceEnabled) {
      if (s === 1 && lastSpokenPromptKey !== "step:1") {
        lastSpokenPromptKey = "step:1";
        speakText("Merhaba! Ben Nati. Hazırsan bugünkü matematik yolculuğumuza başlayalım!");
      } else if (s === 2 && lastSpokenPromptKey !== "step:2") {
        lastSpokenPromptKey = "step:2";
        speakText("Harika! Şimdi bulunduğun sınıfı seç, sana uygun hazır bulunuşluk testi hazırlayayım.");
      } else if (s === 3 && lastSpokenPromptKey !== `step:3:${activeTrack.trackId}`) {
        lastSpokenPromptKey = `step:3:${activeTrack.trackId}`;
        const suffix = /^(8_|12_)/.test(activeTrack.trackId)
          ? "Günde kaç dakika çalışalım?"
          : "Şimdi günlük süreni seçelim.";
        speakText(`${activeTrack.title} seçildi! ${suffix}`);
      } else if (s >= 4 && s <= 9) {
        const idx = s - 4;
        const q = qs[idx] || qs[0];
        const spokenKey = `${activeTrack.trackId}:${q.id}:${s}`;
        if (!sessionState.diagAnswers[q.id] && lastSpokenPromptKey !== spokenKey) {
          lastSpokenPromptKey = spokenKey;
          speakText(q.spokenPrompt || q.prompt);
        }
      } else if (s === 10 && lastSpokenPromptKey !== `summary:${activeTrack.trackId}`) {
        lastSpokenPromptKey = `summary:${activeTrack.trackId}`;
        speakText("Hazır bulunuşluk profilin çıktı! Haydi başlayalım!");
      } else if (s === 11 && lastSpokenPromptKey !== `step:11:${activeTrack.trackId}`) {
        lastSpokenPromptKey = `step:11:${activeTrack.trackId}`;
        speakText("Kişisel deneme sürümün hazır! İyi dersler!");
      }
    }
  }

  function bindWelcomeEvents(welcomeOv, qs) {
    const prevBtn = document.getElementById("wfPrevBtn");
    const skipBtn = document.getElementById("wfSkipBtn");
    const voiceHeadToggle = document.getElementById("wfVoiceHeadToggle");
    const nameInput = document.getElementById("welcomeNameInput");

    if (nameInput) {
      nameInput.addEventListener("input", () => {
        sessionState.name = nameInput.value;
      });
      nameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          sessionState.voiceChosenInStep1 = true;
          playSfx("select");
          advanceToStep(2);
        }
      });
    }

    if (voiceHeadToggle) {
      voiceHeadToggle.addEventListener("click", () => {
        sessionState.voiceEnabled = !sessionState.voiceEnabled;
        if (window.NartesMentor && typeof window.NartesMentor.setVoiceEnabled === "function") {
          window.NartesMentor.setVoiceEnabled(sessionState.voiceEnabled, false);
        }
        if (!sessionState.voiceEnabled) stopVoiceNow();
        playSfx("click");
        voiceHeadToggle.textContent = sessionState.voiceEnabled ? "🔊 Sesli" : "🔇 Sessiz";
      });
    }

    // Adım 1: Ses kartına tıklayınca İleri'siz otomatik Adım 2'ye geç
    welcomeOv.querySelectorAll("[data-voice-pick]").forEach(btn => {
      btn.addEventListener("click", () => {
        const isOn = btn.getAttribute("data-voice-pick") === "on";
        sessionState.voiceEnabled = isOn;
        sessionState.voiceChosenInStep1 = true;
        if (window.NartesMentor && typeof window.NartesMentor.setVoiceEnabled === "function") {
          window.NartesMentor.setVoiceEnabled(isOn, false);
        }
        playSfx(isOn ? "sparkle" : "select");
        triggerBurst(btn);
        btn.classList.add("is-selected");
        if (!isOn) {
          stopVoiceNow();
        }
        scheduleAutoNext(2, 260, null);
      });
    });

    // Adım 2: 1–12. sınıf kartı tıklama
    welcomeOv.querySelectorAll("[data-pick-grade]").forEach(btn => {
      btn.addEventListener("click", () => {
        const gNum = parseInt(btn.getAttribute("data-pick-grade"), 10);
        if (!Number.isFinite(gNum)) return;
        sessionState.selectedGradeBucket = gNum;
        if (gNum === 8 || gNum === 12) {
          // 8 ve 12 için alt çekmeceyi (Okul vs LGS / Okul vs YKS) aç
          sessionState.trackId = gNum === 8
            ? (sessionState.trackId === "8_okul" ? "8_okul" : "8_lgs")
            : (sessionState.trackId === "12_okul" ? "12_okul" : "12_yks");
          playSfx("select");
          renderWelcomeStep();
          const drawer = document.getElementById("wfDualTrackDrawer");
          if (drawer) drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
          return;
        }
        sessionState.trackId = String(gNum);
        sessionState.diagAnswers = {};
        playSfx("grade_pick");
        triggerBurst(btn);
        renderWelcomeStep();
        scheduleAutoNext(3, 380, null);
      });
    });

    // Adım 2: 8. Sınıf (Okul/LGS) & 12. Sınıf (Okul/YKS) çift yol kartları -> otomatik Adım 3
    welcomeOv.querySelectorAll("[data-pick-track]").forEach(btn => {
      btn.addEventListener("click", () => {
        const tk = normalizeTrackKey(btn.getAttribute("data-pick-track"));
        sessionState.trackId = tk;
        sessionState.diagAnswers = {};
        playSfx("grade_pick");
        triggerBurst(btn);
        renderWelcomeStep();
        scheduleAutoNext(3, 360, null);
      });
    });

    // Adım 3: Motivasyon seçimi (isteğe bağlı ön vurgu)
    welcomeOv.querySelectorAll("[data-motivation]").forEach(btn => {
      btn.addEventListener("click", () => {
        sessionState.motivation = btn.getAttribute("data-motivation") || "exam_boost";
        playSfx("click");
        renderWelcomeStep();
      });
    });

    // Adım 3: Günlük dakika seçilince otomatik Q1 (Adım 4)'e geç
    welcomeOv.querySelectorAll("[data-pace]").forEach(btn => {
      btn.addEventListener("click", () => {
        const mins = parseInt(btn.getAttribute("data-pace"), 10);
        if (Number.isFinite(mins)) sessionState.dailyMinutes = mins;
        playSfx("sparkle");
        triggerBurst(btn);
        renderWelcomeStep();
        scheduleAutoNext(4, 340, null);
      });
    });

    // Adım 4–9: Soru şıkları + "Emin değilim" -> sıfır "İleri" ile otomatik sonraki soruya geç
    if (sessionState.step >= 4 && sessionState.step <= 9) {
      const qIdx = sessionState.step - 4;
      const q = (qs && qs[qIdx]) || null;
      const nextStep = sessionState.step + 1;

      if (q) {
        welcomeOv.querySelectorAll("[data-diag-opt]").forEach(btn => {
          btn.addEventListener("click", () => {
            if (sessionState.diagAnswers[q.id]) return;
            const optId = btn.getAttribute("data-diag-opt");
            const opt = (q.options || []).find(o => o.id === optId);
            if (!opt) return;
            sessionState.diagAnswers[q.id] = {
              selectedId: opt.id,
              status: opt.correct ? "correct" : "nudge",
              message: opt.correct ? (opt.okMsg || "Doğru çözüm!") : (opt.hint || "İpucunu inceleyelim.")
            };
            playSfx(opt.correct ? "celebrate" : "nudge");
            if (opt.correct) triggerBurst(btn);
            renderWelcomeStep();
            const spokenFeedback = opt.correct
              ? (opt.spokenOk || "Harika çözüm! Tam isabet!")
              : (opt.spokenHint || "Çok yaklaştın, sıradaki soruya geçiyoruz.");
            const speechP = sessionState.voiceEnabled ? speakText(spokenFeedback) : null;
            scheduleAutoNext(nextStep, 1150, speechP);
          });
        });

        const unsureBtn = document.getElementById("wfUnsureBtn");
        if (unsureBtn) {
          unsureBtn.addEventListener("click", () => {
            if (sessionState.diagAnswers[q.id]) return;
            sessionState.diagAnswers[q.id] = {
              selectedId: null,
              status: "unsure",
              message: q.unsureMsg || "Bu konu için temel köprüyü senin yoluna ekledim."
            };
            playSfx("nudge");
            renderWelcomeStep();
            const speechP = sessionState.voiceEnabled
              ? speakText(q.spokenUnsure || "Sorun değil, bu konu için temel köprüyü senin yoluna ekledim.")
              : null;
            scheduleAutoNext(nextStep, 1150, speechP);
          });
        }
      }
    }

    const letsStartBtn = document.getElementById("wfLetsStartBtn");
    if (letsStartBtn) {
      letsStartBtn.addEventListener("click", () => {
        playSfx("sparkle");
        triggerBurst(letsStartBtn);
        advanceToStep(11);
      });
    }

    const startTrialBtn = document.getElementById("wfStartTrialBtn");
    if (startTrialBtn) {
      startTrialBtn.addEventListener("click", () => {
        triggerBurst(startTrialBtn);
        finishWelcomeAndStartTrial();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        playSfx("click");
        advanceToStep(Math.max(1, sessionState.step - 1));
      });
    }

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        playSfx("click");
        if (getProfile() && getProfile().trialStarted) {
          closeWelcomeOnly();
        } else {
          finishWelcomeAndStartTrial();
        }
      });
    }
  }

  function renderBridgeModal() {
    const { bridgeMod } = ensureOverlaysInDom();
    const b = getBridgesList().find(x => x.id === bridgeState.bridgeId);
    if (!b) {
      bridgeMod.hidden = true;
      return;
    }

    const opt = (b.practiceOptions || []).find(o => o.id === bridgeState.chosenOptId);
    let inner = "";

    if (bridgeState.step === 0) {
      inner = `
        <div class="wf-bm-step-tag">${escHtml(b.gradeLabel)} → ${escHtml(b.feedsUnit)} • ⏱️ ${escHtml(b.duration)}</div>
        <h2 class="wf-bm-title">${escHtml(b.title)}</h2>
        <p class="wf-bm-lead">${b.ruleLead}</p>
        <div class="wf-svg-box">${typeof b.renderSvg === "function" ? b.renderSvg() : ""}</div>
        <div class="wf-bm-tip">
          <div class="wf-bm-tip-nati">${getAvatarHtml("guiding")}</div>
          <p><strong>Nati Özeti:</strong> ${b.ruleTip}</p>
        </div>
        <div class="wf-bm-actions">
          <button type="button" class="wf-primary-btn" id="wfBridgeNextBtn">Hızlı Kontrol Sorusu →</button>
        </div>
      `;
    } else if (bridgeState.step === 1) {
      inner = `
        <div class="wf-bm-step-tag">KÖPRÜ KONTROLÜ • 1 SORU</div>
        <h2 class="wf-bm-title">${escHtml(b.title)}</h2>
        <p class="wf-bm-lead">${b.practicePrompt}</p>
        <div class="wf-diag-options">
          ${(b.practiceOptions || []).map((o, idx) => {
            let cls = "wf-opt-btn";
            if (bridgeState.chosenOptId === o.id) cls += o.correct ? " is-correct" : " is-nudge";
            return `
              <button type="button" class="${cls}" data-bridge-opt="${o.id}">
                <span class="wf-opt-letter">${LETTERS[idx] || ""}</span>
                <span class="wf-opt-text">${o.text}</span>
              </button>
            `;
          }).join("")}
        </div>
        ${opt ? `
          <div class="wf-feedback-drawer ${opt.correct ? "is-correct" : "is-nudge"}">
            <div class="wf-fb-nati">${getAvatarHtml(opt.correct ? "celebrating" : "guiding")}</div>
            <div class="wf-fb-text">
              <strong>${opt.correct ? "Harika!" : "İpucu"}</strong>
              <p>${opt.correct ? opt.okMsg : opt.hint}</p>
            </div>
          </div>
        ` : ""}
        <div class="wf-bm-actions">
          <button type="button" class="wf-ghost-btn" id="wfBridgeBackBtn">← Görsele Dön</button>
          <button type="button" class="wf-primary-btn" id="wfBridgeFinishBtn" ${bridgeState.solved ? "" : "disabled"}>Köprüyü Tamamla ✓</button>
        </div>
      `;
    } else {
      inner = `
        <div class="wf-bm-done">
          <div class="wf-nati-ring">${getAvatarHtml("celebrating")}</div>
          <h2>${escHtml(b.title)} Tamamlandı!</h2>
          <p>Ön bilgin tazelendi. Şimdi ders yoluna güvenle devam edebilirsin.</p>
          <button type="button" class="wf-primary-btn" id="wfBridgeCloseDoneBtn">Öğrenim Yoluna Dön →</button>
        </div>
      `;
    }

    bridgeMod.innerHTML = `
      <div class="wf-bm-card">
        <button type="button" class="wf-bm-close" id="wfBridgeCloseX" aria-label="Köprüyü Kapat">✕</button>
        ${inner}
      </div>
    `;
    bridgeMod.hidden = false;
    applyMath(bridgeMod);

    if (sessionState.voiceEnabled && bridgeState.step === 0 && !bridgeState.chosenOptId && !bridgeState.spokenRule) {
      bridgeState.spokenRule = true;
      speakText(b.ruleTip);
    }

    bridgeMod.querySelector("#wfBridgeCloseX").addEventListener("click", () => {
      bridgeMod.hidden = true;
    });

    const nextBtn = bridgeMod.querySelector("#wfBridgeNextBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        playSfx("click");
        bridgeState.step = 1;
        renderBridgeModal();
        if (sessionState.voiceEnabled) speakText(b.spokenPrompt || b.practicePrompt);
      });
    }

    const backBtn = bridgeMod.querySelector("#wfBridgeBackBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        playSfx("click");
        bridgeState.step = 0;
        renderBridgeModal();
      });
    }

    bridgeMod.querySelectorAll("[data-bridge-opt]").forEach(btn => {
      btn.addEventListener("click", () => {
        const oid = btn.getAttribute("data-bridge-opt");
        const picked = (b.practiceOptions || []).find(o => o.id === oid);
        bridgeState.chosenOptId = oid;
        if (picked && picked.correct) {
          bridgeState.solved = true;
          playSfx("celebrate");
          triggerBurst(btn);
          if (sessionState.voiceEnabled) speakText(picked.spokenOk || picked.okMsg);
        } else {
          playSfx("nudge");
          if (sessionState.voiceEnabled && picked) speakText(picked.spokenHint || picked.hint);
        }
        renderBridgeModal();
      });
    });

    const finishBtn = bridgeMod.querySelector("#wfBridgeFinishBtn");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => {
        markBridgeDone(b.id);
        bridgeState.step = 2;
        playSfx("celebrate");
        renderBridgeModal();
      });
    }

    const doneCloseBtn = bridgeMod.querySelector("#wfBridgeCloseDoneBtn");
    if (doneCloseBtn) {
      doneCloseBtn.addEventListener("click", () => {
        bridgeMod.hidden = true;
        if (window.NartesApp && typeof window.NartesApp.renderBrilliantPathView === "function") {
          window.NartesApp.renderBrilliantPathView();
        }
        if (window.NartesApp && typeof window.NartesApp.renderBrilliantUnitsView === "function") {
          window.NartesApp.renderBrilliantUnitsView();
        }
      });
    }
  }

  function openWelcome(startStep) {
    clearAutoAdvance();
    const prof = getProfile();
    if (prof) {
      sessionState.name = prof.name || "";
      sessionState.voiceEnabled = Boolean(prof.voiceEnabled);
      sessionState.trackId = normalizeTrackKey(prof.trackId || prof.grade);
      sessionState.selectedGradeBucket = getTrackMeta(sessionState.trackId).grade;
      sessionState.dailyMinutes = prof.dailyMinutes || 15;
      sessionState.motivation = prof.motivation || "exam_boost";
    }
    sessionState.step = typeof startStep === "number" ? Math.max(1, Math.min(TOTAL_STEPS, startStep)) : 1;
    sessionState.diagAnswers = {};
    sessionState.voiceChosenInStep1 = false;
    lastSpokenPromptKey = "";

    const { welcomeOv } = ensureOverlaysInDom();
    welcomeOv.hidden = false;
    document.body.classList.add("wf-open");
    renderWelcomeStep();
  }

  function openBridge(bridgeId) {
    bridgeState = { bridgeId, step: 0, chosenOptId: null, solved: false };
    renderBridgeModal();
  }

  function resetProfile() {
    clearAutoAdvance();
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LEGACY_PROFILE_KEY);
      localStorage.removeItem(TRIAL_UNLOCK_KEY);
    } catch (_) {}
    sessionState = {
      step: 1,
      name: "",
      voiceEnabled: (window.NartesMentor && typeof window.NartesMentor.isVoiceEnabled === "function" ? window.NartesMentor.isVoiceEnabled() : true),
      voiceChosenInStep1: false,
      selectedGradeBucket: null,
      trackId: "8_lgs",
      dailyMinutes: 15,
      motivation: "exam_boost",
      diagAnswers: {}
    };
  }

  window.NartesWelcome = {
    open: openWelcome,
    close: closeWelcomeOnly,
    hasProfile() {
      const p = getProfile();
      return Boolean(p && (p.completed || p.trialStarted));
    },
    getProfile,
    getGradeTrackKey() {
      const p = getProfile();
      return normalizeTrackKey((p && p.trackId) || sessionState.trackId);
    },
    getGradeTrackLabel() {
      const k = this.getGradeTrackKey();
      const tr = getTrackMeta(k);
      return tr.shortBadge || tr.title || "8. Sınıf • LGS";
    },
    setGradeTrack(trackId) {
      const tk = normalizeTrackKey(trackId);
      const tr = getTrackMeta(tk);
      sessionState.trackId = tk;
      sessionState.selectedGradeBucket = tr.grade;
      const cur = getProfile() || {};
      const allBridges = getBridgesList();
      const stageBridges = allBridges.filter(b => !tr.stage || b.stage === tr.stage).slice(0, 3).map(b => b.id);
      const validExisting = Array.isArray(cur.recommendedBridges)
        ? cur.recommendedBridges.filter(id => {
            const b = allBridges.find(item => item.id === id);
            return b && (!tr.stage || b.stage === tr.stage);
          })
        : [];
      const nextRec = (cur.trackId === tk && validExisting.length)
        ? validExisting
        : stageBridges;
      saveProfile({
        ...cur,
        trackId: tk,
        grade: tr.grade,
        trackLabel: tr.shortBadge || tr.title,
        curriculumBadge: tr.curriculumBadge || "",
        recommendedBridges: nextRec,
        updatedAt: Date.now()
      });
      return tr;
    },
    getTracks: getTracksList,
    getTrackMeta,
    getBridges: getBridgesList,
    getRecommendedBridges,
    isBridgeDone,
    openBridge,
    openBridgeModal: openBridge,
    reset: resetProfile
  };
})();
