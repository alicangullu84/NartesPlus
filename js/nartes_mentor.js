(function () {
  "use strict";

  // ==========================================================================
  // NATİ — ÇİZGİ KARAKTER MASKOTU & SOKRATİK YAPAY ZEKA REHBERİ
  // - Harici API anahtarı KULLANMAZ; doğrudan bu sunucudaki yerel AI motoruyla
  //   (/api/nartes/chat -> Ollama nartes-sokratik) gerçek zamanlı akışlı çalışır.
  // - Ders bağlamı dışına çıkmaz, cevabı doğrudan söylemez, öğrencinin her sorusuna
  //   ve yaptığı hatalara göre özgün Sokratik yanıtlar üretir.
  // - 1. yanlışta: Seçilen yanlış değere özel Sokratik ipucu verir.
  // - 2. yanlışta (ve katlarında): Seçenekleri kilitler ve "Konu Bilgi & İpucu Kapısı"nı açar.
  // ==========================================================================

  const VOICE_PREF_KEY = "nartes_mentor_voice_enabled_v1";
  const SOCIAL_SESSION_KEY = "nartes_student_social_v1";

  function loadSocialState() {
    try {
      const raw = window.sessionStorage && window.sessionStorage.getItem(SOCIAL_SESSION_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (parsed && typeof parsed === "object") {
        return {
          studentName: typeof parsed.studentName === "string" ? parsed.studentName : "",
          lastSocialStage: typeof parsed.lastSocialStage === "string" ? parsed.lastSocialStage : "",
          cursors: parsed.cursors && typeof parsed.cursors === "object" ? parsed.cursors : {}
        };
      }
    } catch (_) {}
    return { studentName: "", lastSocialStage: "", cursors: {} };
  }

  let socialState = loadSocialState();

  function saveSocialState() {
    try {
      if (window.sessionStorage) {
        window.sessionStorage.setItem(SOCIAL_SESSION_KEY, JSON.stringify(socialState));
      }
    } catch (_) {}
  }

  function pickSocialVariant(key, list) {
    if (!Array.isArray(list) || !list.length) return "";
    const cur = Number(socialState.cursors[key] || 0);
    socialState.cursors[key] = cur + 1;
    saveSocialState();
    return list[cur % list.length];
  }

  // ==========================================================================
  // 1. NATİ — NAR + YAPAY ZEKA REHBERİ CANLI ANİMASYON & KONUŞMA SİSTEMİ
  //    6 durum: idle, talking, greeting, guiding, thinking, celebrating
  // ==========================================================================
  const NATI_ALLOWED_STATES = new Set([
    "idle",
    "talking",
    "greeting",
    "guiding",
    "thinking",
    "celebrating"
  ]);

  let natiIsSpeaking = false;
  let natiCurrentMood = "idle";
  let natiVisualSpeakTimer = null;

  function resolveNatiState(mood) {
    const m = String(mood || "").toLowerCase().trim();
    if (m === "idle" || m === "rest") return "idle";
    if (m === "talking" || m === "speak" || m === "speaking") return "talking";
    if (m === "greeting" || m === "welcome" || m === "hello") return "greeting";
    if (m === "thinking" || m === "analyze") return "thinking";
    if (m === "praise" || m === "celebrating" || m === "celebrate" || m === "happy") return "celebrating";
    if (m === "guide" || m === "guiding" || m === "encourage" || m === "hint") return "guiding";
    return NATI_ALLOWED_STATES.has(m) ? m : "idle";
  }

  function buildNatiMediaMarkup(stateName, syncAuto) {
    const st = resolveNatiState(stateName);
    const base = st;
    const effective = natiIsSpeaking && syncAuto ? "talking" : st;
    const speakingCls = natiIsSpeaking && syncAuto ? "is-nati-speaking" : "";
    return {
      effective,
      base,
      speakingCls,
      videoHtml: `
        <video class="nati-avatar-media" autoplay loop muted playsinline preload="auto" poster="assets/nati/nati_${effective}.png" aria-label="Nati yapay zeka rehberi">
          <source src="assets/nati/nati_${effective}.webm" type="video/webm" />
          <source src="assets/nati/nati_${effective}.mp4" type="video/mp4" />
          <img class="nati-avatar-img" src="assets/nati/nati_${effective}.gif" alt="Nati" />
        </video>
      `
    };
  }

  function getAvatarHtml(extraClass, mood, syncAuto) {
    const useSync = syncAuto === true;
    const meta = buildNatiMediaMarkup(mood || "idle", useSync);
    return `
      <span class="nartes-avatar-frame nati-live-avatar ${extraClass || ""} ${meta.speakingCls}" data-nati-state="${meta.effective}" data-nati-base="${meta.base}"${useSync ? ' data-nati-sync="auto"' : ""}>
        ${meta.videoHtml}
      </span>
    `;
  }

  function updateAvatarContainerState(container, baseMood, forceTargetState) {
    if (!container) return;
    const baseSt = resolveNatiState(baseMood || "idle");
    const targetSt = forceTargetState ? resolveNatiState(forceTargetState) : (natiIsSpeaking ? "talking" : baseSt);
    const frame = container.querySelector(".nati-live-avatar");

    if (!frame) {
      const extraCls = container.id === "nartesFabAvatar"
        ? "nartes-avatar-lg"
        : (container.id === "nartesHeadAvatar" || container.id === "natiStageAvatar" ? "nartes-avatar-md" : "nartes-avatar-sm");
      container.innerHTML = getAvatarHtml(extraCls, targetSt, container.hasAttribute("data-nati-sync-wrap") || container.id === "nartesFabAvatar" || container.id === "nartesHeadAvatar" || container.id === "natiStageAvatar" || container.id === "natiPathHeroAvatar");
      const newVid = container.querySelector("video.nati-avatar-media");
      if (newVid) newVid.play().catch(() => {});
      return;
    }

    frame.dataset.natiBase = baseSt;
    frame.classList.toggle("is-nati-speaking", natiIsSpeaking);
    if (frame.dataset.natiState === targetSt) {
      const vid = frame.querySelector("video.nati-avatar-media");
      if (vid && vid.paused) vid.play().catch(() => {});
      return;
    }

    frame.dataset.natiState = targetSt;
    const vid = frame.querySelector("video.nati-avatar-media");
    if (vid) {
      vid.poster = `assets/nati/nati_${targetSt}.png`;
      const webmSrc = vid.querySelector('source[type="video/webm"]');
      const mp4Src = vid.querySelector('source[type="video/mp4"]');
      const fallbackImg = vid.querySelector("img.nati-avatar-img");
      if (webmSrc) webmSrc.src = `assets/nati/nati_${targetSt}.webm`;
      if (mp4Src) mp4Src.src = `assets/nati/nati_${targetSt}.mp4`;
      if (fallbackImg) fallbackImg.src = `assets/nati/nati_${targetSt}.gif`;
      try {
        vid.load();
        vid.play().catch(() => {});
      } catch (_) {}
    }
  }

  function syncAllNatiAvatars() {
    const syncFrames = document.querySelectorAll('.nati-live-avatar[data-nati-sync="auto"]');
    syncFrames.forEach(frame => {
      const container = frame.parentElement;
      const base = natiCurrentMood || frame.dataset.natiBase || "idle";
      if (container) {
        updateAvatarContainerState(container, base, natiIsSpeaking ? "talking" : base);
      }
    });
    const fabBtn = document.getElementById("nartesFabBtn");
    if (fabBtn) fabBtn.classList.toggle("is-nati-speaking", natiIsSpeaking);
    const companion = document.getElementById("natiStageCompanion");
    if (companion) companion.classList.toggle("is-nati-speaking", natiIsSpeaking);
  }

  function setNatiSpeakingState(active) {
    const next = Boolean(active);
    if (natiIsSpeaking === next) return;
    natiIsSpeaking = next;
    syncAllNatiAvatars();
  }

  function pulseNatiVisualTalking(durationMs) {
    clearTimeout(natiVisualSpeakTimer);
    setNatiSpeakingState(true);
    natiVisualSpeakTimer = setTimeout(() => {
      const audioActive = Boolean(activeTtsAudio && !activeTtsAudio.paused);
      const speechActive = Boolean("speechSynthesis" in window && window.speechSynthesis.speaking);
      if (!audioActive && !speechActive) {
        setNatiSpeakingState(false);
      }
    }, durationMs || 2200);
  }

  // Zengin ve tekrarsız tebrik havuzu
  const PRAISE_POOL = [
    "Aferin, tebrik ederim! Tam bir genç matematikçi gibi düşündün ve doğru ilişkiyi kurdun.",
    "Harika bir çıkarım! Adımları dikkatle takip ettiğin çok belli oluyor, seni kutlarım.",
    "Mükemmel! Sayılar arasındaki bağlantıyı tam isabetle yakaladın.",
    "Çok güzel çözdün! Sabırla düşündüğünde hiçbir soru senin için zor değil.",
    "Bravo! Mantık zincirini hiç koparmadan doğru sonuca ulaştın.",
    "Süpersin! Bu kazanımın mantığını çok iyi kavradın, sıradaki adıma hazırsın.",
    "Tebrikler! Dikkatli okumanın ve kuralı doğru uygulamanın karşılığını aldın.",
    "İşte bu! Matematiksel ilişkiyi zihninde çok net canlandırdın."
  ];

  // Çevrimdışı yedek güvenlik filtreleri (asıl filtre sunucuda da çalışır)
  const PROFANITY_LIST = [
    "aptal", "salak", "gerizekalı", "mal", "öküz", "ahmak", "dangalak",
    "sik", "amk", "aq", "oç", "piç", "yavşak", "göt", "bok", "lan", "ulan",
    "fuck", "shit", "bitch", "idiot", "stupid"
  ];

  const OFF_TOPIC_LIST = [
    "futbol", "galatasaray", "fenerbahçe", "beşiktaş", "trabzonspor",
    "oyun öner", "pubg", "valorant", "minecraft", "roblox", "fortnite",
    "sevgili", "aşk", "şarkı", "film", "dizi", "tiktok", "instagram", "youtube",
    "hava durumu", "siyaset", "parti", "yemek tarifi", "burç", "espri yap", "fıkra"
  ];

  const GIVE_ANSWER_PATTERNS = [
    /cevab[ıi]\s*(ne|nedir|söyle|ver|yaz)/i,
    /doğru\s*(şık|cevap|seçenek)\s*(hangisi|ne)/i,
    /hangi\s*şık/i,
    /direkt\s*(söyle|çöz|ver)/i,
    /sen\s*çöz/i,
    /şıkkı\s*söyle/i
  ];

  let lastPraiseIdx = -1;
  let mentorVoiceEnabled = true;
  let localTtsAvailable = false;
  let localTtsReady = false;
  let elevenLabsEnabled = false;
  let elevenLabsVoiceId = "jBpfuIE2acCO8z3wKNLl";
  let activeTtsAudio = null;
  let activeTtsObjectUrl = null;
  let activeTtsAbort = null;
  let ttsPlaybackSeq = 0;
  let isTtsSynthesizing = false;
  let localAiServerOnline = false;
  let localAiModelLabel = "Sokratik Rehber";
  let activeApiBase = "";
  let activeStreamAbort = null;
  let gateCountdownTimer = null;

  // Öğrencinin aktif duraktaki kişisel öğrenme durumu ve çok turlu sohbet geçmişi
  let currentContext = { unit: null, kaz: null, stop: null };
  let studentTrace = {
    wrongCount: 0,
    attemptCountsByTarget: {},
    wrongChoices: [],
    lastWrongValue: null,
    lastTargetLabel: null,
    filledBlanks: {},
    activeBlankId: null,
    liveScreen: null,
    chatTurnCount: 0,
    chatHistory: [],
    usedMotivationIndices: [],
    shownHintBodies: [],
    remediationLocked: false
  };

  try {
    const savedVoice = localStorage.getItem(VOICE_PREF_KEY);
    if (savedVoice !== null) {
      mentorVoiceEnabled = savedVoice === "1";
    }
  } catch (e) {}

  // Web Audio API ile Nati'ye özel ses efektleri
  let mentorAudioCtx = null;
  function playMentorSound(kind) {
    try {
      if (window.MATFLOW_SOUND_MUTED) return;
      if (!mentorAudioCtx) {
        mentorAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      const now = mentorAudioCtx.currentTime;
      if (kind === "hint") {
        [440, 554.37].forEach((freq, i) => {
          const osc = mentorAudioCtx.createOscillator();
          const gain = mentorAudioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0.08, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.16);
          osc.connect(gain);
          gain.connect(mentorAudioCtx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.16);
        });
      } else if (kind === "study_gate") {
        [330, 293.66, 392].forEach((freq, i) => {
          const osc = mentorAudioCtx.createOscillator();
          const gain = mentorAudioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + i * 0.09);
          gain.gain.setValueAtTime(0.1, now + i * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.22);
          osc.connect(gain);
          gain.connect(mentorAudioCtx.destination);
          osc.start(now + i * 0.09);
          osc.stop(now + i * 0.09 + 0.22);
        });
      } else if (kind === "understood") {
        [523.25, 659.25, 880].forEach((freq, i) => {
          const osc = mentorAudioCtx.createOscillator();
          const gain = mentorAudioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + i * 0.065);
          gain.gain.setValueAtTime(0.11, now + i * 0.065);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.065 + 0.2);
          osc.connect(gain);
          gain.connect(mentorAudioCtx.destination);
          osc.start(now + i * 0.065);
          osc.stop(now + i * 0.065 + 0.2);
        });
      }
    } catch (e) {}
  }

  function pickNonRepeating(pool, lastIdxRef) {
    if (pool.length <= 1) return { text: pool[0], idx: 0 };
    let idx = Math.floor(Math.random() * pool.length);
    if (idx === lastIdxRef) {
      idx = (idx + 1 + Math.floor(Math.random() * (pool.length - 1))) % pool.length;
    }
    return { text: pool[idx], idx };
  }

  function stripHtml(html) {
    const safe = String(html || "").replace(/<(?![\/a-zA-Z])/g, "&lt;");
    const tmp = document.createElement("div");
    tmp.innerHTML = safe;
    return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
  }

  function normalizeSpokenTurkish(rawText) {
    let t = String(rawText || "");
    t = t.replace(/<[^>]+>/g, " ");
    t = t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/`/g, "");
    t = t.replace(/\bNartest\+'[ıi]n\b/gi, "Nartest Artı'nın");
    t = t.replace(/\bNartes\+'[ıi]n\b/gi, "Nartes Artı'nın");
    t = t.replace(/\bNartest\+/gi, "Nartest Artı");
    t = t.replace(/\bNartes\+/gi, "Nartes Artı");
    t = t.replace(/\bNarTES\b/g, "Nartes");
    t = t.replace(/(\d)\s*\{\s*,\s*\}\s*(\d)/g, "$1,$2");
    t = t.replace(/\$\s*'/g, "'");
    t = t.replace(/\{\d+\}/g, " boşluk ");
    t = t.replace(/_{2,}/g, " boşluk ");
    t = t.replace(/\\overline\{([^{}]+)\}/g, " devreden $1 ");
    t = t.replace(/\|\s*(-?\d+)\s*\|/g, " mutlak değer $1 ");
    t = t.replace(/\\text\{([^}]*)\}/g, " $1 ");
    t = t.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, " $1 bölü $2 ");
    t = t.replace(/\\sqrt\{([^{}]+)\}/g, " karekök $1 ");
    t = t.replace(/√\s*(\d+)/g, " karekök $1 ");
    t = t.replace(/\^\\circ\\text\{C\}|\^\\circ\s*C|°C/g, " derece ");
    t = t.replace(/\^\\circ|°/g, " derece ");
    t = t.replace(/(\d+)\s*\^\s*2\b/g, "$1 üssü 2");
    t = t.replace(/(\d+)\s*\^\s*3\b/g, "$1 üssü 3");
    t = t.replace(/\^2\b/g, " üssü 2 ");
    t = t.replace(/\^3\b/g, " üssü 3 ");
    t = t.replace(/\^\{?(-?\d+)\}?/g, " üssü $1 ");
    t = t.replace(/\\times|\\cdot|[×·]/g, " çarpı ");
    t = t.replace(/\\div|[÷]/g, " bölü ");
    t = t.replace(/\\le(?:q)?\b|≤/g, " küçük eşit ");
    t = t.replace(/\\ge(?:q)?\b|≥/g, " büyük eşit ");
    t = t.replace(/\\ne(?:q)?\b|≠/g, " eşit değil ");
    t = t.replace(/\\subset\b|⊂/g, " alt kümesidir ");
    t = t.replace(/\\Rightarrow|⇒|→/g, " ");
    t = t.replace(/\\dots|\.\.\.|…/g, " ");
    t = t.replace(/\\pi\b/g, " pi ");
    t = t.replace(/\$\$/g, " ").replace(/\$/g, " ");
    t = t.replace(/\\\[|\\\]|\\\(|\\\)/g, " ");
    t = t.replace(/\\[a-zA-Z]+/g, " ");
    t = t.replace(/[{}]/g, " ");
    t = t.replace(/=/g, " eşittir ");
    t = t.replace(/\+/g, " artı ");
    t = t.replace(/(^|[\s(])-(\d+)/g, "$1eksi $2");
    t = t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}]/gu, " ");
    t = t.replace(/[•|#&_~]/g, " ");
    t = t.replace(/!+/g, ".");
    t = t.replace(/\s+([.,?;:])/g, "$1");
    t = t.replace(/\.{2,}/g, ".");
    t = t.replace(/\s+/g, " ").trim();
    t = t.replace(/\b(Merhaba|Selam|Hoş geldin)\.\s+(Ben\s+Nati)\b/gi, "$1, ben Nati");
    t = t.replace(/\b(Merhaba,\s*hoş geldin)\.\s+(Ben\s+Nati)\b/gi, "$1, ben Nati");
    t = t.replace(/\b(Adım\s+Nati|Ben\s+Nati)\s+(?=[A-ZÇĞİÖŞÜa-zçğıöşü])/g, "$1, ");
    t = t.replace(/\b(Ben\s+Nati|Adım\s+Nati)[.,]\s+([A-ZÇĞİÖŞÜa-zçğıöşü]+)/g, (_, p1, word) => {
      const keepUpper = /^(Nartest|Nartes|LGS|YKS|TYT|AYT|MEB|EBOB|EKOK)\b/i.test(word);
      const nextWord = keepUpper ? word : word.charAt(0).toLocaleLowerCase("tr-TR") + word.slice(1);
      return `${p1}, ${nextWord}`;
    });
    t = t.replace(/\bNati\.\s+([A-ZÇĞİÖŞÜa-zçğıöşü]+)/g, (_, word) => {
      const keepUpper = /^(Nartest|Nartes|LGS|YKS|TYT|AYT|MEB|EBOB|EKOK)\b/i.test(word);
      const nextWord = keepUpper ? word : word.charAt(0).toLocaleLowerCase("tr-TR") + word.slice(1);
      return `Nati, ${nextWord}`;
    });
    t = t.replace(/\b(yapay zeka rehberin|matematik dostun)\s+Nati\.?$/i, "$1 Nati'yim.");
    return t;
  }

  function cleanTextForSpeech(rawText) {
    return normalizeSpokenTurkish(rawText);
  }

  function cleanTextForBrowserSpeech(rawText) {
    return cleanTextForSpeech(rawText)
      .replace(/\\[a-zA-Z]+/g, " ")
      .replace(/[{}]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function splitSpeechChunks(text, maxChunks) {
    const clean = String(text || "").trim();
    if (!clean) return [];
    const parts = clean.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
    if (!parts.length) return [clean];
    const cap = maxChunks || 2;
    if (parts.length <= cap) return parts;
    const head = parts.slice(0, cap - 1);
    head.push(parts.slice(cap - 1).join(" "));
    return head;
  }

  function revokeActiveTtsObjectUrl() {
    if (activeTtsObjectUrl) {
      try { URL.revokeObjectURL(activeTtsObjectUrl); } catch (_) {}
      activeTtsObjectUrl = null;
    }
  }

  function stopSpeaking() {
    ttsPlaybackSeq += 1;
    clearTimeout(natiVisualSpeakTimer);
    if (activeTtsAbort) {
      try { activeTtsAbort.abort(); } catch (_) {}
      activeTtsAbort = null;
    }
    if (activeTtsAudio) {
      try {
        activeTtsAudio.pause();
        activeTtsAudio.removeAttribute("src");
        activeTtsAudio.load();
      } catch (_) {}
      activeTtsAudio = null;
    }
    revokeActiveTtsObjectUrl();
    if (isTtsSynthesizing) {
      isTtsSynthesizing = false;
      updateVoiceToggleButtons();
    }
    try {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    } catch (e) {}
    setNatiSpeakingState(false);
  }

  function playAudioSourceWithSeq(url, mySeq, forcePlay, revokeOnFinish) {
    return new Promise((resolve, reject) => {
      if (mySeq !== ttsPlaybackSeq || (!mentorVoiceEnabled && !forcePlay)) {
        resolve(false);
        return;
      }
      revokeActiveTtsObjectUrl();
      if (revokeOnFinish) {
        activeTtsObjectUrl = url;
      }
      const audio = new Audio(url);
      audio.preload = "auto";
      activeTtsAudio = audio;
      const finish = (ok) => {
        if (activeTtsAudio === audio) activeTtsAudio = null;
        if (revokeOnFinish && activeTtsObjectUrl === url) revokeActiveTtsObjectUrl();
        resolve(ok);
      };
      audio.onplay = () => setNatiSpeakingState(true);
      audio.onended = () => finish(true);
      audio.onerror = () => finish(false);
      audio.play().then(() => {
        isTtsSynthesizing = false;
        updateVoiceToggleButtons();
        setNatiSpeakingState(true);
      }).catch(err => {
        if (activeTtsAudio === audio) activeTtsAudio = null;
        if (revokeOnFinish && activeTtsObjectUrl === url) revokeActiveTtsObjectUrl();
        setNatiSpeakingState(false);
        reject(err);
      });
    });
  }

  function playWavBlobWithSeq(blob, mySeq, forcePlay) {
    const url = URL.createObjectURL(blob);
    return playAudioSourceWithSeq(url, mySeq, forcePlay, true);
  }

  function playStaticUrlWithSeq(url, mySeq, forcePlay) {
    return playAudioSourceWithSeq(url, mySeq, forcePlay, false);
  }

  function escapeRegexStr(s) {
    return String(s || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function canonicalizeDynamicSocialText(rawText) {
    let s = String(rawText || "");
    if (!s) return "";
    if (socialState && socialState.studentName) {
      const escName = escapeRegexStr(socialState.studentName);
      s = s.replace(new RegExp(`,?\\s*\\*{0,2}${escName}\\*{0,2}`, "gi"), "");
    }
    s = s
      .replace(/\b(Tanıştığımıza çok sevindim|Memnun oldum|Hoş geldin|Ne güzel tanışmak|Tekrar merhaba)\s+\*\*[^*]+\*\*/gi, "$1")
      .replace(/\b(Merhaba|Selam)\s+\*\*[^*]+\*\*/gi, "$1")
      .replace(/\bHarika\s+\*\*[^*]+\*\*(?=!)/gi, "Harika")
      .replace(/Ekrandaki\s+\*\*[^*]+\*\*\s+adımına\s+birlikte\s+bakalım\s+mı\?/gi, "Ekrandaki **matematik** adımına birlikte bakalım mı?")
      .replace(/Ekrandaki\s+\*\*[^*]+\*\*\s+adımına\s+birlikte\s+göz\s+atalım\s+mı\?/gi, "Ekrandaki **matematik** adımına birlikte göz atalım mı?")
      .replace(/hazırsan\s+\*\*[^*]+\*\*\s+çalışmamıza/gi, "hazırsan **matematik** çalışmamıza")
      .replace(/ilerleyince\s+\*\*[^*]+\*\*\s+çalışmak/gi, "ilerleyince **matematik** çalışmak")
      .replace(/Bugün\s+\*\*[^*]+\*\*\s+konusunda/gi, "Bugün **matematik** konusunda")
      .replace(/\*\*[^*]+\*\*\s+keşfimize\s+başlayalım\s+mı\?/gi, "**matematik** keşfimize başlayalım mı?")
      .replace(/\*\*[^*]+\*\*\s+adımında\s+ilk\s+hangi\s+sayıları\s+inceleyelim\?/gi, "**matematik** adımında ilk hangi sayıları inceleyelim?")
      .replace(/Ekrandaki\s+\*\*[^*]+\*\*\s+sorusunda/gi, "Ekrandaki **bu matematik konusu** sorusunda")
      .replace(/Şimdi\s+konumuz\s+\*\*[^*]+\*\*/gi, "Şimdi konumuz **bu matematik konusu**")
      .replace(/soruda\s+\*\*\d+\*\*\s+sayısıyla\s+ilk/gi, "soruda ilk")
      .replace(/ekrandaki\s+\*\*[^*]+\*\*\s+sorumuza/gi, "ekrandaki **bu matematik konusu** sorumuza")
      .replace(/Burada\s+odağımız\s+\*\*[^*]+\*\*/gi, "Burada odağımız **bu matematik konusu**")
      .replace(/ekrandaki\s+\*\*[^*]+\*\*\s+adımına\s+verelim/gi, "ekrandaki **bu matematik konusu** adımına verelim")
      .replace(/\*\*[^*]+\*\*\s+kuralına\s+göre\s+ilk\s+işlemi\s+sen\s+kurar\s+mısın\?/gi, "**bu matematik konusu** kuralına göre ilk işlemi sen kurar mısın?")
      .replace(/\*\*[^*]+\*\*\s+adımında\s+\*\*\d*\*\*\s+sayısı\s+için\s+seçili\s+kutuda/gi, "Bu yöntem adımında seçili kutuda")
      .replace(/\s+([!.,?])/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    return s;
  }

  function resolvePreRecordedAudioUrls(rawText) {
    const manifest = window.NATI_AUDIO_MANIFEST;
    if (!manifest || typeof manifest !== "object") return null;

    const rawTrimmed = String(rawText || "").trim();
    if (!rawTrimmed) return null;

    const clean = normalizeSpokenTurkish(rawTrimmed);
    if (clean && manifest[clean]) {
      return [manifest[clean]];
    }

    const canonRaw = canonicalizeDynamicSocialText(rawTrimmed);
    const canonNorm = normalizeSpokenTurkish(canonRaw);
    if (canonNorm && manifest[canonNorm]) {
      return [manifest[canonNorm]];
    }

    if (/^Harika!\s*🚀\s*/i.test(canonRaw)) {
      const readyPrefixNorm = normalizeSpokenTurkish("Harika! 🚀");
      const subRest = canonRaw.replace(/^Harika!\s*🚀\s*/i, "").trim();
      const subUrls = subRest ? resolvePreRecordedAudioUrls(subRest) : null;
      if (manifest[readyPrefixNorm] && subUrls && subUrls.length) {
        return [manifest[readyPrefixNorm], ...subUrls];
      }
    }

    if (typeof SHORT_MOTIVATIONS !== "undefined" && Array.isArray(SHORT_MOTIVATIONS)) {
      const matchedPep = SHORT_MOTIVATIONS.find(p => rawTrimmed.startsWith(p));
      if (matchedPep) {
        const pepNorm = normalizeSpokenTurkish(matchedPep);
        const pepUrl = manifest[pepNorm];
        if (pepUrl) {
          const rest = rawTrimmed.slice(matchedPep.length).trim();
          const restNorm = normalizeSpokenTurkish(rest);
          const restCanon = normalizeSpokenTurkish(canonicalizeDynamicSocialText(rest));
          const directRestUrl = manifest[restNorm] || manifest[restCanon];
          if (directRestUrl) {
            return [pepUrl, directRestUrl];
          }
          const wrongOptPrefix = "Seçtiğin şık sorudaki koşulu sağlamadı.";
          if (rest.startsWith(wrongOptPrefix)) {
            const pNorm = normalizeSpokenTurkish(wrongOptPrefix);
            const tailNorm = normalizeSpokenTurkish(rest.slice(wrongOptPrefix.length).trim());
            if (manifest[pNorm] && manifest[tailNorm]) {
              return [pepUrl, manifest[pNorm], manifest[tailNorm]];
            }
          }
          if (!localAiServerOnline) {
            const unitNo = (currentContext && currentContext.unit && currentContext.unit.unitNo) || 1;
            const coreNorm = normalizeSpokenTurkish(buildUnitScreenConceptCore(unitNo, {}));
            return manifest[coreNorm] ? [pepUrl, manifest[coreNorm]] : [pepUrl];
          }
        }
      }
    }

    return null;
  }

  function speakWithBrowserFallback(rawText, mySeq) {
    return new Promise((resolve) => {
      if (!mentorVoiceEnabled || !("speechSynthesis" in window)) {
        resolve(false);
        return;
      }
      if (typeof mySeq === "number" && mySeq !== ttsPlaybackSeq) {
        resolve(false);
        return;
      }
      try {
        window.speechSynthesis.cancel();
        const clean = cleanTextForBrowserSpeech(rawText);
        if (!clean) {
          resolve(false);
          return;
        }
        const utter = new SpeechSynthesisUtterance(clean);
        utter.lang = "tr-TR";
        utter.rate = 1.04;
        utter.pitch = 1.12;
        let settled = false;
        const finish = (ok) => {
          if (settled) return;
          settled = true;
          setNatiSpeakingState(false);
          resolve(ok);
        };
        const safetyTimer = setTimeout(() => finish(true), Math.min(9000, Math.max(2500, clean.length * 85)));
        utter.onstart = () => setNatiSpeakingState(true);
        utter.onend = () => {
          clearTimeout(safetyTimer);
          finish(true);
        };
        utter.onerror = () => {
          clearTimeout(safetyTimer);
          finish(false);
        };
        window.speechSynthesis.speak(utter);
      } catch (e) {
        setNatiSpeakingState(false);
        resolve(false);
      }
    });
  }

  async function speakMentorMessage(rawText, opts) {
    const forceSpeak = Boolean(opts && opts.force);
    if (!mentorVoiceEnabled && !forceSpeak) return false;
    const clean = cleanTextForSpeech(rawText);
    if (!clean) return false;

    stopSpeaking();
    const mySeq = ttsPlaybackSeq;

    const preUrls = (opts && opts.voiceId && elevenLabsEnabled) ? null : resolvePreRecordedAudioUrls(rawText);
    if (preUrls && preUrls.length > 0) {
      try {
        let playedAny = false;
        for (let i = 0; i < preUrls.length; i++) {
          if (mySeq !== ttsPlaybackSeq || (!mentorVoiceEnabled && !forceSpeak)) {
            setNatiSpeakingState(false);
            return false;
          }
          const ok = await playStaticUrlWithSeq(preUrls[i], mySeq, forceSpeak);
          if (ok) playedAny = true;
        }
        if (mySeq === ttsPlaybackSeq) {
          setNatiSpeakingState(false);
        }
        if (playedAny) return true;
      } catch (err) {
        if (mySeq === ttsPlaybackSeq) setNatiSpeakingState(false);
        if (err && err.name === "NotAllowedError") return false;
      }
    }

    const host = (window.location && window.location.hostname) || "";
    const isLocalHost = /^(localhost|127\.0\.0\.1)$/i.test(host);
    const canTryServerTts = Boolean(elevenLabsEnabled || localTtsAvailable || activeApiBase !== "" || (localAiServerOnline && isLocalHost) || isLocalHost);

    if (canTryServerTts) {
      const base = activeApiBase || "";
      const chunks = (elevenLabsEnabled || clean.length <= 280) ? [clean] : splitSpeechChunks(clean, 2);
      const ctrl = new AbortController();
      activeTtsAbort = ctrl;
      isTtsSynthesizing = true;
      updateVoiceToggleButtons();

      try {
        const blobPromises = chunks.map(chunkText =>
          fetch(`${base}/api/nartes/tts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: ctrl.signal,
            body: JSON.stringify({
              text: chunkText,
              voiceId: (opts && opts.voiceId) || undefined
            })
          }).then(async resp => {
            if (!resp.ok) throw new Error(`TTS HTTP ${resp.status}`);
            const prov = resp.headers.get("x-tts-provider");
            if (prov === "elevenlabs") {
              elevenLabsEnabled = true;
            }
            return resp.blob();
          })
        );

        let playedAny = false;
        for (let i = 0; i < blobPromises.length; i++) {
          if (mySeq !== ttsPlaybackSeq || (!mentorVoiceEnabled && !forceSpeak)) {
            setNatiSpeakingState(false);
            return false;
          }
          const blob = await blobPromises[i];
          if (mySeq !== ttsPlaybackSeq || (!mentorVoiceEnabled && !forceSpeak)) {
            setNatiSpeakingState(false);
            return false;
          }
          const ok = await playWavBlobWithSeq(blob, mySeq, forceSpeak);
          if (ok) playedAny = true;
        }
        if (mySeq === ttsPlaybackSeq) {
          setNatiSpeakingState(false);
        }
        localTtsAvailable = true;
        localTtsReady = true;
        return playedAny;
      } catch (err) {
        if (mySeq === ttsPlaybackSeq) setNatiSpeakingState(false);
        if (err && err.name === "AbortError") return false;
        if (mySeq !== ttsPlaybackSeq || (!mentorVoiceEnabled && !forceSpeak)) return false;
      } finally {
        if (activeTtsAbort === ctrl) activeTtsAbort = null;
        if (mySeq === ttsPlaybackSeq) {
          isTtsSynthesizing = false;
          updateVoiceToggleButtons();
        }
      }
    }

    if (mySeq !== ttsPlaybackSeq || (!mentorVoiceEnabled && !forceSpeak)) return false;
    return speakWithBrowserFallback(rawText, mySeq);
  }

  function sanitizeHintWithoutAnswer(hintText, stop, extraAnswerToMask) {
    if (!hintText) return "";
    let clean = stripHtml(hintText);
    if (stop && stop.options && stop.correctLetter) {
      const correctOpt = stop.options.find(o => o.letter === stop.correctLetter);
      if (correctOpt) {
        const rawAns = stripHtml(correctOpt.text).trim();
        if (rawAns && clean.includes(rawAns)) {
          clean = clean.split(rawAns).join("aradığımız değer");
        }
      }
    }
    if (stop && stop.quickCorrect) {
      const rawQuick = stripHtml(stop.quickCorrect).trim();
      if (rawQuick && clean.includes(rawQuick)) {
        clean = clean.split(rawQuick).join("doğru seçenek");
      }
    }
    if (extraAnswerToMask !== undefined && extraAnswerToMask !== null) {
      const rawExtra = stripHtml(String(extraAnswerToMask)).trim();
      if (rawExtra && rawExtra.length >= 2 && clean.includes(rawExtra)) {
        clean = clean.split(rawExtra).join("doğru kavram");
      }
    }
    return clean;
  }

  // ==========================================================================
  // 2. ADIM ADIM İLERLEYEN SOKRATİK İPUCU MOTORU + 3 SANİYELİK BİLGİ KUTUSU
  //    - 1. denemede: Daha genel kavramsal hatırlatma
  //    - 2. denemede: Seçilen yanlış cevaba göre özel yönlendirme
  //    - 3.+ denemede: Adım adım işlem / ilişki ipucu (cevabı doğrudan vermeden)
  //    - Her yanlışta küçük bilgi kutusu açılır; 3 sn dolmadan "Okudum, anladım"
  //      tiklenemez, tiklenince tekrar cevap verme hakkı açılır (sınırsız hak).
  // ==========================================================================
  const MAX_MENTOR_WORDS = 25;

  function countWordsClient(str) {
    const clean = String(str || "").trim();
    if (!clean) return 0;
    return clean.split(/\s+/).filter(Boolean).length;
  }

  function enforceMax25WordsClient(rawText, maxWords) {
    const cap = maxWords || MAX_MENTOR_WORDS;
    const text = String(rawText || "").replace(/\s+/g, " ").trim();
    if (!text || countWordsClient(text) <= cap) return text;

    const slots = [];
    const masked = text.replace(/\$[^$]+\$/g, m => {
      slots.push(m);
      return `__M${slots.length - 1}__`;
    });
    const sentences = masked
      .split(/(?<=[.!?])\s+/)
      .map(p => p.replace(/__M(\d+)__/g, (_, i) => slots[Number(i)] || "").trim())
      .filter(Boolean);

    if (sentences.length >= 2) {
      const last = sentences[sentences.length - 1];
      const lastTwo = `${sentences[sentences.length - 2]} ${last}`.trim();
      if (countWordsClient(lastTwo) <= cap) return lastTwo;
      const firstLast = `${sentences[0]} ${last}`.trim();
      if (countWordsClient(firstLast) <= cap) return firstLast;
      if (countWordsClient(sentences[0]) <= cap && countWordsClient(sentences[0]) >= 5) return sentences[0];
    }

    const tokens = text.match(/\$[^$]+\$|\S+/g) || [];
    const kept = [];
    let total = 0;
    for (const tok of tokens) {
      const w = countWordsClient(tok);
      if (total + w > cap) break;
      kept.push(tok);
      total += w;
    }
    let clipped = kept.join(" ").replace(/[,;:\-–—]+$/, "").trim();
    if ((clipped.match(/\*\*/g) || []).length % 2 === 1) {
      clipped = clipped.replace(/\*\*(?!.*\*\*)/, "");
    }
    if (clipped && !/[.!?]$/.test(clipped)) {
      clipped += text.includes("?") ? "?" : ".";
    }
    return clipped;
  }

  function diagnoseSpecificWrongAttempt(detail, ctx) {
    const stop = (ctx && ctx.stop) || {};
    const wrongVal = detail && detail.wrongValue !== undefined ? String(detail.wrongValue).trim() : "";
    const targetInfo = detail && detail.targetLabel ? String(detail.targetLabel).trim() : "";
    const customHint = detail && detail.customHint
      ? sanitizeHintWithoutAnswer(detail.customHint, stop, detail.correctAnswerToMask)
      : "";

    const activeNums = extractStopKeyNumbers(stop, detail);
    const activeTarget = activeNums.mainNum;

    if (stop.type === "concept") {
      if (wrongVal === "katıdır") {
        return `**"katıdır"** büyük sonuç içindir; kalansız bölen küçük sayıya **çarpan (bölen)** denir. Hangisi uyar?`;
      }
      if (wrongVal === "çarpanıdır" || wrongVal === "bölenidir") {
        return activeTarget
          ? `Burada $${activeTarget}$ için büyük sayının durumu soruluyor: böleni mi, **katı** mı?`
          : `Burada büyük sayının küçük sayıya göre durumu soruluyor: böleni mi, **katı** mı?`;
      }
      if (wrongVal === "kalanıdır" || wrongVal === "farkıdır") {
        return `Burada kalan $0$; tam çarpma-bölme ilişkisi var. Bölen ve kat kavramlarından hangisi uygun?`;
      }
      if (wrongVal === "kalanlı" || wrongVal === "ondalıklı") {
        return `Bölme işleminde kalan $0$ olduğunda bu bölünmeye ne ad veririz?`;
      }
      if (wrongVal === "1") {
        return `Asal sayılar $1$'den büyük olmalıdır. En küçük çift asal sayımız kaçtır?`;
      }
    }

    if (stop.type === "video") {
      if (wrongVal.includes("farklı") && activeTarget) {
        return `$${activeTarget}$ sayısının baştan ve sondan eşleşen çarpan çiftlerini tek tek sayar mısın?`;
      }
    }

    if (stop.type === "activity") {
      if (stop.activityMode === "rainbow_pairs" && stop.targetNumber) {
        const num = parseInt(wrongVal, 10);
        if (!isNaN(num)) {
          const rem = stop.targetNumber % num;
          if (rem !== 0) {
            return `$${num}$ sayısı $${stop.targetNumber}$'ü tam bölmez (kalan $${rem}$). Çarpımı $${stop.targetNumber}$ veren çarpan hangisi?`;
          }
          return `$${num}$ bir çarpandır ama seçili kutunun küçükten büyüğe sırasına uymuyor!`;
        }
      }
      if (stop.activityMode === "factor_tree") {
        return `**${targetInfo || "Bu dal"}** için üstteki sayıyı yanındaki çarpana bölüp sonucu kontrol eder misin?`;
      }
      if (stop.activityMode === "ebob_ekok_sort" || stop.activityMode === "coprime_check" || stop.activityMode === "custom_sort") {
        return `Bütünü eş parçalara mı bölüyoruz (EBOB), yoksa adımları ortak katta mı buluşturuyoruz (EKOK)?`;
      }
    }

    if (stop.type === "game") {
      if (stop.gameType === "factor_hunter" && detail && detail.targetNumber) {
        const t = detail.targetNumber;
        const n = parseInt(wrongVal, 10);
        const rem = !isNaN(n) ? (t % n) : null;
        return `$${wrongVal}$ sayısı $${t}$'yi tam bölmez (kalan $${rem !== null ? rem : "\\neq 0"}$). Kalanı $0$ yapan böleni seç!`;
      }
      return enforceMax25WordsClient(`**${wrongVal}** kuralı sağlamadı. ${customHint || "Sayılar arasındaki işlem ilişkisini tekrar hesaplayalım!"}`, 19);
    }

    if (stop.type === "question") {
      const cleanH = sanitizeHintWithoutAnswer(stop.hint, stop);
      return enforceMax25WordsClient(
        `Seçtiğin şık sorudaki koşulu sağlamadı. ${cleanH || "Verilen değerleri kurala yerleştirip ilk işlemi kontrol et!"}`,
        19
      );
    }

    return enforceMax25WordsClient(
      customHint || "Seçimin koşulu sağlamadı; ekrandaki sayılar arasındaki ilişkiyi tekrar kontrol edelim!",
      19
    );
  }

  // ==========================================================================
  // 2.B SINIRSIZ, TEKRARSIZ, %100 EKRAN KONUSUNA BAĞLI & <=25 KELİME SOKRATİK MOTOR
  //     - Asla 25 kelimeyi geçmez; alakasız nesne/hikaye uydurmaz.
  //     - Doğrudan o an ekrandaki matematik konusunu ve sayılarını kullanarak
  //       kısa motivasyon + en temel toplama/çarpma/bölme adımlarına iner.
  // ==========================================================================
  const SHORT_MOTIVATIONS = [
    "Hiç sorun değil! 😊",
    "Güzel deneme! ✨",
    "Pes etme, yaklaştın! 💪",
    "Adım adım çözelim! 🌱",
    "Cesaretin harika! 🌟",
    "Birlikte başaracağız! 🤝",
    "Çok iyi gidiyorsun! 🎯",
    "Hiç acelemiz yok! 💡",
    "Gayretin çok değerli! 🧭",
    "Sakince tekrar bakalım! 🔍",
    "Deneyerek öğreniyoruz! 🧩",
    "Az kaldı, başaracaksın! 🚀"
  ];

  function pickFreshMotivation(attemptNo) {
    const used = Array.isArray(studentTrace.usedMotivationIndices) ? studentTrace.usedMotivationIndices : [];
    const available = [];
    for (let i = 0; i < SHORT_MOTIVATIONS.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let chosenIdx;
    if (available.length > 0) {
      chosenIdx = available[attemptNo % available.length];
    } else {
      studentTrace.usedMotivationIndices = [];
      chosenIdx = attemptNo % SHORT_MOTIVATIONS.length;
    }
    studentTrace.usedMotivationIndices.push(chosenIdx);
    return SHORT_MOTIVATIONS[chosenIdx];
  }

  function extractStopKeyNumbers(stop, detail) {
    const liveTask = studentTrace && studentTrace.liveTask ? studentTrace.liveTask : null;
    if (liveTask && Array.isArray(liveTask.numbers) && liveTask.numbers.length > 0) {
      const liveUnique = [...new Set(liveTask.numbers.map(Number).filter(n => Number.isFinite(n) && n >= 2 && n <= 2000))];
      const wrongStr = detail && detail.wrongValue !== undefined ? String(detail.wrongValue) : "";
      const wrongNumMatch = wrongStr.match(/\b\d{1,4}\b/);
      const wrongNum = wrongNumMatch ? parseInt(wrongNumMatch[0], 10) : null;
      return {
        mainNum: (liveTask.targetNumber ? Number(liveTask.targetNumber) : null) || liveUnique[0] || null,
        secondNum: liveUnique[1] || null,
        allNums: liveUnique,
        wrongNum: wrongNum && wrongNum >= 1 ? wrongNum : null
      };
    }

    const rawSources = [
      detail && detail.targetLabel ? stripHtml(detail.targetLabel) : "",
      stop && stop.targetNumber ? String(stop.targetNumber) : "",
      stop && stop.rootNumber ? String(stop.rootNumber) : "",
      stop && stop.stem ? stripHtml(stop.stem) : "",
      stop && stop.subtitle ? stripHtml(stop.subtitle) : "",
      stop && stop.sentenceHtml ? stripHtml(stop.sentenceHtml) : "",
      stop && stop.quickQuestion ? stripHtml(stop.quickQuestion) : ""
    ].join(" ");
    const nums = (rawSources.match(/\b\d{1,4}\b/g) || [])
      .map(n => parseInt(n, 10))
      .filter(n => n >= 2 && n <= 2000);
    const uniqueNums = [...new Set(nums)];
    const wrongStr = detail && detail.wrongValue !== undefined ? String(detail.wrongValue) : "";
    const wrongNumMatch = wrongStr.match(/\b\d{1,4}\b/);
    const wrongNum = wrongNumMatch ? parseInt(wrongNumMatch[0], 10) : null;
    return {
      mainNum: uniqueNums[0] || null,
      secondNum: uniqueNums[1] || null,
      allNums: uniqueNums,
      wrongNum: wrongNum && wrongNum >= 1 ? wrongNum : null
    };
  }

  function buildRepeatedAdditionDemo(n) {
    const num = Number(n);
    if (!Number.isFinite(num) || num < 4 || num > 144) {
      return null;
    }
    const target = num;
    let d = 2;
    for (let k = 2; k <= 12; k++) {
      if (target % k === 0 && target / k >= 2 && target / k <= 15) {
        d = k;
        break;
      }
    }
    const groupVal = target % d === 0 ? target / d : Math.max(2, Math.floor(target / 2));
    const groupCount = target % d === 0 ? d : 2;
    const cleanTarget = groupVal * groupCount;
    const sumChain = Array.from({ length: Math.min(groupCount, 4) }, () => String(groupVal)).join("+")
      + (groupCount > 4 ? "+\\dots" : "");
    return { cleanTarget, groupCount, groupVal, sumChain };
  }

  // 4. Deneme: Ekrandaki ünite konusunun en sade matematiksel özü (Alakasız benzetme YOK, <=18 kelime)
  function buildUnitScreenConceptCore(unitNo, keyNums) {
    const uNo = Number(unitNo || 1);
    const n = keyNums && keyNums.mainNum ? keyNums.mainNum : null;
    switch (uNo) {
      case 1:
        return n
          ? `$${n}$ sayısını kalan $0$ olacak şekilde tam bölen sayıları küçükten büyüğe düşünelim: ilk çift hangisi?`
          : `Ekrandaki sayıyı kalan $0$ olacak şekilde tam bölen pozitif sayıları küçükten büyüğe eşleştirir misin?`;
      case 2:
        return `Üslü ifadede üstteki sayı tabanı toplamaz; tabanı yan yana yazıp çarpar. İlk çarpımı hesaplar mısın?`;
      case 3:
        return `Karekök, "Hangi sayıyı kendisiyle çarparsam içerdeki sayıyı verir?" sorusudur. En yakın tam kare sayı kaçtır?`;
      case 4:
        return `Veri analizinde önce tüm değerleri toplayıp bütünü bul, sonra $360^\\circ$ veya istenen oranla eşleştir!`;
      case 5:
        return `Olasılık = İstenen durum sayısı $\\div$ Tüm olası durumların toplamı. Önce paydadaki toplam durumu sayalım mı?`;
      case 6:
        return `Cebirsel ifadelerde sadece benzer terimler ($x$'liler kendi arasında, sayılar kendi arasında) toplanıp çıkarılır. Hangileri benzer?`;
      case 7:
        return `Denklemde eşitliğin iki tarafına aynı ters işlemi uygulayarak bilinmeyeni yalnız bırak. İlk hangi sayıyı karşıya atalım?`;
      case 8:
        return `"En az" $\\ge$, "en fazla" $\\le$ demektir; negatif sayıyla çarpıp bölersek yön değişir. Sınır değerimiz kaç?`;
      case 9:
        return `Üçgende iki kenarın toplamı üçüncü kenardan büyük, farkı küçük olmalıdır; dik üçgende $a^2+b^2=c^2$ kurulur!`;
      case 10:
        return `Benzer şekillerde eş açılar aynıdır; karşılıklı kenarları aynı sırayla bölerek benzerlik oranını bulabilir misin?`;
      case 11:
        return `Ötelemede koordinatlara ekleme-çıkarma yapılır, yön değişmez; yansımada eksene eşit uzaklıkta işaret değişir!`;
      default:
        return `Geometrik cisimlerde hacim = Taban Alanı $\\times$ Yükseklik; yüzey alanı ise açınımdaki tüm yüzlerin toplamıdır!`;
    }
  }

  // 5. Deneme: Ekrandaki sayılarla en temel toplama / çarpma / bölme kökü (<=19 kelime)
  function buildBasicMathRootStep(unitNo, keyNums) {
    const uNo = Number(unitNo || 1);
    const demo = buildRepeatedAdditionDemo(keyNums.mainNum);
    const wNum = keyNums.wrongNum;

    if (wNum && wNum >= 2 && wNum <= 50 && keyNums.mainNum && keyNums.mainNum > wNum && keyNums.mainNum % wNum !== 0 && uNo === 1) {
      const rem = keyNums.mainNum % wNum;
      return `$${keyNums.mainNum}$ sayısını $${wNum}$ sayısına böldüğümüzde $${rem}$ kalanı çıkıyor. Kalanı $0$ yapan hangi sayıyı seçebiliriz?`;
    }
    if (uNo === 1 && demo) {
      return `Çarpma eşit grupları toplamaktır ($${demo.sumChain}=${demo.cleanTarget} \\Rightarrow ${demo.groupCount}\\times${demo.groupVal}$). Ekrandaki sayıyı hangi iki çarpan verir?`;
    }
    if (uNo === 1) {
      return `Ekrandaki sayıyı kalansız (kalan $0$) bölen en küçük doğal sayı çiftini adım adım dener misin?`;
    }
    if (uNo === 2) {
      return `Toplama ile çarpmayı ayır: $2+2+2=6$ iken $2\\times2\\times2=8$'dir. Tabanı kendisiyle adım adım çarpar mısın?`;
    }
    if (uNo === 3) {
      return `Tam kareleri sırayla hatırla: $2\\times2=4,\\; 3\\times3=9,\\; 4\\times4=16,\\; 5\\times5=25$. Sorudaki sayı hangisine uyuyor?`;
    }
    if (uNo === 6 || uNo === 7 || uNo === 8) {
      return `$x+x+x=3x$ toplamanın kısa yazılışıdır; çarpmanın tersi ise bölmedir. Bilinmeyeni bulmak için kaça bölmeliyiz?`;
    }
    return `Temel işleme inelim: Ekrandaki sayıları küçük adımlarla toplayıp veya eşit böldüğümüzde ilk hangi sonuç çıkıyor?`;
  }

  function buildUnlimitedDeepScaffolding(detail, ctx, attemptNo) {
    const stop = (ctx && ctx.stop) || {};
    const kaz = (ctx && ctx.kaz) || {};
    const unit = (ctx && ctx.unit) || {};
    const unitNo = Number(unit.unitNo || 1);
    const cleanStopHint = sanitizeHintWithoutAnswer((detail && detail.customHint) || stop.hint, stop, detail && detail.correctAnswerToMask);
    const keyNums = extractStopKeyNumbers(stop, detail);
    const pep = pickFreshMotivation(attemptNo);

    const rawSol = stop.solution ? stripHtml(stop.solution) : "";
    const solParts = rawSol.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
    const safeSolStep1 = solParts.length > 0
      ? sanitizeHintWithoutAnswer(solParts[0], stop, detail && detail.correctAnswerToMask)
      : "";

    const lensIdx = (attemptNo - 6) % 6;
    let core = "";
    let badgeTitle = "Temel Adım";

    if (lensIdx === 0) {
      badgeTitle = "Küçük Sayı Modeli";
      core = `Küçük örnekle düşün: $12 = 3 \\times 4$ kalansız bölünür. Aynı bölme kontrolünü **$${keyNums.mainNum}$** için yapar mısın?`;
    } else if (lensIdx === 1) {
      badgeTitle = "İlk İşlem Basamağı";
      core = safeSolStep1
        ? `İlk işlemimiz: **${safeSolStep1}.** Buradan devam edince ne buluyorsun?`
        : `Önce ekrandaki **$${keyNums.mainNum}$** sayısını $1, 2, 3\\dots$ sırasıyla deneyip kalansız bölen ilk çifti yazar mısın?`;
    } else if (lensIdx === 2) {
      badgeTitle = "Ters İşlem Sağlaması";
      core = `Seçenekleri ters işlemle (çarpma veya toplama sağlamasıyla) yerine koyup dene; hangisi sorudaki eşitliği tam sağlıyor?`;
    } else if (lensIdx === 3) {
      badgeTitle = "Temel İşlem Kökü";
      core = buildBasicMathRootStep(unitNo, keyNums);
    } else if (lensIdx === 4) {
      badgeTitle = "Kazanım Özeti";
      core = cleanStopHint || buildUnitScreenConceptCore(unitNo, keyNums);
    } else {
      badgeTitle = "Seçenek Eleme";
      const tried = studentTrace.wrongChoices.slice(-2).join(", ");
      core = `${tried ? `Denediğin (${tried}) elendi. ` : ""}Kalan seçeneklerden hangisi **${kaz.title || "sorudaki"}** şartını tam sağlıyor?`;
    }

    const combined = enforceMax25WordsClient(`${pep} ${core}`, MAX_MENTOR_WORDS);
    return {
      badge: `💡 ${attemptNo}. İpucu • ${badgeTitle}`,
      mood: attemptNo % 2 === 0 ? "thinking" : "encourage",
      body: combined
    };
  }

  function recordUniqueHint(hintObj, attemptNo) {
    hintObj.body = enforceMax25WordsClient(hintObj.body, MAX_MENTOR_WORDS);
    if (!Array.isArray(studentTrace.shownHintBodies)) {
      studentTrace.shownHintBodies = [];
    }
    if (studentTrace.shownHintBodies.includes(hintObj.body)) {
      const altPep = pickFreshMotivation(attemptNo + 3);
      const stripped = hintObj.body.replace(/^[^.!?]+[.!?]\s*/, "");
      hintObj.body = enforceMax25WordsClient(`${altPep} ${stripped || hintObj.body}`, MAX_MENTOR_WORDS);
    }
    studentTrace.shownHintBodies.push(hintObj.body);
    if (studentTrace.shownHintBodies.length > 40) {
      studentTrace.shownHintBodies = studentTrace.shownHintBodies.slice(-40);
    }
    return hintObj;
  }

  function buildProgressiveSocraticHint(detail, ctx, attemptNo) {
    const stop = (ctx && ctx.stop) || {};
    const kaz = (ctx && ctx.kaz) || {};
    const unit = (ctx && ctx.unit) || {};
    const unitNo = Number(unit.unitNo || 1);
    const cleanStopHint = sanitizeHintWithoutAnswer(
      (detail && detail.customHint) || (studentTrace.liveTask && studentTrace.liveTask.hint) || stop.hint,
      stop,
      detail && detail.correctAnswerToMask
    );
    const keyNums = extractStopKeyNumbers(stop, detail);
    const pep = pickFreshMotivation(attemptNo);

    let generalRule = "";
    if (studentTrace.liveTask && studentTrace.liveTask.promptText) {
      generalRule = sanitizeHintWithoutAnswer(studentTrace.liveTask.promptText, stop, detail && detail.correctAnswerToMask);
    } else if (Array.isArray(stop.explanation) && stop.explanation.length > 0) {
      generalRule = sanitizeHintWithoutAnswer(stop.explanation[0], stop, detail && detail.correctAnswerToMask);
    } else if (!studentTrace.liveTask && unit && Array.isArray(unit.stops) && stop.type === "concept") {
      const conceptStop = unit.stops.find(s => s.kazanimId === stop.kazanimId && s.type === "concept");
      if (conceptStop && Array.isArray(conceptStop.explanation) && conceptStop.explanation[0]) {
        generalRule = sanitizeHintWithoutAnswer(conceptStop.explanation[0], stop, detail && detail.correctAnswerToMask);
      }
    }

    if (attemptNo <= 1) {
      let shortRule = "";
      if (cleanStopHint) {
        shortRule = cleanStopHint;
      } else if (generalRule) {
        shortRule = generalRule.split(/[.!?]+/).map(s => s.trim()).filter(Boolean)[0] || "";
      }
      const intro = shortRule || cleanStopHint || `**${kaz.title || stop.title || "Bu konu"}** kuralına göre sayıları tekrar kontrol edelim!`;
      return recordUniqueHint({
        badge: "🧭 1. İpucu • Kısa Hatırlatma",
        mood: "encourage",
        body: `${pep} ${intro}`
      }, attemptNo);
    }

    if (attemptNo === 2) {
      return recordUniqueHint({
        badge: "🔎 2. İpucu • Seçimini İnceleyelim",
        mood: "thinking",
        body: `${pep} ${diagnoseSpecificWrongAttempt(detail, ctx)}`
      }, attemptNo);
    }

    if (attemptNo === 3) {
      let closerGuide = "";
      if (stop.type === "question" && stop.solution) {
        const solSentences = stripHtml(stop.solution).split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
        const safeSetup = sanitizeHintWithoutAnswer(solSentences[0] || "", stop, detail && detail.correctAnswerToMask);
        closerGuide = safeSetup
          ? `İlk adım: **${safeSetup}.** Devamında hangi seçeneğe ulaşırsın?`
          : (cleanStopHint || buildUnitScreenConceptCore(unitNo, keyNums));
      } else {
        closerGuide = cleanStopHint || buildUnitScreenConceptCore(unitNo, keyNums);
      }
      return recordUniqueHint({
        badge: "🎯 3. İpucu • İlk İşlem Adımı",
        mood: "encourage",
        body: `${pep} ${closerGuide}`
      }, attemptNo);
    }

    if (attemptNo === 4) {
      return recordUniqueHint({
        badge: "📐 4. İpucu • Konunun Özü",
        mood: "encourage",
        body: `${pep} ${buildUnitScreenConceptCore(unitNo, keyNums)}`
      }, attemptNo);
    }

    if (attemptNo === 5) {
      return recordUniqueHint({
        badge: "🌱 5. İpucu • Temel Toplama & Çarpma",
        mood: "encourage",
        body: `${pep} ${buildBasicMathRootStep(unitNo, keyNums)}`
      }, attemptNo);
    }

    return recordUniqueHint(buildUnlimitedDeepScaffolding(detail, ctx, attemptNo), attemptNo);
  }

  function showSocraticHintBox(ctx, detail, attemptNo, onUnderstoodCallback) {
    initNartesMentorDOM();
    studentTrace.remediationLocked = true;
    playMentorSound("study_gate");

    if (gateCountdownTimer) {
      clearInterval(gateCountdownTimer);
      gateCountdownTimer = null;
    }

    let gateEl = document.getElementById("nartesStudyGateOverlay");
    if (!gateEl) {
      gateEl = document.createElement("div");
      gateEl.id = "nartesStudyGateOverlay";
      gateEl.className = "nartes-study-gate-overlay";
      document.body.appendChild(gateEl);
    }

    const hintData = buildProgressiveSocraticHint(detail, ctx, attemptNo);
    const WAIT_SECONDS = 3;
    let remainingMs = WAIT_SECONDS * 1000;
    const showInteractiveHelpBtn = attemptNo >= 2;

    gateEl.innerHTML = `
      <div class="nartes-socratic-box" role="dialog" aria-modal="true" aria-labelledby="nartesHintBadge">
        <div class="nsb-top">
          <div class="nsb-avatar">${getAvatarHtml("nartes-avatar-md", mentorVoiceEnabled ? "talking" : hintData.mood, true)}</div>
          <div class="nsb-meta">
            <span class="nsb-badge" id="nartesHintBadge">${hintData.badge}</span>
            <div class="nsb-sub">${attemptNo >= 4 ? "Nati en temel işlem mantığıyla yanında 🌱" : "Nati seni doğruya adım adım yönlendiriyor"}</div>
          </div>
        </div>

        <div class="nsb-body">${formatMarkdownAndMath(hintData.body)}</div>

        ${showInteractiveHelpBtn ? `
          <button type="button" class="nsb-chat-link-btn" id="nsbOpenDeepChatBtn">
            💬 Hâlâ karışık mı? Nati ile en temelden karşılıklı çözelim →
          </button>
        ` : ""}

        <div class="nsb-timer-track" aria-hidden="true">
          <div class="nsb-timer-fill" id="nsbTimerFill"></div>
        </div>

        <label class="nsb-tick-row is-locked" id="nsbTickLabel" for="nsgUnderstoodChk">
          <input type="checkbox" id="nsgUnderstoodChk" class="nsb-checkbox" disabled />
          <span class="nsb-tick-visual" id="nsbTickVisual">⏳</span>
          <span class="nsb-tick-text" id="nsbTickText">İpucunu dikkatle oku... (${WAIT_SECONDS} sn)</span>
        </label>
      </div>
    `;

    gateEl.hidden = false;
    renderMathInside(gateEl);
    setHeaderMascotMood(hintData.mood || "guiding");
    if (mentorVoiceEnabled) {
      speakMentorMessage(hintData.body);
    } else {
      pulseNatiVisualTalking(2300);
    }

    const chk = document.getElementById("nsgUnderstoodChk");
    const tickLabel = document.getElementById("nsbTickLabel");
    const tickVisual = document.getElementById("nsbTickVisual");
    const tickText = document.getElementById("nsbTickText");
    const timerFill = document.getElementById("nsbTimerFill");
    const openDeepChatBtn = document.getElementById("nsbOpenDeepChatBtn");

    if (openDeepChatBtn) {
      openDeepChatBtn.addEventListener("click", () => {
        if (gateCountdownTimer) {
          clearInterval(gateCountdownTimer);
          gateCountdownTimer = null;
        }
        studentTrace.remediationLocked = false;
        gateEl.hidden = true;
        if (typeof onUnderstoodCallback === "function") {
          onUnderstoodCallback();
        }
        applyPanelVisuals(true);
        const deepPrompt = attemptNo >= 4
          ? "Bu soruda zorlandım; ekrandaki sayılarla en temel toplama ve çarpma adımından kısaca anlatır mısın?"
          : "Bu soruda takıldım, ilk işlemi kısaca gösterir misin?";
        handleStudentQuestion(deepPrompt);
      });
    }

    // 3 saniyelik akıcı bar animasyonunu başlat
    requestAnimationFrame(() => {
      if (timerFill) {
        timerFill.style.transition = `width ${WAIT_SECONDS}s linear`;
        timerFill.style.width = "100%";
      }
    });

    gateCountdownTimer = setInterval(() => {
      remainingMs -= 250;
      if (remainingMs > 0) {
        const secLeft = Math.ceil(remainingMs / 1000);
        if (tickText) {
          tickText.textContent = `İpucunu dikkatle oku... (${secLeft} sn)`;
        }
      } else {
        clearInterval(gateCountdownTimer);
        gateCountdownTimer = null;
        if (chk) chk.disabled = false;
        if (tickLabel) tickLabel.classList.remove("is-locked");
        if (tickVisual) tickVisual.textContent = "";
        if (tickText) {
          tickText.innerHTML = `İpucunu okudum, <strong>anladım</strong> — Tekrar cevap ver`;
        }
      }
    }, 250);

    chk.addEventListener("change", () => {
      if (chk.disabled || !chk.checked) return;
      chk.disabled = true;
      if (tickLabel) tickLabel.classList.add("is-confirmed");
      if (tickVisual) tickVisual.textContent = "✓";
      if (tickText) tickText.innerHTML = `<strong>Okudum, anladım!</strong> Soruya dönülüyor...`;
      playMentorSound("understood");

      setTimeout(() => {
        studentTrace.remediationLocked = false;
        gateEl.hidden = true;
        if (typeof onUnderstoodCallback === "function") {
          onUnderstoodCallback();
        }
      }, 260);
    });
  }

  // ==========================================================================
  // 3. YEREL SUNUCU AI AKIŞ İSTEMCİSİ (Hem localhost hem canlı web sitesi uyumlu)
  // ==========================================================================
  function getCandidateApiBases() {
    const list = [];
    if (window.NARTES_AI_SERVER_URL) {
      list.push(String(window.NARTES_AI_SERVER_URL).replace(/\/+$/, ""));
    }
    const host = (window.location && window.location.hostname) || "";
    const isGitHubOrRemoteStatic = /github\.io$|problemcoz\.com$/i.test(host);
    if (!isGitHubOrRemoteStatic) {
      list.push("");
    }
    list.push("http://127.0.0.1:8080");
    list.push("http://localhost:8080");
    return [...new Set(list)];
  }

  async function checkLocalAiHealth() {
    const bases = getCandidateApiBases();
    for (const base of bases) {
      try {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), 1800);
        const resp = await fetch(`${base}/api/nartes/health`, {
          cache: "no-store",
          signal: ctrl.signal
        });
        clearTimeout(tid);
        if (!resp.ok) continue;
        const data = await resp.json();
        if (data && data.ok) {
          activeApiBase = base;
          localAiServerOnline = true;
          localTtsAvailable = Boolean(data.tts && (data.tts.ok || data.tts.installed || data.tts.loading));
          localTtsReady = Boolean(data.tts && data.tts.ready);
          elevenLabsEnabled = Boolean(data.tts && data.tts.elevenlabs && data.tts.elevenlabs.enabled);
          if (data.tts && data.tts.elevenlabs && data.tts.elevenlabs.voiceId) {
            elevenLabsVoiceId = data.tts.elevenlabs.voiceId;
          }
          const mName = String(data.model || "");
          localAiModelLabel = /gemma4|nartes-sokratik/i.test(mName) ? "Gemma 4 AI" : "Yerel AI";
          updateStatusTagUI();
          updateVoiceToggleButtons();
          return;
        }
      } catch (_) {}
    }
    localAiServerOnline = false;
    localTtsAvailable = false;
    localTtsReady = false;
    elevenLabsEnabled = false;
    localAiModelLabel = "Sokratik Rehber";
    updateStatusTagUI();
    updateVoiceToggleButtons();
  }

  function updateStatusTagUI() {
    const tagEl = document.getElementById("nartesHeadTag");
    const fabSub = document.querySelector("#nartesFabBtn .nartes-fab-text small");
    if (tagEl) {
      tagEl.textContent = localAiServerOnline ? `🟢 ${localAiModelLabel}` : "⚡ Sokratik Mod";
      tagEl.classList.toggle("is-online", localAiServerOnline);
    }
    if (fabSub && !isPanelOpen) {
      fabSub.textContent = localAiServerOnline ? `${localAiModelLabel} Aktif` : "Sokratik Rehber";
    }
  }

  function buildClientContextPayload(ctx) {
    const unit = (ctx && ctx.unit) || {};
    const kaz = (ctx && ctx.kaz) || {};
    const stop = (ctx && ctx.stop) || {};
    const gradeLabel = (window.NartesWelcome && typeof window.NartesWelcome.getGradeTrackLabel === "function")
      ? window.NartesWelcome.getGradeTrackLabel()
      : "";
    const payload = {
      unitNo: unit.unitNo || 1,
      unitTitle: unit.title || "Çarpanlar ve Katlar",
      gradeLabel,
      kazTitle: kaz.title || "",
      stopId: stop.id || 1,
      stopTitle: stop.title || "",
      stopType: stop.type || "concept"
    };
    const qIdx = typeof (ctx && ctx.activeQuestionIndex) === "number"
      ? ctx.activeQuestionIndex
      : (typeof stop.activeQuestionIndex === "number" ? stop.activeQuestionIndex : undefined);
    if (typeof qIdx === "number") {
      payload.activeQuestionIndex = qIdx;
    }
    if (stop.stem || stop.sentenceHtml || stop.quickQuestion || stop.activityMode) {
      payload.stop = {
        title: stop.title,
        subtitle: stop.subtitle || "",
        type: stop.type || "question",
        activityMode: stop.activityMode || "",
        activeQuestionIndex: typeof qIdx === "number" ? qIdx : 0,
        subQuestionBadge: stop.subQuestionBadge || "",
        stem: stop.stem || "",
        options: stop.options || [],
        correctLetter: stop.correctLetter || "",
        hint: stop.hint || "",
        solution: stop.solution || "",
        sentenceHtml: stop.sentenceHtml || "",
        blanks: stop.blanks || [],
        quickQuestion: stop.quickQuestion || "",
        quickChoices: stop.quickChoices || [],
        quickCorrect: stop.quickCorrect || ""
      };
    }
    return payload;
  }

  async function streamFromLocalServerAI(questionText, ctx, onChunk) {
    const host = (window.location && window.location.hostname) || "";
    if (/github\.io$|problemcoz\.com$/i.test(host) && !localAiServerOnline) {
      checkLocalAiHealth();
      return null;
    }
    if (activeStreamAbort) {
      try { activeStreamAbort.abort(); } catch (_) {}
    }
    const ctrl = new AbortController();
    activeStreamAbort = ctrl;

    const orderedBases = localAiServerOnline
      ? [activeApiBase, ...getCandidateApiBases().filter(b => b !== activeApiBase)]
      : getCandidateApiBases();

    try {
      let resp = null;
      for (const base of orderedBases) {
        try {
          const r = await fetch(`${base}/api/nartes/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: ctrl.signal,
            body: JSON.stringify({
              question: questionText,
              stream: true,
              context: buildClientContextPayload(ctx),
              wrongCount: studentTrace.wrongCount,
              attemptNo: Math.max(studentTrace.wrongCount, Math.floor(studentTrace.chatHistory.length / 2) + 1),
              wrongChoices: studentTrace.wrongChoices.slice(-5),
              filledBlanks: studentTrace.filledBlanks || {},
              activeBlankId: studentTrace.activeBlankId,
              liveScreen: studentTrace.liveScreen || null,
              liveTask: studentTrace.liveTask || null,
              studentName: socialState.studentName || "",
              history: studentTrace.chatHistory.slice(-6)
            })
          });
          if (r.ok && r.body) {
            activeApiBase = base;
            resp = r;
            break;
          }
        } catch (innerErr) {
          if (innerErr && innerErr.name === "AbortError") throw innerErr;
        }
      }

      if (!resp || !resp.body) {
        return null;
      }

      localAiServerOnline = true;
      updateStatusTagUI();

      const reader = resp.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      let accumulated = "";
      let finalOverride = null;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const evt = JSON.parse(line);
            if (evt.type === "meta" && evt.model && /gemma4|nartes-sokratik/i.test(evt.model)) {
              localAiModelLabel = "Gemma 4 AI";
              updateStatusTagUI();
            } else if (evt.type === "delta" && evt.text) {
              accumulated += evt.text;
              if (typeof onChunk === "function") onChunk(accumulated);
            } else if (evt.type === "done" && typeof evt.fullText === "string") {
              finalOverride = evt.fullText;
            }
          } catch (_) {}
        }
      }

      const result = (finalOverride !== null ? finalOverride : accumulated).trim();
      return result || null;
    } catch (err) {
      if (err && err.name === "AbortError") return null;
      return null;
    } finally {
      if (activeStreamAbort === ctrl) {
        activeStreamAbort = null;
      }
    }
  }

  // Sunucu kapalıyken (ör. uzak tablet/statik kullanım) devreye giren çok adımlı sembolik Sokratik yedek motor
  function gcdLocal(a, b) {
    let x = Math.abs(a), y = Math.abs(b);
    while (y !== 0) { const t = y; y = x % y; x = t; }
    return x;
  }

  function matchFriendlySocialTurn(rawText, ctx) {
    const clean = String(rawText || "").trim();
    if (!clean) return null;
    const lower = clean.toLocaleLowerCase("tr-TR");

    // Mesajda gerçek matematik içeriği (sayı, şık veya konu terimi) varsa doğrudan Sokratik matematik motoruna geç
    if (
      /\d/.test(lower) ||
      /(?:^|\s)[abcd]\s*(?:şıkkı|seçeneği|olur\s*mu|m[ıiuü]|doğru)/i.test(lower) ||
      /\b(çarpan|bölen|katı|katlar|asal|ebob|ekok|üslü|karekök|denklem|olasılık|üçgen|tablo|ağaç|gökkuşağı|boşluk|şık|seçenek|ipucu|çözüm|işlem|bölme|çarpma|toplama|çıkarma|formül|kural|nasıl\s*çöz|neden\s*yanlış|niye\s*yanlış)\b/i.test(lower)
    ) {
      return null;
    }

    const kaz = (ctx && ctx.kaz) || {};
    const unit = (ctx && ctx.unit) || {};
    const stop = (ctx && ctx.stop) || {};
    const liveTask = studentTrace && studentTrace.liveTask ? studentTrace.liveTask : null;
    const rawTopic = kaz.title || unit.title || "matematik";
    const shortTopic = String(rawTopic).replace(/^\d+\.\s*/, "").trim() || "matematik";
    const activeHint = (liveTask && liveTask.hint) || stop.hint;

    const NON_NAME_WORDS = new Set([
      "de", "da", "iyiyim", "iyi", "kötüyüm", "kötü", "harikayım", "harika",
      "süperim", "süper", "bomba", "fena", "idare", "yorgunum", "yorgun",
      "sıkıldım", "hazırım", "hazır", "başlayalım", "tamam", "olur", "evet",
      "hayır", "yok", "var", "anlamadım", "anladım", "bilmiyorum", "biliyorum",
      "yapamadım", "yapamıyorum", "çözemedim", "geldim", "buradayım",
      "öğrenciyim", "öğrenci", "merhaba", "merhabalar", "selam", "selamlar",
      "slm", "mrb", "hey", "günaydın", "naber", "nasılsın", "nasılsınız",
      "teşekkürler", "teşekkür", "sağol", "eyvallah", "matematik", "soru",
      "ipucu", "yardım", "biraz", "çok", "hiç", "pek", "gayet", "bugün",
      "şimdi", "sen", "peki", "kimsin", "lütfen"
    ]);

    function formatPersonName(rawWord) {
      const w = String(rawWord || "").trim();
      if (!w) return "";
      const lw = w.toLocaleLowerCase("tr-TR");
      if (NON_NAME_WORDS.has(lw)) return "";
      return w.charAt(0).toLocaleUpperCase("tr-TR") + lw.slice(1);
    }

    function extractStudentName() {
      let m = clean.match(/(?:benim\s+ad[ıi]m|ad[ıi]m|ismim)\s+([a-zçğıöşü]{2,16})\b/i);
      if (m && m[1]) {
        const cand = formatPersonName(m[1]);
        if (cand) return cand;
      }
      m = clean.match(/^ben\s+([a-zçğıöşü]{2,16})[!.,?\s]*$/i);
      if (m && m[1]) {
        const cand = formatPersonName(m[1]);
        if (cand) return cand;
      }
      if (socialState.lastSocialStage === "greeted_ask_name") {
        const single = clean.match(/^([a-zçğıöşü]{2,15})[!.?]*$/i);
        if (single && single[1]) {
          const cand = formatPersonName(single[1]);
          if (cand) return cand;
        }
      }
      return "";
    }

    const curName = socialState.studentName ? ` **${socialState.studentName}**` : "";
    const hasMoodWord = /\b(iyiyim|harikayım|süperim|çok iyiyim|bomba gibiyim|fena değil(?:im)?)\b/i.test(lower);
    const hasAskBack = /\b(sen\s*nasılsın|ya\s*sen|peki\s*sen|sen\s*iyi\s*misin|sen\s*naber)\b/i.test(lower);

    // 1. Birleşik Hal + Karşı Soru ("İyiyim, sen nasılsın?")
    if (hasMoodWord && hasAskBack) {
      socialState.lastSocialStage = "ready_bridge";
      saveSocialState();
      return {
        intent: "both_mood_and_ask",
        mood: "praise",
        reply: pickSocialVariant("both_mood_and_ask", [
          `Ben de çok iyiyim, teşekkür ederim${curName}! 😄 Enerjin harika; hazırsan **${shortTopic}** çalışmamıza keyifle başlayalım mı?`,
          `İyi olmana çok sevindim${curName}, ben de harikayım! 🌟 Bu güzel enerjiyle bugünkü matematik keşfimize geçelim mi?`,
          `Ben de süperim, çok sağ ol${curName}! 😊 İkimizin de keyfi yerindeyken ekrandaki adıma birlikte bakalım mı?`,
          `Harika, ben de çok iyiyim${curName}! ✨ Seninle matematik çalışmak çok keyifli olacak, başlayalım mı?`
        ])
      };
    }

    // 2. Hal Hatır Sorma ("Nasılsın?", "İyi misin?", "Naber?")
    if (/\b(nasılsın|nasılsınız|iyi\s*misin|naber|ne\s*haber|nasıl\s*gidiyor|keyifler\s*nasıl|halin\s*nasıl)\b/i.test(lower)) {
      socialState.lastSocialStage = "asked_how_are_you";
      saveSocialState();
      return {
        intent: "how_are_you",
        mood: "praise",
        reply: pickSocialVariant("how_are_you", [
          `İyiyim, teşekkür ederim; sen nasılsın? 😊 Seninle bugün keyifle matematik keşifleri yapacağımız için çok heyecanlıyım!`,
          `Çok iyiyim, sen nasılsın? 🌟 Birlikte adım adım ilerleyince **${shortTopic}** çalışmak gerçekten çok eğlenceli oluyor!`,
          `Harikayım, sorduğun için teşekkürler; peki sen nasılsın? 😊 Bugün matematiği hiç acele etmeden, severek öğreneceğiz!`,
          `İyiyim, sen nasılsın bakalım? 😄 Birlikte düşündüğümüzde her matematik adımının ne kadar kolaylaştığını göreceksin!`,
          `Enerjim süper, iyiyim; sen nasılsın? ✨ Bugün **${shortTopic}** konusunda sana yol arkadaşı olmak çok güzel!`,
          `Çok iyiyim, iyi ki geldin! Sen nasılsın? 😊 Bugün güzel bir enerjiyle harika matematik çalışmaları yapacağız.`
        ])
      };
    }

    // 3. İsimle Tanışma ("Ben Zeynep", "Adım Ali")
    const extractedName = extractStudentName();
    if (extractedName) {
      socialState.studentName = extractedName;
      socialState.lastSocialStage = "ready_bridge";
      saveSocialState();
      return {
        intent: "intro_name",
        mood: "praise",
        reply: pickSocialVariant("intro_name", [
          `Tanıştığımıza çok sevindim **${extractedName}**! 😊 Seninle harika bir matematik ekibi olacağız; **${shortTopic}** keşfimize başlayalım mı?`,
          `Memnun oldum **${extractedName}**! 👋 Çok güzel bir enerjin var. Bugün matematiği birlikte severek öğrenmeye hazır mısın?`,
          `Hoş geldin **${extractedName}**! 🌟 Takıldığın her anda yanındayım; ekrandaki **${shortTopic}** adımına birlikte bakalım mı?`,
          `Ne güzel tanışmak **${extractedName}**! 😊 Birlikte adım adım ilerleyerek bugünkü matematik çalışmamızı keyifle tamamlayacağız!`
        ])
      };
    }

    // 4. Saf Selamlaşma ("Merhaba", "Selam", "Günaydın")
    if (/^(merhaba|merhabalar|selam|selamlar|slm|mrb|hey|günaydın|iyi\s*günler|iyi\s*akşamlar|iyi\s*dersler|hoş\s*bulduk)[!.,?\s]*$/i.test(lower)) {
      if (!socialState.studentName) {
        socialState.lastSocialStage = "greeted_ask_name";
        saveSocialState();
        return {
          intent: "greeting",
          mood: "praise",
          reply: pickSocialVariant("greeting_new", [
            `Merhaba, nasılsın? 😊 Ben Nati! Seninle tanışmayı çok isterim, ismin ne?`,
            `Merhaba, hoş geldin! 👋 Ben Nati. Bugün nasılsın, tanışalım mı?`,
            `Selam, nasılsın bakalım? 😊 Ben senin matematik dostun Nati. Adın ne?`,
            `Merhaba! 🌟 Seni gördüğüme çok sevindim, nasılsın? İstersen önce tanışalım!`,
            `Hoş geldin, merhaba! 😊 Nasılsın bugün? Ben yapay zeka rehberin Nati!`
          ])
        };
      }
      socialState.lastSocialStage = "asked_how_are_you";
      saveSocialState();
      return {
        intent: "greeting_known",
        mood: "praise",
        reply: pickSocialVariant("greeting_known", [
          `Merhaba **${socialState.studentName}**, nasılsın? 😊 Seni yeniden görmek çok güzel!`,
          `Selam **${socialState.studentName}**! 👋 Tekrar hoş geldin, bugün nasılsın bakalım?`,
          `Merhaba **${socialState.studentName}**! 🌟 Bugün keyifler nasıl, nasılsın?`
        ])
      };
    }

    // 5. Kimsin / Kendini Tanıt
    if (/\b(sen\s*kimsin|kimsin\s*sen|adın\s*ne|ismin\s*ne|nesin\s*sen|robot\s*musun|yapay\s*zeka\s*mısın)\b/i.test(lower)) {
      return {
        intent: "who_are_you",
        mood: "guide",
        reply: pickSocialVariant("who_are_you", [
          `Ben Nati! ✨ Nartest+'ın yapay zeka matematik rehberiyim; cevabı direkt söylemem ama doğruyu birlikte buluruz!`,
          `Adım Nati 😊 Matematik çalışırken seninle konuşan ve takıldığın adımlarda ipucu veren yol arkadaşınım!`,
          `Ben dijital matematik rehberin Nati'yim! ✨ Birlikte keşfetmeyi çok severim. Peki sen nasılsın?`
        ])
      };
    }

    // 6. Olumsuz / Yorgun / Sıkılmış Ruh Hali
    if (/\b(kötüyüm|pek\s*iyi\s*değilim|iyi\s*değilim|yorgunum|çok\s*yoruldum|uykum\s*var|sıkıldım|canım\s*sıkkın|moralim\s*bozuk|matematik\s*çok\s*zor|matematik\s*zor|matematiği\s*sevmiyorum|korkuyorum|yapamıyorum\s*hiç)\b/i.test(lower)) {
      socialState.lastSocialStage = "ready_bridge";
      saveSocialState();
      return {
        intent: "mood_tired",
        mood: "encourage",
        reply: pickSocialVariant("mood_tired", [
          `Seni çok iyi anlıyorum${curName}, bazen yorulmak çok normal 😊 Acele etmeden, küçük ve kolay adımlarla ilerleyelim mi?`,
          `Hiç canını sıkma${curName}, yalnız değilsin 🤗 Birlikte ipuçlarıyla gidince matematiğin ne kadar keyifli olduğunu göreceksin!`,
          `Moralini bozma${curName}, ben tam bunun için yanındayım 😊 İstersen ekrandaki adımı en basit yerinden birlikte başlatalım?`,
          `Derin bir nefes alalım${curName}, hiç acelemiz yok 😊 Hazır olduğunda ekrandaki görevi beraberce kolayca çözeceğiz!`
        ])
      };
    }

    // 7. Olumlu Ruh Hali Yanıtı ("İyiyim", "Harikayım")
    if (/^(ben\s*de\s*)?(çok\s*)?(iyiyim|harikayım|süperim|bomba\s*gibiyim|gayet\s*iyiyim|fena\s*değil|fena\s*değilim|idare\s*eder|güzel|çok\s*şükür|şükür|iyidir)[!.,?\s]*(teşekkürler|teşekkür\s*ederim|sağ\s*ol|sağol)?[!.,?\s]*$/i.test(lower)) {
      socialState.lastSocialStage = "ready_bridge";
      saveSocialState();
      return {
        intent: "mood_positive",
        mood: "praise",
        reply: pickSocialVariant("mood_positive", [
          `İyi olmana çok sevindim${curName}! 😄 Enerjin yerindeyken ekrandaki **${shortTopic}** adımına birlikte göz atalım mı?`,
          `Harika, bu güzel enerjin bana da geçti${curName}! 🌟 Hazırsan ekrandaki adımı keyifle incelemeye başlayalım mı?`,
          `Hep böyle iyi ol${curName}! 😊 Hadi bu güzel motivasyonla bugünkü matematik keşfimize birlikte başlayalım!`,
          `Bunu duyduğuma çok mutlu oldum${curName}! ✨ Hazır hissettiğinde ekrandaki görevde birlikte adım adım ilerleyebiliriz.`
        ])
      };
    }

    // 8. Teşekkür
    if (/^(çok\s*)?(teşekkürler|teşekkür\s*ederim|sağ\s*ol|sağol|eyvallah|harikasın|süpersin|çok\s*iyi\s*anlattın)[!.,?\s]*$/i.test(lower)) {
      return {
        intent: "thanks",
        mood: "praise",
        reply: pickSocialVariant("thanks", [
          `Rica ederim${curName}, ne demek! 😊 Senin gayretin çok güzel; ekrandaki adımda devam etmeye hazır mısın?`,
          `Ben teşekkür ederim${curName}! 🌟 Merak edip sorman harika; hadi bu güzel tempoyla sıradaki adıma bakalım!`,
          `Ne mutlu bana${curName}! 😄 Birlikte çalışmak çok keyifli, ekrandaki görevde devam edelim mi?`
        ])
      };
    }

    // 9. Derse Başlama Onayı ("Hazırım", "Başlayalım", "Evet")
    if (/^(hazırım|evet\s*hazırım|başlayalım|hadi\s*başlayalım|hadi|olur|olur\s*başlayalım|tamam|tamam\s*başlayalım|evet|bakalım|geçelim)[!.,?\s]*$/i.test(lower)) {
      socialState.lastSocialStage = "in_lesson";
      saveSocialState();
      const firstHint = buildProgressiveSocraticHint({ customHint: activeHint }, ctx, 1);
      const hintBody = firstHint && firstHint.body ? firstHint.body : `**${shortTopic}** adımında ilk hangi sayıları inceleyelim?`;
      return {
        intent: "ready_start",
        mood: "guide",
        reply: enforceMax25WordsClient(`Harika${curName}! 🚀 ${hintBody}`, MAX_MENTOR_WORDS)
      };
    }

    return null;
  }

  function generateOfflineFallbackReply(rawText, ctx) {
    const text = String(rawText || "").trim();
    const lower = text.toLocaleLowerCase("tr-TR");
    const stop = (ctx && ctx.stop) || {};
    const kaz = (ctx && ctx.kaz) || {};
    const unit = (ctx && ctx.unit) || {};

    studentTrace.chatTurnCount++;
    const turn = studentTrace.chatTurnCount;

    const liveTask = studentTrace && studentTrace.liveTask ? studentTrace.liveTask : null;
    const activeHint = (liveTask && liveTask.hint) || stop.hint;
    const activeOptions = (liveTask && Array.isArray(liveTask.options) && liveTask.options.length > 0) ? liveTask.options : stop.options;
    const activeCorrectLetter = (liveTask && liveTask.correctLetter) || stop.correctLetter;
    const topicName = (liveTask && liveTask.taskTitle) || kaz.title || unit.title || stop.title || "bu matematik konusu";

    if (PROFANITY_LIST.some(w => lower.includes(w))) {
      return enforceMax25WordsClient(`Nazik bir dil kullanalım 😊 Şimdi ekrandaki **${topicName}** sorusunda ilk hangi işlemi yapalım?`);
    }
    if (OFF_TOPIC_LIST.some(w => lower.includes(w))) {
      return enforceMax25WordsClient(`Şimdi konumuz **${topicName}** 😊 Ekrandaki soruda verilen sayılarla ilk hangi işlemi kurmalıyız?`);
    }
    const socialHit = matchFriendlySocialTurn(text, ctx);
    if (socialHit) {
      return enforceMax25WordsClient(socialHit.reply, MAX_MENTOR_WORDS);
    }
    if (GIVE_ANSWER_PATTERNS.some(re => re.test(lower))) {
      const cleanH = sanitizeHintWithoutAnswer(activeHint, stop);
      return enforceMax25WordsClient(`Cevabı doğrudan söylersem keyfi kaçar 😊 ${cleanH || `**${topicName}** kuralına göre ilk işlemi sen kurar mısın?`}`);
    }

    // 1) Öğrenci belirli bir şıkkı (A, B, C, D) sorduysa o şıkkı analiz et
    if (Array.isArray(activeOptions) && activeOptions.length > 0) {
      const optMatch = text.match(/(?:^|\s)([ABCDabcd])\s*(?:şıkkı|seçeneği|olur\s*mu|m[ıiuü]|neden|niye|\?|$)/);
      if (optMatch) {
        const askedLetter = optMatch[1].toUpperCase();
        const askedOpt = activeOptions.find(o => o.letter === askedLetter);
        if (askedOpt) {
          const optValClean = stripHtml(askedOpt.text);
          if (askedLetter === activeCorrectLetter) {
            return enforceMax25WordsClient(`**${askedLetter}) ${optValClean}** çok güzel bir yaklaşım! 🎯 Sorudaki tüm şartları sağladığından eminsen işaretleyip dene!`);
          }
          const cleanH = sanitizeHintWithoutAnswer(activeHint, stop);
          return enforceMax25WordsClient(`**${askedLetter}) ${optValClean}** sorudaki koşulu tam sağlamıyor. ${cleanH || "Şarta uyan diğer çarpan veya işlemi dener misin?"}`);
        }
      }
    }

    // 2) Öğrenci metinde sayı sorduysa sembolik matematik kontrolü yap
    const userNumbers = (text.match(/\b\d{1,4}\b/g) || []).map(n => parseInt(n, 10)).filter(n => n > 0);
    const stemNumbers = (stripHtml((liveTask && liveTask.promptText) || stop.stem || stop.subtitle || "").match(/\b\d{1,4}\b/g) || []).map(n => parseInt(n, 10)).filter(n => n > 1);
    const liveTargetNum = (liveTask && Number(liveTask.targetNumber))
      || (liveTask && Array.isArray(liveTask.numbers) && Number(liveTask.numbers[0]))
      || null;
    const targetNum = liveTargetNum || stop.targetNumber || stop.rootNumber || (stop.gridModel && stop.gridModel.total) || stemNumbers[0] || null;

    if (userNumbers.length === 2 && (lower.includes("ebob") || lower.includes("ekok") || lower.includes("ortak") || lower.includes("asal"))) {
      const a = userNumbers[0], b = userNumbers[1];
      const eb = gcdLocal(a, b);
      const ek = (a * b) / eb;
      return enforceMax25WordsClient(`$\\text{EBOB}(${a},${b})=${eb}$, $\\text{EKOK}(${a},${b})=${ek}$. Soruda eş parçalara mı bölüyoruz, ortak katta mı buluşuyoruz?`);
    }

    if (userNumbers.length > 0 && targetNum && userNumbers[0] !== targetNum) {
      const askedNum = userNumbers[0];
      const big = Math.max(targetNum, askedNum);
      const small = Math.min(targetNum, askedNum);
      if (small > 1) {
        const rem = big % small;
        if (rem === 0) {
          const pair = big / small;
          return enforceMax25WordsClient(`$${big} \\div ${small} = ${pair}$ (kalan $0$, tam bölünür!). Peki sorudaki ek koşulu sağlıyor mu?`);
        }
        return enforceMax25WordsClient(`$${big} \\div ${small}$ işleminde kalan $${rem}$ oluyor, tam bölünmüyor. $${targetNum}$'ü tam bölen başka sayı dener misin?`);
      }
    }

    // 3) Öğrenci ilk kez son yanlışını sorduysa spesifik hata teşhisi ver
    if (studentTrace.wrongCount > 0 && turn <= 1 && (lower.includes("neden") || lower.includes("niye") || lower.includes("yanlış") || lower.includes("hata"))) {
      const pep = pickFreshMotivation(studentTrace.wrongCount + 1);
      return enforceMax25WordsClient(`${pep} ${diagnoseSpecificWrongAttempt({
        wrongValue: studentTrace.lastWrongValue,
        targetLabel: studentTrace.lastTargetLabel,
        customHint: stop.hint
      }, ctx)}`);
    }

    if (studentTrace.liveScreen && studentTrace.liveScreen.mode === "factor_methods_lab") {
      const ls = studentTrace.liveScreen;
      return enforceMax25WordsClient(
        `Harika gidiyorsun! 😊 **${ls.methodTitle || "Bu yöntem"}** adımında **${ls.targetNumber || ""}** sayısı için seçili kutuda çarpım veya bölüm ilişkisini dener misin?`
      );
    }

    // 4) Sınırsız, tekrarsız ve <=25 kelime Sokratik ilerleme
    const effectiveDepth = turn + Math.max(0, studentTrace.wrongCount - 1);
    const progressive = buildProgressiveSocraticHint({
      wrongValue: studentTrace.lastWrongValue,
      targetLabel: studentTrace.lastTargetLabel,
      customHint: stop.hint
    }, ctx, effectiveDepth);
    return enforceMax25WordsClient(progressive.body);
  }

  // ==========================================================================
  // 4. ÇİZGİ KARAKTER ARAYÜZÜ (DOM) VE CANLI SOHBET AKIŞI
  // ==========================================================================
  let isPanelOpen = false;
  let bubbleTimer = null;

  function setHeaderMascotMood(mood) {
    natiCurrentMood = resolveNatiState(mood || "idle");
    const headAvatar = document.getElementById("nartesHeadAvatar");
    const fabAvatar = document.getElementById("nartesFabAvatar");
    const stageAvatar = document.getElementById("natiStageAvatar");
    const pathAvatar = document.getElementById("natiPathHeroAvatar");
    if (headAvatar) updateAvatarContainerState(headAvatar, natiCurrentMood);
    if (fabAvatar) updateAvatarContainerState(fabAvatar, natiCurrentMood);
    if (stageAvatar) updateAvatarContainerState(stageAvatar, natiCurrentMood);
    if (pathAvatar) updateAvatarContainerState(pathAvatar, natiCurrentMood === "idle" ? "guiding" : natiCurrentMood);
  }

  function applyPanelVisuals(open) {
    isPanelOpen = open;
    const chatPanel = document.getElementById("nartesChatPanel");
    const bubble = document.getElementById("nartesSpeechBubble");
    const fabBtn = document.getElementById("nartesFabBtn");
    const mentorRoot = document.getElementById("nartesMentorRoot");
    if (chatPanel) chatPanel.hidden = !open;
    if (bubble && open) bubble.hidden = true;
    if (mentorRoot) mentorRoot.classList.toggle("nartes-mentor-open", open);
    if (fabBtn) {
      fabBtn.setAttribute("aria-expanded", open ? "true" : "false");
      fabBtn.title = open ? "Nati sohbetini küçült" : "Nati'ye Sor";
      const label = fabBtn.querySelector(".nartes-fab-text strong");
      const sub = fabBtn.querySelector(".nartes-fab-text small");
      if (label) label.textContent = open ? "Nati'yi Küçült" : "Nati'ye Sor";
      if (sub) {
        sub.textContent = open
          ? "Sohbeti kapat, derse dön"
          : (localAiServerOnline ? "Yapay Zeka Rehberi" : "Sokratik Rehber");
      }
    }
  }

  function updateVoiceToggleButtons() {
    const hasPrePack = Boolean(window.NATI_AUDIO_MANIFEST && Object.keys(window.NATI_AUDIO_MANIFEST).length > 0);
    let label = "🔇 Sessiz";
    if (mentorVoiceEnabled) {
      if (isTtsSynthesizing) {
        label = "🎙️ Hazırlanıyor...";
      } else if (elevenLabsEnabled) {
        label = "🔊 Nati Ses+";
      } else if (hasPrePack || localTtsAvailable) {
        label = "🔊 Nati Ses";
      } else {
        label = "🔊 Sesli";
      }
    }
    const btnHead = document.getElementById("nartesVoiceToggleBtn");
    const btnBubble = document.getElementById("nartesBubbleVoiceBtn");
    if (btnHead) {
      btnHead.textContent = label;
      btnHead.classList.toggle("voice-on", mentorVoiceEnabled);
      btnHead.title = mentorVoiceEnabled
        ? (elevenLabsEnabled
          ? "Nati ElevenLabs Doğal Ses Açık (Kapatmak için tıkla)"
          : (hasPrePack ? "Nati Standart Ses Paketi Açık (Kapatmak için tıkla)" : (localTtsAvailable ? "Nati Yerel Ses Açık (Kapatmak için tıkla)" : "Nati Sesli Yanıt Açık (Kapatmak için tıkla)")))
        : "Nati Sessiz Modda (Sesli yanıt için tıkla)";
    }
    if (btnBubble) {
      btnBubble.textContent = label;
      btnBubble.classList.toggle("voice-on", mentorVoiceEnabled);
    }
  }

  function setVoiceEnabledState(enabled, announce) {
    mentorVoiceEnabled = Boolean(enabled);
    try {
      localStorage.setItem(VOICE_PREF_KEY, mentorVoiceEnabled ? "1" : "0");
    } catch (e) {}
    updateVoiceToggleButtons();
    if (!mentorVoiceEnabled) {
      stopSpeaking();
    } else if (announce !== false) {
      speakMentorMessage("Sesli rehber modu açıldı.");
    }
  }

  function toggleMentorVoice() {
    setVoiceEnabledState(!mentorVoiceEnabled, true);
  }

  function toggleChatPanel(forceState) {
    initNartesMentorDOM();
    const next = typeof forceState === "boolean" ? forceState : !isPanelOpen;
    applyPanelVisuals(next);
    if (next) {
      if (!localAiServerOnline) {
        checkLocalAiHealth();
      }
      const msgBox = document.getElementById("nartesChatMessages");
      if (msgBox && msgBox.children.length === 0) {
        const stopTitle = (currentContext.stop && currentContext.stop.title) || "Çarpanlar ve Katlar";
        let welcome;
        if (socialState.studentName) {
          welcome = `Tekrar merhaba **${socialState.studentName}**! 😊 Bugün nasılsın? Ekrandaki **${stopTitle}** adımına birlikte bakalım mı?`;
          socialState.lastSocialStage = "asked_how_are_you";
        } else {
          welcome = `Merhaba, hoş geldin! 👋 Ben Nati, Nartest+'ın yapay zeka rehberiyim. Bugün nasılsın? İstersen tanışabilir ya da ekrandaki adımı birlikte çözebiliriz!`;
          socialState.lastSocialStage = "greeted_ask_name";
        }
        saveSocialState();
        setHeaderMascotMood("greeting");
        appendMessage("bot", enforceMax25WordsClient(welcome, MAX_MENTOR_WORDS), true, "greeting");
        if (!mentorVoiceEnabled) pulseNatiVisualTalking(2200);
      }
      const input = document.getElementById("nartesChatInput");
      setTimeout(() => input && input.focus(), 60);
    }
  }

  function refreshQuickPromptChips() {
    const promptsWrap = document.getElementById("nartesQuickPrompts");
    if (!promptsWrap) return;
    const stop = (currentContext && currentContext.stop) || {};
    const ls = studentTrace.liveScreen;

    let chips = [];
    if (stop.activityMode === "factor_methods_lab" || (ls && ls.mode === "factor_methods_lab")) {
      const mName = (ls && ls.methodTitle) || "bu yöntem";
      chips = [
        { label: "🌸 Bu yöntem nasıl çalışır?", prompt: `Ekrandaki ${mName} yöntemini kısaca nasıl uygulayacağımı söyler misin?` },
        { label: "🎯 Seçili kutuyu nasıl bulurum?", prompt: `Ekranda seçili olan eksik kutuyu bulmak için hangi işlemi yapmalıyım?` },
        { label: "🔎 Neden yanlış oldu?", prompt: "Az önceki denemem neden olmadı?" }
      ];
    } else if (stop.type === "concept") {
      chips = [
        { label: "🧩 Boşluğu nasıl bulurum?", prompt: "Seçili mavi boşluğa hangi kavramın geleceğini nasıl anlayabilirim?" },
        { label: "📘 Kuralı kısaca anlat", prompt: "Bu duraktaki kuralı çok kısa ve basitçe anlatır mısın?" },
        { label: "🔎 Neden yanlış oldu?", prompt: "Az önceki seçimim neden olmadı?" }
      ];
    } else if (stop.type === "question") {
      chips = [
        { label: "🧭 İlk adım ne?", prompt: "Ekrandaki bu soruyu çözmeye ilk hangi işlemden başlamalıyım?" },
        { label: "📐 İpucu verir misin?", prompt: "Bu sorudaki sayılar arasındaki ilişkiyi kurmam için motive edici bir ipucu verir misin?" },
        { label: "🔎 Neden yanlış oldu?", prompt: "Son denediğim şık neden doğru değil?" }
      ];
    } else {
      chips = [
        { label: "🧭 Nasıl çözmeliyim?", prompt: "Bu etkinliği çözmek için ilk neye bakmalıyım?" },
        { label: "🔎 Neden olmadı?", prompt: "Son denemem neden yanlış oldu?" },
        { label: "📘 Kısa ipucu ver", prompt: "Bana kısa bir ipucu verir misin?" }
      ];
    }

    promptsWrap.innerHTML = chips
      .map(c => `<button type="button" class="nartes-prompt-chip" data-prompt="${c.prompt.replace(/"/g, "&quot;")}">${c.label}</button>`)
      .join("");

    promptsWrap.querySelectorAll(".nartes-prompt-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const q = btn.getAttribute("data-prompt");
        handleStudentQuestion(q);
      });
    });
  }

  function initNartesMentorDOM() {
    if (document.getElementById("nartesMentorRoot")) return;

    const root = document.createElement("div");
    root.id = "nartesMentorRoot";
    root.className = "nartes-mentor-root";
    root.innerHTML = `
      <!-- Nati Konuşma Balonu -->
      <div class="nartes-speech-bubble" id="nartesSpeechBubble" hidden>
        <button class="nartes-bubble-close" id="nartesBubbleClose" title="Kapat" aria-label="Kapat">✕</button>
        <div class="nartes-bubble-header">
          <div class="nartes-bubble-head-left">
            <span id="nartesBubbleAvatar">${getAvatarHtml("nartes-avatar-xs", "talking")}</span>
            <span class="nartes-bubble-badge">Nati • Yapay Zeka Rehberin</span>
          </div>
          <button type="button" class="nartes-voice-pill" id="nartesBubbleVoiceBtn" title="Sesli / Sessiz Modu Değiştir"></button>
        </div>
        <div class="nartes-bubble-text" id="nartesBubbleText"></div>
        <div class="nartes-bubble-foot">
          <button class="nartes-bubble-action" id="nartesBubbleOpenChat">💬 Nati'ye Soru Sor →</button>
        </div>
      </div>

      <!-- Açılır Yerel Yapay Zeka Sohbet Penceresi (API Anahtarsız) -->
      <section class="nartes-chat-panel" id="nartesChatPanel" hidden aria-label="Nati Yapay Zeka Rehberi">
        <header class="nartes-chat-head">
          <div class="nartes-chat-head-left">
            <div class="nartes-head-avatar" id="nartesHeadAvatar">${getAvatarHtml("nartes-avatar-md", "idle", true)}</div>
            <div class="nartes-head-meta">
              <div class="nartes-head-title">
                <span>Nati</span>
                <span class="nartes-head-tag is-online" id="nartesHeadTag">🟢 Yerel AI</span>
              </div>
              <div class="nartes-head-sub" id="nartesContextSub">Adım adım Sokratik rehberlik</div>
            </div>
          </div>
          <div class="nartes-head-actions">
            <button type="button" class="nartes-voice-pill" id="nartesVoiceToggleBtn" title="Sesli / Sessiz Modu Değiştir"></button>
            <button type="button" class="nartes-voice-pill" id="nartesVoiceCfgBtn" title="Nati ElevenLabs Ses Tonu Ayarları">🎚️</button>
            <button type="button" class="nartes-chat-close" id="nartesChatCloseBtn" title="Sohbeti Küçült">✕</button>
          </div>
        </header>

        <div class="nartes-chat-messages" id="nartesChatMessages"></div>

        <div class="nartes-quick-prompts" id="nartesQuickPrompts"></div>

        <form class="nartes-chat-form" id="nartesChatForm" autocomplete="off">
          <input
            type="text"
            id="nartesChatInput"
            class="nartes-chat-input"
            placeholder="Nati'ye yaz: merhaba, bu adımı nasıl çözerim..."
            maxlength="280"
          />
          <button type="submit" class="nartes-chat-send" id="nartesChatSendBtn" title="Gönder">Sor →</button>
        </form>
      </section>

      <!-- Sağ Alt Hareketli & Konuşan Nati Kapsülü -->
      <button type="button" class="nartes-fab-btn" id="nartesFabBtn" title="Nati'ye Sor">
        <span class="nartes-fab-avatar" id="nartesFabAvatar">${getAvatarHtml("nartes-avatar-lg", "idle", true)}</span>
        <span class="nartes-fab-text">
          <strong>Nati'ye Sor</strong>
          <small>Yapay Zeka Rehberi</small>
        </span>
      </button>
    `;

    document.body.appendChild(root);
    updateVoiceToggleButtons();
    refreshQuickPromptChips();
    checkLocalAiHealth();

    const fabBtn = document.getElementById("nartesFabBtn");
    const closeBtn = document.getElementById("nartesChatCloseBtn");
    const voiceBtnHead = document.getElementById("nartesVoiceToggleBtn");
    const voiceCfgBtn = document.getElementById("nartesVoiceCfgBtn");
    const voiceBtnBubble = document.getElementById("nartesBubbleVoiceBtn");
    const bubble = document.getElementById("nartesSpeechBubble");
    const bubbleClose = document.getElementById("nartesBubbleClose");
    const bubbleOpenChat = document.getElementById("nartesBubbleOpenChat");
    const form = document.getElementById("nartesChatForm");
    const input = document.getElementById("nartesChatInput");

    fabBtn.addEventListener("click", () => toggleChatPanel());
    closeBtn.addEventListener("click", () => toggleChatPanel(false));
    voiceBtnHead.addEventListener("click", toggleMentorVoice);
    if (voiceCfgBtn) {
      voiceCfgBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openVoiceSettingsModal();
      });
    }
    voiceBtnBubble.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMentorVoice();
    });

    bubbleClose.addEventListener("click", (e) => {
      e.stopPropagation();
      bubble.hidden = true;
      stopSpeaking();
    });
    bubbleOpenChat.addEventListener("click", () => {
      toggleChatPanel(true);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      input.value = "";
      handleStudentQuestion(val);
    });
  }

  function escapeHtmlBasic(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function formatMarkdownPreservingClosedMath(text, allowOpenBold) {
    const mathTokens = [];
    const stash = (match) => {
      const idx = mathTokens.length;
      mathTokens.push(escapeHtmlBasic(match));
      return `\u0000NMATH${idx}\u0000`;
    };

    let work = String(text || "")
      .replace(/\$\$[\s\S]+?\$\$/g, stash)
      .replace(/\\\[[\s\S]+?\\\]/g, stash)
      .replace(/\\\([\s\S]+?\\\)/g, stash)
      .replace(/(^|[^\\])\$(?!\$)(?:\\.|[^$\\\n])+\$/g, (full, pre) => {
        const expr = full.slice(pre.length);
        return pre + stash(expr);
      });

    work = escapeHtmlBasic(work)
      .replace(/\\times\b/g, "×")
      .replace(/\\div\b/g, "÷")
      .replace(/\\cdot\b/g, "·")
      .replace(/\\pm\b/g, "±")
      .replace(/\\le(?:q)?\b/g, "≤")
      .replace(/\\ge(?:q)?\b/g, "≥")
      .replace(/\\ne(?:q)?\b/g, "≠")
      .replace(/\\Rightarrow\b/g, "⇒")
      .replace(/\\rightarrow\b|\\to\b/g, "→")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*(?!\*)(.+?)\*(?!\*)/g, "$1<em>$2</em>");

    if (allowOpenBold) {
      work = work.replace(/\*\*([^*]+)$/, "<strong>$1</strong>");
      // Sonda yarıda kalmış tek ters eğik çizgi varsa yazım bitene kadar gizle
      work = work.replace(/\\[a-zA-Z]*$/, "");
    }

    work = work.replace(/\n/g, "<br>");
    return work.replace(/\u0000NMATH(\d+)\u0000/g, (_, i) => mathTokens[Number(i)] || "");
  }

  function formatMarkdownAndMath(text) {
    return formatMarkdownPreservingClosedMath(text, false);
  }

  const COMPLETE_LATEX_SYMBOLS = new Set([
    "times", "div", "cdot", "pm", "mp", "le", "leq", "ge", "geq", "neq", "ne",
    "approx", "Rightarrow", "rightarrow", "to", "infty", "pi", "in", "notin",
    "subset", "cup", "cap", "dots", "cdots", "ldots"
  ]);

  function fallbackReadableMathPreview(rawLatex) {
    return escapeHtmlBasic(
      String(rawLatex || "")
        .replace(/\\text\{([^}]*)\}?/g, "$1")
        .replace(/\\times\b/g, " × ")
        .replace(/\\div\b/g, " ÷ ")
        .replace(/\\cdot\b/g, " · ")
        .replace(/\\Rightarrow\b/g, " ⇒ ")
        .replace(/\\rightarrow\b|\\to\b/g, " → ")
        .replace(/\\le(?:q)?\b/g, " ≤ ")
        .replace(/\\ge(?:q)?\b/g, " ≥ ")
        .replace(/\\ne(?:q)?\b/g, " ≠ ")
        .replace(/\\[a-zA-Z]*$/g, "")
        .replace(/[{}]/g, "")
        .replace(/\s+/g, " ")
        .trim()
    );
  }

  function renderOpenLatexPreviewHtml(rawOpenLatex, isDisplay) {
    const trimmed = String(rawOpenLatex || "").trim();
    if (!trimmed) return "";

    let prep = trimmed;
    // Yarıda kalmış ters eğik çizgi veya henüz tamamlanmamış LaTeX komutunu geçici temizle
    prep = prep.replace(/\\([a-zA-Z]*)$/, (full, cmd) => {
      if (!cmd) return "";
      if (COMPLETE_LATEX_SYMBOLS.has(cmd)) return full;
      return "";
    });

    prep = prep.trim();
    if (!prep) return "";

    // Yarıda kalmış kök, üs, indis veya kesir yapılarını KaTeX için dengeli hâle getir
    prep = prep
      .replace(/\\frac\s*$/, "")
      .replace(/\\sqrt\s*$/, "\\sqrt{\\,}")
      .replace(/(\^|_)\s*$/, "$1{\\,}")
      .replace(/(\\times|\\div|\\cdot|\\pm|\+|-|=)\s*$/, "$1 {}");

    // Açık kalan { süslü parantezleri kapat
    let openBraces = 0;
    for (let i = 0; i < prep.length; i++) {
      if (prep[i] === "\\" && i + 1 < prep.length) {
        i++;
        continue;
      }
      if (prep[i] === "{") openBraces++;
      else if (prep[i] === "}" && openBraces > 0) openBraces--;
    }
    if (prep.endsWith("{")) {
      prep += "\\,";
    }
    if (openBraces > 0) {
      prep += "}".repeat(openBraces);
    }
    // \frac{a} gibi ikinci paydası henüz yazılmamış kesri tamamla
    if (/\\frac\{[^{}]*\}$/.test(prep)) {
      prep += "{\\,}";
    }

    if (window.katex && typeof window.katex.renderToString === "function") {
      try {
        return window.katex.renderToString(prep, {
          displayMode: Boolean(isDisplay),
          throwOnError: true
        });
      } catch (_) {}
    }

    const cleanPreview = fallbackReadableMathPreview(trimmed);
    return cleanPreview ? `<span class="nartes-live-math">${cleanPreview}</span>` : "";
  }

  function renderStreamingBubbleMath(bubbleEl, partialText) {
    if (!bubbleEl) return;
    const src = String(partialText || "");

    // Tamamlanmış tüm matematik bloklarını maskeleyip sonda açık kalan matematik başlangıcı var mı kontrol et
    let scan = src
      .replace(/\$\$[\s\S]+?\$\$/g, m => "X".repeat(m.length))
      .replace(/\\\[[\s\S]+?\\\]/g, m => "X".repeat(m.length))
      .replace(/\\\([\s\S]+?\\\)/g, m => "X".repeat(m.length))
      .replace(/(^|[^\\])\$(?!\$)(?:\\.|[^$\\\n])+\$/g, (m, pre) => pre + "X".repeat(m.length - pre.length));

    let openPos = -1;
    let openLen = 0;
    let isDisplay = false;

    const candidates = [
      { idx: scan.indexOf("$$"), len: 2, disp: true },
      { idx: scan.indexOf("\\["), len: 2, disp: true },
      { idx: scan.indexOf("\\("), len: 2, disp: false }
    ];
    const singleDollarMatch = /(^|[^\\])\$(?!\$)/.exec(scan);
    if (singleDollarMatch) {
      const dPos = singleDollarMatch.index + singleDollarMatch[1].length;
      candidates.push({ idx: dPos, len: 1, disp: false });
    }

    for (const c of candidates) {
      if (c.idx !== -1 && (openPos === -1 || c.idx < openPos)) {
        openPos = c.idx;
        openLen = c.len;
        isDisplay = c.disp;
      }
    }

    if (openPos === -1) {
      bubbleEl.innerHTML = formatMarkdownPreservingClosedMath(src, true);
      renderMathInside(bubbleEl);
      return;
    }

    const closedPrefix = src.slice(0, openPos);
    const rawOpenLatex = src.slice(openPos + openLen);
    const tempPrefix = document.createElement("span");
    tempPrefix.innerHTML = formatMarkdownPreservingClosedMath(closedPrefix, true);
    renderMathInside(tempPrefix);
    const liveMathHtml = renderOpenLatexPreviewHtml(rawOpenLatex, isDisplay);

    bubbleEl.innerHTML = tempPrefix.innerHTML + liveMathHtml;
  }

  function renderMathInside(el) {
    if (!el) return;
    try {
      if (window.renderMathInElement) {
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
      // Kalan olası dolar işaretlerini veya ham $...$ bloklarını güvenli şekilde KaTeX'e dönüştür / temizle
      if (typeof document.createTreeWalker === "function") {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
            if (!node.nodeValue || !node.nodeValue.includes("$")) return NodeFilter.FILTER_REJECT;
            const p = node.parentElement;
            if (!p || p.closest(".katex, script, style, code, pre")) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
        });
        const dirtyNodes = [];
        let cur;
        while ((cur = walker.nextNode())) dirtyNodes.push(cur);
        dirtyNodes.forEach(textNode => {
          const val = String(textNode.nodeValue || "");
          const replaced = val
            .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
              if (window.katex && typeof window.katex.renderToString === "function") {
                try {
                  return window.katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, strict: false });
                } catch (_) {}
              }
              return tex.trim();
            })
            .replace(/(^|[^\\])\$([^$\n]+?)\$/g, (_, pre, tex) => {
              if (window.katex && typeof window.katex.renderToString === "function") {
                try {
                  return pre + window.katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false, strict: false });
                } catch (_) {}
              }
              return pre + tex.trim();
            })
            .replace(/\$\$?/g, "");
          if (replaced !== val) {
            const holder = document.createElement("span");
            holder.innerHTML = replaced;
            textNode.parentNode.replaceChild(holder, textNode);
          }
        });
      }
    } catch (e) {}
  }

  function appendMessage(sender, text, shouldSpeak, mood) {
    initNartesMentorDOM();
    const msgBox = document.getElementById("nartesChatMessages");
    if (!msgBox) return null;

    const item = document.createElement("div");
    item.className = `nartes-msg nartes-msg-${sender}`;
    item.innerHTML = `
      ${sender === "bot" ? `<div class="nartes-msg-avatar">${getAvatarHtml("nartes-avatar-sm", mood || "guide")}</div>` : ""}
      <div class="nartes-msg-bubble">${formatMarkdownAndMath(text)}</div>
    `;
    msgBox.appendChild(item);
    renderMathInside(item);
    msgBox.scrollTop = msgBox.scrollHeight;

    if (sender === "bot" && shouldSpeak !== false) {
      speakMentorMessage(text);
    }
    return item;
  }

  async function handleStudentQuestion(questionText) {
    const cleanQ = String(questionText || "").trim();
    if (!cleanQ) return;

    initNartesMentorDOM();
    if (!isPanelOpen) {
      applyPanelVisuals(true);
    }

    appendMessage("user", cleanQ, false);
    playMentorSound("hint");
    setHeaderMascotMood("thinking");

    const msgBox = document.getElementById("nartesChatMessages");
    const streamItem = document.createElement("div");
    streamItem.className = "nartes-msg nartes-msg-bot is-streaming";
    streamItem.innerHTML = `
      <div class="nartes-msg-avatar">${getAvatarHtml("nartes-avatar-sm", "thinking")}</div>
      <div class="nartes-msg-bubble">
        <span class="nartes-typing-dots" aria-label="Nati düşünüyor">
          <span></span><span></span><span></span>
        </span>
      </div>
    `;
    if (msgBox) {
      msgBox.appendChild(streamItem);
      msgBox.scrollTop = msgBox.scrollHeight;
    }

    const bubbleEl = streamItem.querySelector(".nartes-msg-bubble");
    const avatarEl = streamItem.querySelector(".nartes-msg-avatar");

    const socialHit = matchFriendlySocialTurn(cleanQ, currentContext);
    let finalReply = null;
    let replyMood = "guiding";

    if (socialHit) {
      await new Promise(resolve => setTimeout(resolve, 180));
      finalReply = socialHit.reply;
      replyMood = socialHit.mood || "celebrating";
    } else {
      let startedTalkingStream = false;
      finalReply = await streamFromLocalServerAI(cleanQ, currentContext, (partialText) => {
        if (!startedTalkingStream) {
          startedTalkingStream = true;
          setNatiSpeakingState(true);
          if (avatarEl) updateAvatarContainerState(avatarEl, "talking", "talking");
        }
        if (!bubbleEl) return;
        renderStreamingBubbleMath(bubbleEl, partialText);
        if (msgBox) msgBox.scrollTop = msgBox.scrollHeight;
      });

      if (!finalReply) {
        finalReply = generateOfflineFallbackReply(cleanQ, currentContext);
      }
    }
    finalReply = enforceMax25WordsClient(finalReply, MAX_MENTOR_WORDS);

    streamItem.classList.remove("is-streaming");
    if (avatarEl) updateAvatarContainerState(avatarEl, replyMood, replyMood);
    if (bubbleEl) {
      bubbleEl.innerHTML = formatMarkdownAndMath(finalReply);
      renderMathInside(bubbleEl);
    }
    if (msgBox) msgBox.scrollTop = msgBox.scrollHeight;

    // Çok turlu hafızaya kaydet (aynı soruda takip sorularını anlaması ve tekrar etmemesi için)
    studentTrace.chatHistory.push({ role: "user", content: cleanQ });
    studentTrace.chatHistory.push({ role: "assistant", content: finalReply });
    if (studentTrace.chatHistory.length > 12) {
      studentTrace.chatHistory = studentTrace.chatHistory.slice(-12);
    }

    setHeaderMascotMood(replyMood);
    if (mentorVoiceEnabled) {
      speakMentorMessage(finalReply);
    } else {
      pulseNatiVisualTalking(2300);
    }
  }

  function showSpeechBubble(text, mood, durationMs) {
    initNartesMentorDOM();
    const m = resolveNatiState(mood || "guiding");
    setHeaderMascotMood(m);

    if (isPanelOpen) {
      appendMessage("bot", text, true, m);
      if (!mentorVoiceEnabled) pulseNatiVisualTalking(2100);
      return;
    }
    const bubble = document.getElementById("nartesSpeechBubble");
    const bubbleText = document.getElementById("nartesBubbleText");
    const bubbleAvatar = document.getElementById("nartesBubbleAvatar");
    if (!bubble || !bubbleText) return;

    bubble.className = `nartes-speech-bubble mood-${m}`;
    if (bubbleAvatar) updateAvatarContainerState(bubbleAvatar, "talking", "talking");
    bubbleText.innerHTML = formatMarkdownAndMath(text);
    renderMathInside(bubbleText);
    bubble.hidden = false;
    if (mentorVoiceEnabled) {
      speakMentorMessage(text);
    } else {
      pulseNatiVisualTalking(2200);
    }

    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => {
      bubble.hidden = true;
      setHeaderMascotMood("idle");
    }, durationMs || 7000);
  }

  // ==========================================================================
  // 5. DIŞARIYA AÇILAN API (app.js entegrasyonu)
  // ==========================================================================
  window.NartesMentor = {
    isRemediationLocked() {
      return Boolean(studentTrace.remediationLocked);
    },

    setContext(ctx) {
      initNartesMentorDOM();
      const prevStopId = currentContext && currentContext.stop ? currentContext.stop.id : null;
      const prevUnitNo = currentContext && currentContext.unit ? currentContext.unit.unitNo : null;
      const prevSubIdx = currentContext && currentContext.stop && typeof currentContext.stop.activeQuestionIndex === "number"
        ? currentContext.stop.activeQuestionIndex
        : null;
      const nextStopId = ctx && ctx.stop ? ctx.stop.id : null;
      const nextUnitNo = ctx && ctx.unit ? ctx.unit.unitNo : null;
      const nextSubIdx = ctx && ctx.stop && typeof ctx.stop.activeQuestionIndex === "number"
        ? ctx.stop.activeQuestionIndex
        : null;
      const stopChanged = prevStopId !== nextStopId || prevUnitNo !== nextUnitNo || prevSubIdx !== nextSubIdx;

      if (gateCountdownTimer && stopChanged) {
        clearInterval(gateCountdownTimer);
        gateCountdownTimer = null;
      }

      currentContext = ctx || { unit: null, kaz: null, stop: null };
      if (stopChanged) {
        if (activeStreamAbort) {
          try { activeStreamAbort.abort(); } catch (_) {}
          activeStreamAbort = null;
        }
        studentTrace = {
          wrongCount: 0,
          attemptCountsByTarget: {},
          wrongChoices: [],
          lastWrongValue: null,
          lastTargetLabel: null,
          filledBlanks: {},
          activeBlankId: null,
          liveScreen: null,
          liveTask: null,
          liveTaskSignature: "",
          chatTurnCount: 0,
          chatHistory: [],
          usedMotivationIndices: [],
          shownHintBodies: [],
          remediationLocked: false
        };
        const gateEl = document.getElementById("nartesStudyGateOverlay");
        if (gateEl) gateEl.hidden = true;
      }

      const subEl = document.getElementById("nartesContextSub");
      if (subEl && currentContext.stop) {
        const badgePart = currentContext.stop.subQuestionBadge ? ` • ${currentContext.stop.subQuestionBadge}` : "";
        subEl.textContent = `Adım ${currentContext.stop.id}: ${currentContext.stop.title}${badgePart}`;
      }

      if (stopChanged) {
        const msgBox = document.getElementById("nartesChatMessages");
        if (msgBox && isPanelOpen && currentContext.stop) {
          msgBox.innerHTML = "";
          appendMessage(
            "bot",
            `Şimdi **Durak ${currentContext.stop.id}: ${currentContext.stop.title}** adımındayız! ✨ Takıldığın herhangi bir noktayı bana sorabilirsin.`,
            false,
            "guide"
          );
        } else if (msgBox && !isPanelOpen) {
          msgBox.innerHTML = "";
        }
      }

      refreshQuickPromptChips();
      setHeaderMascotMood("guide");

      if (stopChanged) {
        const bubble = document.getElementById("nartesSpeechBubble");
        if (bubble) bubble.hidden = true;
      }
    },

    notifyScreenTask(liveTask) {
      initNartesMentorDOM();
      if (!liveTask || typeof liveTask !== "object") return;
      const sig = String(liveTask.signature || `${liveTask.taskTitle || ""}:${liveTask.targetNumber || ""}:${(liveTask.numbers || []).join(",")}`);
      const changed = studentTrace.liveTaskSignature !== sig;
      studentTrace.liveTask = liveTask;
      studentTrace.liveTaskSignature = sig;

      if (changed) {
        if (activeStreamAbort) {
          try { activeStreamAbort.abort(); } catch (_) {}
          activeStreamAbort = null;
        }
        studentTrace.wrongCount = 0;
        studentTrace.attemptCountsByTarget = {};
        studentTrace.wrongChoices = [];
        studentTrace.lastWrongValue = null;
        studentTrace.lastTargetLabel = null;
        studentTrace.chatHistory = [];
        studentTrace.shownHintBodies = [];
        studentTrace.usedMotivationIndices = [];
        studentTrace.remediationLocked = false;
        if (gateCountdownTimer) {
          clearInterval(gateCountdownTimer);
          gateCountdownTimer = null;
        }
        const gateEl = document.getElementById("nartesStudyGateOverlay");
        if (gateEl) gateEl.hidden = true;
        const bubble = document.getElementById("nartesSpeechBubble");
        if (bubble) bubble.hidden = true;
        const msgBox = document.getElementById("nartesChatMessages");
        if (msgBox) {
          msgBox.innerHTML = "";
          if (isPanelOpen) {
            const label = liveTask.taskTitle || (liveTask.targetNumber ? `Hedef ${liveTask.targetNumber}` : "Yeni Görev");
            appendMessage("bot", `Aktif ekran güncellendi: **${label}**. Takıldığın adımı sorabilirsin! ✨`, false, "guide");
          }
        }
      }

      const subEl = document.getElementById("nartesContextSub");
      if (subEl) {
        const title = liveTask.taskTitle || (currentContext.stop && currentContext.stop.title) || "Etkinlik";
        const tPart = liveTask.targetNumber ? ` • Sayı: ${liveTask.targetNumber}` : "";
        subEl.textContent = `${title}${tPart}`;
      }
      refreshQuickPromptChips();
    },

    updateProgress(info) {
      if (!info || typeof info !== "object") return;
      if (info.filledBlanks) studentTrace.filledBlanks = info.filledBlanks;
      if (info.activeBlankId !== undefined) studentTrace.activeBlankId = info.activeBlankId;
      if (info.liveTask) {
        this.notifyScreenTask(info.liveTask);
      }
      if (info.liveScreen) {
        studentTrace.liveScreen = info.liveScreen;
        const subEl = document.getElementById("nartesContextSub");
        if (subEl && info.liveScreen.methodTitle) {
          subEl.textContent = `${info.liveScreen.methodTitle} • Hedef: ${info.liveScreen.targetNumber || ""}`;
        }
        refreshQuickPromptChips();
      }
    },

    onCorrect() {
      initNartesMentorDOM();
      if (gateCountdownTimer) {
        clearInterval(gateCountdownTimer);
        gateCountdownTimer = null;
      }
      studentTrace.wrongCount = 0;
      studentTrace.remediationLocked = false;
      const gateEl = document.getElementById("nartesStudyGateOverlay");
      if (gateEl) gateEl.hidden = true;
      const picked = pickNonRepeating(PRAISE_POOL, lastPraiseIdx);
      lastPraiseIdx = picked.idx;
      showSpeechBubble(`🎉 ${picked.text}`, "praise", 5200);
    },

    onWrong(detailOrHint, onUnlockAfterReview) {
      initNartesMentorDOM();
      const detail = typeof detailOrHint === "string"
        ? { customHint: detailOrHint }
        : (detailOrHint || {});

      studentTrace.wrongCount++;
      const tKey = String(detail.targetKey || detail.targetLabel || "default");
      studentTrace.attemptCountsByTarget[tKey] = (studentTrace.attemptCountsByTarget[tKey] || 0) + 1;
      const attemptForTarget = studentTrace.attemptCountsByTarget[tKey];

      if (detail.wrongValue !== undefined && detail.wrongValue !== null) {
        const wStr = String(detail.wrongValue).trim();
        studentTrace.lastWrongValue = wStr;
        if (wStr && !studentTrace.wrongChoices.includes(wStr)) {
          studentTrace.wrongChoices.push(wStr);
        }
      }
      if (detail.targetLabel) {
        studentTrace.lastTargetLabel = detail.targetLabel;
      }

      const bubble = document.getElementById("nartesSpeechBubble");
      if (bubble) bubble.hidden = true;

      showSocraticHintBox(currentContext, detail, attemptForTarget, onUnlockAfterReview);
      return { lockedForReview: true, wrongCount: studentTrace.wrongCount, attemptNo: attemptForTarget };
    },

    nudgeQuestionPanel(questionText) {
      initNartesMentorDOM();
      playMentorSound("hint");
      showSpeechBubble(
        enforceMax25WordsClient(`Harika! Soldaki adımları tamamladın; şimdi sağdaki doğrulama sorusunu yanıtlayıp sıradaki durağı açabilirsin! 👉`),
        "guide",
        6500
      );
    },

    openWithHint() {
      initNartesMentorDOM();
      applyPanelVisuals(true);
      handleStudentQuestion("Bu adımı çözmek için bana yol gösterici bir Sokratik ipucu verir misin?");
    },

    getNatiAvatarHtml(mood, extraClass, syncAuto) {
      return getAvatarHtml(extraClass || "nartes-avatar-md", mood || "idle", Boolean(syncAuto));
    },

    setNatiSpeaking(active) {
      setNatiSpeakingState(Boolean(active));
    },

    setStageMood(mood) {
      setHeaderMascotMood(mood || "idle");
    },

    openChat() {
      toggleChatPanel(true);
    },

    closeChat() {
      toggleChatPanel(false);
    },

    setStudentName(name) {
      const clean = String(name || "").trim().slice(0, 32);
      socialState.studentName = clean;
      saveSocialState();
    },

    setVoiceEnabled(enabled, announce) {
      initNartesMentorDOM();
      setVoiceEnabledState(Boolean(enabled), announce === true);
      return Boolean(mentorVoiceEnabled);
    },

    isVoiceEnabled() {
      return Boolean(mentorVoiceEnabled);
    },

    toggleVoice() {
      initNartesMentorDOM();
      toggleMentorVoice();
      return Boolean(mentorVoiceEnabled);
    },

    speak(text, opts) {
      initNartesMentorDOM();
      return speakMentorMessage(text, opts || {});
    },

    stopSpeaking() {
      stopSpeaking();
    },

    renderMathInside(el) {
      renderMathInside(el);
    },

    getVoiceStatus() {
      return {
        voiceEnabled: Boolean(mentorVoiceEnabled),
        elevenLabsEnabled: Boolean(elevenLabsEnabled),
        elevenLabsVoiceId,
        localTtsAvailable: Boolean(localTtsAvailable),
        localTtsReady: Boolean(localTtsReady)
      };
    },

    openVoiceSettingsModal() {
      openVoiceSettingsModal();
    }
  };

  async function openVoiceSettingsModal() {
    initNartesMentorDOM();
    let existing = document.getElementById("nartesVoiceModalOverlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "nartesVoiceModalOverlay";
    overlay.className = "wf-bridge-modal";
    overlay.style.zIndex = "100060";
    overlay.innerHTML = `
      <div class="wf-bm-card" style="max-width:560px; text-align:left;">
        <button type="button" class="wf-bm-close" id="nvcCloseBtn" title="Kapat" aria-label="Kapat">✕</button>
        <div class="wf-bm-step-tag">🎙️ NATİ SES STÜDYOSU • HAZIR SES PAKETİ &amp; YEREL SES</div>
        <h2 class="wf-bm-title">Nati Ses Ayarları</h2>
        <p class="wf-bm-lead" style="margin-bottom:14px;">
          Tüm standart Nati cümleleri ve alternatifleri tek ses tonuyla <strong>mp3</strong> paketi olarak doğrudan buradan anında oynatılır; canlı AI sohbetinde yerel ses / ElevenLabs otomatik desteklenir.
        </p>

        <div id="nvcStatusLine" style="font-size:0.86rem; padding:9px 12px; border-radius:10px; background:#f8fafc; border:1px solid #e2e8f0; margin-bottom:12px;">
          Durum yükleniyor...
        </div>

        <label style="display:block; font-size:0.84rem; font-weight:700; margin-bottom:5px;">ElevenLabs API Anahtarı</label>
        <input id="nvcApiKeyInput" type="password" placeholder="sk_... (mevcut anahtarı korumak için boş bırak)"
          style="width:100%; padding:10px 12px; border:1.5px solid #cbd5e1; border-radius:10px; font-size:0.92rem; margin-bottom:12px;" />

        <label style="display:block; font-size:0.84rem; font-weight:700; margin-bottom:6px;">Sevimli Nati Ses Tonu Seç</label>
        <div id="nvcPresetsWrap" style="display:grid; gap:8px; margin-bottom:14px; max-height:210px; overflow:auto;"></div>

        <div class="wf-bm-actions" style="flex-wrap:wrap;">
          <button type="button" class="wf-ghost-btn" id="nvcPreviewBtn">🔊 Sesi Test Et</button>
          <button type="button" class="wf-ghost-btn" id="nvcPrewarmBtn">⚡ Önbelleğe Al</button>
          <button type="button" class="wf-primary-btn" id="nvcSaveBtn">Kaydet ✓</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const base = activeApiBase || "";
    const statusLine = overlay.querySelector("#nvcStatusLine");
    const presetsWrap = overlay.querySelector("#nvcPresetsWrap");
    const apiInput = overlay.querySelector("#nvcApiKeyInput");
    let selectedVoiceId = elevenLabsVoiceId || "jBpfuIE2acCO8z3wKNLl";
    let loadedPresets = [
      { id: "jBpfuIE2acCO8z3wKNLl", name: "Gigi • Sevimli & Neşeli Maskot (Önerilen)", desc: "Nati için sıcak ve enerjik maskot sesi" },
      { id: "cgSgspJ2msm6clMCkdW9", name: "Jessica • Canlı & Oyunsu Arkadaş", desc: "Samimi ve hızlı anlaşılır ses" },
      { id: "pFZP5JQG7iQjIQuC4Bku", name: "Lily • Yumuşak & Masalsı Rehber", desc: "1–4. sınıf ve sakin anlatım için" },
      { id: "9BWtsMINqrJLrRacOk9x", name: "Aria • İçten & Güven Veren Rehber", desc: "5–8. sınıf ve LGS rehberliği" },
      { id: "XrExE9yKIg1WjnnlVkGX", name: "Matilda • Enerjik & Net Öğretmen", desc: "9–12. sınıf ve YKS odaklı net ton" }
    ];

    function renderPresetList() {
      presetsWrap.innerHTML = loadedPresets.map(p => {
        const active = p.id === selectedVoiceId;
        return `
          <button type="button" class="nvc-preset-btn" data-vid="${p.id}" style="text-align:left; padding:9px 12px; border-radius:11px; border:1.5px solid ${active ? "#16a34a" : "#e2e8f0"}; background:${active ? "#f0fdf4" : "#fff"}; cursor:pointer;">
            <div style="font-weight:700; font-size:0.88rem; color:#0f172a;">${active ? "✓ " : ""}${p.name}</div>
            <div style="font-size:0.78rem; color:#64748b;">${p.desc || ""}</div>
          </button>
        `;
      }).join("");
      presetsWrap.querySelectorAll(".nvc-preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          selectedVoiceId = btn.dataset.vid;
          renderPresetList();
        });
      });
    }

    renderPresetList();

    const packCount = window.NATI_AUDIO_MANIFEST ? Object.keys(window.NATI_AUDIO_MANIFEST).length : 0;
    const packStatusHtml = packCount > 0
      ? `✅ <strong>Nati Standart Ses Paketi Hazır</strong> (${packCount} hazır ses dosyası • 0 ms anında oynatma)`
      : `ℹ️ Hazır ses paketi yüklenmedi.`;
    statusLine.innerHTML = packStatusHtml;

    const host = (window.location && window.location.hostname) || "";
    const isRemoteStatic = /github\.io$|problemcoz\.com$/i.test(host) && !localAiServerOnline;
    if (!isRemoteStatic) {
      try {
        const r = await fetch(`${base}/api/nartes/elevenlabs/status`, { cache: "no-store" });
        if (r.ok) {
          const st = await r.json();
          if (Array.isArray(st.presets) && st.presets.length) loadedPresets = st.presets;
          if (st.voiceId) selectedVoiceId = st.voiceId;
          renderPresetList();
          const extraLine = st.hasApiKey
            ? (st.lastError && /missing_permissions|text_to_speech/i.test(st.lastError)
              ? `• ElevenLabs anahtarında <strong>"Text to Speech"</strong> izni kapalı (yerel hızlı Nati sesi aktif)`
              : `• ElevenLabs aktif (${st.cachedCount || 0} önbellek)`)
            : `• Canlı AI sohbeti için yerel hızlı Nati sesi (tr-TR-EmelNeural) aktif`;
          statusLine.innerHTML = `${packStatusHtml}<div style="margin-top:4px;font-size:0.8rem;color:#475569;">${extraLine}</div>`;
        }
      } catch (_) {}
    }

    overlay.querySelector("#nvcCloseBtn").addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });

    overlay.querySelector("#nvcSaveBtn").addEventListener("click", async () => {
      const key = apiInput.value.trim();
      try {
        const resp = await fetch(`${base}/api/nartes/elevenlabs/config`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...(key ? { apiKey: key } : {}),
            voiceId: selectedVoiceId,
            enabled: true
          })
        });
        const resJson = await resp.json();
        if (resJson && resJson.ok) {
          elevenLabsEnabled = Boolean(resJson.enabled);
          elevenLabsVoiceId = resJson.voiceId || selectedVoiceId;
          setVoiceEnabledState(true, false);
          statusLine.innerHTML = resJson.hasApiKey
            ? `✅ Kaydedildi! Aktif ses: <strong>${elevenLabsVoiceId}</strong>`
            : `✅ Ses tercihi kaydedildi (API anahtarı henüz boş).`;
        }
      } catch (err) {
        statusLine.textContent = "Kaydederken hata oluştu: " + err.message;
      }
    });

    overlay.querySelector("#nvcPreviewBtn").addEventListener("click", async () => {
      setVoiceEnabledState(true, false);
      await speakMentorMessage("Merhaba! Ben Nati. Hazırsan bugünkü matematik yolculuğumuza başlayalım!", {
        force: true,
        voiceId: selectedVoiceId
      });
    });

    overlay.querySelector("#nvcPrewarmBtn").addEventListener("click", async () => {
      statusLine.textContent = "⏳ Standart Nati cümleleri ElevenLabs ile önbelleğe alınıyor...";
      try {
        const resp = await fetch(`${base}/api/nartes/elevenlabs/prewarm`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ voiceId: selectedVoiceId })
        });
        const j = await resp.json();
        if (resp.ok && j.ok) {
          statusLine.innerHTML = `✅ Önbellek tamam: <strong>${j.generatedCount}</strong> yeni + <strong>${j.hitCount}</strong> hazır (Toplam ${j.cachedCount} dosya).`;
        } else {
          statusLine.textContent = (j && j.error) || "Önbellek oluşturulamadı.";
        }
      } catch (err) {
        statusLine.textContent = "Önbellek hatası: " + err.message;
      }
    });
  }
})();
