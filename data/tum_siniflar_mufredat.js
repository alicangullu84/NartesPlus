/* ==========================================================================
   NARTES+ • 1–12. SINIFLAR TÜRKİYE YÜZYILI MAARİF MODELİ & MEB / LGS / YKS
   Kapsamlı Müfredat, 14 Sınıf/Yol, 18 Ön Bilgi Köprüsü, 84 Tanı Sorusu,
   72 Ünite ve 432 Etkileşimli Durak Veri Tabanı
   ========================================================================== */
(function () {
  "use strict";

  function svgFrame(h, aria, inner) {
    return `<svg viewBox="0 0 320 ${h}" class="wf-svg" role="img" aria-label="${aria}"><rect x="10" y="6" width="300" height="${h - 12}" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>${inner}</svg>`;
  }

  function charWrap(bg, border, inner) {
    return `<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="${bg}" stroke="${border}" stroke-width="2.5"/>${inner}</svg>`;
  }

  // ==========================================================================
  // 1. 14 SINIF / PROGRAM ROTASI (Maarif Modeli + 2018 MEB / LGS / YKS)
  // ==========================================================================
  const tracks = [
    {
      trackId: "1",
      grade: 1,
      subTrack: null,
      stage: "ilkokul",
      title: "1. Sınıf",
      shortBadge: "1. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "20'ye kadar sayma, onluk tamamlama, toplama-çıkarma, örüntü ve geometrik şekiller",
      defaultUnit: 1,
      characterName: "Minik Boncuk",
      characterTitle: "Sayma Tavşanı",
      accent: "#EC4899",
      accentDark: "#9D174D",
      accentSoft: "#FDF2F8",
      accentBorder: "#F9A8D4",
      renderCharacterSvg: () => charWrap("#FDF2F8", "#F9A8D4", `
        <ellipse cx="23" cy="18" rx="4.5" ry="11" fill="#FBCFE8" stroke="#9D174D" stroke-width="1.8"/>
        <ellipse cx="41" cy="18" rx="4.5" ry="11" fill="#FBCFE8" stroke="#9D174D" stroke-width="1.8"/>
        <circle cx="32" cy="35" r="14" fill="#FFFFFF" stroke="#9D174D" stroke-width="2"/>
        <circle cx="27" cy="33" r="2.2" fill="#0F172A"/>
        <circle cx="37" cy="33" r="2.2" fill="#0F172A"/>
        <ellipse cx="32" cy="37.5" rx="2.5" ry="1.8" fill="#EC4899"/>
        <path d="M28 41 Q32 45 36 41" fill="none" stroke="#9D174D" stroke-width="1.8" stroke-linecap="round"/>
        <rect x="19" y="48" width="26" height="10" rx="4" fill="#EC4899"/>
        <text x="32" y="56" text-anchor="middle" font-size="8" font-weight="800" fill="#FFFFFF">1 • 2 • 3</text>
      `)
    },
    {
      trackId: "2",
      grade: 2,
      subTrack: null,
      stage: "ilkokul",
      title: "2. Sınıf",
      shortBadge: "2. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "100'e kadar sayılar, basamak değeri, yarım-çeyrek, saat okuma ve çarpma temeli",
      defaultUnit: 1,
      characterName: "Saatçi Fındık",
      characterTitle: "Zaman Sincabı",
      accent: "#F59E0B",
      accentDark: "#92400E",
      accentSoft: "#FFFBEB",
      accentBorder: "#FCD34D",
      renderCharacterSvg: () => charWrap("#FFFBEB", "#FCD34D", `
        <path d="M46 44 C56 38 56 22 45 20 C41 26 42 36 44 44 Z" fill="#F59E0B" stroke="#92400E" stroke-width="1.8"/>
        <polygon points="21,25 24,14 30,22" fill="#FBBF24" stroke="#92400E" stroke-width="1.8"/>
        <polygon points="41,25 38,14 32,22" fill="#FBBF24" stroke="#92400E" stroke-width="1.8"/>
        <circle cx="31" cy="34" r="13" fill="#FEF3C7" stroke="#92400E" stroke-width="2"/>
        <circle cx="26.5" cy="32" r="2.1" fill="#0F172A"/>
        <circle cx="35.5" cy="32" r="2.1" fill="#0F172A"/>
        <path d="M27.5 39 Q31 42 34.5 39" fill="none" stroke="#92400E" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="31" cy="51" r="8" fill="#FFFFFF" stroke="#92400E" stroke-width="1.8"/>
        <path d="M31 51 L31 46 M31 51 L35 51" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
      `)
    },
    {
      trackId: "3",
      grade: 3,
      subTrack: null,
      stage: "ilkokul",
      title: "3. Sınıf",
      shortBadge: "3. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "1000'e kadar sayılar, tek-çift mantığı, dört işlem, birim kesirler ve çevre-simetri",
      defaultUnit: 1,
      characterName: "Kesir Tilki",
      characterTitle: "Parça Kâşifi",
      accent: "#F97316",
      accentDark: "#9A3412",
      accentSoft: "#FFF7ED",
      accentBorder: "#FDBA74",
      renderCharacterSvg: () => charWrap("#FFF7ED", "#FDBA74", `
        <polygon points="17,28 21,12 30,22" fill="#F97316" stroke="#9A3412" stroke-width="1.8"/>
        <polygon points="47,28 43,12 34,22" fill="#F97316" stroke="#9A3412" stroke-width="1.8"/>
        <path d="M18 32 Q32 18 46 32 Q45 45 32 48 Q19 45 18 32 Z" fill="#FB923C" stroke="#9A3412" stroke-width="2"/>
        <circle cx="26.5" cy="33" r="2.2" fill="#0F172A"/>
        <circle cx="37.5" cy="33" r="2.2" fill="#0F172A"/>
        <circle cx="32" cy="40" r="2.4" fill="#0F172A"/>
        <circle cx="32" cy="53" r="7" fill="#FFFFFF" stroke="#9A3412" stroke-width="1.6"/>
        <path d="M32 53 L32 46 A7 7 0 0 1 39 53 Z" fill="#F97316"/>
      `)
    },
    {
      trackId: "4",
      grade: 4,
      subTrack: null,
      stage: "ilkokul",
      title: "4. Sınıf",
      shortBadge: "4. Sınıf • MEB",
      curriculumBadge: "MEB 4. Sınıf Programı",
      desc: "Çok basamaklı sayılar, dört işlem, kesirler, açı ölçme, çevre-alan ve sütun grafiği",
      defaultUnit: 1,
      characterName: "Pergel Çınar",
      characterTitle: "Ölçüm Kunduzu",
      accent: "#14B8A6",
      accentDark: "#115E59",
      accentSoft: "#F0FDFA",
      accentBorder: "#5EEAD4",
      renderCharacterSvg: () => charWrap("#F0FDFA", "#5EEAD4", `
        <circle cx="21" cy="22" r="4.5" fill="#5EEAD4" stroke="#115E59" stroke-width="1.8"/>
        <circle cx="43" cy="22" r="4.5" fill="#5EEAD4" stroke="#115E59" stroke-width="1.8"/>
        <circle cx="32" cy="33" r="14" fill="#99F6E4" stroke="#115E59" stroke-width="2"/>
        <circle cx="26.5" cy="31" r="2.2" fill="#0F172A"/>
        <circle cx="37.5" cy="31" r="2.2" fill="#0F172A"/>
        <rect x="29.5" y="38" width="2.4" height="4" fill="#FFFFFF" stroke="#115E59" stroke-width="1"/>
        <rect x="32.1" y="38" width="2.4" height="4" fill="#FFFFFF" stroke="#115E59" stroke-width="1"/>
        <path d="M20 53 A12 12 0 0 1 44 53 Z" fill="#FDE047" stroke="#115E59" stroke-width="1.8"/>
        <line x1="32" y1="53" x2="38" y2="45" stroke="#115E59" stroke-width="1.6"/>
      `)
    },
    {
      trackId: "5",
      grade: 5,
      subTrack: null,
      stage: "ortaokul",
      title: "5. Sınıf",
      shortBadge: "5. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "Çok basamaklı sayılar, işlem önceliği, kesir-ondalık-yüzde, açılar, alan ve olasılık",
      defaultUnit: 1,
      characterName: "Açı Penguen",
      characterTitle: "Geometri Kâşifi",
      accent: "#3B82F6",
      accentDark: "#1E40AF",
      accentSoft: "#EFF6FF",
      accentBorder: "#93C5FD",
      renderCharacterSvg: () => charWrap("#EFF6FF", "#93C5FD", `
        <ellipse cx="32" cy="36" rx="15" ry="18" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/>
        <ellipse cx="32" cy="39" rx="10.5" ry="13" fill="#FFFFFF"/>
        <circle cx="27" cy="29" r="2.2" fill="#0F172A"/>
        <circle cx="37" cy="29" r="2.2" fill="#0F172A"/>
        <polygon points="29,33 35,33 32,37.5" fill="#F59E0B" stroke="#92400E" stroke-width="1"/>
        <polygon points="21,54 41,54 21,45" fill="#DBEAFE" stroke="#1E40AF" stroke-width="1.6"/>
      `)
    },
    {
      trackId: "6",
      grade: 6,
      subTrack: null,
      stage: "ortaokul",
      title: "6. Sınıf",
      shortBadge: "6. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "Çarpan-kat, bölünebilme, kesir-ondalık-yüzde, cebir, paralelkenar-çember ve veri",
      defaultUnit: 1,
      characterName: "Çarpan Pofi",
      characterTitle: "Asal Panda",
      accent: "#10B981",
      accentDark: "#065F46",
      accentSoft: "#ECFDF5",
      accentBorder: "#6EE7B7",
      renderCharacterSvg: () => charWrap("#ECFDF5", "#6EE7B7", `
        <circle cx="20" cy="20" r="5" fill="#0F172A"/>
        <circle cx="44" cy="20" r="5" fill="#0F172A"/>
        <circle cx="32" cy="33" r="14" fill="#FFFFFF" stroke="#065F46" stroke-width="2"/>
        <ellipse cx="26" cy="32" rx="4" ry="3.2" fill="#0F172A" transform="rotate(-18 26 32)"/>
        <ellipse cx="38" cy="32" rx="4" ry="3.2" fill="#0F172A" transform="rotate(18 38 32)"/>
        <circle cx="26" cy="32" r="1.3" fill="#FFFFFF"/>
        <circle cx="38" cy="32" r="1.3" fill="#FFFFFF"/>
        <ellipse cx="32" cy="37" rx="2.4" ry="1.6" fill="#0F172A"/>
        <rect x="20" y="47" width="24" height="10" rx="3" fill="#10B981"/>
        <text x="32" y="55" text-anchor="middle" font-size="8.5" font-weight="800" fill="#FFFFFF">2×3×5</text>
      `)
    },
    {
      trackId: "7",
      grade: 7,
      subTrack: null,
      stage: "ortaokul",
      title: "7. Sınıf",
      shortBadge: "7. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "Rasyonel işlemler, oran-orantı, denklemler, dönüşüm, prizma hacmi ve daire alanı",
      defaultUnit: 1,
      characterName: "Terazi Rako",
      characterTitle: "Denge Rakunu",
      accent: "#06B6D4",
      accentDark: "#155E75",
      accentSoft: "#ECFEFF",
      accentBorder: "#67E8F9",
      renderCharacterSvg: () => charWrap("#ECFEFF", "#67E8F9", `
        <polygon points="18,24 22,13 29,21" fill="#64748B" stroke="#155E75" stroke-width="1.8"/>
        <polygon points="46,24 42,13 35,21" fill="#64748B" stroke="#155E75" stroke-width="1.8"/>
        <circle cx="32" cy="33" r="13.5" fill="#E2E8F0" stroke="#155E75" stroke-width="2"/>
        <rect x="21" y="28" width="22" height="7" rx="3.5" fill="#334155"/>
        <circle cx="26.5" cy="31.5" r="2" fill="#FFFFFF"/>
        <circle cx="37.5" cy="31.5" r="2" fill="#FFFFFF"/>
        <line x1="20" y1="52" x2="44" y2="52" stroke="#0891B2" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="29,56 35,56 32,52" fill="#155E75"/>
      `)
    },
    {
      trackId: "8_okul",
      grade: 8,
      subTrack: "okul",
      stage: "ortaokul",
      title: "8. Sınıf • Okul",
      shortBadge: "8. Sınıf • Okul",
      curriculumBadge: "MEB 8. Sınıf • Okul Desteği",
      desc: "Okul yazılılarına tam uyum: çarpan-kat, üslü-köklü, özdeşlik, denklem ve üçgenler",
      defaultUnit: 1,
      characterName: "Kök Tosbi",
      characterTitle: "Temel Kaplumbağa",
      accent: "#22C55E",
      accentDark: "#166534",
      accentSoft: "#F0FDF4",
      accentBorder: "#86EFAC",
      renderCharacterSvg: () => charWrap("#F0FDF4", "#86EFAC", `
        <path d="M16 40 A16 16 0 0 1 48 40 Z" fill="#22C55E" stroke="#166534" stroke-width="2"/>
        <circle cx="32" cy="24" r="9.5" fill="#BBF7D0" stroke="#166534" stroke-width="1.8"/>
        <circle cx="28.5" cy="23" r="1.8" fill="#0F172A"/>
        <circle cx="35.5" cy="23" r="1.8" fill="#0F172A"/>
        <path d="M29 27 Q32 29.5 35 27" fill="none" stroke="#166534" stroke-width="1.6" stroke-linecap="round"/>
        <text x="32" y="38" text-anchor="middle" font-size="11" font-weight="900" fill="#FFFFFF">√x</text>
        <rect x="20" y="45" width="24" height="10" rx="4" fill="#166534"/>
        <text x="32" y="53" text-anchor="middle" font-size="7.5" font-weight="800" fill="#FFFFFF">OKUL</text>
      `)
    },
    {
      trackId: "8_lgs",
      grade: 8,
      subTrack: "lgs",
      stage: "ortaokul",
      title: "8. Sınıf • LGS",
      shortBadge: "8. Sınıf • LGS",
      curriculumBadge: "LGS Sınav Sistemi • 2018 Programı",
      desc: "Yeni nesil LGS muhakeme, grafik yorumu, EBOB-EKOK, cebirsel modelleme ve Pisagor",
      defaultUnit: 1,
      characterName: "Roket Pars",
      characterTitle: "LGS Kaptanı",
      accent: "#4F46E5",
      accentDark: "#312E81",
      accentSoft: "#EEF2FF",
      accentBorder: "#A5B4FC",
      renderCharacterSvg: () => charWrap("#EEF2FF", "#A5B4FC", `
        <polygon points="19,24 22,12 29,21" fill="#818CF8" stroke="#312E81" stroke-width="1.8"/>
        <polygon points="45,24 42,12 35,21" fill="#818CF8" stroke="#312E81" stroke-width="1.8"/>
        <circle cx="32" cy="32" r="13.5" fill="#E0E7FF" stroke="#312E81" stroke-width="2"/>
        <circle cx="27" cy="30" r="2.2" fill="#0F172A"/>
        <circle cx="37" cy="30" r="2.2" fill="#0F172A"/>
        <polygon points="32,33 30,36 34,36" fill="#4F46E5"/>
        <path d="M27 39 Q32 43 37 39" fill="none" stroke="#312E81" stroke-width="1.8" stroke-linecap="round"/>
        <rect x="19" y="47" width="26" height="10" rx="5" fill="#4F46E5"/>
        <text x="32" y="55" text-anchor="middle" font-size="8" font-weight="900" fill="#FDE047">★ LGS</text>
      `)
    },
    {
      trackId: "9",
      grade: 9,
      subTrack: null,
      stage: "lise",
      title: "9. Sınıf",
      shortBadge: "9. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "Gerçek sayı aralıkları, doğrusal-mutlak değer fonksiyonları, algoritma ve benzerlik",
      defaultUnit: 1,
      characterName: "Mantık Vaşak",
      characterTitle: "Algoritma Vaşağı",
      accent: "#8B5CF6",
      accentDark: "#5B21B6",
      accentSoft: "#F5F3FF",
      accentBorder: "#C4B5FD",
      renderCharacterSvg: () => charWrap("#F5F3FF", "#C4B5FD", `
        <polygon points="18,24 20,10 28,20" fill="#8B5CF6" stroke="#5B21B6" stroke-width="1.8"/>
        <polygon points="46,24 44,10 36,20" fill="#8B5CF6" stroke="#5B21B6" stroke-width="1.8"/>
        <circle cx="32" cy="32" r="13.5" fill="#EDE9FE" stroke="#5B21B6" stroke-width="2"/>
        <circle cx="27" cy="31" r="2.2" fill="#0F172A"/>
        <circle cx="37" cy="31" r="2.2" fill="#0F172A"/>
        <path d="M28 38 Q32 41 36 38" fill="none" stroke="#5B21B6" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="28" cy="52" r="5" fill="none" stroke="#5B21B6" stroke-width="1.8"/>
        <circle cx="36" cy="52" r="5" fill="none" stroke="#7C3AED" stroke-width="1.8"/>
      `)
    },
    {
      trackId: "10",
      grade: 10,
      subTrack: null,
      stage: "lise",
      title: "10. Sınıf",
      shortBadge: "10. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "Asal-bölünebilme, karesel/karekök/ters fonksiyonlar, sayma, trigonometri ve analitik",
      defaultUnit: 1,
      characterName: "Parabol Şahin",
      characterTitle: "Eğri Kâşifi",
      accent: "#0EA5E9",
      accentDark: "#075985",
      accentSoft: "#F0F9FF",
      accentBorder: "#7DD3FC",
      renderCharacterSvg: () => charWrap("#F0F9FF", "#7DD3FC", `
        <path d="M16 28 Q32 14 48 28 L42 38 Q32 44 22 38 Z" fill="#38BDF8" stroke="#075985" stroke-width="2"/>
        <circle cx="26.5" cy="29" r="2.2" fill="#0F172A"/>
        <circle cx="37.5" cy="29" r="2.2" fill="#0F172A"/>
        <polygon points="30,33 34,33 32,38" fill="#F59E0B"/>
        <path d="M18 46 Q32 58 46 46" fill="none" stroke="#075985" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="32" cy="52" r="2.5" fill="#0EA5E9"/>
      `)
    },
    {
      trackId: "11",
      grade: 11,
      subTrack: null,
      stage: "lise",
      title: "11. Sınıf",
      shortBadge: "11. Sınıf • TYMM",
      curriculumBadge: "Türkiye Yüzyılı Maarif Modeli",
      desc: "Trigonometrik, üstel ve logaritmik fonksiyonlar, bileşke, özel dörtgenler ve veri",
      defaultUnit: 1,
      characterName: "Dalga Yunus",
      characterTitle: "Trigonometri Yunusu",
      accent: "#6366F1",
      accentDark: "#3730A3",
      accentSoft: "#EEF2FF",
      accentBorder: "#A5B4FC",
      renderCharacterSvg: () => charWrap("#EEF2FF", "#A5B4FC", `
        <path d="M18 36 C20 20 38 18 45 28 C48 33 44 38 38 36 C32 34 26 38 18 36 Z" fill="#818CF8" stroke="#3730A3" stroke-width="2"/>
        <circle cx="39" cy="28" r="2" fill="#0F172A"/>
        <path d="M15 49 Q23 41 32 49 T49 49" fill="none" stroke="#3730A3" stroke-width="2.2" stroke-linecap="round"/>
      `)
    },
    {
      trackId: "12_okul",
      grade: 12,
      subTrack: "okul",
      stage: "lise",
      title: "12. Sınıf • Okul",
      shortBadge: "12. Sınıf • Okul",
      curriculumBadge: "MEB 12. Sınıf • Eski Sistem",
      desc: "Üstel-logaritma, diziler, trigonometri, limit-süreklilik, türev ve integral temelleri",
      defaultUnit: 1,
      characterName: "Limit Kartal",
      characterTitle: "Analiz Kartalı",
      accent: "#E11D48",
      accentDark: "#881337",
      accentSoft: "#FFF1F2",
      accentBorder: "#FDA4AF",
      renderCharacterSvg: () => charWrap("#FFF1F2", "#FDA4AF", `
        <circle cx="32" cy="30" r="13.5" fill="#FFFFFF" stroke="#881337" stroke-width="2"/>
        <path d="M21 26 Q32 18 43 26" fill="none" stroke="#E11D48" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26.5" cy="29" r="2.2" fill="#0F172A"/>
        <circle cx="37.5" cy="29" r="2.2" fill="#0F172A"/>
        <polygon points="30,33 34,33 32,38" fill="#F59E0B"/>
        <rect x="18" y="46" width="28" height="10" rx="4" fill="#E11D48"/>
        <text x="32" y="54" text-anchor="middle" font-size="8" font-weight="800" fill="#FFFFFF">lim f(x)</text>
      `)
    },
    {
      trackId: "12_yks",
      grade: 12,
      subTrack: "yks",
      stage: "lise",
      title: "12. Sınıf • YKS",
      shortBadge: "12. Sınıf • YKS",
      curriculumBadge: "YKS (TYT + AYT) • ÖSYM Çizgisi",
      desc: "TYT hız-problem muhakemesi + AYT parabol, logaritma, trigonometri, türev ve integral",
      defaultUnit: 1,
      characterName: "Zirve Anka",
      characterTitle: "YKS Şampiyonu",
      accent: "#D97706",
      accentDark: "#78350F",
      accentSoft: "#FFFBEB",
      accentBorder: "#FCD34D",
      renderCharacterSvg: () => charWrap("#FFFBEB", "#FCD34D", `
        <polygon points="32,10 36,19 28,19" fill="#F59E0B" stroke="#78350F" stroke-width="1.5"/>
        <circle cx="32" cy="31" r="13" fill="#FEF3C7" stroke="#78350F" stroke-width="2"/>
        <circle cx="27" cy="30" r="2.2" fill="#0F172A"/>
        <circle cx="37" cy="30" r="2.2" fill="#0F172A"/>
        <polygon points="30,34 34,34 32,38.5" fill="#D97706"/>
        <rect x="18" y="46" width="28" height="10" rx="5" fill="#D97706"/>
        <text x="32" y="54" text-anchor="middle" font-size="8" font-weight="900" fill="#FFFFFF">★ YKS</text>
      `)
    }
  ];

  // ==========================================================================
  // 2. 18 ADET 3 DAKİKALIK GÖRSEL ÖN BİLGİ KÖPRÜSÜ (6 İLKOKUL + 6 ORTAOKUL + 6 LİSE)
  // ==========================================================================
  const bridges = [
    // --- İLKOKUL (6) ---
    {
      id: "bridge_count_10",
      stage: "ilkokul",
      gradeLabel: "1. Sınıf Temeli",
      title: "Onluk Çerçeve ve 10'a Tamamlama",
      duration: "3 dk",
      feedsUnit: "1–2. Sınıf • Sayılar ve Toplama",
      ruleLead: "Bir toplamayı zihinden hızlı yapmak için önce sayılardan birini $10$'a tamamlar, kalanı üstüne ekleriz.",
      ruleTip: "Örneğin $7 + 5$ işleminde $7$'ye $3$ vererek $10$ yaparız; geriye $2$ kaldığı için $10 + 2 = 12$ elde ederiz.",
      practicePrompt: "Onluk çerçeve yöntemiyle $8 + 5$ toplamı kaç eder?",
      spokenPrompt: "Onluk çerçeve yöntemiyle sekiz artı beş toplamı kaç eder?",
      practiceOptions: [
        { id: "p1", text: "$13$", correct: true, okMsg: "Harika! $8 + 2 = 10$ olur, kalan $3$'ü ekleyince $13$ buluruz.", spokenOk: "Harika! Sekize iki ekleyip on yaparız, kalan üçü ekleyince on üç buluruz." },
        { id: "p2", text: "$12$", correct: false, hint: "$8$'i $10$'a tamamlamak için $2$ gerekir; $5$'ten $2$ alınca $3$ kalır.", spokenHint: "Sekizi ona tamamlamak için iki gerekir; beşten iki alınca üç kalır." },
        { id: "p3", text: "$14$", correct: false, hint: "$10$'a eklenen kalan parçayı tekrar sayalım: $5 - 2 = 3$.", spokenHint: "Ona eklenen kalan parçayı tekrar sayalım: beşten iki çıkınca üç kalır." }
      ],
      renderSvg: () => svgFrame(128, "Onluk çerçeve 7+3=10 modeli", `
        <g transform="translate(46,24)">
          ${Array.from({ length: 10 }, (_, i) => {
            const c = i % 5;
            const r = Math.floor(i / 5);
            const filled = i < 7;
            return `<rect x="${c * 32}" y="${r * 30}" width="28" height="26" rx="6" fill="${filled ? "#EFF6FF" : "#FFFFFF"}" stroke="${filled ? "#2563EB" : "#94A3B8"}" stroke-width="1.6" ${filled ? "" : 'stroke-dasharray="3 2"'}/>`
              + `<circle cx="${c * 32 + 14}" cy="${r * 30 + 13}" r="7" fill="${filled ? "#2563EB" : "#CBD5E1"}"/>`;
          }).join("")}
        </g>
        <text x="255" y="54" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">7 + 3 = 10</text>
        <text x="255" y="74" text-anchor="middle" font-size="11.5" font-weight="600" fill="#475569">Önce 10'a tamamla</text>
      `)
    },
    {
      id: "bridge_add_sub",
      stage: "ilkokul",
      gradeLabel: "1–2. Sınıf Temeli",
      title: "Sayı Doğrusunda İleri–Geri İşlem",
      duration: "3 dk",
      feedsUnit: "2–3. Sınıf • Toplama ve Çıkarma",
      ruleLead: "Sayı doğrusunda sağa doğru zıplamak toplama, sola doğru zıplamak çıkarma anlamına gelir.",
      ruleTip: "Örneğin $9$ sayısından $4$ adım ileri gidersek $9 + 4 = 13$'e ulaşırız; büyük adımları $10$'luk ve $1$'lik sıçramalara bölebiliriz.",
      practicePrompt: "Sayı doğrusunda $24$'ten $7$ adım geriye gidersek hangi sayıya ulaşırız?",
      spokenPrompt: "Sayı doğrusunda yirmi dörtten yedi adım geriye gidersek hangi sayıya ulaşırız?",
      practiceOptions: [
        { id: "p1", text: "$17$", correct: true, okMsg: "Doğru! $24 - 4 = 20$, sonra $3$ adım daha geriye $17$ olur.", spokenOk: "Doğru! Yirmi dörtten dört çıkarıp yirmiye geliriz, üç adım daha geri gidince on yedi olur." },
        { id: "p2", text: "$16$", correct: false, hint: "$24 - 4 = 20$ yaptıktan sonra $7 - 4 = 3$ adım daha geriye gitmeliyiz.", spokenHint: "Yirmi dörtten dört çıkarınca yirmi olur; üç adım daha geriye gitmeliyiz." },
        { id: "p3", text: "$31$", correct: false, hint: "Geriye gitmek toplama değil çıkarma işlemidir.", spokenHint: "Geriye gitmek toplama değil çıkarma işlemidir." }
      ],
      renderSvg: () => svgFrame(120, "Sayı doğrusunda 9+4=13 sıçraması", `
        <line x1="34" y1="78" x2="286" y2="78" stroke="#0F172A" stroke-width="2.5"/>
        ${[8, 9, 10, 11, 12, 13, 14].map((n, i) => `
          <line x1="${52 + i * 36}" y1="72" x2="${52 + i * 36}" y2="84" stroke="#0F172A" stroke-width="2"/>
          <text x="${52 + i * 36}" y="100" text-anchor="middle" font-size="12" font-weight="800" fill="${n === 9 || n === 13 ? "#1D4ED8" : "#334155"}">${n}</text>
        `).join("")}
        <path d="M88 70 Q160 22 232 70" fill="none" stroke="#10B981" stroke-width="2.5"/>
        <polygon points="229,63 234,71 224,70" fill="#10B981"/>
        <text x="160" y="34" text-anchor="middle" font-size="12.5" font-weight="800" fill="#047857">+4 adım (sağa)</text>
      `)
    },
    {
      id: "bridge_place_mul",
      stage: "ilkokul",
      gradeLabel: "2–3. Sınıf Temeli",
      title: "Onluk–Birlik Blokları ve Eşit Gruplama",
      duration: "3 dk",
      feedsUnit: "3–4. Sınıf • Basamak ve Çarpma",
      ruleLead: "Her onluk çubuk $10$ birliği temsil eder; eşit sayıda nesneyi gruplayarak saymak çarpmayı oluşturur.",
      ruleTip: "$3$ grupta $4$'er top varsa toplam $4 + 4 + 4 = 3 \\times 4 = 12$ top vardır. Bölme ise bu eşit gruplamayı tersten paylaştırır.",
      practicePrompt: "$4$ onluk ve $7$ birlikten oluşan sayıdan $1$ onluk çıkarırsak hangi sayı kalır?",
      spokenPrompt: "Dört onluk ve yedi birlikten oluşan sayıdan bir onluk çıkarırsak hangi sayı kalır?",
      practiceOptions: [
        { id: "p1", text: "$37$", correct: true, okMsg: "Süper! $47 - 10 = 37$ olur; yalnızca onluk sayısı $1$ azalır.", spokenOk: "Süper! Kırk yediden on çıkınca otuz yedi kalır." },
        { id: "p2", text: "$46$", correct: false, hint: "$1$ birlik değil $1$ onluk ($10$) çıkarıyoruz.", spokenHint: "Bir birlik değil bir onluk yani on çıkarıyoruz." },
        { id: "p3", text: "$27$", correct: false, hint: "$4$ onluktan $1$ onluk çıkarsa $3$ onluk kalır.", spokenHint: "Dört onluktan bir onluk çıkarsa üç onluk kalır." }
      ],
      renderSvg: () => svgFrame(124, "Onluk bloklar ve eşit gruplar", `
        <rect x="28" y="22" width="16" height="66" rx="4" fill="#3B82F6"/>
        <rect x="50" y="22" width="16" height="66" rx="4" fill="#3B82F6"/>
        <rect x="76" y="72" width="14" height="16" rx="3" fill="#10B981"/>
        <rect x="94" y="72" width="14" height="16" rx="3" fill="#10B981"/>
        <rect x="112" y="72" width="14" height="16" rx="3" fill="#10B981"/>
        <text x="77" y="106" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1E40AF">2 onluk + 3 birlik = 23</text>
        <line x1="158" y1="20" x2="158" y2="104" stroke="#CBD5E1" stroke-width="1.5"/>
        ${[0, 1, 2].map(g => `
          <rect x="${174 + g * 44}" y="26" width="38" height="58" rx="8" fill="#FFF7ED" stroke="#F97316" stroke-width="1.5"/>
          <circle cx="${185 + g * 44}" cy="44" r="4" fill="#F97316"/>
          <circle cx="${201 + g * 44}" cy="44" r="4" fill="#F97316"/>
          <circle cx="${185 + g * 44}" cy="64" r="4" fill="#F97316"/>
          <circle cx="${201 + g * 44}" cy="64" r="4" fill="#F97316"/>
        `).join("")}
        <text x="237" y="106" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9A3412">3 × 4 = 12</text>
      `)
    },
    {
      id: "bridge_frac_meas",
      stage: "ilkokul",
      gradeLabel: "3–4. Sınıf Temeli",
      title: "Bütün–Yarım–Çeyrek ve Birim Kesir Şeridi",
      duration: "3 dk",
      feedsUnit: "3–4. Sınıf • Kesirler",
      ruleLead: "Bir bütün $n$ eş parçaya bölündüğünde her bir parçaya $\\frac{1}{n}$ birim kesri denir; payda toplam parça sayısını gösterir.",
      ruleTip: "Örneğin $1$ bütün şerit $4$ eş parçaya bölünürse her parça $\\frac{1}{4}$ olur ve $4$ tane $\\frac{1}{4}$ birleşip $1$ bütünü oluşturur.",
      practicePrompt: "Bir bütünde kaç tane $\\frac{1}{6}$ birim kesri vardır?",
      spokenPrompt: "Bir bütünde kaç tane altıda bir birim kesri vardır?",
      practiceOptions: [
        { id: "p1", text: "$6$", correct: true, okMsg: "Doğru! Payda $6$ olduğu için bütün $6$ eş parçaya bölünmüştür.", spokenOk: "Doğru! Payda altı olduğu için bütün altı eş parçaya bölünmüştür." },
        { id: "p2", text: "$4$", correct: false, hint: "$4$ tane olan birim kesir $\\frac{1}{4}$ (çeyrek) kesridir.", spokenHint: "Dört tane olan birim kesir dörtte bir yani çeyrektir." },
        { id: "p3", text: "$3$", correct: false, hint: "Paydadaki sayı bütünün toplam kaç eş parçaya ayrıldığını söyler.", spokenHint: "Paydadaki sayı bütünün toplam kaç eş parçaya ayrıldığını söyler." }
      ],
      renderSvg: () => svgFrame(116, "Dört eş parçalı kesir şeridi", `
        <rect x="34" y="22" width="252" height="24" rx="6" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.8"/>
        <text x="160" y="38" text-anchor="middle" font-size="12" font-weight="800" fill="#1E40AF">1 Bütün</text>
        ${[0, 1, 2, 3].map(i => `
          <rect x="${34 + i * 63}" y="58" width="61" height="32" rx="6" fill="${i === 0 ? "#10B981" : "#FFFFFF"}" stroke="#047857" stroke-width="1.6"/>
          <text x="${64 + i * 63}" y="79" text-anchor="middle" font-size="12.5" font-weight="800" fill="${i === 0 ? "#FFFFFF" : "#065F46"}">1/4</text>
        `).join("")}
      `)
    },
    {
      id: "bridge_shapes_sym",
      stage: "ilkokul",
      gradeLabel: "2–4. Sınıf Temeli",
      title: "Çokgen Köşeleri, Çevre ve Simetri",
      duration: "3 dk",
      feedsUnit: "3–4. Sınıf • Geometri ve Ölçme",
      ruleLead: "Bir çokgenin çevre uzunluğu tüm kenarlarının uzunlukları toplamıdır; simetri doğrusu şekli iki eş parçaya böler.",
      ruleTip: "Kenarları $a$ ve $b$ olan dikdörtgenin iki uzun, iki kısa kenarı vardır; bu yüzden çevresi $2 \\times (a + b)$ ile bulunur.",
      practicePrompt: "Kenar uzunlukları $5\\text{ cm}$ ve $3\\text{ cm}$ olan bir dikdörtgenin çevresi kaç $\\text{cm}$'dir?",
      spokenPrompt: "Kenar uzunlukları beş santimetre ve üç santimetre olan bir dikdörtgenin çevresi kaç santimetredir?",
      practiceOptions: [
        { id: "p1", text: "$16\\text{ cm}$", correct: true, okMsg: "Harika! $5 + 3 + 5 + 3 = 16\\text{ cm}$.", spokenOk: "Harika! Beş artı üç artı beş artı üç eşittir on altı santimetre." },
        { id: "p2", text: "$8\\text{ cm}$", correct: false, hint: "$8\\text{ cm}$ yalnızca bir uzun ve bir kısa kenarın toplamıdır; $4$ kenarı da toplamalıyız.", spokenHint: "Sekiz santimetre yalnızca iki kenarın toplamıdır; dört kenarı da toplamalıyız." },
        { id: "p3", text: "$15\\text{ cm}$", correct: false, hint: "$5 \\times 3 = 15$ alanı verir, çevre için kenarları toplarız.", spokenHint: "Beş çarpı üç alanı verir, çevre için kenarları toplarız." }
      ],
      renderSvg: () => svgFrame(118, "Simetri doğrulu kare ve çevre şeması", `
        <rect x="44" y="24" width="68" height="68" fill="#ECFDF5" stroke="#047857" stroke-width="2"/>
        <line x1="78" y1="16" x2="78" y2="100" stroke="#DC2626" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="78" y="109" text-anchor="middle" font-size="11" font-weight="700" fill="#DC2626">Simetri doğrusu</text>
        <rect x="158" y="30" width="118" height="56" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2"/>
        <text x="217" y="24" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1E40AF">a</text>
        <text x="286" y="62" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1E40AF">b</text>
        <text x="217" y="63" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">Çevre = 2·(a + b)</text>
      `)
    },
    {
      id: "bridge_time_data",
      stage: "ilkokul",
      gradeLabel: "3–4. Sınıf Temeli",
      title: "Saat Okuma, Ölçü Dönüşümü ve Çetele",
      duration: "3 dk",
      feedsUnit: "4. Sınıf • Ölçme ve Veri",
      ruleLead: "Saatlerde her $60$ dakika $1$ tam saate tamamlanır; uzunlukta $1\\text{ m} = 100\\text{ cm}$, kütlede $1\\text{ kg} = 1000\\text{ g}$'dır.",
      ruleTip: "Çetele tablosunda $4$ dik çizginin üstünden geçen $1$ yatay/çapraz çizgi bir $5$'lik demet oluşturur.",
      practicePrompt: "Saat $14:15$'te başlayan bir etkinlik $45$ dakika sürerse saat kaçta biter?",
      spokenPrompt: "Saat on dört on beşte başlayan bir etkinlik kırk beş dakika sürerse saat kaçta biter?",
      practiceOptions: [
        { id: "p1", text: "$15:00$", correct: true, okMsg: "Tam doğru! $15\\text{ dk} + 45\\text{ dk} = 60\\text{ dk}$ yani $1$ tam saat eder ve $15:00$ olur.", spokenOk: "Tam doğru! On beş dakika ile kırk beş dakika altmış dakika eder ve saat on beş sıfır sıfır olur." },
        { id: "p2", text: "$14:50$", correct: false, hint: "$15 + 45 = 60$ dakika ettiği için saat $14$'ten $15$'e geçer.", spokenHint: "On beş artı kırk beş altmış dakika ettiği için saat on beş olur." },
        { id: "p3", text: "$15:15$", correct: false, hint: "$45$ dakika $1$ tam saatten ($60$ dk) biraz daha kısadır.", spokenHint: "Kırk beş dakika bir tam saatten biraz daha kısadır." }
      ],
      renderSvg: () => svgFrame(120, "Saat ve çetele modeli", `
        <circle cx="84" cy="60" r="38" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.2"/>
        <circle cx="84" cy="60" r="3" fill="#0F172A"/>
        <line x1="84" y1="60" x2="104" y2="60" stroke="#1D4ED8" stroke-width="3" stroke-linecap="round"/>
        <line x1="84" y1="60" x2="84" y2="88" stroke="#047857" stroke-width="2.2" stroke-linecap="round"/>
        <text x="84" y="109" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">1 saat = 60 dk</text>
        <g transform="translate(168,36)">
          <line x1="0" y1="0" x2="0" y2="28" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="10" y1="0" x2="10" y2="28" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="20" y1="0" x2="20" y2="28" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="30" y1="0" x2="30" y2="28" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="-5" y1="24" x2="35" y2="4" stroke="#DC2626" stroke-width="2.5"/>
          <text x="58" y="20" font-size="13" font-weight="800" fill="#0F172A">= 5</text>
        </g>
        <text x="232" y="92" text-anchor="middle" font-size="11.5" font-weight="700" fill="#047857">1 kg = 1000 g</text>
      `)
    },

    // --- ORTAOKUL (6) ---
    {
      id: "bridge_factors",
      stage: "ortaokul",
      gradeLabel: "5–6. Sınıf Temeli",
      title: "Dikdörtgen Alanıyla Çarpan ve Katlar",
      duration: "3 dk",
      feedsUnit: "6. ve 8. Sınıf • Çarpanlar ve Katlar",
      ruleLead: "Bir sayının çarpanları, alanı o sayıya eşit olan tam sayı kenarlı dikdörtgenlerin kenar uzunluklarıdır.",
      ruleTip: "$18$ birimkareyi boşluksuz kaplamak için $1 \\times 18$, $2 \\times 9$ ve $3 \\times 6$ kurabiliriz. $4$, $18$'i tam bölmediği için $4$ satırlı dikdörtgen kurulamaz.",
      practicePrompt: "Alanı $24\\text{ br}^2$ olan tam sayı kenarlı bir dikdörtgen için hangisi kenar uzunluğu OLAMAZ?",
      spokenPrompt: "Alanı yirmi dört birimkare olan tam sayı kenarlı bir dikdörtgen için hangisi kenar uzunluğu olamaz?",
      practiceOptions: [
        { id: "p1", text: "$6\\text{ br}$", correct: false, hint: "$6 \\times 4 = 24$ olduğu için $6\\text{ br}$ kenar olabilir.", spokenHint: "Altı çarpı dört yirmi dört olduğu için altı birim kenar olabilir." },
        { id: "p2", text: "$5\\text{ br}$", correct: true, okMsg: "Doğru! $24$ sayısı $5$'e kalansız bölünemediği için $5$ birim kenarlı dikdörtgen kurulamaz.", spokenOk: "Doğru! Yirmi dört sayısı beşe kalansız bölünemediği için beş birim kenarlı dikdörtgen kurulamaz." },
        { id: "p3", text: "$8\\text{ br}$", correct: false, hint: "$8 \\times 3 = 24$ olduğu için $8\\text{ br}$ kenar olabilir.", spokenHint: "Sekiz çarpı üç yirmi dört olduğu için sekiz birim kenar olabilir." }
      ],
      renderSvg: () => svgFrame(132, "3x6 = 18 dikdörtgen çarpan modeli", `
        <g transform="translate(52,18)">
          ${Array.from({ length: 3 }, (_, r) =>
            Array.from({ length: 6 }, (_, c) =>
              `<rect x="${c * 36}" y="${r * 22}" width="32" height="18" rx="4" fill="${c % 2 === 0 ? "#1D4ED8" : "#047857"}" opacity="0.9"/>`
            ).join("")
          ).join("")}
        </g>
        <text x="160" y="108" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0F172A">Örnek: 3 × 6 = 18 br² (3 ve 6 çarpanlardır)</text>
      `)
    },
    {
      id: "bridge_signs",
      stage: "ortaokul",
      gradeLabel: "6–7. Sınıf Temeli",
      title: "Parantez, Üslü İşaret ve Tam Sayılar",
      duration: "3 dk",
      feedsUnit: "7. ve 8. Sınıf • Tam Sayılar ve Üslü İfadeler",
      ruleLead: "Üs, parantez varsa eksiyi de içine alarak tekrar ettirir; parantez yoksa eksi işaretine dokunmaz.",
      ruleTip: "$(-3)^2 = (-3) \\times (-3) = +9$ iken $-3^2 = -(3 \\times 3) = -9$ olur. Negatif tabanın tek kuvveti ise daima negatiftir.",
      practicePrompt: "Buna göre $(-2)^4 + (-3^2)$ işleminin sonucu kaçtır?",
      spokenPrompt: "Buna göre eksi ikinin parantez dördüncü kuvveti artı parantez içinde eksi üçün karesi işleminin sonucu kaçtır?",
      practiceOptions: [
        { id: "p1", text: "$7$", correct: true, okMsg: "Tam isabet! $(-2)^4 = +16$ ve $-3^2 = -9$ olduğu için $16 - 9 = 7$ olur.", spokenOk: "Tam isabet! Eksi ikinin dördüncü kuvveti artı on altı, parantezsiz eksi üçün karesi eksi dokuz eder; toplam yedi olur." },
        { id: "p2", text: "$25$", correct: false, hint: "$-3^2$ parantezsiz olduğu için $+9$ değil $-9$ değerindedir.", spokenHint: "Eksi üç kare parantezsiz olduğu için artı dokuz değil eksi dokuz değerindedir." },
        { id: "p3", text: "$-7$", correct: false, hint: "$(-2)^4$ çift kuvvet ve parantezli olduğu için $+16$ olur.", spokenHint: "Eksi ikinin dördüncü kuvveti çift kuvvet ve parantezli olduğu için artı on altı olur." }
      ],
      renderSvg: () => svgFrame(124, "Parantezli ve parantezsiz üs kuralı", `
        <rect x="20" y="14" width="132" height="96" rx="12" fill="#ECFDF5" stroke="#6EE7B7"/>
        <text x="86" y="46" text-anchor="middle" font-size="20" font-weight="800" fill="#065F46">(-3)²</text>
        <text x="86" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#065F46">(-3) × (-3)</text>
        <text x="86" y="94" text-anchor="middle" font-size="14" font-weight="800" fill="#047857">= +9</text>
        <rect x="168" y="14" width="132" height="96" rx="12" fill="#FFFFFF" stroke="#CBD5E1"/>
        <text x="234" y="46" text-anchor="middle" font-size="20" font-weight="800" fill="#0F172A">-3²</text>
        <text x="234" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">-(3 × 3)</text>
        <text x="234" y="94" text-anchor="middle" font-size="14" font-weight="800" fill="#1E293B">= -9</text>
      `)
    },
    {
      id: "bridge_squares",
      stage: "ortaokul",
      gradeLabel: "5–7. Sınıf Temeli",
      title: "Tam Kare Alanlar ve Karekök Köprüsü",
      duration: "3 dk",
      feedsUnit: "8. Sınıf • Kareköklü İfadeler",
      ruleLead: "Karenin alanından kenarına geçerken aynı iki sayının çarpımını ararız: Alan $k^2$ ise kenar $k$'dır.",
      ruleTip: "$\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$ yazarken sayının içindeki en büyük tam kare çarpanı dışarı alırız.",
      practicePrompt: "Alanları $49\\text{ cm}^2$ ve $16\\text{ cm}^2$ olan iki karenin kenar uzunlukları toplamı kaç $\\text{cm}$'dir?",
      spokenPrompt: "Alanları kırk dokuz santimetrekare ve on altı santimetrekare olan iki karenin kenar uzunlukları toplamı kaç santimetredir?",
      practiceOptions: [
        { id: "p1", text: "$11\\text{ cm}$", correct: true, okMsg: "Süper! $\\sqrt{49} + \\sqrt{16} = 7 + 4 = 11\\text{ cm}$.", spokenOk: "Süper! Kök kırk dokuz yedi, kök on altı dört olduğu için toplam on bir santimetre eder." },
        { id: "p2", text: "$13\\text{ cm}$", correct: false, hint: "$\\sqrt{49} = 7$ ve $\\sqrt{16} = 4$'tür; ikisini toplayalım.", spokenHint: "Kök kırk dokuz yedi ve kök on altı dörttür; ikisini toplayalım." },
        { id: "p3", text: "$65\\text{ cm}$", correct: false, hint: "Alanları değil kenar uzunluklarını toplamalıyız.", spokenHint: "Alanları değil kenar uzunluklarını toplamalıyız." }
      ],
      renderSvg: () => svgFrame(126, "Tam kare alan ve kenar örneği", `
        <rect x="58" y="20" width="74" height="74" rx="8" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2"/>
        <text x="95" y="61" text-anchor="middle" font-size="13.5" font-weight="800" fill="#1E40AF">25 cm²</text>
        <text x="95" y="110" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1E40AF">Kenar = 5 cm</text>
        <rect x="186" y="38" width="56" height="56" rx="8" fill="#ECFDF5" stroke="#047857" stroke-width="2"/>
        <text x="214" y="70" text-anchor="middle" font-size="13" font-weight="800" fill="#065F46">9 cm²</text>
        <text x="214" y="110" text-anchor="middle" font-size="11.5" font-weight="700" fill="#065F46">Kenar = 3 cm</text>
      `)
    },
    {
      id: "bridge_ratio_pie",
      stage: "ortaokul",
      gradeLabel: "6–7. Sınıf Temeli",
      title: "Kesir, Oran ve $360^\\circ$ Daire İlişkisi",
      duration: "3 dk",
      feedsUnit: "6–8. Sınıf • Oran ve Veri Analizi",
      ruleLead: "Bir tam daire daima $360^\\circ$'dir; merkez açı bütünle kurulan doğru orantıyla gerçek sayıya dönüşür.",
      ruleTip: "$90^\\circ = \\frac{1}{4}$, $120^\\circ = \\frac{1}{3}$ ve $180^\\circ = \\frac{1}{2}$ oranları daire grafiği sorularını hızlandırır.",
      practicePrompt: "$60$ öğrencilik grupta $120^\\circ$'lik dilim kaç öğrenciyi gösterir?",
      spokenPrompt: "Altmış öğrencilik grupta yüz yirmi derecelik dilim kaç öğrenciyi gösterir?",
      practiceOptions: [
        { id: "p1", text: "$20$", correct: true, okMsg: "Doğru! $120^\\circ$ tüm dairenin $\\frac{1}{3}$'üdür: $60 \\div 3 = 20$.", spokenOk: "Doğru! Yüz yirmi derece tüm dairenin üçte biridir; altmış bölü üç eşittir yirmi." },
        { id: "p2", text: "$15$", correct: false, hint: "$15$ kişi $\\frac{1}{4}$ yani $90^\\circ$ dilim olurdu.", spokenHint: "On beş kişi dörtte bir yani doksan derecelik dilim olurdu." },
        { id: "p3", text: "$30$", correct: false, hint: "$30$ kişi yarısı yani $180^\\circ$ dilim olurdu.", spokenHint: "Otuz kişi yarısı yani yüz seksen derecelik dilim olurdu." }
      ],
      renderSvg: () => svgFrame(126, "Daire grafiği oranı", `
        <circle cx="116" cy="63" r="42" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
        <path d="M116,63 L116,21 A42,42 0 0,1 158,63 Z" fill="#047857"/>
        <text x="220" y="56" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0F172A">90° = 1/4</text>
        <text x="220" y="78" text-anchor="middle" font-size="12.5" font-weight="600" fill="#334155">Tam Daire = 360°</text>
      `)
    },
    {
      id: "bridge_balance",
      stage: "ortaokul",
      gradeLabel: "7. Sınıf Temeli",
      title: "Denge Terazisi ve Doğrusal İlişkiler",
      duration: "3 dk",
      feedsUnit: "7–8. Sınıf • Doğrusal Denklemler",
      ruleLead: "Eşitliğin her iki tarafından aynı miktarı çıkardığımızda terazi dengesi korunur.",
      ruleTip: "Örneğin $2x + 3 = x + 9$ denkleminde iki kefeden $x$ ve $3$ çıkarırsak $x = 6$ kalır.",
      practicePrompt: "$3x = x + 14$ eşitliğinde $x$ değeri kaçtır?",
      spokenPrompt: "Üç x eşittir x artı on dört eşitliğinde x değeri kaçtır?",
      practiceOptions: [
        { id: "p1", text: "$7$", correct: true, okMsg: "Harika! $3x - x = 14 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.", spokenOk: "Harika! İki x eşittir on dört, buradan x eşittir yedi." },
        { id: "p2", text: "$14$", correct: false, hint: "Sağdaki $x$'i de sol kefeden çıkarmayı unutmayalım.", spokenHint: "Sağdaki x terimini sol kefeden çıkarmayı unutmayalım." },
        { id: "p3", text: "$5$", correct: false, hint: "$3(5)=15$ ile $5+14=19$ eşitlenmez.", spokenHint: "Beş koyarsak sol taraf on beş, sağ taraf on dokuz olur, eşitlenmez." }
      ],
      renderSvg: () => svgFrame(126, "Denklem terazisi örneği", `
        <line x1="160" y1="98" x2="160" y2="52" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
        <polygon points="142,102 178,102 160,88" fill="#475569"/>
        <line x1="68" y1="52" x2="252" y2="52" stroke="#0F172A" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="44" y="22" width="84" height="28" rx="8" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2"/>
        <text x="86" y="41" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">2x + 3</text>
        <rect x="192" y="22" width="84" height="28" rx="8" fill="#ECFDF5" stroke="#047857" stroke-width="2"/>
        <text x="234" y="41" text-anchor="middle" font-size="13" font-weight="800" fill="#065F46">x + 9</text>
      `)
    },
    {
      id: "bridge_triangle",
      stage: "ortaokul",
      gradeLabel: "5–7. Sınıf Temeli",
      title: "Geometrik Açılar, Paralel Doğrular ve Alan",
      duration: "3 dk",
      feedsUnit: "6–8. Sınıf • Çokgenler ve Üçgenler",
      ruleLead: "Üçgende iç açılar toplamı $180^\\circ$'dir; paralel doğrular arasında kalan iç ters açılar eşittir.",
      ruleTip: "İkizkenar üçgende eşit kenarların karşısındaki taban açıları da birbirine eşittir.",
      practicePrompt: "Tepe açısı $50^\\circ$ olan bir ikizkenar üçgenin taban açılarından biri kaç derecedir?",
      spokenPrompt: "Tepe açısı elli derece olan bir ikizkenar üçgenin taban açılarından biri kaç derecedir?",
      practiceOptions: [
        { id: "p1", text: "$65^\\circ$", correct: true, okMsg: "Doğru! $(180^\\circ - 50^\\circ) \\div 2 = 65^\\circ$.", spokenOk: "Doğru! Yüz seksenden elliyi çıkarıp ikiye bölünce altmış beş derece bulunur." },
        { id: "p2", text: "$130^\\circ$", correct: false, hint: "$130^\\circ$ iki taban açısının toplamıdır, ikiye bölmeliyiz.", spokenHint: "Yüz otuz derece iki taban açısının toplamıdır, ikiye bölmeliyiz." },
        { id: "p3", text: "$80^\\circ$", correct: false, hint: "$50 + 80 + 80 = 210^\\circ$ eder ve $180^\\circ$'yi geçer.", spokenHint: "Elli artı seksen artı seksen iki yüz on derece eder, üçgeni geçer." }
      ],
      renderSvg: () => svgFrame(126, "İkizkenar üçgen açıları örneği", `
        <polygon points="96,102 224,102 160,24" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2.5" stroke-linejoin="round"/>
        <text x="160" y="48" text-anchor="middle" font-size="12" font-weight="800" fill="#1E40AF">40°</text>
        <text x="122" y="95" font-size="12" font-weight="800" fill="#047857">70°</text>
        <text x="186" y="95" font-size="12" font-weight="800" fill="#047857">70°</text>
      `)
    },

    // --- LİSE (6) ---
    {
      id: "bridge_logic_sets",
      stage: "lise",
      gradeLabel: "9. Sınıf Temeli",
      title: "Kümeler, Gerçek Sayı Aralıkları ve Mantık",
      duration: "3 dk",
      feedsUnit: "9. Sınıf • Sayılar ve Mantık",
      ruleLead: "Aralıklarda köşeli parantez $[a, b]$ uç sayıyı dâhil eder, açık parantez $(a, b)$ etmez; $p \\Rightarrow q$ yalnızca $1 \\Rightarrow 0$ iken yanlıştır.",
      ruleTip: "İki aralığın kesişimi $A \\cap B$ her iki aralıkta da ortak bulunan bölgedir: alt sınırlardan büyüğü, üst sınırlardan küçüğü seçilir.",
      practicePrompt: "$A = [2, 6)$ ve $B = (4, 8]$ kümelerinin kesişimi $A \\cap B$ hangi aralıktır?",
      spokenPrompt: "A eşittir iki kapalı altı açık aralığı ile B eşittir dört açık sekiz kapalı aralığının kesişimi nedir?",
      practiceOptions: [
        { id: "p1", text: "$(4, 6)$", correct: true, okMsg: "Kusursuz! Alt sınırlardan büyük olan $4$ (açık), üst sınırlardan küçük olan $6$ (açık) alınır.", spokenOk: "Kusursuz! Kesişim aralığı dört açık altı açık aralığıdır." },
        { id: "p2", text: "$[4, 6]$", correct: false, hint: "$4$ küme $B$'de ve $6$ küme $A$'da dâhil değildir; açık parantez gerekir.", spokenHint: "Dört ve altı uç noktaları her iki kümede de dâhil değildir; açık parantez gerekir." },
        { id: "p3", text: "$[2, 8]$", correct: false, hint: "$[2, 8]$ kesişim değil birleşim ($A \\cup B$) aralığıdır.", spokenHint: "İki kapalı sekiz kapalı aralığı kesişim değil birleşimdir." }
      ],
      renderSvg: () => svgFrame(124, "Sayı doğrusunda aralık kesişimi", `
        <line x1="30" y1="42" x2="290" y2="42" stroke="#CBD5E1" stroke-width="2"/>
        <line x1="80" y1="42" x2="210" y2="42" stroke="#2563EB" stroke-width="5"/>
        <circle cx="80" cy="42" r="5" fill="#2563EB"/>
        <circle cx="210" cy="42" r="5" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
        <text x="50" y="34" font-size="11.5" font-weight="800" fill="#1E40AF">[a, b)</text>
        <line x1="30" y1="84" x2="290" y2="84" stroke="#CBD5E1" stroke-width="2"/>
        <line x1="130" y1="84" x2="255" y2="84" stroke="#10B981" stroke-width="5"/>
        <circle cx="130" cy="84" r="5" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
        <circle cx="255" cy="84" r="5" fill="#10B981"/>
        <text x="50" y="76" font-size="11.5" font-weight="800" fill="#047857">(c, d]</text>
        <rect x="130" y="24" width="80" height="78" fill="#FDE047" opacity="0.25" stroke="#D97706" stroke-dasharray="3 3"/>
      `)
    },
    {
      id: "bridge_functions",
      stage: "lise",
      gradeLabel: "9–10. Sınıf Temeli",
      title: "Fonksiyon Makinesi, Öteleme ve Ters Fonksiyon",
      duration: "3 dk",
      feedsUnit: "9–11. Sınıf • Fonksiyonlar",
      ruleLead: "Fonksiyon kuralında $x$ yerine yeni bir ifade yazıldığında kuraldaki tüm $x$'ler değişir; $f^{-1}(y) = x \\iff f(x) = y$'dir.",
      ruleTip: "$g(x) = f(x - r) + k$ dönüşümünde grafik $r$ birim sağa, $k$ birim yukarı ötelenir.",
      practicePrompt: "$f(x) = 2x - 3$ doğrusal fonksiyonu için $f(x + 1)$ ifadesi hangisine eşittir?",
      spokenPrompt: "f x eşittir iki x eksi üç doğrusal fonksiyonu için f x artı bir ifadesi hangisine eşittir?",
      practiceOptions: [
        { id: "p1", text: "$2x - 1$", correct: true, okMsg: "Doğru! $2(x + 1) - 3 = 2x + 2 - 3 = 2x - 1$.", spokenOk: "Doğru! İki çarpı x artı bir eksi üç işleminin sonucu iki x eksi birdir." },
        { id: "p2", text: "$2x - 2$", correct: false, hint: "$2$'yi parantez içindeki $+1$ ile de çarpmalıyız: $2 \\cdot 1 = 2$.", spokenHint: "İkiyi parantez içindeki birle de çarpmalıyız." },
        { id: "p3", text: "$2x + 1$", correct: false, hint: "$2x + 2 - 3$ işleminde işaretlere dikkat edelim.", spokenHint: "İki x artı iki eksi üç işleminde sabit terimi kontrol edelim." }
      ],
      renderSvg: () => svgFrame(122, "Fonksiyon dönüşüm ve makine şeması", `
        <rect x="28" y="34" width="66" height="44" rx="10" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.8"/>
        <text x="61" y="61" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">x + 1</text>
        <path d="M98 56 L124 56" stroke="#475569" stroke-width="2.5"/>
        <polygon points="122,51 130,56 122,61" fill="#475569"/>
        <rect x="132" y="28" width="90" height="56" rx="12" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
        <text x="177" y="53" text-anchor="middle" font-size="12" font-weight="800" fill="#312E81">f kuralı</text>
        <text x="177" y="71" text-anchor="middle" font-size="11.5" font-weight="700" fill="#4F46E5">2·(girdi) - 3</text>
        <path d="M226 56 L250 56" stroke="#475569" stroke-width="2.5"/>
        <polygon points="248,51 256,56 248,61" fill="#475569"/>
        <circle cx="276" cy="56" r="19" fill="#ECFDF5" stroke="#047857" stroke-width="2"/>
        <text x="276" y="61" text-anchor="middle" font-size="14" font-weight="800" fill="#065F46">?</text>
      `)
    },
    {
      id: "bridge_quadratics",
      stage: "lise",
      gradeLabel: "10. Sınıf Temeli",
      title: "Parabol Tepe Noktası ve Karesel Fonksiyonlar",
      duration: "3 dk",
      feedsUnit: "10. ve 12. Sınıf • Karesel Fonksiyonlar",
      ruleLead: "$f(x) = a(x - r)^2 + k$ biçimindeki parabolün tepe noktası $T(r, k)$'dır; $a \\gt 0$ iken kollar yukarı bakar ve $k$ en küçük değerdir.",
      ruleTip: "$ax^2 + bx + c = 0$ denkleminde $\\Delta = b^2 - 4ac$ sıfırdan büyükse iki farklı gerçek kök vardır.",
      practicePrompt: "$f(x) = (x - 3)^2 + 2$ parabolünün alabileceği en küçük değer kaçtır?",
      spokenPrompt: "f x eşittir x eksi üçün karesi artı iki parabolünün alabileceği en küçük değer kaçtır?",
      practiceOptions: [
        { id: "p1", text: "$2$", correct: true, okMsg: "Doğru! $(x - 3)^2 \\ge 0$ olduğundan en küçük değer $x = 3$ için $0 + 2 = 2$'dir.", spokenOk: "Doğru! Kare ifade en az sıfır olacağından fonksiyonun en küçük değeri ikidir." },
        { id: "p2", text: "$3$", correct: false, hint: "$3$ en küçük değeri veren $x$ apsisidir; en küçük değer $y = k$ ordinatıdır.", spokenHint: "Üç, en küçük değeri veren x değeridir; en küçük değer y ordinatıdır." },
        { id: "p3", text: "$-3$", correct: false, hint: "Parantez içindeki $(x - 3)^2$ ifadesinin en küçük değeri sıfırdır.", spokenHint: "Parantez karesinin alabileceği en küçük değer sıfırdır." }
      ],
      renderSvg: () => svgFrame(126, "Parabol tepe noktası T(r,k)", `
        <line x1="56" y1="98" x2="264" y2="98" stroke="#94A3B8" stroke-width="1.5"/>
        <line x1="110" y1="16" x2="110" y2="112" stroke="#94A3B8" stroke-width="1.5"/>
        <path d="M126 24 Q176 130 226 24" fill="none" stroke="#0EA5E9" stroke-width="3"/>
        <circle cx="176" cy="77" r="4.5" fill="#DC2626"/>
        <text x="176" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="#DC2626">T(r, k)</text>
        <text x="236" y="42" font-size="11.5" font-weight="700" fill="#075985">a &gt; 0: en küçük k</text>
      `)
    },
    {
      id: "bridge_trig",
      stage: "lise",
      gradeLabel: "10–11. Sınıf Temeli",
      title: "Birim Çember, Dik Üçgen Oranları ve Özdeşlik",
      duration: "3 dk",
      feedsUnit: "10–12. Sınıf • Trigonometri",
      ruleLead: "Dik üçgende $\\sin\\alpha = \\frac{\\text{karşı}}{\\text{hipotenüs}}$, $\\cos\\alpha = \\frac{\\text{komşu}}{\\text{hipotenüs}}$ olup daima $\\sin^2\\alpha + \\cos^2\\alpha = 1$'dir.",
      ruleTip: "$3$-$4$-$5$, $5$-$12$-$13$ ve $8$-$15$-$17$ özel dik üçgenleri trigonometrik oranları saniyeler içinde buldurur.",
      practicePrompt: "Dar açılı bir dik üçgende $\\sin\\alpha = \\frac{3}{5}$ ise $\\cos\\alpha$ değeri kaçtır?",
      spokenPrompt: "Dar açılı bir dik üçgende sinüs alfa beşte üç ise kosinüs alfa değeri kaçtır?",
      practiceOptions: [
        { id: "p1", text: "$\\frac{4}{5}$", correct: true, okMsg: "Tam isabet! $3$-$4$-$5$ dik üçgeninde komşu dik kenar $4$ olduğundan $\\cos\\alpha = \\frac{4}{5}$ olur.", spokenOk: "Tam isabet! Üç dört beş dik üçgeninden kosinüs alfa beşte dört olur." },
        { id: "p2", text: "$\\frac{2}{5}$", correct: false, hint: "$\\sin\\alpha + \\cos\\alpha = 1$ değildir; kareleri toplamı $\\sin^2\\alpha + \\cos^2\\alpha = 1$'dir.", spokenHint: "Sinüs ile kosinüsün kendileri değil kareleri toplamı birdir." },
        { id: "p3", text: "$\\frac{3}{4}$", correct: false, hint: "$\\frac{3}{4}$ değeri $\\cos\\alpha$ değil $\\tan\\alpha$ oranıdır.", spokenHint: "Dörtte üç kosinüs değil tanjant oranıdır." }
      ],
      renderSvg: () => svgFrame(126, "Birim çember sinüs kosinüs", `
        <circle cx="106" cy="63" r="44" fill="#EFF6FF" stroke="#4F46E5" stroke-width="2"/>
        <line x1="54" y1="63" x2="158" y2="63" stroke="#64748B" stroke-width="1.5"/>
        <line x1="106" y1="12" x2="106" y2="114" stroke="#64748B" stroke-width="1.5"/>
        <line x1="106" y1="63" x2="138" y2="33" stroke="#DC2626" stroke-width="2.5"/>
        <line x1="138" y1="33" x2="138" y2="63" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
        <circle cx="138" cy="33" r="3.5" fill="#DC2626"/>
        <text x="228" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1E40AF">sin²α + cos²α = 1</text>
        <text x="228" y="76" text-anchor="middle" font-size="11.5" font-weight="600" fill="#334155">Birim çember (r = 1)</text>
      `)
    },
    {
      id: "bridge_log_seq",
      stage: "lise",
      gradeLabel: "11–12. Sınıf Temeli",
      title: "Üstel–Logaritmik Terslik ve Sayı Dizileri",
      duration: "3 dk",
      feedsUnit: "11–12. Sınıf • Logaritma ve Diziler",
      ruleLead: "$\\log_a x = y \\iff a^y = x$ demektir; logaritma \"$a$ tabanında hangi üs $x$'i verir?\" sorusunun yanıtıdır.",
      ruleTip: "Aritmetik dizide $a_n = a_1 + (n-1)d$, geometrik dizide $a_n = a_1 \\cdot r^{n-1}$ bağıntısı terimler arasındaki değişimi verir.",
      practicePrompt: "$\\log_3 27 + \\log_2 8$ toplamının değeri kaçtır?",
      spokenPrompt: "Logaritma üç tabanında yirmi yedi artı logaritma iki tabanında sekiz toplamının değeri kaçtır?",
      practiceOptions: [
        { id: "p1", text: "$6$", correct: true, okMsg: "Harika! $3^3 = 27$ için $\\log_3 27 = 3$ ve $2^3 = 8$ için $\\log_2 8 = 3$; toplam $6$.", spokenOk: "Harika! İlk logaritma üç, ikincisi de üç olduğu için toplam altı eder." },
        { id: "p2", text: "$5$", correct: false, hint: "$3^3 = 27$ ve $2^3 = 8$ üslerini ayrı ayrı toplayalım.", spokenHint: "Üçün üçüncü kuvveti yirmi yedi, ikinin üçüncü kuvveti sekizdir." },
        { id: "p3", text: "$9$", correct: false, hint: "Üsleri çarpmak yerine toplamalıyız: $3 + 3$.", spokenHint: "Üsleri çarpmak yerine toplamalıyız." }
      ],
      renderSvg: () => svgFrame(126, "Üstel ve logaritmik ters fonksiyon grafiği", `
        <line x1="40" y1="98" x2="170" y2="98" stroke="#64748B" stroke-width="1.5"/>
        <line x1="68" y1="16" x2="68" y2="112" stroke="#64748B" stroke-width="1.5"/>
        <line x1="46" y1="110" x2="156" y2="20" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4 3"/>
        <path d="M46 92 Q86 86 112 24" fill="none" stroke="#2563EB" stroke-width="2.5"/>
        <path d="M84 112 Q90 66 156 44" fill="none" stroke="#10B981" stroke-width="2.5"/>
        <text x="234" y="48" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1E40AF">y = aˣ</text>
        <text x="234" y="70" text-anchor="middle" font-size="12.5" font-weight="800" fill="#047857">y = logₐ(x)</text>
        <text x="234" y="92" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">y = x'e göre simetrik</text>
      `)
    },
    {
      id: "bridge_limits_deriv",
      stage: "lise",
      gradeLabel: "12. Sınıf & AYT Temeli",
      title: "Limit Yaklaşımı ve Türev (Anlık Eğim) Köprüsü",
      duration: "3 dk",
      feedsUnit: "12. Sınıf • Limit, Türev ve İntegral",
      ruleLead: "Bir noktadaki türev $f'(x_0)$, eğriye $x = x_0$ apsisli noktadan çizilen teğet doğrusunun eğimidir.",
      ruleTip: "Polinom terimlerde $(x^n)' = n \\cdot x^{n-1}$ kuralı uygulanır; sabit terimin türevi $0$'dır.",
      practicePrompt: "$f(x) = x^3 - 4x + 5$ fonksiyonunun grafiğine $x = 2$ apsisli noktada çizilen teğetin eğimi kaçtır?",
      spokenPrompt: "f x eşittir x küp eksi dört x artı beş fonksiyonunun grafiğine x eşittir iki apsisli noktada çizilen teğetin eğimi kaçtır?",
      practiceOptions: [
        { id: "p1", text: "$8$", correct: true, okMsg: "Mükemmel! $f'(x) = 3x^2 - 4$ olduğundan $f'(2) = 3(4) - 4 = 8$ bulunur.", spokenOk: "Mükemmel! Türev üç x kare eksi dört olur; x yerine iki yazınca eğim sekiz bulunur." },
        { id: "p2", text: "$4$", correct: false, hint: "$f'(x) = 3x^2 - 4$ türevinde $x = 2$ yazarken $3 \\cdot 2^2 = 12$ olduğuna dikkat edelim.", spokenHint: "Türevde x yerine iki yazarken üç çarpı ikinin karesinin on iki olduğuna dikkat edelim." },
        { id: "p3", text: "$12$", correct: false, hint: "$-4x$ teriminin türevi olan $-4$'ü çıkarmayı unutmayalım.", spokenHint: "Eksi dört x teriminin türevi olan eksi dördü çıkarmayı unutmayalım." }
      ],
      renderSvg: () => svgFrame(126, "Eğri üzerinde teğet eğimi f'(x0)", `
        <line x1="36" y1="98" x2="180" y2="98" stroke="#64748B" stroke-width="1.5"/>
        <line x1="56" y1="16" x2="56" y2="112" stroke="#64748B" stroke-width="1.5"/>
        <path d="M62 94 Q112 88 158 22" fill="none" stroke="#E11D48" stroke-width="2.5"/>
        <line x1="82" y1="92" x2="162" y2="30" stroke="#1D4ED8" stroke-width="2" stroke-dasharray="4 3"/>
        <circle cx="122" cy="61" r="4" fill="#0F172A"/>
        <text x="234" y="54" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1E40AF">m_teğet = f'(x₀)</text>
        <text x="234" y="76" text-anchor="middle" font-size="11.5" font-weight="600" fill="#334155">(xⁿ)' = n·xⁿ⁻¹</text>
      `)
    }
  ];

  // ==========================================================================
  // 3. 14 SINIF / YOL İÇİN HAZIR BULUNUŞLUK SORU BANKASI (14 × 6 = 84 SORU)
  // ==========================================================================
  const readinessByTrack = {
    // ------------------------------------------------------------------------
    // 1. SINIF (Türkiye Yüzyılı Maarif Modeli)
    // ------------------------------------------------------------------------
    "1": [
      {
        id: "g1_q1",
        competency: "islem",
        bridgeId: "bridge_count_10",
        prompt: "Onluk çerçevede $7$ kırmızı boncuk var. Yanına $5$ mavi boncuk daha eklersek toplam kaç boncuk olur?",
        spokenPrompt: "Onluk çerçevede yedi kırmızı boncuk var. Yanına beş mavi boncuk daha eklersek toplam kaç boncuk olur?",
        options: [
          { id: "a", text: "$12$", correct: true, okMsg: "Harika! $7$ boncuğu $3$ mavi ile $10$'a tamamlarız; kalan $2$ mavi ile $12$ olur.", spokenOk: "Harika! Yedi boncuğu üç mavi ile ona tamamlarız; kalan iki mavi ile on iki olur." },
          { id: "b", text: "$11$", correct: false, hint: "$7 + 3 = 10$ yaptıktan sonra geriye $5 - 3 = 2$ mavi boncuk kalır.", spokenHint: "Yedi ile üç on yapar; geriye iki mavi boncuk daha kalır." },
          { id: "c", text: "$13$", correct: false, hint: "Mavi boncukları tek tek sayıp $7$'nin üzerine ekleyelim: $8, 9, 10, 11, 12$.", spokenHint: "Mavi boncukları tek tek sayıp yedinin üzerine ekleyelim." },
          { id: "d", text: "$10$", correct: false, hint: "$10$ yalnızca ilk çerçeveyi doldurur; dışarıda kalan boncukları da eklemeliyiz.", spokenHint: "On yalnızca ilk çerçeveyi doldurur; dışarıda kalan boncukları da eklemeliyiz." }
        ],
        unsureMsg: "10'a tamamlayarak toplama köprüsünü rotana ekledim.",
        spokenUnsure: "Ona tamamlayarak toplama köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "Onluk çerçevede 7 kırmızı ve 5 mavi boncuk", `
          <g transform="translate(26,20)">
            ${Array.from({ length: 10 }, (_, i) => {
              const c = i % 5, r = Math.floor(i / 5), on = i < 7;
              return `<rect x="${c * 28}" y="${r * 28}" width="24" height="24" rx="5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>`
                + (on ? `<circle cx="${c * 28 + 12}" cy="${r * 28 + 12}" r="7.5" fill="#EF4444"/>` : "");
            }).join("")}
          </g>
          <text x="182" y="54" font-size="18" font-weight="900" fill="#0F172A">+</text>
          <g transform="translate(206,24)">
            ${Array.from({ length: 5 }, (_, i) => {
              const c = i % 3, r = Math.floor(i / 3);
              return `<circle cx="${c * 26 + 12}" cy="${r * 28 + 12}" r="8" fill="#2563EB"/>`;
            }).join("")}
          </g>
          <text x="160" y="94" text-anchor="middle" font-size="11.5" font-weight="700" fill="#334155">Toplam kaç boncuk?</text>
        `)
      },
      {
        id: "g1_q2",
        competency: "islem",
        bridgeId: "bridge_add_sub",
        prompt: "Tabakta $15$ çilek vardı. $6$ tanesi yenince geriye kaç çilek kaldı?",
        spokenPrompt: "Tabakta on beş çilek vardı. Altı tanesi yenince geriye kaç çilek kaldı?",
        options: [
          { id: "a", text: "$8$", correct: false, hint: "$15$'ten önce $5$ çıkarırsak $10$ kalır; $1$ tane daha çıkarırsak kaç olur?", spokenHint: "On beşten beş çıkarınca on kalır; bir tane daha çıkaralım." },
          { id: "b", text: "$9$", correct: true, okMsg: "Süper! $15 - 6 = 9$ çilek kalır.", spokenOk: "Süper! On beşten altı çıkınca dokuz çilek kalır." },
          { id: "c", text: "$10$", correct: false, hint: "$15 - 5 = 10$ eder; soruda $6$ çilek yenmiştir.", spokenHint: "On beşten beş çıkınca on eder; soruda altı çilek yenmiştir." },
          { id: "d", text: "$21$", correct: false, hint: "Çilekler yendiği için toplamayı değil çıkarmayı kullanmalıyız.", spokenHint: "Çilekler yendiği için toplamayı değil çıkarmayı kullanmalıyız." }
        ],
        unsureMsg: "Sayı doğrusunda geriye sayma köprüsünü rotana ekledim.",
        spokenUnsure: "Sayı doğrusunda geriye sayma köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "15 çilekten 6 tanesi eksiliyor", `
          <g transform="translate(36,18)">
            ${Array.from({ length: 15 }, (_, i) => {
              const c = i % 5, r = Math.floor(i / 5), eaten = i >= 9;
              return `<circle cx="${c * 32 + 12}" cy="${r * 22 + 10}" r="7.5" fill="${eaten ? "#CBD5E1" : "#E11D48"}"/>`
                + (eaten ? `<line x1="${c * 32 + 5}" y1="${r * 22 + 17}" x2="${c * 32 + 19}" y2="${r * 22 + 3}" stroke="#475569" stroke-width="2"/>` : "");
            }).join("")}
          </g>
          <text x="248" y="48" text-anchor="middle" font-size="13" font-weight="800" fill="#0F172A">15 - 6 = ?</text>
          <text x="248" y="68" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">Kalanları bulalım</text>
        `)
      },
      {
        id: "g1_q3",
        competency: "muhakeme",
        bridgeId: "bridge_shapes_sym",
        prompt: "Şekildeki örüntüye göre soru işareti ($?$) yerine hangi şekil gelmelidir?",
        spokenPrompt: "Şekildeki örüntüye göre soru işareti yerine hangi şekil gelmelidir?",
        options: [
          { id: "a", text: "Üçgen ($\\triangle$)", correct: true, okMsg: "Harika örüntü avcılığı! Örüntü daire, üçgen, kare biçiminde tekrar ediyor; daireden sonra üçgen gelir.", spokenOk: "Harika! Örüntü daire, üçgen, kare diye tekrar ediyor; daireden sonra üçgen gelir." },
          { id: "b", text: "Daire ($\\bigcirc$)", correct: false, hint: "Bir önceki şekil zaten daire; sırada tekrar eden gruptaki ikinci şekil var.", spokenHint: "Bir önceki şekil zaten daire; sırada gruptaki ikinci şekil var." },
          { id: "c", text: "Kare ($\\square$)", correct: false, hint: "Kare şekli üçgenden sonra gelir; dairenin hemen yanında üçgen vardır.", spokenHint: "Kare üçgenden sonra gelir; dairenin hemen yanında üçgen vardır." },
          { id: "d", text: "Yıldız ($\\star$)", correct: false, hint: "Örüntümüzde yıldız şekli hiç kullanılmamıştır.", spokenHint: "Örüntümüzde yıldız şekli hiç kullanılmamıştır." }
        ],
        unsureMsg: "Şekilleri tanıma ve örüntü köprüsünü yoluna ekledim.",
        spokenUnsure: "Şekilleri tanıma ve örüntü köprüsünü yoluna ekledim.",
        renderSvg: () => svgFrame(96, "Daire, üçgen, kare örüntüsü", `
          <circle cx="48" cy="48" r="14" fill="#3B82F6"/>
          <polygon points="94,34 80,62 108,62" fill="#10B981"/>
          <rect x="128" y="34" width="28" height="28" rx="4" fill="#F59E0B"/>
          <circle cx="190" cy="48" r="14" fill="#3B82F6"/>
          <rect x="224" y="30" width="36" height="36" rx="8" fill="#ECFDF5" stroke="#047857" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="242" y="54" text-anchor="middle" font-size="16" font-weight="900" fill="#047857">?</text>
          <rect x="272" y="34" width="28" height="28" rx="4" fill="#F59E0B"/>
        `)
      },
      {
        id: "g1_q4",
        competency: "muhakeme",
        bridgeId: "bridge_count_10",
        prompt: "Üç kutudaki bilye sayıları verilmiştir: $A$ kutusunda $14$, $B$ kutusunda $9$, $C$ kutusunda $18$ bilye vardır. En çoktan en aza sıralama nasıldır?",
        spokenPrompt: "A kutusunda on dört, B kutusunda dokuz, C kutusunda on sekiz bilye vardır. En çoktan en aza doğru sıralama nasıldır?",
        options: [
          { id: "a", text: "$C - A - B$", correct: true, okMsg: "Doğru! $18$ en çok ($C$), sonra $14$ ($A$), en az ise $9$ ($B$).", spokenOk: "Doğru! En çok C on sekiz, sonra A on dört, en az B dokuzdur." },
          { id: "b", text: "$A - B - C$", correct: false, hint: "$18$ sayısı $14$ ve $9$'dan daha büyüktür; sıralamaya en büyük olan $C$ ile başlamalıyız.", spokenHint: "On sekiz en büyük olduğu için sıralamaya C ile başlamalıyız." },
          { id: "c", text: "$B - A - C$", correct: false, hint: "Bu sıralama en azdan en çoğa doğrudur; soruda **en çoktan en aza** isteniyor.", spokenHint: "Bu en azdan en çoğa sıralamadır; soruda en çoktan en aza isteniyor." },
          { id: "d", text: "$C - B - A$", correct: false, hint: "$A$ kutusunda $14$, $B$ kutusunda $9$ bilye var; $14$ bilye $9$'dan çoktur.", spokenHint: "A kutusundaki on dört bilye dokuzdan daha çoktur." }
        ],
        unsureMsg: "Sayıları karşılaştırma köprüsünü rotana ekledim.",
        spokenUnsure: "Sayıları karşılaştırma köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "A, B, C bilye kutuları karşılaştırma", `
          <rect x="44" y="38" width="54" height="50" rx="8" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.8"/>
          <text x="71" y="60" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">A: 14</text>
          <text x="71" y="78" text-anchor="middle" font-size="10.5" font-weight="600" fill="#334155">bilye</text>
          <rect x="133" y="50" width="54" height="38" rx="8" fill="#FFF7ED" stroke="#F97316" stroke-width="1.8"/>
          <text x="160" y="73" text-anchor="middle" font-size="13" font-weight="800" fill="#9A3412">B: 9</text>
          <rect x="222" y="24" width="54" height="64" rx="8" fill="#ECFDF5" stroke="#047857" stroke-width="1.8"/>
          <text x="249" y="54" text-anchor="middle" font-size="13" font-weight="800" fill="#065F46">C: 18</text>
          <text x="249" y="72" text-anchor="middle" font-size="10.5" font-weight="600" fill="#047857">bilye</text>
        `)
      },
      {
        id: "g1_q5",
        competency: "modelleme",
        bridgeId: "bridge_shapes_sym",
        prompt: "Kareli haritada mavi yıldızdan ($\\star$) başlayıp **$3$ kare sağa**, sonra **$2$ kare yukarı** gidersek hangi harfe ulaşırız?",
        spokenPrompt: "Kareli haritada mavi yıldızdan başlayıp üç kare sağa, sonra iki kare yukarı gidersek hangi harfe ulaşırız?",
        options: [
          { id: "a", text: "$A$", correct: false, hint: "$A$ harfi yalnızca $2$ kare yukarıdadır, hiç sağa gidilmemiştir.", spokenHint: "A harfi yalnızca iki kare yukarıdadır." },
          { id: "b", text: "$B$", correct: true, okMsg: "Tam isabet! $3$ adım sağa gidip $2$ adım yukarı çıkınca $B$ kutusuna ulaşırız.", spokenOk: "Tam isabet! Üç adım sağa ve iki adım yukarı gidince B harfine ulaşırız." },
          { id: "c", text: "$C$", correct: false, hint: "$C$ harfi $3$ adım sağda ama aynı satırdadır; $2$ kare yukarı çıkmayı unutmayalım.", spokenHint: "C harfi üç adım sağda ama aynı satırdadır; iki kare yukarı çıkmalıyız." },
          { id: "d", text: "$D$", correct: false, hint: "$D$ harfi yalnızca $1$ kare yukarıdadır.", spokenHint: "D harfi yalnızca bir kare yukarıdadır." }
        ],
        unsureMsg: "Yön ve konum adımlarını takip etme köprüsünü yoluna ekledim.",
        spokenUnsure: "Yön ve konum adımlarını takip etme köprüsünü yoluna ekledim.",
        renderSvg: () => svgFrame(116, "Yön ve mesafe ızgarası", `
          <g transform="translate(88,16)">
            ${Array.from({ length: 3 }, (_, r) =>
              Array.from({ length: 5 }, (_, c) => {
                let lbl = "";
                let col = "#FFFFFF";
                if (r === 2 && c === 0) { lbl = "★"; col = "#DBEAFE"; }
                else if (r === 0 && c === 0) { lbl = "A"; }
                else if (r === 0 && c === 3) { lbl = "B"; col = "#ECFDF5"; }
                else if (r === 2 && c === 3) { lbl = "C"; }
                else if (r === 1 && c === 3) { lbl = "D"; }
                return `<rect x="${c * 28}" y="${r * 28}" width="26" height="26" rx="4" fill="${col}" stroke="#94A3B8" stroke-width="1.2"/>`
                  + (lbl ? `<text x="${c * 28 + 13}" y="${r * 28 + 17}" text-anchor="middle" font-size="13" font-weight="800" fill="#0F172A">${lbl}</text>` : "");
              }).join("")
            ).join("")}
          </g>
        `)
      },
      {
        id: "g1_q6",
        competency: "modelleme",
        bridgeId: "bridge_time_data",
        prompt: "Kumbarada bir tane $10\\text{ TL}$ ve iki tane $5\\text{ TL}$ vardır. Toplam kaç lira eder?",
        spokenPrompt: "Kumbarada bir tane on lira ve iki tane beş lira vardır. Toplam kaç lira eder?",
        options: [
          { id: "a", text: "$15\\text{ TL}$", correct: false, hint: "$10 + 5 = 15$ eder ama kumbarada bir tane daha $5\\text{ TL}$ var!", spokenHint: "On artı beş on beş eder ama bir tane daha beş lira var." },
          { id: "b", text: "$20\\text{ TL}$", correct: true, okMsg: "Doğru! $10 + 5 + 5 = 20\\text{ TL}$ eder.", spokenOk: "Doğru! On artı beş artı beş eşittir yirmi lira eder." },
          { id: "c", text: "$25\\text{ TL}$", correct: false, hint: "Yalnızca iki adet $5\\text{ TL}$ ($10\\text{ TL}$) ve bir adet $10\\text{ TL}$ bulunuyor.", spokenHint: "Yalnızca iki adet beş lira ve bir adet on lira var." },
          { id: "d", text: "$12\\text{ TL}$", correct: false, hint: "Paraların adetini değil üzerindeki değerleri ($10, 5, 5$) toplamalıyız.", spokenHint: "Paraların adetini değil değerlerini toplamalıyız." }
        ],
        unsureMsg: "Paralarımızı tanıma ve toplama köprüsünü rotana ekledim.",
        spokenUnsure: "Paralarımızı tanıma ve toplama köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(100, "10 TL ve iki adet 5 TL", `
          <rect x="34" y="28" width="84" height="44" rx="6" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.8"/>
          <text x="76" y="55" text-anchor="middle" font-size="14" font-weight="900" fill="#991B1B">10 TL</text>
          <text x="135" y="55" font-size="16" font-weight="900" fill="#0F172A">+</text>
          <rect x="152" y="30" width="60" height="40" rx="6" fill="#EDE9FE" stroke="#6D28D9" stroke-width="1.8"/>
          <text x="182" y="54" text-anchor="middle" font-size="13" font-weight="900" fill="#5B21B6">5 TL</text>
          <rect x="222" y="30" width="60" height="40" rx="6" fill="#EDE9FE" stroke="#6D28D9" stroke-width="1.8"/>
          <text x="252" y="54" text-anchor="middle" font-size="13" font-weight="900" fill="#5B21B6">5 TL</text>
        `)
      }
    ],

    // ------------------------------------------------------------------------
    // 2. SINIF (Türkiye Yüzyılı Maarif Modeli)
    // ------------------------------------------------------------------------
    "2": [
      {
        id: "g2_q1",
        competency: "islem",
        bridgeId: "bridge_place_mul",
        prompt: "Onluk–birlik bloklarıyla gösterilen $36$ ve $27$ sayılarının toplamı kaçtır?",
        spokenPrompt: "Onluk ve birlik bloklarıyla gösterilen otuz altı ve yirmi yedi sayılarının toplamı kaçtır?",
        options: [
          { id: "a", text: "$63$", correct: true, okMsg: "Harika! $30 + 20 = 50$ ve $6 + 7 = 13$ olduğu için toplam $63$ olur.", spokenOk: "Harika! Otuz ile yirmi elli, altı ile yedi on üç eder; toplam altmış üç olur." },
          { id: "b", text: "$53$", correct: false, hint: "$6 + 7 = 13$ ederken elde oluşan $1$ onluğu eklemeyi unutmayalım.", spokenHint: "Altı artı yedi on üç eder; oluşan bir onluğu eklemeyi unutmayalım." },
          { id: "c", text: "$61$", correct: false, hint: "$6 + 7$ toplamının birler basamağı $3$ olur.", spokenHint: "Altı artı yedinin birler basamağı üç olur." },
          { id: "d", text: "$513$", correct: false, hint: "$13$ birlik, $1$ onluk ve $3$ birliğe dönüşür; $5$ onlukla birleşince $6$ onluk olur.", spokenHint: "On üç birlik bir onluk ve üç birliğe dönüşür." }
        ],
        unsureMsg: "Basamak değeri ve eldeli toplama köprüsünü rotana ekledim.",
        spokenUnsure: "Basamak değeri ve eldeli toplama köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "36 ve 27 basamak değeri kartları", `
          <rect x="28" y="22" width="112" height="52" rx="10" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.8"/>
          <text x="84" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">3 onluk + 6 birlik</text>
          <text x="84" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">(36)</text>
          <text x="160" y="54" text-anchor="middle" font-size="18" font-weight="900" fill="#0F172A">+</text>
          <rect x="180" y="22" width="112" height="52" rx="10" fill="#ECFDF5" stroke="#047857" stroke-width="1.8"/>
          <text x="236" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#065F46">2 onluk + 7 birlik</text>
          <text x="236" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">(27)</text>
          <text x="160" y="94" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">Toplam = ?</text>
        `)
      },
      {
        id: "g2_q2",
        competency: "islem",
        bridgeId: "bridge_add_sub",
        prompt: "Çıkarma işleminin sonucunu bulunuz: $$64 - 28$$",
        spokenPrompt: "Altmış dörtten yirmi sekiz çıkarırsak sonuç kaç olur?",
        options: [
          { id: "a", text: "$44$", correct: false, hint: "$4$'ten $8$ çıkmadığı için onluk bozmalıyız; $8 - 4$ yazamayız.", spokenHint: "Dörtten sekiz çıkmadığı için onluk bozmalıyız." },
          { id: "b", text: "$36$", correct: true, okMsg: "Doğru! $64 - 20 = 44$ ve $44 - 8 = 36$.", spokenOk: "Doğru! Altmış dörtten yirmi çıkınca kırk dört, sekiz daha çıkınca otuz altı kalır." },
          { id: "c", text: "$46$", correct: false, hint: "Onluk bozduğumuzda $6$ onluktan $5$ onluk kalır; $5 - 2 = 3$ onluktur.", spokenHint: "Onluk bozunca altı onluktan beş onluk kalır; beşten iki çıkınca üç kalır." },
          { id: "d", text: "$34$", correct: false, hint: "$14 - 8 = 6$ eder; birler basamağını kontrol edelim.", spokenHint: "On dörtten sekiz çıkınca altı kalır; birler basamağını kontrol edelim." }
        ],
        unsureMsg: "Sayı doğrusunda geriye adımlama köprüsünü yoluna ekledim.",
        spokenUnsure: "Sayı doğrusunda geriye adımlama köprüsünü yoluna ekledim.",
        renderSvg: () => svgFrame(100, "64ten geriye -20 ve -8 sıçrama", `
          <line x1="36" y1="68" x2="284" y2="68" stroke="#0F172A" stroke-width="2.2"/>
          <circle cx="256" cy="68" r="5" fill="#1D4ED8"/>
          <text x="256" y="88" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1E40AF">64</text>
          <path d="M256 60 Q206 20 156 60" fill="none" stroke="#F97316" stroke-width="2.2" stroke-dasharray="4 2"/>
          <text x="206" y="34" text-anchor="middle" font-size="12" font-weight="800" fill="#9A3412">-20</text>
          <path d="M156 60 Q116 28 76 60" fill="none" stroke="#10B981" stroke-width="2.2" stroke-dasharray="4 2"/>
          <text x="116" y="36" text-anchor="middle" font-size="12" font-weight="800" fill="#047857">-8</text>
          <circle cx="76" cy="68" r="5" fill="#047857"/>
          <text x="76" y="88" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">?</text>
        `)
      },
      {
        id: "g2_q3",
        competency: "muhakeme",
        bridgeId: "bridge_add_sub",
        prompt: "Dörder ritmik sayma örüntüsünde soru işareti ($?$) yerine hangi sayı gelmelidir?",
        spokenPrompt: "On iki, on altı, yirmi, soru işareti, yirmi sekiz örüntüsünde soru işareti yerine hangi sayı gelmelidir?",
        options: [
          { id: "a", text: "$22$", correct: false, hint: "Sayılar ikişer değil dörder artıyor: $20 + 4$ kaçtır?", spokenHint: "Sayılar ikişer değil dörder artıyor." },
          { id: "b", text: "$24$", correct: true, okMsg: "Süper! $20 + 4 = 24$ ve $24 + 4 = 28$ ile örüntü tam uyar.", spokenOk: "Süper! Yirmi artı dört eşittir yirmi dört." },
          { id: "c", text: "$25$", correct: false, hint: "$25 + 4 = 29$ olur, oysa sıradaki sayı $28$'dir.", spokenHint: "Yirmi beş artı dört yirmi dokuz eder; sıradaki sayı yirmi sekizdir." },
          { id: "d", text: "$26$", correct: false, hint: "$16 - 12 = 4$ farkını $20$'nin üzerine ekleyelim.", spokenHint: "Fark dört olduğu için yirminin üzerine dört ekleyelim." }
        ],
        unsureMsg: "Ritmik sayma ve artış kuralı köprüsünü rotana ekledim.",
        spokenUnsure: "Ritmik sayma ve artış kuralı köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(92, "12, 16, 20, ?, 28 örüntüsü", `
          ${[12, 16, 20, "?", 28].map((v, i) => `
            <rect x="${24 + i * 56}" y="26" width="46" height="40" rx="10" fill="${v === "?" ? "#ECFDF5" : "#FFFFFF"}" stroke="${v === "?" ? "#047857" : "#CBD5E1"}" stroke-width="1.8"/>
            <text x="${47 + i * 56}" y="51" text-anchor="middle" font-size="14.5" font-weight="800" fill="${v === "?" ? "#047857" : "#0F172A"}">${v}</text>
          `).join("")}
        `)
      },
      {
        id: "g2_q4",
        competency: "muhakeme",
        bridgeId: "bridge_frac_meas",
        prompt: "Her biri $4$ çeyrekten oluşan $3$ bütün ekmekte toplam kaç çeyrek ekmek vardır?",
        spokenPrompt: "Her biri dört çeyrekten oluşan üç bütün ekmekte toplam kaç çeyrek ekmek vardır?",
        options: [
          { id: "a", text: "$8$", correct: false, hint: "$8$ çeyrek yalnızca $2$ bütün ekmekte bulunur.", spokenHint: "Sekiz çeyrek yalnızca iki bütün ekmekte bulunur." },
          { id: "b", text: "$12$", correct: true, okMsg: "Harika! $4 + 4 + 4 = 12$ çeyrek ekmek vardır.", spokenOk: "Harika! Üç bütün ekmekte toplam on iki çeyrek ekmek vardır." },
          { id: "c", text: "$6$", correct: false, hint: "$6$ parça, $3$ bütünün **yarım** dilimlerinin sayısıdır; çeyrekler $4$'er parçadır.", spokenHint: "Altı parça yarım dilimler içindir; çeyrekler dörder parçadır." },
          { id: "d", text: "$7$", correct: false, hint: "$3$ ve $4$'ü toplamak yerine $3$ tane $4$'ü saymalıyız.", spokenHint: "Üç ile dördü toplamak yerine üç tane dördü saymalıyız." }
        ],
        unsureMsg: "Bütün, yarım ve çeyrek ilişkisi köprüsünü rotana ekledim.",
        spokenUnsure: "Bütün, yarım ve çeyrek ilişkisi köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "3 bütün çeyreklere bölünmüş", `
          ${[74, 160, 246].map(cx => `
            <circle cx="${cx}" cy="46" r="24" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
            <line x1="${cx - 24}" y1="46" x2="${cx + 24}" y2="46" stroke="#D97706" stroke-width="1.6"/>
            <line x1="${cx}" y1="22" x2="${cx}" y2="70" stroke="#D97706" stroke-width="1.6"/>
          `).join("")}
          <text x="160" y="92" text-anchor="middle" font-size="12" font-weight="800" fill="#92400E">3 bütün = ? çeyrek</text>
        `)
      },
      {
        id: "g2_q5",
        competency: "modelleme",
        bridgeId: "bridge_place_mul",
        prompt: "Şekilde her sırada $5$ elma bulunan $4$ sıra vardır. Toplam elma sayısını veren çarpma işlemi ve sonucu hangisidir?",
        spokenPrompt: "Şekilde her sırada beş elma bulunan dört sıra vardır. Toplam elma sayısını veren çarpma işlemi ve sonucu hangisidir?",
        options: [
          { id: "a", text: "$4 + 5 = 9$", correct: false, hint: "Eşit sıraları sayarken toplama değil çarpma kurarız: $4$ tane $5$.", spokenHint: "Eşit sıraları sayarken dört artı beş değil dört tane beş yani çarpma kurarız." },
          { id: "b", text: "$4 \\times 5 = 20$", correct: true, okMsg: "Doğru modelleme! $5 + 5 + 5 + 5 = 4 \\times 5 = 20$ elma vardır.", spokenOk: "Doğru modelleme! Dört çarpı beş eşittir yirmi elma vardır." },
          { id: "c", text: "$4 \\times 4 = 16$", correct: false, hint: "Her sırada $4$ değil $5$ elma bulunuyor.", spokenHint: "Her sırada dört değil beş elma bulunuyor." },
          { id: "d", text: "$5 \\times 5 = 25$", correct: false, hint: "Satır sayısını dikkatlice sayalım: $4$ sıra vardır.", spokenHint: "Satır sayısını sayalım; dört sıra vardır." }
        ],
        unsureMsg: "Eşit gruplama ve çarpma köprüsünü rotana ekledim.",
        spokenUnsure: "Eşit gruplama ve çarpma köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "4 sıra 5 elma dizisi", `
          <g transform="translate(80,14)">
            ${Array.from({ length: 4 }, (_, r) =>
              Array.from({ length: 5 }, (_, c) =>
                `<circle cx="${c * 34 + 12}" cy="${r * 21 + 10}" r="7" fill="#DC2626"/>`
              ).join("")
            ).join("")}
          </g>
        `)
      },
      {
        id: "g2_q6",
        competency: "modelleme",
        bridgeId: "bridge_time_data",
        prompt: "Şekildeki analog saat öğleden önce kaçı göstermektedir?",
        spokenPrompt: "Şekildeki analog saat öğleden önce kaçı göstermektedir?",
        options: [
          { id: "a", text: "$09:30$", correct: true, okMsg: "Doğru! Akrep $9$ ile $10$ arasında, yelkovan $6$'nın üzerinde olduğu için saat dokuz buçuktur.", spokenOk: "Doğru! Akrep dokuz ile on arasında, yelkovan altının üzerinde olduğu için saat dokuz otuzdur." },
          { id: "b", text: "$06:45$", correct: false, hint: "Kısa ibre (akrep) $9$ ile $10$ arasındadır; uzun ibre (yelkovan) $6$'yı gösterir.", spokenHint: "Kısa ibre dokuz ile on arasındadır; uzun ibre altıyı gösterir." },
          { id: "c", text: "$10:30$", correct: false, hint: "Akrep henüz $10$'u geçmemiştir, $9$ ile $10$ arasındadır.", spokenHint: "Akrep henüz onu geçmemiştir." },
          { id: "d", text: "$09:06$", correct: false, hint: "Yelkovan $6$'dayken geçen dakika $6 \\times 5 = 30$'dur.", spokenHint: "Yelkovan altıyı gösterdiğinde otuz dakika geçmiş olur." }
        ],
        unsureMsg: "Saat okuma köprüsünü yoluna ekledim.",
        spokenUnsure: "Saat okuma köprüsünü yoluna ekledim.",
        renderSvg: () => svgFrame(116, "09:30 gösteren analog saat", `
          <circle cx="160" cy="58" r="44" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.5"/>
          <text x="160" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0F172A">12</text>
          <text x="195" y="62" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0F172A">3</text>
          <text x="160" y="96" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0F172A">6</text>
          <text x="125" y="62" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0F172A">9</text>
          <line x1="160" y1="58" x2="138" y2="51" stroke="#1D4ED8" stroke-width="3.6" stroke-linecap="round"/>
          <line x1="160" y1="58" x2="160" y2="85" stroke="#047857" stroke-width="2.4" stroke-linecap="round"/>
          <circle cx="160" cy="58" r="3.5" fill="#0F172A"/>
        `)
      }
    ],

    // ------------------------------------------------------------------------
    // 3. SINIF (Türkiye Yüzyılı Maarif Modeli)
    // ------------------------------------------------------------------------
    "3": [
      {
        id: "g3_q1",
        competency: "islem",
        bridgeId: "bridge_place_mul",
        prompt: "Üç basamaklı sayılarla verilen toplama işleminin sonucu kaçtır? $$425 + 189$$",
        spokenPrompt: "Dört yüz yirmi beş artı yüz seksen dokuz işleminin sonucu kaçtır?",
        options: [
          { id: "a", text: "$504$", correct: false, hint: "Onlar ve yüzler basamağına gelen eldeleri ($+1$) eklemeyi unutmayalım.", spokenHint: "Onlar ve yüzler basamağına gelen eldeleri unutmayalım." },
          { id: "b", text: "$614$", correct: true, okMsg: "Kusursuz! $5+9=14$ (elde $1$), $2+8+1=11$ (elde $1$), $4+1+1=6 \\Rightarrow 614$.", spokenOk: "Kusursuz! Doğru cevap altı yüz on dörttür." },
          { id: "c", text: "$604$", correct: false, hint: "$2 + 8 + 1 = 11$ eder; onlar basamağı $1$ olmalıdır.", spokenHint: "İki artı sekiz artı elde bir eşittir on bir eder; onlar basamağı birdir." },
          { id: "d", text: "$514$", correct: false, hint: "$2 + 8 + 1 = 11$ olduğundan yüzler basamağına da $1$ elde geçer.", spokenHint: "Onlar basamağından yüzlere bir elde geçer." }
        ],
        unsureMsg: "Basamak değeri ve eldeli işlem köprüsünü rotana ekledim.",
        spokenUnsure: "Basamak değeri ve eldeli işlem köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(106, "425 + 189 basamak tablosu", `
          <rect x="78" y="16" width="164" height="74" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.6"/>
          <text x="160" y="34" text-anchor="middle" font-size="11" font-weight="700" fill="#64748B">Yüzlük  Onluk  Birlik</text>
          <text x="160" y="54" text-anchor="middle" font-size="16" font-weight="800" fill="#0F172A">  4      2      5</text>
          <text x="160" y="72" text-anchor="middle" font-size="16" font-weight="800" fill="#1D4ED8">+ 1      8      9</text>
          <text x="268" y="58" text-anchor="middle" font-size="14" font-weight="900" fill="#047857">= ?</text>
        `)
      },
      {
        id: "g3_q2",
        competency: "islem",
        bridgeId: "bridge_place_mul",
        prompt: "Her kutuda $6$ kalem bulunan $8$ kutunun yanına $14$ kalem daha eklenirse toplam kaç kalem olur?",
        spokenPrompt: "Her kutuda altı kalem bulunan sekiz kutunun yanına on dört kalem daha eklenirse toplam kaç kalem olur?",
        options: [
          { id: "a", text: "$48$", correct: false, hint: "$48$ yalnızca $8$ kutudaki kalem sayısıdır; dışarıdaki $14$ kalemi de ekleyelim.", spokenHint: "Kırk sekiz yalnızca sekiz kutudaki kalem sayısıdır; on dördü de ekleyelim." },
          { id: "b", text: "$62$", correct: true, okMsg: "Doğru! $8 \\times 6 = 48$ ve $48 + 14 = 62$ kalem olur.", spokenOk: "Doğru! Sekiz çarpı altı kırk sekiz; on dört ekleyince altmış iki kalem olur." },
          { id: "c", text: "$52$", correct: false, hint: "$48 + 14$ toplamının onlar basamağında $4 + 1 + 1 = 6$ bulunur.", spokenHint: "Kırk sekiz ile on dördün toplamı altmış iki eder." },
          { id: "d", text: "$28$", correct: false, hint: "$8$ ile $6$'yı toplamak yerine çarpmalıyız.", spokenHint: "Sekiz ile altıyı toplamak yerine çarpmalıyız." }
        ],
        unsureMsg: "Eşit gruplama ve çarpma köprüsünü rotana ekledim.",
        spokenUnsure: "Eşit gruplama ve çarpma köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(96, "8 kutu 6şar kalem ve 14 kalem", `
          <rect x="28" y="22" width="128" height="52" rx="10" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.8"/>
          <text x="92" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">8 Kutu</text>
          <text x="92" y="63" text-anchor="middle" font-size="11.5" font-weight="600" fill="#334155">Her birinde 6 kalem</text>
          <text x="172" y="53" font-size="18" font-weight="900" fill="#0F172A">+</text>
          <rect x="190" y="22" width="102" height="52" rx="10" fill="#ECFDF5" stroke="#047857" stroke-width="1.8"/>
          <text x="241" y="53" text-anchor="middle" font-size="13" font-weight="800" fill="#065F46">14 kalem</text>
        `)
      },
      {
        id: "g3_q3",
        competency: "muhakeme",
        bridgeId: "bridge_count_10",
        prompt: "Bir **tek** sayı ile bir **çift** sayının toplamı her zaman nasıl bir sayıdır?",
        spokenPrompt: "Bir tek sayı ile bir çift sayının toplamı her zaman nasıl bir sayıdır?",
        options: [
          { id: "a", text: "Daima tek sayıdır", correct: true, okMsg: "Harika akıl yürütme! Çift sayının tüm nesneleri eşleşir; tek sayıdan kalan $1$ eşsiz nesne toplamı daima tek yapar.", spokenOk: "Harika akıl yürütme! Tek ile çiftin toplamı daima tek sayıdır." },
          { id: "b", text: "Daima çift sayıdır", correct: false, hint: "Küçük bir örnekle dene: $3 + 4 = 7$ tek midir çift midir?", spokenHint: "Üç artı dört örneğini düşün: yedi tek midir çift midir?" },
          { id: "c", text: "Bazen tek bazen çift olur", correct: false, hint: "Tek sayıdaki artan $1$ birim çift sayıdaki eşleşmeleri bozmaz, hep $1$ tek kalır.", spokenHint: "Tek sayıdaki artan bir birim her zaman yalnız kalır." },
          { id: "d", text: "Her zaman $0$ olur", correct: false, hint: "Pozitif iki doğal sayının toplamı sıfır olmaz.", spokenHint: "Pozitif iki doğal sayının toplamı sıfır olmaz." }
        ],
        unsureMsg: "Sayı ilişkileri ve örüntü köprüsünü rotana ekledim.",
        spokenUnsure: "Sayı ilişkileri ve örüntü köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(96, "Tek + Çift nokta eşleme modeli", `
          <rect x="26" y="20" width="110" height="56" rx="10" fill="#FFF7ED" stroke="#F97316" stroke-width="1.6"/>
          <text x="81" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="#9A3412">Tek (1 artar)</text>
          <circle cx="58" cy="58" r="5" fill="#F97316"/><circle cx="72" cy="58" r="5" fill="#F97316"/><circle cx="96" cy="58" r="5" fill="#DC2626"/>
          <text x="150" y="54" font-size="18" font-weight="900" fill="#0F172A">+</text>
          <rect x="166" y="20" width="126" height="56" rx="10" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.6"/>
          <text x="229" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="#1E40AF">Çift (tam eşli)</text>
          <circle cx="198" cy="58" r="5" fill="#1D4ED8"/><circle cx="212" cy="58" r="5" fill="#1D4ED8"/>
          <circle cx="240" cy="58" r="5" fill="#1D4ED8"/><circle cx="254" cy="58" r="5" fill="#1D4ED8"/>
        `)
      },
      {
        id: "g3_q4",
        competency: "muhakeme",
        bridgeId: "bridge_add_sub",
        prompt: "Azalan sayı örüntüsünde soru işareti ($?$) yerine hangi sayı gelmelidir?",
        spokenPrompt: "Doksan beş, seksen altı, yetmiş yedi, soru işareti, elli dokuz azalan sayı örüntüsünde soru işareti yerine hangi sayı gelmelidir?",
        options: [
          { id: "a", text: "$67$", correct: false, hint: "$95 - 86 = 9$ olduğundan örüntü $9$'ar azalıyor; $77 - 9$ kaç eder?", spokenHint: "Örüntü dokuzar azalıyor; yetmiş yediden dokuz çıkaralım." },
          { id: "b", text: "$68$", correct: true, okMsg: "Doğru! Her adımda $9$ azalıyor: $77 - 9 = 68$ ve $68 - 9 = 59$.", spokenOk: "Doğru! Her adımda dokuz azaldığı için yetmiş yedi eksi dokuz eşittir altmış sekiz." },
          { id: "c", text: "$69$", correct: false, hint: "$77 - 8 = 69$ olur; oysa aradaki fark $9$'dur.", spokenHint: "Aradaki fark sekiz değil dokuzdur." },
          { id: "d", text: "$66$", correct: false, hint: "$66 - 9 = 57$ olurdu; son terim $59$'dur.", spokenHint: "Altmış altıdan dokuz çıkınca elli dokuz kalmaz." }
        ],
        unsureMsg: "Sayı doğrusunda geriye sayma köprüsünü rotana ekledim.",
        spokenUnsure: "Sayı doğrusunda geriye sayma köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(92, "95, 86, 77, ?, 59 azalan örüntü", `
          ${[95, 86, 77, "?", 59].map((v, i) => `
            <rect x="${24 + i * 56}" y="26" width="46" height="40" rx="10" fill="${v === "?" ? "#ECFDF5" : "#FFFFFF"}" stroke="${v === "?" ? "#047857" : "#CBD5E1"}" stroke-width="1.8"/>
            <text x="${47 + i * 56}" y="51" text-anchor="middle" font-size="14.5" font-weight="800" fill="${v === "?" ? "#047857" : "#0F172A"}">${v}</text>
          `).join("")}
        `)
      },
      {
        id: "g3_q5",
        competency: "modelleme",
        bridgeId: "bridge_frac_meas",
        prompt: "Şekilde $8$ eş parçaya bölünmüş bütünün boyalı kısmını gösteren kesir hangisidir?",
        spokenPrompt: "Şekilde sekiz eş parçaya bölünmüş bütünün boyalı kısmını gösteren kesir hangisidir?",
        options: [
          { id: "a", text: "$\\frac{3}{8}$", correct: true, okMsg: "Doğru! Payda toplam eş parça sayısı ($8$), pay ise boyalı parça sayısıdır ($3$).", spokenOk: "Doğru! Toplam sekiz parçadan üçü boyalı olduğu için kesir sekizde üçtür." },
          { id: "b", text: "$\\frac{3}{5}$", correct: false, hint: "Paydaya boyanmayan parça sayısını ($5$) değil, bütünün **toplam** parça sayısını ($8$) yazarız.", spokenHint: "Paydaya boyanmayanları değil bütünün toplam parça sayısını yazarız." },
          { id: "c", text: "$\\frac{5}{8}$", correct: false, hint: "$\\frac{5}{8}$ boyasız parçaları gösterir; soruda **boyalı** kısım isteniyor.", spokenHint: "Sekizde beş boyasız kısmı gösterir; boyalı kısım soruluyor." },
          { id: "d", text: "$\\frac{8}{3}$", correct: false, hint: "Boyalı parça sayısı ($3$) üste yani paya, toplam parça sayısı ($8$) alta yani paydaya yazılır.", spokenHint: "Boyalı parça sayısı paya, toplam parça sayısı paydaya yazılır." }
        ],
        unsureMsg: "Birim kesir ve parça-bütün köprüsünü rotana ekledim.",
        spokenUnsure: "Birim kesir ve parça-bütün köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(92, "8 eş parçadan 3ü boyalı kesir şeridi", `
          ${Array.from({ length: 8 }, (_, i) =>
            `<rect x="${32 + i * 32}" y="28" width="30" height="36" rx="4" fill="${i < 3 ? "#2563EB" : "#FFFFFF"}" stroke="#1E40AF" stroke-width="1.6"/>`
          ).join("")}
        `)
      },
      {
        id: "g3_q6",
        competency: "modelleme",
        bridgeId: "bridge_shapes_sym",
        prompt: "Kenar uzunlukları $9\\text{ cm}$ ve $4\\text{ cm}$ olan dikdörtgenin çevre uzunluğu kaç $\\text{cm}$'dir?",
        spokenPrompt: "Kenar uzunlukları dokuz santimetre ve dört santimetre olan dikdörtgenin çevre uzunluğu kaç santimetredir?",
        options: [
          { id: "a", text: "$13\\text{ cm}$", correct: false, hint: "$9 + 4 = 13\\text{ cm}$ yalnızca $2$ kenardır; dikdörtgenin $4$ kenarını toplamalıyız.", spokenHint: "Dokuz artı dört yalnızca iki kenardır; dört kenarı da toplamalıyız." },
          { id: "b", text: "$26\\text{ cm}$", correct: true, okMsg: "Harika! $9 + 4 + 9 + 4 = 26\\text{ cm}$.", spokenOk: "Harika! Tüm kenarların toplamı yirmi altı santimetredir." },
          { id: "c", text: "$36\\text{ cm}$", correct: false, hint: "$9 \\times 4 = 36$ alanı verir; çevre uzunlukların toplamıdır.", spokenHint: "Dokuz çarpı dört alanı verir; çevre kenarların toplamıdır." },
          { id: "d", text: "$22\\text{ cm}$", correct: false, hint: "$2 \\times (9 + 4) = 2 \\times 13 = 26\\text{ cm}$ olur.", spokenHint: "İki çarpı on üç işlemini kontrol edelim." }
        ],
        unsureMsg: "Çokgen çevresi köprüsünü rotana ekledim.",
        spokenUnsure: "Çokgen çevresi köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "9 cm ve 4 cm dikdörtgen", `
          <rect x="74" y="24" width="166" height="58" rx="4" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2.2"/>
          <text x="157" y="18" text-anchor="middle" font-size="12" font-weight="800" fill="#1E40AF">9 cm</text>
          <text x="258" y="57" font-size="12" font-weight="800" fill="#1E40AF">4 cm</text>
          <text x="157" y="57" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0F172A">Çevre = ?</text>
        `)
      }
    ],

    // ------------------------------------------------------------------------
    // 4. SINIF (MEB 4. Sınıf Programı • 2018 Müfredatı)
    // ------------------------------------------------------------------------
    "4": [
      {
        id: "g4_q1",
        competency: "islem",
        bridgeId: "bridge_place_mul",
        prompt: "Kalansız bölme işleminin sonucu kaçtır? $$324 \\div 6$$",
        spokenPrompt: "Üç yüz yirmi dört bölü altı işleminin sonucu kaçtır?",
        options: [
          { id: "a", text: "$54$", correct: true, okMsg: "Doğru! $32$ içinde $6$, $5$ kere ($30$); kalan $24$'te $6$, $4$ kere vardır: $54$.", spokenOk: "Doğru! Üç yüz yirmi dört bölü altı eşittir elli dörttür." },
          { id: "b", text: "$52$", correct: false, hint: "$6 \\times 52 = 312$ olur; kalan $24$'ü $6$'ya böldüğümüzde $4$ çıkar.", spokenHint: "Altı çarpı elli iki üç yüz on iki eder; yirmi dört bölü altı dörttür." },
          { id: "c", text: "$64$", correct: false, hint: "$6 \\times 60 = 360$ olduğu için bölüm $60$'tan küçük olmalıdır.", spokenHint: "Altı çarpı altmış üç yüz altmış olduğundan sonuç altmıştan küçük olmalıdır." },
          { id: "d", text: "$44$", correct: false, hint: "$32$'nin içinde $6$ sayısı $5$ defa vardır.", spokenHint: "Otuz ikinin içinde altı beş defa vardır." }
        ],
        unsureMsg: "Basamak ve bölme köprüsünü rotana ekledim.",
        spokenUnsure: "Basamak ve bölme köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(96, "324 bölü 6 bölme şeması", `
          <rect x="84" y="18" width="152" height="60" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.6"/>
          <text x="122" y="48" text-anchor="middle" font-size="17" font-weight="800" fill="#0F172A">324</text>
          <line x1="158" y1="26" x2="158" y2="70" stroke="#0F172A" stroke-width="2"/>
          <line x1="158" y1="48" x2="218" y2="48" stroke="#0F172A" stroke-width="2"/>
          <text x="188" y="42" text-anchor="middle" font-size="16" font-weight="800" fill="#1D4ED8">6</text>
          <text x="188" y="67" text-anchor="middle" font-size="16" font-weight="900" fill="#047857">?</text>
        `)
      },
      {
        id: "g4_q2",
        competency: "islem",
        bridgeId: "bridge_frac_meas",
        prompt: "Paydaları eşit kesirlerle verilen işlemin sonucu kaçtır? $$\\frac{7}{9} - \\frac{2}{9} + \\frac{1}{9}$$",
        spokenPrompt: "Dokuzda yedi eksi dokuzda iki artı dokuzda bir işleminin sonucu kaçtır?",
        options: [
          { id: "a", text: "$\\frac{6}{9}$", correct: true, okMsg: "Mükemmel! Payda değişmez: $(7 - 2 + 1) = 6$ olduğu için sonuç $\\frac{6}{9}$'dur.", spokenOk: "Mükemmel! Payları hesaplayınca sonuç dokuzda altı olur." },
          { id: "b", text: "$\\frac{4}{9}$", correct: false, hint: "$7 - 2 = 5$ bulduktan sonra $\\frac{1}{9}$'i çıkarmak yerine eklemeliyiz.", spokenHint: "Beşten bir çıkarmak yerine beş ile biri toplamalıyız." },
          { id: "c", text: "$\\frac{6}{27}$", correct: false, hint: "Kesirlerde toplama ve çıkarma yaparken ortak payda ($9$) toplanmaz, aynen kalır.", spokenHint: "Kesirlerde toplama ve çıkarmada paydalar toplanmaz, aynen kalır." },
          { id: "d", text: "$\\frac{10}{9}$", correct: false, hint: "İlk işlem çıkarma ($7 - 2$), ikinci işlem toplama ($+1$)'dir.", spokenHint: "İlk işlem çıkarma, ikinci işlem toplamadır." }
        ],
        unsureMsg: "Birim kesir ve kesir şeridi köprüsünü rotana ekledim.",
        spokenUnsure: "Birim kesir ve kesir şeridi köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(92, "9 eş parçalı kesir şeridi", `
          ${Array.from({ length: 9 }, (_, i) =>
            `<rect x="${25 + i * 30}" y="22" width="28" height="30" rx="4" fill="${i < 7 ? "#3B82F6" : "#FFFFFF"}" stroke="#1E40AF" stroke-width="1.5"/>`
          ).join("")}
          <text x="160" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">7/9 ile başla → 2/9 çıkar → 1/9 ekle = ?/9</text>
        `)
      },
      {
        id: "g4_q3",
        competency: "muhakeme",
        bridgeId: "bridge_place_mul",
        prompt: "Rakamları birbirinden **farklı**, dört basamaklı **en küçük tek** doğal sayı kaçtır?",
        spokenPrompt: "Rakamları birbirinden farklı, dört basamaklı en küçük tek doğal sayı kaçtır?",
        options: [
          { id: "a", text: "$1023$", correct: true, okMsg: "Kusursuz! Binler basamağı en küçük $1$, yüzler $0$, onlar $2$ ve tek olması için birler $3$ seçilir: $1023$.", spokenOk: "Kusursuz! Doğru sayı bin yirmi üçtür." },
          { id: "b", text: "$1024$", correct: false, hint: "$1024$ çift bir sayıdır; soruda **tek** sayı istenmektedir.", spokenHint: "Bin yirmi dört çift bir sayıdır; soruda tek sayı isteniyor." },
          { id: "c", text: "$1235$", correct: false, hint: "Yüzler basamağında $0$ rakamını kullanarak daha küçük bir sayı yazabiliriz.", spokenHint: "Yüzler basamağında sıfır rakamını kullanabiliriz." },
          { id: "d", text: "$1001$", correct: false, hint: "Rakamların birbirinden **farklı** olması gerekiyor.", spokenHint: "Rakamların birbirinden farklı olması gerekiyor." }
        ],
        unsureMsg: "Basamak değeri yerleştirme köprüsünü yoluna ekledim.",
        spokenUnsure: "Basamak değeri yerleştirme köprüsünü yoluna ekledim.",
        renderSvg: () => svgFrame(92, "Dört basamaklı sayı kutuları", `
          ${["Binler", "Yüzler", "Onlar", "Birler"].map((lbl, i) => `
            <rect x="${36 + i * 64}" y="18" width="54" height="44" rx="8" fill="#FFFFFF" stroke="${i === 3 ? "#047857" : "#1D4ED8"}" stroke-width="1.8"/>
            <text x="${63 + i * 64}" y="46" text-anchor="middle" font-size="16" font-weight="900" fill="#0F172A">?</text>
            <text x="${63 + i * 64}" y="78" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569">${lbl}</text>
          `).join("")}
        `)
      },
      {
        id: "g4_q4",
        competency: "muhakeme",
        bridgeId: "bridge_time_data",
        prompt: "$3\\text{ kg}$ unun önce $1200\\text{ g}$'ı kullanılıyor, sonra kaba $450\\text{ g}$ daha ekleniyor. Kapta kaç gram un olur?",
        spokenPrompt: "Üç kilogram unun önce bin iki yüz gramı kullanılıyor, sonra kaba dört yüz elli gram daha ekleniyor. Kapta kaç gram un olur?",
        options: [
          { id: "a", text: "$2250\\text{ g}$", correct: true, okMsg: "Doğru! $3000 - 1200 = 1800\\text{ g}$; $1800 + 450 = 2250\\text{ g}$.", spokenOk: "Doğru! Üç bin gramdan bin iki yüz çıkınca bin sekiz yüz kalır; dört yüz elli ekleyince iki bin iki yüz elli gram olur." },
          { id: "b", text: "$1800\\text{ g}$", correct: false, hint: "Sonradan eklenen $450\\text{ g}$ unu da toplama katmalıyız.", spokenHint: "Sonradan eklenen dört yüz elli gram unu da eklemeliyiz." },
          { id: "c", text: "$1350\\text{ g}$", correct: false, hint: "$450\\text{ g}$ harcanmıyor, kaba yeniden **ekleniyor**.", spokenHint: "Dört yüz elli gram harcanmıyor, kaba ekleniyor." },
          { id: "d", text: "$2350\\text{ g}$", correct: false, hint: "$3000 - 1200 = 1800$ ve $1800 + 450 = 2250$ işlemini kontrol edelim.", spokenHint: "Toplama adımını tekrar kontrol edelim." }
        ],
        unsureMsg: "Kütle birimleri dönüşüm köprüsünü rotana ekledim.",
        spokenUnsure: "Kütle birimleri dönüşüm köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(92, "3 kg un değişim akışı", `
          <rect x="20" y="24" width="76" height="44" rx="8" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="1.6"/>
          <text x="58" y="51" text-anchor="middle" font-size="13" font-weight="800" fill="#1E40AF">3 kg un</text>
          <text x="128" y="42" text-anchor="middle" font-size="11.5" font-weight="800" fill="#DC2626">-1200 g</text>
          <text x="128" y="58" text-anchor="middle" font-size="11.5" font-weight="800" fill="#047857">+450 g</text>
          <rect x="166" y="24" width="134" height="44" rx="8" fill="#ECFDF5" stroke="#047857" stroke-width="1.6"/>
          <text x="233" y="51" text-anchor="middle" font-size="13" font-weight="800" fill="#065F46">Sonuç = ? g</text>
        `)
      },
      {
        id: "g4_q5",
        competency: "modelleme",
        bridgeId: "bridge_shapes_sym",
        prompt: "Şekilde ölçüsü $125^\\circ$ olarak verilen $\\widehat{ABC}$ açısının çeşidi aşağıdakilerden hangisidir?",
        spokenPrompt: "Şekilde ölçüsü yüz yirmi beş derece olarak verilen A B C açısının çeşidi aşağıdakilerden hangisidir?",
        options: [
          { id: "a", text: "Dar açı", correct: false, hint: "Dar açılar $90^\\circ$'den küçüktür; $125^\\circ$ ise $90^\\circ$'den büyüktür.", spokenHint: "Dar açılar doksan dereceden küçüktür." },
          { id: "b", text: "Dik açı", correct: false, hint: "Dik açı tam olarak $90^\\circ$ ölçüsündedir.", spokenHint: "Dik açı tam olarak doksan derecedir." },
          { id: "c", text: "Geniş açı", correct: true, okMsg: "Tam doğru! $90^\\circ \\lt 125^\\circ \\lt 180^\\circ$ olduğu için geniş açıdır.", spokenOk: "Tam doğru! Doksan ile yüz seksen derece arasındaki açılar geniş açıdır." },
          { id: "d", text: "Doğru açı", correct: false, hint: "Doğru açı tam olarak $180^\\circ$'dir.", spokenHint: "Doğru açı tam olarak yüz seksen derecedir." }
        ],
        unsureMsg: "Açı çeşitleri ve geometri köprüsünü rotana ekledim.",
        spokenUnsure: "Açı çeşitleri ve geometri köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(108, "125 derecelik ABC açısı", `
          <line x1="144" y1="78" x2="256" y2="78" stroke="#0F172A" stroke-width="2.8" stroke-linecap="round"/>
          <line x1="144" y1="78" x2="96" y2="26" stroke="#1D4ED8" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M174 78 A30 30 0 0 0 124 56" fill="none" stroke="#10B981" stroke-width="2.5"/>
          <text x="155" y="48" font-size="13" font-weight="800" fill="#047857">125°</text>
          <text x="86" y="24" font-size="11.5" font-weight="800" fill="#0F172A">A</text>
          <text x="140" y="94" font-size="11.5" font-weight="800" fill="#0F172A">B</text>
          <text x="262" y="82" font-size="11.5" font-weight="800" fill="#0F172A">C</text>
        `)
      },
      {
        id: "g4_q6",
        competency: "modelleme",
        bridgeId: "bridge_time_data",
        prompt: "Sütun grafiğinde dört öğrencinin bir ayda okuduğu kitap sayıları verilmiştir. En çok kitap okuyan öğrenci, en az kitap okuyandan kaç kitap fazla okumuştur?",
        spokenPrompt: "Sütun grafiğinde Ali on iki, Ece on sekiz, Can dokuz ve Ela on beş kitap okumuştur. En çok kitap okuyan öğrenci, en az kitap okuyandan kaç kitap fazla okumuştur?",
        options: [
          { id: "a", text: "$6$", correct: false, hint: "$18 - 12 = 6$ olur ancak en az kitap okuyan Can ($9$) vardır.", spokenHint: "En az kitap okuyan öğrenci dokuz kitapla Can'dır." },
          { id: "b", text: "$9$", correct: true, okMsg: "Doğru okuma! En çok Ece ($18$), en az Can ($9$); aradaki fark $18 - 9 = 9$ kitaptır.", spokenOk: "Doğru okuma! On sekizden dokuz çıkarınca dokuz kitap bulunur." },
          { id: "c", text: "$3$", correct: false, hint: "$3$ en yüksek iki sütun ($18$ ile $15$) arasındaki farktır.", spokenHint: "Üç en yüksek iki sütun arasındaki farktır." },
          { id: "d", text: "$27$", correct: false, hint: "Toplamları değil, en çok ile en az arasındaki farkı bulmalıyız.", spokenHint: "Toplamları değil aradaki farkı bulmalıyız." }
        ],
        unsureMsg: "Grafik ve veri okuma köprüsünü rotana ekledim.",
        spokenUnsure: "Grafik ve veri okuma köprüsünü rotana ekledim.",
        renderSvg: () => svgFrame(116, "Okunan kitap sayıları sütun grafiği", `
          <line x1="56" y1="86" x2="276" y2="86" stroke="#475569" stroke-width="2"/>
          ${[
            { n: "Ali", v: 12, c: "#3B82F6" },
            { n: "Ece", v: 18, c: "#10B981" },
            { n: "Can", v: 9, c: "#F59E0B" },
            { n: "Ela", v: 15, c: "#6366F1" }
          ].map((b, i) => {
            const h = b.v * 3.1;
            const x = 76 + i * 50;
            return `<rect x="${x}" y="${86 - h}" width="28" height="${h}" rx="4" fill="${b.c}"/>`
              + `<text x="${x + 14}" y="${81 - h}" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">${b.v}</text>`
              + `<text x="${x + 14}" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">${b.n}</text>`;
          }).join("")}
        `)
      }
    ]
,
    "5": [
      {
        id: "g5_q1",
        competency: "islem",
        bridgeId: "bridge_place_mul",
        prompt: "Bir kütüphanede $24$ raf ve her rafta $35$ kitap vardır. Toplam kitap sayısı kaçtır?",
        spokenPrompt: "Bir kütüphanede 24 raf ve her rafta 35 kitap vardır. Toplam kitap sayısı kaçtır?",
        options: [
          { id: "a", text: "$740$", correct: false, hint: "Onlar basamağından gelen $20 \\times 35$ değerini de eksiksiz ekle.", spokenHint: "Onlar basamağından gelen 20 çarpı 35 değerini de eksiksiz ekle." },
          { id: "b", text: "$840$", correct: true, okMsg: "Doğru! $24 \\times 30 = 720$ ve $24 \\times 5 = 120$, toplam $840$ kitap.", spokenOk: "Doğru! 24 çarpı 30 eşittir 720, 24 çarpı 5 eşittir 120, toplam 840 kitap." },
          { id: "c", text: "$820$", correct: false, hint: "Birlik basamaktaki $4 \\times 5 = 20$ eldesini kontrol et.", spokenHint: "Birlik basamaktaki 4 çarpı 5 eşittir 20 eldesini kontrol et." },
          { id: "d", text: "$780$", correct: false, hint: "$35$'i $30 + 5$ diye ayırıp iki parçayı $24$ ile çarp.", spokenHint: "35 sayısını 30 artı 5 diye ayırıp her iki parçayı 24 ile çarp." }
        ],
        unsureMsg: "Sayıyı $30 + 5$ diye parçalayıp dağılma özelliğini kullanabiliriz.",
        spokenUnsure: "Sayıyı 30 artı 5 diye parçalayıp çarpmanın dağılma özelliğini kullanabiliriz.",
        renderSvg: () => svgFrame(112, "24 rafta 35'er kitap modeli", `
          <rect x="26" y="18" width="112" height="78" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <line x1="26" y1="42" x2="138" y2="42" stroke="#93C5FD" stroke-width="2"/>
          <line x1="26" y1="68" x2="138" y2="68" stroke="#93C5FD" stroke-width="2"/>
          <rect x="36" y="24" width="14" height="14" rx="2" fill="#2563EB"/><rect x="54" y="24" width="14" height="14" rx="2" fill="#60A5FA"/><rect x="72" y="24" width="14" height="14" rx="2" fill="#2563EB"/>
          <text x="110" y="35" text-anchor="middle" font-size="11" font-weight="800" fill="#1E40AF">35 kitap</text>
          <text x="82" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#1E40AF">...</text>
          <text x="82" y="85" text-anchor="middle" font-size="11" font-weight="800" fill="#1D4ED8">Toplam 24 raf</text>
          <path d="M148 56 L186 56" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
          <polygon points="184,50 196,56 184,62" fill="#F59E0B"/>
          <rect x="206" y="28" width="88" height="56" rx="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="250" y="51" text-anchor="middle" font-size="11" font-weight="800" fill="#92400E">Toplam Kitap</text>
          <text x="250" y="71" text-anchor="middle" font-size="15" font-weight="900" fill="#B45309">?</text>
        `)
      },
      {
        id: "g5_q2",
        competency: "islem",
        bridgeId: "bridge_frac_meas",
        prompt: "Bir yolun $\\frac{2}{3}$'ü asfalt, $\\frac{1}{6}$'sı parke taşlıdır. Bu iki kısım yolun toplam kaçta kaçını oluşturur?",
        spokenPrompt: "Bir yolun üçte ikisi asfalt, altıda biri parke taşlıdır. Bu iki kısım yolun toplam kaçta kaçını oluşturur?",
        options: [
          { id: "a", text: "$\\frac{3}{9}$", correct: false, hint: "Kesirleri toplarken paydalar doğrudan toplanmaz; önce payda eşitlenir.", spokenHint: "Kesirleri toplarken paydalar doğrudan toplanmaz, önce payda eşitlenir." },
          { id: "b", text: "$\\frac{5}{6}$", correct: true, okMsg: "Harika! $\\frac{2}{3}$'ü $2$ ile genişletirsek $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$ olur.", spokenOk: "Harika! Üçte iki kesrini 2 ile genişletirsek altıda dört artı altıda bir eşittir altıda beş olur." },
          { id: "c", text: "$\\frac{1}{2}$", correct: false, hint: "İki kesri toplamalıyız; $\\frac{2}{3}$ zaten yarımdan büyüktür.", spokenHint: "İki kesri toplamalıyız; üçte iki zaten yarımdan büyüktür." },
          { id: "d", text: "$\\frac{3}{6}$", correct: false, hint: "$\\frac{2}{3}$ kesrinin payını da $2$ ile çarpmayı unutma.", spokenHint: "Üçte iki kesrini genişletirken payını da 2 ile çarpmayı unutma." }
        ],
        unsureMsg: "Paydaları $6$'da eşitlemek için $\\frac{2}{3}$'ü $2$ ile genişletebiliriz.",
        spokenUnsure: "Paydaları 6'da eşitlemek için üçte iki kesrini 2 ile genişletebiliriz.",
        renderSvg: () => svgFrame(104, "Yolun 2/3 asfalt ve 1/6 parke kısmı", `
          <rect x="24" y="28" width="272" height="32" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="2"/>
          <rect x="24" y="28" width="181" height="32" rx="6" fill="#3B82F6"/>
          <rect x="205" y="28" width="46" height="32" fill="#F59E0B"/>
          <text x="114" y="49" text-anchor="middle" font-size="12" font-weight="900" fill="#FFFFFF">Asfalt: 2/3</text>
          <text x="228" y="49" text-anchor="middle" font-size="11" font-weight="900" fill="#FFFFFF">1/6</text>
          <text x="273" y="49" text-anchor="middle" font-size="11" font-weight="800" fill="#64748B">?</text>
          <path d="M24 72 L24 80 L251 80 L251 72" fill="none" stroke="#0F172A" stroke-width="2"/>
          <text x="137" y="96" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">Toplam asfalt + parke = ?</text>
        `)
      },
      {
        id: "g5_q3",
        competency: "muhakeme",
        bridgeId: "bridge_time_data",
        prompt: "Bir torbada $5$ kırmızı, $3$ sarı ve $2$ mavi top vardır. Rastgele seçilen bir topun **mavi olmama** durumuyla ilgili hangisi doğrudur?",
        spokenPrompt: "Bir torbada 5 kırmızı, 3 sarı ve 2 mavi top vardır. Rastgele seçilen bir topun mavi olmama durumuyla ilgili hangisi doğrudur?",
        options: [
          { id: "a", text: "Mavi top seçilmesi kesindir.", correct: false, hint: "Torbada kırmızı ve sarı toplar da olduğu için mavi gelmesi kesin değildir.", spokenHint: "Torbada kırmızı ve sarı toplar da olduğu için mavi gelmesi kesin değildir." },
          { id: "b", text: "Mavi olmaması, mavi olmasından daha olasıdır.", correct: true, okMsg: "Çok iyi! Mavi olmayan $5+3=8$ top var; mavi ise $2$ top, bu yüzden mavi olmaması çok daha olasıdır.", spokenOk: "Çok iyi! Mavi olmayan 8 top var, mavi ise 2 top; bu yüzden mavi olmaması daha olasıdır." },
          { id: "c", text: "Mavi olmaması imkânsızdır.", correct: false, hint: "Kırmızı veya sarı top çekilirse mavi olmamış olur; yani mümkündür.", spokenHint: "Kırmızı veya sarı top çekilirse mavi olmamış olur; yani imkânsız değildir." },
          { id: "d", text: "Mavi ve sarı olma olasılıkları eşittir.", correct: false, hint: "Torbada $3$ sarı ve $2$ mavi top var; sayıları eşit değil.", spokenHint: "Torbada 3 sarı ve 2 mavi top var; sayıları eşit değil." }
        ],
        unsureMsg: "Mavi topların sayısı ile mavi olmayan (kırmızı + sarı) topların sayısını karşılaştır.",
        spokenUnsure: "Mavi topların sayısı ile mavi olmayan topların sayısını karşılaştır.",
        renderSvg: () => svgFrame(112, "5 kırmızı, 3 sarı, 2 mavi top torbası", `
          <rect x="24" y="16" width="128" height="82" rx="14" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/>
          <circle cx="48" cy="38" r="8" fill="#EF4444"/><circle cx="68" cy="38" r="8" fill="#EF4444"/><circle cx="88" cy="38" r="8" fill="#EF4444"/><circle cx="108" cy="38" r="8" fill="#EF4444"/><circle cx="128" cy="38" r="8" fill="#EF4444"/>
          <circle cx="52" cy="62" r="8" fill="#F59E0B"/><circle cx="74" cy="62" r="8" fill="#F59E0B"/><circle cx="96" cy="62" r="8" fill="#F59E0B"/>
          <circle cx="62" cy="84" r="8" fill="#3B82F6"/><circle cx="88" cy="84" r="8" fill="#3B82F6"/>
          <line x1="168" y1="54" x2="298" y2="54" stroke="#CBD5E1" stroke-width="6" stroke-linecap="round"/>
          <circle cx="170" cy="54" r="6" fill="#EF4444"/>
          <circle cx="233" cy="54" r="6" fill="#F59E0B"/>
          <circle cx="296" cy="54" r="6" fill="#10B981"/>
          <text x="170" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#B91C1C">İmkânsız (0)</text>
          <text x="233" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#B45309">Eşit (1/2)</text>
          <text x="296" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#047857">Kesin (1)</text>
          <text x="233" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#1E293B">Olay: Mavi top OLMAMASI</text>
        `)
      },
      {
        id: "g5_q4",
        competency: "muhakeme",
        bridgeId: "bridge_triangle",
        prompt: "Doğrusal $A, O, B$ noktalarında $m(\\widehat{BOC})=90^\\circ$ ve $m(\\widehat{AOD})=38^\\circ$ olduğuna göre $m(\\widehat{DOC})$ kaç derecedir?",
        spokenPrompt: "Doğrusal A, O, B noktalarında B O C açısı 90 derece ve A O D açısı 38 derece olduğuna göre D O C açısı kaç derecedir?",
        options: [
          { id: "a", text: "$42^\\circ$", correct: false, hint: "$90^\\circ$'den $38^\\circ$ çıkarırken onluk bozmayı dikkatli yap.", spokenHint: "90 dereceden 38 derece çıkarırken onluk bozmayı dikkatli yap." },
          { id: "b", text: "$52^\\circ$", correct: true, okMsg: "Harika! Doğru açı $180^\\circ$'dir. Sağda $90^\\circ$ olduğuna göre $\\widehat{AOC} = 90^\\circ$, buradan $90^\\circ - 38^\\circ = 52^\\circ$.", spokenOk: "Harika! Doğru açı 180 derecedir. A O C açısı 90 derece olduğuna göre 90 eksi 38 eşittir 52 derece olur." },
          { id: "c", text: "$62^\\circ$", correct: false, hint: "$62 + 38 = 100$ yapar; tümler açıların toplamı $90^\\circ$ olmalıdır.", spokenHint: "62 artı 38 yüz yapar; oysa bu iki açının toplamı 90 derece olmalıdır." },
          { id: "d", text: "$142^\\circ$", correct: false, hint: "Sağ taraftaki $90^\\circ$'lik dik açıyı da dikkate almalısın.", spokenHint: "Sağ taraftaki 90 derecelik dik açıyı da toplamdan çıkarmalısın." }
        ],
        unsureMsg: "Bir doğru açının ölçüsü $180^\\circ$'dir; dik açı $90^\\circ$ ayrıldığına göre kalan kısım da $90^\\circ$ olur.",
        spokenUnsure: "Bir doğru açının ölçüsü 180 derecedir; dik açı 90 derece ayrıldığına göre kalan kısım da 90 derece olur.",
        renderSvg: () => svgFrame(116, "Doğru açı üzerinde dik açı ve 38 derecelik açı", `
          <line x1="34" y1="94" x2="286" y2="94" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="160" y1="94" x2="160" y2="18" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="160" y1="94" x2="94" y2="42" stroke="#D97706" stroke-width="2.5"/>
          <rect x="160" y="80" width="14" height="14" fill="none" stroke="#2563EB" stroke-width="2"/>
          <path d="M126 94 A 34 34 0 0 1 133 73" fill="none" stroke="#D97706" stroke-width="2.5"/>
          <path d="M138 77 A 28 28 0 0 1 160 66" fill="none" stroke="#10B981" stroke-width="2.5" stroke-dasharray="3 2"/>
          <text x="42" y="88" font-size="12" font-weight="800" fill="#0F172A">A</text>
          <text x="155" y="109" font-size="12" font-weight="800" fill="#0F172A">O</text>
          <text x="274" y="88" font-size="12" font-weight="800" fill="#0F172A">B</text>
          <text x="166" y="24" font-size="12" font-weight="800" fill="#2563EB">C</text>
          <text x="84" y="38" font-size="12" font-weight="800" fill="#D97706">D</text>
          <text x="108" y="84" font-size="11" font-weight="800" fill="#B45309">38°</text>
          <text x="144" y="61" font-size="12" font-weight="900" fill="#059669">?</text>
          <text x="192" y="78" font-size="11" font-weight="800" fill="#2563EB">90°</text>
        `)
      },
      {
        id: "g5_q5",
        competency: "modelleme",
        bridgeId: "bridge_frac_meas",
        prompt: "Kısa kenarı $8\\text{ m}$ ve çevresi $42\\text{ m}$ olan dikdörtgen bahçenin alanı kaç $\\text{m}^2$'dir?",
        spokenPrompt: "Kısa kenarı 8 metre ve çevresi 42 metre olan dikdörtgen bahçenin alanı kaç metrekaredir?",
        options: [
          { id: "a", text: "$96\\text{ m}^2$", correct: false, hint: "İki kısa kenarın toplamı $16\\text{ m}$'dir; $42 - 16$ sonucunu $2$'ye bölmeyi unutma.", spokenHint: "İki kısa kenarın toplamı 16 metredir; 42 eksi 16 sonucunu 2'ye bölmelisin." },
          { id: "b", text: "$104\\text{ m}^2$", correct: true, okMsg: "Süper! Uzun kenar $\\frac{42}{2} - 8 = 13\\text{ m}$, alan ise $8 \\times 13 = 104\\text{ m}^2$.", spokenOk: "Süper! Uzun kenar 13 metre, alan ise 8 çarpı 13 eşittir 104 metrekare." },
          { id: "c", text: "$112\\text{ m}^2$", correct: false, hint: "Uzun kenarı bulmak için $42$'nin yarısı olan $21$'den $8$'i çıkarmalısın.", spokenHint: "Uzun kenarı bulmak için 42'nin yarısı olan 21'den 8'i çıkarmalısın." },
          { id: "d", text: "$128\\text{ m}^2$", correct: false, hint: "Dikdörtgende iki kısa, iki uzun kenar vardır.", spokenHint: "Dikdörtgende iki kısa, iki uzun kenar vardır." }
        ],
        unsureMsg: "Çevrenin yarısı $1$ kısa kenar ile $1$ uzun kenarın toplamına eşittir.",
        spokenUnsure: "Çevrenin yarısı 1 kısa kenar ile 1 uzun kenarın toplamına eşittir.",
        renderSvg: () => svgFrame(112, "Kısa kenarı 8 m, çevresi 42 m olan dikdörtgen bahçe", `
          <rect x="64" y="20" width="192" height="62" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
          <text x="50" y="55" text-anchor="end" font-size="12" font-weight="800" fill="#15803D">8 m</text>
          <text x="160" y="55" text-anchor="middle" font-size="13" font-weight="900" fill="#166534">Alan = ? m²</text>
          <text x="160" y="99" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">Uzun kenar: ?   |   Çevre = 42 m</text>
        `)
      },
      {
        id: "g5_q6",
        competency: "modelleme",
        bridgeId: "bridge_factors",
        prompt: "Ece, $48\\text{ cm}$ uzunluğundaki kurdeleyi hiç artmayacak biçimde eşit tam sayı parçalara kesecektir. Her parça $5\\text{ cm}$'den uzun ve $15\\text{ cm}$'den kısa olacağına göre **kaç farklı** parça uzunluğu seçebilir?",
        spokenPrompt: "Ece, 48 santimetre uzunluğundaki kurdeleyi hiç artmayacak biçimde eşit tam sayı parçalara kesecektir. Her parça 5 santimetreden uzun ve 15 santimetreden kısa olacağına göre kaç farklı parça uzunluğu seçebilir?",
        options: [
          { id: "a", text: "$2$", correct: false, hint: "$48$'in $5$ ile $15$ arasındaki tüm bölenlerini sırayla dene: $6, 8, \\dots$", spokenHint: "48'in 5 ile 15 arasındaki tüm bölenlerini sırayla dene." },
          { id: "b", text: "$3$", correct: true, okMsg: "Mükemmel! $48$'i tam bölen ve $5 \\lt p \\lt 15$ koşulunu sağlayan uzunluklar $6, 8$ ve $12$'dir; yani $3$ farklı seçenek.", spokenOk: "Mükemmel! 48'i tam bölen ve 5 ile 15 arasında olan uzunluklar 6, 8 ve 12'dir; yani 3 farklı seçenek." },
          { id: "c", text: "$4$", correct: false, hint: "$4$ sayısı $5$'ten uzun değil, $16$ ise $15$'ten kısa değildir.", spokenHint: "4 sayısı 5'ten küçük, 16 ise 15'ten büyüktür; aralık dışındalar." },
          { id: "d", text: "$6$", correct: false, hint: "Yalnızca $5$'ten büyük ve $15$'ten küçük bölenleri saymalısın.", spokenHint: "Yalnızca 5'ten büyük ve 15'ten küçük bölenleri saymalısın." }
        ],
        unsureMsg: "Hiç artmaması için parça uzunluğunun $48$'i tam bölmesi gerekir.",
        spokenUnsure: "Hiç artmaması için parça uzunluğunun 48'i tam bölmesi gerekir.",
        renderSvg: () => svgFrame(106, "48 cm kurdelenin eşit parçalara kesimi", `
          <rect x="28" y="34" width="264" height="22" rx="6" fill="#FCE7F3" stroke="#DB2777" stroke-width="2"/>
          <line x1="94" y1="30" x2="94" y2="60" stroke="#9D174D" stroke-width="2" stroke-dasharray="3 2"/>
          <line x1="160" y1="30" x2="160" y2="60" stroke="#9D174D" stroke-width="2" stroke-dasharray="3 2"/>
          <line x1="226" y1="30" x2="226" y2="60" stroke="#9D174D" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="#9D174D">Toplam Kurdele: 48 cm</text>
          <text x="160" y="84" text-anchor="middle" font-size="12" font-weight="800" fill="#1E293B">Eşit parça: 5 cm &lt; parça &lt; 15 cm</text>
        `)
      }
    ],
    "6": [
      {
        id: "g6_q1",
        competency: "islem",
        bridgeId: "bridge_factors",
        prompt: "Aşağıdaki sayılardan hangisinin farklı asal çarpanlarının toplamı **$10$**'dur?",
        spokenPrompt: "Aşağıdaki sayılardan hangisinin farklı asal çarpanlarının toplamı 10'dur?",
        options: [
          { id: "a", text: "$24$", correct: false, hint: "$24 = 2^3 \\times 3$ olduğundan farklı asal çarpanları $2 + 3 = 5$'tir.", spokenHint: "24'ün farklı asal çarpanları 2 ve 3'tür, toplamları 5 eder." },
          { id: "b", text: "$30$", correct: true, okMsg: "Doğru! $30 = 2 \\times 3 \\times 5$ olduğundan farklı asal çarpanlarının toplamı $2 + 3 + 5 = 10$'dur.", spokenOk: "Doğru! 30 sayısı 2, 3 ve 5'in çarpımıdır; farklı asal çarpanlarının toplamı 10'dur." },
          { id: "c", text: "$42$", correct: false, hint: "$42 = 2 \\times 3 \\times 7$ olduğundan toplam $12$ olur.", spokenHint: "42'nin asal çarpanları 2, 3 ve 7'dir; toplamları 12 eder." },
          { id: "d", text: "$45$", correct: false, hint: "$45 = 3^2 \\times 5$ olduğundan farklı asal çarpanları $3 + 5 = 8$'dir.", spokenHint: "45'in farklı asal çarpanları 3 ve 5'tir; toplamları 8 eder." }
        ],
        unsureMsg: "Sayıları asal çarpanlarına ayırıp her asal çarpanı yalnızca bir kez topla.",
        spokenUnsure: "Sayıları asal çarpanlarına ayırıp her asal çarpanı yalnızca bir kez topla.",
        renderSvg: () => svgFrame(108, "Asal çarpanlarının toplamı 10 olan sayı", `
          <rect x="116" y="14" width="88" height="32" rx="10" fill="#EEF2FF" stroke="#6366F1" stroke-width="2"/>
          <text x="160" y="35" text-anchor="middle" font-size="14" font-weight="900" fill="#312E81">Sayı = ?</text>
          <line x1="140" y1="46" x2="96" y2="68" stroke="#64748B" stroke-width="2"/>
          <line x1="160" y1="46" x2="160" y2="68" stroke="#64748B" stroke-width="2"/>
          <line x1="180" y1="46" x2="224" y2="68" stroke="#64748B" stroke-width="2"/>
          <circle cx="96" cy="80" r="13" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <circle cx="160" cy="80" r="13" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <circle cx="224" cy="80" r="13" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="96" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">p₁</text>
          <text x="160" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">p₂</text>
          <text x="224" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">...</text>
          <text x="268" y="84" font-size="12" font-weight="900" fill="#4338CA">Σ = 10</text>
        `)
      },
      {
        id: "g6_q2",
        competency: "islem",
        bridgeId: "bridge_frac_meas",
        prompt: "$2\\frac{1}{4}$ litre meyve suyu $\\frac{3}{8}$ litrelik eş şişelere hiç artmadan dolduruluyor. Kaç şişe gerekir?",
        spokenPrompt: "İki tam dörtte bir litre meyve suyu sekizde üç litrelik eş şişelere hiç artmadan dolduruluyor. Kaç şişe gerekir?",
        options: [
          { id: "a", text: "$4$", correct: false, hint: "$2\\frac{1}{4}$ kesrini bileşik kesir olarak $\\frac{9}{4}$ yazıp $\\frac{3}{8}$'e bölmelisin.", spokenHint: "İki tam dörtte bir kesrini dörtte dokuz yazıp sekizde üçe bölmelisin." },
          { id: "b", text: "$5$", correct: false, hint: "Bölme yaparken ikinci kesri ters çevirip çarpmayı unutma.", spokenHint: "Kesir bölmesinde ikinci kesri ters çevirip çarpmayı unutma." },
          { id: "c", text: "$6$", correct: true, okMsg: "Süper! $\\frac{9}{4} \\div \\frac{3}{8} = \\frac{9}{4} \\times \\frac{8}{3} = 6$ şişe gerekir.", spokenOk: "Süper! Dörtte dokuzu sekizde üçe böldüğümüzde 6 şişe gerekir." },
          { id: "d", text: "$8$", correct: false, hint: "Şişe kapasitesi $\\frac{1}{8}$ değil, $\\frac{3}{8}$ litredir.", spokenHint: "Şişelerin her biri sekizde bir değil, sekizde üç litredir." }
        ],
        unsureMsg: "Tam sayılı kesri bileşik kesre çevirip bölme işleminde ikinci kesri ters çevirerek çarp.",
        spokenUnsure: "Tam sayılı kesri bileşik kesre çevirip ikinci kesri ters çevirerek çarp.",
        renderSvg: () => svgFrame(108, "2 tam 1/4 litre sürahiden 3/8 litrelik şişelere doldurma", `
          <rect x="34" y="18" width="76" height="72" rx="10" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
          <rect x="36" y="42" width="72" height="46" rx="6" fill="#F59E0B" opacity="0.75"/>
          <text x="72" y="34" text-anchor="middle" font-size="11" font-weight="900" fill="#78350F">Sürahi</text>
          <text x="72" y="70" text-anchor="middle" font-size="13" font-weight="900" fill="#FFFFFF">2 1/4 L</text>
          <path d="M122 54 L166 54" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>
          <polygon points="164,48 176,54 164,60" fill="#64748B"/>
          <rect x="190" y="34" width="38" height="52" rx="6" fill="#FFEDD5" stroke="#EA580C" stroke-width="2"/>
          <text x="209" y="65" text-anchor="middle" font-size="11" font-weight="900" fill="#9A3412">3/8 L</text>
          <text x="262" y="64" text-anchor="middle" font-size="13" font-weight="900" fill="#0F172A">× ? şişe</text>
        `)
      },
      {
        id: "g6_q3",
        competency: "muhakeme",
        bridgeId: "bridge_triangle",
        prompt: "Şekilde $d_1 \\parallel d_2$ paralel doğruları bir kesenle kesişmektedir. Verilen açı $115^\\circ$ olduğuna göre $y$ açısı kaç derecedir?",
        spokenPrompt: "Şekilde d1 ve d2 paralel doğruları bir kesenle kesişmektedir. Verilen açı 115 derece olduğuna göre y açısı kaç derecedir?",
        options: [
          { id: "a", text: "$55^\\circ$", correct: false, hint: "Paralel iki doğrunun arasında aynı tarafta kalan karşı durumlu açıların toplamı $180^\\circ$'dir.", spokenHint: "Paralel iki doğrunun arasında aynı tarafta kalan karşı durumlu açıların toplamı 180 derecedir." },
          { id: "b", text: "$65^\\circ$", correct: true, okMsg: "Doğru! Aynı tarafta kalan iç açılar bütünlerdir: $180^\\circ - 115^\\circ = 65^\\circ$.", spokenOk: "Doğru! Aynı tarafta kalan iç açılar bütünlerdir: 180 eksi 115 eşittir 65 derece." },
          { id: "c", text: "$75^\\circ$", correct: false, hint: "$180 - 115$ işlemini tekrar kontrol et.", spokenHint: "180 eksi 115 çıkarma işlemini tekrar kontrol et." },
          { id: "d", text: "$115^\\circ$", correct: false, hint: "Şekilde $y$ dar açıdır; $115^\\circ$ ile eşit değil bütünlerdir.", spokenHint: "Şekilde y dar açıdır; 115 derece ile bütünlerdir." }
        ],
        unsureMsg: "Paralel doğrular arasında aynı yöne bakan iç (karşı durumlu) açıların toplamı $180^\\circ$'dir.",
        spokenUnsure: "Paralel doğrular arasında aynı yöne bakan karşı durumlu iç açıların toplamı 180 derecedir.",
        renderSvg: () => svgFrame(116, "Paralel iki doğru ve bir kesenle oluşan 115 derece ve y açısı", `
          <line x1="40" y1="36" x2="280" y2="36" stroke="#1E293B" stroke-width="2.5"/>
          <line x1="40" y1="88" x2="280" y2="88" stroke="#1E293B" stroke-width="2.5"/>
          <line x1="202" y1="12" x2="146" y2="112" stroke="#2563EB" stroke-width="2.5"/>
          <text x="52" y="29" font-size="11" font-weight="800" fill="#475569">d₁</text>
          <text x="52" y="81" font-size="11" font-weight="800" fill="#475569">d₂ (d₁ ∥ d₂)</text>
          <path d="M178 52 A 18 18 0 0 0 206 36" fill="none" stroke="#EA580C" stroke-width="2.5"/>
          <text x="206" y="54" font-size="11" font-weight="900" fill="#C2410C">115°</text>
          <path d="M180 88 A 20 20 0 0 0 170 70" fill="none" stroke="#10B981" stroke-width="2.5"/>
          <text x="186" y="79" font-size="12" font-weight="900" fill="#047857">y = ?</text>
        `)
      },
      {
        id: "g6_q4",
        competency: "muhakeme",
        bridgeId: "bridge_ratio_pie",
        prompt: "Bir gruptaki $5$ öğrencinin boy uzunlukları küçükten büyüğe $142, 145, 148, 150, 160\\text{ cm}$ olarak sıralanmıştır. Gruptan $160\\text{ cm}$ boyundaki öğrenci ayrılırsa **ortanca (medyan)** nasıl değişir?",
        spokenPrompt: "Bir gruptaki 5 öğrencinin boy uzunlukları 142, 145, 148, 150 ve 160 santimetre olarak sıralanmıştır. 160 santimetre boyundaki öğrenci gruptan ayrılırsa ortanca, yani medyan nasıl değişir?",
        options: [
          { id: "a", text: "Değişmez, $148\\text{ cm}$ kalır.", correct: false, hint: "Geriye $4$ veri kaldığında ortanca ortadaki iki verinin aritmetik ortalaması olur.", spokenHint: "Geriye 4 veri kaldığında ortanca, ortadaki iki sayının ortalaması olur." },
          { id: "b", text: "$1{,}5\\text{ cm}$ azalır.", correct: true, okMsg: "Mükemmel! İlk ortanca $148$ iken, kalan $[142, 145, 148, 150]$ dizisinin ortancası $\\frac{145+148}{2} = 146{,}5$ olur; $1{,}5\\text{ cm}$ azalır.", spokenOk: "Mükemmel! İlk ortanca 148 iken kalan 4 verinin ortancası 145 ile 148'in ortalaması olan 146 buçuktur; yani 1 buçuk santimetre azalır." },
          { id: "c", text: "$2\\text{ cm}$ artar.", correct: false, hint: "En büyük veri ayrıldığında merkez sola doğru kayar, yani küçülür.", spokenHint: "En büyük veri gruptan çıktığında ortanca büyümez, küçülür." },
          { id: "d", text: "$3\\text{ cm}$ azalır.", correct: false, hint: "$145$ ve $148$'in tam ortasındaki sayıyı hesapla.", spokenHint: "145 ile 148 sayılarının tam ortasındaki değeri hesapla." }
        ],
        unsureMsg: "Veri sayısı çift olduğunda ortanca, ortadaki iki değerin ortalamasıdır.",
        spokenUnsure: "Veri sayısı çift olduğunda ortanca, ortadaki iki sayının ortalamasıdır.",
        renderSvg: () => svgFrame(104, "Küçükten büyüğe sıralı boy verileri", `
          <rect x="20" y="24" width="50" height="32" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="76" y="24" width="50" height="32" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="132" y="24" width="50" height="32" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="188" y="24" width="50" height="32" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="244" y="24" width="56" height="32" rx="8" fill="#FEE2E2" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="45" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#1E3A8A">142</text>
          <text x="101" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#1E3A8A">145</text>
          <text x="157" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#1E3A8A">148</text>
          <text x="213" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#1E3A8A">150</text>
          <text x="272" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#B91C1C">160 ✕</text>
          <text x="160" y="84" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">160 cm ayrılırsa ortanca nasıl değişir?</text>
        `)
      },
      {
        id: "g6_q5",
        competency: "modelleme",
        bridgeId: "bridge_balance",
        prompt: "Kibrit çöpleriyle kurulan örüntüde 1. adımda $4$, 2. adımda $7$, 3. adımda $10$ çöp kullanılıyor. $n$. adımda kullanılacak çöp sayısını veren cebirsel ifade hangisidir?",
        spokenPrompt: "Kibrit çöpleriyle kurulan örüntüde 1. adımda 4, 2. adımda 7, 3. adımda 10 çöp kullanılıyor. n'inci adımda kullanılacak çöp sayısını veren cebirsel ifade hangisidir?",
        options: [
          { id: "a", text: "$4n$", correct: false, hint: "$n=2$ yazdığında $4 \\cdot 2 = 8$ çıkar; oysa 2. adımda $7$ çöp var.", spokenHint: "n yerine 2 yazdığında 8 çıkar; oysa 2. adımda 7 çöp var." },
          { id: "b", text: "$3n + 1$", correct: true, okMsg: "Harika! Her adımda $3$ çöp arttığı için $3n$'le başlar; ilk adım $3(1)+1 = 4$ olduğundan kural $3n+1$'dir.", spokenOk: "Harika! Her adımda 3 çöp arttığı için kural 3 n artı 1 olur." },
          { id: "c", text: "$2n + 2$", correct: false, hint: "Artış miktarı $2$ değil $3$'tür.", spokenHint: "Adımlar arasındaki artış miktarı 2 değil 3'tür." },
          { id: "d", text: "$n + 3$", correct: false, hint: "$n=2$ için $2 + 3 = 5$ olur, $7$ olmaz.", spokenHint: "n yerine 2 koyduğunda 5 çıkar, 7 çıkmaz." }
        ],
        unsureMsg: "Her yeni kare için ortak kenar hariç $3$ çöp eklendiğini düşün ve $n=1,2,3$'ü dene.",
        spokenUnsure: "Her yeni kare için 3 çöp eklendiğini düşün ve n yerine 1, 2, 3 değerlerini dene.",
        renderSvg: () => svgFrame(108, "Kibrit çöpü kare örüntüsü: 4, 7, 10", `
          <rect x="26" y="28" width="28" height="28" fill="none" stroke="#D97706" stroke-width="3"/>
          <text x="40" y="76" text-anchor="middle" font-size="10" font-weight="800" fill="#1E293B">1. Adım (4)</text>
          <rect x="92" y="28" width="28" height="28" fill="none" stroke="#D97706" stroke-width="3"/>
          <rect x="120" y="28" width="28" height="28" fill="none" stroke="#D97706" stroke-width="3"/>
          <text x="120" y="76" text-anchor="middle" font-size="10" font-weight="800" fill="#1E293B">2. Adım (7)</text>
          <rect x="184" y="28" width="24" height="28" fill="none" stroke="#D97706" stroke-width="3"/>
          <rect x="208" y="28" width="24" height="28" fill="none" stroke="#D97706" stroke-width="3"/>
          <rect x="232" y="28" width="24" height="28" fill="none" stroke="#D97706" stroke-width="3"/>
          <text x="220" y="76" text-anchor="middle" font-size="10" font-weight="800" fill="#1E293B">3. Adım (10)</text>
          <text x="285" y="48" text-anchor="middle" font-size="13" font-weight="900" fill="#2563EB">n. → ?</text>
        `)
      },
      {
        id: "g6_q6",
        competency: "modelleme",
        bridgeId: "bridge_triangle",
        prompt: "Tabanı $12\\text{ cm}$ ve bu tabana ait yüksekliği $8\\text{ cm}$ olan paralelkenar karton köşegeni boyunca kesilerek iki eş üçgene ayrılıyor. Üçgenlerden birinin alanı kaç $\\text{cm}^2$'dir?",
        spokenPrompt: "Tabanı 12 santimetre ve yüksekliği 8 santimetre olan paralelkenar karton köşegeni boyunca kesilerek iki eş üçgene ayrılıyor. Üçgenlerden birinin alanı kaç santimetrekaredir?",
        options: [
          { id: "a", text: "$20\\text{ cm}^2$", correct: false, hint: "Taban ile yüksekliği toplamıyor, çarpıp ikiye bölüyoruz.", spokenHint: "Taban ile yüksekliği toplamıyor, çarpıp ikiye bölüyoruz." },
          { id: "b", text: "$48\\text{ cm}^2$", correct: true, okMsg: "Harika! Paralelkenarın alanı $12 \\times 8 = 96\\text{ cm}^2$, köşegen alanı iki eş parçaya böldüğünden üçgenin alanı $48\\text{ cm}^2$ olur.", spokenOk: "Harika! Paralelkenarın alanı 96, iki eş üçgenden birinin alanı ise bunun yarısı yani 48 santimetrekaredir." },
          { id: "c", text: "$64\\text{ cm}^2$", correct: false, hint: "$12 \\times 8$ işlemini yapıp sonucun yarısını almalısın.", spokenHint: "12 çarpı 8 işlemini yapıp sonucun yarısını almalısın." },
          { id: "d", text: "$96\\text{ cm}^2$", correct: false, hint: "$96$ tüm paralelkenarın alanıdır; tek bir üçgeni soruyoruz.", spokenHint: "96 tüm paralelkenarın alanıdır; biz tek bir üçgenin alanını soruyoruz." }
        ],
        unsureMsg: "Paralelkenarın alanı taban $\\times$ yüksekliktir; köşegen onu iki eş üçgene ayırır.",
        spokenUnsure: "Paralelkenarın alanı taban çarpı yüksekliktir; köşegen onu iki eş üçgene ayırır.",
        renderSvg: () => svgFrame(112, "Köşegenle bölünmüş paralelkenar", `
          <polygon points="84,22 244,22 214,84 54,84" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
          <polygon points="84,22 244,22 54,84" fill="#93C5FD" opacity="0.55"/>
          <line x1="244" y1="22" x2="54" y2="84" stroke="#1D4ED8" stroke-width="2" stroke-dasharray="5 3"/>
          <line x1="112" y1="22" x2="112" y2="84" stroke="#DC2626" stroke-width="2" stroke-dasharray="3 2"/>
          <rect x="112" y="74" width="10" height="10" fill="none" stroke="#DC2626" stroke-width="1.5"/>
          <text x="122" y="57" font-size="11" font-weight="800" fill="#B91C1C">8 cm</text>
          <text x="134" y="100" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">Taban = 12 cm</text>
          <text x="275" y="56" text-anchor="middle" font-size="11" font-weight="900" fill="#1D4ED8">1 üçgen = ?</text>
        `)
      }
    ],
    "7": [
      {
        id: "g7_q1",
        competency: "islem",
        bridgeId: "bridge_signs",
        prompt: "$\\left(-\\frac{2}{3}\\right) + \\frac{1}{2} \\cdot \\left(-\\frac{4}{5}\\right)$ işleminin sonucu kaçtır?",
        spokenPrompt: "Eksi üçte iki artı ikide bir çarpı eksi beşte dört işleminin sonucu kaçtır?",
        options: [
          { id: "a", text: "$-\\frac{16}{15}$", correct: true, okMsg: "Mükemmel! Önce çarpma: $\\frac{1}{2} \\cdot (-\\frac{4}{5}) = -\\frac{2}{5}$. Sonra $-\\frac{2}{3} - \\frac{2}{5} = -\\frac{16}{15}$.", spokenOk: "Mükemmel! Önce çarpma yapılır ve eksi beşte iki bulunur. Sonra eksi üçte iki ile toplanarak eksi on beşte on altı elde edilir." },
          { id: "b", text: "$-\\frac{2}{15}$", correct: false, hint: "İkisi de negatif olduğundan işaretler toplanır, birbirinden çıkarılmaz.", spokenHint: "İki rasyonel sayı da negatif olduğu için değerler aynı yönde toplanır." },
          { id: "c", text: "$\\frac{4}{15}$", correct: false, hint: "İşlem önceliği çarpmadadır; soldan sağa önce toplama yapma.", spokenHint: "İşlem önceliği çarpmadadır; soldan sağa önce toplama yapma." },
          { id: "d", text: "$-\\frac{6}{8}$", correct: false, hint: "Paydaları eşitlemeden pay ve paydalar toplanamaz.", spokenHint: "Paydaları eşitlemeden payları ve paydaları doğrudan toplama." }
        ],
        unsureMsg: "İşlem önceliğine dikkat: önce çarpma işlemini yap, sonra payda eşitleyerek topla.",
        spokenUnsure: "İşlem önceliğine dikkat et: önce çarpmayı yap, sonra payda eşitleyerek topla.",
        renderSvg: () => svgFrame(100, "Rasyonel sayılarda işlem önceliği", `
          <rect x="22" y="28" width="68" height="38" rx="8" fill="#F1F5F9" stroke="#64748B" stroke-width="2"/>
          <text x="56" y="52" text-anchor="middle" font-size="13" font-weight="800" fill="#0F172A">(-2/3)</text>
          <text x="104" y="52" text-anchor="middle" font-size="16" font-weight="900" fill="#0F172A">+</text>
          <rect x="118" y="22" width="128" height="50" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="4 2"/>
          <text x="182" y="38" text-anchor="middle" font-size="9" font-weight="800" fill="#B45309">1. ADIM: ÇARPMA</text>
          <text x="182" y="58" text-anchor="middle" font-size="13" font-weight="900" fill="#78350F">(1/2) · (-4/5)</text>
          <text x="275" y="53" text-anchor="middle" font-size="15" font-weight="900" fill="#2563EB">= ?</text>
        `)
      },
      {
        id: "g7_q2",
        competency: "islem",
        bridgeId: "bridge_balance",
        prompt: "$3(x - 2) = 2x + 5$ denklemini sağlayan $x$ değeri kaçtır?",
        spokenPrompt: "3 çarpı parantez içinde x eksi 2 eşittir 2x artı 5 denklemini sağlayan x değeri kaçtır?",
        options: [
          { id: "a", text: "$1$", correct: false, hint: "Parantezi açarken $3$'ü hem $x$'e hem $-2$'ye dağıtarak $3x - 6$ yazmalısın.", spokenHint: "Parantezi açarken 3'ü eksi 2 ile de çarpmalısın." },
          { id: "b", text: "$7$", correct: false, hint: "$-6$ karşı tarafa $+6$ olarak geçer.", spokenHint: "Eksi 6 eşitliğin diğer tarafına artı 6 olarak geçer." },
          { id: "c", text: "$11$", correct: true, okMsg: "Doğru! $3x - 6 = 2x + 5 \\implies 3x - 2x = 5 + 6 \\implies x = 11$.", spokenOk: "Doğru! Parantez açılınca 3x eksi 6 eşittir 2x artı 5 olur; buradan x eşittir 11 bulunur." },
          { id: "d", text: "$13$", correct: false, hint: "$5 + 6$ toplamını tekrar kontrol et.", spokenHint: "5 artı 6 toplamını tekrar kontrol et." }
        ],
        unsureMsg: "Önce $3$'ü paranteze dağıt, sonra bilinenleri bir tarafa bilinmeyenleri diğer tarafa topla.",
        spokenUnsure: "Önce 3'ü paranteze dağıt, sonra bilinenleri bir tarafa bilinmeyenleri diğer tarafa topla.",
        renderSvg: () => svgFrame(108, "Eşit kollu terazide 3(x-2) = 2x + 5", `
          <polygon points="160,72 146,96 174,96" fill="#64748B"/>
          <line x1="56" y1="68" x2="264" y2="68" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
          <rect x="44" y="26" width="96" height="36" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="180" y="26" width="96" height="36" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="92" y="49" text-anchor="middle" font-size="14" font-weight="900" fill="#1E40AF">3(x - 2)</text>
          <text x="228" y="49" text-anchor="middle" font-size="14" font-weight="900" fill="#92400E">2x + 5</text>
          <text x="160" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="#475569">Dengede → x = ?</text>
        `)
      },
      {
        id: "g7_q3",
        competency: "muhakeme",
        bridgeId: "bridge_ratio_pie",
        prompt: "Bir kutudan rastgele seçilen bir topun **mavi olma** olasılığı $\\frac{3}{8}$'dir. Kutuda mavi olmayan $20$ top bulunduğuna göre toplam kaç top vardır?",
        spokenPrompt: "Bir kutudan rastgele seçilen bir topun mavi olma olasılığı sekizde üçtür. Kutuda mavi olmayan 20 top bulunduğuna göre toplam kaç top vardır?",
        options: [
          { id: "a", text: "$24$", correct: false, hint: "Mavi olmama olasılığı $\\frac{3}{8}$ değil, $1 - \\frac{3}{8} = \\frac{5}{8}$'dir.", spokenHint: "Mavi olmama olasılığı tümleyen kuralından sekizde beştir." },
          { id: "b", text: "$30$", correct: false, hint: "$8$'de $5$'i $20$ olan bütünü orantı kurarak bul.", spokenHint: "Sekizde beşi 20 olan bütünü bulmak için önce 20'yi 5'e böl." },
          { id: "c", text: "$32$", correct: true, okMsg: "Süper! Tümleyen olayın olasılığı $1 - \\frac{3}{8} = \\frac{5}{8}$'dir. $5$ parça $20$ top ise $1$ parça $4$ top, toplam $8 \\times 4 = 32$ top olur.", spokenOk: "Süper! Mavi olmama olasılığı sekizde beştir. 5 parça 20 top ediyorsa tamamı 32 top olur." },
          { id: "d", text: "$40$", correct: false, hint: "$40$'ın $\\frac{5}{8}$'i $25$ top yapar; $20$ yapmaz.", spokenHint: "40'ın sekizde beşi 25 yapar, 20 yapmaz." }
        ],
        unsureMsg: "Bir olayın olasılığı ile tümleyeninin olasılığı toplamı $1$'dir.",
        spokenUnsure: "Bir olayın olasılığı ile tümleyeninin olasılığı toplamı 1'dir.",
        renderSvg: () => svgFrame(104, "Mavi olma olasılığı 3/8, mavi olmayan 20 top", `
          <rect x="28" y="26" width="100" height="44" rx="8" fill="#3B82F6"/>
          <rect x="132" y="26" width="160" height="44" rx="8" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
          <text x="78" y="45" text-anchor="middle" font-size="11" font-weight="900" fill="#FFFFFF">Mavi</text>
          <text x="78" y="61" text-anchor="middle" font-size="11" font-weight="800" fill="#DBEAFE">P = 3/8</text>
          <text x="212" y="45" text-anchor="middle" font-size="11" font-weight="900" fill="#1E293B">Mavi Olmayanlar</text>
          <text x="212" y="61" text-anchor="middle" font-size="12" font-weight="900" fill="#0F172A">20 top</text>
          <text x="160" y="92" text-anchor="middle" font-size="12" font-weight="800" fill="#1E293B">Toplam top sayısı = ?</text>
        `)
      },
      {
        id: "g7_q4",
        competency: "muhakeme",
        bridgeId: "bridge_triangle",
        prompt: "Yarıçapı $6\\text{ cm}$ olan bir daireden merkez açısı $60^\\circ$ olan bir daire dilimi kesiliyor. Bu dilimin alanı kaç $\\text{cm}^2$'dir? ($\\pi = 3$ alınız.)",
        spokenPrompt: "Yarıçapı 6 santimetre olan bir daireden merkez açısı 60 derece olan bir daire dilimi kesiliyor. Pi eşittir 3 alındığında bu dilimin alanı kaç santimetrekaredir?",
        options: [
          { id: "a", text: "$6$", correct: false, hint: "Daire alanı $\\pi r^2$ formülüyle bulunur; $r$'nin karesini almalısın.", spokenHint: "Daire alan formülünde yarıçapın karesini almayı unutma." },
          { id: "b", text: "$12$", correct: false, hint: "Çevre formülünü değil alan formülünü ($\\pi r^2 \\cdot \\frac{60}{360}$) kullanmalısın.", spokenHint: "Çevre formülünü değil alan formülünü kullanmalısın." },
          { id: "c", text: "$18$", correct: true, okMsg: "Doğru! Tüm dairenin alanı $3 \\cdot 6^2 = 108\\text{ cm}^2$, $60^\\circ$ tüm açının $\\frac{1}{6}$'sı olduğundan dilim alanı $18\\text{ cm}^2$'dir.", spokenOk: "Doğru! Tüm dairenin alanı 108, 60 derece bunun altıda biri olduğundan dilimin alanı 18 santimetrekaredir." },
          { id: "d", text: "$36$", correct: false, hint: "$60^\\circ$, $360^\\circ$'nin $\\frac{1}{3}$'ü değil $\\frac{1}{6}$'sıdır.", spokenHint: "60 derece, 360 derecenin üçte biri değil altıda biridir." }
        ],
        unsureMsg: "Daire diliminin alanı, tam dairenin alanının $\\frac{\\text{merkez açı}}{360^\\circ}$ kadarıdır.",
        spokenUnsure: "Daire diliminin alanı, tam daire alanının merkez açı bölü 360 kadarıdır.",
        renderSvg: () => svgFrame(112, "Yarıçapı 6 cm, merkez açısı 60 derece olan daire dilimi", `
          <circle cx="110" cy="56" r="42" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 3"/>
          <path d="M110,56 L152,56 A42,42 0 0,0 131,19.6 Z" fill="#FDE68A" stroke="#D97706" stroke-width="2.5"/>
          <circle cx="110" cy="56" r="3" fill="#0F172A"/>
          <text x="131" y="67" font-size="11" font-weight="800" fill="#92400E">6 cm</text>
          <text x="136" y="45" font-size="11" font-weight="900" fill="#B45309">60°</text>
          <text x="235" y="48" text-anchor="middle" font-size="12" font-weight="900" fill="#1E293B">Dilim Alanı = ?</text>
          <text x="235" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">(π = 3 alınız)</text>
        `)
      },
      {
        id: "g7_q5",
        competency: "modelleme",
        bridgeId: "bridge_ratio_pie",
        prompt: "Bir yazıcı sabit hızla $4$ dakikada $96$ sayfa basmaktadır. Aynı hızla $216$ sayfalık bir dosyayı kaç dakikada basar?",
        spokenPrompt: "Bir yazıcı sabit hızla 4 dakikada 96 sayfa basmaktadır. Aynı hızla 216 sayfalık bir dosyayı kaç dakikada basar?",
        options: [
          { id: "a", text: "$8$", correct: false, hint: "$8$ dakikada $192$ sayfa basar; biraz daha süre gerekir.", spokenHint: "8 dakikada 192 sayfa basar; 216 sayfa için biraz daha süre gerekir." },
          { id: "b", text: "$9$", correct: true, okMsg: "Süper! $1$ dakikada $96 \\div 4 = 24$ sayfa basar; $216 \\div 24 = 9$ dakikada tamamlar.", spokenOk: "Süper! Dakikada 24 sayfa basar; 216 bölü 24 eşittir 9 dakikada tamamlar." },
          { id: "c", text: "$10$", correct: false, hint: "$10$ dakikada $240$ sayfa basar.", spokenHint: "10 dakikada 240 sayfa basar; bu 216'dan fazladır." },
          { id: "d", text: "$12$", correct: false, hint: "Önce $96$'yı $4$'e bölerek $1$ dakikalık birim oranı bul.", spokenHint: "Önce 96'yı 4'e bölerek 1 dakikadaki sayfa sayısını bul." }
        ],
        unsureMsg: "Süre ile basılan sayfa sayısı doğru orantılıdır; birim oranı ($1$ dk) bularak ilerleyebilirsin.",
        spokenUnsure: "Süre ile basılan sayfa sayısı doğru orantılıdır; 1 dakikadaki baskı sayısını bularak ilerle.",
        renderSvg: () => svgFrame(100, "Süre ve basılan sayfa doğru orantı tablosu", `
          <rect x="44" y="20" width="232" height="58" rx="8" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>
          <line x1="44" y1="49" x2="276" y2="49" stroke="#94A3B8" stroke-width="2"/>
          <line x1="146" y1="20" x2="146" y2="78" stroke="#94A3B8" stroke-width="2"/>
          <line x1="210" y1="20" x2="210" y2="78" stroke="#94A3B8" stroke-width="2"/>
          <text x="95" y="39" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">Süre (dk)</text>
          <text x="178" y="39" text-anchor="middle" font-size="13" font-weight="900" fill="#2563EB">4</text>
          <text x="243" y="39" text-anchor="middle" font-size="13" font-weight="900" fill="#DC2626">?</text>
          <text x="95" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">Sayfa</text>
          <text x="178" y="68" text-anchor="middle" font-size="13" font-weight="900" fill="#0F172A">96</text>
          <text x="243" y="68" text-anchor="middle" font-size="13" font-weight="900" fill="#0F172A">216</text>
          <text x="160" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Sabit hızla doğru orantı</text>
        `)
      },
      {
        id: "g7_q6",
        competency: "modelleme",
        bridgeId: "bridge_squares",
        prompt: "Taban ayrıtları $5\\text{ cm}$ ve $4\\text{ cm}$ olan dikdörtgenler prizması şeklindeki bir kutunun hacmi $120\\text{ cm}^3$'tür. Bu kutunun yüksekliği kaç $\\text{cm}$'dir?",
        spokenPrompt: "Taban ayrıtları 5 santimetre ve 4 santimetre olan dikdörtgenler prizması şeklindeki bir kutunun hacmi 120 santimetreküptür. Bu kutunun yüksekliği kaç santimetredir?",
        options: [
          { id: "a", text: "$4\\text{ cm}$", correct: false, hint: "$5 \\times 4 \\times 4 = 80\\text{ cm}^3$ olur, $120$ etmez.", spokenHint: "5 çarpı 4 çarpı 4 eşittir 80 olur, 120 etmez." },
          { id: "b", text: "$5\\text{ cm}$", correct: false, hint: "Taban alanı $20\\text{ cm}^2$'dir; $120$'yi $20$'ye böl.", spokenHint: "Taban alanı 20 santimetrekaredir; 120'yi 20'ye böl." },
          { id: "c", text: "$6\\text{ cm}$", correct: true, okMsg: "Harika! Taban alanı $5 \\times 4 = 20\\text{ cm}^2$. Hacim $=$ Taban Alanı $\\times$ Yükseklik olduğundan $h = 120 \\div 20 = 6\\text{ cm}$.", spokenOk: "Harika! Taban alanı 20 santimetrekare. Hacim 120 olduğuna göre yükseklik 6 santimetredir." },
          { id: "d", text: "$8\\text{ cm}$", correct: false, hint: "$20 \\times 8 = 160$ yapar.", spokenHint: "20 çarpı 8 eşittir 160 yapar." }
        ],
        unsureMsg: "Dikdörtgenler prizmasının hacmi taban alanı ile yüksekliğin çarpımıdır.",
        spokenUnsure: "Dikdörtgenler prizmasının hacmi taban alanı ile yüksekliğin çarpımıdır.",
        renderSvg: () => svgFrame(116, "Hacmi 120 santimetreküp olan dikdörtgenler prizması", `
          <polygon points="60,44 134,44 162,24 88,24" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
          <rect x="60" y="44" width="74" height="46" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>
          <polygon points="134,44 162,24 162,70 134,90" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/>
          <text x="97" y="106" text-anchor="middle" font-size="11" font-weight="800" fill="#1E3A8A">5 cm</text>
          <text x="157" y="88" font-size="11" font-weight="800" fill="#1E3A8A">4 cm</text>
          <text x="45" y="71" text-anchor="end" font-size="13" font-weight="900" fill="#DC2626">h = ?</text>
          <rect x="188" y="34" width="110" height="44" rx="10" fill="#EEF2FF" stroke="#6366F1" stroke-width="2"/>
          <text x="243" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="#312E81">Hacim</text>
          <text x="243" y="70" text-anchor="middle" font-size="13" font-weight="900" fill="#4338CA">120 cm³</text>
        `)
      }
    ],
    "8_okul": [
      {
        id: "g8o_q1",
        competency: "islem",
        bridgeId: "bridge_factors",
        prompt: "$\\text{EBOB}(24, 36) + \\text{EKOK}(6, 8)$ işleminin sonucu kaçtır?",
        spokenPrompt: "24 ile 36'nın EBOB'u artı 6 ile 8'in EKOK'u işleminin sonucu kaçtır?",
        options: [
          { id: "a", text: "$24$", correct: false, hint: "Sadece EKOK'u değil, EBOB ile EKOK'u toplamalısın.", spokenHint: "Sadece EKOK'u değil, EBOB ve EKOK değerlerini toplamalısın." },
          { id: "b", text: "$30$", correct: false, hint: "$24$ ve $36$'nın en büyük ortak böleni $6$ değil $12$'dir.", spokenHint: "24 ve 36'nın en büyük ortak böleni 6 değil 12'dir." },
          { id: "c", text: "$36$", correct: true, okMsg: "Doğru! $\\text{EBOB}(24, 36) = 12$ ve $\\text{EKOK}(6, 8) = 24$, toplamları $36$'dır.", spokenOk: "Doğru! 24 ile 36'nın EBOB'u 12, 6 ile 8'in EKOK'u 24; toplamları 36'dır." },
          { id: "d", text: "$48$", correct: false, hint: "$6$ ve $8$'in en küçük ortak katı $48$ değil $24$'tür.", spokenHint: "6 ile 8'in en küçük ortak katı 48 değil 24'tür." }
        ],
        unsureMsg: "Önce $24$ ve $36$'yı ortak bölen en büyük sayıyı, sonra $6$ ve $8$'in en küçük ortak katını bul.",
        spokenUnsure: "Önce 24 ve 36'yı ortak bölen en büyük sayıyı, sonra 6 ve 8'in en küçük ortak katını bul.",
        renderSvg: () => svgFrame(100, "EBOB(24,36) + EKOK(6,8)", `
          <rect x="24" y="24" width="112" height="48" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
          <text x="80" y="44" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">EBOB (24, 36)</text>
          <text x="80" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="#065F46">?</text>
          <text x="150" y="54" text-anchor="middle" font-size="18" font-weight="900" fill="#0F172A">+</text>
          <rect x="164" y="24" width="112" height="48" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="220" y="44" text-anchor="middle" font-size="11" font-weight="800" fill="#1D4ED8">EKOK (6, 8)</text>
          <text x="220" y="61" text-anchor="middle" font-size="13" font-weight="900" fill="#1E3A8A">?</text>
          <text x="296" y="54" text-anchor="middle" font-size="15" font-weight="900" fill="#D97706">= ?</text>
        `)
      },
      {
        id: "g8o_q2",
        competency: "islem",
        bridgeId: "bridge_squares",
        prompt: "$\\frac{2^5 \\cdot 4^2}{8}$ işleminin $2$ tabanındaki eşiti aşağıdakilerden hangisidir?",
        spokenPrompt: "2 üssü 5 çarpı 4 üssü 2 bölü 8 işleminin 2 tabanındaki eşiti aşağıdakilerden hangisidir?",
        options: [
          { id: "a", text: "$2^4$", correct: false, hint: "$4^2 = (2^2)^2 = 2^4$ olduğundan paydaki üsler $5 + 4$ olur.", spokenHint: "4'ün karesi 2 üssü 4'e eşittir; paydaki üsler toplamı 5 artı 4 olur." },
          { id: "b", text: "$2^6$", correct: true, okMsg: "Harika! $\\frac{2^5 \\cdot 2^4}{2^3} = \\frac{2^9}{2^3} = 2^{9-3} = 2^6$ olur.", spokenOk: "Harika! Pay 2 üssü 9, payda 2 üssü 3 olduğundan sonuç 2 üssü 6'dır." },
          { id: "c", text: "$2^8$", correct: false, hint: "Paydadaki $8 = 2^3$'ü üstten çıkarmayı unutma.", spokenHint: "Paydadaki 8 yani 2 üssü 3'ün kuvvetini çıkarmayı unutma." },
          { id: "d", text: "$2^{12}$", correct: false, hint: "Çarpmada üstler çarpılmaz, toplanır.", spokenHint: "Aynı tabanlı sayılar çarpılırken üsler çarpılmaz, toplanır." }
        ],
        unsureMsg: "Tüm sayıları $2$'nin kuvveti olarak yaz: $4 = 2^2$ ve $8 = 2^3$.",
        spokenUnsure: "Tüm sayıları 2'nin kuvveti olarak yaz: 4 eşittir 2'nin karesi, 8 eşittir 2'nin küpü.",
        renderSvg: () => svgFrame(104, "Üslü ifadelerde taban dönüştürme", `
          <rect x="64" y="16" width="124" height="34" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="126" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="#92400E">2⁵ · 4²</text>
          <line x1="56" y1="56" x2="196" y2="56" stroke="#0F172A" stroke-width="2.5"/>
          <rect x="92" y="62" width="68" height="30" rx="8" fill="#FEE2E2" stroke="#EF4444" stroke-width="2"/>
          <text x="126" y="82" text-anchor="middle" font-size="14" font-weight="900" fill="#B91C1C">8</text>
          <text x="234" y="61" text-anchor="middle" font-size="16" font-weight="900" fill="#2563EB">= 2^?</text>
        `)
      },
      {
        id: "g8o_q3",
        competency: "muhakeme",
        bridgeId: "bridge_squares",
        prompt: "Alanı $50\\text{ cm}^2$ olan bir karenin bir kenar uzunluğu hangi iki ardışık tam sayı arasındadır?",
        spokenPrompt: "Alanı 50 santimetrekare olan bir karenin bir kenar uzunluğu hangi iki ardışık tam sayı arasındadır?",
        options: [
          { id: "a", text: "$6$ ile $7$", correct: false, hint: "$7^2 = 49$, alan olan $50$'den küçüktür.", spokenHint: "7'nin karesi 49 olduğundan kenar 7'den büyüktür." },
          { id: "b", text: "$7$ ile $8$", correct: true, okMsg: "Doğru! Kenar $\\sqrt{50}$'dir ve $\\sqrt{49} \\lt \\sqrt{50} \\lt \\sqrt{64}$ olduğundan $7$ ile $8$ arasındadır.", spokenOk: "Doğru! Karenin kenarı karekök 50'dir; 49 ile 64 arasında kaldığından 7 ile 8 arasındadır." },
          { id: "c", text: "$8$ ile $9$", correct: false, hint: "$8^2 = 64$ sayısı $50$'den büyüktür; kenar $8$'e ulaşamaz.", spokenHint: "8'in karesi 64 olduğundan kenar 8'den küçüktür." },
          { id: "d", text: "$24$ ile $26$", correct: false, hint: "Karenin alanı kenar $\\times$ $2$ değil, kenar $\\times$ kenardır.", spokenHint: "Karenin kenarını bulmak için alanı 2'ye bölmüyoruz, karekökünü alıyoruz." }
        ],
        unsureMsg: "Bir kenarı bulmak için $50$'ye en yakın tam kare sayıları ($49$ ve $64$) düşün.",
        spokenUnsure: "Kenar uzunluğunu tahmin etmek için 50'ye en yakın tam kare sayıları düşün.",
        renderSvg: () => svgFrame(114, "Alanı 50 santimetrekare olan kare ve sayı doğrusu", `
          <rect x="26" y="16" width="68" height="68" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
          <text x="60" y="54" text-anchor="middle" font-size="12" font-weight="900" fill="#166534">50 cm²</text>
          <text x="103" y="54" font-size="13" font-weight="900" fill="#15803D">?</text>
          <line x1="130" y1="62" x2="298" y2="62" stroke="#334155" stroke-width="2.5"/>
          ${[5, 6, 7, 8, 9, 10].map((n, i) => {
            const x = 142 + i * 28;
            return `<line x1="${x}" y1="56" x2="${x}" y2="68" stroke="#334155" stroke-width="2"/><text x="${x}" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">${n}</text>`;
          }).join("")}
          <text x="214" y="34" text-anchor="middle" font-size="11" font-weight="800" fill="#475569">Kenar hangi aralıkta?</text>
        `)
      },
      {
        id: "g8o_q4",
        competency: "muhakeme",
        bridgeId: "bridge_balance",
        prompt: "Koordinat düzleminde $A(2, 5)$ noktasından geçen ve eğimi $m = 3$ olan doğrunun denklemi aşağıdakilerden hangisidir?",
        spokenPrompt: "Koordinat düzleminde A 2'ye 5 noktasından geçen ve eğimi 3 olan doğrunun denklemi aşağıdakilerden hangisidir?",
        options: [
          { id: "a", text: "$y = 3x + 5$", correct: false, hint: "$x = 2$ yazdığında $3(2) + 5 = 11$ çıkar, $5$ çıkmaz.", spokenHint: "x yerine 2 yazdığında 11 çıkar, 5 çıkmaz." },
          { id: "b", text: "$y = 3x - 1$", correct: true, okMsg: "Mükemmel! Eğimi $3$ olan doğru $y = 3x + b$ şeklindedir. $A(2,5)$'i yerine koyarsak $5 = 6 + b \\implies b = -1$.", spokenOk: "Mükemmel! Eğimi 3 olduğundan denklem y eşittir 3x artı b şeklindedir; 2'ye 5 noktasını sağlatırsak b eşittir eksi 1 bulunur." },
          { id: "c", text: "$y = 2x + 1$", correct: false, hint: "Bu doğru $A(2, 5)$'ten geçse de eğimi $2$'dir, $3$ değildir.", spokenHint: "Bu doğru A noktasından geçse de eğimi 2'dir, 3 değildir." },
          { id: "d", text: "$y = 3x + 1$", correct: false, hint: "$x = 2$ için $3(2) + 1 = 7$ olur.", spokenHint: "x yerine 2 yazdığında 7 olur, 5 olmaz." }
        ],
        unsureMsg: "Doğru denklemini $y = mx + b$ biçiminde yazıp $m=3$ ile $A(2, 5)$ koordinatlarını yerine koy.",
        spokenUnsure: "Doğru denklemini y eşittir mx artı b biçiminde yazıp eğimi ve noktayı yerine koy.",
        renderSvg: () => svgFrame(116, "A(2, 5) noktasından geçen eğimi 3 olan doğru", `
          <line x1="76" y1="92" x2="274" y2="92" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="112" y1="14" x2="112" y2="104" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="94" y1="104" x2="188" y2="14" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="158" y1="92" x2="158" y2="43" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <line x1="112" y1="43" x2="158" y2="43" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <circle cx="158" cy="43" r="5" fill="#DC2626"/>
          <text x="166" y="42" font-size="11" font-weight="900" fill="#B91C1C">A(2, 5)</text>
          <text x="158" y="106" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">2</text>
          <text x="105" y="47" text-anchor="end" font-size="10" font-weight="700" fill="#475569">5</text>
          <rect x="206" y="24" width="84" height="30" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
          <text x="248" y="43" text-anchor="middle" font-size="11" font-weight="800" fill="#1E40AF">Eğim m = 3</text>
        `)
      },
      {
        id: "g8o_q5",
        competency: "modelleme",
        bridgeId: "bridge_ratio_pie",
        prompt: "Bir kütüphanedeki $180$ kitabın dağılımı daire grafiğinde Roman $120^\\circ$, Bilim $100^\\circ$ ve Tarih kalan açı olarak gösterilmiştir. Kütüphanede kaç Tarih kitabı vardır?",
        spokenPrompt: "Bir kütüphanedeki 180 kitabın dağılımı daire grafiğinde Roman 120 derece, Bilim 100 derece ve Tarih kalan açı olarak gösterilmiştir. Kütüphanede kaç Tarih kitabı vardır?",
        options: [
          { id: "a", text: "$50$", correct: false, hint: "Tarih açısı $360 - (120 + 100) = 140^\\circ$'dir.", spokenHint: "Tarih diliminin açısı 140 derecedir." },
          { id: "b", text: "$60$", correct: false, hint: "$60$ kitap $120^\\circ$'ye, yani Roman kitaplarına karşılık gelir.", spokenHint: "60 kitap 120 dereceye yani Roman kitaplarına karşılık gelir." },
          { id: "c", text: "$70$", correct: true, okMsg: "Süper! Tarih açısı $360^\\circ - 220^\\circ = 140^\\circ$'dir. $180$ kitap $360^\\circ$'ye denk geldiğinden her $2^\\circ$ bir kitaptır; $140 \\div 2 = 70$ kitap.", spokenOk: "Süper! Tarih açısı 140 derecedir. Her 2 derece 1 kitap olduğundan 140 bölü 2 eşittir 70 Tarih kitabı vardır." },
          { id: "d", text: "$80$", correct: false, hint: "$180$ kitap $360^\\circ$'nin yarısı olduğuna göre kitap sayısı derecenin yarısıdır.", spokenHint: "180 kitap 360 derecenin yarısı olduğuna göre kitap sayısı derecenin yarısıdır." }
        ],
        unsureMsg: "Dairenin tamamı $360^\\circ$ olduğundan önce Tarih kitaplarına kalan açıyı bul.",
        spokenUnsure: "Dairenin tamamı 360 derece olduğundan önce Tarih kitaplarına kalan merkez açıyı bul.",
        renderSvg: () => svgFrame(116, "180 kitabın daire grafiği dağılımı", `
          <circle cx="96" cy="58" r="44" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
          <path d="M96,58 L96,14 A44,44 0 0,1 134,80 Z" fill="#93C5FD" stroke="#1D4ED8" stroke-width="1.5"/>
          <path d="M96,58 L134,80 A44,44 0 0,1 67,91 Z" fill="#86EFAC" stroke="#15803D" stroke-width="1.5"/>
          <text x="115" y="47" text-anchor="middle" font-size="9" font-weight="900" fill="#1E3A8A">Roman</text>
          <text x="115" y="58" text-anchor="middle" font-size="9" font-weight="900" fill="#1E3A8A">120°</text>
          <text x="103" y="88" text-anchor="middle" font-size="9" font-weight="900" fill="#14532D">100°</text>
          <text x="73" y="53" text-anchor="middle" font-size="11" font-weight="900" fill="#92400E">Tarih</text>
          <text x="73" y="67" text-anchor="middle" font-size="11" font-weight="900" fill="#92400E">?°</text>
          <rect x="170" y="28" width="128" height="58" rx="10" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.5"/>
          <text x="234" y="48" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">Toplam: 180 kitap</text>
          <text x="234" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="#15803D">Yeşil: Bilim (100°)</text>
          <text x="234" y="79" text-anchor="middle" font-size="11" font-weight="900" fill="#B45309">Tarih = ? kitap</text>
        `)
      },
      {
        id: "g8o_q6",
        competency: "modelleme",
        bridgeId: "bridge_triangle",
        prompt: "Duvara dayanan $10\\text{ m}$ uzunluğundaki merdivenin alt ucu duvardan $6\\text{ m}$ uzaktadır. Merdivenin üst ucu yerden kaç metre yüksektedir?",
        spokenPrompt: "Duvara dayanan 10 metre uzunluğundaki merdivenin alt ucu duvardan 6 metre uzaktadır. Merdivenin üst ucu yerden kaç metre yüksektedir?",
        options: [
          { id: "a", text: "$4\\text{ m}$", correct: false, hint: "Kenarları doğrudan çıkarmak yerine Pisagor bağıntısını ($a^2 + b^2 = c^2$) kullan.", spokenHint: "Kenarları doğrudan çıkarma; dik üçgende Pisagor bağıntısını kullan." },
          { id: "b", text: "$6\\text{ m}$", correct: false, hint: "$6^2 + 6^2 = 72$, $100$ etmez.", spokenHint: "6'nın karesi artı 6'nın karesi 72 yapar, 100 yapmaz." },
          { id: "c", text: "$8\\text{ m}$", correct: true, okMsg: "Harika! $6^2 + h^2 = 10^2 \\implies h^2 = 100 - 36 = 64 \\implies h = 8\\text{ m}$ (6-8-10 özel üçgeni).", spokenOk: "Harika! Pisagor bağıntısından 6'nın karesi artı yüksekliğin karesi eşittir 10'un karesi olur; buradan yükseklik 8 metre bulunur." },
          { id: "d", text: "$9\\text{ m}$", correct: false, hint: "$100 - 36 = 64$ karekökünü al.", spokenHint: "100 eksi 36 eşittir 64 sayısının karekökünü al." }
        ],
        unsureMsg: "Duvar ile zemin dik kesiştiğinden dik üçgende $a^2 + b^2 = c^2$ bağıntısı geçerlidir.",
        spokenUnsure: "Duvar ile zemin dik kesiştiğinden dik üçgende Pisagor bağıntısı geçerlidir.",
        renderSvg: () => svgFrame(116, "Duvara dayalı 10 metrelik merdiven", `
          <line x1="90" y1="18" x2="90" y2="96" stroke="#334155" stroke-width="4"/>
          <line x1="68" y1="96" x2="262" y2="96" stroke="#334155" stroke-width="4"/>
          <rect x="90" y="84" width="12" height="12" fill="none" stroke="#475569" stroke-width="2"/>
          <line x1="90" y1="24" x2="188" y2="96" stroke="#D97706" stroke-width="4" stroke-linecap="round"/>
          <text x="154" y="54" font-size="12" font-weight="900" fill="#B45309">10 m</text>
          <text x="139" y="111" text-anchor="middle" font-size="12" font-weight="800" fill="#1E293B">6 m</text>
          <text x="77" y="63" text-anchor="end" font-size="13" font-weight="900" fill="#DC2626">h = ?</text>
        `)
      }
    ],
    "8_lgs": [
      {
        id: "g8l_q1",
        competency: "islem",
        bridgeId: "bridge_squares",
        prompt: "$\\left(8 \\cdot 10^{-4}\\right) \\cdot \\left(2{,}5 \\cdot 10^7\\right)$ çarpımının **bilimsel gösterimi** aşağıdakilerden hangisidir?",
        spokenPrompt: "8 çarpı 10 üssü eksi 4 ile 2 tam onda 5 çarpı 10 üssü 7 sayılarının çarpımının bilimsel gösterimi hangisidir?",
        options: [
          { id: "a", text: "$2 \\cdot 10^3$", correct: false, hint: "$8 \\cdot 2{,}5 = 20 = 2 \\cdot 10^1$ olduğundan $10$'un kuvveti $1$ artar.", spokenHint: "8 çarpı 2 buçuk 20 eder; 20'yi 2 çarpı 10 olarak yazarken kuvveti 1 artırmalısın." },
          { id: "b", text: "$2 \\cdot 10^4$", correct: true, okMsg: "Mükemmel! $20 \\cdot 10^{-4+7} = 20 \\cdot 10^3 = 2 \\cdot 10^4$ bilimsel gösterimdir.", spokenOk: "Mükemmel! Çarpım 20 çarpı 10 üssü 3 çıkar; bilimsel gösterim için 2 çarpı 10 üssü 4 yazılır." },
          { id: "c", text: "$20 \\cdot 10^3$", correct: false, hint: "Değeri doğru olsa da bilimsel gösterimde katsayı $1 \\le a \\lt 10$ aralığında olmalıdır.", spokenHint: "Değeri doğru olsa da bilimsel gösterimde katsayı 1 ile 10 arasında olmalıdır." },
          { id: "d", text: "$2 \\cdot 10^{11}$", correct: false, hint: "$-4 + 7$ işlemini dikkatli yap; üsler aynı işaretli değil.", spokenHint: "Eksi 4 artı 7 işlemini dikkatli yap." }
        ],
        unsureMsg: "Katsayıları kendi arasında, $10$'un kuvvetlerini kendi arasında çarpıp katsayıyı $1 \\le a \\lt 10$ aralığına getir.",
        spokenUnsure: "Katsayıları ve 10'un kuvvetlerini ayrı ayrı çarpıp sonucu bilimsel gösterim aralığına getir.",
        renderSvg: () => svgFrame(100, "Bilimsel gösterim çarpımı", `
          <rect x="20" y="24" width="96" height="40" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="68" y="49" text-anchor="middle" font-size="13" font-weight="900" fill="#1E40AF">8 · 10⁻⁴</text>
          <text x="128" y="49" text-anchor="middle" font-size="16" font-weight="900" fill="#0F172A">×</text>
          <rect x="140" y="24" width="102" height="40" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
          <text x="191" y="49" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">2,5 · 10⁷</text>
          <text x="275" y="49" text-anchor="middle" font-size="13" font-weight="900" fill="#D97706">= a · 10ⁿ</text>
          <text x="160" y="86" text-anchor="middle" font-size="11" font-weight="800" fill="#475569">Bilimsel gösterim kuralı: 1 ≤ |a| &lt; 10</text>
        `)
      },
      {
        id: "g8l_q2",
        competency: "islem",
        bridgeId: "bridge_balance",
        prompt: "Alanı $(x^2 - 16)\\text{ cm}^2$ ($x \\gt 4$) olan dikdörtgen levhanın uzun kenarı $(x + 4)\\text{ cm}$'dir. Bu levhanın **çevresi** kaç $\\text{cm}$'dir?",
        spokenPrompt: "Alanı x kare eksi 16 santimetrekare olan dikdörtgen levhanın uzun kenarı x artı 4 santimetredir. Bu levhanın çevresi kaç santimetredir?",
        options: [
          { id: "a", text: "$2x$", correct: false, hint: "$2x$ yalnızca bir kısa kenar ile bir uzun kenarın toplamıdır; çevre bunun $2$ katıdır.", spokenHint: "2x yalnızca iki kenarın toplamıdır; çevre için 2 ile çarpmayı unutma." },
          { id: "b", text: "$4x$", correct: true, okMsg: "Süper! $x^2 - 16 = (x+4)(x-4)$ olduğundan kısa kenar $x-4$'tür. Çevre $= 2[(x+4)+(x-4)] = 4x$.", spokenOk: "Süper! İki kare farkından kısa kenar x eksi 4 bulunur. Çevre ise 2 çarpı 2x eşittir 4x olur." },
          { id: "c", text: "$2x - 8$", correct: false, hint: "Kısa kenar $(x - 4)$'tür ama dikdörtgende $2$ uzun, $2$ kısa kenar bulunur.", spokenHint: "Dikdörtgenin çevresinde 2 uzun ve 2 kısa kenar bulunur." },
          { id: "d", text: "$4x - 16$", correct: false, hint: "Uzun kenardaki $+4$ ile kısa kenardaki $-4$ birbirini sıfırlar!", spokenHint: "Uzun kenardaki artı 4 ile kısa kenardaki eksi 4 birbirini sıfırlar." }
        ],
        unsureMsg: "İki kare farkı özdeşliğini ($a^2 - b^2 = (a-b)(a+b)$) kullanarak önce kısa kenarı bul.",
        spokenUnsure: "İki kare farkı özdeşliğini kullanarak önce levhanın kısa kenarını bul.",
        renderSvg: () => svgFrame(112, "Alanı x²-16, bir kenarı x+4 olan dikdörtgen", `
          <rect x="60" y="30" width="184" height="58" rx="6" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2.5"/>
          <text x="152" y="22" text-anchor="middle" font-size="12" font-weight="900" fill="#312E81">x + 4</text>
          <text x="152" y="64" text-anchor="middle" font-size="13" font-weight="900" fill="#4338CA">Alan = x² - 16</text>
          <text x="255" y="64" font-size="13" font-weight="900" fill="#DC2626">?</text>
          <text x="152" y="104" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">Çevre = ?</text>
        `)
      },
      {
        id: "g8l_q3",
        competency: "muhakeme",
        bridgeId: "bridge_factors",
        prompt: "İki zil sırasıyla $12$ ve $18$ dakikada bir çalmaktadır. İkisi birlikte ilk kez saat $09.00$'da çaldığına göre **3. kez** birlikte saat kaçta çalarlar?",
        spokenPrompt: "İki zil sırasıyla 12 ve 18 dakikada bir çalmaktadır. İkisi birlikte ilk kez saat 09.00'da çaldığına göre 3. kez birlikte saat kaçta çalarlar?",
        options: [
          { id: "a", text: "$09.36$", correct: false, hint: "$09.36$ zillerin **2. kez** birlikte çaldığı saattir.", spokenHint: "09.36 zillerin 2. kez birlikte çaldığı saattir; bize 3. kez soruluyor." },
          { id: "b", text: "$10.08$", correct: false, hint: "$36 \\times 2 = 72$ dakika $= 1$ saat $12$ dakika eder.", spokenHint: "İki periyot 72 dakika, yani 1 saat 12 dakika eder." },
          { id: "c", text: "$10.12$", correct: true, okMsg: "Mükemmel! $\\text{EKOK}(12, 18) = 36$ dk. 1. kez $09.00$, 2. kez $09.36$, 3. kez ise $72$ dk sonra $10.12$'de çalarlar.", spokenOk: "Mükemmel! 12 ile 18'in EKOK'u 36 dakikadır. 1. kez 09.00'da çaldıkları için 3. kez 72 dakika sonra saat 10.12'de çalarlar." },
          { id: "d", text: "$10.48$", correct: false, hint: "$09.00$ zaten 1. kez olduğundan 3. kez için $2$ aralık ($2 \\times 36$ dk) geçer, $3$ değil.", spokenHint: "09.00 ilk çalma olduğundan 3. kez için 3 değil 2 aralık geçer." }
        ],
        unsureMsg: "1. çalma $09.00$ kabul edildiğinde 3. çalma için iki EKOK süresi geçeceğini unutma.",
        spokenUnsure: "İlk çalma 09.00 olduğunda 3. çalma için iki EKOK süresi geçeceğini unutma.",
        renderSvg: () => svgFrame(108, "12 ve 18 dakikalık zillerin 3. kez birlikte çalması", `
          <rect x="26" y="16" width="84" height="32" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="68" y="36" text-anchor="middle" font-size="11" font-weight="900" fill="#92400E">1. Zil: 12 dk</text>
          <rect x="210" y="16" width="84" height="32" rx="8" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
          <text x="252" y="36" text-anchor="middle" font-size="11" font-weight="900" fill="#1E40AF">2. Zil: 18 dk</text>
          <line x1="38" y1="74" x2="282" y2="74" stroke="#64748B" stroke-width="2.5"/>
          <circle cx="54" cy="74" r="6" fill="#10B981"/><circle cx="160" cy="74" r="6" fill="#94A3B8"/><circle cx="266" cy="74" r="6" fill="#EF4444"/>
          <text x="54" y="95" text-anchor="middle" font-size="10" font-weight="800" fill="#065F46">09.00 (1.)</text>
          <text x="160" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">2. kez</text>
          <text x="266" y="95" text-anchor="middle" font-size="10" font-weight="900" fill="#B91C1C">? (3. kez)</text>
        `)
      },
      {
        id: "g8l_q4",
        competency: "muhakeme",
        bridgeId: "bridge_squares",
        prompt: "Uzunluğu $\\sqrt{180}\\text{ cm}$ olan bir çubuğun sol ucundan $\\sqrt{20}\\text{ cm}$'lik parça kesiliyor. Kalan parçanın uzunluğu kaç $\\text{cm}$'dir?",
        spokenPrompt: "Uzunluğu karekök 180 santimetre olan bir çubuğun sol ucundan karekök 20 santimetrelik parça kesiliyor. Kalan parçanın uzunluğu kaç santimetredir?",
        options: [
          { id: "a", text: "$4\\sqrt{5}$", correct: true, okMsg: "Doğru! $\\sqrt{180} = 6\\sqrt{5}$ ve $\\sqrt{20} = 2\\sqrt{5}$ olduğundan kalan kısım $6\\sqrt{5} - 2\\sqrt{5} = 4\\sqrt{5}\\text{ cm}$ olur.", spokenOk: "Doğru! Karekök 180 altı kök beş, karekök 20 ise iki kök beş olduğundan kalan parça dört kök beş santimetredir." },
          { id: "b", text: "$\\sqrt{160}$", correct: false, hint: "Kareköklerin içindeki sayılar doğrudan çıkarılmaz; önce $a\\sqrt{b}$ biçimine çevir.", spokenHint: "Karekök içindeki sayılar doğrudan çıkarılmaz; önce a kök b biçimine çevirmelisin." },
          { id: "c", text: "$8\\sqrt{5}$", correct: false, hint: "Parça eklemiyoruz, kesip çıkarıyoruz.", spokenHint: "Parça eklemiyoruz, kesip çıkarıyoruz." },
          { id: "d", text: "$2\\sqrt{5}$", correct: false, hint: "$\\sqrt{180} = \\sqrt{36 \\cdot 5} = 6\\sqrt{5}$ değerini kontrol et.", spokenHint: "Karekök 180'in 6 kök 5 ettiğini kontrol et." }
        ],
        unsureMsg: "Köklü sayıları $a\\sqrt{b}$ biçiminde yazarak ortak kök katsayılarını çıkar.",
        spokenUnsure: "Köklü sayıları a kök b biçiminde yazarak ortak kök katsayılarını çıkar.",
        renderSvg: () => svgFrame(100, "Kök 180 cm çubuktan kök 20 cm parça kesimi", `
          <rect x="28" y="34" width="84" height="24" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 2"/>
          <rect x="114" y="34" width="178" height="24" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="70" y="50" text-anchor="middle" font-size="11" font-weight="900" fill="#B91C1C">√20 cm</text>
          <text x="203" y="50" text-anchor="middle" font-size="12" font-weight="900" fill="#166534">Kalan = ? cm</text>
          <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="#0F172A">Başlangıç Toplam Uzunluk: √180 cm</text>
          <text x="70" y="76" text-anchor="middle" font-size="10" font-weight="700" fill="#B91C1C">(kesilen kısım)</text>
        `)
      },
      {
        id: "g8l_q5",
        competency: "modelleme",
        bridgeId: "bridge_balance",
        prompt: "Deposu $48\\text{ L}$ yakıt alan bir araç her $100\\text{ km}$'de $6\\text{ L}$ yakıt tüketmektedir. Tam dolu depoyla yola çıkan bu araç kaç $\\text{km}$ yol aldığında depoda $18\\text{ L}$ yakıt kalır?",
        spokenPrompt: "Deposu 48 litre yakıt alan bir araç her 100 kilometrede 6 litre yakıt tüketmektedir. Tam dolu depoyla yola çıkan araç kaç kilometre yol aldığında depoda 18 litre yakıt kalır?",
        options: [
          { id: "a", text: "$300\\text{ km}$", correct: false, hint: "$300\\text{ km}$'de $18\\text{ L}$ harcanır; soruda kalanın $18\\text{ L}$ olması isteniyor.", spokenHint: "300 kilometrede 18 litre harcanır; soruda kalan yakıtın 18 litre olması isteniyor." },
          { id: "b", text: "$450\\text{ km}$", correct: false, hint: "Harcanan yakıt miktarı $48 - 18 = 30\\text{ L}$'dir; $30$'u $6$'ya böl.", spokenHint: "Harcanan yakıt 30 litredir; 30'u 6'ya bölüp 100 ile çarpmalısın." },
          { id: "c", text: "$500\\text{ km}$", correct: true, okMsg: "Süper! Harcanan yakıt $48 - 18 = 30\\text{ L}$. Her $100\\text{ km}$'de $6\\text{ L}$ harcandığından $(30 \\div 6) \\times 100 = 500\\text{ km}$.", spokenOk: "Süper! 30 litre yakıt harcanır. Her 100 kilometrede 6 litre yakıldığı için toplam 500 kilometre yol alınır." },
          { id: "d", text: "$800\\text{ km}$", correct: false, hint: "$800\\text{ km}$'de $48\\text{ L}$ yakıtın tamamı biter.", spokenHint: "800 kilometrede deponun tamamı boşalır." }
        ],
        unsureMsg: "Önce depoda $18\\text{ L}$ kalması için kaç litre yakıt harcanması gerektiğini hesapla.",
        spokenUnsure: "Önce depoda 18 litre kalması için kaç litre yakıt harcanması gerektiğini hesapla.",
        renderSvg: () => svgFrame(116, "Depodaki yakıt ile gidilen yol doğrusal ilişkisi", `
          <line x1="60" y1="20" x2="60" y2="94" stroke="#334155" stroke-width="2"/>
          <line x1="60" y1="94" x2="278" y2="94" stroke="#334155" stroke-width="2"/>
          <line x1="60" y1="28" x2="254" y2="94" stroke="#2563EB" stroke-width="2.5"/>
          <circle cx="60" cy="28" r="4" fill="#1D4ED8"/>
          <text x="53" y="32" text-anchor="end" font-size="11" font-weight="800" fill="#1E3A8A">48</text>
          <line x1="60" y1="68" x2="180" y2="68" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 2"/>
          <line x1="180" y1="68" x2="180" y2="94" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 2"/>
          <circle cx="180" cy="68" r="4.5" fill="#DC2626"/>
          <text x="53" y="72" text-anchor="end" font-size="11" font-weight="800" fill="#B45309">18</text>
          <text x="180" y="107" text-anchor="middle" font-size="11" font-weight="900" fill="#DC2626">? km</text>
          <text x="275" y="107" text-anchor="end" font-size="10" font-weight="700" fill="#475569">Yol (km)</text>
          <text x="66" y="20" font-size="10" font-weight="700" fill="#475569">Yakıt (L)</text>
        `)
      },
      {
        id: "g8l_q6",
        competency: "modelleme",
        bridgeId: "bridge_ratio_pie",
        prompt: "Bir sınıftaki öğrencilerin kulüp dağılımı daire grafiğinde Müzik $90^\\circ$, Spor $150^\\circ$ ve Resim kalan açı olarak gösterilmiştir. Rastgele seçilen bir öğrencinin **Resim kulübünde olma** olasılığı kaçtır?",
        spokenPrompt: "Bir sınıftaki öğrencilerin kulüp dağılımı daire grafiğinde Müzik 90 derece, Spor 150 derece ve Resim kalan açı olarak gösterilmiştir. Rastgele seçilen bir öğrencinin Resim kulübünde olma olasılığı kaçtır?",
        options: [
          { id: "a", text: "$\\frac{1}{4}$", correct: false, hint: "$\\frac{1}{4}$ oranı $90^\\circ$ olan Müzik kulübünün olasılığıdır.", spokenHint: "Dörtte bir oranı 90 derece olan Müzik kulübünün olasılığıdır." },
          { id: "b", text: "$\\frac{1}{3}$", correct: true, okMsg: "Doğru! Resim kulübü açısı $360^\\circ - (90^\\circ + 150^\\circ) = 120^\\circ$. Olasılık $= \\frac{120}{360} = \\frac{1}{3}$.", spokenOk: "Doğru! Resim kulübünün açısı 120 derecedir. 120 bölü 360 sadeleşince üçte bir bulunur." },
          { id: "c", text: "$\\frac{5}{12}$", correct: false, hint: "$\\frac{150}{360} = \\frac{5}{12}$ Spor kulübünün olasılığıdır.", spokenHint: "On ikide beş, 150 derece olan Spor kulübünün olasılığıdır." },
          { id: "d", text: "$\\frac{2}{3}$", correct: false, hint: "Resim kulübünde **olmama** olasılığını değil, olma olasılığını hesapla.", spokenHint: "Resim kulübünde olmama değil, olma olasılığını hesaplamalısın." }
        ],
        unsureMsg: "Daire grafiğinde olasılık, ilgili dilimin merkez açısının $360^\\circ$'ye oranıdır.",
        spokenUnsure: "Daire grafiğinde olasılık, ilgili dilimin merkez açısının 360 dereceye oranıdır.",
        renderSvg: () => svgFrame(114, "Kulüp dağılımı daire grafiği ve Resim olasılığı", `
          <circle cx="98" cy="57" r="44" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
          <path d="M98,57 L98,13 A44,44 0 0,1 142,57 Z" fill="#93C5FD" stroke="#1D4ED8" stroke-width="1.5"/>
          <path d="M98,57 L142,57 A44,44 0 0,1 60,79 Z" fill="#86EFAC" stroke="#15803D" stroke-width="1.5"/>
          <text x="116" y="42" text-anchor="middle" font-size="9" font-weight="900" fill="#1E3A8A">Müzik</text>
          <text x="116" y="52" text-anchor="middle" font-size="9" font-weight="900" fill="#1E3A8A">90°</text>
          <text x="112" y="84" text-anchor="middle" font-size="9" font-weight="900" fill="#14532D">Spor 150°</text>
          <text x="74" y="49" text-anchor="middle" font-size="11" font-weight="900" fill="#92400E">Resim</text>
          <text x="74" y="63" text-anchor="middle" font-size="11" font-weight="900" fill="#92400E">?°</text>
          <rect x="174" y="34" width="124" height="46" rx="10" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"/>
          <text x="236" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="#78350F">Seçilen öğrenci:</text>
          <text x="236" y="70" text-anchor="middle" font-size="12" font-weight="900" fill="#B45309">P(Resim) = ?</text>
        `)
      }
    ]
,
    "9": [
      {
        id: "g9_q1",
        competency: "islem",
        bridgeId: "bridge_squares",
        prompt: "$\\frac{\\sqrt{48} + \\sqrt{27}}{\\sqrt{12}}$ işleminin sonucu kaçtır?",
        spokenPrompt: "Karekök 48 artı karekök 27 bölü karekök 12 işleminin sonucu kaçtır?",
        options: [
          { id: "a", text: "$\\frac{5}{2}$", correct: false, hint: "$\\sqrt{48} = 4\\sqrt{3}$ ve $\\sqrt{27} = 3\\sqrt{3}$ olur; katsayıları topla.", spokenHint: "Karekök 48 dört kök üç ve karekök 27 üç kök üç eder; katsayıları topla." },
          { id: "b", text: "$\\frac{7}{2}$", correct: true, okMsg: "Doğru! $\\frac{4\\sqrt{3} + 3\\sqrt{3}}{2\\sqrt{3}} = \\frac{7\\sqrt{3}}{2\\sqrt{3}} = \\frac{7}{2}$.", spokenOk: "Doğru! Pay 7 kök 3, payda 2 kök 3 olduğundan sadeleşince ikide yedi bulunur." },
          { id: "c", text: "$3\\sqrt{3}$", correct: false, hint: "Pay ve paydadaki $\\sqrt{3}$ çarpanları birbirini sadeleştirir.", spokenHint: "Pay ve paydadaki karekök 3 çarpanları sadeleşir." },
          { id: "d", text: "$5$", correct: false, hint: "Kökleri önce $a\\sqrt{3}$ şeklinde açarak işlem yap.", spokenHint: "Köklü sayıları önce a kök 3 biçiminde açarak sadeleştir." }
        ],
        unsureMsg: "Her kareköklü ifadeyi $\\sqrt{3}$ cinsinden $a\\sqrt{3}$ biçiminde yazarak sadeleştirebilirsin.",
        spokenUnsure: "Her kareköklü ifadeyi kök 3 cinsinden yazarak sadeleştirebilirsin.",
        renderSvg: () => svgFrame(104, "Köklü kesir sadeleştirme", `
          <rect x="64" y="16" width="136" height="34" rx="8" fill="#EEF2FF" stroke="#6366F1" stroke-width="2"/>
          <text x="132" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="#312E81">√48 + √27</text>
          <line x1="56" y1="56" x2="208" y2="56" stroke="#0F172A" stroke-width="2.5"/>
          <rect x="92" y="62" width="80" height="30" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="132" y="82" text-anchor="middle" font-size="14" font-weight="900" fill="#1E40AF">√12</text>
          <text x="246" y="61" text-anchor="middle" font-size="16" font-weight="900" fill="#0F172A">= ?</text>
        `)
      },
      {
        id: "g9_q2",
        competency: "islem",
        bridgeId: "bridge_functions",
        prompt: "Gerçel sayılarda $f(x) = |2x - 6| - 4$ fonksiyonu veriliyor. $f(x) = 0$ denklemini sağlayan $x$ değerlerinin toplamı kaçtır?",
        spokenPrompt: "Gerçel sayılarda f(x) eşittir mutlak değer içinde 2x eksi 6, eksi 4 fonksiyonu veriliyor. f(x) eşittir 0 denklemini sağlayan x değerlerinin toplamı kaçtır?",
        options: [
          { id: "a", text: "$2$", correct: false, hint: "$|2x - 6| = 4$ eşitliğini sağlayan $2$ farklı $x$ değeri vardır; her ikisini de bul.", spokenHint: "Mutlak değer 4'e eşit olduğunda 2 farklı x kökü çıkar; ikisini de bulup topla." },
          { id: "b", text: "$4$", correct: false, hint: "$2x - 6 = 4 \\implies x = 5$ ve $2x - 6 = -4 \\implies x = 1$ köklerini topla.", spokenHint: "İki denklemi ayrı ayrı çözerek kökleri kontrol et." },
          { id: "c", text: "$6$", correct: true, okMsg: "Mükemmel! $|2x - 6| = 4$ denklemi $2x - 6 = 4 \\implies x = 5$ ve $2x - 6 = -4 \\implies x = 1$ köklerini verir; toplamları $5 + 1 = 6$'dır.", spokenOk: "Mükemmel! Kökler 5 ve 1 olduğundan toplamları 6'dır." },
          { id: "d", text: "$8$", correct: false, hint: "Mutlak değerin içinin $-4$'e eşit olduğu kökü işaret hatası yapmadan hesapla.", spokenHint: "Mutlak değerin içinin eksi 4'e eşit olduğu denklemi dikkatli çöz." }
        ],
        unsureMsg: "$-4$'ü karşıya atarak $|2x - 6| = 4$ elde et; mutlak değer içi $+4$ veya $-4$ olabilir.",
        spokenUnsure: "Eksi 4'ü karşıya atıp mutlak değer içini hem artı 4'e hem eksi 4'e eşitle.",
        renderSvg: () => svgFrame(112, "Mutlak değer fonksiyonu grafiği ve x ekseni kesim noktaları", `
          <line x1="36" y1="54" x2="284" y2="54" stroke="#64748B" stroke-width="2"/>
          <line x1="88" y1="12" x2="88" y2="100" stroke="#94A3B8" stroke-width="1.5"/>
          <polyline points="98,16 174,88 250,16" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cx="138" cy="54" r="4.5" fill="#DC2626"/>
          <circle cx="210" cy="54" r="4.5" fill="#DC2626"/>
          <circle cx="174" cy="88" r="4" fill="#1E40AF"/>
          <text x="128" y="46" font-size="11" font-weight="900" fill="#B91C1C">x₁</text>
          <text x="214" y="46" font-size="11" font-weight="900" fill="#B91C1C">x₂</text>
          <text x="174" y="104" text-anchor="middle" font-size="10" font-weight="800" fill="#1E3A8A">f(x) = |2x - 6| - 4   |   x₁ + x₂ = ?</text>
        `)
      },
      {
        id: "g9_q3",
        competency: "muhakeme",
        bridgeId: "bridge_logic_sets",
        prompt: "Gerçel sayılarda $A = [-2, 5)$ ve $B = (1, 7]$ aralıkları veriliyor. $A \\cap B$ kesişim aralığındaki **tam sayıların toplamı** kaçtır?",
        spokenPrompt: "Gerçel sayılarda A kapalı eksi 2, açık 5 aralığı ve B açık 1, kapalı 7 aralığı veriliyor. A kesişim B aralığındaki tam sayıların toplamı kaçtır?",
        options: [
          { id: "a", text: "$7$", correct: false, hint: "$1 \\lt x \\lt 5$ aralığındaki $2, 3, 4$ tam sayılarının hepsini topla.", spokenHint: "1 ile 5 arasındaki 2, 3 ve 4 tam sayılarının hepsini topla." },
          { id: "b", text: "$9$", correct: true, okMsg: "Süper! $A \\cap B = (1, 5)$ açık aralığıdır. Buradaki tam sayılar $2, 3, 4$ olduğundan toplamları $2 + 3 + 4 = 9$'dur.", spokenOk: "Süper! Kesişim kümesi 1 ile 5 açık aralığıdır; buradaki tam sayılar 2, 3 ve 4 olup toplamları 9'dur." },
          { id: "c", text: "$10$", correct: false, hint: "$B$ aralığında $1$'in ucu açık parantez `(1` olduğundan $1$ kümeye dâhil değildir.", spokenHint: "1 uç noktası açık parantez olduğundan kesişim kümesine dâhil değildir." },
          { id: "d", text: "$14$", correct: false, hint: "$A$ aralığında $5$'in ucu açık parantez `5)` olduğundan $5$ kümeye dâhil değildir.", spokenHint: "5 uç noktası açık parantez olduğundan kesişim kümesine dâhil değildir." }
        ],
        unsureMsg: "Sayı doğrusunda ortak bölgeyi belirle; köşeli parantez dâhil, yuvarlak parantez hariç demektir.",
        spokenUnsure: "Sayı doğrusunda ortak bölgeyi belirle; köşeli parantez dâhil, açık parantez hariç demektir.",
        renderSvg: () => svgFrame(112, "Sayı doğrusunda A=[-2,5) ve B=(1,7] aralıkları", `
          <line x1="24" y1="74" x2="296" y2="74" stroke="#334155" stroke-width="2"/>
          ${[-2, 0, 1, 3, 5, 7].map((n, i) => {
            const x = 44 + (n + 2) * 24;
            return `<line x1="${x}" y1="69" x2="${x}" y2="79" stroke="#334155" stroke-width="1.5"/><text x="${x}" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">${n}</text>`;
          }).join("")}
          <line x1="44" y1="30" x2="212" y2="30" stroke="#2563EB" stroke-width="4"/>
          <circle cx="44" cy="30" r="4.5" fill="#2563EB"/>
          <circle cx="212" cy="30" r="4.5" fill="#FFFFFF" stroke="#2563EB" stroke-width="2.5"/>
          <text x="30" y="34" font-size="11" font-weight="900" fill="#1D4ED8">A</text>
          <line x1="116" y1="50" x2="260" y2="50" stroke="#10B981" stroke-width="4"/>
          <circle cx="116" cy="50" r="4.5" fill="#FFFFFF" stroke="#10B981" stroke-width="2.5"/>
          <circle cx="260" cy="50" r="4.5" fill="#10B981"/>
          <text x="274" y="54" font-size="11" font-weight="900" fill="#047857">B</text>
        `)
      },
      {
        id: "g9_q4",
        competency: "muhakeme",
        bridgeId: "bridge_logic_sets",
        prompt: "Birleşik $(p \\Rightarrow q') \\vee r \\equiv 0$ olduğuna göre $p, q, r$ önermelerinin doğruluk değerleri sırasıyla aşağıdakilerden hangisidir?",
        spokenPrompt: "Parantez içinde p ise q'nun değili veya r bileşik önermesi sıfıra denk olduğuna göre p, q, r önermelerinin doğruluk değerleri sırasıyla nedir?",
        options: [
          { id: "a", text: "$1, 0, 0$", correct: false, hint: "$p \\Rightarrow q' \\equiv 0$ olması için $q' \\equiv 0$, yani $q \\equiv 1$ olmalıdır.", spokenHint: "p ise q'nun değili 0 olması için q'nun değili 0, yani q eşittir 1 olmalıdır." },
          { id: "b", text: "$1, 1, 0$", correct: true, okMsg: "Doğru! $\\vee$ bağlacı $0$ ise her iki taraf da $0$ olmalıdır: $r \\equiv 0$ ve $p \\Rightarrow q' \\equiv 0$, buradan $p \\equiv 1$, $q' \\equiv 0$ yani $q \\equiv 1$.", spokenOk: "Doğru! Veya bağlacı 0 olduğuna göre r eşittir 0 ve p eşittir 1, q eşittir 1 bulunur." },
          { id: "c", text: "$0, 1, 0$", correct: false, hint: "$p \\equiv 0$ olursa $0 \\Rightarrow q'$ önermesi $1$ olur, $0$ olmaz.", spokenHint: "p 0 olursa koşullu önerme 1'e denk olur." },
          { id: "d", text: "$1, 1, 1$", correct: false, hint: "$r \\equiv 1$ olursa veya bağlacının sonucu $1$ çıkardı.", spokenHint: "r 1 olursa veya bağlacının sonucu 1 çıkardı." }
        ],
        unsureMsg: "`A ∨ B ≡ 0` ancak iki bileşen de `0` iken gerçekleşir; `p ⇒ x ≡ 0` ise `p ≡ 1` ve `x ≡ 0` olmalıdır.",
        spokenUnsure: "Veya bağlacı ancak her iki taraf sıfırken sıfır olur; koşullu önerme ise ancak 1 ise 0 durumunda sıfırdır.",
        renderSvg: () => svgFrame(100, "Bileşik mantık önermesi doğruluk diyagramı", `
          <rect x="24" y="24" width="128" height="44" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="88" y="51" text-anchor="middle" font-size="14" font-weight="900" fill="#92400E">p ⇒ q'</text>
          <text x="172" y="52" text-anchor="middle" font-size="16" font-weight="900" fill="#0F172A">∨</text>
          <rect x="192" y="24" width="46" height="44" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="215" y="51" text-anchor="middle" font-size="14" font-weight="900" fill="#1E40AF">r</text>
          <text x="272" y="51" text-anchor="middle" font-size="15" font-weight="900" fill="#DC2626">≡ 0</text>
          <text x="160" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="#475569">p, q, r doğruluk değerleri = ?</text>
        `)
      },
      {
        id: "g9_q5",
        competency: "modelleme",
        bridgeId: "bridge_triangle",
        prompt: "Yerden yüksekliği $6\\text{ m}$ olan sokak lambasının direğinden $6\\text{ m}$ uzakta duran $1{,}5\\text{ m}$ boyundaki Ali'nin gölgesinin uzunluğu kaç metredir?",
        spokenPrompt: "Yerden yüksekliği 6 metre olan sokak lambasının direğinden 6 metre uzakta duran 1 buçuk metre boyundaki Ali'nin gölgesinin uzunluğu kaç metredir?",
        options: [
          { id: "a", text: "$1{,}5\\text{ m}$", correct: false, hint: "Üçgen benzerliğinde gölge boyu $x$ için $\\frac{x}{x+6} = \\frac{1{,}5}{6}$ oranını kur.", spokenHint: "Üçgen benzerliğinde x bölü x artı 6 eşittir 1 buçuk bölü 6 oranını kur." },
          { id: "b", text: "$2\\text{ m}$", correct: true, okMsg: "Mükemmel! Temel benzerlik teoreminden $\\frac{x}{x + 6} = \\frac{1{,}5}{6} = \\frac{1}{4} \\implies 4x = x + 6 \\implies x = 2\\text{ m}$.", spokenOk: "Mükemmel! Benzerlik oranından x bölü x artı 6 eşittir dörtte bir olur; buradan gölge boyu 2 metre bulunur." },
          { id: "c", text: "$2{,}5\\text{ m}$", correct: false, hint: "$4x = x + 6$ denklemini çözünce $3x = 6$ olur.", spokenHint: "4x eşittir x artı 6 denkleminden 3x eşittir 6 bulunur." },
          { id: "d", text: "$3\\text{ m}$", correct: false, hint: "Paydaya $6$'yı değil, toplam uzunluk olan $x + 6$'yı yazmalısın.", spokenHint: "Benzerlikte büyük üçgenin tabanı 6 değil, x artı 6 uzunluğudur." }
        ],
        unsureMsg: "Lamba direği ve Ali paralel olduğu için oluşan iç içe iki dik üçgen benzerdir (Thales).",
        spokenUnsure: "Lamba direği ve Ali paralel olduğu için oluşan iki dik üçgen arasında benzerlik kur.",
        renderSvg: () => svgFrame(116, "Sokak lambası ve Ali'nin gölgesi benzerlik modeli", `
          <line x1="26" y1="96" x2="294" y2="96" stroke="#334155" stroke-width="2.5"/>
          <line x1="56" y1="20" x2="56" y2="96" stroke="#0F172A" stroke-width="3.5"/>
          <circle cx="56" cy="20" r="5" fill="#F59E0B"/>
          <line x1="176" y1="77" x2="176" y2="96" stroke="#2563EB" stroke-width="3.5"/>
          <circle cx="176" cy="72" r="4" fill="#2563EB"/>
          <line x1="56" y1="20" x2="226" y2="96" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="44" y="60" text-anchor="end" font-size="11" font-weight="800" fill="#0F172A">6 m</text>
          <text x="116" y="109" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">6 m</text>
          <text x="167" y="88" text-anchor="end" font-size="10" font-weight="900" fill="#1D4ED8">1,5 m</text>
          <text x="204" y="109" text-anchor="middle" font-size="11" font-weight="900" fill="#DC2626">Gölge = ?</text>
        `)
      },
      {
        id: "g9_q6",
        competency: "modelleme",
        bridgeId: "bridge_functions",
        prompt: "Bir taksi açılış ücreti olarak $30\\text{ TL}$ ve gidilen her kilometre için $15\\text{ TL}$ almaktadır. Toplam $150\\text{ TL}$ ödeyen bir yolcu kaç kilometre yol gitmiştir?",
        spokenPrompt: "Bir taksi açılış ücreti olarak 30 lira ve gidilen her kilometre için 15 lira almaktadır. Toplam 150 lira ödeyen bir yolcu kaç kilometre yol gitmiştir?",
        options: [
          { id: "a", text: "$6\\text{ km}$", correct: false, hint: "$6$ km sonunda ödenen tutar $30 + 15 \\cdot 6 = 120\\text{ TL}$'dir.", spokenHint: "6 kilometrede ödenen tutar 120 lira olur." },
          { id: "b", text: "$8\\text{ km}$", correct: true, okMsg: "Doğru! $f(x) = 30 + 15x = 150 \\implies 15x = 120 \\implies x = 8\\text{ km}$.", spokenOk: "Doğru! 30 artı 15x eşittir 150 denkleminden gidilen yol 8 kilometre bulunur." },
          { id: "c", text: "$10\\text{ km}$", correct: false, hint: "Toplam tutardan önce $30\\text{ TL}$'lik açılış ücretini düşmelisin.", spokenHint: "150 liradan önce 30 liralık açılış ücretini çıkarmalısın." },
          { id: "d", text: "$12\\text{ km}$", correct: false, hint: "$30 + 15(12) = 210\\text{ TL}$ yapar.", spokenHint: "12 kilometre için 210 lira ödenir." }
        ],
        unsureMsg: "Ücret fonksiyonunu $f(x) = 30 + 15x$ olarak modelleyip $150$'ye eşitle.",
        spokenUnsure: "Ücret fonksiyonunu 30 artı 15x olarak yazıp 150'ye eşitle.",
        renderSvg: () => svgFrame(112, "Taksi ücreti doğrusal fonksiyon grafiği", `
          <line x1="56" y1="16" x2="56" y2="92" stroke="#334155" stroke-width="2"/>
          <line x1="56" y1="92" x2="264" y2="92" stroke="#334155" stroke-width="2"/>
          <line x1="56" y1="74" x2="230" y2="24" stroke="#D97706" stroke-width="2.5"/>
          <circle cx="56" cy="74" r="4" fill="#B45309"/>
          <text x="50" y="78" text-anchor="end" font-size="10" font-weight="800" fill="#92400E">30</text>
          <line x1="56" y1="34" x2="195" y2="34" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <line x1="195" y1="34" x2="195" y2="92" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <circle cx="195" cy="34" r="4.5" fill="#DC2626"/>
          <text x="50" y="38" text-anchor="end" font-size="10" font-weight="800" fill="#B91C1C">150</text>
          <text x="195" y="106" text-anchor="middle" font-size="11" font-weight="900" fill="#DC2626">? km</text>
          <text x="262" y="106" text-anchor="end" font-size="10" font-weight="700" fill="#475569">Yol (x)</text>
          <text x="64" y="20" font-size="10" font-weight="700" fill="#475569">Tutar (TL)</text>
        `)
      }
    ],
    "10": [
      {
        id: "g10_q1",
        competency: "islem",
        bridgeId: "bridge_functions",
        prompt: "$f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$, $f(x) = \\frac{3x + 4}{x - 2}$ fonksiyonu veriliyor. $f^{-1}(5)$ değeri kaçtır?",
        spokenPrompt: "f(x) eşittir 3x artı 4 bölü x eksi 2 fonksiyonunun tersi için f üzeri eksi 1 beş değeri kaçtır?",
        options: [
          { id: "a", text: "$3$", correct: false, hint: "$f^{-1}(5) = k$ ise $f(k) = 5$ eşitliğini çözebilirsin.", spokenHint: "Fonksiyonun tersinde 5'in görüntüsü için f(k) eşittir 5 denklemini çöz." },
          { id: "b", text: "$5$", correct: false, hint: "$f(5) = \\frac{19}{3}$ çıkar; bize $f(5)$ değil $f^{-1}(5)$ soruluyor.", spokenHint: "Bize f(5) değil, fonksiyonun tersinin 5'teki değeri soruluyor." },
          { id: "c", text: "$7$", correct: true, okMsg: "Mükemmel! $f^{-1}(5) = k \\iff \\frac{3k + 4}{k - 2} = 5 \\implies 3k + 4 = 5k - 10 \\implies 2k = 14 \\implies k = 7$.", spokenOk: "Mükemmel! 3k artı 4 eşittir 5k eksi 10 denkleminden sonuç 7 bulunur." },
          { id: "d", text: "$9$", correct: false, hint: "$5(k - 2)$ çarpımında $-2$'yi $5$ ile çarpıp $-10$ yazmayı unutma.", spokenHint: "5 ile k eksi 2 çarpımında eksi 10 terimini dikkatli hesapla." }
        ],
        unsureMsg: "$f^{-1}(5) = k$ demek $f(k) = 5$ demektir; ters kuralı yazmadan da doğrudan $f(k)=5$ çözebilirsin.",
        spokenUnsure: "Ters fonksiyonda 5'in değerini bulmak için fonksiyonu doğrudan 5'e eşitleyebilirsin.",
        renderSvg: () => svgFrame(100, "Ters fonksiyon makinesi", `
          <rect x="26" y="28" width="66" height="40" rx="10" fill="#FEF2F2" stroke="#EF4444" stroke-width="2"/>
          <text x="59" y="53" text-anchor="middle" font-size="14" font-weight="900" fill="#B91C1C">x = ?</text>
          <path d="M98 40 L198 40" stroke="#3B82F6" stroke-width="2.5"/>
          <polygon points="196,35 206,40 196,45" fill="#3B82F6"/>
          <text x="150" y="31" text-anchor="middle" font-size="10" font-weight="800" fill="#1D4ED8">f(x) = (3x+4)/(x-2)</text>
          <path d="M206 58 L106 58" stroke="#10B981" stroke-width="2.5"/>
          <polygon points="108,53 98,58 108,63" fill="#10B981"/>
          <text x="150" y="75" text-anchor="middle" font-size="11" font-weight="900" fill="#047857">f⁻¹(5)</text>
          <rect x="212" y="28" width="82" height="40" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="253" y="53" text-anchor="middle" font-size="14" font-weight="900" fill="#1E40AF">y = 5</text>
        `)
      },
      {
        id: "g10_q2",
        competency: "islem",
        bridgeId: "bridge_factors",
        prompt: "Beş basamaklı $4A27B$ sayısı $15$ ile tam bölünebilen bir **çift sayıdır**. Buna göre $A$ rakamı **kaç farklı** değer alabilir?",
        spokenPrompt: "Beş basamaklı 4 A 2 7 B sayısı 15 ile tam bölünebilen bir çift sayıdır. Buna göre A rakamı kaç farklı değer alabilir?",
        options: [
          { id: "a", text: "$2$", correct: false, hint: "$B=0$ için $4+A+2+7+0 = 13+A$ toplamının $3$'ün katı olması gerekir.", spokenHint: "B sıfır olduğunda rakamlar toplamı 13 artı A'nın 3'ün katı olması gerekir." },
          { id: "b", text: "$3$", correct: true, okMsg: "Doğru! Hem $15$'e bölünüp hem çift olması $B = 0$ olmasını gerektirir. Rakamlar toplamı $13 + A$ üçüncü katı olacağından $A \\in \\{2, 5, 8\\}$, yani $3$ değer vardır.", spokenOk: "Doğru! Sayı çift ve 15'e tam bölündüğü için son basamak 0 olur; A ise 2, 5 veya 8 olmak üzere 3 değer alabilir." },
          { id: "c", text: "$4$", correct: false, hint: "Rakam yalnızca $0..9$ aralığında olabilir; her bir $3$'ün katını dene.", spokenHint: "A rakamı 0 ile 9 arasındadır; uygun olanları tek tek say." },
          { id: "d", text: "$6$", correct: false, hint: "Sayı **çift** olduğu için $B = 5$ durumunu eleyeceğiz.", spokenHint: "Sayı çift olduğu için B eşittir 5 olamaz." }
        ],
        unsureMsg: "$15$'e bölünebilmek için $3$ ve $5$'e tam bölünmeli; çift olduğu için birler basamağı yalnızca $0$ olabilir.",
        spokenUnsure: "15'e bölünmek için 3 ve 5'e bölünmeli; sayı çift olduğu için son rakamı mutlaka 0 olmalıdır.",
        renderSvg: () => svgFrame(100, "Beş basamaklı 4A27B sayısı bölünebilme", `
          ${["4", "A", "2", "7", "B"].map((d, i) => {
            const x = 44 + i * 46;
            const isVar = d === "A" || d === "B";
            return `<rect x="${x}" y="20" width="38" height="40" rx="8" fill="${isVar ? "#FEF3C7" : "#F1F5F9"}" stroke="${isVar ? "#D97706" : "#64748B"}" stroke-width="2"/><text x="${x + 19}" y="46" text-anchor="middle" font-size="16" font-weight="900" fill="${isVar ? "#B45309" : "#0F172A"}">${d}</text>`;
          }).join("")}
          <text x="160" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#1E293B">Koşul: 15 ile tam bölünen ÇİFT sayı</text>
        `)
      },
      {
        id: "g10_q3",
        competency: "muhakeme",
        bridgeId: "bridge_trig",
        prompt: "Bir $ABC$ dik üçgeninde $m(\\widehat{B}) = 90^\\circ$ ve $\\tan A = \\frac{3}{4}$'tür. Buna göre $\\sin A + \\cos C$ toplamı kaçtır?",
        spokenPrompt: "Bir A B C dik üçgeninde B açısı 90 derece ve tanjant A dörtte üçtür. Buna göre sinüs A artı kosinüs C toplamı kaçtır?",
        options: [
          { id: "a", text: "$1$", correct: false, hint: "$A$ ve $C$ tümler açılar olduğundan $\\cos C = \\sin A$ olur.", spokenHint: "A ve C açıları tümler olduğundan kosinüs C değeri sinüs A'ya eşittir." },
          { id: "b", text: "$\\frac{6}{5}$", correct: true, okMsg: "Süper! $3$-$4$-$5$ dik üçgeninde $\\sin A = \\frac{3}{5}$'tir. $A+C=90^\\circ$ olduğundan $\\cos C = \\sin A = \\frac{3}{5}$ ve toplamları $\\frac{6}{5}$ olur.", spokenOk: "Süper! 3 4 5 dik üçgeninde sinüs A beşte üç, kosinüs C de beşte üçtür; toplamları beşte altı olur." },
          { id: "c", text: "$\\frac{7}{5}$", correct: false, hint: "Sorulan $\\cos A$ değil $\\cos C$'dir; $C$ açısının komşu dik kenarı $3k$'dır.", spokenHint: "Sorulan kosinüs A değil kosinüs C'dir; açıyı doğru köşeden incele." },
          { id: "d", text: "$\\frac{8}{5}$", correct: false, hint: "$\\sin A = \\frac{\\text{karşı}}{\\text{hipotenüs}}$ oranında karşı dik kenar $3$'tür, $4$ değildir.", spokenHint: "Tanjantı dörtte üç olan açının karşısındaki kenar 3, komşusundaki kenar 4'tür." }
        ],
        unsureMsg: "$3$-$4$-$5$ dik üçgenini çizip $C$ açısının komşu ve hipotenüs kenarlarını oranla.",
        spokenUnsure: "3 4 5 dik üçgeni üzerinde hem A hem C açılarına göre kenar oranlarını yaz.",
        renderSvg: () => svgFrame(116, "B açısı dik olan ABC üçgeni ve tan A = 3/4", `
          <polygon points="62,92 62,22 204,92" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
          <rect x="62" y="80" width="12" height="12" fill="none" stroke="#1E40AF" stroke-width="2"/>
          <text x="52" y="22" text-anchor="end" font-size="12" font-weight="900" fill="#0F172A">C</text>
          <text x="52" y="98" text-anchor="end" font-size="12" font-weight="900" fill="#0F172A">B</text>
          <text x="212" y="98" font-size="12" font-weight="900" fill="#0F172A">A</text>
          <rect x="214" y="24" width="88" height="52" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="258" y="45" text-anchor="middle" font-size="11" font-weight="900" fill="#92400E">tan A = 3/4</text>
          <text x="258" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#78350F">sin A + cos C = ?</text>
        `)
      },
      {
        id: "g10_q4",
        competency: "muhakeme",
        bridgeId: "bridge_logic_sets",
        prompt: "İki zar aynı anda atılıyor. Üst yüzlere gelen sayıların **toplamının $8$ olduğu bilindiğine göre**, ikisinin de **çift** sayı olma olasılığı kaçtır?",
        spokenPrompt: "İki zar aynı anda atılıyor. Üst yüzlere gelen sayıların toplamının 8 olduğu bilindiğine göre, ikisinin de çift sayı olma olasılığı kaçtır?",
        options: [
          { id: "a", text: "$\\frac{1}{5}$", correct: false, hint: "Toplamı $8$ olan $(2,6), (4,4), (6,2)$ ikililerinin üçü de çifttir.", spokenHint: "Toplamı 8 olan ikililerden hem 2'ye 6, hem 4'e 4, hem de 6'ya 2 çifttir." },
          { id: "b", text: "$\\frac{2}{5}$", correct: false, hint: "$(2,6)$ ve $(6,2)$ iki ayrı durumdur; $(4,4)$ de her ikisi çifttir.", spokenHint: "İki zarı ayırt ettiğimiz için 2'ye 6 ile 6'ya 2 farklı durumlardır." },
          { id: "c", text: "$\\frac{3}{5}$", correct: true, okMsg: "Mükemmel! Toplamı $8$ olan durumlar $(2,6),(3,5),(4,4),(5,3),(6,2)$ olup $5$ tanedir. İkisinin de çift olduğu durumlar $(2,6),(4,4),(6,2)$ olmak üzere $3$ tanedir; yanıt $\\frac{3}{5}$.", spokenOk: "Mükemmel! Toplamı 8 olan 5 durum içinden 3 tanesinde her iki zar da çifttir; olasılık beşte üçtür." },
          { id: "d", text: "$\\frac{3}{36}$", correct: false, hint: "Koşul verildiğinde örnek uzay $36$'dan toplamı $8$ olan durum sayısına daralır.", spokenHint: "Koşullu olasılıkta tüm 36 durumu değil, yalnızca toplamı 8 olan durumları paydaya yazarız." }
        ],
        unsureMsg: "Koşullu olasılıkta önce toplamı $8$ yapan tüm $(x, y)$ zar ikililerini listele.",
        spokenUnsure: "Koşullu olasılıkta önce toplamı 8 yapan tüm zar ikililerini sırayla listele.",
        renderSvg: () => svgFrame(100, "Koşullu olasılık: iki zar toplamı 8", `
          <rect x="34" y="20" width="42" height="42" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
          <rect x="86" y="20" width="42" height="42" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
          <text x="55" y="47" text-anchor="middle" font-size="16" font-weight="900" fill="#1E40AF">?</text>
          <text x="107" y="47" text-anchor="middle" font-size="16" font-weight="900" fill="#1E40AF">?</text>
          <text x="150" y="46" text-anchor="middle" font-size="12" font-weight="900" fill="#0F172A">Toplam = 8</text>
          <rect x="202" y="18" width="96" height="46" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
          <text x="250" y="37" text-anchor="middle" font-size="10" font-weight="800" fill="#047857">Koşullu Olasılık</text>
          <text x="250" y="55" text-anchor="middle" font-size="11" font-weight="900" fill="#065F46">P(Çift, Çift | 8) = ?</text>
          <text x="160" y="88" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Daraltılmış örnek uzay üzerinde düşün</text>
        `)
      },
      {
        id: "g10_q5",
        competency: "modelleme",
        bridgeId: "bridge_triangle",
        prompt: "Koordinat düzleminde $A(2, -1)$ istasyonundan kalkıp $B(4, 9)$ istasyonuna doğrusal uçan bir dron, yolun **tam ortasındaki** $C$ noktasına ulaşıyor. $C$ noktasının orijine $(0, 0)$ uzaklığı kaç birimdir?",
        spokenPrompt: "Koordinat düzleminde A 2'ye eksi 1 noktasından B 4'e 9 noktasına doğrusal uçan bir dron, yolun tam ortasındaki C noktasına ulaşıyor. C noktasının orijine uzaklığı kaç birimdir?",
        options: [
          { id: "a", text: "$4$", correct: false, hint: "Orta nokta $C$'nin hem apsisini hem ordinatını ayrı ayrı ortalama ile bul.", spokenHint: "Orta nokta C'nin hem apsisini hem ordinatını ayrı ayrı ortalama ile bul." },
          { id: "b", text: "$5$", correct: true, okMsg: "Harika! Orta nokta $C = \\left(\\frac{2+4}{2}, \\frac{-1+9}{2}\\right) = (3, 4)$'tür. Orijine uzaklığı $|OC| = \\sqrt{3^2 + 4^2} = 5$ birimdir.", spokenOk: "Harika! Orta nokta C 3'e 4 noktasıdır. Orijine uzaklığı 3 4 5 üçgeninden 5 birim bulunur." },
          { id: "c", text: "$6$", correct: false, hint: "Uç noktaların toplamını değil ortalamasını ($2$'ye bölümünü) almalısın.", spokenHint: "Koordinatları topladıktan sonra 2'ye bölmeyi unutma." },
          { id: "d", text: "$\\sqrt{13}$", correct: false, hint: "Ordinatların ortalaması $\\frac{-1 + 9}{2} = 4$ olur, $2$ olmaz.", spokenHint: "Ordinatların ortalaması eksi 1 artı 9 bölü 2 eşittir 4 eder." }
        ],
        unsureMsg: "Önce $A$ ve $B$'nin koordinat ortalamalarıyla orta nokta $C$'yi, sonra Pisagor ile $|OC|$'yi bul.",
        spokenUnsure: "Önce orta nokta C'nin koordinatlarını, sonra da orijine olan uzaklığını Pisagor ile bul.",
        renderSvg: () => svgFrame(116, "AB doğru parçasının orta noktası C ve orijin uzaklığı", `
          <line x1="56" y1="88" x2="270" y2="88" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="90" y1="12" x2="90" y2="104" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="122" y1="96" x2="178" y2="20" stroke="#3B82F6" stroke-width="2.5"/>
          <circle cx="122" cy="96" r="4" fill="#1E40AF"/>
          <circle cx="178" cy="20" r="4" fill="#1E40AF"/>
          <circle cx="150" cy="58" r="5" fill="#DC2626"/>
          <line x1="90" y1="88" x2="150" y2="58" stroke="#DC2626" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="128" y="101" font-size="10" font-weight="800" fill="#1E3A8A">A(2,-1)</text>
          <text x="184" y="25" font-size="10" font-weight="800" fill="#1E3A8A">B(4, 9)</text>
          <text x="158" y="61" font-size="11" font-weight="900" fill="#B91C1C">C</text>
          <text x="82" y="84" text-anchor="end" font-size="10" font-weight="800" fill="#475569">O</text>
          <text x="236" y="64" text-anchor="middle" font-size="12" font-weight="900" fill="#B91C1C">|OC| = ?</text>
        `)
      },
      {
        id: "g10_q6",
        competency: "modelleme",
        bridgeId: "bridge_quadratics",
        prompt: "Yerden yukarı fırlatılan bir topun $t$ saniye sonraki yüksekliği $h(t) = -5t^2 + 20t$ metre olarak modellenmiştir. Top **en fazla** kaç metre yüksekliğe çıkabilir?",
        spokenPrompt: "Yerden yukarı fırlatılan bir topun t saniye sonraki yüksekliği eksi 5 t kare artı 20 t metre olarak modellenmiştir. Top en fazla kaç metre yüksekliğe çıkabilir?",
        options: [
          { id: "a", text: "$10\\text{ m}$", correct: false, hint: "$t = 2$ saniyede tepe noktasına ulaşır; $h(2)$ değerini hesapla.", spokenHint: "Top 2. saniyede tepe noktasına ulaşır; t yerine 2 koyarak yüksekliği hesapla." },
          { id: "b", text: "$15\\text{ m}$", correct: false, hint: "$-5(2)^2 + 20(2) = -20 + 40$ işlemini kontrol et.", spokenHint: "Eksi 20 artı 40 işlemini kontrol et." },
          { id: "c", text: "$20\\text{ m}$", correct: true, okMsg: "Doğru! Tepe noktası apsisi $r = -\\frac{20}{2(-5)} = 2$ sn, maksimum yükseklik $h(2) = -5(4) + 20(2) = 20\\text{ m}$'dir.", spokenOk: "Doğru! Top 2. saniyede tepe noktasına ulaşır ve en fazla 20 metre yüksekliğe çıkar." },
          { id: "d", text: "$40\\text{ m}$", correct: false, hint: "$-5t^2$ teriminin katkısını $20t$'den çıkarmayı unutma.", spokenHint: "Eksi 5 t kare terimini çıkarmayı unutma." }
        ],
        unsureMsg: "Kolları aşağı bakan parabol en büyük değerini tepe noktası $r = -\\frac{b}{2a}$'da alır.",
        spokenUnsure: "Parabol en büyük değerini tepe noktasında alır; önce tepe noktasının süresini bul.",
        renderSvg: () => svgFrame(112, "Parabolik yükseklik modeli h(t) = -5t² + 20t", `
          <line x1="48" y1="92" x2="266" y2="92" stroke="#334155" stroke-width="2"/>
          <line x1="48" y1="16" x2="48" y2="92" stroke="#334155" stroke-width="2"/>
          <path d="M48,92 Q152,-12 246,92" fill="none" stroke="#2563EB" stroke-width="2.5"/>
          <circle cx="147" cy="40" r="4.5" fill="#DC2626"/>
          <line x1="48" y1="40" x2="147" y2="40" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <text x="147" y="29" text-anchor="middle" font-size="11" font-weight="900" fill="#B91C1C">Maks = ? m</text>
          <text x="262" y="105" text-anchor="end" font-size="10" font-weight="700" fill="#475569">t (sn)</text>
          <text x="54" y="22" font-size="10" font-weight="700" fill="#475569">h(t)</text>
        `)
      }
    ],
    "11": [
      {
        id: "g11_q1",
        competency: "islem",
        bridgeId: "bridge_log_seq",
        prompt: "$\\log_2(x - 3) + \\log_2(x + 1) = 5$ denklemini sağlayan gerçek $x$ değeri kaçtır?",
        spokenPrompt: "2 tabanında logaritma x eksi 3 artı 2 tabanında logaritma x artı 1 eşittir 5 denklemini sağlayan x değeri kaçtır?",
        options: [
          { id: "a", text: "$5$", correct: false, hint: "$x=5$ için $\\log_2(2) + \\log_2(6) \\ne 5$ olur.", spokenHint: "x yerine 5 yazdığında toplam 5 etmez." },
          { id: "b", text: "$7$", correct: true, okMsg: "Mükemmel! $\\log_2((x-3)(x+1)) = 5 \\implies x^2 - 2x - 35 = 0 \\implies (x-7)(x+5) = 0$. Tanım kümesi $x \\gt 3$ olduğundan yalnızca $x = 7$ köktür.", spokenOk: "Mükemmel! Çarpım 2 üssü 5 yani 32'ye eşitlenir; tanım şartı x büyüktür 3 olduğundan tek kök 7'dir." },
          { id: "c", text: "$9$", correct: false, hint: "$2^5 = 32$ eşitliğini doğru kurduğundan emin ol.", spokenHint: "2 üssü 5 eşittir 32 eşitliğini kurup ikinci derece denklemi kontrol et." },
          { id: "d", text: "$-5$ ve $7$", correct: false, hint: "$x = -5$ değeri logaritmanın içini negatif yaptığı için tanım kümesine uymaz!", spokenHint: "x eşittir eksi 5 değeri logaritmanın içini negatif yapar, bu yüzden kök olarak alınamaz." }
        ],
        unsureMsg: "Aynı tabandaki logaritmaların toplamını çarpım logaritması yap ve $x \\gt 3$ tanım koşulunu kontrol et.",
        spokenUnsure: "Aynı tabandaki logaritmaların toplamını içlerin çarpımı olarak birleştir ve tanım koşulunu unutma.",
        renderSvg: () => svgFrame(100, "Logaritmik denklem ve tanım aralığı", `
          <rect x="24" y="20" width="272" height="42" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="160" y="46" text-anchor="middle" font-size="14" font-weight="900" fill="#1E40AF">log₂(x - 3) + log₂(x + 1) = 5</text>
          <rect x="68" y="70" width="184" height="22" rx="8" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"/>
          <text x="160" y="85" text-anchor="middle" font-size="10" font-weight="800" fill="#B91C1C">Tanım şartı: içi &gt; 0</text>
        `)
      },
      {
        id: "g11_q2",
        competency: "islem",
        bridgeId: "bridge_trig",
        prompt: "$\\sin x - \\cos x = \\frac{1}{2}$ olduğuna göre $\\sin(2x)$ değeri kaçtır?",
        spokenPrompt: "Sinüs x eksi kosinüs x eşittir ikide bir olduğuna göre sinüs 2x değeri kaçtır?",
        options: [
          { id: "a", text: "$\\frac{1}{4}$", correct: false, hint: "Eşitliğin karesini aldığında $1 - \\sin(2x) = \\frac{1}{4}$ elde edilir; $\\sin(2x)$'i yalnız bırak.", spokenHint: "Kare aldığında 1 eksi sinüs 2x eşittir dörtte bir çıkar; sinüs 2x'i yalnız bırak." },
          { id: "b", text: "$\\frac{1}{2}$", correct: false, hint: "İki tarafın karesini alırken $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ olduğunu unutma.", spokenHint: "İkide birin karesi dörtte bir eder." },
          { id: "c", text: "$\\frac{3}{4}$", correct: true, okMsg: "Harika! Karesini alırsak $\\sin^2 x + \\cos^2 x - 2\\sin x\\cos x = \\frac{1}{4} \\implies 1 - \\sin(2x) = \\frac{1}{4} \\implies \\sin(2x) = \\frac{3}{4}$.", spokenOk: "Harika! İki tarafın karesini aldığımızda 1 eksi sinüs 2x eşittir dörtte bir bulunur; buradan sinüs 2x dörtte üçtür." },
          { id: "d", text: "$\\frac{3}{8}$", correct: false, hint: "$2\\sin x\\cos x$ ifadesi doğrudan $\\sin(2x)$'e eşittir; tekrar $2$'ye bölme.", spokenHint: "2 sinüs x kosinüs x zaten sinüs 2x'in kendisidir." }
        ],
        unsureMsg: "Verilen eşitliğin her iki tarafının karesini alıp $\\sin^2 x + \\cos^2 x = 1$ özdeşliğini kullan.",
        spokenUnsure: "Eşitliğin her iki tarafının karesini alıp temel Pisagor trigonometri özdeşliğini kullan.",
        renderSvg: () => svgFrame(104, "Trigonometrik özdeşlik sin x - cos x = 1/2", `
          <rect x="26" y="24" width="124" height="44" rx="10" fill="#FDF2F8" stroke="#DB2777" stroke-width="2"/>
          <text x="88" y="51" text-anchor="middle" font-size="13" font-weight="900" fill="#9D174D">sin x - cos x = 1/2</text>
          <path d="M158 46 L192 46" stroke="#64748B" stroke-width="2.5"/>
          <polygon points="190,41 200,46 190,51" fill="#64748B"/>
          <rect x="206" y="24" width="90" height="44" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="251" y="51" text-anchor="middle" font-size="13" font-weight="900" fill="#1E40AF">sin(2x) = ?</text>
          <text x="160" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Özdeşlikleri ilişkilendir</text>
        `)
      },
      {
        id: "g11_q3",
        competency: "muhakeme",
        bridgeId: "bridge_functions",
        prompt: "Gerçel sayılarda tanımlı $f(x) = 2x + 1$ ve $(f \\circ g)(x) = 6x - 5$ olduğuna göre $g(4)$ kaçtır?",
        spokenPrompt: "Gerçel sayılarda tanımlı f(x) eşittir 2x artı 1 ve f bileşke g x eşittir 6x eksi 5 olduğuna göre g(4) değeri kaçtır?",
        options: [
          { id: "a", text: "$6$", correct: false, hint: "$f(g(4)) = 6(4) - 5 = 19$ eşitliğinden $2g(4) + 1 = 19$ denklemini çöz.", spokenHint: "f içinde g 4 eşittir 19 eşitliğinden 2 g(4) artı 1 eşittir 19 denklemini çöz." },
          { id: "b", text: "$9$", correct: true, okMsg: "Süper! $2g(x) + 1 = 6x - 5 \\implies g(x) = 3x - 3$, buradan $g(4) = 9$ (veya doğrudan $2g(4) + 1 = 19 \\implies g(4) = 9$).", spokenOk: "Süper! g(x) fonksiyonu 3x eksi 3 bulunur; x yerine 4 yazdığımızda g(4) eşittir 9 olur." },
          { id: "c", text: "$11$", correct: false, hint: "$-5 - 1 = -6$, ardından $2$'ye bölerken işarete dikkat et.", spokenHint: "İşlemde eksi 5 eksi 1 eşittir eksi 6 olur; sonra 2'ye bölmelisin." },
          { id: "d", text: "$19$", correct: false, hint: "$19$ sayısı $(f \\circ g)(4)$'ün değeridir; bize yalnızca $g(4)$ soruluyor.", spokenHint: "19 sayısı bileşkenin 4'teki değeridir; bize yalnızca g(4) soruluyor." }
        ],
        unsureMsg: "$(f \\circ g)(4) = f(g(4))$ yazdığında her iki tarafa da $x=4$ koyup tek adımda çözebilirsin.",
        spokenUnsure: "Bileşke tanımından f içinde g(4) yazıp doğrudan x eşittir 4 koyarak çözebilirsin.",
        renderSvg: () => svgFrame(100, "Fonksiyon bileşkesi f(g(x)) akış şeması", `
          <rect x="20" y="28" width="52" height="38" rx="8" fill="#F1F5F9" stroke="#64748B" stroke-width="2"/>
          <text x="46" y="52" text-anchor="middle" font-size="13" font-weight="900" fill="#0F172A">x=4</text>
          <path d="M76 47 L110 47" stroke="#2563EB" stroke-width="2.5"/>
          <polygon points="108,42 117,47 108,52" fill="#2563EB"/>
          <text x="95" y="39" text-anchor="middle" font-size="11" font-weight="800" fill="#1D4ED8">g</text>
          <rect x="120" y="28" width="58" height="38" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="149" y="52" text-anchor="middle" font-size="13" font-weight="900" fill="#B45309">g(4)=?</text>
          <path d="M182 47 L218 47" stroke="#10B981" stroke-width="2.5"/>
          <polygon points="216,42 225,47 216,52" fill="#10B981"/>
          <text x="202" y="39" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">f</text>
          <rect x="228" y="28" width="76" height="38" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
          <text x="266" y="52" text-anchor="middle" font-size="12" font-weight="900" fill="#065F46">(f∘g)(4)</text>
          <text x="160" y="88" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">f(t) = 2t + 1  |  (f∘g)(x) = 6x - 5</text>
        `)
      },
      {
        id: "g11_q4",
        competency: "muhakeme",
        bridgeId: "bridge_triangle",
        prompt: "$ABCD$ yamuğunda $[AB] \\parallel [DC]$, alt taban $|AB| = 14\\text{ cm}$ ve üst taban $|DC| = 6\\text{ cm}$'dir. Yamuğun orta taban uzunluğu $y$, köşegenlerinin orta noktaları arasındaki uzaklık $x$ olduğuna göre $y \\cdot x$ çarpımı kaçtır?",
        spokenPrompt: "Bir yamukta alt taban 14 santimetre ve üst taban 6 santimetredir. Orta taban uzunluğu y ve köşegenlerinin orta noktaları arasındaki uzaklık x olduğuna göre y çarpı x kaçtır?",
        options: [
          { id: "a", text: "$24$", correct: false, hint: "Orta taban $y = \\frac{14 + 6}{2} = 10\\text{ cm}$, köşegen orta noktaları arası ise $x = \\frac{14 - 6}{2} = 4\\text{ cm}$'dir.", spokenHint: "Orta taban tabanların toplamının yarısı, köşegen orta noktaları arası ise farklarının yarısıdır." },
          { id: "b", text: "$40$", correct: true, okMsg: "Mükemmel! Orta taban $y = \\frac{14+6}{2} = 10$, köşegen orta noktaları arası uzaklık $x = \\frac{14-6}{2} = 4$ olduğundan $y \\cdot x = 40$.", spokenOk: "Mükemmel! Orta taban 10, köşegenlerin orta noktaları arasındaki uzaklık 4 santimetre olduğundan çarpımları 40'tır." },
          { id: "c", text: "$48$", correct: false, hint: "Üst ve alt tabanların ortalaması ile farkının yarısını tekrar kontrol et.", spokenHint: "Orta taban ile iç parçayı tekrar hesapla." },
          { id: "d", text: "$80$", correct: false, hint: "Farkı $2$'ye bölmeyi unutursan $x$'i iki kat büyük bulursun.", spokenHint: "Tabanlar farkını 2'ye bölmeyi unutma." }
        ],
        unsureMsg: "Yamukta orta taban $\\frac{a+c}{2}$, köşegenlerin orta noktaları arası uzaklık ise $\\frac{|a-c|}{2}$'dir.",
        spokenUnsure: "Yamukta orta taban iki tabanın toplamının yarısı, köşegen orta noktaları arası ise farklarının yarısıdır.",
        renderSvg: () => svgFrame(114, "Yamukta orta taban ve köşegenlerin orta noktaları", `
          <polygon points="104,22 210,22 254,88 60,88" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="104" y1="22" x2="254" y2="88" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="210" y1="22" x2="60" y2="88" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="82" y1="55" x2="232" y2="55" stroke="#10B981" stroke-width="2" stroke-dasharray="4 2"/>
          <line x1="135" y1="55" x2="179" y2="55" stroke="#DC2626" stroke-width="3.5"/>
          <text x="157" y="16" text-anchor="middle" font-size="11" font-weight="800" fill="#1E3A8A">6 cm</text>
          <text x="157" y="103" text-anchor="middle" font-size="11" font-weight="800" fill="#1E3A8A">14 cm</text>
          <text x="157" y="49" text-anchor="middle" font-size="10" font-weight="900" fill="#B91C1C">x</text>
          <text x="275" y="58" font-size="10" font-weight="900" fill="#047857">y: orta</text>
        `)
      },
      {
        id: "g11_q5",
        competency: "modelleme",
        bridgeId: "bridge_log_seq",
        prompt: "Bir bakteri türünün sayısı her $3$ saatte bir $2$ katına çıkmaktadır. Başlangıçta $500$ bakteri bulunan bir kültürde $12$ saat sonra kaç bakteri olur?",
        spokenPrompt: "Bir bakteri türünün sayısı her 3 saatte bir 2 katına çıkmaktadır. Başlangıçta 500 bakteri bulunan bir kültürde 12 saat sonra kaç bakteri olur?",
        options: [
          { id: "a", text: "$4000$", correct: false, hint: "$12$ saatte $\\frac{12}{3} = 4$ kez iki katına çıkar; $2^3$ değil $2^4$ ile çarpmalısın.", spokenHint: "12 saatte 4 kez iki katına çıkar; 2 üssü 3 değil 2 üssü 4 ile çarp." },
          { id: "b", text: "$6000$", correct: false, hint: "Üstel büyüme doğrusal artış değildir; her $3$ saatte sayı $2$ ile çarpılır.", spokenHint: "Üstel büyüme doğrusal değildir; her adımda miktar 2 ile çarpılır." },
          { id: "c", text: "$8000$", correct: true, okMsg: "Doğru! $12$ saat içinde $4$ dönem geçer: $500 \\cdot 2^4 = 500 \\cdot 16 = 8000$ bakteri.", spokenOk: "Doğru! 12 saatte 4 kez iki katına çıktığı için 500 çarpı 16 eşittir 8000 bakteri olur." },
          { id: "d", text: "$16000$", correct: false, hint: "$2^4 = 16$ olduğundan $500 \\times 16 = 8000$ olur.", spokenHint: "2 üssü 4 eşittir 16 eder; 500 çarpı 16'yı tekrar kontrol et." }
        ],
        unsureMsg: "Model $N(t) = 500 \\cdot 2^{t/3}$ biçimindedir; $t = 12$ koyup üslü ifadeyi hesapla.",
        spokenUnsure: "Büyüme modeli 500 çarpı 2 üssü t bölü 3 şeklindedir; t yerine 12 koyarak hesapla.",
        renderSvg: () => svgFrame(112, "Üstel bakteri büyümesi grafiği", `
          <line x1="56" y1="90" x2="266" y2="90" stroke="#334155" stroke-width="2"/>
          <line x1="56" y1="16" x2="56" y2="90" stroke="#334155" stroke-width="2"/>
          <path d="M56,78 Q158,72 232,20" fill="none" stroke="#10B981" stroke-width="3"/>
          <circle cx="56" cy="78" r="4" fill="#047857"/>
          <text x="50" y="81" text-anchor="end" font-size="10" font-weight="800" fill="#065F46">500</text>
          <circle cx="222" cy="27" r="4.5" fill="#DC2626"/>
          <line x1="222" y1="27" x2="222" y2="90" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <text x="222" y="104" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">12 saat</text>
          <text x="200" y="26" text-anchor="end" font-size="11" font-weight="900" fill="#B91C1C">?</text>
          <text x="128" y="34" font-size="10" font-weight="800" fill="#047857">Her 3 saatte ×2</text>
        `)
      },
      {
        id: "g11_q6",
        competency: "modelleme",
        bridgeId: "bridge_ratio_pie",
        prompt: "Öğrencilerin haftalık çalışma süresi ($x$) ile deneme netleri ($y$) arasındaki saçılım grafiğinde, $x$ arttıkça noktaların sıkı biçimde yukarı doğru kümelendiği ve eğim doğrusunun sağa yukarı gittiği görülüyor. Bu iki değişken arasındaki ilişki için hangisi söylenebilir?",
        spokenPrompt: "Öğrencilerin haftalık çalışma süresi ile deneme netleri arasındaki saçılım grafiğinde çalışma süresi arttıkça noktaların sıkı biçimde yukarı doğru kümelendiği görülüyor. Bu iki değişken arasındaki ilişki için hangisi söylenebilir?",
        options: [
          { id: "a", text: "Negatif yönlü güçlü doğrusal ilişki vardır.", correct: false, hint: "Bir değişken artarken diğeri de artıyorsa yön pozitif olur.", spokenHint: "İki değişken aynı yönde arttığı için ilişki pozitif yönlüdür." },
          { id: "b", text: "Pozitif yönlü güçlü doğrusal ilişki vardır.", correct: true, okMsg: "Mükemmel! Noktaların bir doğru çevresinde sıkı toplanması güçlü ilişkiyi, sağa yukarı yönelim ise pozitif korelasyonu gösterir.", spokenOk: "Mükemmel! Noktaların doğru çevresinde sıkı toplanması güçlü, sağa yukarı eğilim ise pozitif yönlü ilişkiyi gösterir." },
          { id: "c", text: "İki değişken arasında ilişki yoktur.", correct: false, hint: "Noktalar rastgele dağılmamış, belirli bir çizgi etrafında toplanmıştır.", spokenHint: "Noktalar rastgele değil, düzenli bir eğilim doğrusunun çevresindedir." },
          { id: "d", text: "Çalışma süresi arttıkça netler düşmektedir.", correct: false, hint: "Sağa yukarı giden çizgi netlerin arttığını gösterir.", spokenHint: "Sağa yukarı giden çizgi değerlerin düştüğünü değil arttığını gösterir." }
        ],
        unsureMsg: "Saçılım grafiğinde noktalar dar bir bantta sağa yukarı gidiyorsa pozitif güçlü korelasyon vardır.",
        spokenUnsure: "Saçılım grafiğinde noktalar dar bir şeritte yukarı doğru uzanıyorsa pozitif güçlü ilişki vardır.",
        renderSvg: () => svgFrame(112, "İki nicel değişken saçılım grafiği", `
          <line x1="56" y1="90" x2="264" y2="90" stroke="#334155" stroke-width="2"/>
          <line x1="56" y1="16" x2="56" y2="90" stroke="#334155" stroke-width="2"/>
          <line x1="68" y1="82" x2="246" y2="24" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5 3"/>
          ${[[78, 76], [94, 73], [112, 65], [128, 63], [146, 55], [164, 51], [182, 43], [198, 41], [218, 32], [234, 28]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.8" fill="#2563EB"/>`).join("")}
          <text x="260" y="104" text-anchor="end" font-size="10" font-weight="700" fill="#475569">Çalışma (x)</text>
          <text x="64" y="22" font-size="10" font-weight="700" fill="#475569">Net (y)</text>
        `)
      }
    ],
    "12_okul": [
      {
        id: "g12o_q1",
        competency: "islem",
        bridgeId: "bridge_log_seq",
        prompt: "Bir $(a_n)$ aritmetik dizisinde $a_3 = 11$ ve $a_7 = 27$ olduğuna göre $a_{10}$ terimi kaçtır?",
        spokenPrompt: "Bir aritmetik dizide üçüncü terim 11 ve yedinci terim 27 olduğuna göre onuncu terim kaçtır?",
        options: [
          { id: "a", text: "$35$", correct: false, hint: "$a_{10} = a_7 + 3d$'dir; $d$'yi $a_7 - a_3 = 4d$'den bul.", spokenHint: "Onuncu terim yedinci terim artı 3 ortak farktır." },
          { id: "b", text: "$39$", correct: true, okMsg: "Doğru! $a_7 - a_3 = 4d = 16 \\implies d = 4$. Buradan $a_{10} = 27 + 3(4) = 39$.", spokenOk: "Doğru! 4 ortak fark 16 olduğundan ortak fark 4'tür. Onuncu terim 27 artı 12 eşittir 39 olur." },
          { id: "c", text: "$43$", correct: false, hint: "7. terimden 10. terime $4$ değil $3$ adım vardır.", spokenHint: "Yedinci terimden onuncu terime 3 adım gidilir." },
          { id: "d", text: "$47$", correct: false, hint: "Ortak fark $d = \\frac{27 - 11}{7 - 3} = 4$'tür.", spokenHint: "Ortak farkı 27 eksi 11 bölü 4 şeklinde doğru hesapla." }
        ],
        unsureMsg: "Aritmetik dizide $a_n - a_k = (n - k)d$ formülüyle önce ortak fark $d$'yi bul.",
        spokenUnsure: "Aritmetik dizide iki terim farkını indeks farkına bölerek önce ortak farkı bul.",
        renderSvg: () => svgFrame(100, "Aritmetik dizi adımları a3=11, a7=27, a10=?", `
          <rect x="24" y="28" width="76" height="40" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="62" y="53" text-anchor="middle" font-size="13" font-weight="900" fill="#1E40AF">a₃ = 11</text>
          <path d="M104 48 L124 48" stroke="#64748B" stroke-width="2" stroke-dasharray="3 2"/>
          <rect x="128" y="28" width="76" height="40" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
          <text x="166" y="53" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">a₇ = 27</text>
          <path d="M208 48 L228 48" stroke="#64748B" stroke-width="2" stroke-dasharray="3 2"/>
          <rect x="232" y="28" width="66" height="40" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="265" y="53" text-anchor="middle" font-size="13" font-weight="900" fill="#B45309">a₁₀ = ?</text>
          <text x="160" y="88" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Sabit ortak fark d ile ilerleyen dizi</text>
        `)
      },
      {
        id: "g12o_q2",
        competency: "islem",
        bridgeId: "bridge_limits_deriv",
        prompt: "$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ limitinin değeri kaçtır?",
        spokenPrompt: "x 3'e yaklaşırken x kare eksi 9 bölü x eksi 3 limitinin değeri kaçtır?",
        options: [
          { id: "a", text: "$0$", correct: false, hint: "$\\frac{0}{0}$ belirsizliğinde çarpanlara ayırma yapıp sadeleştirmelisin.", spokenHint: "Sıfır bölü sıfır belirsizliğinde payı çarpanlarına ayırıp sadeleştir." },
          { id: "b", text: "$3$", correct: false, hint: "$(x-3)$ sadeleşince geriye $x+3$ kalır; $x \\to 3$ için $3+3$ hesapla.", spokenHint: "Sadeleştirmeden sonra x artı 3 kalır; x yerine 3 koy." },
          { id: "c", text: "$6$", correct: true, okMsg: "Mükemmel! $\\frac{(x-3)(x+3)}{x-3}$ ifadesi $x \\ne 3$ için $x+3$'e eşittir; $x \\to 3$ için limit $3 + 3 = 6$ olur.", spokenOk: "Mükemmel! İki kare farkı sadeleşince x artı 3 kalır ve x 3'e yaklaşırken limit 6 olur." },
          { id: "d", text: "Tanımsızdır", correct: false, hint: "Fonksiyon $x=3$'te tanımsız olsa da $3$'e yaklaşırken limiti vardır.", spokenHint: "Bir noktada tanımsız olmak limitin olmadığı anlamına gelmez." }
        ],
        unsureMsg: "Payı $(x-3)(x+3)$ diye çarpanlarına ayırarak $0/0$ belirsizliğini ortadan kaldır.",
        spokenUnsure: "Payı iki kare farkıyla çarpanlarına ayırıp sadeleştirerek belirsizliği gider.",
        renderSvg: () => svgFrame(112, "x=3 noktasında boşluklu doğrunun limiti", `
          <line x1="54" y1="92" x2="266" y2="92" stroke="#334155" stroke-width="2"/>
          <line x1="78" y1="14" x2="78" y2="96" stroke="#334155" stroke-width="2"/>
          <line x1="84" y1="86" x2="236" y2="20" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="168" y1="49" x2="168" y2="92" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <line x1="78" y1="49" x2="168" y2="49" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <circle cx="168" cy="49" r="5" fill="#FFFFFF" stroke="#DC2626" stroke-width="2.5"/>
          <text x="168" y="105" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">3</text>
          <text x="70" y="53" text-anchor="end" font-size="12" font-weight="900" fill="#DC2626">L = ?</text>
        `)
      },
      {
        id: "g12o_q3",
        competency: "muhakeme",
        bridgeId: "bridge_trig",
        prompt: "$\\cos 75^\\circ \\cos 15^\\circ + \\sin 75^\\circ \\sin 15^\\circ$ ifadesinin değeri kaçtır?",
        spokenPrompt: "Kosinüs 75 kosinüs 15 artı sinüs 75 sinüs 15 ifadesinin değeri kaçtır?",
        options: [
          { id: "a", text: "$0$", correct: false, hint: "$\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$ özdeşliğini kullan.", spokenHint: "Kosinüs A eksi B açılımını hatırla." },
          { id: "b", text: "$\\frac{1}{2}$", correct: true, okMsg: "Harika! $\\cos(75^\\circ - 15^\\circ) = \\cos 60^\\circ = \\frac{1}{2}$ elde edilir.", spokenOk: "Harika! Bu ifade kosinüs 75 eksi 15 yani kosinüs 60 derecedir ve değeri ikide birdir." },
          { id: "c", text: "$\\frac{\\sqrt{3}}{2}$", correct: false, hint: "$\\cos 60^\\circ$ değerini $\\sin 60^\\circ$ veya $\\cos 30^\\circ$ ile karıştırma.", spokenHint: "Kosinüs 60 derece ile kosinüs 30 derecenin değerlerini karıştırma." },
          { id: "d", text: "$1$", correct: false, hint: "Kosinüs fark formülünde aradaki $+$ işareti açıların farkını alır.", spokenHint: "Açıların toplamı değil farkı alınmalıdır." }
        ],
        unsureMsg: "Kosinüsün toplam-fark formülünde arada $+$ varsa bu $\\cos(\\alpha - \\beta)$ açılımıdır.",
        spokenUnsure: "Kosinüs çarpımları toplamında arada artı varsa bu iki açının farkının kosinüsüdür.",
        renderSvg: () => svgFrame(100, "Trigonometrik toplam fark ifadesi", `
          <circle cx="64" cy="50" r="34" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <line x1="64" y1="50" x2="98" y2="50" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="64" y1="50" x2="73" y2="17" stroke="#2563EB" stroke-width="2"/>
          <line x1="64" y1="50" x2="96" y2="41" stroke="#D97706" stroke-width="2"/>
          <text x="86" y="25" font-size="9" font-weight="800" fill="#1E40AF">75°</text>
          <text x="84" y="45" font-size="9" font-weight="800" fill="#B45309">15°</text>
          <rect x="116" y="24" width="184" height="52" rx="10" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2"/>
          <text x="208" y="45" text-anchor="middle" font-size="11" font-weight="900" fill="#78350F">cos 75° cos 15° + sin 75° sin 15°</text>
          <text x="208" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#B45309">= ?</text>
        `)
      },
      {
        id: "g12o_q4",
        competency: "muhakeme",
        bridgeId: "bridge_limits_deriv",
        prompt: "$f(x) = x^3 - 3x^2 + 5$ fonksiyonunun **yerel minimum** değerini aldığı noktanın apsisi kaçtır?",
        spokenPrompt: "f(x) eşittir x küp eksi 3x kare artı 5 fonksiyonunun yerel minimum değerini aldığı noktanın apsisi kaçtır?",
        options: [
          { id: "a", text: "$0$", correct: false, hint: "$x=0$ noktasında türev $+$'dan $-$'ye geçtiğinden yerel maksimum vardır.", spokenHint: "x eşittir 0 noktasında yerel maksimum vardır; yerel minimum için diğer köke bak." },
          { id: "b", text: "$1$", correct: false, hint: "$1$ fonksiyonun yerel minimum değeri $f(2)=1$'dir; bize noktası (apsisi) soruluyor.", spokenHint: "1 değeri minimum yüksekliktir; bize bu değerin alındığı x apsisi soruluyor." },
          { id: "c", text: "$2$", correct: true, okMsg: "Doğru! $f'(x) = 3x^2 - 6x = 3x(x - 2) = 0$ kökleri $0$ ve $2$'dir. $x=2$'de türev $-$'den $+$'ya geçtiği için yerel minimum apsisi $2$'dir.", spokenOk: "Doğru! Türev 3x parantezinde x eksi 2'dir. İşaret tablosunda 2 noktasında azalanlıktan artanlığa geçildiği için yerel minimum apsisi 2'dir." },
          { id: "d", text: "$-2$", correct: false, hint: "$3x(x - 2) = 0$ denkleminin kökleri $0$ ve $+2$'dir.", spokenHint: "Türev denkleminin kökleri 0 ve artı 2'dir." }
        ],
        unsureMsg: "Birinci türev $f'(x)$'i sıfırlayan köklerde işaret tablosu çizerek $-$'den $+$'ya geçişi bul.",
        spokenUnsure: "Birinci türevin köklerini bulup işaret tablosunda eksiden artıya geçiş noktasını seç.",
        renderSvg: () => svgFrame(112, "Üçüncü derece fonksiyon yerel maksimum ve minimum noktaları", `
          <line x1="46" y1="84" x2="266" y2="84" stroke="#94A3B8" stroke-width="1.5"/>
          <path d="M56,94 C94,10 132,12 160,52 C188,88 218,74 244,14" fill="none" stroke="#4F46E5" stroke-width="2.5"/>
          <circle cx="110" cy="30" r="4" fill="#64748B"/>
          <circle cx="204" cy="70" r="5" fill="#DC2626"/>
          <line x1="204" y1="70" x2="204" y2="84" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3 2"/>
          <text x="110" y="21" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">yerel maks</text>
          <text x="204" y="99" text-anchor="middle" font-size="11" font-weight="900" fill="#B91C1C">x_min = ?</text>
        `)
      },
      {
        id: "g12o_q5",
        competency: "modelleme",
        bridgeId: "bridge_limits_deriv",
        prompt: "Doğrusal yolda hareket eden bir aracın $t$ saniyede aldığı yol $s(t) = t^3 + 2t^2 + 5$ metre olarak verilmiştir. Bu aracın $t = 2$. saniyedeki **anlık hızı** kaç $\\text{m/sn}$'dir?",
        spokenPrompt: "Bir aracın t saniyede aldığı yol t küp artı 2 t kare artı 5 metre olarak verilmiştir. Bu aracın 2. saniyedeki anlık hızı kaç metre bölü saniyedir?",
        options: [
          { id: "a", text: "$12$", correct: false, hint: "Türevdeki $+4t$ terimini $t=2$ için eklemeyi unutma.", spokenHint: "Türevdeki artı 4t terimini de hesaba katmalısın." },
          { id: "b", text: "$16$", correct: false, hint: "$3(2)^2 + 4(2) = 12 + 8$ işlemini tekrar hesapla.", spokenHint: "3 çarpı 2'nin karesi artı 4 çarpı 2 işlemini tekrar hesapla." },
          { id: "c", text: "$20$", correct: true, okMsg: "Süper! Hız, konumun zamana göre türevidir: $v(t) = s'(t) = 3t^2 + 4t$, buradan $v(2) = 12 + 8 = 20\\text{ m/sn}$.", spokenOk: "Süper! Anlık hız konum fonksiyonunun türevidir; türev 3 t kare artı 4 t bulunur ve t eşittir 2 için hız 20 olur." },
          { id: "d", text: "$21$", correct: false, hint: "$s(2) = 21$ aracın aldığı yoldur; hız için önce türev almalısın.", spokenHint: "21 değeri 2 saniyedeki konumdur; anlık hız için önce türev almalısın." }
        ],
        unsureMsg: "Anlık hız, konum-zaman fonksiyonunun türevidir: $v(t) = s'(t)$.",
        spokenUnsure: "Anlık hız, konum fonksiyonunun birinci türevidir.",
        renderSvg: () => svgFrame(108, "Konum-zaman eğrisi ve t=2'de anlık hız", `
          <line x1="56" y1="88" x2="262" y2="88" stroke="#334155" stroke-width="2"/>
          <line x1="56" y1="16" x2="56" y2="88" stroke="#334155" stroke-width="2"/>
          <path d="M56,82 Q158,76 232,16" fill="none" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="118" y1="74" x2="216" y2="20" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 2"/>
          <circle cx="166" cy="48" r="4.5" fill="#DC2626"/>
          <line x1="166" y1="48" x2="166" y2="88" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3 2"/>
          <text x="166" y="102" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">t = 2</text>
          <text x="225" y="42" font-size="11" font-weight="900" fill="#B45309">Anlık hız = ?</text>
        `)
      },
      {
        id: "g12o_q6",
        competency: "modelleme",
        bridgeId: "bridge_limits_deriv",
        prompt: "Koordinat düzleminde $y = 3x^2$ eğrisi, $x$-ekseni, $x = 0$ ve $x = 2$ doğruları arasında kalan kapalı bölgenin alanı kaç birimkaredir?",
        spokenPrompt: "Koordinat düzleminde y eşittir 3x kare eğrisi, x ekseni ile x eşittir 0 ve x eşittir 2 doğruları arasında kalan kapalı bölgenin alanı kaç birimkaredir?",
        options: [
          { id: "a", text: "$4$", correct: false, hint: "$\\int 3x^2\\,dx = x^3$'tür; $2$'nin küpünü almalısın.", spokenHint: "3x karenin integrali x küptür; 2'nin küpünü almalısın." },
          { id: "b", text: "$6$", correct: false, hint: "Türev değil integral ($\\int_0^2 3x^2\\,dx$) almalısın.", spokenHint: "Türev değil belirli integral almalısın." },
          { id: "c", text: "$8$", correct: true, okMsg: "Harika! Alan $= \\int_0^2 3x^2\\,dx = \\left[x^3\\right]_0^2 = 2^3 - 0^3 = 8\\text{ br}^2$.", spokenOk: "Harika! 3x karenin belirsiz integrali x küp olduğundan 0'dan 2'ye alan 2'nin küpü yani 8 birimkare bulunur." },
          { id: "d", text: "$12$", correct: false, hint: "Üçgensel yaklaşım yerine belirli integrali hesapla: $F(2) - F(0)$.", spokenHint: "Belirli integrali kullanarak F(2) eksi F(0) farkını hesapla." }
        ],
        unsureMsg: "$[0, 2]$ aralığında $x$-ekseninin üstünde kalan alan belirli integral $\\int_0^2 3x^2\\,dx$ ile bulunur.",
        spokenUnsure: "Eğri ile x ekseni arasındaki pozitif alanı 0'dan 2'ye belirli integral alarak bulabilirsin.",
        renderSvg: () => svgFrame(112, "y=3x² eğrisi altında [0,2] aralığındaki alan", `
          <line x1="64" y1="88" x2="262" y2="88" stroke="#334155" stroke-width="2"/>
          <line x1="76" y1="14" x2="76" y2="96" stroke="#334155" stroke-width="2"/>
          <path d="M76,88 Q152,86 196,20 L196,88 Z" fill="#BFDBFE" opacity="0.8"/>
          <path d="M76,88 Q152,86 206,10" fill="none" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="196" y1="20" x2="196" y2="88" stroke="#1D4ED8" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="196" y="102" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">2</text>
          <text x="72" y="102" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">0</text>
          <text x="155" y="75" text-anchor="middle" font-size="12" font-weight="900" fill="#1E40AF">Alan = ?</text>
        `)
      }
    ],
    "12_yks": [
      {
        id: "g12y_q1",
        competency: "islem",
        bridgeId: "bridge_factors",
        prompt: "**(TYT)** $a$ ve $b$ pozitif tam sayılar ve $a \\cdot b + 3a = 24$ olduğuna göre $a$'nın alabileceği **kaç farklı** değer vardır?",
        spokenPrompt: "T Y T sorusu: a ve b pozitif tam sayılar ve a çarpı b artı 3a eşittir 24 olduğuna göre a'nın alabileceği kaç farklı değer vardır?",
        options: [
          { id: "a", text: "$3$", correct: false, hint: "$a(b+3)=24$ yazdığında $b \\ge 1$ için $b+3 \\ge 4$ olan tüm $24$ bölenlerini say.", spokenHint: "a parantezinde b artı 3 eşittir 24 yazdığında b artı 3'ün 4 ve yukarısı olan tüm bölenlerini say." },
          { id: "b", text: "$4$", correct: false, hint: "$b+3 = 24$ ($b=21, a=1$) durumunu da unutma.", spokenHint: "b eşittir 21 ve a eşittir 1 durumunu da listeye ekle." },
          { id: "c", text: "$5$", correct: true, okMsg: "Mükemmel! $a(b + 3) = 24$ ve $b \\ge 1 \\implies b + 3 \\ge 4$'tür. $24$'ün $4$'ten büyük eşit bölenleri $4, 6, 8, 12, 24$ olduğundan $a$ sayısı $5$ farklı değer alır.", spokenOk: "Mükemmel! a parantezinde b artı 3 eşittir 24 yazılır. b artı 3 en az 4 olabileceğinden 24'ün 4, 6, 8, 12 ve 24 bölenlerine karşılık a 5 farklı değer alır." },
          { id: "d", text: "$8$", correct: false, hint: "$24$'ün tüm pozitif bölenleri $8$ tanedir ama $b$ pozitif tam sayı olduğu için $b+3 \\ge 4$ olmalıdır.", spokenHint: "24'ün 8 pozitif böleni vardır fakat b pozitif tam sayı olduğundan b artı 3 en az 4 olabilir." }
        ],
        unsureMsg: "İfadeyi $a$ ortak parantezine al: $a(b + 3) = 24$ ve $b$ pozitif olduğu için $b + 3 \\ge 4$ kısıtını uygula.",
        spokenUnsure: "İfadeyi a ortak parantezine alıp b'nin pozitif tam sayı olduğu kısıtını uygula.",
        renderSvg: () => svgFrame(100, "TYT temel kavramlar a(b+3)=24 denklemi", `
          <rect x="44" y="18" width="232" height="42" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="160" y="45" text-anchor="middle" font-size="16" font-weight="900" fill="#1E40AF">a · b + 3a = 24</text>
          <rect x="36" y="68" width="110" height="22" rx="8" fill="#F1F5F9" stroke="#64748B" stroke-width="1.5"/>
          <text x="91" y="83" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">a, b ∈ Z⁺ (pozitif)</text>
          <rect x="166" y="68" width="118" height="22" rx="8" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
          <text x="225" y="83" text-anchor="middle" font-size="10" font-weight="900" fill="#92400E">Kaç farklı a = ?</text>
        `)
      },
      {
        id: "g12y_q2",
        competency: "islem",
        bridgeId: "bridge_quadratics",
        prompt: "**(AYT)** $f(x) = x^2 - 6x + m + 2$ parabolü $x$-eksenine **teğet** olduğuna göre $m$ değeri kaçtır?",
        spokenPrompt: "A Y T sorusu: f(x) eşittir x kare eksi 6x artı m artı 2 parabolü x eksenine teğet olduğuna göre m değeri kaçtır?",
        options: [
          { id: "a", text: "$5$", correct: false, hint: "$\\Delta = b^2 - 4ac = (-6)^2 - 4(1)(m + 2) = 0$ denklemini tekrar çöz.", spokenHint: "Diskriminant formülünde sabit terimin m artı 2 olduğunu dikkate al." },
          { id: "b", text: "$7$", correct: true, okMsg: "Doğru! $x$-eksenine teğet olması için $\\Delta = 0$ olmalıdır: $36 - 4(m + 2) = 0 \\implies m + 2 = 9 \\implies m = 7$.", spokenOk: "Doğru! Parabol x eksenine teğet olduğundan diskriminant sıfıra eşitlenir ve m eşittir 7 bulunur." },
          { id: "c", text: "$9$", correct: false, hint: "$9$ sabit terim olan $m + 2$'nin tamamıdır; $m = 9 - 2$'dir.", spokenHint: "9 değeri m artı 2 toplamıdır; m için 2 çıkarmalısın." },
          { id: "d", text: "$11$", correct: false, hint: "Sabit terimi $m - 2$ değil $m + 2$ olarak almalısın.", spokenHint: "Sabit terimde toplama işaretini doğru kullan." }
        ],
        unsureMsg: "Parabolün $x$-eksenine teğet olması tam kare oluşmasına, yani $\\Delta = b^2 - 4ac = 0$ şartına denktir.",
        spokenUnsure: "Parabolün x eksenine teğet olması diskriminantın sıfıra eşit olması demektir.",
        renderSvg: () => svgFrame(112, "AYT x eksenine teğet parabol", `
          <line x1="46" y1="84" x2="266" y2="84" stroke="#334155" stroke-width="2"/>
          <line x1="78" y1="14" x2="78" y2="100" stroke="#94A3B8" stroke-width="1.5"/>
          <path d="M98,18 Q168,150 238,18" fill="none" stroke="#7C3AED" stroke-width="2.5"/>
          <circle cx="168" cy="84" r="4.5" fill="#DC2626"/>
          <text x="168" y="102" text-anchor="middle" font-size="10" font-weight="800" fill="#B91C1C">x eksenine teğet</text>
          <text x="234" y="42" text-anchor="middle" font-size="11" font-weight="900" fill="#5B21B6">m = ?</text>
        `)
      },
      {
        id: "g12y_q3",
        competency: "muhakeme",
        bridgeId: "bridge_log_seq",
        prompt: "**(AYT)** $a = \\log_3 20$, $b = \\log_2 12$ ve $c = \\log_3 100$ sayılarının küçükten büyüğe sıralaması hangisidir?",
        spokenPrompt: "A Y T sorusu: a eşittir 3 tabanında logaritma 20, b eşittir 2 tabanında logaritma 12 ve c eşittir 3 tabanında logaritma 100 sayılarının küçükten büyüğe sıralaması hangisidir?",
        options: [
          { id: "a", text: "$a \\lt b \\lt c$", correct: true, okMsg: "Süper! $3^2 \\lt 20 \\lt 3^3 \\implies 2 \\lt a \\lt 3$; $2^3 \\lt 12 \\lt 2^4 \\implies 3 \\lt b \\lt 4$; $3^4 \\lt 100 \\lt 3^5 \\implies 4 \\lt c \\lt 5$. Dolayısıyla $a \\lt b \\lt c$.", spokenOk: "Süper! a sayısı 2 ile 3 arasında, b sayısı 3 ile 4 arasında ve c sayısı 4 ile 5 arasındadır. Sıralama a küçüktür b küçüktür c şeklindedir." },
          { id: "b", text: "$b \\lt a \\lt c$", correct: false, hint: "İçindeki sayıları değil, tabanın kuvvetlerine göre değer aralıklarını karşılaştır.", spokenHint: "Logaritmanın içindeki sayıları değil, hangi tam sayı aralıklarına düştüklerini kıyasla." },
          { id: "c", text: "$a \\lt c \\lt b$", correct: false, hint: "$3^4 = 81 \\lt 100$ olduğundan $c$ sayısı $4$'ten büyüktür.", spokenHint: "3 üssü 4 eşittir 81 olduğu için c değeri 4'ten büyüktür." },
          { id: "d", text: "$c \\lt b \\lt a$", correct: false, hint: "En küçükten en büyüğe sıralamayı kontrol et.", spokenHint: "Küçükten büyüğe doğru sıralamanı kontrol et." }
        ],
        unsureMsg: "Her logaritmanın tabanının ardışık iki tam sayı kuvveti arasında hangi aralığa düştüğünü belirle.",
        spokenUnsure: "Her logaritmanın hangi iki tam sayı arasında kaldığını taban kuvvetleriyle belirle.",
        renderSvg: () => svgFrame(104, "Logaritmik sayıların aralık tahmini", `
          <rect x="20" y="16" width="84" height="32" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <rect x="118" y="16" width="84" height="32" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
          <rect x="216" y="16" width="84" height="32" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="62" y="37" text-anchor="middle" font-size="11" font-weight="900" fill="#1E40AF">a = log₃ 20</text>
          <text x="160" y="37" text-anchor="middle" font-size="11" font-weight="900" fill="#047857">b = log₂ 12</text>
          <text x="258" y="37" text-anchor="middle" font-size="11" font-weight="900" fill="#B45309">c = log₃ 100</text>
          <line x1="36" y1="74" x2="284" y2="74" stroke="#334155" stroke-width="2"/>
          ${[1, 2, 3, 4, 5].map((n, i) => {
            const x = 56 + i * 52;
            return `<line x1="${x}" y1="68" x2="${x}" y2="80" stroke="#334155" stroke-width="2"/><text x="${x}" y="94" text-anchor="middle" font-size="11" font-weight="800" fill="#0F172A">${n}</text>`;
          }).join("")}
        `)
      },
      {
        id: "g12y_q4",
        competency: "muhakeme",
        bridgeId: "bridge_limits_deriv",
        prompt: "**(AYT)** Gerçel sayılarda türevlenebilir $f(x)$ fonksiyonunun $x = 2$ apsisli noktasındaki teğeti $y = 4x - 3$ doğrusudur. Buna göre $g(x) = x^2 \\cdot f(x)$ fonksiyonu için $g'(2)$ kaçtır?",
        spokenPrompt: "A Y T sorusu: Türevlenebilir f(x) fonksiyonunun x eşittir 2 noktasındaki teğeti y eşittir 4x eksi 3 doğrusudur. Buna göre g(x) eşittir x kare çarpı f(x) fonksiyonunun 2'deki türevi g üssü 2 kaçtır?",
        options: [
          { id: "a", text: "$16$", correct: false, hint: "Çarpımın türevi $g'(x) = 2x \\cdot f(x) + x^2 \\cdot f'(x)$ formülünde iki terim vardır.", spokenHint: "Çarpımın türevinde her iki terimi de toplayarak hesapla." },
          { id: "b", text: "$20$", correct: false, hint: "$x^2 \\cdot f'(x)$ teriminden gelen $4 \\cdot 4 = 16$'yı eklemeyi unutma.", spokenHint: "İkinci terimden gelen 16'yı da toplamaya ekle." },
          { id: "c", text: "$32$", correct: false, hint: "$f(2)$ değeri teğet doğrusunda $x=2$ yazılarak $4(2)-3 = 5$ bulunur.", spokenHint: "f(2) değeri teğet doğrusu üzerinden 5 olarak bulunur." },
          { id: "d", text: "$36$", correct: true, okMsg: "Mükemmel! Teğet eğiminden $f'(2) = 4$, değme noktasından $f(2) = 4(2) - 3 = 5$ bulunur. $g'(2) = 2(2)f(2) + 2^2 f'(2) = 20 + 16 = 36$.", spokenOk: "Mükemmel! Teğet eğiminden türev 4, değme noktasından f(2) eşittir 5 bulunur. Çarpımın türevinden g üssü 2 eşittir 36 çıkar." }
        ],
        unsureMsg: "Teğet doğrunun eğimi $f'(2)$'yi, doğrunun $x=2$'deki değeri ise $f(2)$'yi verir; ardından çarpım türevi uygula.",
        spokenUnsure: "Teğet doğrusunun eğimi türevi, aynı noktadaki ordinatı ise fonksiyon değerini verir.",
        renderSvg: () => svgFrame(112, "f(x) fonksiyonunun x=2 noktasındaki teğet doğrusu", `
          <path d="M56,92 Q156,74 226,16" fill="none" stroke="#2563EB" stroke-width="2.5"/>
          <line x1="88" y1="88" x2="232" y2="26" stroke="#F59E0B" stroke-width="2"/>
          <circle cx="164" cy="55" r="4.5" fill="#DC2626"/>
          <text x="150" y="45" text-anchor="end" font-size="10" font-weight="900" fill="#B91C1C">x = 2</text>
          <text x="234" y="30" font-size="10" font-weight="800" fill="#B45309">y = 4x - 3</text>
          <rect x="30" y="16" width="132" height="32" rx="8" fill="#EEF2FF" stroke="#6366F1" stroke-width="1.5"/>
          <text x="96" y="36" text-anchor="middle" font-size="11" font-weight="900" fill="#312E81">g(x) = x² · f(x) → g'(2)=?</text>
        `)
      },
      {
        id: "g12y_q5",
        competency: "modelleme",
        bridgeId: "bridge_ratio_pie",
        prompt: "**(TYT)** Bir mağaza maliyetine $\\%25$ kâr koyarak belirlediği etiket fiyatı üzerinden sezon sonunda $\\%20$ indirim yapıyor. Son durumda mağazanın bu üründeki kâr-zarar oranı nedir?",
        spokenPrompt: "T Y T sorusu: Bir mağaza maliyetine yüzde 25 kâr koyarak belirlediği etiket fiyatı üzerinden sezon sonunda yüzde 20 indirim yapıyor. Son durumda bu üründeki kâr veya zarar oranı nedir?",
        options: [
          { id: "a", text: "Ne kâr ne zarar edilir ($\\%0$).", correct: true, okMsg: "Doğru! Maliyet $100\\text{ TL}$ seçilirse etiket $125\\text{ TL}$ olur; $\\%20$ indirimle $125 - 25 = 100\\text{ TL}$'ye satılır, yani ne kâr ne zarar edilir.", spokenOk: "Doğru! 100 liraya yüzde 25 zamla 125 lira olur; yüzde 20 indirim uygulayınca tekrar 100 liraya iner, yani ne kâr ne zarar edilir." },
          { id: "b", text: "$\\%5$ kâr edilir.", correct: false, hint: "İndirim ilk maliyetten değil, zamlı olan etiket fiyatından ($125$'ten) yapılır.", spokenHint: "İndirim maliyetten değil, artmış olan etiket fiyatından uygulanır." },
          { id: "c", text: "$\\%5$ zarar edilir.", correct: false, hint: "$125$'in $\\%20$'si tam olarak $25$'tir.", spokenHint: "125'in yüzde 20'si tam olarak 25 eder." },
          { id: "d", text: "$\\%4$ kâr edilir.", correct: false, hint: "$1{,}25 \\times 0{,}80$ çarpımını hesapla.", spokenHint: "1 tam yüzde 25 ile 0 tam onda 8'in çarpımını kontrol et." }
        ],
        unsureMsg: "Maliyete $100\\text{ TL}$ diyerek zam ve indirimi sırayla uygula.",
        spokenUnsure: "Maliyete 100 lira diyerek sırayla yüzde 25 artışı ve yüzde 20 indirimi uygula.",
        renderSvg: () => svgFrame(98, "Yüzde 25 kâr sonrası yüzde 20 indirim akışı", `
          <rect x="20" y="26" width="76" height="40" rx="10" fill="#F1F5F9" stroke="#64748B" stroke-width="2"/>
          <text x="58" y="50" text-anchor="middle" font-size="11" font-weight="900" fill="#0F172A">Maliyet</text>
          <path d="M100 46 L124 46" stroke="#10B981" stroke-width="2.5"/>
          <polygon points="122,41 131,46 122,51" fill="#10B981"/>
          <text x="115" y="36" text-anchor="middle" font-size="10" font-weight="900" fill="#047857">+%25</text>
          <rect x="134" y="26" width="66" height="40" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
          <text x="167" y="50" text-anchor="middle" font-size="11" font-weight="900" fill="#1E40AF">Etiket</text>
          <path d="M204 46 L228 46" stroke="#EF4444" stroke-width="2.5"/>
          <polygon points="226,41 235,46 226,51" fill="#EF4444"/>
          <text x="219" y="36" text-anchor="middle" font-size="10" font-weight="900" fill="#B91C1C">-%20</text>
          <rect x="238" y="26" width="64" height="40" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="270" y="50" text-anchor="middle" font-size="12" font-weight="900" fill="#B45309">Son = ?</text>
        `)
      },
      {
        id: "g12y_q6",
        competency: "modelleme",
        bridgeId: "bridge_limits_deriv",
        prompt: "**(AYT)** Şekilde $f(x)$ eğrisi ile $x$-ekseni arasında kalan taralı bölgelerin alanları $A_1 = 9\\text{ br}^2$ ve $A_2 = 4\\text{ br}^2$ olarak verilmiştir. Buna göre $\\int_{-1}^{5} f(x)\\,dx$ belirli integralinin değeri kaçtır?",
        spokenPrompt: "A Y T sorusu: Şekilde f(x) eğrisi ile x ekseni arasında x ekseninin üstünde kalan alan 9, altında kalan alan 4 birimkaredir. Buna göre eksi 1'den 5'e f(x) d x belirli integralinin değeri kaçtır?",
        options: [
          { id: "a", text: "$-5$", correct: false, hint: "$x$-ekseninin üstündeki alan integralde $+$ işaretlidir.", spokenHint: "x ekseninin üstündeki alan integrale pozitif işaretli katkı verir." },
          { id: "b", text: "$5$", correct: true, okMsg: "Mükemmel! $x$-ekseninin üstündeki bölge $+A_1 = +9$, altındaki bölge ise $-A_2 = -4$ katkı verir; toplam $\\int_{-1}^5 f(x)\\,dx = 9 - 4 = 5$.", spokenOk: "Mükemmel! Üstteki bölge artı 9, alttaki bölge eksi 4 katkı verdiğinden belirli integral 9 eksi 4 eşittir 5 olur." },
          { id: "c", text: "$13$", correct: false, hint: "Sorulan toplam alan değil belirli integraldir; $x$-ekseni altındaki bölge eksi işaretli alınır.", spokenHint: "Toplam alan değil belirli integral soruluyor; x ekseninin altındaki bölge negatif alınır." },
          { id: "d", text: "$36$", correct: false, hint: "Alanlar çarpılmaz, işaretli olarak toplanır.", spokenHint: "Alanları çarpmıyor, işaretlerine göre topluyoruz." }
        ],
        unsureMsg: "Belirli integralde $x$-ekseninin üstündeki alanlar pozitif, altındaki alanlar negatif katkı verir.",
        spokenUnsure: "Belirli integralde x ekseninin üstündeki alan artı, altındaki alan ise eksi işaretli olarak alınır.",
        renderSvg: () => svgFrame(112, "x ekseni üstünde A1=9 ve altında A2=4 alanlı eğri", `
          <line x1="36" y1="62" x2="284" y2="62" stroke="#334155" stroke-width="2"/>
          <path d="M56,62 Q112,-2 168,62 Z" fill="#86EFAC" opacity="0.75"/>
          <path d="M168,62 Q216,104 264,62 Z" fill="#FCA5A5" opacity="0.75"/>
          <path d="M46,72 Q112,-10 168,62 Q216,106 274,46" fill="none" stroke="#1E293B" stroke-width="2.5"/>
          <text x="56" y="76" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">-1</text>
          <text x="168" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">2</text>
          <text x="264" y="76" text-anchor="middle" font-size="10" font-weight="800" fill="#0F172A">5</text>
          <text x="112" y="45" text-anchor="middle" font-size="11" font-weight="900" fill="#14532D">A₁ = 9</text>
          <text x="216" y="78" text-anchor="middle" font-size="11" font-weight="900" fill="#991B1B">A₂ = 4</text>
        `)
      }
    ]
  };

  function makeUnit(spec) {
    const cover = spec.coverImage || "assets/flow/flow_sade_ders_konsept.jpg";
    const vis = spec.visuals || [cover, cover, cover];
    const [k1, k2, k3] = spec.k;
    const [s1, s2, s3, s4, s5, s6] = spec.s;
    const mkConcept = (id, kazanimId, d) => ({
      id,
      kazanimId,
      type: "concept",
      icon: "💡",
      roadLabel: "Keşif",
      typeLabel: "Örnek & Keşif",
      title: d.title,
      subtitle: d.subtitle,
      explanation: d.exp,
      sentenceHtml: d.sent,
      blanks: d.blanks.map((b, i) => ({ id: i, correct: b[0], choices: b[1] })),
      visualData: {
        title: d.vTitle,
        numbers: d.vNums.map(n => ({ val: n[0], note: n[1], prime: Boolean(n[2]) })),
        summary: d.vSum
      },
      hint: d.hint
    });
    const mkVideo = (id, kazanimId, d) => ({
      id,
      kazanimId,
      type: "video",
      icon: "🎬",
      roadLabel: "Anlatım",
      typeLabel: "Görsel Anlatım",
      title: d.title,
      subtitle: d.subtitle,
      videoScene: "custom_steps",
      steps: d.steps.map(text => ({ text })),
      quickQuestion: d.q,
      quickChoices: d.qc,
      quickCorrect: d.qa,
      hint: d.hint
    });
    const LETTERS = ["A", "B", "C", "D"];
    const mkQuestion = (id, kazanimId, d) => ({
      id,
      kazanimId,
      type: "question",
      icon: "❓",
      roadLabel: "Soru",
      typeLabel: "Kazanım Sorusu",
      title: d.title,
      subtitle: d.subtitle,
      stem: d.stem,
      options: d.opts.map((text, idx) => ({ letter: LETTERS[idx], text })),
      correctLetter: d.ans,
      hint: d.hint,
      solution: d.sol,
      badge: d.badge
    });
    return {
      id: `g${spec.track}_u${spec.no}`,
      grade: spec.grade,
      gradeTrack: spec.track,
      unitNo: spec.no,
      title: spec.title,
      subtitle: spec.subtitle,
      description: spec.desc,
      coverImage: cover,
      badgeCells: spec.cells,
      kazanimlar: [
        { id: "k1", no: 1, title: k1[0], code: k1[1], visual: vis[0] || cover, stops: [1, 2] },
        { id: "k2", no: 2, title: k2[0], code: k2[1], visual: vis[1] || cover, stops: [3, 4] },
        { id: "k3", no: 3, title: k3[0], code: k3[1], visual: vis[2] || cover, stops: [5, 6] }
      ],
      stops: [
        mkConcept(1, "k1", s1),
        mkVideo(2, "k1", s2),
        mkQuestion(3, "k2", s3),
        mkConcept(4, "k2", s4),
        mkVideo(5, "k3", s5),
        mkQuestion(6, "k3", s6)
      ]
    };
  }

  const unitsByTrack = {
    "1": [
      makeUnit({
        track: "1", grade: 1, no: 1,
        title: "Nesne ve Sayılar (0–20)",
        subtitle: "Rakamları Tanıma, Sayma ve Onluk-Birlik",
        desc: "0'dan 20'ye kadar sayıları tanır, onluk ve birlik bloklarla ayırır, sıra ve büyüklük karşılaştırması yaparız.",
        coverImage: "assets/flow/k1_carpan_bloklari.jpg",
        visuals: ["assets/flow/k1_carpan_bloklari.jpg", "assets/flow/flow_sade_ders_konsept.jpg", "assets/flow/u07_dogrusal_denklemler.jpg"],
        cells: ["0..9", "1 Onluk", "14", "17", "Önce", "Sonra", "Sıra", "Az", "Çok", "10+5", "20", "Sayılar"],
        k: [
          ["0–20 Arası Sayma ve Rakamlar", "MAT.1.1.1"],
          ["Onluk ve Birlik Yapısı", "MAT.1.1.2"],
          ["Sayıları Karşılaştırma ve Sıralama", "MAT.1.1.3"]
        ],
        s: [
          {
            title: "Onluk ve Birlik Nedir?", subtitle: "10 Tane Birlik = 1 Onluk",
            exp: ["$10$ tane tek blok bir araya geldiğinde $1$ tane uzun **onluk çubuk** oluşturur.", "Örneğin $14$ sayısında $1$ onluk ve $4$ tane tek birlik vardır: $14 = 10 + 4$."],
            sent: "Onluk ve birliklere ayırırken $17$ sayısı {0} onluk ve {1} birlikten oluşur.",
            blanks: [["1", ["1", "7", "10"]], ["7", ["1", "7", "17"]]],
            vTitle: "Onluk Çubuk ve Birlikler",
            vNums: [["10", "1 Onluk", 1], ["14", "1 Onluk + 4 Birlik", 0], ["19", "1 Onluk + 9 Birlik", 0], ["20", "2 Onluk", 1]],
            vSum: "Onluk çubuk sayma işini çok hızlandırır.",
            hint: "Sol basamak onluk sayısını, sağ basamak birlik sayısını gösterir."
          },
          {
            title: "Görsel Sayı Doğrusu", subtitle: "Önceki ve Sonraki Sayı",
            steps: ["Sayı doğrusunda sağa doğru gidildikçe sayılar $1$ artar.", "Örneğin $12$'nin hemen sağındaki komşusu $13$, solundaki komşusu $11$'dir.", "Sıfır ($0$) en başta yer alır ve hiç nesne olmadığını gösterir."],
            q: "$15$'ten bir önce ve bir sonra gelen sayılar hangileridir?",
            qc: ["13 ve 16", "14 ve 16", "14 ve 17"], qa: "14 ve 16",
            hint: "Bir öncesi $1$ eksik, bir sonrası $1$ fazladır."
          },
          {
            title: "Onluk-Birlik Bilmecesi", subtitle: "Modelden Sayıyı Bul",
            stem: "$1$ onluk ve $8$ birlikten oluşan sayı aşağıdakilerden hangisidir?",
            opts: ["$9$", "$17$", "$18$", "$81$"], ans: "C",
            hint: "Onlar basamağına $1$, birler basamağına $8$ yaz.",
            sol: "$1$ onluk $= 10$, $8$ birlik $= 8$ olduğundan $10 + 8 = 18$ olur.",
            badge: "Onluk Kaşifi"
          },
          {
            title: "Az ve Çok Karşılaştırması", subtitle: "Hangi Sepette Daha Çok Var?",
            exp: ["İki grubu karşılaştırırken önce $10$'ar gruplar sayılır; onluğu büyük olan sayı daha büyüktür.", "Onlukları aynıysa birlik sayısına bakılır: $16$ sayısı $13$'ten daha büyüktür."],
            sent: "$12$ ve $19$ sayıları karşılaştırıldığında en küçük sayı {0}, en büyük sayı {1} olur.",
            blanks: [["12", ["12", "15", "19"]], ["19", ["12", "17", "19"]]],
            vTitle: "Sayı Büyüklük Kartları",
            vNums: [["9", "Tek basamak", 0], ["12", "1 onluk 2 birlik", 0], ["19", "1 onluk 9 birlik", 1]],
            vSum: "Sağa doğru gittikçe sayı değeri büyür.",
            hint: "Birlik basamağı büyük olan iki basamaklı sayı daha çoktur."
          },
          {
            title: "Sıra Bildiren Sayılar", subtitle: "1., 2., 3. Yarışmacılar",
            steps: ["Yarışta ya da kuyrukta yer belirtirken sayının yanına nokta koyarız: $1.$, $2.$, $3.$", "Okurken birinci, ikinci, üçüncü diye söyleriz.", "Baştan sayma ile sondan sayma birbirinden farklı sıralar verebilir."],
            q: "Bir sırada baştan $4.$ olan öğrencinin önünde kaç kişi vardır?",
            qc: ["3", "4", "5"], qa: "3",
            hint: "$4.$ kişinin önünde $1., 2., 3.$ olmak üzere $3$ kişi vardır."
          },
          {
            title: "Sayı Sıralama Sorusu", subtitle: "Büyükten Küçüğe",
            stem: "$11$, $19$, $14$ sayılarının **küçükten büyüğe** doğru sıralanışı hangisidir?",
            opts: ["$11 - 14 - 19$", "$14 - 11 - 19$", "$19 - 14 - 11$", "$11 - 19 - 14$"], ans: "A",
            hint: "En az birlikten en çok birliğe doğru sırala.",
            sol: "Üç sayının da onluğu $1$'dir; birlikleri $1 \\lt 4 \\lt 9$ olduğundan doğru sıra $11 - 14 - 19$'dur.",
            badge: "Sayı Sıralayıcı"
          }
        ]
      }),
      makeUnit({
        track: "1", grade: 1, no: 2,
        title: "Toplama ve Çıkarma İşlemleri",
        subtitle: "20 İçinde İleri-Geri Sayma ve Eşitlik",
        desc: "Nesne gruplarını birleştirerek toplama, eksilterek çıkarma yapar ve eşitliğin (=) denge anlamını kavrarız.",
        coverImage: "assets/flow/flow_sade_ders_konsept.jpg",
        cells: ["+", "-", "=", "10 Tamamla", "8+5", "16-4", "Zihinden", "Eşit", "Fark", "Toplam", "Denge", "İşlem"],
        k: [
          ["Toplama ve 10'a Tamamlama", "MAT.1.1.4"],
          ["Geriye Sayarak Çıkarma", "MAT.1.1.5"],
          ["Eşitlik (=) ve Bilinmeyen Toplanan", "MAT.1.2.1"]
        ],
        s: [
          {
            title: "10'a Tamamlayarak Toplama", subtitle: "Pratik Toplama Stratejisi",
            exp: ["$8 + 5$ gibi işlemlerde önce $8$'i $10$'a tamamlarız: $8 + 2 = 10$.", "$5$'ten geriye kalan $3$'ü de $10$'un üzerine ekleriz: $10 + 3 = 13$."],
            sent: "$9 + 6$ işleminde $9$'u $10$'a tamamlamak için {0} ekleriz, toplam {1} olur.",
            blanks: [["1", ["1", "2", "3"]], ["15", ["14", "15", "16"]]],
            vTitle: "10'lu Çerçeve Stratejisi",
            vNums: [["9 + 1", "Onluk tamamla", 1], ["+ 5", "Kalan eklenir", 0], ["15", "Sonuç", 1]],
            vSum: "Önce $10$ yapmak zihinden toplamayı çok kolaylaştırır.",
            hint: "$9$'un $10$ olmasına yalnızca $1$ gerekir."
          },
          {
            title: "Geriye Sayarak Çıkarma", subtitle: "Azalma ve Fark Bulma",
            steps: ["Çıkarma işleminde büyük sayıdan küçük sayı kadar geriye sayarız.", "Örneğin $14 - 5$ işleminde $14$'ten $5$ adım geri gideriz: $13, 12, 11, 10, 9$.", "Sonuç $9$'dur ve kontrol etmek için $9 + 5 = 14$ yapabiliriz."],
            q: "$17 - 8$ işleminin sonucu kaçtır?",
            qc: ["8", "9", "10"], qa: "9",
            hint: "$8$'e kaç eklersek $17$ olur diye düşünebilirsin."
          },
          {
            title: "Kuş Yuvası Problemi", subtitle: "Toplama ve Çıkarma Birlikte",
            stem: "Ağaçta $7$ kuş vardı. Önce $6$ kuş daha geldi, ardından $4$ kuş uçtu. Ağaçta kaç kuş kaldı?",
            opts: ["$8$", "$9$", "$10$", "$13$"], ans: "B",
            hint: "Önce $7 + 6$ ile toplam kuş sayısını bul, sonra $4$ çıkar.",
            sol: "$7 + 6 = 13$ kuş oldu. $4$ kuş uçunca $13 - 4 = 9$ kuş kaldı.",
            badge: "İşlem Ustası"
          },
          {
            title: "Eşittir (=) İşareti Dengedir", subtitle: "İki Kefenin Eşitliği",
            exp: ["$=$ işareti sadece sonuç demek değil, sol taraf ile sağ tarafın **aynı değerde** olması demektir.", "Örneğin $6 + 4 = 7 + 3$ ifadesinin her iki tarafı da $10$ eder."],
            sent: "$8 + 4 = 10 + \\square$ eşitliğinin sağlanması için sol taraf {0}, $\\square$ kutusu {1} olmalıdır.",
            blanks: [["12", ["10", "12", "14"]], ["2", ["2", "4", "8"]]],
            vTitle: "Eşitlik Terazisi",
            vNums: [["8 + 4", "Sol kefe = 12", 1], ["=", "Dengede", 0], ["10 + 2", "Sağ kefe = 12", 1]],
            vSum: "Terazinin iki tarafı eşit değerde olduğunda denge kurulur.",
            hint: "Sol taraf $12$ olduğuna göre $10$'a kaç eklersek $12$ olur?"
          },
          {
            title: "Toplama-Çıkarma Ailesi", subtitle: "Ters İşlem Kontrolü",
            steps: ["$5 + 8 = 13$ toplamasından iki çıkarma işlemi doğar: $13 - 8 = 5$ ve $13 - 5 = 8$.", "Bir toplama işleminde verilmeyen toplananı bulmak için toplamdan verilen toplananı çıkarırız.", "Örneğin $\\square + 6 = 15$ ise $\\square = 15 - 6 = 9$ olur."],
            q: "$\\square + 7 = 16$ işleminde $\\square$ yerine hangi sayı gelmelidir?",
            qc: ["8", "9", "10"], qa: "9",
            hint: "$16$'dan $7$ çıkararak verilmeyen sayıyı bul."
          },
          {
            title: "Terazi Denge Sorusu", subtitle: "Verilmeyeni Bulma",
            stem: "$9 + 5 = \\triangle + 8$ eşitliğini doğru yapan $\\triangle$ sayısı kaçtır?",
            opts: ["$4$", "$5$", "$6$", "$7$"], ans: "C",
            hint: "Önce $9 + 5$ toplamını bul, sonra $8$ ile neyi toplarsan aynı sonucu vereceğini düşün.",
            sol: "Sol taraf $9 + 5 = 14$'tür. Sağ tarafın da $14$ olması için $\\triangle = 14 - 8 = 6$ olur.",
            badge: "Denge Kahramanı"
          }
        ]
      }),
      makeUnit({
        track: "1", grade: 1, no: 3,
        title: "Bütün, Yarım ve Örüntüler",
        subtitle: "Eş Parçalar ve Tekrar Eden Kurallar",
        desc: "Bir bütünü iki eş yarıma böler, sayı ve şekil örüntülerindeki tekrar kuralını keşfederiz.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Bütün", "Yarım", "2 Yarım", "Örüntü", "Kural", "A-B-A-B", "+2", "+5", "Eşit", "Parça", "Adım", "Tahmin"],
        k: [
          ["Bütün ve Yarım İlişkisi", "MAT.1.1.6"],
          ["Şekil Örüntülerinde Kural", "MAT.1.2.2"],
          ["Sayı Örüntüsünü Sürdürme", "MAT.1.2.3"]
        ],
        s: [
          {
            title: "Bütün mü, Yarım mı?", subtitle: "Tam İki Eş Parça",
            exp: ["Hiç bölünmemiş tam nesneye **bütün** denir.", "Bir bütün ortadan tam iki **eş** parçaya bölünürse her parçaya **yarım** denir; $1$ bütün $= 2$ yarımdır."],
            sent: "$1$ bütün ekmek iki eş parçaya bölününce {0} yarım oluşur; $4$ yarım ise {1} bütün eder.",
            blanks: [["2", ["1", "2", "4"]], ["2", ["1", "2", "4"]]],
            vTitle: "Bütün ve Yarım Eşlemesi",
            vNums: [["1 Bütün", "Tam parça", 1], ["2 Yarım", "1 bütüne eşit", 0], ["6 Yarım", "3 bütüne eşit", 1]],
            vSum: "Yarımları ikişer ikişer birleştirerek bütün sayısını buluruz.",
            hint: "Her $2$ yarım elma birleşince $1$ tam elma olur."
          },
          {
            title: "Şekil Örüntülerini Okuma", subtitle: "Tekrar Eden Çekirdek",
            steps: ["Örüntü, belirli bir kurala göre art arda dizilen şekillerdir.", "Örneğin: Kare - Üçgen - Kare - Üçgen dizisinde tekrar eden kural **(Kare, Üçgen)** ikilisidir.", "Eksik adımı bulmak için diziyi baştan ritmik şekilde okuruz."],
            q: "Yıldız - Kalp - Kalp - Yıldız - Kalp - Kalp - Yıldız - ? örüntüsünde ? yerine ne gelir?",
            qc: ["Yıldız", "Kalp", "Kare"], qa: "Kalp",
            hint: "Her Yıldız şeklinden sonra $2$ tane Kalp geliyor."
          },
          {
            title: "Yarım Elma Sorusu", subtitle: "Yarımdan Bütüne",
            stem: "Tabakta $3$ tam elma ve $4$ yarım elma vardır. Tabaktaki elmalar toplam **kaç bütün elma** eder?",
            opts: ["$4$", "$5$", "$6$", "$7$"], ans: "B",
            hint: "Önce $4$ yarım elmanın kaç tam elma ettiğini bul, sonra $3$'e ekle.",
            sol: "$4$ yarım elma $= 2$ bütün elma yapar. $3 + 2 = 5$ bütün elma eder.",
            badge: "Kesir Kaşifi"
          },
          {
            title: "Ritmik Sayma Örüntüsü", subtitle: "İkişer ve Beşer Artış",
            exp: ["Sayı örüntülerinde sayılar sabit bir miktarda artabilir veya azalabilir.", "$2, 4, 6, 8, \\dots$ dizisinde her adımda $+2$; $5, 10, 15, \\dots$ dizisinde $+5$ kuralı vardır."],
            sent: "$4, 6, 8, \\square, 12$ örüntüsünde kural her adımda {0} artmaktır; bu nedenle $\\square = $ {1} olur.",
            blanks: [["2", ["1", "2", "3"]], ["10", ["9", "10", "11"]]],
            vTitle: "Ritmik Örüntü Basamakları",
            vNums: [["4 → 6", "+2 artış", 0], ["6 → 8", "+2 artış", 0], ["8 → 10", "Kural devamı", 1]],
            vSum: "Ardışık terimler arasındaki fark hep aynıdır.",
            hint: "$8$'in üzerine $2$ sayarak sıradaki sayıyı bul."
          },
          {
            title: "Geriye Doğru Örüntü", subtitle: "Azalan Sayılar",
            steps: ["Örüntüler sadece artmaz, aynı miktarda azalarak da ilerleyebilir.", "Örneğin $20, 18, 16, 14, \\dots$ dizisi her adımda $2$ azalır.", "Kuralı bulmak için yan yana iki sayının farkına bakarız."],
            q: "$19, 16, 13, 10, \\square$ örüntüsünde $\\square$ sayısı kaçtır?",
            qc: ["7", "8", "9"], qa: "7",
            hint: "Her adımda sayılar $3$ azalıyor: $10 - 3$ işlemini yap."
          },
          {
            title: "Örüntü Tamamlama Sorusu", subtitle: "Kuralı Keşfet",
            stem: "$3, 7, 11, \\square, 19$ sayı örüntüsünde $\\square$ yerine yazılması gereken sayı kaçtır?",
            opts: ["$13$", "$14$", "$15$", "$16$"], ans: "C",
            hint: "$3$'ten $7$'ye geçerken kaçar arttığını say.",
            sol: "Her adımda sayı $4$ artmaktadır ($3+4=7$, $7+4=11$). $11 + 4 = 15$ ve $15 + 4 = 19$ sağlanır.",
            badge: "Örüntü Dedektifi"
          }
        ]
      }),
      makeUnit({
        track: "1", grade: 1, no: 4,
        title: "Geometrik Şekiller ve Cisimler",
        subtitle: "Kenar, Köşe ve Üç Boyutlu Cisimler",
        desc: "Düzlemsel şekillerin kenar-köşe özelliklerini ve günlük hayattaki küp, silindir, koni, küre cisimlerini tanırız.",
        coverImage: "assets/flow/u12_geometrik_cisimler.jpg",
        cells: ["Kare", "Üçgen", "Dikdörtgen", "Çember", "Köşe", "Kenar", "Küp", "Küre", "Silindir", "Koni", "Yuvarlanır", "Düz"],
        k: [
          ["Temel Düzlemsel Şekiller", "MAT.1.3.1"],
          ["Kenar ve Köşe Özellikleri", "MAT.1.3.2"],
          ["Geometrik Cisimleri Sınıflama", "MAT.1.3.3"]
        ],
        s: [
          {
            title: "Dört Temel Şekil", subtitle: "Üçgen, Kare, Dikdörtgen, Çember",
            exp: ["**Üçgenin** $3$ kenarı ve $3$ köşesi; **kare** ile **dikdörtgenin** ise $4$ kenarı ve $4$ köşesi vardır.", "**Çemberin** hiç düz kenarı ve sivri köşesi yoktur; tekerlek gibi yuvarlaktır."],
            sent: "Kare ile dikdörtgenin ikisinin de {0} köşesi vardır; sadece karenin dört kenarı da {1} uzunluktadır.",
            blanks: [["4", ["3", "4", "5"]], ["eşit", ["eşit", "farklı", "eğri"]]],
            vTitle: "Şekillerin Özellik Tablosu",
            vNums: [["Üçgen", "3 kenar, 3 köşe", 0], ["Kare", "4 eşit kenar", 1], ["Çember", "0 kenar, 0 köşe", 0]],
            vSum: "Kenar ve köşe sayısı her şeklin kimliğini verir.",
            hint: "Kare özel bir dörtgendir ve her kenarı aynı boydadır."
          },
          {
            title: "Cisimleri Tanıyalım", subtitle: "Küp, Silindir, Koni, Küre",
            steps: ["Zeka küpü ve zar **küp** şeklindedir; tüm yüzleri düzdür.", "Top ve portakal **küre** şeklindedir; her yöne yuvarlanır.", "Konserve kutusu **silindir**, parti şapkası ise **koni** biçimindedir."],
            q: "Aşağıdaki nesnelerden hangisi hem düz tabanlıdır hem de yan yatınca yuvarlanır?",
            qc: ["Zar (Küp)", "Pil (Silindir)", "Futbol Topu (Küre)"], qa: "Pil (Silindir)",
            hint: "Silindirin alt ve üst yüzleri dairedir, yan yüzeyi yuvarlanır."
          },
          {
            title: "Şekiller Toplamı Sorusu", subtitle: "Kenar Sayısı Hesaplama",
            stem: "$2$ tane üçgen ile $1$ tane çemberin toplam **köşe sayısı** kaçtır?",
            opts: ["$3$", "$4$", "$6$", "$7$"], ans: "C",
            hint: "Çemberin kaç köşesi olduğunu unutma.",
            sol: "Her üçgenin $3$ köşesi ($2 \\times 3 = 6$) vardır. Çemberin $0$ köşesi olduğu için toplam $6 + 0 = 6$ köşe eder.",
            badge: "Geometri Dostu"
          },
          {
            title: "Yuvarlanan ve Düz Cisimler", subtitle: "Benzerlik ve Farklılık",
            exp: ["**Küp** ve **prizma** düz yüzlerden oluştuğu için kayar ama yuvarlanmaz.", "**Küre** tamamen eğri yüzeylidir; **silindir** ve **koni** ise eğri yüzeye ek olarak düz daire tabana sahiptir."],
            sent: "Oyun hamuruyla yapılmış bir **küre**nin köşesi {0}; bir **küp**ün ise tüm yüzleri {1} şeklindedir.",
            blanks: [["yoktur", ["yoktur", "4 tanedir", "8 tanedir"]], ["kare", ["kare", "daire", "üçgen"]]],
            vTitle: "Cisim Özellikleri",
            vNums: [["Küp", "Yuvarlanmaz, kayar", 1], ["Küre", "Her yöne yuvarlanır", 0], ["Koni", "1 sivri tepe noktası", 0]],
            vSum: "Yuvarlanma özelliği eğri yüzeylerden gelir.",
            hint: "Zar gibi küplerin her yüzü birbirine eş karedir."
          },
          {
            title: "Şekilleri Birleştirme", subtitle: "Yeni Şekiller Oluşturma",
            steps: ["İki eş dik üçgen yan yana getirildiğinde bir dikdörtgen veya kare oluşabilir.", "İki kare uç uca eklendiğinde bir dikdörtgen elde edilir.", "Şekilleri döndürsek bile kenar ve köşe sayıları değişmez."],
            q: "İki eş kare yan yana birleştirilirse hangi şekil oluşur?",
            qc: ["Üçgen", "Dikdörtgen", "Çember"], qa: "Dikdörtgen",
            hint: "Uzun kenarı kısa kenarının $2$ katı olan şekli düşün."
          },
          {
            title: "Cisim Seçme Sorusu", subtitle: "Günlük Yaşam Eşleşmesi",
            stem: "Yalnızca **düz yüzeylerden** oluşan ve hiç yuvarlanmayan geometrik cisim hangisidir?",
            opts: ["Küre", "Silindir", "Koni", "Küp"], ans: "D",
            hint: "Bütün yüzleri kare olan şekli seç.",
            sol: "Küre, silindir ve koninin eğri yüzeyleri vardır. Küpün ise yalnızca $6$ düz kare yüzü bulunur ve yuvarlanmaz.",
            badge: "Cisim Mimarı"
          }
        ]
      }),
      makeUnit({
        track: "1", grade: 1, no: 5,
        title: "Uzamsal İlişkiler ve Ölçme",
        subtitle: "Yön, Standart Olmayan Uzunluk, Saat ve Para",
        desc: "Konum ifadelerini kullanır, karış-adım ile ölçme yapar, tam-yarım saatleri ve madeni-kağıt paralarımızı tanırız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Sağ", "Sol", "Karış", "Adım", "Tam Saat", "Yarım Saat", "1 TL", "5 TL", "10 TL", "20 TL", "Konum", "Ölçme"],
        k: [
          ["Konum ve Doğal Ölçü Birimleri", "MAT.1.3.4"],
          ["Tam ve Yarım Saatleri Okuma", "MAT.1.4.1"],
          ["Paralarımızla Hesaplama", "MAT.1.4.2"]
        ],
        s: [
          {
            title: "Karış, Parmak ve Adım", subtitle: "Standart Olmayan Ölçme",
            exp: ["Masayı **karış**, sınıfı **adım**, kalemi ise **parmak** ile ölçebiliriz.", "Herkesin eli ve adımı farklı boyda olduğu için farklı kişiler aynı masayı farklı sayıda karış ölçebilir."],
            sent: "Ali'nin eli Ela'nın elinden büyükse, aynı masayı Ali daha {0} karış, Ela ise daha {1} karış ölçer.",
            blanks: [["az", ["az", "çok", "aynı"]], ["çok", ["az", "çok", "sıfır"]]],
            vTitle: "Ölçü Aracı ve Sonuç İlişkisi",
            vNums: [["Büyük karış", "Az sayı çıkar", 1], ["Küçük karış", "Çok sayı çıkar", 0], ["Adım", "Uzun mesafe ölçer", 0]],
            vSum: "Ölçü birimi büyüdükçe ölçüm sayısı küçülür.",
            hint: "Adımın büyükse odayı daha az adımda geçersin!"
          },
          {
            title: "Saati Okuyalım", subtitle: "Akrep ve Yelkovan",
            steps: ["Kısa ibre olan **akrep** saati, uzun ibre olan **yelkovan** dakikayı gösterir.", "Yelkovan $12$'nin üzerindeyse **tam saat**tir (örneğin saat $04.00$).", "Yelkovan $6$'nın üzerindeyse **yarım (buçuk) saat**tir; akrep iki sayının tam ortasındadır."],
            q: "Yelkovan $6$'yı gösterirken akrep $7$ ile $8$'in tam ortasındaysa saat kaçtır?",
            qc: ["07.00", "07.30", "08.30"], qa: "07.30",
            hint: "Akrep $7$'yi geçmiş ama henüz $8$'e ulaşmamıştır."
          },
          {
            title: "Saat Hesabı Sorusu", subtitle: "Zaman İlerlemesi",
            stem: "Saat $09.00$'da başlayan çizgi film $2$ saat sürdüğüne göre bittiğinde saat kaç olur?",
            opts: ["$10.00$", "$11.00$", "$11.30$", "$12.00$"], ans: "B",
            hint: "$9$'un üzerine $2$ saat ileri say.",
            sol: "$9 + 2 = 11$ olduğundan çizgi film saat $11.00$'da biter.",
            badge: "Zaman Bekçisi"
          },
          {
            title: "Paralarımızı Tanıyalım", subtitle: "TL Cinsinden Alışveriş",
            exp: ["Günlük alışverişlerde $1\\text{ TL}$, $5\\text{ TL}$, $10\\text{ TL}$ ve $20\\text{ TL}$ gibi paralar kullanırız.", "Örneğin $15\\text{ TL}$ elde etmek için bir $10\\text{ TL}$ ve bir $5\\text{ TL}$ kullanabiliriz."],
            sent: "İki tane $5\\text{ TL}$'nin toplamı {0} TL eder; $20\\text{ TL}$ ile $12\\text{ TL}$'lik kalem alırsak {1} TL para üstü alırız.",
            blanks: [["10", ["5", "10", "15"]], ["8", ["7", "8", "10"]]],
            vTitle: "Para Değerleri",
            vNums: [["5 TL + 5 TL", "= 10 TL", 0], ["10 TL + 10 TL", "= 20 TL", 1], ["20 - 12", "= 8 TL üst", 0]],
            vSum: "Para üstü = Verilen para - Ürün fiyatı.",
            hint: "$12$'den $20$'ye kaç sayı olduğunu sayarak kontrol edebilirsin."
          },
          {
            title: "Altında, Üstünde, Arasında", subtitle: "Uzamsal Konumlar",
            steps: ["Bir nesnenin nerede olduğunu tarif etmek için sağında, solunda, önünde, arkasında sözcüklerini kullanırız.", "Rafın en üstünde kitap, ortasında saat, altında top varsa saat kitap ile topun **arasındadır**.", "Sol ve sağ yönleri kimin baktığına göre dikkatle belirlenir."],
            q: "Masadaki tabak bardağın solunda ise, bardak tabağın neresindedir?",
            qc: ["Solunda", "Sağında", "Altında"], qa: "Sağında",
            hint: "Tabak soldaysa bardak tam tersi tarafta, yani sağdadır."
          },
          {
            title: "Kırtasiye Alışverişi", subtitle: "Toplam Fiyat ve Para Üstü",
            stem: "Efe, $7\\text{ TL}$'ye defter ve $6\\text{ TL}$'ye silgi aldı. Satıcıya $20\\text{ TL}$ verdiğine göre kaç TL para üstü almalıdır?",
            opts: ["$6\\text{ TL}$", "$7\\text{ TL}$", "$8\\text{ TL}$", "$13\\text{ TL}$"], ans: "B",
            hint: "Önce $7 + 6$ ile toplam tutarı bul, sonra $20$'den çıkar.",
            sol: "Toplam harcama $7 + 6 = 13\\text{ TL}$. Para üstü $20 - 13 = 7\\text{ TL}$ olur.",
            badge: "Bilinçli Alıcı"
          }
        ]
      }),
      makeUnit({
        track: "1", grade: 1, no: 6,
        title: "Veri Toplama ve Çetele Tablosu",
        subtitle: "Sınıflandırma, Çetele ve Nesne Grafiği",
        desc: "Nesneleri özelliklerine göre gruplar, çetele çizgileriyle sayar ve nesne grafiğinden yorum çıkarırız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Veri", "Grup", "Çetele", "5'li Bağ", "Grafik", "En Çok", "En Az", "Toplam", "Fark", "Anket", "Tablo", "Sonuç"],
        k: [
          ["Nesneleri Sınıflandırma", "MAT.1.5.1"],
          ["Çetele Tablosu Okuma", "MAT.1.5.2"],
          ["Nesne Grafiği Yorumlama", "MAT.1.5.3"]
        ],
        s: [
          {
            title: "Veri ve Çetele Çizgileri", subtitle: "Beşli Demetlerle Sayma",
            exp: ["Anket veya gözlemle topladığımız bilgilere **veri** denir.", "Çetele tablosunda her nesne için bir çizgi (`|`) atar, beşinci çizgiyi dört çizginin üzerine yatay (`卌`) çizerek $5$'li grup yaparız."],
            sent: "İki tane beşli çetele grubu ile $3$ tek çizgi yan yana ise toplam sayı {0} olur; sadece {1} çizgi eksik olsaydı $10$ olurdu.",
            blanks: [["13", ["10", "13", "15"]], ["3", ["2", "3", "5"]]],
            vTitle: "Çetele Sayımı",
            vNums: [["||||", "4 adet", 0], ["5'li grup", "1 tam demet", 1], ["5+5+3", "= 13 adet", 0]],
            vSum: "Beşli gruplar halinde saymak hatayı önler.",
            hint: "$5 + 5 + 3 = 13$ ve tek çizgi sayısı $3$'tür."
          },
          {
            title: "Nesne Grafiği Okuma", subtitle: "Görsel Sayıları Yorumlama",
            steps: ["Nesne grafiğinde her resim veya sembol genelde $1$ nesneyi gösterir.", "Hangi satırda daha çok resim varsa o seçenek **en çok** tercih edilendir.", "İki seçenek arasındaki farkı bulmak için büyük sayıdan küçük sayıyı çıkarırız."],
            q: "Grafikte Elma satırında $8$, Armut satırında $5$ resim varsa Elma sevenler Armut sevenlerden kaç fazladır?",
            qc: ["2", "3", "13"], qa: "3",
            hint: "Fark bulmak için $8 - 5$ işlemini yap."
          },
          {
            title: "Sınıf Meyve Anketi", subtitle: "Tablodan Toplam Bulma",
            stem: "1-A sınıfında en sevilen mevsimler sorulmuş: İlkbahar $6$, Yaz $9$, Sonbahar $2$, Kış $3$ kişi çıkmıştır. Ankete toplam **kaç kişi** katılmıştır?",
            opts: ["$17$", "$19$", "$20$", "$21$"], ans: "C",
            hint: "Dört mevsimdeki sayıları sırayla topla: $6 + 9 + 2 + 3$.",
            sol: "$6 + 9 = 15$, $15 + 2 = 17$, $17 + 3 = 20$ öğrenci katılmıştır.",
            badge: "Veri Toplayıcı"
          },
          {
            title: "En Az ve En Çok Karşılaştırması", subtitle: "Tablodan Yargı Çıkarma",
            exp: ["Veri tablosu sayesinde en sevilen ve en az sevilen seçenekleri tek bakışta görebiliriz.", "Ayrıca en çok ve en az arasındaki fark, dağılımın ne kadar dengeli olduğunu anlatır."],
            sent: "Kedi ($11$) ve Kuş ($6$) verileri karşılaştırıldığında en çok sevilen {0} olur; ikisinin arasındaki fark ise {1} tanedir.",
            blanks: [["Kedi", ["Kedi", "Kuş", "Eşit"]], ["5", ["4", "5", "6"]]],
            vTitle: "Karşılaştırma Özeti",
            vNums: [["11", "Kedi (En çok)", 1], ["6", "Kuş (Daha az)", 0], ["11 - 6", "Fark = 5", 0]],
            vSum: "Fark bulurken her zaman büyük veriden küçük veri çıkarılır.",
            hint: "$11$'den $6$ çıkınca $5$ kalır."
          },
          {
            title: "Veriyi Doğru Gruplama", subtitle: "Ortak Özelliğe Göre Ayırma",
            steps: ["Karışık duran oyuncakları rengine veya şekline göre ayırmak düzenli veri oluşturur.", "Bir nesne aynı anda yalnızca bir gruba yazılmalıdır; iki kez sayılmamalıdır.", "Grup toplamları her zaman baştaki toplam nesne sayısına eşit olmalıdır."],
            q: "$12$ şekli $5$ kırmızı ve kalanı mavi olarak ayırırsak kaç tane mavi şekil vardır?",
            qc: ["6", "7", "8"], qa: "7",
            hint: "$12$'den $5$ çıkararak mavi sayısını bul."
          },
          {
            title: "Çiftlik Hayvanları Sorusu", subtitle: "Karşılaştırmalı Veri Yorumu",
            stem: "Bir çiftlikte $9$ tavuk, $4$ inek ve $6$ koyun vardır. Tavukların sayısı inek ve koyunların toplamından kaç eksiktir?",
            opts: ["$1$", "$2$", "$3$", "$4$"], ans: "A",
            hint: "Önce inek ve koyunların toplamını ($4 + 6$) bul, sonra $9$ ile farkına bak.",
            sol: "İnek + Koyun $= 4 + 6 = 10$ hayvandır. Tavuk sayısı $9$ olduğundan $10 - 9 = 1$ eksiktir.",
            badge: "Grafik Bilgini"
          }
        ]
      })
    ],
    "2": [
      makeUnit({
        track: "2", grade: 2, no: 1,
        title: "İki Basamaklı Doğal Sayılar",
        subtitle: "100 İçinde Basamak Değeri ve Yuvarlama",
        desc: "100'e kadar iki basamaklı sayıları basamak değerleriyle çözümler, en yakın onluğa yuvarlar ve karşılaştırırız.",
        coverImage: "assets/flow/k1_carpan_bloklari.jpg",
        cells: ["10..99", "Basamak", "Onluk", "Yuvarla", "2'şer", "3'er", "4'er", "5'er", "10'ar", "Tek", "Çift", "100"],
        k: [
          ["Basamak Değeri ve Çözümleme", "MAT.2.1.1"],
          ["En Yakın Onluğa Yuvarlama", "MAT.2.1.2"],
          ["Ritmik Sayma ve Sayı Karşılaştırma", "MAT.2.1.3"]
        ],
        s: [
          {
            title: "Basamak Adı ve Basamak Değeri", subtitle: "Rakamların Yerine Göre Değeri",
            exp: ["$57$ sayısında $7$ birler basamağındadır ve basamak değeri $7$'dir.", "$5$ ise onlar basamağındadır ve $5$ tane onluk demek olduğundan basamak değeri $50$'dir."],
            sent: "$64$ sayısında $6$ rakamının basamak değeri {0}, $4$ rakamının basamak değeri {1}'tür.",
            blanks: [["60", ["6", "60", "64"]], ["4", ["4", "40", "6"]]],
            vTitle: "Basamak Tablosu: 64",
            vNums: [["6 Onluk", "Değeri = 60", 1], ["4 Birlik", "Değeri = 4", 0], ["60 + 4", "= 64", 1]],
            vSum: "Bir sayının rakamlarının basamak değerleri toplamı sayının kendisine eşittir.",
            hint: "Onlar basamağındaki rakamı $10$ ile çarparız."
          },
          {
            title: "En Yakın Onluğa Yuvarlama", subtitle: "1-4 Aşağı, 5-9 Yukarı",
            steps: ["Sayıyı en yakın onluğa yuvarlarken birler basamağındaki rakama bakarız.", "Birler basamağı $1, 2, 3, 4$ ise kendi onluğuna (aşağı); $5, 6, 7, 8, 9$ ise bir sonraki onluğa (yukarı) yuvarlanır.", "Örneğin $43 \\to 40$, $47 \\to 50$ ve $45 \\to 50$ olur."],
            q: "$74$ sayısı en yakın hangi onluğa yuvarlanır?",
            qc: ["70", "75", "80"], qa: "70",
            hint: "Birler basamağı $4$ olduğundan kendi onluğunda kalır."
          },
          {
            title: "Yuvarlama ve Basamak Sorusu", subtitle: "En Büyük İki Basamaklı Değer",
            stem: "En yakın onluğa yuvarlandığında **$60$** olan en büyük doğal sayı kaçtır?",
            opts: ["$55$", "$59$", "$64$", "$65$"], ans: "C",
            hint: "$60$'ın üzerindeki sayılardan birler basamağı $4$'e kadar olanlar geri $60$'a yuvarlanır.",
            sol: "$60$'a yuvarlanan sayılar $55$'ten $64$'e kadardır ($65 \\to 70$ olur). En büyüğü $64$'tür.",
            badge: "Yuvarlama Ustası"
          },
          {
            title: "İkişer, Üçer, Dörder Ritmik Sayma", subtitle: "Düzenli Artış ve Azalış",
            exp: ["$3$'er sayarken $3, 6, 9, 12, 15, \\dots$; $4$'er sayarken $4, 8, 12, 16, 20, \\dots$ şeklinde ilerleriz.", "Ritmik sayma gelecekteki çarpım tablosunun en sağlam temelidir."],
            sent: "$4$'er ritmik saymada $16$'dan sonra gelen sayı {0}, $24$'ten sonra gelen sayı {1} olur.",
            blanks: [["20", ["18", "20", "22"]], ["28", ["26", "28", "32"]]],
            vTitle: "4'er Ritmik Merdiven",
            vNums: [["12 → 16", "+4 adım", 0], ["16 → 20", "+4 adım", 1], ["24 → 28", "+4 adım", 1]],
            vSum: "Bir önceki terime adım miktarını eklemek sıradaki sayıyı verir.",
            hint: "$16 + 4$ ve $24 + 4$ işlemlerini yap."
          },
          {
            title: "Rakamlarla En Büyük-En Küçük Sayı", subtitle: "Kartları Doğru Diz",
            steps: ["İki farklı rakamla en büyük sayıyı yazmak için büyük rakamı onlar basamağına koyarız.", "En küçük iki basamaklı sayıyı yazarken $0$ başa gelemeyeceğinden en küçük sıfır dışı rakamı başa koyarız.", "Örneğin $0$ ve $7$ ile yazılabilecek tek iki basamaklı sayı $70$'tir."],
            q: "$3$ ve $8$ rakamlarıyla yazılabilecek en büyük ve en küçük iki basamaklı doğal sayıların toplamı kaçtır?",
            qc: ["111", "121", "131"], qa: "121",
            hint: "Rakamlar $83$ ve $38$'dir; alt alta topla."
          },
          {
            title: "Karşılaştırma Sorusu", subtitle: "Tek ve Çift Sayılar",
            stem: "$68$, $73$, $49$, $82$ sayılarından **en büyük tek** sayı ile **en küçük çift** sayının toplamı kaçtır?",
            opts: ["$117$", "$131$", "$141$", "$155$"], ans: "C",
            hint: "Tek sayılar $73$ ve $49$; çift sayılar $68$ ve $82$'dir.",
            sol: "En büyük tek sayı $73$, en küçük çift sayı $68$'dir. Toplamları $73 + 68 = 141$ eder.",
            badge: "Basamak Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "2", grade: 2, no: 2,
        title: "Eldeli Toplama ve Onluk Bozarak Çıkarma",
        subtitle: "İki Basamaklı İşlemler ve Zihinden Tahmin",
        desc: "Toplamı 100'ü geçmeyen eldeli toplama ve onluk bozarak çıkarma işlemlerini akıcı şekilde çözeriz.",
        coverImage: "assets/flow/flow_sade_ders_konsept.jpg",
        cells: ["Eldeli", "Onluk Boz", "Tahmin", "100", "47+28", "72-36", "Eksilen", "Çıkan", "Fark", "Problem", "Zihin", "Kontrol"],
        k: [
          ["Eldeli Toplama İşlemi", "MAT.2.1.4"],
          ["Onluk Bozarak Çıkarma", "MAT.2.1.5"],
          ["Verilmeyen Terim ve Tahmin", "MAT.2.1.6"]
        ],
        s: [
          {
            title: "Birlikler 10'u Geçerse Elde Var!", subtitle: "Onluk Taşıma Kuralı",
            exp: ["$38 + 26$ işleminde önce birlikleri toplarız: $8 + 6 = 14$.", "$14$'ün $4$ birliği sonuçta kalır, $1$ onluğu ise **elde** olarak onlar basamağına eklenir: $3 + 2 + 1 = 6$, cevap $64$."],
            sent: "$47 + 28$ işleminde birliklerin toplamı {0} yapar; $1$ onluk elde verince sonuç {1} olur.",
            blanks: [["15", ["14", "15", "16"]], ["75", ["65", "75", "85"]]],
            vTitle: "Eldeli Toplama Adımları",
            vNums: [["7 + 8", "= 15 (5 yaz, elde 1)", 1], ["4 + 2 + 1", "= 7 onluk", 0], ["75", "Toplam sonuç", 1]],
            vSum: "Birlik toplamı $10$ ve üzeriyse mutlaka $1$ onluk elde aktarılır.",
            hint: "Elde gelen $1$ onluğu eklemeyi unutma."
          },
          {
            title: "Onluk Bozarak Çıkarma", subtitle: "Komşudan 1 Onluk Alma",
            steps: ["$62 - 27$ işleminde $2$'den $7$ çıkmadığı için $6$ onluktan $1$ onluk alırız.", "Birlikler $10 + 2 = 12$ olur ($12 - 7 = 5$), onlar basamağında $5$ onluk kalır ($5 - 2 = 3$).", "Sonuç $35$ bulunur; sağlaması $35 + 27 = 62$'dir."],
            q: "$81 - 36$ çıkarma işleminin sonucu kaçtır?",
            qc: ["45", "55", "47"], qa: "45",
            hint: "Komşudan onluk alınca $11 - 6 = 5$ ve $7 - 3 = 4$ olur."
          },
          {
            title: "Kütüphane Kitapları Sorusu", subtitle: "İki İşlemli Problem",
            stem: "Bir rafta $38$ hikaye ve $27$ masal kitabı vardır. Bu kitaplardan $19$'u ödünç verilirse rafta kaç kitap kalır?",
            opts: ["$44$", "$46$", "$48$", "$65$"], ans: "B",
            hint: "Önce toplam kitap sayısını bul ($38+27$), sonra $19$ çıkar.",
            sol: "Toplam kitap $38 + 27 = 65$. Kalan kitap $65 - 19 = 46$'dır.",
            badge: "İşlem Yıldızı"
          },
          {
            title: "Tahmini Toplam ve Fark", subtitle: "Onluklara Yuvarlayarak Tahmin",
            exp: ["İşlemin sonucunu hızlıca tahmin etmek için sayıları en yakın onluğa yuvarlarız.", "Örneğin $48 + 21$ işleminin tahmini sonucu $50 + 20 = 70$ iken gerçek sonuç $69$'dur; fark sadece $1$'dir."],
            sent: "$63 - 28$ işlemini en yakın onluklara yuvarlayarak tahmin edersek {0} eksi {1} eşittir $30$ buluruz.",
            blanks: [["60", ["60", "63", "70"]], ["30", ["20", "28", "30"]]],
            vTitle: "Tahmin vs Gerçek",
            vNums: [["63 → 60", "Yuvarlandı", 0], ["28 → 30", "Yuvarlandı", 0], ["Gerçek: 35", "Tahmin: 30", 1]],
            vSum: "Tahmin sonucu gerçek sonuca çok yakın çıkar.",
            hint: "$63$ aşağı $60$'a, $28$ ise yukarı $30$'a yuvarlanır."
          },
          {
            title: "Eksilen ve Çıkan İlişkisi", subtitle: "Ters İşlem ile Bulma",
            steps: ["Çıkarma işleminde $\\text{Eksilen} - \\text{Çıkan} = \\text{Fark}$ kuralı geçerlidir.", "Eksileni bulmak için Çıkan ile Farkı toplarız.", "Çıkanı bulmak içinse Eksilenden Farkı çıkarırız."],
            q: "Bir çıkarma işleminde çıkan $24$, fark $37$ ise eksilen kaçtır?",
            qc: ["13", "51", "61"], qa: "61",
            hint: "Eksilen en büyük sayıdır: $24 + 37$ işlemini yap."
          },
          {
            title: "Eksilen Bulma Sorusu", subtitle: "Bilinmeyenli İşlem",
            stem: "$\\square - 29 = 45$ işleminde $\\square$ yerine gelmesi gereken sayı kaçtır?",
            opts: ["$16$", "$64$", "$74$", "$84$"], ans: "C",
            hint: "Hangi sayıdan $29$ çıkarsa $45$ kalır?",
            sol: "$\\text{Eksilen} = \\text{Çıkan} + \\text{Fark} = 29 + 45 = 74$.",
            badge: "Zihin Hesapçısı"
          }
        ]
      }),
      makeUnit({
        track: "2", grade: 2, no: 3,
        title: "Çarpma ve Bölme İşlemine Giriş",
        subtitle: "Tekrarlı Toplama, Çarpım ve Eşit Paylaşım",
        desc: "Aynı sayının tekrarlı toplamını çarpma olarak yazar, çarpım tablosunu kurar ve eşit paylaştırmayı bölme işlemiyle çözeriz.",
        coverImage: "assets/flow/k2_carpan_yontemleri.jpg",
        cells: ["× Çarp", "÷ Böl", "3×4", "5×6", "0 Yutan", "1 Etkisiz", "Paylaş", "Kalan", "Grup", "Çarpan", "Bölüm", "Tablo"],
        k: [
          ["Tekrarlı Toplamadan Çarpmaya", "MAT.2.1.7"],
          ["0 ve 1'in Çarpmadaki Özelliği", "MAT.2.1.8"],
          ["Eşit Paylaştırma ve Bölme", "MAT.2.1.9"]
        ],
        s: [
          {
            title: "Çarpma Hızlı Toplamadır", subtitle: "Grup Sayısı × Gruptaki Miktar",
            exp: ["$4$ tabağın her birinde $3$ kurabiye varsa $3 + 3 + 3 + 3 = 12$ yerine kısaca $4 \\times 3 = 12$ yazarız.", "Çarpanların yeri değişse de çarpım değişmez: $4 \\times 3 = 3 \\times 4 = 12$."],
            sent: "$5 + 5 + 5 + 5$ toplamı çarpma olarak {0} $\\times 5$ şeklinde yazılır ve sonucu {1} olur.",
            blanks: [["4", ["3", "4", "5"]], ["20", ["15", "20", "25"]]],
            vTitle: "Çarpma Dönüşümü",
            vNums: [["5+5+5+5", "4 tane 5", 1], ["4 × 5", "= 20", 1], ["5 × 4", "Yine = 20", 0]],
            vSum: "Eşit toplananların kısa yolu çarpmadır.",
            hint: "Kaç tane $5$ yazıldığını say."
          },
          {
            title: "0 ve 1'in Çarpma Kuralları", subtitle: "Yutan ve Etkisiz Eleman",
            steps: ["Bir sayıyı $1$ ile çarptığımızda sonuç sayının kendisidir ($1 \\times 9 = 9$).", "Bir sayıyı $0$ ile çarptığımızda ise sonuç her zaman $0$ olur ($8 \\times 0 = 0$).", "Çünkü $0$ tane grup hiç nesne yok demektir."],
            q: "$(6 \\times 1) + (9 \\times 0)$ işleminin sonucu kaçtır?",
            qc: ["0", "6", "15"], qa: "6",
            hint: "$6 \\times 1 = 6$ ve $9 \\times 0 = 0$'dır."
          },
          {
            title: "Kutu Çarpma Sorusu", subtitle: "Problem Kurma",
            stem: "Her pakette $4$ silgi olan $7$ paket alınırsa toplam kaç silgi alınmış olur?",
            opts: ["$11$", "$24$", "$28$", "$32$"], ans: "C",
            hint: "$7$ tane $4$'ü ritmik sayarak çarp: $4, 8, 12, \\dots$",
            sol: "$7 \\times 4 = 28$ silgi alınmıştır.",
            badge: "Çarpma Ustası"
          },
          {
            title: "Eşit Paylaştırma = Bölme", subtitle: "Ardışık Çıkarma ve Paylaşım",
            exp: ["$15$ kalemi $3$ arkadaşa eşit paylaştırmak $15 \\div 3$ bölme işlemidir.", "$15$'in içinde kaç tane $3$ olduğunu buluruz: $3, 6, 9, 12, 15 \\implies 5$ tane. Her birine $5$ kalem düşer."],
            sent: "$24$ cevizi $4$ çocuğa eşit paylaştırırsak $24 \\div 4 =$ {0} olur; ayrıca {1} $\\times 4 = 24$'tür.",
            blanks: [["6", ["5", "6", "8"]], ["6", ["4", "6", "8"]]],
            vTitle: "Paylaştırma Dengesi",
            vNums: [["24 ÷ 4", "4 eşit grup", 1], ["Her grup: 6", "4 tane 6 = 24", 0]],
            vSum: "Bölmenin doğruluğunu çarpmayla kontrol edebiliriz.",
            hint: "$4$ ile kaçı çarparsak $24$ olur?"
          },
          {
            title: "Gruplama ile Bölme", subtitle: "Kısa Yoldan Ardışık Çıkarma",
            steps: ["$20$ şekeri $5$'er $5$'er poşetlere koyarsak kaç poşet gerekir?", "$20$'den sırayla $5$ çıkaralım: $15, 10, 5, 0$ — tam $4$ kez çıkardık!", "Bu yüzden $20 \\div 5 = 4$ poşet gerekir."],
            q: "$30$ kitap her rafa $5$'er tane dizilirse kaç raf dolar?",
            qc: ["5", "6", "7"], qa: "6",
            hint: "$5$'er sayarak $30$'a kaç adımda ulaşıldığını bul."
          },
          {
            title: "Paylaştırma Problemi", subtitle: "Çok Adımlı Bölme",
            stem: "$18$ elma $3$ tabağa eşit olarak paylaştırıldı. Bu tabaklardan birindeki elmalara $2$ elma daha eklenirse o tabakta kaç elma olur?",
            opts: ["$6$", "$7$", "$8$", "$9$"], ans: "C",
            hint: "Önce $18 \\div 3$ ile bir tabaktaki elma sayısını bul.",
            sol: "Bir tabağa $18 \\div 3 = 6$ elma düşer. $2$ elma daha eklenince $6 + 2 = 8$ elma olur.",
            badge: "Paylaşım Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "2", grade: 2, no: 4,
        title: "Kesirler ve Zaman Ölçme",
        subtitle: "Bütün-Yarım-Çeyrek ve Çeyrek Saatler",
        desc: "Bütün, yarım, çeyrek ilişkilerini kurar; çeyrek geçe, buçuk, çeyrek kala saatlerini ve takvimi kullanırız.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Bütün", "Yarım", "Çeyrek", "4 Çeyrek", "Çeyrek Geçe", "Buçuk", "Çeyrek Kala", "Gün", "Hafta", "Ay", "Mevsim", "1 Yıl"],
        k: [
          ["Bütün, Yarım ve Çeyrek", "MAT.2.1.10"],
          ["Çeyrek Saatleri Okuma", "MAT.2.4.1"],
          ["Takvim: Gün, Hafta, Ay, Yıl", "MAT.2.4.2"]
        ],
        s: [
          {
            title: "Çeyrek Nedir?", subtitle: "Dört Eş Parçadan Biri",
            exp: ["Bir bütünü $4$ eş parçaya ayırdığımızda her parçaya **çeyrek** denir.", "$1$ bütün içinde $4$ çeyrek, $1$ yarımın içinde ise $2$ çeyrek bulunur."],
            sent: "$1$ bütün pasta {0} eş çeyreğe bölünür; $2$ yarım elma ise toplam {1} çeyrek elma eder.",
            blanks: [["4", ["2", "4", "8"]], ["4", ["2", "4", "6"]]],
            vTitle: "Bütün-Yarım-Çeyrek Dönüşümü",
            vNums: [["1 Bütün", "= 2 Yarım", 0], ["1 Bütün", "= 4 Çeyrek", 1], ["1 Yarım", "= 2 Çeyrek", 0]],
            vSum: "Bir yarım, iki çeyreğin birleşimidir.",
            hint: "$2$ yarım aslında $1$ tam bütün demektir."
          },
          {
            title: "Çeyrek Geçe ve Çeyrek Kala", subtitle: "Yelkovanın 3 ve 9 Konumları",
            steps: ["Yelkovan $3$'ü gösterdiğinde $15$ dakika geçmiş, yani **çeyrek geçiyor** olur ($04.15$).", "Yelkovan $9$'u gösterdiğinde $45$ dakika geçmiş, yani sonraki saate **çeyrek var** olur ($04.45$: $5$'e çeyrek var).", "$1$ saat tam olarak $60$ dakikadır."],
            q: "Saat $08.45$'i okumanın doğru yolu hangisidir?",
            qc: ["8'i çeyrek geçiyor", "9'a çeyrek var", "8 buçuk"], qa: "9'a çeyrek var",
            hint: "$08.45$'ten $09.00$'a $15$ dakika (bir çeyrek saat) kalmıştır."
          },
          {
            title: "Çeyrek Portakal Sorusu", subtitle: "Parçadan Bütüne",
            stem: "$12$ çeyrek portakal kaç **bütün portakal** eder?",
            opts: ["$2$", "$3$", "$4$", "$6$"], ans: "B",
            hint: "Her $4$ çeyrek $1$ bütün yaptığına göre $12$'yi $4$'e böl.",
            sol: "$12 \\div 4 = 3$ bütün portakal eder.",
            badge: "Kesir Bilgini"
          },
          {
            title: "Takvim İlişkileri", subtitle: "Hafta, Ay ve Mevsim",
            exp: ["$1$ hafta $7$ gündür; $1$ yıl $12$ ay, $4$ mevsim ve $52$ haftadır.", "Pazartesi, Salı, Çarşamba, Perşembe, Cuma okul günleri; Cumartesi ve Pazar hafta sonudur."],
            sent: "$3$ hafta toplam {0} gündür; $1$ yılda ise toplam {1} ay vardır.",
            blanks: [["21", ["14", "21", "28"]], ["12", ["4", "7", "12"]]],
            vTitle: "Zaman Birimleri Tablosu",
            vNums: [["1 Hafta = 7 gün", "3×7 = 21 gün", 1], ["1 Yıl = 4 mevsim", "Her mevsim 3 ay", 0], ["1 Yıl = 12 ay", "365 gün", 1]],
            vSum: "Haftayı $7$ ile çarparak gün sayısını buluruz.",
            hint: "$3 \\times 7$ işlemini ve yılın ay sayısını hatırla."
          },
          {
            title: "Süre Hesaplama", subtitle: "Başlangıç ve Bitiş Saatleri",
            steps: ["Bir ders $40$ dakika sürüyor ve teneffüs $15$ dakikaysa saat $09.00$'da başlayan ders $09.40$'ta biter.", "Sabah saatlerinden öğleden sonraya geçerken saat $12$'den sonra $13, 14, \\dots$ veya öğleden sonra $1, 2$ şeklinde ifade ederiz.", "Örneğin öğleden sonra $02.30$ dijital saatte $14.30$ olarak görünür."],
            q: "Saat $10.15$'te yürüyüşe çıkan Kerem $45$ dakika sonra eve dönerse saat kaç olur?",
            qc: ["10.45", "11.00", "11.15"], qa: "11.00",
            hint: "$15$ dakikanın üzerine $45$ dakika ekleyince $60$ dakika $= 1$ tam saat tamamlanır."
          },
          {
            title: "Saat ve Yarım Sorusu", subtitle: "Yarış ve Süre",
            stem: "Öğleden sonra saat $14.30$'da başlayan tiyatro oyunu $1$ saat $30$ dakika sürdü. Oyun saat kaçta bitti?",
            opts: ["$15.30$", "$16.00$", "$16.30$", "$17.00$"], ans: "B",
            hint: "$14.30$'a $30$ dakika eklediğinde $15.00$, sonra $1$ saat daha ekle.",
            sol: "$14.30 + 30\\text{ dk} = 15.00$, üzerine $1$ saat eklenince saat $16.00$ olur.",
            badge: "Takvim Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "2", grade: 2, no: 5,
        title: "Geometri, Simetri ve Uzunluk Ölçme",
        subtitle: "Çokgenler, Simetri Doğrusu ve Metre-Santimetre",
        desc: "Çokgenleri kenar sayısına göre tanır, şekillerin simetri doğrusunu çizer ve metre ile santimetre ölçümü yaparız.",
        coverImage: "assets/flow/u11_donusum_geometrisi.jpg",
        cells: ["Kenar", "Köşe", "Simetri", "Eş Parça", "1 m", "100 cm", "Cetvel", "Başlangıç 0", "Örüntü", "Kare", "Daire", "Boy"],
        k: [
          ["Geometrik Şekiller ve Simetri", "MAT.2.3.1"],
          ["Uzamsal Konum ve Dönme-Öteleme", "MAT.2.3.2"],
          ["Metre (m) ve Santimetre (cm)", "MAT.2.4.3"]
        ],
        s: [
          {
            title: "Simetri Doğrusu Nedir?", subtitle: "Ayna Gibi İki Eş Yarı",
            exp: ["Bir şekli tam ortadan katladığımızda iki parça **üst üste çakışıyorsa** kat izine **simetri doğrusu** denir.", "Karenin $4$, dikdörtgenin $2$, dairenin ise merkezden geçen sayısız simetri doğrusu vardır."],
            sent: "Kare ortadan katlandığında iki eş parça oluşur; dikdörtgenin {0} simetri doğrusu varken karenin {1} simetri doğrusu vardır.",
            blanks: [["2", ["1", "2", "4"]], ["4", ["2", "4", "8"]]],
            vTitle: "Simetri Doğru Sayıları",
            vNums: [["Dikdörtgen", "2 simetri doğrusu", 0], ["Kare", "4 simetri doğrusu", 1], ["Eşkenar Üçgen", "3 simetri doğrusu", 0]],
            vSum: "Dikdörtgeni köşegenden katlarsan uçlar çakışmaz, o yüzden $2$ tanedir.",
            hint: "Dikdörtgende yatay ve dikey katlama çalışır ama köşegen çalışmaz."
          },
          {
            title: "Metre ve Santimetre", subtitle: "Standart Uzunluk Ölçüleri",
            steps: ["Masa, kitap veya kalem boyunu **santimetre ($\\text{cm}$)** ile; oda veya bahçe boyunu **metre ($\\text{m}$)** ile ölçeriz.", "$1$ metre tam olarak $100$ santimetredir: $1\\text{ m} = 100\\text{ cm}$.", "Cetvelle ölçerken nesnenin bir ucunu daima $0$ çizgisine hizalarız."],
            q: "Kalemin bir ucu cetvelde $2\\text{ cm}$ çizgisinde, diğer ucu $11\\text{ cm}$ çizgisindeyse kalemin boyu kaç cm'dir?",
            qc: ["9 cm", "11 cm", "13 cm"], qa: "9 cm",
            hint: "Başlangıç $0$ değil $2$ olduğu için $11 - 2$ çıkar."
          },
          {
            title: "Şerit Uzunluğu Sorusu", subtitle: "Metre-Santimetre Dönüşümü",
            stem: "$2\\text{ m}$ uzunluğundaki ipten $65\\text{ cm}$ kesilirse geriye kaç **cm** ip kalır?",
            opts: ["$35\\text{ cm}$", "$125\\text{ cm}$", "$135\\text{ cm}$", "$145\\text{ cm}$"], ans: "C",
            hint: "Önce $2\\text{ m} = 200\\text{ cm}$ yazıp sonra $65$ çıkar.",
            sol: "$2\\text{ m} = 200\\text{ cm}$. Kalan ip $200 - 65 = 135\\text{ cm}$ olur.",
            badge: "Ölçüm Ustası"
          },
          {
            title: "Şekilleri Yer Değiştirme", subtitle: "Öteleme ve Döndürme Farkı",
            exp: ["Bir kitabın masada kaydırılarak yerinin değişmesine **öteleme** denir; yönü değişmez.", "Saatin ibreleri gibi bir nokta etrafında çevrilmesine ise **dönme** denir."],
            sent: "Asansörün yukarı çıkması bir {0} hareketidir; rüzgar gülünün kanatları ise bir {1} hareketi yapar.",
            blanks: [["öteleme", ["öteleme", "dönme", "simetri"]], ["dönme", ["öteleme", "dönme", "katlama"]]],
            vTitle: "Hareket Türleri",
            vNums: [["Kaydırma", "Öteleme hareketi", 1], ["Çevirme", "Dönme hareketi", 1], ["Ayna yansıması", "Simetri", 0]],
            vSum: "Ötelemede şeklin boyutu ve duruş yönü bozulmaz.",
            hint: "Düz çizgide kayma öteleme, etrafında dönme ise dönmedir."
          },
          {
            title: "Toplam Boy Hesaplama", subtitle: "Nesneleri Uç Uca Ekleme",
            steps: ["Boyu $80\\text{ cm}$ olan bir masanın yanına $1\\text{ m}$ $20\\text{ cm}$ uzunluğunda bir sıra konursa toplam uzunluk ne olur?", "$1\\text{ m} \\, 20\\text{ cm} = 120\\text{ cm}$ yapar.", "$80 + 120 = 200\\text{ cm} = 2\\text{ m}$ bulunur."],
            q: "$1\\text{ m} \\, 45\\text{ cm}$ uzunluğundaki kurdele kaç santimetredir?",
            qc: ["105 cm", "145 cm", "154 cm"], qa: "145 cm",
            hint: "$100 + 45$ toplamını yap."
          },
          {
            title: "Simetri Harfleri Sorusu", subtitle: "Simetrik Şekil Seçimi",
            stem: "Aşağıdaki büyük harflerden hangisi hem **yatay** hem de **dikey** simetri doğrusuna sahiptir?",
            opts: ["**A**", "**E**", "**H**", "**T**"], ans: "C",
            hint: "Harfi hem yukarıdan aşağıya hem soldan sağa ortadan ikiye katlayabildiğini düşün.",
            sol: "**A** ve **T** yalnızca dikey, **E** yalnızca yatay simetriye sahiptir; **H** harfinin ise hem yatay hem dikey simetri doğrusu vardır.",
            badge: "Simetri Ustası"
          }
        ]
      }),
      makeUnit({
        track: "2", grade: 2, no: 6,
        title: "Tartma, Sıvı Ölçme ve Veri Grafikleri",
        subtitle: "Kilogram, Sıvılar ve Sıklık Tablosu",
        desc: "Nesneleri kilogramla tartar, kapların sıvı kapasitelerini karşılaştırır ve sıklık tablosu ile şekil grafiğini yorumlarız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Kilogram", "Terazi", "Hafif", "Ağır", "Bardak", "Sürahi", "Dolu", "Sıklık", "Grafik", "Ölçek 2", "Veri", "Yorum"],
        k: [
          ["Kilogram (kg) ile Tartma", "MAT.2.4.4"],
          ["Sıvı Miktarlarını Karşılaştırma", "MAT.2.4.5"],
          ["Sıklık Tablosu ve Şekil Grafiği", "MAT.2.5.1"]
        ],
        s: [
          {
            title: "Kilogram ve Eşit Kollu Terazi", subtitle: "Kütle Karşılaştırma",
            exp: ["Katı maddelerin kütlesini **kilogram ($\\text{kg}$)** birimiyle ölçeriz.", "Eşit kollu terazinin iki kefesi aynı hizadaysa kütleler eşittir; aşağı inen kefe daha ağırdır."],
            sent: "Sol kefede $12\\text{ kg}$ karpuz, sağ kefede $5\\text{ kg}$ kavun varsa denge için sağ kefeye {0} kg ağırlık eklemeliyiz; terazide başlangıçta {1} tarafı aşağıda durur.",
            blanks: [["7", ["5", "7", "17"]], ["karpuz", ["karpuz", "kavun", "ikisi"]]],
            vTitle: "Terazi Dengesi",
            vNums: [["Sol: 12 kg", "Daha ağır (aşağıda)", 1], ["Sağ: 5 kg", "Daha hafif (yukarıda)", 0], ["12 - 5 = 7 kg", "Denge farkı", 1]],
            vSum: "Teraziyi dengelemek için fark kadar ağırlık hafif kefeye konur.",
            hint: "$12$'den $5$ çıkararak farkı bul."
          },
          {
            title: "Sıvı Ölçme ve Kaplar", subtitle: "Bardak, Şişe ve Sürahi",
            steps: ["Sıvıları ölçerken küçük kaplarla büyük kapları doldurarak karşılaştırırız.", "Örneğin $1$ sürahi $6$ su bardağıyla doluyorsa, $3$ sürahi $3 \\times 6 = 18$ su bardağı sıvı alır.", "Aynı miktardaki suyu dar bir şişeye ve geniş bir kaseye koyarsak suyun miktarı değişmez."],
            q: "Bir tencere $5$ sürahi suyla, bir sürahi ise $4$ bardak suyla doluyorsa tencere kaç bardak su alır?",
            qc: ["9 bardak", "16 bardak", "20 bardak"], qa: "20 bardak",
            hint: "$5$ sürahinin her biri $4$ bardak aldığına göre $5 \\times 4$ işlemini yap."
          },
          {
            title: "Market Tartım Sorusu", subtitle: "Kütle Problemi",
            stem: "Pazardan $4\\text{ kg}$ elma, elmalardan $3\\text{ kg}$ fazla patates ve $2\\text{ kg}$ domates alan Ayşe toplam kaç **kg** yük taşır?",
            opts: ["$9\\text{ kg}$", "$11\\text{ kg}$", "$13\\text{ kg}$", "$15\\text{ kg}$"], ans: "C",
            hint: "Patates $4 + 3 = 7\\text{ kg}$'dır; üçünü birden topla.",
            sol: "Elma $4\\text{ kg}$, patates $4+3=7\\text{ kg}$, domates $2\\text{ kg}$. Toplam $4 + 7 + 2 = 13\\text{ kg}$ olur.",
            badge: "Tartım Bilgini"
          },
          {
            title: "Ölçekli Şekil Grafiği", subtitle: "Her Şekil 2 Kişi Gösterirse!",
            exp: ["Bazı grafiklerde tek bir simge $1$ yerine **$2$** veya **$5$** nesneyi temsil edebilir.", "Alttaki notta 'Her yıldız $2$ öğrenciyi gösterir' yazıyorsa yıldız sayısını $2$ ile çarparız."],
            sent: "Her görselin $2$ kitabı gösterdiği grafikte $6$ kitap görseli {0} kitabı, $10$ kitap içinse {1} görsel çizilmelidir.",
            blanks: [["12", ["6", "8", "12"]], ["5", ["4", "5", "10"]]],
            vTitle: "Ölçekli Grafik Hesabı",
            vNums: [["1 simge = 2", "Ölçek notu", 1], ["6 simge", "6×2 = 12 kitap", 0], ["10 kitap", "10÷2 = 5 simge", 1]],
            vSum: "Grafik okurken her zaman alt taraftaki notu ilk sırada kontrol et!",
            hint: "Simge sayısını $2$ ile çarp, gerçek sayıyı bulmak için tersinde $2$'ye böl."
          },
          {
            title: "Sıklık Tablosundan Grafiğe", subtitle: "Sayılarla Düzenli Kayıt",
            steps: ["Sıklık tablosunda veriler çetele çizgisi yerine doğrudan **sayılarla** yazılır.", "Örneğin: Basketbol $14$, Futbol $18$, Voleybol $10$ öğrenci.", "Buradan hangi sporun ne kadar popüler olduğu hızlıca kıyaslanır."],
            q: "Basketbol $14$, Futbol $18$, Voleybol $10$ ise Futbol sevenler Voleybol sevenlerden kaç fazladır?",
            qc: ["4", "6", "8"], qa: "8",
            hint: "$18 - 10$ işlemini yap."
          },
          {
            title: "Ölçekli Grafik Sorusu", subtitle: "Grafikten Toplam Okuma",
            stem: "Bir meyve grafiğinde **her resim $3$ öğrenciyi** göstermektedir. Muz satırında $4$ resim, Çilek satırında $5$ resim varsa bu iki meyveyi seven toplam kaç öğrenci vardır?",
            opts: ["$9$", "$18$", "$27$", "$30$"], ans: "C",
            hint: "Toplam $4 + 5 = 9$ resim var; her resim $3$ öğrenciyi gösteriyor.",
            sol: "Muz $4 \\times 3 = 12$, Çilek $5 \\times 3 = 15$ öğrenci. Toplam $12 + 15 = 27$ öğrenci vardır.",
            badge: "Grafik Uzmanı"
          }
        ]
      })
    ],
    "3": [
      makeUnit({
        track: "3", grade: 3, no: 1,
        title: "Üç Basamaklı Doğal Sayılar",
        subtitle: "Yüzlük-Onluk-Birlik, Romen Rakamları ve Yuvarlama",
        desc: "999'a kadar üç basamaklı sayıları çözümler, yüzlüğe yuvarlar ve Romen rakamlarını günlük hayatta okuruz.",
        coverImage: "assets/flow/k1_carpan_bloklari.jpg",
        cells: ["Yüzlük", "100..999", "Yuvarlama", "Romen I-XX", "Tek-Çift", "Sırala", "345", "500", "Basamak", "Çözümle", "Örüntü", "999"],
        k: [
          ["Üç Basamaklı Sayı ve Çözümleme", "MAT.3.1.1"],
          ["Onluğa ve Yüzlüğe Yuvarlama", "MAT.3.1.2"],
          ["Romen Rakamları ve Tek-Çift Kuralı", "MAT.3.1.3"]
        ],
        s: [
          {
            title: "Yüzler Basamağına Hoş Geldin", subtitle: "10 Tane Onluk = 1 Yüzlük",
            exp: ["$472$ sayısında $4$ yüzler basamağında olup değeri $400$, $7$ onlar basamağında $70$, $2$ birler basamağında $2$'dir.", "Sayıların rakamlarının yerleri değiştiğinde basamak değerleri de değişir."],
            sent: "$508$ sayısının çözümlemesi {0} yüzlük + $0$ onluk + {1} birlik biçimindedir.",
            blanks: [["5", ["0", "5", "50"]], ["8", ["0", "8", "80"]]],
            vTitle: "Basamak Kartı: 508",
            vNums: [["5 Yüzlük", "= 500", 1], ["0 Onluk", "= 0", 0], ["8 Birlik", "= 8", 1]],
            vSum: "Bir basamakta $0$ varsa o basamağın basamak değeri $0$'dır.",
            hint: "Yüzler basamağındaki $5$ ve birler basamağındaki $8$'i yerleştir."
          },
          {
            title: "Yüzlüğe Yuvarlama Kuralı", subtitle: "Son İki Basamak 50 ile Kıyaslanır",
            steps: ["En yakın yüzlüğe yuvarlarken sayının son iki basamağına (onluk ve birlik) bakarız.", "Son iki basamak $50$'den küçükse ($01..49$) kendi yüzlüğünde kalır.", "$50$ ve $50$'den büyükse ($50..99$) bir üst yüzlüğe yuvarlanır."],
            q: "$349$ ve $351$ sayıları en yakın yüzlüğe nasıl yuvarlanır?",
            qc: ["İkisi de 300", "300 ve 400", "İkisi de 400"], qa: "300 ve 400",
            hint: "$49 \\lt 50$ olduğu için $300$'e, $51 \\ge 50$ olduğu için $400$'e gider."
          },
          {
            title: "Rakam Oluşturma Sorusu", subtitle: "En Küçük ve En Büyük",
            stem: "$0, 4, 7$ rakamlarını birer kez kullanarak yazabileceğimiz **en büyük** üç basamaklı sayı ile **en küçük** üç basamaklı sayının farkı kaçtır?",
            opts: ["$333$", "$340$", "$343$", "$370$"], ans: "A",
            hint: "En büyük sayı $740$'tır; en küçük sayı için başa $0$ gelemeyeceğinden $407$ olur.",
            sol: "En büyük üç basamaklı sayı $740$, yüzler basamağı $0$ olamayacağı için en küçük üç basamaklı sayı $407$'dir. Fark $740 - 407 = 333$'tür.",
            badge: "Basamak Ustası"
          },
          {
            title: "Romen Rakamları (I – XX)", subtitle: "I=1, V=5, X=10",
            exp: ["Saat kadranlarında ve bölüm başlıklarında Romen rakamları görürüz: $I=1$, $V=5$, $X=10$.", "Büyük rakamın sağındaki küçük toplanır ($VI = 6$, $XI = 11$); solundaki ise çıkarılır ($IV = 4$, $IX = 9$)."],
            sent: "Romen rakamlarıyla $XIV$ sayısı {0} değerini, $XIX$ sayısı ise {1} değerini gösterir.",
            blanks: [["14", ["14", "15", "16"]], ["19", ["11", "19", "21"]]],
            vTitle: "Romen Rakam Kodu",
            vNums: [["IV", "5 - 1 = 4", 0], ["IX", "10 - 1 = 9", 1], ["XIV", "10 + 4 = 14", 1]],
            vSum: "Bir Romen rakamı yan yana en fazla $3$ kez yazılabilir.",
            hint: "$X=10$, $IV=4$ ve $IX=9$ değerlerini birleştir."
          },
          {
            title: "Tek ve Çift Sayı Toplam Kuralları", subtitle: "Son Rakama Bakmak Yeterli",
            steps: ["İki tek sayının toplamı her zaman **çift** olur (ör. $3 + 5 = 8$).", "İki çift sayının toplamı da **çift** olur ($4 + 6 = 10$).", "Bir tek ile bir çift sayının toplamıysa her zaman **tek** olur ($7 + 4 = 11$)."],
            q: "$235 + 147$ işlemini yapmadan sonucunun tek mi çift mi olduğunu söyleyebilir misin?",
            qc: ["Tek", "Çift", "Bilinmez"], qa: "Çift",
            hint: "Her iki sayının da son basamağı tektir; Tek + Tek = Çift!"
          },
          {
            title: "Romen Saati Sorusu", subtitle: "Sembolleri Çevir ve Topla",
            stem: "$VIII + XII - IV$ işleminin sonucu hangi Romen rakamı ile gösterilir?",
            opts: ["$XIV$", "$XV$", "$XVI$", "$XVII$"], ans: "C",
            hint: "$VIII = 8$, $XII = 12$ ve $IV = 4$ değerlerini yerine koy.",
            sol: "$8 + 12 - 4 = 16$ bulunur. $16$'nın Romen rakamı gösterimi $10 + 5 + 1 = XVI$'dır.",
            badge: "Romen Bilgini"
          }
        ]
      }),
      makeUnit({
        track: "3", grade: 3, no: 2,
        title: "Dört İşlem ve Zihinden Stratejiler",
        subtitle: "Üç Basamaklı İşlemler ve Kalanlı Bölme",
        desc: "Üç basamaklı sayılarla toplama-çıkarma, 10 ve 100 ile kısa çarpma ve kalanlı bölme işlemlerini çözeriz.",
        coverImage: "assets/flow/k2_carpan_yontemleri.jpg",
        cells: ["3 Basamak", "Elde", "Onluk Boz", "×10", "×100", "Kalan", "Bölüm", "Sağlama", "Zihinden", "Tahmin", "Problem", "Çarpım"],
        k: [
          ["Üç Basamaklı Toplama ve Çıkarma", "MAT.3.1.4"],
          ["10 ve 100 ile Kısa Çarpma", "MAT.3.1.5"],
          ["Bölme İşlemi ve Kalan Kuralı", "MAT.3.1.6"]
        ],
        s: [
          {
            title: "Üç Basamaklı Eldeli Toplama", subtitle: "Birlikten Yüzlüğe Akış",
            exp: ["$368 + 257$ toplamında birlikler $8+7=15$ (elde $1$), onluklar $6+5+1=12$ (elde $1$ yüzlük) ve yüzlükler $3+2+1=6$ olur.", "Yani iki kez elde taşınabilir; sonuç $625$'tir."],
            sent: "$476 + 185$ toplamında birliklerden $1$ onluk, onluklardan $1$ yüzlük elde gelir ve sonuç {0} olur; en yakın yüzlüğe yuvarlarsak {1} eder.",
            blanks: [["661", ["651", "661", "671"]], ["700", ["600", "660", "700"]]],
            vTitle: "Çift Eldeli Toplama",
            vNums: [["6 + 5 = 11", "1 yaz, elde 1", 0], ["7 + 8 + 1 = 16", "6 yaz, elde 1", 1], ["4 + 1 + 1 = 6", "Toplam = 661", 1]],
            vSum: "Basamakları alt alta hizalayarak hata yapmayı önleriz.",
            hint: "Son iki basamağı $61 \\ge 50$ olduğu için $700$'e yuvarlanır."
          },
          {
            title: "10 ve 100 ile Kısa Yoldan Çarpma", subtitle: "Sona Sıfır Ekleme",
            steps: ["Bir doğal sayıyı $10$ ile çarpmak için sayının sağına $1$ tane sıfır ekleriz ($24 \\times 10 = 240$).", "Bir doğal sayıyı $100$ ile çarpmak için sağına $2$ tane sıfır ekleriz ($7 \\times 100 = 700$).", "$20$ veya $300$ ile çarparken sıfırları kapatıp sayıları çarpar, sonra tüm sıfırları sona ekleriz."],
            q: "$8 \\times 100$ ile $14 \\times 10$ işlemlerinin toplamı kaçtır?",
            qc: ["940", "840", "914"], qa: "940",
            hint: "$800 + 140$ işlemini topla."
          },
          {
            title: "Kısa Çarpma Sorusu", subtitle: "Alışveriş Toplamı",
            stem: "Tanesi $25\\text{ TL}$ olan kalemlerden $10$ tane ve tanesi $4\\text{ TL}$ olan silgilerden $100$ tane alan kırtasiyeci toplam kaç TL öder?",
            opts: ["$290\\text{ TL}$", "$550\\text{ TL}$", "$650\\text{ TL}$", "$750\\text{ TL}$"], ans: "C",
            hint: "Kalemler $25 \\times 10$, silgiler $4 \\times 100$ TL tutar.",
            sol: "Kalemler $25 \\times 10 = 250\\text{ TL}$, silgiler $4 \\times 100 = 400\\text{ TL}$. Toplam $250 + 400 = 650\\text{ TL}$.",
            badge: "Hızlı Çarpıcı"
          },
          {
            title: "Kalanlı Bölmede Altın Kural", subtitle: "Kalan < Bölen Olmalıdır",
            exp: ["Bir bölme işleminde kalan hiçbir zaman bölenden büyük ya da bölene eşit olamaz.", "Örneğin bölen $6$ ise kalan en fazla $5$ olabilir; bölünen ise $\\text{Bölen} \\times \\text{Bölüm} + \\text{Kalan}$ formülüyle bulunur."],
            sent: "Bölenin $7$ olduğu bir bölme işleminde kalan en fazla {0} olabilir; bölüm $8$ ise bu bölünen en çok {1} olur.",
            blanks: [["6", ["5", "6", "7"]], ["62", ["56", "62", "63"]]],
            vTitle: "Bölme Sağlaması",
            vNums: [["Bölen = 7", "Kalan < 7 şartı", 1], ["Maks Kalan = 6", "En büyük kalan", 0], ["7×8 + 6", "= 62", 1]],
            vSum: "Bölme sağlamasında kalanı son adımda eklemeyi asla unutma.",
            hint: "$7 \\times 8 = 56$ üzerine en büyük kalan olan $6$'yı ekle."
          },
          {
            title: "İki Basamaklıyı Bir Basamaklıya Bölme", subtitle: "Soldan Basamak Basamak Bölme",
            steps: ["$78 \\div 3$ işleminde önce onlar basamağındaki $7$'nin içinde $3$ ararız: $2$ kez ($2 \\times 3 = 6$).", "$7 - 6 = 1$ onluk artar; yanına birler basamağındaki $8$'i indirip $18$ yaparız.", "$18 \\div 3 = 6$ olduğundan bölüm $26$, kalan $0$ bulunur."],
            q: "$84 \\div 4$ bölme işleminin bölümü kaçtır?",
            qc: ["12", "21", "24"], qa: "21",
            hint: "$8 \\div 4 = 2$ ve $4 \\div 4 = 1$ basamaklarını sırayla yaz."
          },
          {
            title: "Bölünen Bulma Sorusu", subtitle: "Kalanlı Bölme Problemi",
            stem: "Bir bölme işleminde bölen $8$, bölüm $9$ ve kalan olabilecek **en büyük değer** ise bölünen sayı kaçtır?",
            opts: ["$72$", "$78$", "$79$", "$80$"], ans: "C",
            hint: "Bölen $8$ iken kalan en fazla $7$ olabilir.",
            sol: "$\\text{Kalan} \\lt 8$ olduğundan en büyük kalan $7$'dir. $\\text{Bölünen} = 8 \\times 9 + 7 = 72 + 7 = 79$.",
            badge: "Bölme Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "3", grade: 3, no: 3,
        title: "Birim Kesirler ve Pay-Payda İlişkisi",
        subtitle: "Eş Parçalar, Sayı Doğrusu ve Birim Kesir Kıyaslama",
        desc: "Pay, payda ve kesir çizgisinin anlamını öğrenir; birim kesirleri sayı doğrusunda gösterip büyüklüklerini karşılaştırırız.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Pay", "Payda", "1/2", "1/3", "1/4", "1/8", "Birim Kesir", "Sayı Doğrusu", "Eş Parça", "Büyük", "Küçük", "Bütün"],
        k: [
          ["Pay, Payda ve Kesir Çizgisi", "MAT.3.1.7"],
          ["Birim Kesir ve Sayı Doğrusu", "MAT.3.1.8"],
          ["Birim Kesirleri Karşılaştırma", "MAT.3.1.9"]
        ],
        s: [
          {
            title: "Pay ve Payda Ne Anlatır?", subtitle: "Alttaki Böler, Üstteki Seçer",
            exp: ["Kesir çizgisinin altındaki **payda**, bir bütünün toplam kaç eş parçaya bölündüğünü gösterir.", "Üstteki **pay** ise bu parçalardan kaç tanesinin alındığını veya boyandığını belirtir."],
            sent: "$\\frac{3}{5}$ kesrinde bütün {0} eş parçaya bölünmüştür; alınan parça sayısı ise pay yani {1}'tür.",
            blanks: [["5", ["3", "5", "8"]], ["3", ["2", "3", "5"]]],
            vTitle: "Kesir Anatomisi: 3/5",
            vNums: [["Pay: 3", "Alınan parça", 0], ["Payda: 5", "Toplam eş parça", 1], ["1/5", "Birim kesri", 1]],
            vSum: "Payı $1$ olan kesirlere **birim kesir** denir.",
            hint: "Üstteki sayı pay, alttaki sayı paydadır."
          },
          {
            title: "Birim Kesirleri Kıyaslama", subtitle: "Payda Büyüdükçe Parça Küçülür!",
            steps: ["Aynı büyüklükteki pizzayı $2$ kişiye bölersek dilimler büyük ($\\frac{1}{2}$), $8$ kişiye bölersek dilimler küçüktür ($\\frac{1}{8}$).", "Bu nedenle birim kesirlerde **paydası küçük olan kesir daha büyüktür**.", "Örneğin $\\frac{1}{3} \\gt \\frac{1}{5} \\gt \\frac{1}{9}$ sıralaması doğrudur."],
            q: "$\\frac{1}{4}$, $\\frac{1}{6}$ ve $\\frac{1}{2}$ birim kesirlerinden en küçüğü hangisidir?",
            qc: ["1/2", "1/4", "1/6"], qa: "1/6",
            hint: "Bütünü $6$ parçaya bölünce her dilim daha küçük olur."
          },
          {
            title: "Birim Kesir Sıralama Sorusu", subtitle: "Dilim Büyüklüğü",
            stem: "Aynı büyüklükteki üç pastadan Ali $\\frac{1}{5}$'ini, Ece $\\frac{1}{3}$'ünü ve Can $\\frac{1}{8}$'ini yemiştir. En **çok** pasta yiyenden en aza sıralama hangisidir?",
            opts: ["Ece, Ali, Can", "Can, Ali, Ece", "Ali, Ece, Can", "Ece, Can, Ali"], ans: "A",
            hint: "Paydası en küçük olan $\\frac{1}{3}$ en büyük dilimdir.",
            sol: "Birim kesirlerde payda küçüldükçe değer büyür: $\\frac{1}{3} \\gt \\frac{1}{5} \\gt \\frac{1}{8}$, yani Ece $\\gt$ Ali $\\gt$ Can.",
            badge: "Kesir Yargıcı"
          },
          {
            title: "Kesrin Bütünüyle İşlem", subtitle: "Bir Bütünün Kesir Kadarını Bulma",
            exp: ["$20$ tane bilyenin $\\frac{1}{4}$'ünü bulmak için $20$'yi $4$ eş gruba ayırırız: $20 \\div 4 = 5$ bilye.", "$\\frac{3}{4}$'ünü bulmak içinse bir parçayı ($5$'i) $3$ ile çarparız: $3 \\times 5 = 15$."],
            sent: "$24$ sayfanın $\\frac{1}{6}$'sı {0} sayfadır; $\\frac{5}{6}$'sı ise {1} sayfa eder.",
            blanks: [["4", ["3", "4", "6"]], ["20", ["18", "20", "24"]]],
            vTitle: "Çokluğun Kesri",
            vNums: [["24 ÷ 6 = 4", "1 birim kesir", 1], ["4 × 5 = 20", "5 birim kesir", 1]],
            vSum: "Paydaya böl, pay ile çarp!",
            hint: "Önce $24 \\div 6$, sonra sonucu $5$ ile çarp."
          },
          {
            title: "Sayı Doğrusunda Kesirler", subtitle: "0 ile 1 Arasını Eş Bölme",
            steps: ["Sayı doğrusunda $0$ ile $1$ arasını payda kadar eş parçaya böleriz.", "Örneğin $\\frac{3}{4}$ için $0$ ile $1$ arasını $4$ eşit aralığa böler, $0$'dan sağa $3$ adım ilerleriz.", "Pay ve payda eşit olursa ($\\frac{4}{4}$) tam $1$ bütüne ulaşırız."],
            q: "$0$ ile $1$ arası $5$ eş parçaya bölündüğünde $0$'dan sağa $2$. çizgi hangi kesri gösterir?",
            qc: ["1/5", "2/5", "3/5"], qa: "2/5",
            hint: "Toplam aralık $5$, gidilen adım $2$."
          },
          {
            title: "Kitap Okuma Kesri", subtitle: "Gerçek Yaşam Kesir Problemi",
            stem: "$36$ sayfalık hikaye kitabının $\\frac{1}{4}$'ünü okuyan Deniz'in okuması gereken **kaç sayfa** kalmıştır?",
            opts: ["$9$", "$18$", "$27$", "$32$"], ans: "C",
            hint: "Önce okuduğu $36 \\div 4$ sayfayı bul, sonra toplamdan çıkar.",
            sol: "Okunan sayfa $36 \\div 4 = 9$'dur. Kalan sayfa $36 - 9 = 27$ olur.",
            badge: "Pay-Payda Kaptanı"
          }
        ]
      }),
      makeUnit({
        track: "3", grade: 3, no: 4,
        title: "Ölçme: Uzunluk, Çevre ve Zaman",
        subtitle: "km-m-cm-mm, Şekil Çevresi ve Dakika Hesabı",
        desc: "Uzunluk birimlerini dönüştürür, çokgenlerin çevre uzunluğunu hesaplar ve saat-dakika problemleri çözeriz.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        cells: ["1 km", "1000 m", "1 cm", "10 mm", "Çevre", "Kenar Toplamı", "Saat", "60 dk", "Süre", "Etkinlik", "Kare Ç=4a", "Ölçü"],
        k: [
          ["Uzunluk Ölçü Birimleri (km, m, cm, mm)", "MAT.3.4.1"],
          ["Geometrik Şekillerin Çevre Uzunluğu", "MAT.3.4.2"],
          ["Zaman Süresi Hesaplama", "MAT.3.4.3"]
        ],
        s: [
          {
            title: "Kilometre ve Milimetre ile Tanışalım", subtitle: "Çok Büyük ve Çok Küçük Uzunluklar",
            exp: ["Şehirler arası yolları **kilometre ($\\text{km}$)** ile ölçeriz: $1\\text{ km} = 1000\\text{ m}$.", "Karınca boyunu veya madeni para kalınlığını ise **milimetre ($\\text{mm}$)** ile ölçeriz: $1\\text{ cm} = 10\\text{ mm}$."],
            sent: "$4\\text{ cm}$ uzunluğundaki bir silgi {0} milimetredir; $3\\text{ km}$ uzunluğundaki bir koşu yolu ise {1} metredir.",
            blanks: [["40", ["4", "40", "400"]], ["3000", ["300", "3000", "30"]]],
            vTitle: "Uzunluk Dönüşüm Köprüsü",
            vNums: [["1 km = 1000 m", "Şehir yolları", 1], ["1 m = 100 cm", "Sınıf ve boy", 0], ["1 cm = 10 mm", "Silgi ve uç", 1]],
            vSum: "$\\text{cm} \\to \\text{mm}$'de bir sıfır, $\\text{km} \\to \\text{m}$'de üç sıfır eklenir.",
            hint: "$4 \\times 10$ ve $3 \\times 1000$ çarpımlarını yap."
          },
          {
            title: "Çevre Uzunluğu Nedir?", subtitle: "Tüm Dış Kenarların Toplamı",
            steps: ["Bir şeklin etrafını bir kez dolaştığımızda aldığımız toplam yola **çevre** denir.", "Karenin $4$ eşit kenarı olduğu için çevresi $4 \\times \\text{kenar}$ ile bulunur.", "Dikdörtgende $2$ kısa ve $2$ uzun kenar vardır; tüm kenarları toplarız."],
            q: "Kenarları $9\\text{ cm}$, $12\\text{ cm}$ ve $15\\text{ cm}$ olan bir üçgenin çevresi kaç santimetredir?",
            qc: ["34 cm", "36 cm", "38 cm"], qa: "36 cm",
            hint: "Üç kenarı birden topla: $9 + 12 + 15$."
          },
          {
            title: "Kare ve Dikdörtgen Çevresi", subtitle: "Çevreden Kenara Geçiş",
            stem: "Çevresi $32\\text{ cm}$ olan karenin bir kenarı ile, kısa kenarı $5\\text{ cm}$ ve uzun kenarı $11\\text{ cm}$ olan dikdörtgenin **çevresi** kaç cm'dir? İkisinin birer özelliği soruluyor: **Dikdörtgenin çevresi karenin bir kenarından kaç cm fazladır?**",
            opts: ["$20\\text{ cm}$", "$24\\text{ cm}$", "$28\\text{ cm}$", "$32\\text{ cm}$"], ans: "B",
            hint: "Karenin bir kenarı $32 \\div 4 = 8\\text{ cm}$'dir; dikdörtgenin çevresini bulup $8$ çıkar.",
            sol: "Karenin bir kenarı $32 \\div 4 = 8\\text{ cm}$. Dikdörtgenin çevresi $2 \\times (5 + 11) = 32\\text{ cm}$. Fark $32 - 8 = 24\\text{ cm}$.",
            badge: "Çevre Ölçer"
          },
          {
            title: "Dakikadan Saate Dönüşüm", subtitle: "60 Dakika Sınırı",
            exp: ["$1$ saat $60$ dakikadır; $90$ dakikalık bir film $1$ saat $30$ dakika sürer.", "Süreleri toplarken dakika toplamı $60$'ı geçerse $60$ dakikayı $1$ saat olarak saat hanesine ekleriz."],
            sent: "$10.45$'te başlayan toplantı $35$ dakika sürerse saat {0} olur; toplam {1} saat $10$ dakika ise $70$ dakikadır.",
            blanks: [["11.20", ["11.10", "11.20", "11.25"]], ["1", ["1", "2", "3"]]],
            vTitle: "Saat Ekleme Yöntemi",
            vNums: [["10.45 + 15 dk", "= 11.00 (tamla)", 1], ["+ kalan 20 dk", "= 11.20", 1], ["1 sa + 10 dk", "= 70 dk", 0]],
            vSum: "Önce tam saate tamamlayıp artan dakikaları eklemek hata payını sıfırlar.",
            hint: "$35$ dakikanın $15$'i saat $11.00$'ı tamamlar, geriye $20$ dakika kalır."
          },
          {
            title: "İki Etkinlik Arası Süre", subtitle: "Geçen Zamanı Hesaplama",
            steps: ["Saat $13.20$'de başlayan sınav $14.05$'te bittiyse kaç dakika sürmüştür?", "$13.20$'den $14.00$'a kadar $40$ dakika geçer.", "Üzerine $5$ dakika daha eklersek toplam $45$ dakika buluruz."],
            q: "$08.50$'de evden çıkıp $09.15$'te okula varan öğrencinin yolculuğu kaç dakika sürmüştür?",
            qc: ["20 dk", "25 dk", "35 dk"], qa: "25 dk",
            hint: "$09.00$'a $10$ dakika, üzerine $15$ dakika daha var."
          },
          {
            title: "Bahçe Çiti Sorusu", subtitle: "Çevre Modellemesi",
            stem: "Uzun kenarı $18\\text{ m}$, kısa kenarı ise uzun kenarının yarısı kadar olan dikdörtgen bahçenin etrafına $2$ sıra tel çekilecektir. Kaç metre tel gerekir?",
            opts: ["$54\\text{ m}$", "$72\\text{ m}$", "$108\\text{ m}$", "$144\\text{ m}$"], ans: "C",
            hint: "Kısa kenar $18 \\div 2 = 9\\text{ m}$'dir; $1$ sıra çevreyi bulup $2$ ile çarp.",
            sol: "Kısa kenar $9\\text{ m}$. Bahçenin çevresi $2 \\times (18 + 9) = 54\\text{ m}$. $2$ sıra tel için $54 \\times 2 = 108\\text{ m}$ tel gerekir.",
            badge: "Zaman & Çevre Mimarı"
          }
        ]
      }),
      makeUnit({
        track: "3", grade: 3, no: 5,
        title: "Geometrik Cisimler, Doğru-Işın ve Alan",
        subtitle: "Doğru-Işın, Açı ve Birim Karelerle Alan",
        desc: "Doğru, ışın ve açıyı ayırt eder; prizma-piramit yüzlerini sayar ve birim karelerle alan hesaplarız.",
        coverImage: "assets/flow/u12_geometrik_cisimler.jpg",
        cells: ["Doğru", "Işın", "Doğru Parçası", "Açı", "Yüz", "Köşe", "Ayrıt", "Prizma", "Piramit", "Alan", "Birim Kare", "Ölçü"],
        k: [
          ["Doğru, Işın, Doğru Parçası ve Açı", "MAT.3.3.1"],
          ["Cisimlerin Yüz, Köşe ve Ayrıtları", "MAT.3.3.2"],
          ["Birim Karelerle Alan Ölçme", "MAT.3.4.4"]
        ],
        s: [
          {
            title: "Doğru, Işın ve Doğru Parçası", subtitle: "Uzama Yönleri Farkı",
            exp: ["İki ucu da sonsuza kadar uzayan düz çizgiye **doğru**, bir ucu kapalı diğer ucu ok gibi sonsuza uzayana **ışın** (ör. el feneri ışığı) denir.", "İki ucu da sınırlı olana ise **doğru parçası** (ör. cetvel kenarı) adı verilir."],
            sent: "Kalemin ucu açık olup sadece bir yöne uzuyorsa {0} modeli, iki ucu da kesilmiş bir tel ise {1} modelidir.",
            blanks: [["ışın", ["doğru", "ışın", "açı"]], ["doğru parçası", ["doğru", "ışın", "doğru parçası"]]],
            vTitle: "Üç Temel Çizgi",
            vNums: [["←——→ Doğru", "İki yön sınırsız", 0], ["•——→ Işın", "Başlangıç var, 1 ok", 1], ["•——• Parça", "İki uç da sınırlı", 1]],
            vSum: "Bir noktadan çıkan iki ışının arasında **açı** oluşur.",
            hint: "Güneş ışınları da kaynaktan çıkıp tek yöne uzar."
          },
          {
            title: "Cisimlerde Yüz, Köşe, Ayrıt", subtitle: "Küp ve Prizmanın Parçaları",
            steps: ["Prizmaların dokunduğumuz düz kısımlarına **yüz**, yüzlerin birleştiği kenar çizgilere **ayrıt**, sivri uçlara ise **köşe** denir.", "Küp ve kare prizmanın $6$ yüzü, $8$ köşesi ve $12$ ayrıtı vardır.", "Kürenin hiç düz yüzü, köşesi ve ayrıtı yoktur."],
            q: "Bir dikdörtgenler prizmasının kaç tane köşesi ve kaç tane yüzü vardır?",
            qc: ["6 köşe, 8 yüz", "8 köşe, 6 yüz", "8 köşe, 12 yüz"], qa: "8 köşe, 6 yüz",
            hint: "Kibrit kutusunun alt ve üstünde $4$'er sivri köşe olduğunu say."
          },
          {
            title: "Açılar ve Çizgiler Sorusu", subtitle: "Günlük Örnekler",
            stem: "Bir makasın iki bıçağı açıldığında makasın vidasından uzayan iki bıçak arasındaki açıklık hangi geometrik kavramı modeller?",
            opts: ["Açı", "Küre", "Doğru", "Ayrıt"], ans: "A",
            hint: "Ortak bir noktadan çıkan iki ışın arasındaki açıklığa ne denir?",
            sol: "Ortak bir köşe (makas vidası) etrafında açılan iki kol arasında **açı** oluşur.",
            badge: "Doğru-Açı Kaşifi"
          },
          {
            title: "Birim Karelerle Alan Ölçme", subtitle: "İç Yüzey Kaplama",
            exp: ["Çevre bir şeklin kenar çizgisi iken, **alan** şeklin içini kaplayan yüzey büyüklüğüdür.", "Bir dikdörtgenin içini dolduran eş birim kareleri satır $\\times$ sütun şeklinde sayarak alanı buluruz."],
            sent: "$4$ satır ve her satırda $6$ birim kare bulunan bir panonun alanı {0} birim karedir; çevresinden bir kenar seçersek dış kenar değil {1} ölçülür.",
            blanks: [["24", ["10", "20", "24"]], ["yüzey", ["uzunluk", "yüzey", "ağırlık"]]],
            vTitle: "Satır × Sütun Alanı",
            vNums: [["4 Satır", "Dikine dizili", 0], ["6 Sütun", "Yatay dizili", 0], ["4 × 6 = 24", "Birim kare alanı", 1]],
            vSum: "Alan hesaplamada iç bölge boşluksuz ve taşmadan kaplanır.",
            hint: "$4$ satırın her birinde $6$ kare varsa $4 \\times 6$ kare vardır."
          },
          {
            title: "Piramit, Koni ve Silindirin Farkı", subtitle: "Taban ve Yüz Karşılaştırması",
            steps: ["Silindirin $2$ dairesel düz yüzü ve $1$ eğri yüzü vardır; köşesi yoktur.", "Koninin $1$ dairesel tabanı ve $1$ tepe noktası vardır.", "Kare piramidin tabanı kare, yan yüzleri ise tepede birleşen $4$ üçgendir."],
            q: "Yan yüzleri üçgenlerden oluşan geometrik cisim hangisidir?",
            qc: ["Silindir", "Küp", "Piramit"], qa: "Piramit",
            hint: "Mısır piramitlerinin yan yüzlerini hayal et."
          },
          {
            title: "Birim Kare Alan Sorusu", subtitle: "Kaplama Problemi",
            stem: "Yatayda $7$, dikeyde $5$ birim kareden oluşan dikdörtgen zemin döşenirken $12$ tane birim kare döşenmiştir. Geriye döşenmesi gereken **kaç birim kare** kalmıştır?",
            opts: ["$12$", "$23$", "$25$", "$35$"], ans: "B",
            hint: "Önce toplam alan olan $7 \\times 5$'i bul, sonra döşenen $12$ kareyi çıkar.",
            sol: "Toplam alan $7 \\times 5 = 35$ birim karedir. Kalan kısım $35 - 12 = 23$ birim karedir.",
            badge: "Alan Mimarı"
          }
        ]
      }),
      makeUnit({
        track: "3", grade: 3, no: 6,
        title: "Veri Toplama ve Araştırma Sorusu",
        subtitle: "Araştırma Planı, Çetele ve Dikey-Yatay Grafik",
        desc: "İstatistiksel araştırma sorusu hazırlar, verileri çetele ve sıklık tablolarından yatay-dikey grafiklere aktarırız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Araştırma", "Anket", "Tablo", "Dikey Grafik", "Yatay Grafik", "Ölçek", "Veri", "Fark", "Toplam", "Tahmin", "Karar", "Grafik"],
        k: [
          ["Araştırma Sorusu Oluşturma", "MAT.3.5.1"],
          ["Tablodan Dikey/Yatay Grafik Çizme", "MAT.3.5.2"],
          ["Veriye Dayalı Karar Verme", "MAT.3.5.3"]
        ],
        s: [
          {
            title: "İyi Bir Araştırma Sorusu", subtitle: "Değişebilir Veri Toplama",
            exp: ["'Türkiye'nin başkenti neresidir?' sorusunun tek bir cevabı olduğu için araştırma sorusu değildir.", "'Sınıfımızdaki öğrencilerin en sevdiği spor dalı nedir?' sorusu farklı cevaplar ürettiği için bir araştırma sorusudur."],
            sent: "Bir araştırma sorusu birden çok kişiye sorulmalı ve {0} cevaplar elde edilmelidir; bu yüzden 'Atatürk kaç yılında doğdu?' araştırma sorusu {1}.",
            blanks: [["farklı", ["tek", "farklı", "sayısız"]], ["değildir", ["olur", "değildir", "kesindir"]]],
            vTitle: "Araştırma Sorusu Kontrolü",
            vNums: [["Farklı yanıtlar", "Anket uygundur", 1], ["Tek sabit yanıt", "Bilgi sorusudur", 0]],
            vSum: "İstatistik değişkenlik gösteren durumları inceler.",
            hint: "Herkesin aynı cevabı verdiği sorular veri toplamaya uygun değildir."
          },
          {
            title: "Yatay ve Dikey Grafikleri Okuma", subtitle: "Eksenden Değer Yakalama",
            steps: ["Dikey grafikte çubuklar yukarı doğru uzar; yüksekliği sayı ekseninden okuruz.", "Yatay grafikte çubuklar sağa doğru uzar; uzunluk yatay sayı ekseninden okunur.", "Her grafik okumasında önce eksen başlıklarına ve her birimin kaç değer gösterdiğine bakarız."],
            q: "Bir dikey grafikte Kırmızı çubuk $16$, Mavi çubuk $10$, Sarı çubuk $12$ seviyesindeyse en çok ve en az arasındaki fark kaçtır?",
            qc: ["4", "6", "26"], qa: "6",
            hint: "En büyük değer $16$ ile en küçük değer $10$'un farkını al."
          },
          {
            title: "Araştırma Sorusu Seçimi", subtitle: "Kavram Ayrımı",
            stem: "Aşağıdakilerden hangisi sınıfımız için **iyi bir araştırma sorusudur**?",
            opts: ["Bir yılda kaç gün vardır?", "Türkiye'de kaç il bulunur?", "Öğrencilerin okul kütüphanesinden bir ayda aldığı kitap sayısı nedir?", "$5 + 7$ işleminin sonucu kaçtır?"], ans: "C",
            hint: "Kişiden kişiye değişebilecek veri üreten soruyu seç.",
            sol: "Yıl gün sayısı, il sayısı ve $5+7$ tek kesin yanıtlı sorulardır. Ayda alınan kitap sayısı kişiden kişiye değiştiği için araştırma sorusudur.",
            badge: "Araştırmacı"
          },
          {
            title: "Tablodan Eksik Veriyi Bulma", subtitle: "Toplam Sabitse Bilinmeyeni Çıkar",
            exp: ["$32$ kişilik sınıfta gözlüklü ve gözlüksüz öğrenciler sayıldığında toplam hep $32$ olmalıdır.", "Eğer grafik sütunlarından biri silikse, toplam kişiden bilinen diğer grupları çıkararak eksik sütunu bulabiliriz."],
            sent: "$30$ öğrencinin katıldığı ankette $12$ kişi Matematik, $10$ kişi Fen seçmiş ve kalanlar Türkçe seçmişse Türkçe seçenler {0} kişidir; en az seçilen ders {1} olur.",
            blanks: [["8", ["6", "8", "10"]], ["Türkçe", ["Matematik", "Fen", "Türkçe"]]],
            vTitle: "Eksik Veri Hesabı",
            vNums: [["12 + 10 = 22", "Bilinenler toplamı", 0], ["30 - 22 = 8", "Türkçe seçenler", 1]],
            vSum: "Tablo toplamıyla tüm grupların toplamı birbirine denk olmalıdır.",
            hint: "$30$'dan $22$'yi çıkarınca Türkçe seçenlerin sayısı çıkar."
          },
          {
            title: "Veriye Dayalı Karar Verme", subtitle: "Okul Kantini ve Kulüp Seçimi",
            steps: ["Veri sadece sayıları listelemek için değil, doğru karar almak için toplanır.", "Okul kütüphanesine yeni kitap alınacaksa öğrencilerin en çok okuduğu türe öncelik verilir.", "Bir etkinlik günü seçerken en fazla katılımcının uygun olduğu gün belirlenir."],
            q: "Ankette Macera $22$, Bilim $15$, Şiir $6$ oy aldıysa kütüphaneye en çok hangi türden kitap alınmalıdır?",
            qc: ["Macera", "Bilim", "Şiir"], qa: "Macera",
            hint: "En yüksek talebi alan $22$ oylu türü seç."
          },
          {
            title: "Okul Kulübü Veri Sorusu", subtitle: "Ölçekli Çubuk Grafiği",
            stem: "Bir grafikte her $1$ kare $4$ öğrenciyi göstermektedir. Satranç $5$ kare, Resim $3$ kare, Müzik $6$ kare boyundaysa **Müzik kulübünde Satrançtan kaç fazla** öğrenci vardır?",
            opts: ["$1$", "$4$", "$8$", "$24$"], ans: "B",
            hint: "Müzik $6$ kare, Satranç $5$ kare: fark $1$ kare! Her kare $4$ öğrenci olduğuna dikkat et.",
            sol: "Müzik $6 \\times 4 = 24$, Satranç $5 \\times 4 = 20$ öğrenci. Fark $24 - 20 = 4$ öğrencidir.",
            badge: "Veri Analisti"
          }
        ]
      })
    ],
    "4": [
      makeUnit({
        track: "4", grade: 4, no: 1,
        title: "4, 5 ve 6 Basamaklı Doğal Sayılar",
        subtitle: "Binler Bölüğü, Çözümleme ve Örüntüler (MEB 2018)",
        desc: "Altı basamağa kadar doğal sayıları bölüklerine ayırarak okur, en yakın onluğa-yüzlüğe yuvarlar ve sayı örüntülerini çözümleriz.",
        coverImage: "assets/flow/k1_carpan_bloklari.jpg",
        cells: ["Binler Bölüğü", "Birler Bölüğü", "6 Basamak", "Yuvarlama", "Karşılaştır", "Örüntü", "100.000", "Çözümleme", "Sıralama", "10'luk", "100'lük", "Rakam"],
        k: [
          ["Bölükler ve 6 Basamaklı Sayılar", "M.4.1.1"],
          ["Sayıları Yuvarlama ve Karşılaştırma", "M.4.1.2"],
          ["Artan ve Azalan Sayı Örüntüleri", "M.4.1.3"]
        ],
        s: [
          {
            title: "Bölükler Düzeni", subtitle: "Sağdan Sola Üçerli Gruplar",
            exp: ["Çok basamaklı sayıları okumayı kolaylaştırmak için sağdan başlayarak üçerli **bölüklere** ayırırız.", "İlk üçlü **birler bölüğü**, sonraki üçlü ise **binler bölüğü**dür. Örneğin $308\\,045$ sayısı 'üç yüz sekiz bin kırk beş' diye okunur."],
            sent: "$452\\,709$ sayısının binler bölüğünde {0}, birler bölüğünde {1} sayısı bulunur.",
            blanks: [["452", ["452", "709", "45"]], ["709", ["452", "709", "79"]]],
            vTitle: "Bölük Tablosu: 452 709",
            vNums: [["452", "Binler Bölüğü", 1], ["709", "Birler Bölüğü", 0], ["5 × 10.000", "On binler = 50.000", 1]],
            vSum: "Önce binler bölüğünü okuyup 'bin' deriz, sonra birler bölüğünü ekleriz.",
            hint: "Noktadan ya da boşluktan önceki kısım binler bölüğüdür."
          },
          {
            title: "Onluğa ve Yüzlüğe Yuvarlama", subtitle: "Büyük Sayılarda Yuvarlama",
            steps: ["$4\\,364$ sayısını en yakın onluğa yuvarlarken birler basamağına ($4$) bakarız: $4\\,360$ olur.", "En yakın yüzlüğe yuvarlarken ise son iki basamağa ($64$) bakarız; $64 \\ge 50$ olduğundan $4\\,400$ olur.", "Yüzlüğe yuvarlama kuralında yalnızca son iki basamak belirleyicidir."],
            q: "$7\\,248$ sayısı en yakın yüzlüğe yuvarlandığında sonuç ne olur?",
            qc: ["7.200", "7.250", "7.300"], qa: "7.200",
            hint: "Son iki basamağı $48 \\lt 50$ olduğu için kendi yüzlüğünde kalır."
          },
          {
            title: "Çözümleme ve Basamak Sorusu", subtitle: "Değer Hesabı",
            stem: "$684\\,325$ sayısındaki **$8$** ve **$3$** rakamlarının basamak değerleri toplamı kaçtır?",
            opts: ["$80\\,003$", "$80\\,300$", "$83\\,000$", "$800\\,300$"], ans: "B",
            hint: "$8$ on binler basamağında ($80\\,000$), $3$ yüzler basamağındadır ($300$).",
            sol: "$8$'in basamak değeri $80\\,000$, $3$'ün basamak değeri $300$'dür. Toplamları $80\\,300$ olur.",
            badge: "Bölük Kaşifi"
          },
          {
            title: "Büyük Sayıları Karşılaştırma", subtitle: "Önce Basamak Sayısı, Sonra En Sol",
            exp: ["İki doğal sayıdan basamak sayısı fazla olan her zaman büyüktür ($102\\,000 \\gt 99\\,999$).", "Basamak sayıları eşitse soldan sağa aynı basamaktaki rakamlar karşılaştırılır."],
            sent: "$57\\,840$ ile $57\\,480$ karşılaştırıldığında yüzler basamağına bakılır ve $57\\,840$ {0} olur; en küçük $5$ basamaklı sayı ise {1} olarak yazılır.",
            blanks: [["büyüktür", ["küçüktür", "büyüktür", "eşittir"]], ["10.000", ["10.000", "10.234", "99.999"]]],
            vTitle: "Soldan Sağa Kıyas",
            vNums: [["5 = 5, 7 = 7", "Binler eşit", 0], ["8 > 4", "Yüzler belirler", 1], ["10.000", "En küçük 5 basamaklı", 0]],
            vSum: "Eşitlik bozulduğu ilk basamakta büyük rakamlı sayı büyüktür.",
            hint: "$8$ yüzlük $4$ yüzlükten büyüktür."
          },
          {
            title: "Kuralı Değişmeyen Sayı Örüntüsü", subtitle: "Adımlar Arası Sabit Fark",
            steps: ["$120, 135, 150, 165, \\dots$ örüntüsünde her adımda $+15$ eklenir.", "Azalan örüntülerde ise aynı miktar çıkarılır: $500, 460, 420, 380, \\dots$ ($-40$).", "Eksik adım iki komşu terimin yardımıyla bulunur."],
            q: "$84, 93, 102, \\square, 120$ örüntüsünde $\\square$ sayısı kaçtır?",
            qc: ["109", "111", "112"], qa: "111",
            hint: "Her adımda $+9$ artış vardır: $102 + 9$ işlemini yap."
          },
          {
            title: "En Büyük Çift Sayı Sorusu", subtitle: "Rakam Dizme",
            stem: "$2, 0, 7, 9, 5$ rakamlarının tümü birer kez kullanılarak yazılan **en büyük 5 basamaklı çift sayı** hangisidir?",
            opts: ["$97\\,520$", "$97\\,502$", "$97\\,250$", "$95\\,720$"], ans: "A",
            hint: "En büyük sayı için büyük rakamları sola diz; $0$ birler basamağında olunca sayı hem çift kalır hem büyük basamaklar bozulmaz.",
            sol: "Büyükten küçüğe $9, 7, 5, 2, 0$ dizilirse $97\\,520$ oluşur; sonu $0$ olduğundan zaten çifttir ve yazılabilecek en büyük değerdir.",
            badge: "Büyük Sayı Ustası"
          }
        ]
      }),
      makeUnit({
        track: "4", grade: 4, no: 2,
        title: "Dört İşlem ve Zihinden Hesaplama",
        subtitle: "4 Basamaklı Toplama-Çıkarma, Çarpma ve Bölme",
        desc: "Dört basamaklı toplama-çıkarma, 3×2 basamaklı çarpma, 4 basamaklı bölme ve parantezsiz/çok adımlı problemleri çözeriz.",
        coverImage: "assets/flow/k2_carpan_yontemleri.jpg",
        cells: ["4 Basamak", "325×24", "Bölme", "Tahmin", "100 ile ×", "5 ile ÷", "Zihinden", "Parantez", "Eşitlik", "Fark", "Çarpan", "Problem"],
        k: [
          ["Dört Basamaklı Toplama ve Çıkarma", "M.4.1.4"],
          ["3 Basamaklı × 2 Basamaklı Çarpma", "M.4.1.5"],
          ["Bölme İşlemi ve Problem Çözme", "M.4.1.6"]
        ],
        s: [
          {
            title: "Dört Basamaklı İşlem ve Tahmin", subtitle: "Binlik ve Yüzlük Hassasiyeti",
            exp: ["$4\\,835 + 2\\,490$ işleminde birler $5$, onlar $12$ ($2$ yaz elde $1$), yüzler $13$ ($3$ yaz elde $1$), binler $7$ olur: $7\\,325$.", "Zihinden tahmin ederken sayıları en yakın yüzlüğe yuvarlayıp hızlıca kontrol ederiz: $4\\,800 + 2\\,500 = 7\\,300$."],
            sent: "$5\\,204 - 1\\,860$ işleminde binlik ve yüzlük ödünç alınarak gerçek fark {0} bulunur; sayılar en yakın yüzlüğe yuvarlanırsa tahmini fark {1} olur.",
            blanks: [["3344", ["3344", "3444", "3364"]], ["3300", ["3200", "3300", "3400"]]],
            vTitle: "Tahmin ve Gerçek Karşılaştırması",
            vNums: [["5.204 → 5.200", "Yüzlük yuvarlama", 0], ["1.860 → 1.900", "Yüzlük yuvarlama", 0], ["Gerçek: 3.344", "Tahmin: 3.300", 1]],
            vSum: "Tahmin, sonucun doğruluğunu kontrol eden harika bir pusuladır.",
            hint: "$5\\,200 - 1\\,900 = 3\\,300$ olduğunu kontrol et."
          },
          {
            title: "3 Basamaklı × 2 Basamaklı Çarpma", subtitle: "Basamak Kaydırmayı Unutma!",
            steps: ["$246 \\times 35$ çarpılırken önce birler basamağıyla ($5 \\times 246 = 1\\,230$) çarpılır.", "Sonra onlar basamağıyla ($3 \\times 246 = 738$) çarpılıp **bir basamak sola kaydırılarak** (yani $7\\,380$ olarak) altına yazılır.", "İki kısmi çarpım toplanır: $1\\,230 + 7\\,380 = 8\\,610$."],
            q: "$125 \\times 16$ çarpımının sonucu kaçtır?",
            qc: ["1.800", "2.000", "2.200"], qa: "2.000",
            hint: "$125 \\times 8 = 1\\,000$ olduğundan $125 \\times 16$ bunun iki katıdır."
          },
          {
            title: "Tiyatro Salonu Sorusu", subtitle: "Çarpma Problemi",
            stem: "Bir tiyatro salonunda $18$ sıra ve her sırada $24$ koltuk vardır. Salondaki koltukların yarısı çocuk, yarısı yetişkin bölümü olduğuna göre **kaç çocuk koltuğu** vardır?",
            opts: ["$186$", "$204$", "$216$", "$432$"], ans: "C",
            hint: "Önce $18 \\times 24$ ile toplam koltuğu bul, sonra $2$'ye böl.",
            sol: "Toplam koltuk $18 \\times 24 = 432$'dir. Yarısı çocuk olduğundan $432 \\div 2 = 216$ çocuk koltuğu vardır.",
            badge: "Çarpma Uzmanı"
          },
          {
            title: "Pratik Zihinden Bölme ve Çarpma", subtitle: "5, 10, 25 ve 50 Stratejileri",
            exp: ["Bir sayıyı $5$ ile kısa yoldan çarpmak için önce $10$ ile çarpıp $2$'ye bölebiliriz ($36 \\times 5 = 360 \\div 2 = 180$).", "Benzer şekilde $5$'e bölmek için $2$ ile çarpıp $10$'a bölmek de çok hızlıdır: $140 \\div 5 = 280 \\div 10 = 28$."],
            sent: "$48 \\times 5$ işlemini kısa yoldan yapmak için $480$'i $2$'ye bölerek {0} buluruz; $320 \\div 5$ içinse $640$'ı $10$'a bölüp {1} elde ederiz.",
            blanks: [["240", ["190", "240", "260"]], ["64", ["32", "64", "128"]]],
            vTitle: "5 İle Zihinden Hileler",
            vNums: [["× 5", "× 10 sonra ÷ 2", 1], ["÷ 5", "× 2 sonra ÷ 10", 1], ["× 25", "× 100 sonra ÷ 4", 0]],
            vSum: "$10$ ve $100$ ile işlem yapmak zihinden hesabı saniyelere indirir.",
            hint: "$480$'in yarısı $240$, $640 \\div 10 = 64$'tür."
          },
          {
            title: "Dört Basamaklıyı Bölme", subtitle: "Bölümün Basamak Sayısını Tahmin",
            steps: ["$2\\,436 \\div 12$ işleminde önce $24 \\div 12 = 2$ yazılır.", "Sonra indirilen $3$'ün içinde $12$ olmadığı için bölüme mutlaka bir **$0$** eklenir!", "Ardından $6$ da indirilip $36 \\div 12 = 3$ bulunur; sonuç $23$ değil **$203$** olur."],
            q: "$4\\,214 \\div 14$ bölme işleminin sonucu kaçtır?",
            qc: ["31", "301", "310"], qa: "301",
            hint: "$42 \\div 14 = 3$ yaptıktan sonra $1$ inince içinde $14$ olmadığından bölüme $0$ koymayı unutma!"
          },
          {
            title: "Fabrika Paketleme Sorusu", subtitle: "Çok Adımlı Bölme Problemi",
            stem: "Bir fırında üretilen $1\\,440$ poğaçanın $180$ tanesi okula gönderiliyor. Kalan poğaçalar her kutuda $15$ adet olacak biçimde kutulanırsa kaç kutu gerekir?",
            opts: ["$74$", "$82$", "$84$", "$96$"], ans: "C",
            hint: "Önce $1\\,440 - 180$ ile kalan poğaçayı bul, sonra $15$'e böl.",
            sol: "Kalan poğaça $1\\,440 - 180 = 1\\,260$. Gerekli kutu $1\\,260 \\div 15 = 84$ tanedir.",
            badge: "Dört İşlem Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "4", grade: 4, no: 3,
        title: "Kesirler ve Kesirlerde İşlemler",
        subtitle: "Basit, Bileşik, Tam Sayılı Kesir ve Toplama-Çıkarma",
        desc: "Basit, bileşik ve tam sayılı kesirleri tanır; paydaları eşit kesirleri sıralar, toplar ve çıkarırız.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Basit", "Bileşik", "Tam Sayılı", "Payda Eşit", "Toplama", "Çıkarma", "Birim Kesir", "Sıralama", "1 Bütün", "3/4 + 2/4", "Çokluğun Kesri", "Problem"],
        k: [
          ["Basit, Bileşik ve Tam Sayılı Kesirler", "M.4.1.7"],
          ["Paydaları Eşit Kesirleri Sıralama", "M.4.1.8"],
          ["Paydaları Eşit Kesirlerde Toplama-Çıkarma", "M.4.1.9"]
        ],
        s: [
          {
            title: "Üç Kesir Türü", subtitle: "Pay ile Payda Arasındaki İlişki",
            exp: ["**Basit kesirde** pay paydadan küçüktür ($\\frac{3}{7} \\lt 1$).", "**Bileşik kesirde** pay paydaya eşit veya paydadan büyüktür ($\\frac{5}{5}, \\frac{9}{4} \\ge 1$). Önünde tam sayı varsa **tam sayılı kesir** denir ($2\\frac{1}{4}$)."],
            sent: "$\\frac{7}{4}$ kesri payı paydasından büyük olduğu için {0} kesirdir; $1\\frac{3}{5}$ ise {1} kesre örnektir.",
            blanks: [["bileşik", ["basit", "bileşik", "birim"]], ["tam sayılı", ["basit", "bileşik", "tam sayılı"]]],
            vTitle: "Kesir Türü Özeti",
            vNums: [["3/8", "Pay < Payda (Basit)", 0], ["8/5", "Pay ≥ Payda (Bileşik)", 1], ["2 1/3", "Tam + Basit", 0]],
            vSum: "Her tam sayılı kesir bir bileşik kesre eşittir.",
            hint: "Payı büyük olan bileşik, önündeki tam kısımla yazılan tam sayılı kesirdir."
          },
          {
            title: "Paydaları Eşit veya Payları Eşit Sıralama", subtitle: "İki Farklı Karşılaştırma Kuralı",
            steps: ["Paydalar eşitse, **payı büyük olan** kesir büyüktür ($\\frac{5}{9} \\gt \\frac{2}{9}$).", "Paylar eşitse, **paydası küçük olan** kesir daha büyüktür ($\\frac{3}{4} \\gt \\frac{3}{8}$).", "Çünkü aynı sayıyı daha az parçaya bölünce her dilim büyür."],
            q: "$\\frac{4}{7}$, $\\frac{4}{5}$ ve $\\frac{4}{9}$ kesirlerinin en büyüğü hangisidir?",
            qc: ["4/9", "4/7", "4/5"], qa: "4/5",
            hint: "Payları ($4$) eşit olduğu için paydası en küçük olan en büyüktür."
          },
          {
            title: "Bütünün Kesrini Hesaplama", subtitle: "Çokluğun Belirli Kesri",
            stem: "$60\\text{ TL}$ harçlığının $\\frac{3}{5}$'ünü kitap almaya harcayan Mert'in cebinde **kaç TL** parası kalmıştır?",
            opts: ["$12\\text{ TL}$", "$24\\text{ TL}$", "$36\\text{ TL}$", "$48\\text{ TL}$"], ans: "B",
            hint: "$60$'ın $\\frac{1}{5}$'i $12$'dir; $\\frac{3}{5}$'ünü bulup $60$'tan çıkar.",
            sol: "Harcanan para $(60 \\div 5) \\times 3 = 12 \\times 3 = 36\\text{ TL}$. Kalan para $60 - 36 = 24\\text{ TL}$ olur.",
            badge: "Kesir Hesapçısı"
          },
          {
            title: "Paydaları Eşit Toplama ve Çıkarma", subtitle: "Ortak Payda Aynen Kalır!",
            exp: ["Paydaları aynı kesirleri toplarken veya çıkarırken yalnızca **paylar** toplanır ya da çıkarılır; ortak payda değiştirilmez.", "Örneğin $\\frac{3}{8} + \\frac{4}{8} = \\frac{7}{8}$ ve $\\frac{7}{8} - \\frac{2}{8} = \\frac{5}{8}$ olur."],
            sent: "$\\frac{5}{12} + \\frac{4}{12}$ toplamı {0} eder; $1$ bütünden bu toplamı çıkarırsak geriye {1} kalır.",
            blanks: [["9/12", ["9/12", "9/24", "1/12"]], ["3/12", ["2/12", "3/12", "4/12"]]],
            vTitle: "Ortak Payda İşlemi",
            vNums: [["5/12 + 4/12", "= 9/12", 1], ["1 Bütün", "= 12/12", 0], ["12/12 - 9/12", "= 3/12", 1]],
            vSum: "$1$ bütünü ortak paydaya göre $\\frac{12}{12}$ olarak yazıp çıkarırız.",
            hint: "Payda $12$ olarak sabit kalır; $1 = \\frac{12}{12}$ kullan."
          },
          {
            title: "Tam Sayılı Kesirle Toplama", subtitle: "Tamları ve Kesirleri Ayrı Topla",
            steps: ["$2\\frac{3}{6} + 1\\frac{2}{6}$ işleminde önce tam kısımları toplarız: $2 + 1 = 3$.", "Sonra kesir kısımlarını toplarız: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.", "Birleştirdiğimizde sonuç $3\\frac{5}{6}$ çıkar."],
            q: "$4\\frac{5}{9} - 1\\frac{2}{9}$ işleminin sonucu nedir?",
            qc: ["3 3/9", "3 7/9", "5 3/9"], qa: "3 3/9",
            hint: "Tamdan tamı ($4-1$), paydan payı ($5-2$) çıkar."
          },
          {
            title: "Koşu Yolu Kesir Sorusu", subtitle: "Payda Eşit Toplama-Çıkarma",
            stem: "Bir parkurun sabah $\\frac{4}{10}$'unu, öğleden sonra $\\frac{3}{10}$'unu koşan bir sporcu parkurun **kaçta kaçını henüz koşmamıştır**?",
            opts: ["$\\frac{3}{10}$", "$\\frac{7}{10}$", "$\\frac{3}{20}$", "$\\frac{7}{20}$"], ans: "A",
            hint: "Önce koştuğu kısmı topla, sonra tamamı olan $\\frac{10}{10}$'dan çıkar.",
            sol: "Koşulan yol $\\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10}$. Koşulmayan kısım $\\frac{10}{10} - \\frac{7}{10} = \\frac{3}{10}$'dur.",
            badge: "Kesir Ustası"
          }
        ]
      }),
      makeUnit({
        track: "4", grade: 4, no: 4,
        title: "Açılar, Üçgen-Kare-Dikdörtgen ve Simetri",
        subtitle: "Dar, Dik, Geniş Açı ve Üçgen Türleri",
        desc: "Açıölçer kullanarak açıları dar, dik, geniş, doğru diye sınıflar; kenarlarına göre üçgenleri ve ayna simetrisini inceleriz.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        cells: ["Dar Açı", "Dik 90°", "Geniş", "Doğru 180°", "Açıölçer", "Eşkenar", "İkizkenar", "Çeşitkenar", "Simetri", "Köşe", "Kenar", "Düzlem"],
        k: [
          ["Açıları Ölçme ve Sınıflandırma", "M.4.2.1"],
          ["Kenarlarına Göre Üçgen Çeşitleri", "M.4.2.2"],
          ["Kare, Dikdörtgen ve Ayna Simetrisi", "M.4.2.3"]
        ],
        s: [
          {
            title: "Dört Temel Açı Türü", subtitle: "90° ve 180° Referansları",
            exp: ["Ölçüsü tam $90^\\circ$ olan açıya **dik açı**, $90^\\circ$'den küçük olanlara **dar açı** denir.", "Ölçüsü $90^\\circ$ ile $180^\\circ$ arasında olanlara **geniş açı**, tam $180^\\circ$ olan düz çizgiye ise **doğru açı** denir."],
            sent: "$89^\\circ$'lik bir açı dik açıdan küçük olduğu için {0} açıdır; $95^\\circ$'lik açı ise $90^\\circ$'den büyük olduğundan {1} açıdır.",
            blanks: [["dar", ["dar", "dik", "geniş"]], ["geniş", ["dar", "dik", "geniş"]]],
            vTitle: "Açı Sınıflandırma Cetveli",
            vNums: [["1°..89°", "Dar Açı", 0], ["90°", "Dik Açı", 1], ["91°..179°", "Geniş Açı", 0]],
            vSum: "Açının sadece $1^\\circ$ farkı bile türünü değiştirir!",
            hint: "$90^\\circ$ sınırının altı dar, üstü (180'e kadar) geniştir."
          },
          {
            title: "Açıölçer (İletki) Nasıl Kullanılır?", subtitle: "Merkezi Köşeye Hizala",
            steps: ["Açıölçerin ortasındaki merkez noktasını açının köşesine tam yerleştiririz.", "Açının bir kolunu $0^\\circ$ çizgisiyle hizalayıp diğer kolun kaç dereceyi gösterdiğini okuruz.", "Dar görünüyorsa $90^\\circ$'den küçük, geniş görünüyorsa $90^\\circ$'den büyük skalayı seçeriz."],
            q: "Bir dik açı ile $35^\\circ$'lik bir dar açının ölçüleri toplamı hangi açı türüne girer?",
            qc: ["Dar açı", "Geniş açı", "Doğru açı"], qa: "Geniş açı",
            hint: "$90^\\circ + 35^\\circ = 125^\\circ$ ölçüsü $90^\\circ$ ile $180^\\circ$ arasındadır."
          },
          {
            title: "Saat Akrep-Yelkovan Açısı", subtitle: "Açı Sınıflama Sorusu",
            stem: "Saat tam **$03.00$** iken akrep ile yelkovan arasındaki küçük açı **dik açı** ($90^\\circ$)'dır. Buna göre saat **$05.00$** iken akrep ile yelkovan arasındaki küçük açı nasıl sınıflandırılır?",
            opts: ["Dar açı", "Dik açı", "Geniş açı", "Doğru açı"], ans: "C",
            hint: "$03.00$'da $90^\\circ$ iken $05.00$'da kollar daha çok açılmıştır (saat aralığı $30^\\circ$'dir).",
            sol: "Her saat arası $30^\\circ$ olduğundan saat $05.00$'da aradaki açı $5 \\times 30^\\circ = 150^\\circ$'dir; $90^\\circ \\lt 150^\\circ \\lt 180^\\circ$ olduğu için **geniş açıdır**.",
            badge: "Açı Ölçer Ustası"
          },
          {
            title: "Kenar Uzunluğuna Göre Üçgenler", subtitle: "Eşkenar, İkizkenar, Çeşitkenar",
            exp: ["Üç kenarı da aynı uzunlukta olan üçgene **eşkenar üçgen** ($5\\text{ cm}, 5\\text{ cm}, 5\\text{ cm}$) denir.", "Yalnızca iki kenarı eşitse **ikizkenar**, üç kenarı da birbirinden farklıysa **çeşitkenar üçgen** adını alır."],
            sent: "Kenar uzunlukları $7\\text{ cm}, 7\\text{ cm}, 10\\text{ cm}$ olan üçgen {0} üçgendir; çevresi $24\\text{ cm}$ olan bir eşkenar üçgenin her kenarı {1} cm'dir.",
            blanks: [["ikizkenar", ["eşkenar", "ikizkenar", "çeşitkenar"]], ["8", ["6", "8", "12"]]],
            vTitle: "Üçgen Türleri",
            vNums: [["a = b = c", "Eşkenar Üçgen", 1], ["a = b ≠ c", "İkizkenar Üçgen", 0], ["a ≠ b ≠ c", "Çeşitkenar Üçgen", 0]],
            vSum: "Eşkenar üçgenin çevresini $3$'e bölerek bir kenarını buluruz.",
            hint: "$24 \\div 3 = 8\\text{ cm}$ bir kenar uzunluğudur."
          },
          {
            title: "Kare, Dikdörtgen ve Ayna Simetrisi", subtitle: "Köşegen ve Dik Açılar",
            steps: ["Hem karenin hem dikdörtgenin bütün iç açıları $90^\\circ$ (dik) dir ve karşılıklı kenarları paraleldir.", "Kareli kağıtta verilen şeklin simetri doğrusuna göre yansımasını çizerken her köşenin doğruya uzaklığını aynı sayıda kare sayarak işaretleriz.", "Ayna simetrisinde şeklin boyutu değişmez, yalnızca yönü ters döner."],
            q: "Simetri doğrusundan $3$ birim solda bulunan bir $A$ köşesinin yansıması doğrunun kaç birim sağındadır?",
            qc: ["3 birim", "6 birim", "9 birim"], qa: "3 birim",
            hint: "Simetri doğrusuna uzaklık sol tarafta da sağ tarafta da eşittir."
          },
          {
            title: "Üçgen Çevre ve Tür Sorusu", subtitle: "Kenar Hesaplama",
            stem: "Çevresi $28\\text{ cm}$ olan ikizkenar bir üçgenin farklı uzunluktaki taban kenarı $10\\text{ cm}$'dir. Eşit kenarlarından biri kaç santimetredir?",
            opts: ["$6\\text{ cm}$", "$8\\text{ cm}$", "$9\\text{ cm}$", "$18\\text{ cm}$"], ans: "C",
            hint: "$28$'den tabanı ($10$'u) çıkarıp kalanı $2$ eşit kenara böl.",
            sol: "İki eşit kenarın toplamı $28 - 10 = 18\\text{ cm}$'dir. Bir eşit kenar $18 \\div 2 = 9\\text{ cm}$ olur.",
            badge: "Geometri Şefi"
          }
        ]
      }),
      makeUnit({
        track: "4", grade: 4, no: 5,
        title: "Zaman, Uzunluk, Kütle ve Sıvı Ölçme",
        subtitle: "Saniye-Saat, Ton-kg-g-mg ve Litre-Mililitre",
        desc: "Saat-dakika-saniye, uzunluk (km..mm), kütle (ton..mg) ve sıvı ölçme (L-mL) birimleri arasında dönüşümler yaparız.",
        coverImage: "assets/flow/flow_sade_ders_konsept.jpg",
        cells: ["1 dk=60 sn", "km-m-cm-mm", "1 ton", "1000 kg", "1 kg=1000 g", "1 g=1000 mg", "1 L=1000 mL", "Yarım L", "Çeyrek L", "Kütle", "Sıvı", "Dönüşüm"],
        k: [
          ["Zaman Birimleri (sa-dk-sn)", "M.4.3.1"],
          ["Kütle Ölçme (t, kg, g, mg)", "M.4.3.2"],
          ["Sıvı Ölçme (L ve mL)", "M.4.3.3"]
        ],
        s: [
          {
            title: "Saat, Dakika ve Saniye", subtitle: "60'lı Zaman Sistemi",
            exp: ["Çok kısa süreleri **saniye ($\\text{sn}$)** ile ölçeriz: $1\\text{ dk} = 60\\text{ sn}$ ve $1\\text{ sa} = 60\\text{ dk}$.", "Örneğin $2$ dakika $15$ saniye $= 120 + 15 = 135$ saniye eder."],
            sent: "$3$ dakika {0} saniyedir; $1$ yıl ise {1} haftaya karşılık gelir.",
            blanks: [["180", ["120", "180", "240"]], ["52", ["12", "52", "365"]]],
            vTitle: "Zaman Dönüşümleri",
            vNums: [["1 sa = 60 dk", "3 sa = 180 dk", 0], ["1 dk = 60 sn", "3 dk = 180 sn", 1], ["1 yıl = 52 hf", "4 mevsim = 12 ay", 0]],
            vSum: "Büyük birimden küçük birime inerken $60$ ile çarparız.",
            hint: "$3 \\times 60 = 180$ saniye olur."
          },
          {
            title: "Ton, Kilogram, Gram ve Miligram", subtitle: "Biner Biner Büyüyen Kütleler",
            steps: ["Kamyon ve gemi yüklerini **ton ($\\text{t}$)** ile ölçeriz: $1\\text{ ton} = 1\\,000\\text{ kg}$.", "Baharat, altın gibi hafif şeyleri **gram ($\\text{g}$)**, ilaç etken maddesini **miligram ($\\text{mg}$)** ile ölçeriz.", "$1\\text{ kg} = 1\\,000\\text{ g}$ ve yarım kilogram $= 500\\text{ g}$, çeyrek kilogram $= 250\\text{ g}$'dır."],
            q: "$3\\text{ kg} \\, 250\\text{ g}$ ile $750\\text{ g}$ toplamda kaç kilogram eder?",
            qc: ["3 kg", "4 kg", "5 kg"], qa: "4 kg",
            hint: "$250\\text{ g} + 750\\text{ g} = 1\\,000\\text{ g} = 1\\text{ kg}$ yapar."
          },
          {
            title: "Kamyon Yükü Sorusu", subtitle: "Ton-Kilogram Dönüşümü",
            stem: "Boşken kütlesi $2\\text{ ton} \\, 400\\text{ kg}$ olan bir kamyona $1\\,600\\text{ kg}$ kömür yüklendi. Kamyonun toplam kütlesi kaç **ton** oldu?",
            opts: ["$3\\text{ ton}$", "$4\\text{ ton}$", "$5\\text{ ton}$", "$40\\text{ ton}$"], ans: "B",
            hint: "Önce hepsini kilograma çevirip topla ($2\\,400 + 1\\,600$).",
            sol: "$2\\text{ t} \\, 400\\text{ kg} = 2\\,400\\text{ kg}$. Kömürle birlikte $2\\,400 + 1\\,600 = 4\\,000\\text{ kg} = 4\\text{ ton}$.",
            badge: "Ölçü Ustası"
          },
          {
            title: "Litre ve Mililitre (L – mL)", subtitle: "1 Litre = 1.000 mL",
            exp: ["Sıvı kaplarının hacmini **litre ($\\text{L}$)** ve küçük miktarları **mililitre ($\\text{mL}$)** ile ölçeriz.", "$1\\text{ L} = 1\\,000\\text{ mL}$, yarım litre $= 500\\text{ mL}$ ve çeyrek litre $= 250\\text{ mL}$'dir."],
            sent: "$2\\frac{1}{2}\\text{ L}$ meyve suyu {0} mililitredir ve bu meyve suyu {1} mL'lik $5$ bardağa eşit doldurulabilir.",
            blanks: [["2500", ["1500", "2050", "2500"]], ["500", ["250", "500", "1000"]]],
            vTitle: "Sıvı Ölçme Merdiveni",
            vNums: [["1 L", "1.000 mL", 1], ["1/2 L (Yarım)", "500 mL", 0], ["1/4 L (Çeyrek)", "250 mL", 1]],
            vSum: "Litreyi mililitreye çevirirken $1\\,000$ ile çarparız.",
            hint: "$2\\,000 + 500 = 2\\,500\\text{ mL}$, sonra $5$'e böl."
          },
          {
            title: "Karışık Birimleri Toplama", subtitle: "Önce Aynı Birime Getir",
            steps: ["$3\\text{ m} \\, 40\\text{ cm} + 160\\text{ cm}$ gibi işlemlerde tüm verileri aynı birime çeviririz.", "$3\\text{ m} \\, 40\\text{ cm} = 340\\text{ cm}$ yapar.", "$340 + 160 = 500\\text{ cm} = 5\\text{ m}$ elde edilir."],
            q: "$4\\text{ L}$ suyun içinden $1\\,250\\text{ mL}$ alınırsa kaç mL su kalır?",
            qc: ["2.250 mL", "2.750 mL", "3.250 mL"], qa: "2.750 mL",
            hint: "$4\\text{ L} = 4\\,000\\text{ mL}$ yazarak $1\\,250$ çıkar."
          },
          {
            title: "Su Şişesi Dolum Sorusu", subtitle: "Litre-Mililitre Uygulaması",
            stem: "$6\\text{ litrelik}$ bir damacanadaki su, her biri $250\\text{ mL}$'lik küçük bardaklara tamamen paylaştırılırsa **kaç bardak** su çıkar?",
            opts: ["$12$", "$18$", "$24$", "$30$"], ans: "C",
            hint: "$1$ litrede $4$ tane $250\\text{ mL}$ olduğunu hatırla ve $6$ ile çarp.",
            sol: "$6\\text{ L} = 6\\,000\\text{ mL}$. $6\\,000 \\div 250 = 24$ bardak (veya $6 \\times 4 = 24$) su çıkar.",
            badge: "Dönüşüm Yıldızı"
          }
        ]
      }),
      makeUnit({
        track: "4", grade: 4, no: 6,
        title: "Çevre, Alan ve Sütun Grafiği",
        subtitle: "Çevre-Alan Problemleri ve Veri Yorumlama",
        desc: "Kare ve dikdörtgenlerin çevre ve birim kare alanlarını ilişkilendirir; sütun grafiklerinden karşılaştırmalı yorum yaparız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Çevre", "Alan", "Birim Kare", "Aynı Çevre", "Farklı Alan", "Sütun Grafiği", "Yatay Sütun", "Dikey Sütun", "Eksen", "En Fazla", "Fark", "Ortalama"],
        k: [
          ["Kare ve Dikdörtgen Çevre İlişkisi", "M.4.3.4"],
          ["Birim Kare ile Alan Tahmini ve Hesabı", "M.4.3.5"],
          ["Sütun Grafiği Okuma ve Yorumlama", "M.4.4.1"]
        ],
        s: [
          {
            title: "Aynı Çevre, Farklı Alan!", subtitle: "Dikdörtgenleri Kıyaslama",
            exp: ["Kenarları $(2\\text{ cm}, 6\\text{ cm})$ olan dikdörtgenin çevresi $16\\text{ cm}$, alanı $12$ birim karedir.", "Kenarları $(4\\text{ cm}, 4\\text{ cm})$ olan karenin de çevresi $16\\text{ cm}$ olduğu halde alanı $16$ birim karedir!"],
            sent: "Çevresi $20\\text{ cm}$ olan bir karede bir kenar {0} cm olur ve alanı {1} birim kare çıkar.",
            blanks: [["5", ["4", "5", "10"]], ["25", ["20", "25", "40"]]],
            vTitle: "Çevre = 20 cm Kare",
            vNums: [["20 ÷ 4 = 5 cm", "Bir kenar", 1], ["5 × 5 = 25 br²", "Alanı", 1]],
            vSum: "Aynı çevreye sahip dikdörtgenlerden en büyük alana kare sahiptir.",
            hint: "$20$'yi $4$'e bölerek kenarı bul, sonra kendisiyle çarp."
          },
          {
            title: "Birim Kare ile Alan Hesabı", subtitle: "Parçalı Şekillerin Alanı",
            steps: ["L şeklindeki bir odanın alanını bulmak için onu $2$ ayrı dikdörtgene bölebiliriz.", "İlk dikdörtgenin birim karelerini ($3 \\times 4 = 12$) ve ikinci dikdörtgenin karelerini ($2 \\times 5 = 10$) hesaplarız.", "İkisini toplayarak ($12 + 10 = 22$) toplam alanı buluruz."],
            q: "Uzun kenarı $9\\text{ br}$, kısa kenarı $4\\text{ br}$ olan dikdörtgenden bir kenarı $3\\text{ br}$ olan kare kesilirse kalan alan kaç birim karedir?",
            qc: ["24", "27", "30"], qa: "27",
            hint: "$36 - 9$ işlemini yap."
          },
          {
            title: "Pano Alanı Sorusu", subtitle: "Dikdörtgen Alan Modellemesi",
            stem: "Kısa kenarı $6\\text{ cm}$, uzun kenarı ise kısa kenarının $2$ katı olan dikdörtgen kartonun **alanı** kaç $\\text{cm}^2$'dir?",
            opts: ["$36$", "$48$", "$64$", "$72$"], ans: "D",
            hint: "Uzun kenar $6 \\times 2 = 12\\text{ cm}$'dir; alan için $6 \\times 12$'yi çarp.",
            sol: "Uzun kenar $6 \\times 2 = 12\\text{ cm}$. Alan $= 6 \\times 12 = 72\\text{ cm}^2$.",
            badge: "Alan Şampiyonu"
          },
          {
            title: "Sütun Grafiğini Okuma", subtitle: "Dikey ve Yatay Sütunlar",
            exp: ["Sütun grafiği, farklı kategorilerin sayısal büyüklüklerini eşit genişlikteki çubuklarla yan yana karşılaştırır.", "Ölçek ekseni bazen $2$'şer, $5$'er ya da $10$'ar artabilir; çubuğun ulaştığı çizgiyi dikkatle okumalısın."],
            sent: "Sütun grafiğinde Pazartesi $40$, Salı $55$ ve Çarşamba $35$ ekmek satılmışsa üç günde toplam {0} ekmek satılmıştır; en çok ile en az satış farkı {1} ekmektir.",
            blanks: [["130", ["120", "130", "140"]], ["20", ["15", "20", "25"]]],
            vTitle: "Sütun Grafiği Özeti",
            vNums: [["40 + 55 + 35", "= 130 toplam", 1], ["55 - 35", "= 20 fark", 1]],
            vSum: "Sütun yüksekliği arttıkça kategori değeri de o oranda büyür.",
            hint: "Toplam için üç değeri topla, fark için en yüksek ile en düşüğü çıkar."
          },
          {
            title: "Tablo ve Grafik Arası Geçiş", subtitle: "Doğru Yorum Seçimi",
            steps: ["Sütun grafiğinde iki sütun aynı hizadaysa değerleri eşittir.", "Bir grafiğe bakarak yalnızca grafikteki verilerle ilgili kesin yorum yapılabilir; grafikte yer almayan bir bilgi uydurulmaz.", "Sütunların artış ve azalış eğilimlerini karşılaştırarak sonuç çıkarırız."],
            q: "Bir grafikte A okulu $120$, B okulu $150$, C okulu $90$ fidan dikmişse, C okulu toplam fidanların kaçta kaçını dikmiştir?",
            qc: ["1/3'ünü", "1/4'ünü", "1/5'ini"], qa: "1/4'ünü",
            hint: "Toplam $120 + 150 + 90 = 360$ fidandır; $90$ bunun kaçta biridir?"
          },
          {
            title: "4. Sınıf Final Veri Sorusu", subtitle: "Sütun Grafiği Analizi",
            stem: "Bir spor salonuna hafta içi gelen kişi sayıları sütun grafiğinde: Pzt $25$, Salı $35$, Çarş $30$, Perş $45$, Cuma $65$ olarak verilmiştir. Haftanın **ilk $3$ gününde** gelen toplam kişi sayısı, **Cuma günü** gelenlerden kaç fazladır?",
            opts: ["$20$", "$25$", "$30$", "$35$"], ans: "B",
            hint: "İlk $3$ gün: $25 + 35 + 30$'u topla, sonra Cuma günü olan $65$'i çıkar.",
            sol: "İlk $3$ gün toplamı $25 + 35 + 30 = 90$ kişi. Cuma $65$ kişi olduğundan fark $90 - 65 = 25$ kişidir.",
            badge: "4. Sınıf Mezunu"
          }
        ]
      })
    ]
,
    "5": [
      makeUnit({
        track: "5", grade: 5, no: 1,
        title: "Çok Basamaklı Doğal Sayılar ve Bölükler",
        subtitle: "Milyonlar Bölüğü, Çözümleme ve Yuvarlama",
        desc: "7, 8 ve 9 basamaklı doğal sayıları milyonlar bölüğüyle okur, çözümler, karşılaştırır ve yuvarlama yaparız.",
        coverImage: "assets/flow/k1_carpan_bloklari.jpg",
        cells: ["Milyonlar", "Binler", "Birler", "9 Basamak", "Basamak Değeri", "Sırala", "Yuvarla", "Örüntü", "100 Milyon", "Tahmin", "Çözümleme", "Sayı Doğrusu"],
        k: [
          ["Milyonlu Sayıları Okuma ve Yazma", "MAT.5.1.1"],
          ["Basamak Değeri ve Çözümleme", "MAT.5.1.2"],
          ["Çok Basamaklı Sayılarda Karşılaştırma", "MAT.5.1.3"]
        ],
        s: [
          {
            title: "Üçüncü Bölük: Milyonlar", subtitle: "Sağdan Sola 3 Bölük Yapısı",
            exp: ["Altı basamaktan büyük sayılarda binler bölüğünün soluna **milyonlar bölüğü** eklenir.", "Örneğin $24\\,508\\,070$ sayısı 'yirmi dört milyon beş yüz sekiz bin yetmiş' diye okunur."],
            sent: "$306\\,045\\,812$ sayısının milyonlar bölüğünde {0}, birler bölüğünde ise {1} sayısı yer alır.",
            blanks: [["306", ["306", "045", "812"]], ["812", ["306", "45", "812"]]],
            vTitle: "9 Basamaklı Bölük Yapısı",
            vNums: [["306", "Milyonlar Bölüğü", 1], ["045", "Binler Bölüğü", 0], ["812", "Birler Bölüğü", 0]],
            vSum: "Her bölükte en fazla $3$ basamak bulunur; boş basamaklara $0$ konur.",
            hint: "En soldaki üçlü milyonlar, en sağdaki üçlü birler bölüğüdür."
          },
          {
            title: "Milyonlu Sayılarda Basamak Değeri", subtitle: "Rakam × Basamak Değeri",
            steps: ["$85\\,420\\,910$ sayısında $8$ on milyonlar basamağındadır ve değeri $80\\,000\\,000$'dır.", "$5$ milyonlar basamağında ($5\\,000\\,000$), $4$ yüz binler basamağındadır ($400\\,000$).", "Sayının rakamlarının sayı değerleri toplamı $8+5+4+2+0+9+1+0 = 29$ iken basamak değerleri toplamı sayının kendisidir."],
            q: "$14\\,705\\,300$ sayısında $7$ rakamının basamak değeri nedir?",
            qc: ["70.000", "700.000", "7.000.000"], qa: "700.000",
            hint: "$7$ yüz binler basamağında yer almaktadır."
          },
          {
            title: "Milyonlu Sayı Oluşturma", subtitle: "Bölüklerden Sayıya",
            stem: "Milyonlar bölüğünde $5$, binler bölüğünde $40$, birler bölüğünde $9$ olan doğal sayı aşağıdakilerden hangisidir?",
            opts: ["$5\\,400\\,009$", "$5\\,040\\,009$", "$5\\,040\\,090$", "$50\\,040\\,009$"], ans: "B",
            hint: "Binler ve birler bölüğü mutlaka $3$ basamağa tamamlanır: $040$ ve $009$.",
            sol: "Bölükleri $3$ basamaklı olacak şekilde yazarsak milyonlar $5$, binler $040$, birler $009$ olur; sayı $5\\,040\\,009$'dur.",
            badge: "Milyon Kaşifi"
          },
          {
            title: "Adım Adım Yuvarlama ile Tahmin", subtitle: "Toplama ve Çıkarmada Hızlı Kontrol",
            exp: ["$4\\,890\\,000 + 2\\,120\\,000$ toplamını en yakın milyonluğa yuvarlayarak $5\\,000\\,000 + 2\\,000\\,000 = 7\\,000\\,000$ diye tahmin edebiliriz.", "Gerçek sonuç $7\\,010\\,000$ olduğundan tahmin gerçek sonuca çok yakındır."],
            sent: "$7\\,450\\,000$ sayısı en yakın milyonluğa yuvarlandığında {0} olur; $7\\,600\\,000$ ise {1} milyonluğuna yuvarlanır.",
            blanks: [["7.000.000", ["7.000.000", "7.500.000", "8.000.000"]], ["8.000.000", ["7.000.000", "7.500.000", "8.000.000"]]],
            vTitle: "Milyonluk Yuvarlama",
            vNums: [["7.450.000", "Yüz binler 4 < 5", 0], ["→ 7.000.000", "Aşağı yuvarlandı", 1], ["7.600.000 → 8M", "6 ≥ 5 yukarı", 1]],
            vSum: "Yuvarlanacak basamağın hemen sağındaki rakama bakılır.",
            hint: "Milyonlar basamağının sağında $4$ varsa aşağı, $6$ varsa yukarı yuvarlanır."
          },
          {
            title: "Rakam Kartlarıyla En Küçük Sayı", subtitle: "0 Başa Gelemez Kuralı",
            steps: ["$0, 2, 5, 7, 1, 9, 4$ rakamlarıyla en küçük $7$ basamaklı sayıyı kurarken en başa $0$ dışındaki en küçük rakamı ($1$) koyarız.", "İkinci basamağa hemen $0$'ı yazarız ki binler hanesi en küçük kalsın.", "Kalanları küçükten büyüğe dizersek $1\\,024\\,579$ elde edilir."],
            q: "$0, 3, 6, 8, 2, 5, 1$ rakamlarıyla oluşturulan en küçük $7$ basamaklı sayının milyonlar basamağı kaçtır?",
            qc: ["0", "1", "2"], qa: "1",
            hint: "En başa $0$ yazamayacağımıza göre sıfır dışı en küçük rakam seçilir."
          },
          {
            title: "Nüfus Karşılaştırma Sorusu", subtitle: "Bölüklerle Sıralama",
            stem: "Üç kentin nüfusu $A: 12\\,480\\,900$, $B: 12\\,408\\,999$ ve $C: 9\\,995\\,400$ şeklindedir. En kalabalık kentten en aza sıralama hangisidir?",
            opts: ["$A \\gt B \\gt C$", "$B \\gt A \\gt C$", "$C \\gt A \\gt B$", "$A \\gt C \\gt B$"], ans: "A",
            hint: "$8$ basamaklı $A$ ve $B$ sayıları $7$ basamaklı $C$'den büyüktür.",
            sol: "$A$ ve $B$ $8$ basamaklı, $C$ $7$ basamaklıdır. $A$'nın binler bölüğü $480$, $B$'nin binler bölüğü $408$ olduğundan $A \\gt B \\gt C$.",
            badge: "Büyük Sayı Ustası"
          }
        ]
      }),
      makeUnit({
        track: "5", grade: 5, no: 2,
        title: "Dört İşlem, Üslü Gösterim ve Parantez",
        subtitle: "Kare-Küp Kavramı ve İşlem Önceliği",
        desc: "Bir sayının karesini ($a^2$) ve küpünü ($a^3$) hesaplar, parantezli işlemlerde öncelik sırasını uygularız.",
        coverImage: "assets/flow/u02_uslu_ifadeler.jpg",
        cells: ["Üslü İfade", "a² Karesi", "a³ Küpü", "Parantez", "Öncelik", "Bölme-Çarpma", "Toplama", "Dağılma", "Zihinden", "Kalan", "Problem", "Model"],
        k: [
          ["Bir Doğal Sayının Karesi ve Küpü", "MAT.5.1.4"],
          ["Parantezli İşlemler ve İşlem Önceliği", "MAT.5.1.5"],
          ["Dört İşlem Problem Çözme", "MAT.5.1.6"]
        ],
        s: [
          {
            title: "Kare ($a^2$) ve Küp ($a^3$)", subtitle: "Kendisiyle Tekrarlı Çarpım",
            exp: ["Bir doğal sayının kendisiyle $2$ kez çarpılmasına **karesi** ($5^2 = 5 \\times 5 = 25$) denir.", "Kendisiyle $3$ kez çarpılmasına ise **küpü** ($4^3 = 4 \\times 4 \\times 4 = 64$) adı verilir; $4^3$ asla $4 \\times 3$ demek değildir!"],
            sent: "$6^2$ ifadesinin değeri {0}, $3^3$ ifadesinin değeri ise {1} olarak hesaplanır.",
            blanks: [["36", ["12", "36", "64"]], ["27", ["9", "18", "27"]]],
            vTitle: "Üslü Hesap Kartları",
            vNums: [["6² = 6×6", "= 36", 1], ["3³ = 3×3×3", "= 27", 1], ["10² = 100", "2 sıfır gelir", 0]],
            vSum: "Üs, tabanın yan yana kaç kere çarpılacağını söyler.",
            hint: "$6 \\times 6 = 36$ ve $3 \\times 3 \\times 3 = 27$."
          },
          {
            title: "İşlem Önceliği Sırası", subtitle: "Önce Üs ve Parantez, Sonra Çarpma/Bölme",
            steps: ["Karışık bir ifadede önce **üslü ifadeler** ve **parantez içleri** hesaplanır.", "Ardından **çarpma ve bölme** işlemleri soldan sağa yapılır.", "En son **toplama ve çıkarma** işlemleri yapılarak sonuca ulaşılır."],
            q: "$24 - 4 \\times 3 + 2^3$ işleminin sonucu kaçtır?",
            qc: ["20", "68", "18"], qa: "20",
            hint: "Önce $2^3 = 8$ ve $4 \\times 3 = 12$ hesaplanır: $24 - 12 + 8$."
          },
          {
            title: "Üslü İfade ve İşlem Önceliği", subtitle: "Doğru Sıra Testi",
            stem: "$5^2 + (18 \\div 3) \\times 2 - 4$ işleminin sonucu kaçtır?",
            opts: ["$29$", "$33$", "$37$", "$58$"], ans: "B",
            hint: "$5^2 = 25$ ve parantez içi $18 \\div 3 = 6$ olur; çarpmayı toplamadan önce yap.",
            sol: "$5^2 = 25$, $(18 \\div 3) = 6$. Önce çarpma: $6 \\times 2 = 12$. Sonra $25 + 12 - 4 = 33$.",
            badge: "İşlem Önceliği Ustası"
          },
          {
            title: "Dağılma Özelliği ile Zihinden Çarpma", subtitle: "Parçalayarak Çarp",
            exp: ["$18 \\times 12$ gibi bir çarpımı $18 \\times (10 + 2) = 180 + 36 = 216$ diye zihinden kolayca yaparız.", "Benzer biçimde $99 \\times 7 = (100 - 1) \\times 7 = 700 - 7 = 693$ şeklinde çıkarabiliriz."],
            sent: "$25 \\times 14$ işlemini $25 \\times (10 + 4)$ diye parçalarsak $250$ artı {0} elde edilir ve sonuç {1} olur.",
            blanks: [["100", ["50", "100", "140"]], ["350", ["300", "350", "400"]]],
            vTitle: "Dağılma ile Pratik Çarpma",
            vNums: [["25 × 10", "= 250", 0], ["25 × 4", "= 100", 1], ["250 + 100", "= 350", 1]],
            vSum: "Bir sayıyı $10$'un katı artı kalan diye bölmek zihinden hız kazandırır.",
            hint: "$25 \\times 4 = 100$ eder."
          },
          {
            title: "Kalan Yorumlama Problemi", subtitle: "Bölüm Artırılmalı mı?",
            steps: ["$130$ öğrenciyi her biri $24$ kişilik otobüslere yerleştirmek istersek $130 \\div 24 = 5$ (kalan $10$).", "Kalan $10$ öğrenci de gitmek zorunda olduğundan $5$ otobüs yetmez, $6.$ otobüs gerekir!", "Kimi problemlerde ise artan malzeme tam paket yapmaya yetmediği için tam bölüm alınır."],
            q: "Tanesi $18\\text{ TL}$ olan kitaplardan $100\\text{ TL}$ ile en çok kaç tane satın alınabilir?",
            qc: ["5 kitap", "6 kitap", "4 kitap"], qa: "5 kitap",
            hint: "$100 \\div 18 = 5$ (kalan $10\\text{ TL}$); kalan $10\\text{ TL}$ yeni bir kitap almaya yetmez."
          },
          {
            title: "Fabrika Üretim Sorusu", subtitle: "Parantezli Problem Kurma",
            stem: "Bir çiftlikte günde $420$ yumurta toplanıyor. Bunların $60$'ı kırılıyor, kalanlar $12$'li viyollere diziliyor. Kaç viyol gerekir?",
            opts: ["$25$", "$30$", "$35$", "$40$"], ans: "B",
            hint: "$(420 - 60) \\div 12$ işlemini adım adım hesapla.",
            sol: "Sağlam yumurta $420 - 60 = 360$. Viyol sayısı $360 \\div 12 = 30$'dur.",
            badge: "Üslü Hesap Kahramanı"
          }
        ]
      }),
      makeUnit({
        track: "5", grade: 5, no: 3,
        title: "Kesirler, Ondalık Gösterim ve Yüzdeler",
        subtitle: "Denk Kesir, Farklı Paydalı İşlem ve % Dönüşümü",
        desc: "Denk kesirlerle payda eşitler, ondalık gösterimleri okur ve kesir-ondalık-yüzde gösterimlerini birbirine dönüştürürüz.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Denk Kesir", "Genişlet", "Sadeleştir", "0,75", "%25", "%50", "%100", "Payda Eşit", "Ondalık", "Yüzde", "Sırala", "Model"],
        k: [
          ["Denk Kesirler ve Farklı Paydalı İşlemler", "MAT.5.1.7"],
          ["Ondalık Gösterim ve Basamak Değeri", "MAT.5.1.8"],
          ["Kesir, Ondalık ve Yüzde (%) İlişkisi", "MAT.5.1.9"]
        ],
        s: [
          {
            title: "Genişletme ve Sadeleştirme", subtitle: "Değeri Değişmeyen Denk Kesirler",
            exp: ["Bir kesrin hem payını hem paydasını sıfır dışındaki aynı sayıyla çarpmaya **genişletme** denir: $\\frac{2}{5} = \\frac{4}{10} = \\frac{40}{100}$.", "İkisini de aynı ortak bölene bölmeye ise **sadeleştirme** denir: $\\frac{12}{18} = \\frac{2}{3}$."],
            sent: "$\\frac{3}{4}$ kesri $25$ ile genişletilirse paydası $100$ olan {0} kesrine, bu da yüzde olarak {1} ifadesine eşit olur.",
            blanks: [["75/100", ["30/100", "75/100", "80/100"]], ["%75", ["%25", "%50", "%75"]]],
            vTitle: "Eşdeğer Üçlü Gösterim",
            vNums: [["3/4", "Kesir hali", 0], ["0,75", "Ondalık hali", 1], ["%75", "Yüzde hali", 1]],
            vSum: "Bir kesrin üç gösterimi de bütündeki aynı oranı ifade eder.",
            hint: "$3 \\times 25 = 75$ olduğundan sonuç $\\frac{75}{100}$ ve $\\%75$'tir."
          },
          {
            title: "Paydaları Farklı Kesirleri Toplama", subtitle: "Önce Denk Kesirle Payda Eşitle",
            steps: ["$\\frac{1}{2} + \\frac{1}{6}$ gibi paydaları farklı kesirlerde büyük paydaya uygun genişletme yapılır.", "$\\frac{1}{2}$ kesrini $3$ ile genişletirsek $\\frac{3}{6}$ olur.", "Paydalar eşitlenince $\\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6}$ ve sadeleşince $\\frac{2}{3}$ bulunur."],
            q: "$\\frac{5}{6} - \\frac{1}{3}$ işleminin sonucu kaçtır?",
            qc: ["1/2", "4/3", "2/6"], qa: "1/2",
            hint: "$\\frac{1}{3} = \\frac{2}{6}$ yapıp çıkar: $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$."
          },
          {
            title: "İndirim Yüzdesi Sorusu", subtitle: "Yüzde Hesabı",
            stem: "$200\\text{ TL}$ etiketli bir çanta $\\%20$ indirimle satılıyor. Çantanın **indirimli satış fiyatı** kaç TL'dir?",
            opts: ["$140\\text{ TL}$", "$160\\text{ TL}$", "$180\\text{ TL}$", "$40\\text{ TL}$"], ans: "B",
            hint: "Önce $200$'ün $\\%20$'si olan $40\\text{ TL}$ indirimi hesapla, sonra çıkar.",
            sol: "İndirim tutarı $200 \\times \\frac{20}{100} = 40\\text{ TL}$. İndirimli fiyat $200 - 40 = 160\\text{ TL}$ olur.",
            badge: "Yüzde Uzmanı"
          },
          {
            title: "Ondalık Gösterimde Virgül Hizası", subtitle: "Onda Bir, Yüzde Bir, Binde Bir",
            exp: ["Virgülden sonraki ilk basamak **onda birler** ($0{,}1$), ikincisi **yüzde birler** ($0{,}01$), üçüncüsü **binde birler** ($0{,}001$) basamağıdır.", "Toplama ve çıkarmanın altın kuralı: Virgülleri daima **alt alta aynı hizaya** getir ($2{,}50 + 1{,}35 = 3{,}85$)."],
            sent: "$4{,}6 - 1{,}25$ işlemini yaparken $4{,}6$'nın sonuna bir $0$ ekleyip $4{,}60$ yazarız ve sonuç {0} çıkar; bu sayının onda birler rakamı {1}'tür.",
            blanks: [["3,35", ["3,35", "3,45", "2,35"]], ["3", ["3", "5", "6"]]],
            vTitle: "Ondalık Basamaklar: 3,35",
            vNums: [["3 (Tam)", "Virgül solu", 0], ["3 (Onda bir)", "1. ondalık basamak", 1], ["5 (Yüzde bir)", "2. ondalık basamak", 0]],
            vSum: "Ondalık kısmın sağına eklenen $0$, sayının değerini değiştirmez ($4{,}6 = 4{,}60$).",
            hint: "$4{,}60 - 1{,}25 = 3{,}35$ işlemini alt alta kontrol et."
          },
          {
            title: "Kesir-Ondalık-Yüzde Sıralaması", subtitle: "Aynı Dile Çevirerek Kıyasla",
            steps: ["$\\frac{2}{5}$, $0{,}45$ ve $\\%38$ gibi farklı gösterimleri karşılaştırmak için hepsini yüzdeye çevirebiliriz.", "$\\frac{2}{5} = \\frac{40}{100} = \\%40$ ve $0{,}45 = \\%45$ olur.", "Artık $\\%38 \\lt \\%40 \\lt \\%45$ sıralaması kolayca görülür."],
            q: "$\\frac{1}{4}$, $0{,}3$ ve $\\%22$ değerlerinin en büyüğü hangisidir?",
            qc: ["1/4", "0,3", "%22"], qa: "0,3",
            hint: "$\\frac{1}{4} = \\%25$ ve $0{,}3 = 0{,}30 = \\%30$ olur!"
          },
          {
            title: "Su Deposu Yüzde Sorusu", subtitle: "Kesir ve Yüzde Birlikte",
            stem: "Kapasitesi $500\\text{ L}$ olan bir su deposunun $\\frac{3}{5}$'ü doludur. Depoda kaç litre **boş yer** kalmıştır?",
            opts: ["$100\\text{ L}$", "$200\\text{ L}$", "$300\\text{ L}$", "$400\\text{ L}$"], ans: "B",
            hint: "Dolu kısmı $\\%60$ ($300\\text{ L}$) olarak bulup toplamdan çıkar.",
            sol: "Dolu kısım $500 \\times \\frac{3}{5} = 300\\text{ L}$'dir. Boş kısım $500 - 300 = 200\\text{ L}$ kalır.",
            badge: "Oran-Yüzde Kahramanı"
          }
        ]
      }),
      makeUnit({
        track: "5", grade: 5, no: 4,
        title: "Temel Geometri: Doğru, Açı ve Çokgenler",
        subtitle: "Paralel-Dik Doğrular ve Üçgen-Dörtgen İç Açıları",
        desc: "Doğruların konum ilişkilerini, üçgen ve dörtgenlerin kenar-köşe-köşegen özelliklerini ve iç açılar toplamını inceleriz.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        cells: ["Paralel ∥", "Dik ⊥", "Kesişen", "Çokgen", "Köşegen", "Üçgen 180°", "Dörtgen 360°", "Dar-Geniş", "İkizkenar", "Paralelkenar", "Yamuk", "Açı"],
        k: [
          ["Paralel, Kesişen ve Dik Doğrular", "MAT.5.3.1"],
          ["Üçgen Çeşitleri ve İç Açılar (180°)", "MAT.5.3.2"],
          ["Dörtgenlerin Özellikleri ve İç Açılar (360°)", "MAT.5.3.3"]
        ],
        s: [
          {
            title: "Paralel ($\\parallel$) ve Dik ($\\perp$) Doğrular", subtitle: "Düzlemdeki İki Doğrunun Durumu",
            exp: ["Aynı düzlemde hiç kesişmeyen ve aralarındaki mesafe hep sabit kalan doğrulara **paralel doğrular** denir (tren rayları gibi).", "$90^\\circ$ açı oluşturarak kesişen doğrulara ise **dik doğrular** denir ($d_1 \\perp d_2$)."],
            sent: "Defterdeki yatay çizgiler birbirine {0} konumdayken, bu çizgileri $90^\\circ$ ile kesen dikey kenar çizgilere {1} olur.",
            blanks: [["paralel", ["paralel", "dik", "eğik"]], ["dik", ["paralel", "dik", "aykırı"]]],
            vTitle: "Doğru İlişkileri",
            vNums: [["d₁ ∥ d₂", "Asla kesişmez", 1], ["d₁ ⊥ d₂", "90° ile kesişir", 1], ["Çapraz", "Farklı açıyla kesişir", 0]],
            vSum: "Dik kesişme özel bir kesişme durumudur.",
            hint: "Tren rayları paralel, duvar ile zemin diktir."
          },
          {
            title: "Üçgenin İç Açıları Toplamı 180°", subtitle: "Her Üçgende Değişmeyen Kural",
            steps: ["Üçgenin üç köşesindeki iç açılar kesilip yan yana dizildiğinde tam bir **doğru açı ($180^\\circ$)** oluşturur.", "Bir üçgenin iki açısı verilmişse toplamlarını $180^\\circ$'den çıkararak üçüncü açıyı buluruz.", "Eşkenar üçgenin üç açısı da birbirine eşit olup $180 \\div 3 = 60^\\circ$'dir."],
            q: "İki iç açısı $55^\\circ$ ve $75^\\circ$ olan bir üçgenin üçüncü iç açısı kaç derecedir?",
            qc: ["40°", "50°", "60°"], qa: "50°",
            hint: "$55 + 75 = 130^\\circ$, sonra $180 - 130$ yap."
          },
          {
            title: "İkizkenar Üçgen Açısı", subtitle: "Eşit Kenar Karşısı Eşit Açı",
            stem: "Bir ikizkenar üçgenin tepe açısı $40^\\circ$ olduğuna göre, eşit olan taban açılarından her biri kaç derecedir?",
            opts: ["$60^\\circ$", "$70^\\circ$", "$80^\\circ$", "$140^\\circ$"], ans: "B",
            hint: "$180^\\circ$'den tepe açısı $40^\\circ$'yi çıkar ve kalanı iki eşit taban açısına böl.",
            sol: "İki taban açısının toplamı $180^\\circ - 40^\\circ = 140^\\circ$'dir. Eşit olduklarından her biri $140 \\div 2 = 70^\\circ$ olur.",
            badge: "Üçgen Bilgini"
          },
          {
            title: "Dörtgenlerde İç Açılar ve Köşegenler", subtitle: "İki Üçgenden Doğan 360°",
            exp: ["Herhangi bir dörtgeni bir köşegenle böldüğümüzde $2$ üçgen elde ederiz; bu nedenle dörtgenin iç açıları toplamı $2 \\times 180^\\circ = 360^\\circ$'dir.", "Üçgenlerin ise **köşegeni yoktur**, çünkü ardışık olmayan köşe çifti bulunmaz."],
            sent: "Beşgenin köşegeni olduğu halde {0} şeklinin hiç köşegeni yoktur; her dörtgenin iç açılar toplamı ise {1} derecedir.",
            blanks: [["üçgen", ["kare", "üçgen", "yamuk"]], ["360", ["180", "270", "360"]]],
            vTitle: "Çokgen Özellikleri",
            vNums: [["Üçgen", "0 köşegen, 180°", 1], ["Dörtgen", "2 köşegen, 360°", 1], ["Yamuk", "En az 1 çift paralel kenar", 0]],
            vSum: "Köşegen, komşu olmayan iki köşeyi birleştirir.",
            hint: "Üçgenin tüm köşeleri birbirine komşudur."
          },
          {
            title: "Özel Dörtgenleri Tanıyalım", subtitle: "Yamuk, Paralelkenar, Eşkenar Dörtgen",
            steps: ["**Yamuğun** karşılıklı en az bir kenar çifti paraleldir.", "**Paralelkenarda** karşılıklı iki çift kenar da paralel ve eşittir; karşılıklı açıları eşittir.", "**Eşkenar dörtgenin** tüm kenarları eşittir ve köşegenleri birbirini dik keser."],
            q: "Bir paralelkenarın dar açısı $65^\\circ$ ise ona komşu olan geniş açısı kaç derecedir?",
            qc: ["105°", "115°", "125°"], qa: "115°",
            hint: "Paralelkenarda ardışık iki açının toplamı $180^\\circ$'dir."
          },
          {
            title: "Dörtgen İç Açı Sorusu", subtitle: "360° Kuralı Uygulaması",
            stem: "Üç iç açısı $85^\\circ$, $95^\\circ$ ve $110^\\circ$ olan bir dörtgenin dördüncü iç açısı kaç derecedir?",
            opts: ["$60^\\circ$", "$70^\\circ$", "$80^\\circ$", "$90^\\circ$"], ans: "B",
            hint: "Üç açıyı toplayıp $360^\\circ$'den çıkar.",
            sol: "Verilen üç açının toplamı $85 + 95 + 110 = 290^\\circ$. Dördüncü açı $360^\\circ - 290^\\circ = 70^\\circ$'dir.",
            badge: "Çokgen Mimarı"
          }
        ]
      }),
      makeUnit({
        track: "5", grade: 5, no: 5,
        title: "Çevre, Dikdörtgen Alanı ve Zaman Ölçme",
        subtitle: "Alan-Çevre İlişkisi ve Saat-Gün Problemleri",
        desc: "Aynı alana sahip dikdörtgenlerin çevrelerini kıyaslar, santimetrekare/metrekare alanı hesaplar ve zaman problemlerini çözeriz.",
        coverImage: "assets/flow/u10_eslik_benzerlik.jpg",
        cells: ["Çevre", "Alan a×b", "cm²", "m²", "Aynı Alan", "Farklı Çevre", "Tahmin", "Saat", "Dakika", "Yıl-Ay", "L Şekli", "Problem"],
        k: [
          ["Dikdörtgen ve Kare Alan Hesaplama", "MAT.5.4.1"],
          ["Aynı Alana Sahip Farklı Çevreler", "MAT.5.4.2"],
          ["Zaman Ölçme ve Süre Hesapları", "MAT.5.4.3"]
        ],
        s: [
          {
            title: "Dikdörtgen Alan Formülü: a × b", subtitle: "Kısa Kenar × Uzun Kenar",
            exp: ["Bir dikdörtgenin alanı kısa kenar ile uzun kenarın çarpımına eşittir: $A = a \\times b$.", "Kenarları santimetre cinsinden çarpınca alanı **santimetrekare ($\\text{cm}^2$)** olarak ifade ederiz."],
            sent: "Alanı $48\\text{ cm}^2$ ve uzun kenarı $8\\text{ cm}$ olan dikdörtgenin kısa kenarı {0} cm, çevresi ise {1} cm olur.",
            blanks: [["6", ["4", "6", "8"]], ["28", ["14", "28", "48"]]],
            vTitle: "Alan = 48 cm² Çözümü",
            vNums: [["48 ÷ 8 = 6", "Kısa kenar", 1], ["2×(8 + 6)", "Çevre = 28 cm", 1]],
            vSum: "Verilen alandan kenarı bulmak için bölme işlemi yaparız.",
            hint: "$8$ ile kaçı çarparsan $48$ olur? Çevre için $2(8+6)$ yap."
          },
          {
            title: "Aynı Alan, Farklı Çevreler", subtitle: "İnce Uzun mu, Kareye Yakın mı?",
            steps: ["Alanı $24\\text{ cm}^2$ olan dikdörtgenleri düşünelim: $(1 \\times 24)$, $(2 \\times 12)$, $(3 \\times 8)$, $(4 \\times 6)$.", "$(1 \\times 24)$'ün çevresi $50\\text{ cm}$ iken, $(4 \\times 6)$'nın çevresi sadece $20\\text{ cm}$'dir.", "Demek ki kenarlar birbirine yaklaştıkça çevre küçülür, uzaklaştıkça çevre büyür."],
            q: "Alanı $36\\text{ cm}^2$ olan doğal sayı kenarlı dikdörtgenlerden en küçük çevreye sahip olanının çevresi kaç cm'dir?",
            qc: ["24 cm", "26 cm", "30 cm"], qa: "24 cm",
            hint: "Kenarları $6\\text{ cm} \\times 6\\text{ cm}$ seçersen kare oluşur: $4 \\times 6 = 24$."
          },
          {
            title: "Oda Zemin Kaplama Sorusu", subtitle: "Alan Problemi",
            stem: "Eni $4\\text{ m}$, boyu $6\\text{ m}$ olan dikdörtgen salonun zeminine $8\\text{ m}^2$'lik bir kilim serilirse açıkta kalan boş alan kaç $\\text{m}^2$ olur?",
            opts: ["$12\\text{ m}^2$", "$16\\text{ m}^2$", "$18\\text{ m}^2$", "$24\\text{ m}^2$"], ans: "B",
            hint: "Salonun alanı $4 \\times 6 = 24\\text{ m}^2$'dir; $8\\text{ m}^2$'yi çıkar.",
            sol: "Salon alanı $4 \\times 6 = 24\\text{ m}^2$. Kilim kaplı alan $8\\text{ m}^2$ ise açıkta $24 - 8 = 16\\text{ m}^2$ kalır.",
            badge: "Alan Mühendisi"
          },
          {
            title: "Zaman İşlemlerinde Ödünç Alma", subtitle: "1 Saat = 60 Dakika Kuralı",
            exp: ["Saat çıkarırken dakika yetmezse saat hanesinden $1$ saat alıp dakika hanesine **$60$ dakika** ekleriz.", "Örneğin $14.15$'ten $01.40$'ı çıkarırken $14.15$'i $13.75$ gibi düşünüp $75 - 40 = 35\\text{ dk}$ ve $13 - 1 = 12.35$ buluruz."],
            sent: "$16.10$'dan $45$ dakika önce saat kaçtı? $16.10$ yerine $15.$ {0} yazarak $45$ çıkarırsak saati {1} buluruz.",
            blanks: [["70", ["60", "70", "110"]], ["15.25", ["15.25", "15.35", "15.55"]]],
            vTitle: "Zaman Çıkarma Tekniği",
            vNums: [["16 sa 10 dk", "= 15 sa 70 dk", 1], ["70 - 45 dk", "= 25 dk", 0], ["Sonuç", "15.25", 1]],
            vSum: "Saat hanesinden gelen $1$'i dakika hanesine $100$ değil $60$ diye eklemeyi unutma!",
            hint: "$10 + 60 = 70$ dakika eder."
          },
          {
            title: "Bileşik Şeklin Alanını Bölme", subtitle: "T ve L Şekilleri",
            steps: ["L şeklindeki bir arsayı hayali bir çizgiyle $2$ dikdörtgene ayırırız.", "Eksik kenarları karşı kenarlarla eşleştirerek her iki dikdörtgenin kenarlarını buluruz.", "İki alanı toplayarak veya büyük dikdörtgenden eksik dikdörtgeni çıkararak sonucu buluruz."],
            q: "Bir kenarı $10\\text{ cm}$ olan kareden ortasından bir kenarı $4\\text{ cm}$ olan kare kesilirse kalan alan kaç $\\text{cm}^2$ olur?",
            qc: ["60 cm²", "84 cm²", "96 cm²"], qa: "84 cm²",
            hint: "$100 - 16$ çıkarma işlemini yap."
          },
          {
            title: "Tren Yolculuğu Sorusu", subtitle: "Saat-Dakika Toplama",
            stem: "Saat $09.40$'ta hareket eden hızlı tren $2$ saat $55$ dakika sonra varış noktasına ulaşmıştır. Tren saat kaçta varmıştır?",
            opts: ["$11.95$", "$12.25$", "$12.35$", "$13.35$"], ans: "C",
            hint: "$40 + 55 = 95\\text{ dk} = 1\\text{ sa } 35\\text{ dk}$ eder; saate $1$ ekle.",
            sol: "Saatler $9 + 2 = 11$, dakikalar $40 + 55 = 95\\text{ dk} = 1\\text{ sa } 35\\text{ dk}$. Toplam saat $12.35$ olur.",
            badge: "Zaman Yolcusu"
          }
        ]
      }),
      makeUnit({
        track: "5", grade: 5, no: 6,
        title: "İstatistiksel Araştırma ve Olasılık Spektrumu",
        subtitle: "Veri Görselleştirme ve 0–1 Olasılık Ölçeği (TYMM)",
        desc: "Araştırma süreciyle veri toplayıp yorumlar; olayların olasılık spektrumunda imkânsızdan kesine doğru yerini belirleriz.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Veri Toplama", "Sütun", "Tablo", "Spektrum 0..1", "İmkânsız 0", "Az Olası", "Eşit 1/2", "Çok Olası", "Kesin 1", "Tahmin", "Anket", "Olay"],
        k: [
          ["İstatistiksel Veri Toplama ve Yorum", "MAT.5.5.1"],
          ["Olasılık Spektrumu (0 – 1 Aralığı)", "MAT.5.6.1"],
          ["Olayların Olabilirliğini Karşılaştırma", "MAT.5.6.2"]
        ],
        s: [
          {
            title: "Olasılık Spektrumu: 0'dan 1'e", subtitle: "TYMM 5. Sınıf Yeni Konu!",
            exp: ["Gerçekleşmesi hiç mümkün olmayan olaya **imkânsız olay** denir ve spektrumda **$0$** noktasında yer alır.", "Her zaman gerçekleşecek olaya **kesin olay** denir ($1$ noktası); yazı-tura atışında yazı gelmesi tam ortada (**eşit olasılıklı**, $\\frac{1}{2}$) yer alır."],
            sent: "Hilesiz bir zar atıldığında üst yüze $7$ gelmesi {0} olaydır ve spektrumda $0$ ile gösterilir; $6$'dan küçük veya $6$'ya eşit bir sayı gelmesi ise {1} olaydır.",
            blanks: [["imkânsız", ["imkânsız", "eşit", "kesin"]], ["kesin", ["imkânsız", "az olası", "kesin"]]],
            vTitle: "0–1 Olasılık Çizgisi",
            vNums: [["0 (İmkânsız)", "Asla gerçekleşmez", 0], ["1/2 (Eşit)", "Yazı veya Tura", 1], ["1 (Kesin)", "Daima gerçekleşir", 1]],
            vSum: "Tüm olayların gerçekleşme olasılıkları $0$ ile $1$ arasında sıralanır.",
            hint: "Zarda yalnızca $1..6$ sayıları vardır."
          },
          {
            title: "Hangisi Daha Olası?", subtitle: "Az Olası ve Çok Olası",
            steps: ["Bir torbada $9$ mavi ve $1$ sarı top varsa sarı çekmek **imkânsız değildir**, ancak **az olasıdır** ($0$'a yakın).", "Mavi çekmek ise **kesin değildir** ama **çok olasıdır** ($1$'e yakın).", "Sayıları $5$ mavi ve $5$ sarı olduğunda iki olay **eşit olasılıklı** ($\\%50 - \\frac{1}{2}$) olur."],
            q: "Bir sepette $7$ kırmızı ve $2$ yeşil elma varken rastgele seçilen bir elmayla ilgili hangisi doğrudur?",
            qc: ["Kırmızı gelmesi kesindir.", "Yeşil gelmesi imkânsızdır.", "Kırmızı gelmesi yeşil gelmesinden daha olasıdır."], qa: "Kırmızı gelmesi yeşil gelmesinden daha olasıdır.",
            hint: "$7$ adet kırmızı elma $2$ adet yeşil elmadan fazla olduğu için kırmızı daha olasıdır ama yeşil de çekilebilir."
          },
          {
            title: "Olasılık Spektrumu Sorusu", subtitle: "Eşit Olasılıklı Durum",
            stem: "Bir kavanozda $4$ çilekli, $3$ limonlu ve $5$ naneli şeker vardır. Kavanoza **kaç tane limonlu şeker** daha eklenirse limonlu ile naneli çekilme olasılığı eşit olur?",
            opts: ["$1$", "$2$", "$3$", "$4$"], ans: "B",
            hint: "Naneli şeker sayısı $5$, limonlu ise $3$'tür; sayılar eşitlenince olasılıklar eşitlenir.",
            sol: "$5 - 3 = 2$ limonlu şeker eklenirse ikisinden de $5$'er adet olur ve olasılıkları eşitlenir.",
            badge: "Olasılık Kaşifi"
          },
          {
            title: "Araştırma Sorusu ve Veri Yorumu", subtitle: "Sınırlılık ve Yanlılık",
            exp: ["Veri toplarken sorunun tüm grubu adil biçimde temsil etmesi önemlidir.", "Örneğin tüm okulun en sevdiği sporu araştırırken sadece futbol kulübüne anket yapmak **yanlı** bir veri verir."],
            sent: "Sütun grafiği veriyi karşılaştırmak için çok kullanışlıdır; bir ankette sadece basketbolculara spor tercihi sormak sonucun {0} olmasına yol açar, tüm sınıfa sormak ise {1} veri sağlar.",
            blanks: [["yanlı", ["doğru", "yanlı", "kesin"]], ["temsili", ["yanlı", "boş", "temsili"]]],
            vTitle: "Sağlıklı Araştırma İlkeleri",
            vNums: [["Net soru", "Tek anlama açık", 0], ["Yansız örneklem", "Tüm grubu temsil", 1], ["Doğru grafik", "Sütun/Tablo seçimi", 0]],
            vSum: "İyi veri analizi yansız toplanmış verilerle başlar.",
            hint: "Yalnızca tek bir ilgi grubuna sormak sonucu o tarafa kaydırır."
          },
          {
            title: "Çiftli Sütun Grafiği Okuma", subtitle: "İki Grubu Yan Yana Kıyaslama",
            steps: ["İki sınıfın (ör. 5-A ve 5-B) kitap okuma sayılarını aynı grafikte göstermek için iki renkli sütunlar kullanırız.", "Lejant (açıklama) kutusundan mavi sütunun 5-A'yı, turuncu sütunun 5-B'yi gösterdiğini okuruz.", "Farkları ve toplamları kıyaslayarak sınıfları değerlendiririz."],
            q: "Grafikte Ocak ayında 5-A $45$, 5-B $38$; Şubat ayında 5-A $40$, 5-B $52$ kitap okuduysa iki ay sonunda toplam hangi sınıf daha çok okumuştur?",
            qc: ["5-A", "5-B", "Eşit"], qa: "5-B",
            hint: "5-A toplamı $45+40=85$, 5-B toplamı $38+52=90$."
          },
          {
            title: "5. Sınıf Final Değerlendirme", subtitle: "Grafik ve Olasılık Birlikte",
            stem: "Bir sınıfta Matematikten hoşlanan $12$, Fenden $8$, Türkçeden $10$ öğrenci rastgele seçilmek üzere isim kartlarına yazılıyor. Kutudan çekilen kartın **Matematik veya Türkçe** olma durumu için hangisi doğrudur?",
            opts: ["İmkânsız olaydır.", "Kesin olaydır.", "Fen olmasından daha olasıdır.", "Fen olmasıyla eşit olasılıklıdır."], ans: "C",
            hint: "Matematik veya Türkçe kartı $12 + 10 = 22$ adettir, Fen ise $8$ adettir.",
            sol: "Matematik + Türkçe toplam $22$ kart, Fen $8$ karttır. Fen de seçilebildiğinden kesin değildir, ancak $22 \\gt 8$ olduğundan çok daha olasıdır.",
            badge: "5. Sınıf Mezunu"
          }
        ]
      })
    ],
    "6": [
      makeUnit({
        track: "6", grade: 6, no: 1,
        title: "Çarpanlar, Bölünebilme ve Asal Sayılar",
        subtitle: "Bölünebilme Kriterleri ve Ortak Bölen/Kat (TYMM 6)",
        desc: "Doğal sayıların çarpan-kat yapısını, 2-3-4-5-6-9-10 bölünebilme kurallarını, asal çarpanları ve ortak bölen/kat problemlerini çözümleriz.",
        coverImage: "assets/flow/kapak_carpanlar_katlar.jpg",
        cells: ["Çarpan", "Kat", "2,3,4,5,6", "9 ve 10", "Asal Sayı", "Asal Çarpan", "Ortak Bölen", "Ortak Kat", "En Küçük Asal: 2", "Ağaç", "Liste", "Kural"],
        k: [
          ["2, 3, 4, 5, 6, 9, 10 Bölünebilme Kuralları", "MAT.6.1.2"],
          ["Asal Sayılar ve Asal Çarpanlara Ayırma", "MAT.6.1.3"],
          ["Ortak Kat ve Ortak Bölen Yorumlama", "MAT.6.1.4"]
        ],
        s: [
          {
            title: "Bölünebilme Kriterleri Rehberi", subtitle: "Son Basamak mı, Rakam Toplamı mı?",
            exp: ["Bir sayının $2$, $5$, $10$'a bölünebilmesi **birler basamağına**; $4$'e bölünebilmesi **son iki basamağına** ($00$ veya $4$'ün katı) bağlıdır.", "$3$ ve $9$'a bölünebilmek içinse **rakamları toplamı** $3$'ün veya $9$'un katı olmalıdır; hem $2$'ye hem $3$'e bölünenler $6$'ya tam bölünür."],
            sent: "$4\\,32A$ dört basamaklı sayısının $6$ ile tam bölünebilmesi için önce çift olması, ayrıca $4+3+2+A = 9+A$ toplamının {0} katı olması gerekir; bu şartı sağlayan $A$ rakamlarından biri {1} olabilir.",
            blanks: [["3'ün", ["2'nin", "3'ün", "4'ün"]], ["6", ["3", "5", "6"]]],
            vTitle: "Bölünebilme Kuralları Özeti",
            vNums: [["2, 5, 10", "Son basamağa bak", 0], ["4 ile bölme", "Son 2 basamağa bak", 1], ["3 ve 9", "Rakam toplamına bak", 1]],
            vSum: "$9+A$ ifadesinde $A$ hem çift hem $3$'ün katı olmalı ($0$ veya $6$).",
            hint: "$3$ tek sayı olduğu için $4\\,323$ çift olmaz; $6$ uygundur."
          },
          {
            title: "Asal Sayılar ve Asal Çarpan Ağacı", subtitle: "Yalnızca 1'e ve Kendisine Bölünenler",
            steps: ["$1$'den büyük, sadece $1$'e ve kendisine bölünebilen sayılara **asal sayı** denir: $2, 3, 5, 7, 11, 13, \\dots$", "$1$ asal değildir ve $2$ tek **çift** asal sayıdır.", "$60$'ı asal çarpanlara ayırırken sırayla böleriz: $60 = 2^2 \\times 3 \\times 5$."],
            q: "$84$ sayısının birbirinden farklı asal çarpanları hangi seçenekte verilmiştir?",
            qc: ["2, 3, 5", "2, 3, 7", "2, 4, 7"], qa: "2, 3, 7",
            hint: "$84 = 4 \\times 21 = 2^2 \\times 3 \\times 7$'dir."
          },
          {
            title: "Bölünebilme Sorusu", subtitle: "4 ve 9 ile Ortak Şart",
            stem: "$5\\,1A2$ dört basamaklı sayısı **$4$** ve **$9$** ile tam bölünebildiğine göre $A$ rakamı kaçtır?",
            opts: ["$1$", "$3$", "$5$", "$9$"], ans: "A",
            hint: "Son iki basamak $A2$ sayısının $4$'ün katı olması için $A$ tek rakam ($1,3,5,7,9$) olmalıdır; ayrıca $5+1+A+2=8+A$ toplamı $9$'un katı olmalı!",
            sol: "$9$'a tam bölünmesi için $8 + A$ toplamı $9$ veya $18$ olmalı; rakam olarak $A = 1$ (çünkü $8+1=9$). Son iki basamak $12$ de $4$'e tam bölünür! Doğru yanıt $1$.",
            badge: "Bölünebilme Ustası"
          },
          {
            title: "Ortak Bölen ve Ortak Kat Modellemesi", subtitle: "Parçalamada Bölen, Birleştirmede Kat",
            exp: ["$18\\text{ cm}$ ve $24\\text{ cm}$ iki ipi hiç artmadan eşit parçalara bölmek istediğimizde parça uzunluğu her ikisinin **ortak böleni** ($1, 2, 3, 6$) olmalıdır.", "$6$ dk ve $8$ dk'da çalan iki saatin tekrar birlikte çalması ise **ortak kat** ($24, 48, \\dots$) kavramıyla bulunur."],
            sent: "$12\\text{ cm}$ ve $15\\text{ cm}$ uzunluğundaki çubuklar eşit tam sayı parçalara kesilecekse kullanılabilecek **en büyük** parça {0} cm'dir; uç uca eklenip eşit uzunlukta iki sıra yapılacak olsaydı birleşecekleri **en küçük** ortak boy {1} cm olurdu.",
            blanks: [["3", ["3", "5", "6"]], ["60", ["30", "45", "60"]]],
            vTitle: "Ortak Bölen vs Ortak Kat",
            vNums: [["OB(12, 15)", "Ortak bölenler: 1, 3", 1], ["OK(12, 15)", "Katları: 60, 120...", 1]],
            vSum: "Büyükten küçüğe bölüyorsak Ortak Bölen, küçükleri birleştirip büyütüyorsak Ortak Kat kullanırız.",
            hint: "$12$ ve $15$'in en büyük ortak böleni $3$, en küçük ortak katı $60$'tır."
          },
          {
            title: "Çarpan Sayısını Çiftlerle Bulma", subtitle: "Gökkuşağı Yöntemi",
            steps: ["$36$'nın tüm doğal sayı çarpanlarını bulmak için baştan ve sondan çiftler yazarız.", "$1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$ ve $6 \\times 6$.", "Aynı çarpanı bir kez saydığımızda toplam $9$ çarpanı olduğunu görürüz."],
            q: "$28$ doğal sayısının kaç tane doğal sayı çarpanı (böleni) vardır?",
            qc: ["4", "6", "8"], qa: "6",
            hint: "$1 \\times 28$, $2 \\times 14$, $4 \\times 7$ çiftlerini say."
          },
          {
            title: "Nöbet ve Ortak Kat Sorusu", subtitle: "Ortak Kat Uygulaması",
            stem: "Bir limandan A gemisi $8$ günde bir, B gemisi $12$ günde bir sefere çıkmaktadır. Bugün birlikte sefere çıkan iki gemi **en az kaç gün sonra** tekrar aynı gün sefere çıkar?",
            opts: ["$16$", "$20$", "$24$", "$36$"], ans: "C",
            hint: "$8$'in katları ($8, 16, 24, \\dots$) ve $12$'nin katları ($12, 24, \\dots$) ilk hangi sayıda buluşur?",
            sol: "$8$ ile $12$'nin en küçük ortak katı $24$ olduğundan $24$ gün sonra tekrar birlikte sefere çıkarlar.",
            badge: "Asal Çarpan Şefi"
          }
        ]
      }),
      makeUnit({
        track: "6", grade: 6, no: 2,
        title: "Kesir, Ondalık ve Yüzde İşlemleri",
        subtitle: "Kesir-Bölme, Devirli Ondalık ve Problemler",
        desc: "Kesirleri bölme olarak yorumlayıp sonlu-devirli ondalık açılımlara ulaşır, kesir-ondalık-yüzde dört işlem problemlerini çözeriz.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["a/b = a÷b", "Sonlu", "Devirli", "Kesir × Kesir", "Kesir ÷ Kesir", "Ondalık Çözüm", "Basamak", "Yüzde", "Metre m", "Ölçü", "Problem", "Tahmin"],
        k: [
          ["Ondalık Çözümleme ve Kesir-Bölme", "MAT.6.1.5"],
          ["Sonlu ve Devirli Ondalık Açılım", "MAT.6.1.6"],
          ["Kesir, Ondalık ve Yüzde Dört İşlem", "MAT.6.1.7"]
        ],
        s: [
          {
            title: "Kesirden Devirli Ondalığa", subtitle: "Bitmeyen Bölme İşlemi",
            exp: ["Payı paydasına böldüğümüzde kalan sıfırlanıyorsa **sonlu ondalık** ($\\frac{3}{4} = 0{,}75$) elde edilir.", "Aynı rakam veya blok sonsuza dek tekrar ediyorsa üstüne çizgi konur: $\\frac{1}{3} = 0{,}333\\dots = 0{,}\\overline{3}$ (**devirli ondalık**)."],
            sent: "$\\frac{2}{3}$ kesrinde $2$'yi $3$'e böldüğümüzde $0{,}666\\dots$ çıkar ve devreden rakamın üstüne çizgi konularak {0} yazılır; $\\frac{3}{5}$ ise sonlu olarak {1} yazılır.",
            blanks: [["0,6̄", ["0,6", "0,6̄", "0,3̄"]], ["0,6", ["0,3", "0,5", "0,6"]]],
            vTitle: "Sonlu vs Devirli Açılım",
            vNums: [["3 ÷ 5 = 0,6", "Kalan 0 (Sonlu)", 0], ["1 ÷ 3 = 0,333...", "Devirli gösterim", 1], ["2 ÷ 3 = 0,666...", "6 devreder", 1]],
            vSum: "Paydasının asal çarpanı yalnızca $2$ ve $5$ olan sadeleşmiş kesirler daima sonludur!",
            hint: "Üstünde devir çizgisi olan sayı sürekli tekrar eder."
          },
          {
            title: "Kesirlerde Çarpma ve Bölme", subtitle: "Ters Çevir ve Çarp",
            steps: ["İki kesri çarparken payları kendi arasında, paydaları kendi arasında çarparız: $\\frac{3}{4} \\times \\frac{2}{5} = \\frac{6}{20} = \\frac{3}{10}$.", "Kesirlerde bölme yaparken birinci kesri aynen yazar, ikinci kesri **ters çevirip çarparız**.", "Tam sayılı kesirler mutlaka önce **bileşik kesre** çevrilmelidir."],
            q: "$\\frac{4}{5} \\div \\frac{2}{15}$ işleminin sonucu kaçtır?",
            qc: ["6", "8/75", "3"], qa: "6",
            hint: "$\\frac{4}{5} \\times \\frac{15}{2} = \\frac{60}{10} = 6$."
          },
          {
            title: "Kesir Çarpma-Bölme Sorusu", subtitle: "Kumaş Kesimi",
            stem: "$4\\frac{1}{2}$ metre kumaş, her biri $\\frac{3}{4}$ metre uzunluğunda eş parçalara kesilecektir. Toplam **kaç parça** elde edilir?",
            opts: ["$4$", "$5$", "$6$", "$8$"], ans: "C",
            hint: "$4\\frac{1}{2} = \\frac{9}{2}$ yaz ve $\\frac{3}{4}$'e böl ($\\frac{9}{2} \\times \\frac{4}{3}$).",
            sol: "$\\frac{9}{2} \\div \\frac{3}{4} = \\frac{9}{2} \\times \\frac{4}{3} = \\frac{36}{6} = 6$ parça elde edilir.",
            badge: "Kesir İşlem Ustası"
          },
          {
            title: "Ondalık Sayılarda Basamak Çözümleme", subtitle: "Kesirlerle Ondalık Bağlantısı",
            exp: ["$14{,}207$ sayısını çözümlediğimizde $1 \\times 10 + 4 \\times 1 + 2 \\times \\frac{1}{10} + 7 \\times \\frac{1}{1000}$ yazarız.", "Ondalıklarla çarpma yaparken virgül yokmuş gibi çarpıp toplam virgülden sonraki basamak sayısı kadar sola ayırırız: $0{,}3 \\times 0{,}4 = 0{,}12$."],
            sent: "$0{,}25 \\times 0{,}4$ işleminde $25 \\times 4 = 100$ eder; toplam $3$ ondalık basamak ayrıldığı için sonuç {0} olur; ayrıca $3{,}45$ sayısında $5$'in basamak değeri kesirle {1} dir.",
            blanks: [["0,1", ["0,01", "0,1", "1"]], ["5/100", ["5/10", "5/100", "5/1000"]]],
            vTitle: "Ondalık Basamak Değerleri",
            vNums: [["0,25 × 0,4", "= 0,100 = 0,1", 1], ["5/100", "Yüzde birler", 0]],
            vSum: "Ondalık sayının en sağındaki sıfır değeri değiştirmez ($0{,}100 = 0{,}1$).",
            hint: "$0{,}100 = 0{,}1$ eşittir ve $3{,}45$'te $5$ ikinci ondalık basamaktadır."
          },
          {
            title: "Ondalıklarla Bölme Stratejisi", subtitle: "Virgülden Kurtararak Böl",
            steps: ["$2{,}4 \\div 0{,}6$ işleminde hem bölüneni hem böleni $10$ ile çarparak virgülden kurtarırız: $24 \\div 6 = 4$.", "$1{,}5 \\div 0{,}05$ işleminde ise $2$ basamak kaydırmak için her ikisini $100$ ile çarparız: $150 \\div 5 = 30$.", "Aynı sayıyla genişlettiğimiz için bölüm sonucu değişmez!"],
            q: "$3{,}6 \\div 0{,}12$ işleminin sonucu kaçtır?",
            qc: ["3", "30", "300"], qa: "30",
            hint: "Her iki sayıyı $100$ ile genişlet: $360 \\div 12$."
          },
          {
            title: "Ondalık ve Yüzde Problemi", subtitle: "Günlük Yaşam Alışverişi",
            stem: "Kilogramı $45{,}5\\text{ TL}$ olan peynirden $0{,}8\\text{ kg}$ ve tanesi $12{,}4\\text{ TL}$ olan ekmekten $2$ adet alan bir müşteri kaç TL öder?",
            opts: ["$58{,}8\\text{ TL}$", "$61{,}2\\text{ TL}$", "$62{,}4\\text{ TL}$", "$64{,}6\\text{ TL}$"], ans: "B",
            hint: "$45{,}5 \\times 0{,}8 = 36{,}4$ ve $12{,}4 \\times 2 = 24{,}8$ tutarlarını topla.",
            sol: "Peynir $45{,}5 \\times 0{,}8 = 36{,}4\\text{ TL}$, ekmekler $12{,}4 \\times 2 = 24{,}8\\text{ TL}$. Toplam $36{,}4 + 24{,}8 = 61{,}2\\text{ TL}$.",
            badge: "Ondalık Ustası"
          }
        ]
      }),
      makeUnit({
        track: "6", grade: 6, no: 3,
        title: "Bilinmeyen Nicelikler, Örüntü ve Cebir",
        subtitle: "Değişken, n. Terim ve Cebirsel Algoritmalar (TYMM 6)",
        desc: "Bilinmeyen nicelikleri harfli cebirsel ifadelerle temsil eder, örüntü kuralını bulur ve algoritmik adımları yorumlarız.",
        coverImage: "assets/flow/u06_cebirsel_ozdeslik.jpg",
        cells: ["Değişken x", "Cebirsel İfade", "Katsayı", "Sabit Terim", "Örüntü", "n. Terim", "Algoritma", "Akış Şeması", "2n+1", "Değer Hesabı", "Model", "Genelleme"],
        k: [
          ["Bilinmeyen Nicelikler ve Cebirsel İfadeler", "MAT.6.2.1"],
          ["Sayı ve Şekil Örüntülerinin Kuralı", "MAT.6.2.2"],
          ["Cebirsel İfadeler ve Algoritmalar", "MAT.6.2.3"]
        ],
        s: [
          {
            title: "Sözel İfadeden Cebirsel İfadeye", subtitle: "Değişkeni (x) Doğru Yerleştir",
            exp: ["Bilinmeyen bir sayıya $x$ dersek, 'bu sayının $3$ katının $5$ eksiği' ifadesi **$3x - 5$** olarak yazılır.", "'Bir sayının $4$ eksiğinin $2$ katı' ise önce çıkarma yapılacağı için parantezle **$2(x - 4)$** yazılmalıdır."],
            sent: "Ali'nin parası $a\\text{ TL}$ iken 'parasının yarısının $10\\text{ TL}$ fazlası' cebirsel olarak {0} biçiminde yazılır; bu ifadede sabit terim {1}'dur.",
            blanks: [["a/2 + 10", ["2a + 10", "a/2 + 10", "(a+10)/2"]], ["10", ["2", "a", "10"]]],
            vTitle: "Sözel → Cebirsel Çeviri",
            vNums: [["3 katının 5 fazlası", "3x + 5", 0], ["5 fazlasının 3 katı", "3(x + 5)", 1], ["Sabit terim", "Değişkensiz sayı", 0]],
            vSum: "Türkçe cümledeki işlem sırası parantez kullanımını belirler!",
            hint: "Yarısı $a/2$ demek, değişken içermeyen kısım ise $+10$'dur."
          },
          {
            title: "Örüntünün Genel Terimini (n. Adım) Bulma", subtitle: "Artış Miktarı × n + Başlangıç Ayarı",
            steps: ["$5, 9, 13, 17, \\dots$ sayı örüntüsünde her adımda $+4$ artış vardır.", "Kuralı kurarken artış miktarını $n$ ile çarparız: $4n$.", "$n = 1$ için $4(1) = 4$ çıkar; ilk terim $5$ olduğu için $+1$ ekleriz: Kural $= 4n + 1$."],
            q: "$7, 12, 17, 22, \\dots$ örüntüsünün $10$. terimi kaçtır?",
            qc: ["47", "52", "57"], qa: "52",
            hint: "Kural $5n + 2$ olduğundan $n = 10$ için $5(10) + 2 = 52$ bulunur."
          },
          {
            title: "Cebirsel İfade Değer Sorusu", subtitle: "Yerine Koyma ve Terimler",
            stem: "$4x + 3y - 7$ cebirsel ifadesinde $x = 5$ ve $y = 2$ değerleri için ifadenin sonucu kaç olur?",
            opts: ["$17$", "$19$", "$21$", "$26$"], ans: "B",
            hint: "$4(5) + 3(2) - 7$ işlemini çarpma önceliğine göre yap.",
            sol: "$4 \\cdot 5 + 3 \\cdot 2 - 7 = 20 + 6 - 7 = 19$ bulunur.",
            badge: "Cebir Kaşifi"
          },
          {
            title: "Cebirsel İfadelerle Algoritma Adımları", subtitle: "Girdi → İşlem Kutusu → Çıktı",
            exp: ["Bir bilgisayar algoritması girdi olarak $n$ sayısını alıp sırasıyla '$2$ ile çarp, $3$ ekle' adımlarını uyguluyorsa çıktısı $2n + 3$ olur.", "Eğer 'sonuç $20$'den büyükse dur, değilse başa dön' komutu varsa çıktı koşul sağlanana kadar döngüye girer."],
            sent: "Girdi $x$ sayısına 'önce $4$ ekle, sonra sonucu $3$ ile çarp' algoritmasının cebirsel çıktısı {0} olur; $x = 2$ girilirse ekranda {1} yazar.",
            blanks: [["3(x + 4)", ["3x + 4", "3(x + 4)", "4x + 3"]], ["18", ["10", "12", "18"]]],
            vTitle: "Algoritma Akışı",
            vNums: [["Girdi: x = 2", "Adım 1: x + 4 = 6", 0], ["Adım 2: × 3", "Çıktı = 18", 1]],
            vSum: "Adımların sırası cebirsel ifadenin parantezini doğrudan etkiler.",
            hint: "Önce toplama yapıldığı için $(x+4)$ parantez içine alınır: $3(2+4)=18$."
          },
          {
            title: "Cebirsel İfadenin Parçaları", subtitle: "Terim, Katsayı ve Sabit Terim",
            steps: ["$5a - 2b + 8$ ifadesinde toplama-çıkarma ile ayrılan $5a$, $-2b$ ve $+8$ parçalarına **terim** denir.", "Değişkenlerin önündeki sayılar ($5$ ve $-2$) ve sabit terim ($+8$) **katsayılar**dır.", "Bu ifadenin katsayılar toplamı $5 + (-2) + 8 = 11$'dir."],
            q: "$6m - 4n + 9$ ifadesinin sabit terimi ile $n$'nin katsayısı hangi seçenekte doğru verilmiştir?",
            qc: ["9 ve 4", "9 ve -4", "-9 ve -4"], qa: "9 ve -4",
            hint: "Terimin önündeki eksi işareti katsayıya aittir: $-4$."
          },
          {
            title: "Kibrit Örüntüsü Problemi", subtitle: "Genel Kural Kurma",
            stem: "1. adımında $6$, 2. adımında $11$, 3. adımında $16$ birim kare kullanılan bir şekil örüntüsünün **20. adımında** kaç birim kare kullanılır?",
            opts: ["$96$", "$101$", "$106$", "$110$"], ans: "B",
            hint: "Her adımda $+5$ arttığına göre genel kural $5n + 1$ olur; $n = 20$ yaz.",
            sol: "Artış $+5$ olduğundan kural $5n + 1$'dir ($n=1 \\implies 6$). $20$. adımda $5(20) + 1 = 101$ kare kullanılır.",
            badge: "Algoritma Mimarı"
          }
        ]
      }),
      makeUnit({
        track: "6", grade: 6, no: 4,
        title: "Paralel Doğrular, Açılar ve Dörtgenler",
        subtitle: "Kesen Açıları, Yamuk, Paralelkenar ve Köşegenler",
        desc: "İki paralel doğrunun bir kesenle oluşturduğu açıları sınıflar, dörtgenlerin köşegen-açı özelliklerini kanıtlarız.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        cells: ["Yöndeş", "İç Ters", "Dış Ters", "Karşı Durumlu", "Yamuk", "Paralelkenar", "Eşkenar Dörtgen", "Köşegen", "Dik Kesişim", "Ortalama", "Bütünler", "Ters Açı"],
        k: [
          ["Paralel Doğru ve Kesen Açıları", "MAT.6.3.1"],
          ["Köşegen Özelliklerine Göre Dörtgenler", "MAT.6.3.3"],
          ["Üçgen ve Dörtgende Açı Problemleri", "MAT.6.3.4"]
        ],
        s: [
          {
            title: "Paralel Doğrular ve Kesen Açıları", subtitle: "Yöndeş, İç Ters ve Karşı Durumlu",
            exp: ["Paralel iki doğruyu bir kesen kestiğinde aynı yöne bakan **yöndeş açılar** ile Z harfi oluşturan **iç ters açılar** birbirine **eşittir**.", "İç tarafta aynı yöne bakan C/U şeklindeki **karşı durumlu** iki açının toplamı ise daima **$180^\\circ$**'dir."],
            sent: "İki paralel doğru arasındaki bir Z kuralında bir açı $52^\\circ$ ise ona iç ters olan diğer açı {0} derecedir; aynı taraftaki karşı durumlu iç açısı ise {1} derecedir.",
            blanks: [["52", ["38", "52", "128"]], ["128", ["52", "128", "142"]]],
            vTitle: "Z ve U Kuralı Özeti",
            vNums: [["Z (İç Ters)", "Açılar eşittir (52°=52°)", 1], ["U (Karşı Durumlu)", "Toplam 180° (180-52=128°)", 1]],
            vSum: "Bir kesişimde yalnızca iki farklı açı ölçüsü oluşur; dar olanlar eşit, geniş olanlar eşittir.",
            hint: "İç tersler eşit, karşı durumlular bütünlerdir ($180^\\circ - 52^\\circ$)."
          },
          {
            title: "Köşegenleri Ortalanan Dörtgenler", subtitle: "TYMM 6. Sınıf Sınıflama Yaklaşımı",
            steps: ["Köşegenleri birbirini ortalayan dörtgenler ailesi **paralelkenar** ailesidir (dikdörtgen, eşkenar dörtgen ve kare dahildir).", "Dikdörtgen ve karede köşegen uzunlukları birbirine **eşittir**.", "Eşkenar dörtgen ve karede ise köşegenler birbirini tam **$90^\\circ$ dik** keser."],
            q: "Hem köşegen uzunlukları eşit hem de köşegenleri birbirini dik kesen dörtgen hangisidir?",
            qc: ["Paralelkenar", "Dikdörtgen", "Kare"], qa: "Kare",
            hint: "Dikdörtgen dik açı (eşit köşegen), eşkenar dörtgen eşit kenar (dik köşegen) özelliğini birleştirir."
          },
          {
            title: "M Kuralı / Paralel Açı Sorusu", subtitle: "İç Ters Açı Uygulaması",
            stem: "Şekilde $d_1 \\parallel d_2$ paralel doğruları arasında M şeklinde kırılan iki kol üst ve alt doğrularla sırasıyla $35^\\circ$ ve $45^\\circ$'lik dar açılar yapıyor. Ortadaki kırılma açısı kaç derecedir?",
            opts: ["$70^\\circ$", "$80^\\circ$", "$90^\\circ$", "$100^\\circ$"], ans: "B",
            hint: "Ortadaki kırılma köşesinden $d_1$ ve $d_2$'ye paralel üçüncü bir yardımcı doğru geçirip Z kuralını uygula.",
            sol: "Yardımcı paralel doğru üst açıdan $35^\\circ$, alt açıdan $45^\\circ$ iç ters açılar taşır; toplam ortadaki açı $35^\\circ + 45^\\circ = 80^\\circ$ olur.",
            badge: "Paralel Açı Ustası"
          },
          {
            title: "Yamukta Komşu Açı Kuralı", subtitle: "Paralel Tabanlarda U Kuralı",
            exp: ["Bir yamukta alt ve üst tabanlar birbirine paralel olduğundan, aynı yan kenarın ucundaki iki iç açının toplamı daima $180^\\circ$'dir.", "Ancak sağ yan kenardaki açılarla sol yan kenardaki açılar yamuk ikizkenar değilse eşit olmak zorunda değildir."],
            sent: "$ABCD$ yamuğunda $[AB] \\parallel [DC]$ ve $m(\\widehat{A}) = 72^\\circ$ ise üst komşusu $m(\\widehat{D}) =$ {0} derece olur; $[BC]$ kenarındaki $\\widehat{B} + \\widehat{C}$ toplamı ise {1} derecedir.",
            blanks: [["108", ["72", "90", "108"]], ["180", ["180", "252", "360"]]],
            vTitle: "Yamuk Açıları",
            vNums: [["∠A + ∠D", "= 180° (U kuralı)", 1], ["∠B + ∠C", "= 180° (U kuralı)", 1]],
            vSum: "Yamuğun paralel kenarları arasında kalan yan açılar bütünlerdir.",
            hint: "$180 - 72 = 108^\\circ$ olur."
          },
          {
            title: "Eşkenar Dörtgen ve Açıortay Köşegeni", subtitle: "Köşegen Açıları Böler mi?",
            steps: ["**Eşkenar dörtgen** ve **karede** köşegenler aynı zamanda köşe açılarının **açıortayıdır** (iki eş parçaya böler).", "Dikdörtgen ve genel paralelkenarda köşegen açıortay değildir.", "Eşkenar dörtgenin ortasında oluşan $4$ dik üçgen birbirine eşittir."],
            q: "Bir eşkenar dörtgenin bir köşesindeki geniş açısı $110^\\circ$ ise, bu köşeden çizilen köşegenin ayırdığı iki eş açı kaçar derecedir?",
            qc: ["35°", "55°", "70°"], qa: "55°",
            hint: "Köşegen $110^\\circ$'yi iki eş parçaya böler."
          },
          {
            title: "Dörtgen Açı Problemi", subtitle: "Paralelkenar ve Üçgen Birleşimi",
            stem: "Bir $ABCD$ paralelkenarında $m(\\widehat{A}) = 65^\\circ$ olduğuna göre $m(\\widehat{C}) + m(\\widehat{D})$ toplamı kaç derecedir?",
            opts: ["$130^\\circ$", "$155^\\circ$", "$180^\\circ$", "$230^\\circ$"], ans: "C",
            hint: "Paralelkenarda karşılıklı açılar eşit ($m(\\widehat{C}) = m(\\widehat{A})$) ve ardışık açılar bütünlerdir ($m(\\widehat{C}) + m(\\widehat{D}) = 180^\\circ$).",
            sol: "$m(\\widehat{C}) = 65^\\circ$ ve $m(\\widehat{D}) = 180^\\circ - 65^\\circ = 115^\\circ$. Toplamları $65^\\circ + 115^\\circ = 180^\\circ$ olur.",
            badge: "Dörtgen Geometri Ustası"
          }
        ]
      }),
      makeUnit({
        track: "6", grade: 6, no: 5,
        title: "Alan Bağıntıları ve Çember Uzunluğu",
        subtitle: "Paralelkenar-Üçgen Alanı ve Çemberde Pi (π)",
        desc: "Dikdörtgenden yola çıkarak paralelkenar ve üçgenin alanını, çemberin çevresi ($2\\pi r$) ve merkez açıya göre yay uzunluğunu hesaplarız.",
        coverImage: "assets/flow/u10_eslik_benzerlik.jpg",
        cells: ["1 m²=10000 cm²", "Paralelkenar a·h", "Üçgen (a·h)/2", "Yükseklik", "Çember", "Çap d=2r", "Pi (π)", "Ç = 2πr", "Yay Uzunluğu", "Merkez Açı", "Arşın/Arazi", "Dönüm"],
        k: [
          ["Alan Ölçme Birimleri ve Dönüşüm", "MAT.6.4.1"],
          ["Paralelkenar ve Üçgenin Alanı", "MAT.6.4.2"],
          ["Çember Uzunluğu ve Yay Hesabı", "MAT.6.4.5"]
        ],
        s: [
          {
            title: "Uzunluk × 10, Alan × 100!", subtitle: "Alan Ölçme Birimleri Merdiveni",
            exp: ["Uzunlukta her basamak $10$ ile çarpılırken **alanda** iki boyut (en $\\times$ boy) olduğundan her basamakta **$100$** ile çarpılır veya bölünür.", "Örneğin $1\\text{ m} = 100\\text{ cm}$ iken $1\\text{ m}^2 = 100 \\times 100 = 10\\,000\\text{ cm}^2$'dir."],
            sent: "$3\\text{ m}^2$ alanı santimetrekareye çevirirken {0} $\\text{cm}^2$ bulunur; arazi ölçümünde $1$ dönüm (dekar) {1} $\\text{m}^2$'dir.",
            blanks: [["30.000", ["300", "3.000", "30.000"]], ["1.000", ["100", "1.000", "10.000"]]],
            vTitle: "Alan Dönüşüm Çarpanları",
            vNums: [["1 m² → cm²", "2 basamak = ×10.000", 1], ["1 ar", "= 100 m²", 0], ["1 dekar (dönüm)", "= 1.000 m²", 1]],
            vSum: "Alan basamakları yüzer yüzer ($10^2$) büyür ve küçülür.",
            hint: "$\\text{m}^2 \\to \\text{dm}^2 \\to \\text{cm}^2$ iki basamak olduğundan $100 \\times 100 = 10\\,000$."
          },
          {
            title: "Paralelkenar ve Üçgenin Alan Bağıntısı", subtitle: "Taban ile Dik Yüksekliği Bul",
            steps: ["Paralelkenarın solundaki dik üçgeni kesip sağına eklersek bir dikdörtgen oluşur: **Alan $=$ Taban $\\times$ Yükseklik** ($a \\cdot h$).", "Üçgen ise aynı taban ve yüksekliğe sahip paralelkenarın tam yarısıdır: **Alan $= \\frac{a \\cdot h}{2}$**.", "Yükseklik mutlaka tabana $90^\\circ$ dik inmelidir; geniş açılı üçgenlerde yükseklik dışarıya düşebilir."],
            q: "Tabanı $14\\text{ cm}$ ve yüksekliği $9\\text{ cm}$ olan bir üçgenin alanı kaç $\\text{cm}^2$'dir?",
            qc: ["63 cm²", "72 cm²", "126 cm²"], qa: "63 cm²",
            hint: "$(14 \\times 9) \\div 2 = 7 \\times 9 = 63\\text{ cm}^2$."
          },
          {
            title: "Paralelkenarda İki Yükseklik Sorusu", subtitle: "Aynı Alan Eşitliği",
            stem: "Bir paralelkenarın $15\\text{ cm}$'lik tabanına ait yüksekliği $8\\text{ cm}$'dir. Aynı paralelkenarın $12\\text{ cm}$'lik diğer tabanına ait yüksekliği kaç cm'dir?",
            opts: ["$6\\text{ cm}$", "$9\\text{ cm}$", "$10\\text{ cm}$", "$12\\text{ cm}$"], ans: "C",
            hint: "Paralelkenarın alanı değişmez: $15 \\times 8 = 12 \\times h$.",
            sol: "Alan $= 15 \\times 8 = 120\\text{ cm}^2$. Diğer yükseklik $h = 120 \\div 12 = 10\\text{ cm}$ bulunur.",
            badge: "Alan Analisti"
          },
          {
            title: "Çemberin Çevresi ve Pi ($\\pi$)", subtitle: "Çap × Pi = Çevre",
            exp: ["Hangi büyüklükte çember çizersek çizelim, çevresinin çapına oranı daima sabit $\\pi$ ($\\approx 3{,}14$ veya problemlerde $3$) sayısını verir.", "Çap $R = 2r$ olduğundan çember çevresi **$C = \\pi \\cdot R = 2\\pi r$** formülüyle hesaplanır."],
            sent: "Yarıçapı $5\\text{ cm}$ olan bir tekerleğin çapı {0} cm'dir; $\\pi = 3$ alınırsa çevresi {1} cm olur.",
            blanks: [["10", ["5", "10", "15"]], ["30", ["15", "30", "45"]]],
            vTitle: "Çember Çevre Formülü",
            vNums: [["r = 5 cm", "Yarıçap", 0], ["d = 10 cm", "Çap = 2r", 0], ["Ç = 2·3·5", "= 30 cm", 1]],
            vSum: "Verilen değer yarıçap ($r$) mı yoksa çap ($R$) mı dikkatle kontrol et!",
            hint: "Çap $= 2 \\times 5 = 10$, çevre $= 3 \\times 10 = 30$."
          },
          {
            title: "Yay Uzunluğu ve Merkez Açı", subtitle: "360 Derece ile Orantı",
            steps: ["Çemberin tamamı $360^\\circ$'lik merkez açıya karşılık gelir.", "Merkez açısı $\\alpha$ olan bir yayın uzunluğu, tüm çevrenin $\\frac{\\alpha}{360^\\circ}$ kadarıdır.", "Örneğin $90^\\circ$'lik yay uzunluğu tam çevrenin $\\frac{1}{4}$'üdür."],
            q: "Çevresi $72\\text{ cm}$ olan çemberde $60^\\circ$'lik merkez açının gördüğü yay kaç santimetredir?",
            qc: ["10 cm", "12 cm", "18 cm"], qa: "12 cm",
            hint: "$60^\\circ$, $360^\\circ$'nin altıda biridir: $72 \\div 6 = 12\\text{ cm}$."
          },
          {
            title: "Bisiklet Tekerleği Tur Sorusu", subtitle: "Çember Çevre Uygulaması",
            stem: "Yarıçapı $25\\text{ cm}$ olan bir bisiklet tekerleği düz yolda $10$ tam tur attığında kaç **metre** yol gider? ($\\pi = 3$ alınız.)",
            opts: ["$7{,}5\\text{ m}$", "$12\\text{ m}$", "$15\\text{ m}$", "$150\\text{ m}$"], ans: "C",
            hint: "$1$ tur $=$ çevre $= 2 \\cdot 3 \\cdot 25 = 150\\text{ cm}$; $10$ turu çarpıp metreye çevir.",
            sol: "Çevre $= 2 \\cdot 3 \\cdot 25 = 150\\text{ cm}$. $10$ turda $1\\,500\\text{ cm} = 15\\text{ m}$ yol alır.",
            badge: "Pi & Çember Ustası"
          }
        ]
      }),
      makeUnit({
        track: "6", grade: 6, no: 6,
        title: "Veri Dağılımı ve Deneysel Olasılık",
        subtitle: "Kök-Yaprak, Ortalama-Ortanca-Mod ve Deneysel Tahmin (TYMM)",
        desc: "Kök-yaprak ve nokta grafiklerinden ortalama, ortanca, tepe değer ve açıklığı hesaplar; deney tekrarlarıyla olasılık tahmini yaparız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Kök-Yaprak", "Nokta Grafiği", "Ortalama", "Ortanca", "Tepe Değer", "Açıklık", "Kategorik", "Kesikli", "Deneysel Olasılık", "Göreli Sıklık", "Tekrar", "Yorum"],
        k: [
          ["Kök-Yaprak ve Nokta Grafiği", "MAT.6.5.1"],
          ["Aritmetik Ortalama, Ortanca, Mod, Açıklık", "MAT.6.5.2"],
          ["Göreli Sıklık ve Deneysel Olasılık", "MAT.6.6.1"]
        ],
        s: [
          {
            title: "Kök-Yaprak Gösterimini Okuma", subtitle: "Onlar Basamağı Kök, Birler Yaprak",
            exp: ["**Kök-yaprak gösteriminde** her verinin son basamağı yaprak kısmına, önündeki basamaklar ise kök kısmına yazılır.", "Örneğin Kök $3$ | Yaprak $2, 5, 5, 8$ satırı bize verilerin $32, 35, 35, 38$ olduğunu tek satırda ve sıralı biçimde gösterir!"],
            sent: "Kök $4$ | Yaprak $0, 3, 7, 7$ satırı dört veriyi temsil eder; bu satırdaki en büyük değer {0}, iki kez tekrar eden veri ise {1} sayısıdır.",
            blanks: [["47", ["7", "43", "47"]], ["47", ["40", "43", "47"]]],
            vTitle: "Kök-Yaprak Çözümlemesi",
            vNums: [["Kök: 4", "Onlar basamağı (40)", 0], ["Yaprak: 0,3,7,7", "Birler basamağı", 0], ["Veriler", "40, 43, 47, 47", 1]],
            vSum: "Kök-yaprak gösterimi tüm verileri kaybetmeden küçükten büyüğe dizer.",
            hint: "Kök $4$ ile yaprak $7$ birleşince $47$ olur ve iki tane $7$ vardır."
          },
          {
            title: "Merkezi Eğilim: Ortalama, Ortanca, Mod", subtitle: "Veri Özetleme Araçları",
            steps: ["**Aritmetik Ortalama**, tüm verilerin toplamının veri sayısına bölümüdür.", "**Ortanca (Medyan)**, küçükten büyüğe sıralı verilerin tam ortasındaki değerdir.", "**Tepe Değer (Mod)** en sık tekrar eden veri, **Açıklık** ise En Büyük $-$ En Küçük farkıdır."],
            q: "$12, 18, 15, 18, 22$ veri grubunun tepe değeri (mod) ve açıklığı kaçtır?",
            qc: ["Mod 18, Açıklık 10", "Mod 15, Açıklık 10", "Mod 18, Açıklık 7"], qa: "Mod 18, Açıklık 10",
            hint: "En çok geçen $18$'dir; açıklık $= 22 - 12 = 10$."
          },
          {
            title: "Ortalama Sorusu", subtitle: "Gruba Yeni Kişi Katılırsa",
            stem: "$4$ arkadaşın yaş ortalaması $12$'dir. Gruba yaş ortalaması değişmeyecek biçimde $1$ arkadaş daha katılacaksa yeni katılan kişinin yaşı kaç olmalıdır?",
            opts: ["$10$", "$12$", "$15$", "$16$"], ans: "B",
            hint: "Ortalamayla aynı değerde bir veri eklendiğinde ortalama sabit kalır ($48+12 = 60$, $60\\div 5 = 12$).",
            sol: "$4$ kişinin yaş toplamı $4 \\times 12 = 48$. $5$ kişinin de ortalamasının $12$ olması için toplam $5 \\times 12 = 60$ olmalı; eklenen kişi $60 - 48 = 12$ yaşındadır.",
            badge: "Veri Analizi Şefi"
          },
          {
            title: "Deneysel Olasılık ve Göreli Sıklık", subtitle: "TYMM 6. Sınıf Yeni Konu!",
            exp: ["Bir madeni parayı veya şişe kapağını $100$ kez atıp $62$ kez dik geldiğini gözlemlediğimizde elde ettiğimiz $\\frac{62}{100} = 0{,}62$ oranına **göreli sıklık** denir.", "Deney tekrar sayısı arttıkça (örneğin $20$ yerine $500$ kez) göreli sıklık, olayın gerçek olasılığına çok daha güvenilir biçimde yaklaşır."],
            sent: "Bir torbadan $50$ kez top çekilip geri atıldığında $35$ kez kırmızı gelmişse kırmızı gelmenin deneysel olasılık tahmini {0} olur; deney sayısını $500$'e çıkarmak tahmini {1} hale getirir.",
            blanks: [["35/50", ["15/50", "35/50", "50/35"]], ["daha güvenilir", ["daha zayıf", "imkânsız", "daha güvenilir"]]],
            vTitle: "Deneysel Tahmin Kuralı",
            vNums: [["İstenen sonuç: 35", "Toplam deney: 50", 0], ["35/50 = %70", "Göreli sıklık", 1], ["Çok tekrar", "Gerçek değere yaklaşır", 1]],
            vSum: "Büyük sayılar ilkesi: Deneme sayısı ne kadar fazlaysa tahmin o kadar sağlıklıdır.",
            hint: "Deneysel olasılık $=$ Olayın görülme sayısı $/$ Toplam deneme sayısı."
          },
          {
            title: "Ortanca ve Aykırı Değer", subtitle: "Neden Bazen Ortalama Yerine Ortanca Seçilir?",
            steps: ["Bir grupta $10, 12, 13, 15, 100$ gibi çok uç bir değer (aykırı değer: $100$) varsa ortalama çok yukarı fırlar ($30$).", "Ancak ortanca (medyan) $13$ olarak grubun gerçek merkezini korur.", "Bu nedenle uç değerler olduğunda ortalama yerine ortanca daha sağlıklı özet verir."],
            q: "$8, 9, 10, 11, 52$ dizisinin ortancası mı yoksa aritmetik ortalaması mı daha büyüktür?",
            qc: ["Ortanca", "Aritmetik Ortalama", "Eşittir"], qa: "Aritmetik Ortalama",
            hint: "Ortanca $10$, ortalama ise $90 \\div 5 = 18$ çıkar."
          },
          {
            title: "6. Sınıf Deneysel Olasılık Sorusu", subtitle: "Deneyden Tahmin",
            stem: "Bir bilgisayar simülasyonunda hileli bir zar $200$ kez atıldığında $6$ gelme sayısı $80$ olarak kaydedilmiştir. Aynı koşullarda bu zar $500$ kez atılırsa yaklaşık **kaç kez $6$** gelmesi beklenir?",
            opts: ["$120$", "$160$", "$200$", "$250$"], ans: "C",
            hint: "Önce $200$ atıştaki göreli sıklığı ($\\frac{80}{200} = \\frac{2}{5}$) bul, sonra $500$ ile çarp.",
            sol: "Deneysel olasılık $\\frac{80}{200} = 0{,}4$ ($\\%40$). $500$ atışta beklenen sayı $500 \\times 0{,}4 = 200$ kezdir.",
            badge: "6. Sınıf Mezunu"
          }
        ]
      })
    ],
    "7": [
      makeUnit({
        track: "7", grade: 7, no: 1,
        title: "Tam Sayılar ve Rasyonel Sayılarda İşlemler",
        subtitle: "Mutlak Değer, Sayı Doğrusu ve Devirli Açılım (TYMM 7)",
        desc: "Tam sayılarla rasyonel sayıları sayı doğrusunda konumlandırır, devirli ondalıkları kesre çevirir ve dört işlem problemleri çözeriz.",
        coverImage: "assets/flow/u03_karekoklu_ifadeler.jpg",
        cells: ["Tam Sayı Z", "Negatif (-)", "Mutlak Değer", "Rasyonel Q", "Devirli", "Sayı Doğrusu", "Sıralama", "Toplama", "Çarpma", "Bölme", "Çok Adımlı", "Kuvvet"],
        k: [
          ["Tam Sayılar ve Mutlak Değer", "MAT.7.1.1"],
          ["Rasyonel Sayılar ve Devirli Ondalık", "MAT.7.1.2"],
          ["Rasyonel Sayılarda Dört İşlem", "MAT.7.1.4"]
        ],
        s: [
          {
            title: "Mutlak Değer ve Negatif Sayılar", subtitle: "Sıfıra Olan Uzaklık Asla Eksi Olmaz",
            exp: ["Tam sayılar pozitif ($+1,+2,\\dots$), negatif ($-1,-2,\\dots$) ve $0$'dan oluşur. Her tam sayı paydası $1$ olan bir rasyonel sayıdır.", "Bir sayının sayı doğrusunda $0$'a uzaklığına **mutlak değer** denir ($|-7| = 7$); negatif sayılar $0$'dan uzaklaştıkça değerce küçülür."],
            sent: "$-12$ ve $-5$ sayıları karşılaştırıldığında sıfıra daha yakın olduğu için büyük olan sayı {0} olur; ancak mutlak değer olarak $|-12| =$ {1} daha büyüktür.",
            blanks: [["-5", ["-12", "-5", "eşit"]], ["12", ["-12", "5", "12"]]],
            vTitle: "Sayı Doğrusu & Mutlak Değer",
            vNums: [["-5 > -12", "Sağdaki büyüktür", 1], ["|-12| = 12", "0'a uzaklık pozitif", 1], ["3/1 = 3", "Tam sayılar ⊂ Q", 0]],
            vSum: "Sayı doğrusunda sağa doğru gidildikçe sayılar daima büyür.",
            hint: "$-5$ sayısı $-12$'nin sağındadır; mutlak değer işareti pozitif yapar."
          },
          {
            title: "Devirli Ondalıkları Rasyonel Yazma", subtitle: "Tüm Sayı - Devretmeyen / 9'lar ve 0'lar",
            steps: ["Devirli bir ondalık gösterimi $\\frac{a}{b}$ kesrine çevirirken paya **(Sayının tamamı $-$ Devretmeyen kısım)** yazılır.", "Paydaya ise virgülden sonrası için **devreden rakam adedi kadar $9$**, devretmeyen rakam adedi kadar $0$ yazılır.", "Örneğin $0{,}\\overline{4} = \\frac{4}{9}$ ve $1{,}2\\overline{3} = \\frac{123 - 12}{90} = \\frac{111}{90} = \\frac{37}{30}$."],
            q: "$0{,}\\overline{7} + 0{,}\\overline{2}$ işleminin sonucu kaçtır?",
            qc: ["9/10", "1", "0,9"], qa: "1",
            hint: "$\\frac{7}{9} + \\frac{2}{9} = \\frac{9}{9} = 1$!"
          },
          {
            title: "Tam Sayı Sıcaklık Sorusu", subtitle: "Negatif Sayılarda Fark",
            stem: "Gece sıcaklığı $-7^\\circ\\text{C}$ olan Erzurum'da gündüz sıcaklık $11^\\circ\\text{C}$ artmış, akşam tekrar $6^\\circ\\text{C}$ düşmüştür. Akşam sıcaklığı kaç derecedir?",
            opts: ["$-2^\\circ\\text{C}$", "$0^\\circ\\text{C}$", "$+2^\\circ\\text{C}$", "$+4^\\circ\\text{C}$"], ans: "A",
            hint: "$(-7) + (+11) - 6$ işlemini sırayla yap.",
            sol: "Gündüz sıcaklık $-7 + 11 = +4^\\circ\\text{C}$. Akşam $4 - 6 = -2^\\circ\\text{C}$ olur.",
            badge: "İşaret Ustası"
          },
          {
            title: "Rasyonel Sayılarda Çarpma ve Bölme", subtitle: "İşaret Kuralı + Çarpma",
            exp: ["Negatif rasyonel sayılarla işlem yaparken önce işareti belirleriz: Aynı işaretlerin çarpımı/bölümü $+$, zıt işaretlerin ise $-$'dir.", "Örneğin $\\left(-\\frac{3}{4}\\right) \\cdot \\left(-\\frac{8}{9}\\right) = +\\frac{24}{36} = +\\frac{2}{3}$ elde edilir."],
            sent: "$\\left(-\\frac{2}{5}\\right) \\div \\left(+\\frac{4}{15}\\right)$ bölmesinde işaretler zıt olduğu için sonuç {0} işaretlidir ve mutlak değeri sadeleşince kesir {1} olur.",
            blanks: [["-", ["+", "-", "0"]], ["-3/2", ["-3/2", "-8/75", "3/2"]]],
            vTitle: "Rasyonel İşaret & Sadeleştirme",
            vNums: [["(-) ÷ (+)", "Sonuç eksi (-)", 1], ["2/5 × 15/4", "= 30/20 = 3/2", 1]],
            vSum: "Çarpmadan önce çapraz sadeleştirme yapmak işlemi hızlandırır.",
            hint: "$\\frac{2}{5} \\times \\frac{15}{4} = \\frac{3}{2}$, başına eksi gelir."
          },
          {
            title: "Merdivenli Kesir İşlemleri", subtitle: "En İçten Başla",
            steps: ["$1 + \\frac{1}{1 - \\frac{1}{2}}$ gibi kesirlerde daima en aşağıdaki (en içteki) işlemden başlarız.", "Önce $1 - \\frac{1}{2} = \\frac{1}{2}$ hesaplanır.", "Sonra $1 \\div \\frac{1}{2} = 2$ bulunur; en son $1 + 2 = 3$ elde edilir."],
            q: "$2 - \\frac{3}{1 + \\frac{1}{2}}$ işleminin sonucu kaçtır?",
            qc: ["0", "1/2", "1"], qa: "0",
            hint: "Payda $1 + \\frac{1}{2} = \\frac{3}{2}$. Ardından $3 \\div \\frac{3}{2} = 2$ ve $2 - 2 = 0$!"
          },
          {
            title: "Rasyonel Sayı Problemi", subtitle: "Sıralama ve Dört İşlem",
            stem: "Bir su deposunun $\\frac{2}{3}$'ü doluyken içindeki suyun $\\frac{1}{4}$'ü kullanılıyor. Kalan su tüm deponun kaçta kaçıdır?",
            opts: ["$\\frac{5}{12}$", "$\\frac{1}{2}$", "$\\frac{7}{12}$", "$\\frac{1}{6}$"], ans: "B",
            hint: "Dikkat! Deponun $\\frac{1}{4}$'ü değil, **içindeki suyun** $\\frac{1}{4}$'ü ($\\frac{2}{3} \\cdot \\frac{1}{4}$) kullanılmıştır.",
            sol: "Kullanılan kısım $\\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{6}$. Kalan kısım $\\frac{2}{3} - \\frac{1}{6} = \\frac{4-1}{6} = \\frac{3}{6} = \\frac{1}{2}$ olur.",
            badge: "Rasyonel Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "7", grade: 7, no: 2,
        title: "Oran, Orantı ve Doğru Orantılı Problemler",
        subtitle: "Birimli-Birimsiz Oran ve Orantı Sabiti (TYMM 7)",
        desc: "Birimli ve birimsiz oranları ayırt eder, doğru orantılı çoklukları tablo-grafikle inceler ve oran-orantı problemlerini çözeriz.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Birimli Oran", "Birimsiz Oran", "Denk Oran", "Orantı k", "Doğru Orantı", "İçler-Dışlar", "Ölçek", "Harita", "Yüzde Artış", "Tablo", "Grafik", "Hız"],
        k: [
          ["Birimli ve Birimsiz Oran İlişkileri", "MAT.7.1.5"],
          ["Doğru Orantılı Durumları Yorumlama", "MAT.7.1.6"],
          ["Doğru Orantı Problemlerini Çözme", "MAT.7.1.7"]
        ],
        s: [
          {
            title: "Birimli Oran mı, Birimsiz Oran mı?", subtitle: "Birimler Sadeleşir mi?",
            exp: ["İki uzunluk ($20\\text{ cm} / 5\\text{ m} = 20\\text{ cm} / 500\\text{ cm}$) aynı cinsten olduğu için birimler sadeleşir ve **birimsiz oran** ($\\frac{1}{25}$) elde edilir.", "Farklı birimler ($180\\text{ km} / 2\\text{ saat} = 90\\text{ km/sa}$) ise sadeleşmediği için **birimli oran** oluşturur."],
            sent: "Dakikada $120$ kelime okuyan bir öğrencinin okuma hızı farklı birimler bölündüğü için {0} orandır; $500\\text{ g}$ fındığın $2\\text{ kg}$ fındığa oranı ise sadeleşerek {1} birimsiz oranını verir.",
            blanks: [["birimli", ["birimli", "birimsiz", "orantısız"]], ["1/4", ["1/4", "1/250", "250"]]],
            vTitle: "Oran Çeşitleri",
            vNums: [["90 km / saat", "Farklı cins → Birimli", 1], ["500 g / 2000 g", "Aynı cins → 1/4", 1]],
            vSum: "Aynı cinsten büyüklükleri oranlarken önce aynı birime çeviririz.",
            hint: "$2\\text{ kg} = 2\\,000\\text{ g}$ olduğundan $\\frac{500}{2000} = \\frac{1}{4}$."
          },
          {
            title: "Doğru Orantı ve Orantı Sabiti (k)", subtitle: "Bölüm Hep Sabit Kalır!",
            steps: ["İki nicelikten biri kaç katına çıkarsa diğeri de aynı oranda artıyorsa **doğru orantı** vardır ($\\frac{y}{x} = k$).", "Tabloda $(2, 14), (3, 21), (5, 35)$ ikilileri için her zaman $\\frac{y}{x} = 7$ sabiti sağlanır.", "Doğru orantıda İçler Çarpımı Dışlar Çarpımına eşittir: $\\frac{a}{b} = \\frac{c}{d} \\implies a \\cdot d = b \\cdot c$."],
            q: "$\\frac{x + 2}{12} = \\frac{3}{4}$ orantısını sağlayan $x$ kaçtır?",
            qc: ["7", "9", "11"], qa: "7",
            hint: "İçler-dışlar çarpımı: $4(x + 2) = 36 \\implies x + 2 = 9 \\implies x = 7$."
          },
          {
            title: "Harita Ölçeği Sorusu", subtitle: "Birimsiz Oran Modeli",
            stem: "Ölçeği $\\frac{1}{500\\,000}$ olan bir haritada iki şehir arasındaki uzaklık $6\\text{ cm}$ olarak ölçülmüştür. Bu iki şehir arasındaki gerçek uzaklık kaç **km**'dir?",
            opts: ["$3\\text{ km}$", "$30\\text{ km}$", "$300\\text{ km}$", "$50\\text{ km}$"], ans: "B",
            hint: "$6 \\times 500\\,000 = 3\\,000\\,000\\text{ cm}$; km'ye çevirirken $100\\,000$'e ($5$ sıfır sil) böl.",
            sol: "Gerçek uzunluk $6 \\times 500\\,000 = 3\\,000\\,000\\text{ cm}$. $1\\text{ km} = 100\\,000\\text{ cm}$ olduğundan $3\\,000\\,000 \\div 100\\,000 = 30\\text{ km}$.",
            badge: "Ölçek Uzmanı"
          },
          {
            title: "Oran Problemlerinde Kat ($k$) Atama", subtitle: "Yaş ve Para Paylaşımı",
            exp: ["İki sayının oranı $\\frac{3}{5}$ ise küçük sayıya $3k$, büyük sayıya $5k$ diyerek tüm soruları kolayca çözeriz.", "Örneğin toplamları $64$ ise $3k + 5k = 8k = 64 \\implies k = 8$ bulunur; sayılar $24$ ve $40$'tır."],
            sent: "Bir sınıftaki kızların erkeklere oranı $\\frac{4}{5}$ ve sınıf mevcudu $36$ ise $4k + 5k = 36$ eşitliğinden $k =$ {0} ve kız öğrenci sayısı {1} bulunur.",
            blanks: [["4", ["3", "4", "5"]], ["16", ["12", "16", "20"]]],
            vTitle: "Kat Atama Yöntemi",
            vNums: [["Kız = 4k", "Erkek = 5k", 0], ["9k = 36", "k = 4", 1], ["Kız = 4×4", "= 16 kişi", 1]],
            vSum: "Oran verilen her problemde kat sabiti $k$ kullanmak hız ve kesinlik sağlar.",
            hint: "$36 \\div 9 = 4$, kızlar $4 \\times 4 = 16$."
          },
          {
            title: "Yüzde Artış ve İndirim Hesabı", subtitle: "Orantı İle Yüzde",
            steps: ["$250\\text{ TL}$'lik bir ürüne $\\%12$ zam yapılırsa zam miktarını $\\frac{12}{100} = \\frac{x}{250}$ orantısıyla bulabiliriz: $x = 30\\text{ TL}$.", "Zamlı fiyatı bulmanın kestirme yolu $250$'yi $1{,}12$ (yani $\\frac{112}{100}$) ile çarpmaktır: $280\\text{ TL}$.", "Eğer $\\%30$'u $42$ olan bir sayıyı arıyorsak $\\frac{30}{100} = \\frac{42}{S} \\implies S = 140$ bulunur."],
            q: "Hangi sayının $\\%40$'ı $72$'ye eşittir?",
            qc: ["160", "180", "200"], qa: "180",
            hint: "$\\frac{40}{100} \\cdot S = 72 \\implies S = 720 \\div 4 = 180$."
          },
          {
            title: "Tarif ve Karışım Oranı", subtitle: "Doğru Orantı Uygulaması",
            stem: "Bir limonata tarifinde $3$ litre suya $4$ bardak şeker ve $6$ limon sıkılmaktadır. $7{,}5$ litre su kullanarak aynı tatta limonata yapmak için **kaç limon** sıkılmalıdır?",
            opts: ["$12$", "$14$", "$15$", "$18$"], ans: "C",
            hint: "$3$ litre suya $6$ limon düşüyorsa su miktarı kaç katına çıktığına bak ($7{,}5 \\div 3 = 2{,}5$ kat)!",
            sol: "Her $3$ litre su için $6$ limon kullanılıyor (yani litre başına $2$ limon). $7{,}5 \\times 2 = 15$ limon gerekir.",
            badge: "Orantı Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "7", grade: 7, no: 3,
        title: "Cebirsel İşlemler, Denklemler ve Eşitsizlikler",
        subtitle: "Dağılma, 1. Dereceden Denklem-Eşitsizlik ve İspat (TYMM 7)",
        desc: "Cebirsel ifadeleri rasyonel katsayılarla çarpar, 1. dereceden denklem ve eşitsizlikleri çözer ve sayı özelliklerini cebirsel ispatlarız.",
        coverImage: "assets/flow/u07_dogrusal_denklemler.jpg",
        cells: ["Benzer Terim", "Dağılma", "Denklem", "Bilinmeyen", "Eşitsizlik", "Küçüktür <", "Büyüktür >", "Ters Çevirme", "Sayı Doğrusu", "Cebirsel İspat", "Ardışık Sayı", "Modelleme"],
        k: [
          ["Cebirsel İfadelerle Toplama ve Çarpma", "MAT.7.2.1"],
          ["1. Dereceden Denklem ve Eşitsizlik", "MAT.7.2.2"],
          ["Sayılar ve Cebirsel İspatlar", "MAT.7.2.3"]
        ],
        s: [
          {
            title: "Cebirsel İfadelerde Çıkarma ve Dağılma", subtitle: "Eksi İşareti Paranteze Dağılır!",
            exp: ["$(5x + 3) - (2x - 4)$ çıkarma işleminde eksi işareti ikinci parantezdeki **her terimin işaretini değiştirir**: $5x + 3 - 2x + 4 = 3x + 7$.", "Rasyonel katsayıyla çarparken $\\frac{1}{2}(4x - 6) = 2x - 3$ dağılır."],
            sent: "$4(2x - 1) - 3(x - 2)$ ifadesi açıldığında $8x - 4 - 3x + 6$ olur ve en sade hali {0} çıkar; bu ifadede $x = 3$ için değer {1} olur.",
            blanks: [["5x + 2", ["5x + 2", "5x - 10", "5x + 1"]], ["17", ["11", "15", "17"]]],
            vTitle: "Parantez Açma Dikkat Noktası",
            vNums: [["-3(x - 2)", "= -3x + 6 (+ olur!)", 1], ["8x - 3x", "= 5x", 0], ["-4 + 6", "= +2", 1]],
            vSum: "Eksi ile eksinin çarpımı her zaman $+$ verir!",
            hint: "$-3 \\cdot (-2) = +6$ olduğundan $-4 + 6 = +2$ ve $5(3) + 2 = 17$."
          },
          {
            title: "Birinci Dereceden Eşitsizlikler", subtitle: "Negatif Sayıyla Bölünce Yön Değişir!",
            steps: ["Denklemden farklı olarak eşitsizlikler ($\\lt, \\gt, \\le, \\ge$) tek bir sayı yerine bir **çözüm aralığı** verir.", "İki tarafa aynı sayıyı eklemek veya pozitif bir sayıya bölmek yönü değiştirmez.", "**Kritik Kural:** Eşitsizliğin her iki tarafı **negatif** bir sayıyla çarpılır veya bölünürse eşitsizlik yönü ters döner!"],
            q: "$14 - 3x \\le 2$ eşitsizliğini sağlayan en küçük $x$ tam sayısı kaçtır?",
            qc: ["3", "4", "5"], qa: "4",
            hint: "$-3x \\le -12$ ifadesini $-3$'e bölünce yön değişir: $x \\ge 4$."
          },
          {
            title: "Denklem Modelleme Sorusu", subtitle: "Ardışık Sayılar",
            stem: "Ardışık $3$ çift tam sayının toplamı $78$ olduğuna göre bu sayıların **en büyüğü** kaçtır?",
            opts: ["$24$", "$26$", "$28$", "$30$"], ans: "C",
            hint: "Sayıları $n, n+2, n+4$ şeklinde yazarak toplayıp $78$'e eşitle (veya ortancayı $78 \\div 3$ ile bul).",
            sol: "$n + (n+2) + (n+4) = 78 \\implies 3n + 6 = 78 \\implies 3n = 72 \\implies n = 24$. En büyük sayı $24 + 4 = 28$'dir.",
            badge: "Denklem Uzmanı"
          },
          {
            title: "Sayı Özelliklerini Cebirsel İspatlama", subtitle: "TYMM 7. Sınıf İspat Becerisi",
            exp: ["'Ardışık iki tek sayının toplamı neden hep $4$'e bölünür?' sorusunu birkaç örnekle değil cebirle genel olarak kanıtlayabiliriz.", "İki ardışık tek sayıyı $2n+1$ ve $2n+3$ yazarsak toplamları $(2n+1)+(2n+3) = 4n+4 = 4(n+1)$ olur ve bu her $n$ tam sayısı için $4$'ün katıdır!"],
            sent: "Her çift tam sayı $2n$ olarak yazılırsa ardışık iki çift sayının toplamı $2n + (2n + 2) = 4n + 2$ yani {0} parantezine alınır ve sonucun her zaman {1} olduğunu kanıtlarız.",
            blanks: [["2(2n + 1)", ["2(2n + 1)", "4(n + 1)", "n(n + 2)"]], ["çift", ["tek", "çift", "asal"]]],
            vTitle: "Cebirsel İspat Tekniği",
            vNums: [["Çift sayı", "2n ile gösterilir", 0], ["Tek sayı", "2n + 1 ile gösterilir", 1], ["4n + 2 = 2(2n+1)", "2 çarpanı → daima çift", 1]],
            vSum: "Bir örnek kuralı kanıtlamaz; cebirsel ifade **bütün** sayılar için ispat sağlar.",
            hint: "$4n + 2$ ifadesinde ortak çarpan $2$'dir."
          },
          {
            title: "Rasyonel Katsayılı Denklemler", subtitle: "Paydadan Kurtularak Çöz",
            steps: ["$\\frac{x}{3} + \\frac{x - 1}{2} = 7$ denkleminde tüm denklemi paydaların ortak katı ($6$) ile çarparız.", "Soldaki ilk terim $2x$, ikinci terim $3(x - 1)$, sağ taraf ise $42$ olur.", "$2x + 3x - 3 = 42 \\implies 5x = 45 \\implies x = 9$ bulunur."],
            q: "$\\frac{x + 1}{4} = \\frac{x - 2}{3}$ denkleminin kökü kaçtır?",
            qc: ["9", "10", "11"], qa: "11",
            hint: "İçler-dışlar yap: $3(x + 1) = 4(x - 2) \\implies 3x + 3 = 4x - 8$."
          },
          {
            title: "Eşitsizlik Yaşam Sorusu", subtitle: "Bütçe Sınırı Modellemesi",
            stem: "Aylık sabit $180\\text{ TL}$ internet faturasına ek olarak her $1\\text{ GB}$ ek paket için $25\\text{ TL}$ ödeyen Kerem, faturasının $330\\text{ TL}$'yi **geçmemesini** istiyor. En fazla kaç GB ek paket alabilir?",
            opts: ["$5$", "$6$", "$7$", "$8$"], ans: "B",
            hint: "$180 + 25x \\le 330$ eşitsizliğini kur ve çöz.",
            sol: "$180 + 25x \\le 330 \\implies 25x \\le 150 \\implies x \\le 6$. En fazla $6\\text{ GB}$ ek paket alabilir.",
            badge: "Cebir & İspat Ustası"
          }
        ]
      }),
      makeUnit({
        track: "7", grade: 7, no: 4,
        title: "Yansıma ve Üçgenin Yardımcı Elemanları",
        subtitle: "Simetri İnşası, Orta Dikme, Açıortay, Kenarortay (TYMM 7)",
        desc: "Yansıma dönüşümünden yola çıkarak orta dikme ve açıortayı inşa eder, üçgende yükseklik-kenarortay-açıortay ilişkilerini çözümleriz.",
        coverImage: "assets/flow/u11_donusum_geometrisi.jpg",
        cells: ["Yansıma", "Simetri Doğrusu", "Orta Dikme", "Açıortay", "Kenarortay", "Yükseklik", "Eşit Uzaklık", "Dik Kesişim", "İkizkenar", "Eşkenar", "Pergel", "İnşa"],
        k: [
          ["Yansıma Dönüşümü ve Simetri", "MAT.7.3.1"],
          ["Orta Dikme ve Açıortay İnşası", "MAT.7.3.2"],
          ["Üçgende Kenarortay, Açıortay, Yükseklik", "MAT.7.5.1"]
        ],
        s: [
          {
            title: "Yansıma Dönüşümünün Altın Kuralı", subtitle: "Doğruya Eşit ve Dik Uzaklık",
            exp: ["Bir $A$ noktasının $d$ doğrusuna göre yansıması $A'$ ise, $d$ doğrusu $[AA']$ doğru parçasını tam ortadan **dik** keser (**orta dikme**!).", "Yansıma altında şeklin kenar uzunlukları ve açıları değişmez; yalnızca ayna yönelimi tersine döner."],
            sent: "Yansıma altında $P$ noktasının $d$ doğrusuna dik uzaklığı $5\\text{ cm}$ ise $P$ ile görüntüsü $P'$ arasındaki $|PP'|$ mesafesi {0} cm olur; $d$ üzerindeki noktaların görüntüsü ise {1}.",
            blanks: [["10", ["5", "10", "15"]], ["kendisidir", ["sıfırlanır", "kendisidir", "kaybolur"]]],
            vTitle: "Yansıma Özellikleri",
            vNums: [["|AP| = |PA'|", "Eşit mesafe", 1], ["d ⊥ [AA']", "Dik kesişim", 1], ["d üzerindeki nokta", "Sabit kalır", 0]],
            vSum: "Bir doğruyu kat izi yaptığımızda $A$ ile $A'$ üst üste çakışır.",
            hint: "$5 + 5 = 10\\text{ cm}$; aynanın üzerindeki nokta hareket etmez."
          },
          {
            title: "Üçgenin Üç Yardımcı Elemanı", subtitle: "Yükseklik, Açıortay, Kenarortay",
            steps: ["**Yükseklik ($h$):** Köşeden karşı kenara (veya uzantısına) inilen dik doğrudur.", "**Açıortay ($n$):** Köşe açısını iki eş açıya bölen doğru parçasıdır.", "**Kenarortay ($V$):** Köşeyi karşı kenarın tam **orta noktasına** birleştiren doğru parçasıdır."],
            q: "Hangi üçgende bir köşeden çizilen yükseklik, açıortay ve kenarortay **üçü birden her köşede aynı doğru** olur?",
            qc: ["Dik üçgen", "Çeşitkenar üçgen", "Eşkenar üçgen"], qa: "Eşkenar üçgen",
            hint: "Tüm kenarları ve açıları simetrik olan üçgeni seç."
          },
          {
            title: "Açıortay Hesabı Sorusu", subtitle: "Üçgen İç Açıları + Açıortay",
            stem: "Bir $ABC$ üçgeninde $m(\\widehat{B}) = 70^\\circ$, $m(\\widehat{C}) = 50^\\circ$ ve $[AD]$ doğru parçası $\\widehat{A}$ açısının **açıortayıdır**. Buna göre $m(\\widehat{BAD})$ açısı kaç derecedir?",
            opts: ["$25^\\circ$", "$30^\\circ$", "$35^\\circ$", "$60^\\circ$"], ans: "B",
            hint: "Önce $m(\\widehat{A}) = 180^\\circ - (70^\\circ + 50^\\circ)$'yi bul, sonra açıortay olduğu için $2$'ye böl.",
            sol: "$m(\\widehat{A}) = 180^\\circ - 120^\\circ = 60^\\circ$. $[AD]$ açıortay olduğundan $m(\\widehat{BAD}) = 60^\\circ \\div 2 = 30^\\circ$ bulunur.",
            badge: "Simetri & Açıortay Ustası"
          },
          {
            title: "Orta Dikme ve Katlama İlişkisi", subtitle: "TYMM 7. Sınıf İnşa Yaklaşımı",
            exp: ["Bir $[AB]$ doğru parçasının $A$ ve $B$ uçlarını üst üste gelecek biçimde katladığımızda kat izi $[AB]$'nin **orta dikmesi** olur.", "Orta dikme üzerindeki her $P$ noktasının iki uca uzaklığı her zaman eşittir: $|PA| = |PB|$ (ikizkenar üçgen doğar!)."],
            sent: "$[AB]$ doğru parçasının orta dikmesi üzerindeki bir $K$ noktası için $|KA| = 9\\text{ cm}$ ise $|KB| =$ {0} cm olur; $ABK$ üçgeni mutlaka {1} üçgendir.",
            blanks: [["9", ["4,5", "9", "18"]], ["ikizkenar", ["dik", "ikizkenar", "çeşitkenar"]]],
            vTitle: "Orta Dikme Teoremi",
            vNums: [["Katlama", "Uçlar çakışır", 0], ["|KA| = |KB|", "Uçlara eşit uzaklık", 1]],
            vSum: "Orta dikme üzerinde seçilen herhangi bir nokta iki uca eşit uzaklıktadır.",
            hint: "$|KA| = |KB|$ olduğu için iki kenar eşittir."
          },
          {
            title: "İkizkenarda Simetri Ekseni (YAKI)", subtitle: "Yükseklik = Açıortay = Kenarortay",
            steps: ["İkizkenar bir üçgenin yalnızca tepe açısından eşit olmayan tabana indirilen doğru hem **Yükseklik**, hem **Açıortay**, hem **Kenarortay**dır.", "Açıortay kat izinden oluştuğu için köşeden açının kollarına inilen dik uzaklıklar da eşittir.", "Kenarortayların kesişim noktası ise üçgenin ağırlık merkezidir."],
            q: "$|AB|=|AC|$ ikizkenar üçgeninde $[AH] \\perp [BC]$ ve $|BC| = 14\\text{ cm}$ ise $|BH|$ uzunluğu kaç santimetredir?",
            qc: ["7 cm", "10 cm", "14 cm"], qa: "7 cm",
            hint: "Tepe açısından indirilen yükseklik aynı zamanda kenarortay olduğu için tabanı iki eşit parçaya böler."
          },
          {
            title: "Yansıma ve Üçgen Çevre Sorusu", subtitle: "Simetri Özelliği Uygulaması",
            stem: "Kenarları $6\\text{ cm}, 8\\text{ cm}, 10\\text{ cm}$ olan bir üçgenin $d$ doğrusuna göre yansıması alınıyor. Oluşan yeni üçgenin **çevresi ve en büyük kenar uzunluğu** sırasıyla nedir?",
            opts: ["$12\\text{ cm}$ ve $5\\text{ cm}$", "$24\\text{ cm}$ ve $10\\text{ cm}$", "$48\\text{ cm}$ ve $20\\text{ cm}$", "$24\\text{ cm}$ ve $8\\text{ cm}$"], ans: "B",
            hint: "Yansıma şekli büyütmez ya da küçültmez; eş bir görüntü oluşturur.",
            sol: "Yansıma dönüşümünde kenar uzunlukları korunur. En uzun kenar yine $10\\text{ cm}$, çevre yine $6+8+10 = 24\\text{ cm}$'dir.",
            badge: "Geometri İnşa Ustası"
          }
        ]
      }),
      makeUnit({
        track: "7", grade: 7, no: 5,
        title: "Prizma Hacmi, Daire ve Özel Dörtgenler",
        subtitle: "Prizma Yüzey Alanı-Hacmi, Daire Dilimi ve Yamuk/Eşkenar Dörtgen",
        desc: "Dikdörtgenler prizmasının yüzey alanı ve hacmini, daire-daire dilimi alanını, eşkenar dörtgen ve yamuk alanlarını hesaplarız.",
        coverImage: "assets/flow/u12_geometrik_cisimler.jpg",
        cells: ["Yüzey Alanı", "Hacim a·b·c", "1 L = 1 dm³", "1 m³ = 1000 L", "Daire πr²", "Daire Dilimi", "Eşkenar Dörtgen", "Köşegen Çarpımı/2", "Yamuk", "(a+c)·h/2", "Birim Küp", "Görünüm"],
        k: [
          ["Dikdörtgenler Prizması Yüzey Alanı ve Hacmi", "MAT.7.4.2"],
          ["Daire ve Daire Diliminin Alanı", "MAT.7.4.7"],
          ["Eşkenar Dörtgen ve Yamuğun Alanı", "MAT.7.4.9"]
        ],
        s: [
          {
            title: "Dikdörtgenler Prizmasının Hacmi ve Yüzey Alanı", subtitle: "6 Yüzey Toplamı vs İç Doluluk",
            exp: ["Dikdörtgenler prizmasının $3$ çift eş dikdörtgen yüzü vardır; **Yüzey Alanı $= 2(ab + ac + bc)$** formülüyle bulunur.", "**Hacmi** ise içine sığan birim küp sayısıdır: **Taban Alanı $\\times$ Yükseklik $= a \\cdot b \\cdot c$**."],
            sent: "Ayrıtları $3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$ olan prizmanın hacmi {0} $\\text{cm}^3$ olur; $1\\text{ dm}^3$'ün $1$ litreye eşit olduğu bilindiğine göre $2\\,000\\text{ cm}^3 = 2\\text{ dm}^3$ olduğundan {1} litre sıvı alır.",
            blanks: [["60", ["12", "47", "60"]], ["2", ["0,2", "2", "20"]]],
            vTitle: "Prizma Ölçüleri (3, 4, 5)",
            vNums: [["Hacim = 3×4×5", "= 60 cm³", 1], ["Yüzey = 2(12+15+20)", "= 94 cm²", 0], ["1 dm³ = 1000 cm³", "= 1 Litre", 1]],
            vSum: "Hacim ölçmede $1\\text{ m}^3 = 1\\,000\\text{ dm}^3 = 1\\,000\\text{ L}$ dönüşümü altın değerindedir.",
            hint: "$3 \\times 4 \\times 5 = 60$ ve $1\\text{ dm}^3 = 1\\text{ L}$."
          },
          {
            title: "Daire ve Daire Diliminin Alanı", subtitle: "Alan = πr² × (α / 360°)",
            steps: ["Tam dairenin alanı $A = \\pi r^2$ formülüyle bulunur (çevre $2\\pi r$ ile karıştırma!).", "Merkez açısı $\\alpha$ olan daire diliminin alanı tüm alanın $\\frac{\\alpha}{360^\\circ}$ kadarıdır.", "Örneğin yarıçapı $4\\text{ cm}$ ve açısı $90^\\circ$ (çeyrek daire) olan dilimin alanı $\\pi \\cdot 4^2 \\cdot \\frac{1}{4} = 4\\pi$ olur."],
            q: "Yarıçapı $10\\text{ cm}$ olan dairenin merkez açısı $72^\\circ$ olan diliminin alanı kaç $\\text{cm}^2$'dir? ($\\pi = 3$)",
            qc: ["30", "60", "75"], qa: "60",
            hint: "Tam daire $3 \\cdot 10^2 = 300$; $72^\\circ$ ise $360^\\circ$'nin $\\frac{1}{5}$'idir: $300 \\div 5$."
          },
          {
            title: "Akvaryum Hacmi Sorusu", subtitle: "Hacim ve Sıvı Birimi İlişkisi",
            stem: "Taban ayrıtları $50\\text{ cm}$ ve $40\\text{ cm}$, yüksekliği $30\\text{ cm}$ olan dikdörtgenler prizması şeklindeki akvaryumun **yarısı** suyla doldurulursa akvaryumda **kaç litre** su bulunur?",
            opts: ["$24\\text{ L}$", "$30\\text{ L}$", "$45\\text{ L}$", "$60\\text{ L}$"], ans: "B",
            hint: "Tam hacmi $\\text{cm}^3$ olarak bul ($50 \\times 40 \\times 30 = 60\\,000\\text{ cm}^3 = 60\\text{ L}$), sonra yarısını al.",
            sol: "Toplam hacim $50 \\times 40 \\times 30 = 60\\,000\\text{ cm}^3 = 60\\text{ dm}^3 = 60\\text{ L}$. Yarısı dolu olduğundan $30\\text{ L}$ su vardır.",
            badge: "Hacim Mühendisi"
          },
          {
            title: "Eşkenar Dörtgen ve Yamuğun Alanı", subtitle: "Köşegen Çarpımı ve Orta Taban",
            exp: ["**Eşkenar dörtgenin alanı**, dik kesişen iki köşegeninin çarpımının yarısıdır: $A = \\frac{e \\cdot f}{2}$ (ayrıca taban $\\times$ yükseklik ile de bulunur).", "**Yamuğun alanı** ise alt ve üst paralel tabanların toplamının yarısı (orta taban) ile yüksekliğin çarpımıdır: $A = \\frac{a + c}{2} \\cdot h$."],
            sent: "Köşegenleri $10\\text{ cm}$ ve $14\\text{ cm}$ olan eşkenar dörtgenin alanı {0} $\\text{cm}^2$ olur; alt tabanı $12\\text{ cm}$, üst tabanı $6\\text{ cm}$ ve yüksekliği $5\\text{ cm}$ olan yamuğun alanı ise {1} $\\text{cm}^2$'dir.",
            blanks: [["70", ["48", "70", "140"]], ["45", ["30", "45", "90"]]],
            vTitle: "Özel Dörtgen Alanları",
            vNums: [["(10 × 14) / 2", "= 70 cm² (Eşkenar)", 1], ["((12 + 6) / 2) × 5", "= 45 cm² (Yamuk)", 1]],
            vSum: "İki formülde de $2$'ye bölmeyi asla unutma!",
            hint: "$\\frac{10 \\times 14}{2} = 70$ ve $\\frac{18}{2} \\times 5 = 9 \\times 5 = 45$."
          },
          {
            title: "Birim Küpler ve Görünümler", subtitle: "Önden, Sağdan, Üstten",
            steps: ["Eş küplerden oluşan bir yapının **üstten görünümü**, tabandaki kare dizilimini ve her sütunda küp olup olmadığını gösterir.", "**Önden görünüm** her sütundaki en yüksek kule boyunu gösterir.", "Sağdan ve soldan görünümler ise birbirinin yatay ayna simetriğidir."],
            q: "Bir ayrıtı $2\\text{ cm}$ olan küplerden $12$ tanesi kullanılarak yapılan bir dikdörtgenler prizmasının hacmi kaç $\\text{cm}^3$'tür?",
            qc: ["24 cm³", "48 cm³", "96 cm³"], qa: "96 cm³",
            hint: "Bir küçük küpün hacmi $2^3 = 8\\text{ cm}^3$ olduğundan $12 \\times 8 = 96\\text{ cm}^3$."
          },
          {
            title: "Bahçe ve Havuz Alan Sorusu", subtitle: "Yamuktan Daire Çıkarma",
            stem: "Tabanları $16\\text{ m}$ ve $10\\text{ m}$, yüksekliği $8\\text{ m}$ olan yamuk biçimli bahçenin içine yarıçapı $2\\text{ m}$ olan dairesel süs havuzu yapılıyor. Kalan çim alan kaç $\\text{m}^2$'dir? ($\\pi = 3$)",
            opts: ["$88\\text{ m}^2$", "$92\\text{ m}^2$", "$96\\text{ m}^2$", "$104\\text{ m}^2$"], ans: "B",
            hint: "Yamuk alanı $\\frac{16+10}{2} \\cdot 8 = 104$, havuz alanı $3 \\cdot 2^2 = 12$.",
            sol: "Yamuğun alanı $\\frac{16+10}{2} \\times 8 = 13 \\times 8 = 104\\text{ m}^2$. Havuzun alanı $3 \\cdot 2^2 = 12\\text{ m}^2$. Çim alan $104 - 12 = 92\\text{ m}^2$.",
            badge: "Geometri Mimarbaşı"
          }
        ]
      }),
      makeUnit({
        track: "7", grade: 7, no: 6,
        title: "Sürekli Veri Analizi ve Teorik Olasılık",
        subtitle: "Çizgi Grafiği, Ortalama Mutlak Sapma ve Tümleyen/Ayrık Olaylar (TYMM 7)",
        desc: "Sürekli verilerde çizgi grafiğini ve ortalama mutlak sapmayı yorumlar; teorik olasılıkta tümleyen ve ayrık olay kurallarını uygularız.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Sürekli Veri", "Çizgi Grafiği", "Ortalama Sapma", "Teorik Olasılık", "Eşit Olasılık", "Tümleyen A'", "P(A)+P(A')=1", "Ayrık Olay", "Ayrık Olmayan", "Örnek Uzay", "Yanlılık", "Karar"],
        k: [
          ["Sürekli Veri, Çizgi Grafiği ve Sapma", "MAT.7.6.1"],
          ["Olayın Tümleyeni ve Eşit Olasılık", "MAT.7.7.1"],
          ["Ayrık ve Ayrık Olmayan Olaylar", "MAT.7.7.3"]
        ],
        s: [
          {
            title: "Tümleyen Olay ve P(A) + P(A') = 1", subtitle: "TYMM 7. Sınıf Teorik Olasılık",
            exp: ["Bir deneydeki tüm olası çıktılar eşit olasılıklıysa, $A$ olayının teorik olasılığı $P(A) = \\frac{\\text{İstenen Çıktı Sayısı}}{\\text{Tüm Çıktı Sayısı}}$ şeklindedir.", "$A$ olayının gerçekleşmemesi durumuna **$A$'nın tümleyeni ($A'$)** denir ve daima **$P(A) + P(A') = 1$** eşitliği sağlanır."],
            sent: "Hilesiz bir zarda asal sayı gelme olayı $A = \\{2, 3, 5\\}$ ise $P(A) =$ {0} olur; asal **gelmeme** (tümleyen) olasılığı $1 - P(A) =$ {1} olarak bulunur.",
            blanks: [["1/2", ["1/3", "1/2", "2/3"]], ["1/2", ["1/6", "1/3", "1/2"]]],
            vTitle: "Olay ve Tümleyeni",
            vNums: [["P(Asal) = 3/6", "= 1/2", 1], ["P(Asal Değil)", "= 1 - 1/2 = 1/2", 1]],
            vSum: "Bir olayın olasılığı ile olmama olasılığının toplamı daima $1$ tam eder.",
            hint: "$\\{2, 3, 5\\}$ $6$ yüzün tam yarısıdır ($\\frac{3}{6} = \\frac{1}{2}$)."
          },
          {
            title: "Ayrık ve Ayrık Olmayan Olaylar", subtitle: "Ortak Çıktı Var mı?",
            steps: ["Aynı deneye ait iki olayın ortak hiçbir çıktısı yoksa bunlara **ayrık olaylar** denir (ör. Zarda çift gelmesi $\\{2,4,6\\}$ ile tek gelmesi $\\{1,3,5\\}$).", "İki olayın en az bir ortak çıktısı varsa **ayrık olmayan olaylar** adını alır (ör. Zarda çift gelmesi $\\{2,4,6\\}$ ile asal gelmesi $\\{2,3,5\\}$, çünkü $2$ ortaktır!).", "Ayrık olaylarda $P(A \\text{ veya } B) = P(A) + P(B)$ doğrudan toplanabilir."],
            q: "Bir zar atışında '4'ten büyük gelmesi' ($A$) ile 'çift sayı gelmesi' ($B$) olayları ayrık mıdır?",
            qc: ["Ayrık olaylardır.", "Ayrık olmayan olaylardır.", "Kesin olaydır."], qa: "Ayrık olmayan olaylardır.",
            hint: "$A = \\{5, 6\\}$ ve $B = \\{2, 4, 6\\}$ kümelerinde **$6$** ortak çıktıdır!"
          },
          {
            title: "Tümleyen Olasılık Sorusu", subtitle: "Tersten Düşünme",
            stem: "Bir sınıftan rastgele seçilen bir öğrencinin gözlüklü olma olasılığı $\\frac{2}{7}$'dir. Sınıfta **gözlüksüz $20$ öğrenci** bulunduğuna göre sınıf mevcudu kaçtır?",
            opts: ["$24$", "$28$", "$30$", "$35$"], ans: "B",
            hint: "Gözlüksüz olma olasılığı $1 - \\frac{2}{7} = \\frac{5}{7}$'dir.",
            sol: "Tümleyen olasılık $P(\\text{gözlüksüz}) = 1 - \\frac{2}{7} = \\frac{5}{7}$. Sınıftaki $5$ parça $20$ öğrenci ise $1$ parça $4$ kişi, toplam $7 \\times 4 = 28$ öğrenci vardır.",
            badge: "Teorik Olasılık Ustası"
          },
          {
            title: "Sürekli Veri ve Ortalama Mutlak Sapma", subtitle: "Veriler Ortalamadan Ne Kadar Uzak?",
            exp: ["Sıcaklık, boy, zaman gibi ölçümle elde edilen ara değerler alabilen verilere **sürekli veri** denir ve değişimi göstermek için **çizgi grafiği** seçilir.", "**Ortalama Mutlak Sapma (OMS)**, her verinin aritmetik ortalamaya olan mutlak uzaklıklarının ortalamasıdır; veri dağılımının tutarlılığını gösterir."],
            sent: "Sıcaklık değerleri $[18, 20, 22]$ olan üç günün ortalaması {0} derecedir; verilerin ortalamaya uzaklıkları $|18-20|=2, |20-20|=0, |22-20|=2$ olduğundan ortalama mutlak sapması $\\frac{2+0+2}{3} =$ {1} bulunur.",
            blanks: [["20", ["19", "20", "21"]], ["4/3", ["4/3", "2", "4"]]],
            vTitle: "Ortalama Mutlak Sapma (OMS)",
            vNums: [["Ortalama = 20", "(18+20+22) ÷ 3", 0], ["Uzaklıklar", "|18-20|=2, 0, 2", 0], ["OMS = 4/3", "Yayılım ölçüsüdür", 1]],
            vSum: "OMS ne kadar küçükse veriler ortalamanın etrafında o kadar sıkı toplanmıştır.",
            hint: "Uzaklıkları negatif olmadan toplayıp veri sayısına ($3$'e) böl."
          },
          {
            title: "Eşit Olasılıklı Olma Şartı", subtitle: "Simetri ve Adil Seçim",
            steps: ["Bir torbada $3$ kırmızı, $3$ mavi, $3$ yeşil eş top varsa her rengin çekilme şansı eşit ($\\%33{,}3$) olur.", "Ancak üzerinde farklı yazılar olan veya farklı büyüklükte kesilmiş çark dilimlerinde alanlar farklıysa çıktılar **eşit olasılıklı değildir**.", "Eşit olasılık kuralını ancak tüm çıktılar aynı şansa sahipken uygularız."],
            q: "$360^\\circ$'lik bir çarkta A dilimi $180^\\circ$, B dilimi $90^\\circ$ ve C dilimi $90^\\circ$ ise B ve C hakkında ne söylenebilir?",
            qc: ["B ve C eşit olasılıklıdır.", "A, B, C eşit olasılıklıdır.", "C imkânsızdır."], qa: "B ve C eşit olasılıklıdır.",
            hint: "B ve C dilimleri aynı merkez açıya ($90^\\circ$) sahipken A iki katıdır."
          },
          {
            title: "7. Sınıf Final Veri & Olasılık Sorusu", subtitle: "Çizgi Grafiği ve Sapma Yorumu",
            stem: "İki basketbolcunun son $4$ maçtaki sayıları; Ali: $[14, 16, 15, 15]$, Can: $[5, 25, 10, 20]$ şeklindedir. İki oyuncunun da ortalaması $15$ iken **hangisi daha tutarlı (istikrarlı) performans** göstermiştir?",
            opts: ["Can, çünkü en yüksek $25$ sayı atmıştır.", "Ali, çünkü ortalama mutlak sapması Can'dan çok daha küçüktür.", "İkisi de eşit istikrardadır çünkü ortalamaları $15$'tir.", "Karşılaştırma yapılamaz."], ans: "B",
            hint: "Ortalamadan uzaklaşma miktarını (sapmayı) her iki oyuncu için düşün.",
            sol: "Ali'nin sapmaları $|14-15|=1, 1, 0, 0$ (OMS $= 0{,}5$), Can'ın sapmaları $10, 10, 5, 5$ (OMS $= 7{,}5$). OMS'si küçük olan Ali çok daha tutarlıdır.",
            badge: "7. Sınıf Mezunu"
          }
        ]
      })
    ]
,
    "9": [
      makeUnit({
        track: "9", grade: 9, no: 1,
        title: "Gerçek Sayılarda Üslü ve Köklü Gösterimler",
        subtitle: "Rasyonel Üsler, Kök İçine/Dışına Alma ve Eşlenik (TYMM 9)",
        desc: "Gerçek sayılarda üslü ifadeleri rasyonel üslerle birleştirir, köklü ifadelerde işlem yapar ve paydayı eşlenikle rasyonel hale getiririz.",
        coverImage: "assets/flow/u03_karekoklu_ifadeler.jpg",
        cells: ["Rasyonel Üs", "a^(m/n)", "Köklü İfade", "Kök Derecesi", "a√b", "Eşlenik", "Toplama", "Çarpma", "Sıralama", "Aralık", "Mutlak Değer", "Gerçek Sayı"],
        k: [
          ["Üslü ve Köklü İfade Bağlantısı", "MAT.9.1.1"],
          ["Köklü İfadelerde Dört İşlem", "MAT.9.1.2"],
          ["Eşlenik ve Gerçek Sayı Tahmini", "MAT.9.1.3"]
        ],
        s: [
          {
            title: "Üslü ile Köklünün Evliliği: a^(m/n)", subtitle: "Üssün Paydası Kökün Derecesidir!",
            exp: ["Bir sayının kesirli üssü köklü ifade demektir: $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$ ($a \\gt 0$).", "Çift dereceli köklerde $\\sqrt{x^2} = |x|$ olduğu asla unutulmamalıdır; tek dereceli köklerde ise $\\sqrt[3]{x^3} = x$ doğrudan çıkar."],
            sent: "$8^{\\frac{2}{3}}$ ifadesini köklü biçimde $\\sqrt[3]{8^2}$ olarak yazdığımızda sonuç {0} olur; ayrıca $\\sqrt{(-5)^2}$ değeri mutlak değer kuralıyla {1} çıkar.",
            blanks: [["4", ["2", "4", "16"]], ["5", ["-5", "5", "25"]]],
            vTitle: "Köklü-Üslü Çeviriler",
            vNums: [["8^(2/3) = (∛8)²", "= 2² = 4", 1], ["√((-5)²)", "= |-5| = +5", 1]],
            vSum: "Çift kuvvetin çift dereceli kökü daima pozitif (mutlak değerli) çıkar!",
            hint: "$\\sqrt[3]{8} = 2$ ve $2^2 = 4$; $\\sqrt{x^2} = |x|$."
          },
          {
            title: "Köklü İfadelerde Çarpma ve Bölme", subtitle: "Dereceler Aynıysa Kök İçi Çarpılır",
            steps: ["Aynı dereceli iki kökü çarparken katsayıları kendi arasında, kök içlerini kendi arasında çarparız: $2\\sqrt{3} \\cdot 5\\sqrt{6} = 10\\sqrt{18}$.", "$\\sqrt{18} = 3\\sqrt{2}$ olduğundan en sade biçimi $10 \\cdot 3\\sqrt{2} = 30\\sqrt{2}$ olur.", "Toplama-çıkarma ise yalnızca **kök derecesi ve kök içi aynı olan** terimler arasında yapılır ($4\\sqrt{5} + 3\\sqrt{5} = 7\\sqrt{5}$)."],
            q: "$\\sqrt{75} - \\sqrt{12} + \\sqrt{27}$ işleminin en sade sonucu nedir?",
            qc: ["6√3", "8√3", "10√3"], qa: "6√3",
            hint: "$5\\sqrt{3} - 2\\sqrt{3} + 3\\sqrt{3} = (5-2+3)\\sqrt{3}$."
          },
          {
            title: "Rasyonel Üslü Denklem Sorusu", subtitle: "Taban Eşitleme",
            stem: "$2^{x - 1} = 16^{\\frac{3}{4}}$ denklemini sağlayan $x$ sayısı kaçtır?",
            opts: ["$3$", "$4$", "$5$", "$6$"], ans: "B",
            hint: "$16 = 2^4$ olduğundan $(2^4)^{\\frac{3}{4}} = 2^3$ olur.",
            sol: "Sağ taraf $(2^4)^{\\frac{3}{4}} = 2^3$'tür. Tabanlar eşit olduğundan $x - 1 = 3 \\implies x = 4$ bulunur.",
            badge: "Üslü-Köklü Ustası"
          },
          {
            title: "Paydayı Köksüz Yapma: Eşlenik", subtitle: "İki Kare Farkından Faydalanma",
            exp: ["Paydada $\\sqrt{a}$ varsa $\\sqrt{a}$ ile, paydada $\\sqrt{a} - \\sqrt{b}$ varsa zıt işaretli eşleniği olan **$\\sqrt{a} + \\sqrt{b}$** ile genişletiriz.", "Çünkü $(\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b}) = a - b$ olur ve paydadaki kökler tamamen kaybolur!"],
            sent: "$\\frac{6}{\\sqrt{5} - \\sqrt{2}}$ kesrinin paydasını rasyonel yapmak için pay ve paydayı {0} ile çarparız; payda $5 - 2 = 3$ olunca en sade sonuç {1} çıkar.",
            blanks: [["√5 + √2", ["√5 - √2", "√5 + √2", "√3"]], ["2(√5 + √2)", ["2(√5 + √2)", "3(√5 + √2)", "√5 + √2"]]],
            vTitle: "Eşlenik Çarpımı",
            vNums: [["(√5 - √2)(√5 + √2)", "= 5 - 2 = 3", 1], ["6 / 3 = 2", "Pay sadeleşir", 1]],
            vSum: "Eşlenik daima köklü iki terimin arasındaki işareti tersine çevirir.",
            hint: "$6$ ile paydadaki $3$ sadeleşince katsayı $2$ kalır."
          },
          {
            title: "Kök İçine Alma ve Sıralama", subtitle: "Dış Katsayıyı Kare Alarak İçeri Sok",
            steps: ["$2\\sqrt{7}$ ve $3\\sqrt{3}$ sayılarını karşılaştırmak için dış katsayıları kökün derecesi kadar üs alarak içeri sokarız.", "$2\\sqrt{7} = \\sqrt{2^2 \\cdot 7} = \\sqrt{28}$ ve $3\\sqrt{3} = \\sqrt{3^2 \\cdot 3} = \\sqrt{27}$.", "$28 \\gt 27$ olduğu için $2\\sqrt{7} \\gt 3\\sqrt{3}$ sıralaması kesindir."],
            q: "$a = 4\\sqrt{2}$, $b = 3\\sqrt{5}$ ve $c = 2\\sqrt{10}$ sayılarının küçükten büyüğe sıralaması hangisidir?",
            qc: ["a < c < b", "c < a < b", "b < a < c"], qa: "a < c < b",
            hint: "$a = \\sqrt{32}$, $b = \\sqrt{45}$, $c = \\sqrt{40}$ değerlerini kıyasla."
          },
          {
            title: "İç İçe Kök ve Mutlak Değer Sorusu", subtitle: "TYMM 9 Karma Uygulama",
            stem: "$x \\lt 0 \\lt y$ olmak üzere $\\sqrt{x^2} + \\sqrt[3]{y^3} - |x - y|$ ifadesinin en sade hali aşağıdakilerden hangisidir?",
            opts: ["$0$", "$2y$", "$-2x$", "$2x - 2y$"], ans: "A",
            hint: "$x \\lt 0$ için $|x| = -x$ ve $x - y \\lt 0$ için $|x - y| = -(x - y) = y - x$ olduğuna dikkat et!",
            sol: "$\\sqrt{x^2} = |x| = -x$, $\\sqrt[3]{y^3} = y$. Ayrıca $x \\lt y$ olduğundan $x - y \\lt 0$ yani $|x - y| = y - x$. Yerine koyarsak $(-x) + y - (y - x) = -x + y - y + x = 0$.",
            badge: "Gerçek Sayı Ustası"
          }
        ]
      }),
      makeUnit({
        track: "9", grade: 9, no: 2,
        title: "Sayı Kümeleri, Aralıklar ve Özdeşlikler",
        subtitle: "Gerçel Sayı Aralıkları ve Çarpanlara Ayırma (TYMM 9)",
        desc: "Gerçek sayı aralıklarında birleşim-kesişim-fark işlemleri yapar, cebirsel özdeşliklerle çarpanlara ayırırız.",
        coverImage: "assets/flow/u06_cebirsel_ozdeslik.jpg",
        cells: ["N, Z, Q, R", "İrrasyonel I", "Kapalı [a,b]", "Açık (a,b)", "Kesişim ∩", "Birleşim ∪", "Fark \\", "İki Kare Farkı", "Tam Kare", "(a+b)²", "Çarpan", "Sadeleştir"],
        k: [
          ["Sayı Kümeleri ve Aralık İşlemleri", "MAT.9.1.4"],
          ["Cebirsel Özdeşlikler", "MAT.9.1.5"],
          ["Çarpanlara Ayırma Uygulamaları", "MAT.9.1.6"]
        ],
        s: [
          {
            title: "Sayı Kümeleri ve Aralık Gösterimi", subtitle: "Sınır Noktası Dâhil mi?",
            exp: ["Rasyonel ($\mathbb{Q}$) ve rasyonel yazılamayan irrasyonel ($\mathbb{I}$, ör. $\\sqrt{2}, \\pi$) kümelerinin birleşimi gerçek sayılar kümesini ($\mathbb{R}$) oluşturur.", "Aralıklarda köşeli parantez **$[$** uç noktanın **dâhil** ($\\le$), yuvarlak parantez **$($** ise **hariç** ($\\lt$) olduğunu gösterir."],
            sent: "$A = [-3, 4)$ ile $B = (1, 6]$ aralıklarının kesişimi $A \\cap B =$ {0} olur; birleşimleri ise {1} aralığını verir.",
            blanks: [["(1, 4)", ["[1, 4]", "(1, 4)", "[-3, 6]"]], ["[-3, 6]", ["[-3, 6]", "(-3, 6)", "(1, 4)"]]],
            vTitle: "Aralık Kesişimi ve Birleşimi",
            vNums: [["Kesişim ∩", "Solların büyüğü, sağların küçüğü", 1], ["Birleşim ∪", "En uç sınırları alır", 0]],
            vSum: "Kesişimde her iki aralıkta da ortak olan açık/kapalı sınırı seçeriz.",
            hint: "$1$ ve $4$ uçlarının ikisi de açık parantezli olduğundan $(1, 4)$ olur."
          },
          {
            title: "Temel Özdeşlikler ve İki Kare Farkı", subtitle: "(a+b)², (a-b)² ve a² - b²",
            steps: ["Tam kare açılımı: $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ (ortadaki $2ab$ terimini asla unutma!).", "İki kare farkı: $a^2 - b^2 = (a - b)(a + b)$ özdeşliği büyük sayı hesaplarını zihinden çözdürür.", "Örneğin $103^2 - 97^2 = (103 - 97)(103 + 97) = 6 \\cdot 200 = 1\\,200$."],
            q: "$x - y = 5$ ve $x \\cdot y = 6$ olduğuna göre $x^2 + y^2$ toplamı kaçtır?",
            qc: ["25", "31", "37"], qa: "37",
            hint: "$(x - y)^2 = x^2 - 2xy + y^2 \\implies 25 = x^2 + y^2 - 12$."
          },
          {
            title: "Aralık Farkı Sorusu", subtitle: "A \\ B Kümesi",
            stem: "$A = [-4, 5]$ ve $B = (2, 8)$ aralıkları veriliyor. $A \\setminus B$ fark aralığında **kaç tane tam sayı** vardır?",
            opts: ["$5$", "$6$", "$7$", "$8$"], ans: "C",
            hint: "$2$ sayısı $B$'ye dâhil olmadığı için $A \\setminus B = [-4, 2]$ kapalı aralığıdır! Sınırları unutma.",
            sol: "$B$ kümesi $(2, 8)$ olduğundan $2$'yi içermez. Dolayısıyla $A$'dan $B$ çıkarıldığında $2$ elemanı $A$'da kalır: $A \\setminus B = [-4, 2]$. Tam sayılar $\\{-4, -3, -2, -1, 0, 1, 2\\}$ olmak üzere $7$ tanedir.",
            badge: "Aralık Analisti"
          },
          {
            title: "Üç Terimli Çarpanlara Ayırma", subtitle: "x² + bx + c = (x+p)(x+q)",
            exp: ["$x^2 + bx + c$ ifadesini çarpanlarına ayırmak için çarpımları $c$'yi, toplamları $b$'yi veren iki sayı ($p, q$) buluruz.", "Örneğin $x^2 - 5x + 6$ için $(-2) \\cdot (-3) = +6$ ve $(-2) + (-3) = -5$ olduğundan $(x - 2)(x - 3)$ yazılır."],
            sent: "$x^2 + x - 12$ üç terimlisi için çarpımı $-12$ ve toplamı $+1$ olan sayılar $+4$ ile {0} olduğundan çarpanlara ayrılmış hali {1} olur.",
            blanks: [["-3", ["-4", "-3", "3"]], ["(x + 4)(x - 3)", ["(x + 4)(x - 3)", "(x - 4)(x + 3)", "(x + 6)(x - 2)"]]],
            vTitle: "Çarpım-Toplam Kuralı",
            vNums: [["(+4) · (-3)", "= -12 (Sabit)", 0], ["+4 + (-3)", "= +1 (x katsayısı)", 1]],
            vSum: "İki kökün işareti toplam ve çarpım işaretinden hemen anlaşılır.",
            hint: "$4 + (-3) = 1$ ve $4 \\cdot (-3) = -12$."
          },
          {
            title: "Rasyonel İfadeleri Sadeleştirme", subtitle: "Pay ve Paydayı Çarpanlarına Ayır",
            steps: ["$\\frac{x^2 - 9}{x^2 - 2x - 3}$ kesrini sadeleştirmek için pay ve paydayı çarpanlarına ayırırız.", "Pay: $(x - 3)(x + 3)$, Payda: $(x - 3)(x + 1)$.", "Ortak çarpan $(x - 3)$ sadeleşince ($x \\ne 3$) geriye $\\frac{x + 3}{x + 1}$ kalır."],
            q: "$\\frac{x^2 - 4x + 4}{x^2 - 4}$ kesrinin en sade hali aşağıdakilerden hangisidir?",
            qc: ["(x-2)/(x+2)", "(x+2)/(x-2)", "1"], qa: "(x-2)/(x+2)",
            hint: "Pay $(x - 2)^2$, payda $(x - 2)(x + 2)$'dir."
          },
          {
            title: "Özdeşlik Değer Sorusu", subtitle: "x + 1/x Özdeşliği",
            stem: "$x + \\frac{1}{x} = 4$ olduğuna göre $x^2 + \\frac{1}{x^2}$ toplamı kaçtır?",
            opts: ["$12$", "$14$", "$16$", "$18$"], ans: "B",
            hint: "Verilen eşitliğin her iki tarafının karesini alırken ortadaki $2 \\cdot x \\cdot \\frac{1}{x} = 2$ terimini unutma.",
            sol: "$\\left(x + \\frac{1}{x}\\right)^2 = 4^2 \\implies x^2 + 2 + \\frac{1}{x^2} = 16 \\implies x^2 + \\frac{1}{x^2} = 14$.",
            badge: "Özdeşlik Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "9", grade: 9, no: 3,
        title: "Doğrusal ve Mutlak Değerli Fonksiyonlar",
        subtitle: "Referans Fonksiyonlar, Değişim Hızı ve Grafik (TYMM 9)",
        desc: "Doğrusal $f(x)=mx+n$ ve mutlak değerli $f(x)=|ax+b|+c$ referans fonksiyonların grafiklerini, sıfırlarını ve işareti incelemeyi öğreniriz.",
        coverImage: "assets/flow/u07_dogrusal_denklemler.jpg",
        cells: ["Tanım Kümesi", "Görüntü", "mx + n", "Eğim m", "Sıfırı", "Artan-Azalan", "f(x)=|x|", "Tepe Noktası", "Dönüşüm", "Eşitsizlik", "Parçalı", "Model"],
        k: [
          ["Doğrusal Fonksiyon ve Nitel Özellikleri", "MAT.9.2.1"],
          ["Mutlak Değerli Referans Fonksiyonlar", "MAT.9.2.2"],
          ["Doğrusal ve Mutlak Değerli Eşitsizlikler", "MAT.9.2.3"]
        ],
        s: [
          {
            title: "Doğrusal Fonksiyonun Nitel Özellikleri", subtitle: "Eğim (m), Sıfır ve İşaret",
            exp: ["$f(x) = mx + n$ fonksiyonunda $m \\gt 0$ ise fonksiyon daima **artan**, $m \\lt 0$ ise daima **azalan**dır.", "Grafiğin $x$-eksenini kestiği yere fonksiyonun **sıfırı** denir ($mx + n = 0 \\implies x = -\\frac{n}{m}$); $y$-eksenini ise $(0, n)$'de keser."],
            sent: "$f(x) = -2x + 8$ doğrusal fonksiyonu eğimi negatif olduğu için {0} yapıdadır ve grafiğinin $x$-eksenini kestiği apsis (sıfırı) {1} noktasıdır.",
            blanks: [["azalan", ["artan", "azalan", "sabit"]], ["4", ["-4", "4", "8"]]],
            vTitle: "f(x) = -2x + 8 Analizi",
            vNums: [["m = -2 < 0", "Azalan doğru", 1], ["f(x)=0 → 2x=8", "x = 4 (sıfır)", 1], ["f(0) = 8", "y eksen kesimi", 0]],
            vSum: "Sıfır noktası, fonksiyonun işaretinin $+$'dan $-$'ye veya tersine geçtiği yerdir.",
            hint: "$-2x + 8 = 0$ denklemini çözünce $x = 4$ çıkar."
          },
          {
            title: "Mutlak Değer Fonksiyonunun V Grafiği", subtitle: "TYMM 9 Referans Fonksiyon",
            steps: ["Ana mutlak değer fonksiyonu $g(x) = |x|$ orijinde ($0,0$) kırılan simetrik bir V şeklidir.", "$f(x) = a|x - r| + k$ şeklinde ötelenmiş fonksiyonun kırılma (tepe) noktası $(r, k)$ koordinatındadır.", "$a \\gt 0$ ise kollar yukarı (en küçük değer $k$), $a \\lt 0$ ise kollar aşağı açılır."],
            q: "$f(x) = |x - 3| + 5$ fonksiyonunun alabileceği **en küçük değer** kaçtır?",
            qc: ["3", "5", "8"], qa: "5",
            hint: "$|x - 3| \\ge 0$ olduğundan $x=3$ için en küçük değer $0 + 5 = 5$ olur."
          },
          {
            title: "Doğrusal Fonksiyon Kurma Sorusu", subtitle: "İki Noktadan Kurala",
            stem: "Doğrusal bir $f(x)$ fonksiyonu için $f(1) = 5$ ve $f(4) = 14$ olduğuna göre $f(10)$ değeri kaçtır?",
            opts: ["$29$", "$32$", "$35$", "$38$"], ans: "B",
            hint: "Değişim oranını (eğimi) bul: $x$ $3$ artarken $f(x)$ $9$ arttığına göre eğim $m = 3$'tür.",
            sol: "$m = \\frac{14 - 5}{4 - 1} = 3$. $f(x) = 3x + n$ içinde $f(1) = 3 + n = 5 \\implies n = 2$. Böylece $f(x) = 3x + 2$ ve $f(10) = 32$.",
            badge: "Fonksiyon Mimarı"
          },
          {
            title: "Mutlak Değerli Eşitsizlik Çözümü", subtitle: "|u| < a ve |u| > a Farkı",
            exp: ["$|x - 2| \\le 4$ eşitsizliği sayı doğrusunda $2$'ye uzaklığı $4$ veya daha az olan sayıları gösterir: $-4 \\le x - 2 \\le 4 \\implies -2 \\le x \\le 6$.", "Buna karşılık $|x - 2| \\gt 4$ eşitsizliği ise $x - 2 \\gt 4$ veya $x - 2 \\lt -4$ biçiminde dış bölgeleri verir."],
            sent: "$|x + 1| \\lt 5$ eşitsizliğini açtığımızda $-5 \\lt x + 1 \\lt 5$ yazarız ve çözüm aralığı {0} bulunur; bu aralıkta toplam {1} tam sayı vardır.",
            blanks: [["(-6, 4)", ["(-6, 4)", "[-6, 4]", "(-4, 6)"]], ["9", ["7", "9", "11"]]],
            vTitle: "Uzaklık Yorumu: |x+1| < 5",
            vNums: [["-1'e uzaklık < 5", "Açık aralık (-6, 4)", 1], ["Tam sayılar", "-5..3 arası = 9 adet", 1]],
            vSum: "Uçlar açık olduğu için $-6$ ve $4$ sayıma alınmaz.",
            hint: "$-5, -4, -3, -2, -1, 0, 1, 2, 3$ sayılarını say."
          },
          {
            title: "Değişim Oranı ve Su Deposu Modeli", subtitle: "Gerçek Yaşam Doğrusal Fonksiyonu",
            steps: ["Başlangıçta içinde $120\\text{ L}$ su bulunan bir depoya dakikada $15\\text{ L}$ su akıyorsa $t$ dakika sonraki su miktarı $V(t) = 120 + 15t$'dir.", "Grafikte dikey eksen kesim noktası ($120$) başlangıç değerini, eğim ($15$) birim zamandaki değişim hızını gösterir.", "Eğer su boşalıyor olsaydı eğim negatif ($-15$) alınırdı."],
            q: "$V(t) = 240 - 12t$ modeline göre depo kaç dakikada tamamen boşalır?",
            qc: ["15 dk", "20 dk", "24 dk"], qa: "20 dk",
            hint: "$240 - 12t = 0$ denklemini çöz."
          },
          {
            title: "Mutlak Değerli Denklem Sorusu", subtitle: "İki Durumlu Çözüm",
            stem: "$|3x - 6| + 2x = 14$ denklemini sağlayan $x$ gerçek sayılarının **toplamı** kaçtır?",
            opts: ["$-8$", "$-4$", "$4$", "$\\frac{16}{5}$"], ans: "B",
            hint: "$x \\ge 2$ için $3x - 6$, $x \\lt 2$ için $-3x + 6$ çıkar; çıkan köklerin koşulu sağlayıp sağlamadığını mutlaka kontrol et!",
            sol: "1) $x \\ge 2$ ise $(3x - 6) + 2x = 14 \\implies 5x = 20 \\implies x = 4$ (koşul $4 \\ge 2$ ✓). 2) $x \\lt 2$ ise $(-3x + 6) + 2x = 14 \\implies -x = 8 \\implies x = -8$ (koşul $-8 \\lt 2$ ✓). Kökler toplamı $4 + (-8) = -4$.",
            badge: "Referans Fonksiyon Ustası"
          }
        ]
      }),
      makeUnit({
        track: "9", grade: 9, no: 4,
        title: "Algoritmik Düşünme ve Matematiksel Mantık",
        subtitle: "Bağlaçlar, Niceleyiciler ve Akış Şeması (TYMM 9)",
        desc: "Algoritmaları akış şeması ve sözde kodla ifade eder; mantık bağlaçları (∧, ∨, ⇒, ⇔) ve ∀, ∃ niceleyicileriyle muhakeme yaparız.",
        coverImage: "assets/flow/flow_sade_ders_konsept.jpg",
        cells: ["Önerme", "Değili p'", "Ve ∧", "Veya ∨", "İse ⇒", "Ancak ⇔", "Her ∀", "Bazı ∃", "Akış Şeması", "Karşıt Ters", "Totoloji", "Algoritma"],
        k: [
          ["Algoritmalar ve Akış Şemaları", "MAT.9.4.1"],
          ["Mantık Bağlaçları ve Koşullu Önerme", "MAT.9.4.2"],
          ["Niceleyiciler (∀, ∃) ve İspat", "MAT.9.4.3"]
        ],
        s: [
          {
            title: "Temel Mantık Bağlaçları: ∧, ∨, ⇒", subtitle: "Doğruluk Tablosu Anahtarı",
            exp: ["**Ve ($\\wedge$)** bağlacı yalnızca iki önerme de $1$ iken $1$ sonucunu verir (seri bağlı devre).", "**Veya ($\\vee$)** yalnızca ikisi de $0$ iken $0$ verir; **Koşullu önerme ($p \\Rightarrow q$)** ise yalnızca **$1 \\Rightarrow 0$** durumunda $0$'dır!"],
            sent: "$p \\Rightarrow q$ koşullu önermesinin en önemli denkliği {0} ifadesidir; ayrıca hem $p \\Rightarrow q$ hem $q \\Rightarrow p$ doğruysa bu {1} bağlacıyla ($p \\Leftrightarrow q$) gösterilir.",
            blanks: [["p' ∨ q", ["p ∧ q", "p' ∨ q", "p ∨ q'"]], ["ancak ve ancak", ["ya da", "ancak ve ancak", "ise"]]],
            vTitle: "Bağlaç Özdeşlikleri",
            vNums: [["p ⇒ q", "≡ p' ∨ q", 1], ["(p ⇒ q)'", "≡ p ∧ q'", 0], ["Karşıt ters", "q' ⇒ p' ≡ p ⇒ q", 1]],
            vSum: "Bir koşullu önerme kendi karşıt tersine ($q' \\Rightarrow p'$) daima denktir!",
            hint: "$p \\Rightarrow q$ için '100 kuralı' dışında hep $1$ çıkar; bu da $p' \\vee q$'ya denktir."
          },
          {
            title: "Her (∀) ve Bazı (∃) Niceleyicileri", subtitle: "Açık Önermelerin Değili",
            steps: ["**Evrensel niceleyici ($\\forall$)** 'her/bütün', **varlıksal niceleyici ($\\exists$)** 'en az bir/bazı' anlamına gelir.", "Niceleyicili bir ifadenin **değili** alınırken $\\forall$ sembolü $\\exists$'ya, $\\exists$ sembolü $\\forall$'e döner ve yüklemin değili alınır.", "Örneğin $(\\forall x \\in \\mathbb{R}, x^2 \\ge 0)' \\equiv \\exists x \\in \\mathbb{R}, x^2 \\lt 0$."],
            q: "$\\exists x \\in \\mathbb{Z},\\; 2x + 1 = 7$ önermesinin **değili** hangisidir?",
            qc: ["∀x ∈ Z, 2x + 1 ≠ 7", "∀x ∈ Z, 2x + 1 = 7", "∃x ∈ Z, 2x + 1 ≠ 7"], qa: "∀x ∈ Z, 2x + 1 ≠ 7",
            hint: "$\\exists$ işareti $\\forall$'e, $=$ işareti $\\ne$'ye dönüşür."
          },
          {
            title: "De Morgan ve Bileşik Önerme Sorusu", subtitle: "Doğruluk Değeri Bulma",
            stem: "$p' \\wedge q \\equiv 1$ olduğuna göre $(p \\vee q') \\Rightarrow (p \\wedge q)$ önermesinin doğruluk değeri aşağıdakilerden hangisidir?",
            opts: ["$0$", "$1$", "$p$", "$q'$"], ans: "B",
            hint: "$p' \\wedge q \\equiv 1$ ise $p' \\equiv 1$ ($p \\equiv 0$) ve $q \\equiv 1$ ($q' \\equiv 0$) olur.",
            sol: "$p \\equiv 0, q \\equiv 1$. Dolayısıyla sol taraf $p \\vee q' = 0 \\vee 0 = 0$. Sağ taraf $p \\wedge q = 0$. Sonuç $0 \\Rightarrow 0 \\equiv 1$ bulunur.",
            badge: "Mantık Ustası"
          },
          {
            title: "Algoritmada Karar ve Döngü Adımları", subtitle: "TYMM 9 Akış Şeması",
            exp: ["Akış şemalarında dikdörtgen işlem atamasını ($S \\leftarrow S + i$), eşkenar dörtgen ise **karar/koşul** kontrolünü ($i \\le 5$?) gösterir.", "Bir sayaç değişkeni koşulu bozana kadar oklar geri dönerek döngü çalıştırır."],
            sent: "Başlangıçta $S = 0, i = 1$ iken 'Eğer $i \\le 4$ ise $S \\leftarrow S + i$ ve $i \\leftarrow i + 1$ yap, başa dön' algoritması durduğunda $S$ değeri {0} olur; $i$ ise {1} değerine ulaşır.",
            blanks: [["10", ["6", "10", "15"]], ["5", ["4", "5", "6"]]],
            vTitle: "Döngü İzleme Tablosu",
            vNums: [["i=1,2,3,4", "S = 1+2+3+4 = 10", 1], ["Sonraki adım: i=5", "5 ≤ 4 Yanlış → Dur", 1]],
            vSum: "Algoritma sorularında her adımı küçük bir izleme tablosuyla takip et.",
            hint: "$1 + 2 + 3 + 4 = 10$ ve $i$ değeri $5$ olunca koşul sağlanmaz."
          },
          {
            title: "Karşıt Ters ile İspat", subtitle: "Dolaylı İspat Yöntemi",
            steps: ["'$n^2$ tek ise $n$ tektir' önermesini doğrudan göstermek yerine karşıt tersi olan '$n$ çift ise $n^2$ çifttir' önermesini ispatlayabiliriz.", "$n = 2k$ yazılınca $n^2 = 4k^2 = 2(2k^2)$ açıkça çifttir.", "Bir önerme ile karşıt tersi aynı doğruluk değerine sahip olduğundan ispat tamamlanmış olur!"],
            q: "'$x = 3$ ise $x^2 = 9$' önermesinin **karşıt tersi** hangisidir?",
            qc: ["x² = 9 ise x = 3", "x² ≠ 9 ise x ≠ 3", "x ≠ 3 ise x² ≠ 9"], qa: "x² ≠ 9 ise x ≠ 3",
            hint: "Karşıt terste önermeler hem yer değiştirir hem değili alınır."
          },
          {
            title: "Sözde Kod Algoritma Sorusu", subtitle: "Adım Adım Çıktı Takibi",
            stem: "Bir algoritmaya $N = 12$ giriliyor: 1) $N$ çift ise $N \\leftarrow N / 2$, tek ise $N \\leftarrow 3N + 1$ yap. 2) $N = 1$ olana kadar 1. adımı tekrarla. $N = 1$'e kaç adımda ulaşılır?",
            opts: ["$6$", "$8$", "$9$", "$10$"], ans: "C",
            hint: "Adımları tek tek yaz: $12 \\to 6 \\to 3 \\to 10 \\to 5 \\to 16 \\to \\dots$",
            sol: "$12 \\xrightarrow{1} 6 \\xrightarrow{2} 3 \\xrightarrow{3} 10 \\xrightarrow{4} 5 \\xrightarrow{5} 16 \\xrightarrow{6} 8 \\xrightarrow{7} 4 \\xrightarrow{8} 2 \\xrightarrow{9} 1$. Tam $9$ adımda ulaşılır!",
            badge: "Algoritma Stratejisti"
          }
        ]
      }),
      makeUnit({
        track: "9", grade: 9, no: 5,
        title: "Üçgende Eşlik, Benzerlik ve Öklid-Pisagor",
        subtitle: "KAK-AKA-KKK, AA Benzerliği, Thales ve Dik Üçgen (TYMM 9)",
        desc: "Üçgenlerde eşlik ve benzerlik ölçütlerini, Thales oran teoremini, Pisagor ve Öklid bağıntılarını kanıtlar ve uygularız.",
        coverImage: "assets/flow/u10_eslik_benzerlik.jpg",
        cells: ["Eşlik ≅", "Benzerlik ∼", "AA Benzer", "KAK", "Thales", "Alan Oranı k²", "Pisagor", "Öklid h²=p·k", "Ağırlık Merkezi", "Orta Taban", "30-60-90", "45-45-90"],
        k: [
          ["Üçgenlerde Eşlik ve Benzerlik Ölçütleri", "MAT.9.3.1"],
          ["Thales ve Temel Orantı Teoremi", "MAT.9.3.2"],
          ["Pisagor, Öklid ve Özel Dik Üçgenler", "MAT.9.3.3"]
        ],
        s: [
          {
            title: "Eşlik (≅) ile Benzerlik (∼) Farkı", subtitle: "Ölçü mü Korunur, Oran mı?",
            exp: ["Karşılıklı tüm açıları eşit ve kenarları aynı uzunlukta olan üçgenlere **eş üçgenler** (KAK, AKA, KKK) denir.", "Karşılıklı açıları eşit ama kenarları belirli bir $k$ oranında büyüyüp küçülenlere **benzer üçgenler** ($\\sim$) denir; çevreler oranı $k$, **alanlar oranı ise $k^2$**'dir!"],
            sent: "İki benzer üçgenin benzerlik oranı $k = \\frac{2}{3}$ ise çevrelerinin oranı {0}, alanlarının oranı ise {1} olur.",
            blanks: [["2/3", ["2/3", "4/9", "8/27"]], ["4/9", ["2/3", "4/9", "4/6"]]],
            vTitle: "Benzerlik Oranları (k)",
            vNums: [["Kenar / Çevre", "= k (2/3)", 0], ["Yükseklik / Açıortay", "= k (2/3)", 0], ["Alan Oranı", "= k² (4/9)", 1]],
            vSum: "Benzerlik oranının karesi alan oranını verir.",
            hint: "Uzunluklar $k$ ile, alanlar $k^2$ ile orantılıdır."
          },
          {
            title: "Dik Üçgende Öklid Bağıntıları", subtitle: "Dikten Dik İnerse Öklid Doğar!",
            steps: ["Bir $ABC$ dik üçgeninde $90^\\circ$'lik dik açıdan hipotenüse yükseklik ($h$) indirilirse hipotenüs $p$ ve $k$ parçalarına ayrılır.", "**Yükseklik bağıntısı:** $h^2 = p \\cdot k$.", "**Dik kenar bağıntısı:** $b^2 = p \\cdot (p+k)$ ve $c^2 = k \\cdot (p+k)$."],
            q: "Hipotenüse ait yüksekliğin ayırdığı parçalar $p = 4$ ve $k = 9$ ise yükseklik $h$ kaçtır?",
            qc: ["5", "6", "13"], qa: "6",
            hint: "$h^2 = 4 \\cdot 9 = 36 \\implies h = 6$."
          },
          {
            title: "Temel Orantı (Thales) Sorusu", subtitle: "Paralel Kesim",
            stem: "Bir $ABC$ üçgeninde $[DE] \\parallel [BC]$ olacak biçimde $D \\in [AB]$ ve $E \\in [AC]$ alınıyor. $|AD| = 4\\text{ cm}$, $|DB| = 6\\text{ cm}$ ve $|DE| = 6\\text{ cm}$ ise $|BC|$ kaç santimetredir?",
            opts: ["$9\\text{ cm}$", "$12\\text{ cm}$", "$15\\text{ cm}$", "$18\\text{ cm}$"], ans: "C",
            hint: "Küçük üçgenin kenarı $|AD| = 4$, büyük üçgenin kenarı $|AB| = 4 + 6 = 10$'dur!",
            sol: "Benzerlik oranı $\\frac{|AD|}{|AB|} = \\frac{4}{4+6} = \\frac{4}{10} = \\frac{2}{5}$. Dolayısıyla $\\frac{6}{|BC|} = \\frac{2}{5} \\implies |BC| = 15\\text{ cm}$.",
            badge: "Thales Kaşifi"
          },
          {
            title: "Özel Açılı Dik Üçgenler", subtitle: "30-60-90 ve 45-45-90",
            exp: ["$30^\\circ$-$60^\\circ$-$90^\\circ$ üçgeninde $30^\\circ$'nin karşısı $a$ ise hipotenüs **$2a$**, $60^\\circ$'nin karşısı **$a\\sqrt{3}$** olur.", "$45^\\circ$-$45^\\circ$-$90^\\circ$ ikizkenar dik üçgeninde dik kenarlar $a$ iken hipotenüs **$a\\sqrt{2}$**'dir."],
            sent: "Hipotenüsü $12\\text{ cm}$ olan bir $30^\\circ$-$60^\\circ$-$90^\\circ$ üçgeninde $30^\\circ$'nin karşısındaki dik kenar {0} cm, $60^\\circ$'nin karşısındaki dik kenar ise {1} cm olur.",
            blanks: [["6", ["4", "6", "6√2"]], ["6√3", ["6√2", "6√3", "12√3"]]],
            vTitle: "30-60-90 Oranları",
            vNums: [["90° karşısı: 12", "2a = 12 → a = 6", 1], ["30° karşısı: 6", "Hipotenüsün yarısı", 0], ["60° karşısı: 6√3", "30° karşısının √3 katı", 1]],
            vSum: "Dik üçgende özel açılar trigonometrinin temelini hazırlar.",
            hint: "$30^\\circ$ karşısı hipotenüsün yarısı, $60^\\circ$ karşısı onun $\\sqrt{3}$ katıdır."
          },
          {
            title: "Benzerlikte Kum Saati (Kelebek)", subtitle: "Paralel Doğrularda Z Açıları",
            steps: ["İki paralel doğru arasında çapraz kesişen iki doğrunun oluşturduğu iki üçgen (kum saati) AA benzerliğinden benzerdir.", "Üst üçgenin alt tabanına karşılık alt üçgenin tabanı oranı yan parçaların oranına eşittir.", "Örneğin üst kenar $3$, alt kenar $9$ ise kelebek oranı $1/3$'tür."],
            q: "Bir kum saati benzerliğinde üst taban $4$, alt taban $12$ ve üst üçgenin yüksekliği $3$ ise alt üçgenin yüksekliği kaçtır?",
            qc: ["6", "9", "12"], qa: "9",
            hint: "Benzerlik oranı $\\frac{4}{12} = \\frac{1}{3}$ olduğundan yükseklik $3 \\times 3 = 9$ olur."
          },
          {
            title: "Öklid ve Pisagor Karma Sorusu", subtitle: "Dik Üçgen Modellemesi",
            stem: "Bir $ABC$ dik üçgeninde $m(\\widehat{A}) = 90^\\circ$ ve $[AH] \\perp [BC]$'dir. $|BH| = 2\\text{ cm}$ ve $|HC| = 8\\text{ cm}$ ise $ABC$ üçgeninin **alanı** kaç $\\text{cm}^2$'dir?",
            opts: ["$16$", "$20$", "$24$", "$40$"], ans: "B",
            hint: "Önce Öklid bağıntısıyla $h = \\sqrt{p \\cdot k}$ yüksekliğini bul, sonra taban $|BC| = 2+8=10$ ile alanı hesapla.",
            sol: "Öklid'den $h^2 = 2 \\cdot 8 = 16 \\implies h = 4\\text{ cm}$. Taban $|BC| = 2 + 8 = 10\\text{ cm}$. Alan $= \\frac{10 \\times 4}{2} = 20\\text{ cm}^2$.",
            badge: "Geometri Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "9", grade: 9, no: 6,
        title: "Tek Değişkenli Veri ve Olasılık Analizi",
        subtitle: "Kutu Grafiği, Çeyrekler Açıklığı, Standart Sapma ve Simülasyon (TYMM 9)",
        desc: "Tek nicel değişkenin dağılımını kutu grafiği (beş sayı özeti) ve standart sapmayla yorumlar, simülasyon tabanlı olasılık tahmini yaparız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["5 Sayı Özeti", "Kutu Grafiği", "Q1 Alt Çeyrek", "Q2 Ortanca", "Q3 Üst Çeyrek", "IQR = Q3-Q1", "Standart Sapma", "Varyans", "Aykırı Değer", "Simülasyon", "Dağılım", "Karar"],
        k: [
          ["Kutu Grafiği ve Beş Sayı Özeti", "MAT.9.5.1"],
          ["Standart Sapma ve Yayılım Yorumu", "MAT.9.5.2"],
          ["Simülasyonla Olasılık İlişkilendirme", "MAT.9.6.1"]
        ],
        s: [
          {
            title: "Beş Sayı Özeti ve Kutu Grafiği", subtitle: "Min, Q1, Q2, Q3, Maks",
            exp: ["Verileri küçükten büyüğe dizdiğimizde tam ortanca **$Q_2$**, alt yarının ortancası alt çeyrek **$Q_1$**, üst yarının ortancası ise üst çeyrek **$Q_3$** olur.", "**Çeyrekler Açıklığı ($\\text{IQR} = Q_3 - Q_1$)** kutu grafiğindeki ortadaki kutunun genişliğidir ve aykırı değerlerden etkilenmez!"],
            sent: "$[4, 6, 8, 10, 12, 16, 20]$ dizisinde ortanca $Q_2 = 10$'dur; alt yarı $[4, 6, 8]$ için $Q_1 =$ {0} ve üst yarı $[12, 16, 20]$ için $Q_3 =$ {1} olduğundan çeyrekler açıklığı $16 - 6 = 10$ çıkar.",
            blanks: [["6", ["4", "6", "8"]], ["16", ["12", "16", "20"]]],
            vTitle: "Beş Sayı Özeti",
            vNums: [["Min = 4, Q1 = 6", "Alt %25 sınırları", 0], ["Q2 = 10", "Medyan (Orta %50)", 1], ["Q3 = 16, Maks = 20", "IQR = 16 - 6 = 10", 1]],
            vSum: "Kutu grafiğinin orta çizgisi $Q_2$, kutu kenarları $Q_1$ ve $Q_3$'tür.",
            hint: "Alt üçlü $[4,6,8]$'in ortası $6$, üst üçlü $[12,16,20]$'nin ortası $16$."
          },
          {
            title: "Standart Sapma ve Veri Tutarlılığı", subtitle: "Değerler Birbirine Yakınsa Sapma Küçük",
            steps: ["**Standart sapma ($s$)**, verilerin aritmetik ortalamadan ne kadar yayıldığını ölçer ($s \\ge 0$).", "Tüm veriler aynı sayıysa ($[7, 7, 7, 7]$) standart sapma **$0$**'dır.", "Veriler ortalamanın etrafında sıkı kümelenmişse standart sapma küçük, yani grup **daha homojen (tutarlı)** olur."],
            q: "İki okulun aynı ortalamaya sahip sınav sonuçlarından A okulunun standart sapması $4{,}2$, B okulunun $11{,}5$ ise hangisi söylenebilir?",
            qc: ["A okulu öğrencileri daha homojen puanlar almıştır.", "B okulu öğrencilerinin notları daha yakındır.", "B okulunun ortalaması daha yüksektir."], qa: "A okulu öğrencileri daha homojen puanlar almıştır.",
            hint: "Küçük standart sapma, puanların birbirine ve ortalamaya daha yakın olduğunu gösterir."
          },
          {
            title: "Standart Sapma Hesap Sorusu", subtitle: "Adım Adım Sapma",
            stem: "$2, 4, 6$ veri grubunun aritmetik ortalaması $4$'tür. Bu veri grubunun örneklem dışı nüfus standart sapması ($\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}$) kaçtır?",
            opts: ["$\\frac{2\\sqrt{6}}{3}$", "$\\frac{4}{3}$", "$2$", "$\\frac{8}{3}$"], ans: "A",
            hint: "Farkların kareleri toplamı $(2-4)^2 + (4-4)^2 + (6-4)^2 = 4+0+4 = 8$ bulunur; $n=3$'e bölüp karekök almayı ve paydayı rasyonel yapmayı unutma!",
            sol: "Ortalamaya göre farkların kareleri toplamı $(2-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 0 + 4 = 8$'dir. $n=3$'e bölüp karekök alırsak $\\sigma = \\sqrt{\\frac{8}{3}} = \\frac{2\\sqrt{2}}{\\sqrt{3}} = \\frac{2\\sqrt{6}}{3}$ bulunur.",
            badge: "İstatistik Ustası"
          },
          {
            title: "Simülasyon ve Teorik Olasılık Yakınsaması", subtitle: "TYMM 9. Sınıf Veri-Olasılık Köprüsü",
            exp: ["Zor olasılık problemlerini bilgisayar simülasyonuyla binlerce kez deneyerek göreli sıklığı bulabiliriz.", "Tekrar sayısı büyüdükçe deneysel olasılık değeri kuramsal (teorik) değere yaklaşır."],
            sent: "Hilesiz iki paranın birlikte tura gelmesinin kuramsal olasılığı $\\frac{1}{4} = \\%25$'tir; bir simülasyonda $10$ deneme yerine {0} deneme yapıldığında bulunan göreli sıklığın $0{,}25$'e {1} beklenir.",
            blanks: [["10.000", ["5", "10", "10.000"]], ["çok daha yakın çıkması", ["uzaklaşması", "sıfırlanması", "çok daha yakın çıkması"]]],
            vTitle: "Simülasyon Gücü",
            vNums: [["10 deneme", "Rastgele sapma yüksek", 0], ["10.000 deneme", "Teorik 0,25'e yaklaşır", 1]],
            vSum: "Deney sayısı ne kadar artarsa rastlantısal dalgalanma o kadar azalır.",
            hint: "Çok sayıda tekrar gerçek orana yaklaştırır."
          },
          {
            title: "Çeyrekler Açıklığı (IQR) ile Aykırı Değer", subtitle: "1.5 × IQR Kuralı",
            steps: ["Kutu grafiklerinde kutudan çok uzakta kalan değerlere **aykırı değer** denir.", "Genelde $Q_1 - 1{,}5 \\cdot \\text{IQR}$ alt sınırından küçük veya $Q_3 + 1{,}5 \\cdot \\text{IQR}$ üst sınırından büyük veriler aykırı sayılır.", "Kutu grafiğinde aykırı değerler bıyıkların dışında tekil nokta olarak gösterilir."],
            q: "$Q_1 = 20$ ve $Q_3 = 32$ olan bir dağılımda çeyrekler açıklığı ($\\text{IQR}$) kaçtır?",
            qc: ["12", "26", "52"], qa: "12",
            hint: "$\\text{IQR} = Q_3 - Q_1 = 32 - 20 = 12$."
          },
          {
            title: "9. Sınıf Final Veri Sorusu", subtitle: "Beş Sayı Özeti ve İstatistik",
            stem: "Bir atletin son $9$ yarıştaki dereceleri küçükten büyüğe sıralı: $[11, 12, 13, 14, 15, 16, 17, 19, 25]$ saniyedir. Bu serinin **çeyrekler açıklığı (IQR)** kaçtır?",
            opts: ["$4$", "$5{,}5$", "$6$", "$14$"], ans: "B",
            hint: "Ortanca $5.$ veri ($15$)'tir; alt yarı $[11,12,13,14]$ için $Q_1 = 12{,}5$ ve üst yarı $[16,17,19,25]$ için $Q_3 = 18$'dir!",
            sol: "Ortanca $15$. Alt yarı $[11,12,13,14]$ ortancası $Q_1 = \\frac{12+13}{2} = 12{,}5$. Üst yarı $[16,17,19,25]$ ortancası $Q_3 = \\frac{17+19}{2} = 18$. $\\text{IQR} = 18 - 12{,}5 = 5{,}5$.",
            badge: "9. Sınıf Mezunu"
          }
        ]
      })
    ],
    "10": [
      makeUnit({
        track: "10", grade: 10, no: 1,
        title: "Bölünebilme, Asal Çarpanlar ve EBOB-EKOK",
        subtitle: "Pozitif Bölen Sayısı, Kalan Aritmetiği ve EBOB-EKOK (TYMM 10)",
        desc: "Sayıların asal çarpan kuvvetlerinden pozitif bölen sayısını bulur, bölünebilme kalanlarını ve EBOB-EKOK problemlerini çözümleriz.",
        coverImage: "assets/flow/kapak_carpanlar_katlar.jpg",
        cells: ["Bölen Sayısı", "Asal Çarpan", "Bölünebilme", "Mod / Kalan", "11 İle Bölme", "EBOB", "EKOK", "Aralarında Asal", "EBOB×EKOK=ab", "Periyodik", "Döngü", "Problem"],
        k: [
          ["Pozitif Bölen Sayısı ve Asal Çarpan", "MAT.10.1.1"],
          ["Bölünebilme Kuralları ve Kalan İlişkisi", "MAT.10.1.2"],
          ["EBOB ve EKOK Modellemesi", "MAT.10.1.3"]
        ],
        s: [
          {
            title: "Pozitif Bölen Sayısı Formülü", subtitle: "Üsleri 1 Artırıp Çarp",
            exp: ["Bir doğal sayıyı $N = p_1^a \\cdot p_2^b \\cdot p_3^c$ asal çarpanlarına ayırdığımızda pozitif tam bölen sayısı **$(a+1)(b+1)(c+1)$** olur.", "Tam bölen sayısı (negatifler dâhil) ise bunun $2$ katıdır."],
            sent: "$72 = 2^3 \\cdot 3^2$ sayısının pozitif bölen sayısı $(3+1) \\cdot (2+1) =$ {0} adettir; asal olmayan pozitif bölenlerinin sayısı ise $2$ ve $3$'ü çıkarınca {1} kalır.",
            blanks: [["12", ["6", "12", "24"]], ["10", ["9", "10", "11"]]],
            vTitle: "72 Sayısının Bölenleri",
            vNums: [["2³ · 3²", "Asal çarpan hali", 0], ["(3+1)(2+1) = 12", "Pozitif bölen sayısı", 1], ["12 - 2 = 10", "Asal olmayan pozitifler", 1]],
            vSum: "Üslerin $1$'er fazlasının çarpımı tüm pozitif bölen kombinasyonlarını sayar.",
            hint: "$(4)(3) = 12$; bunlardan $2$ ve $3$ asal olduğu için geriye $10$ kalır."
          },
          {
            title: "Kalanlarla Hızlı İşlem", subtitle: "Sayı Yerine Kalanını Kullan",
            steps: ["$a$ ve $b$ sayılarının $m$'ye bölümünden kalanlar $k_1$ ve $k_2$ ise, $a + b$ ve $a \\cdot b$'nin $m$'ye bölümünden kalanı doğrudan $k_1 + k_2$ ve $k_1 \\cdot k_2$ ile bulabiliriz.", "Eğer $11$ ile bölünebilme bakıyorsak sağdan sola $+, -, +, -, \\dots$ işaretleyip toplarız.", "Toplam $0$ veya $11$'in katıysa sayı $11$'e tam bölünür."],
            q: "$A$ sayısının $7$ ile bölümünden kalan $4$, $B$'nin $7$ ile bölümünden kalan $5$ ise $A \\cdot B$'nin $7$ ile bölümünden kalan kaçtır?",
            qc: ["2", "6", "1"], qa: "6",
            hint: "$4 \\times 5 = 20$; $20$'nin $7$ ile bölümünden kalan $6$'dır ($20 = 2 \\cdot 7 + 6$)."
          },
          {
            title: "Pozitif Bölen Denklemi Sorusu", subtitle: "Asal Çarpan Kuvveti Bulma",
            stem: "$15 \\cdot 2^n$ sayısının $16$ tane pozitif tam böleni olduğuna göre $n$ doğal sayısı kaçtır?",
            opts: ["$2$", "$3$", "$4$", "$7$"], ans: "B",
            hint: "$15 \\cdot 2^n = 3^1 \\cdot 5^1 \\cdot 2^n$ şeklinde asal çarpanlara ayrılır.",
            sol: "Bölen sayısı $(1+1)(1+1)(n+1) = 4(n+1) = 16 \\implies n + 1 = 4 \\implies n = 3$.",
            badge: "Sayı Teorisi Ustası"
          },
          {
            title: "EBOB-EKOK Temel Özellikleri", subtitle: "Çarpımları Sayıların Çarpımına Eşittir",
            exp: ["Pozitif iki $a$ ve $b$ tam sayısı için her zaman **$\\text{EBOB}(a,b) \\cdot \\text{EKOK}(a,b) = a \\cdot b$** eşitliği sağlanır.", "Eğer $a$ ve $b$ **aralarında asal** ise $\\text{EBOB}(a,b) = 1$ ve $\\text{EKOK}(a,b) = a \\cdot b$'dir."],
            sent: "Aralarında asal $x$ ve $y$ sayılarının EKOK'u $72$ ise EBOB'ları {0} olur; ayrıca $x = 8$ verildiğinde $y =$ {1} bulunur.",
            blanks: [["1", ["1", "8", "72"]], ["9", ["6", "8", "9"]]],
            vTitle: "EBOB · EKOK Özdeşliği",
            vNums: [["Aralarında Asal", "EBOB = 1", 1], ["1 · EKOK = x · y", "8 · y = 72 → y = 9", 1]],
            vSum: "Aralarında asal sayıların $1$'den başka ortak pozitif böleni yoktur.",
            hint: "$1 \\times 72 = 8 \\times y \\implies y = 9$."
          },
          {
            title: "Kalanlı EBOB-EKOK Problemleri", subtitle: "Kalanı Çıkar veya Eksikliği Tamamla",
            steps: ["'Bir $A$ sayısı $6, 8, 10$'a bölündüğünde hep $3$ kalanını veriyorsa' $A - 3$ sayısı $6, 8, 10$'un ortak katıdır!", "Yani $A = \\text{EKOK}(6,8,10)\\cdot k + 3 = 120k + 3$ biçiminde yazılır.", "Eğer bölünen sayılardan farklı ama farkı sabit kalıyorsa (ör. $6$'ya bölünce $4$, $8$'e bölünce $6$ — ikisi de $2$ eksik!), $A + 2 = 24k$ kurarız."],
            q: "$8, 12$ ve $15$'e bölündüğünde daima $5$ kalanını veren en küçük $3$ basamaklı doğal sayı kaçtır?",
            qc: ["120", "125", "245"], qa: "125",
            hint: "$\\text{EKOK}(8, 12, 15) = 120$ üzerine $5$ ekle."
          },
          {
            title: "Bölünebilme Kalan Sorusu", subtitle: "36 İle Bölünebilme (4 ve 9)",
            stem: "Beş basamaklı $5A31B$ sayısı $36$ ile tam bölünebildiğine göre $A$'nın alabileceği değerlerin toplamı kaçtır? ($A \\ne B$ koşulu yoktur.)",
            opts: ["$7$", "$10$", "$12$", "$15$"], ans: "B",
            hint: "$36 = 4 \\times 9$ ve $\\text{EBOB}(4,9)=1$! Önce son iki basamağın $4$'ün katı olması için $B$'nin alabileceği değerleri bul, sonra rakamlar toplamının $9$'un katı olmasını sağla.",
            sol: "Son iki basamak $1B$ sayısı $4$'ün katı olacağından $B \\in \\{2, 6\\}$ olur. 1) $B=2$ için rakamlar toplamı $5+A+3+1+2 = 11+A$ dokuza bölünür $\\implies A=7$. 2) $B=6$ için $5+A+3+1+6 = 15+A$ dokuza bölünür $\\implies A=3$. $A$'nın değerler toplamı $7+3=10$ bulunur.",
            badge: "EBOB-EKOK Ustası"
          }
        ]
      }),
      makeUnit({
        track: "10", grade: 10, no: 2,
        title: "İkinci Dereceden Fonksiyonlar ve Denklemler",
        subtitle: "Parabol Tepe Noktası, Diskriminant ve Kök-Katsayı (TYMM 10)",
        desc: "İkinci dereceden fonksiyonların (parabol) tepe noktası ve eksen kesimlerini inceler, $\\Delta$ ve kök-katsayı ilişkileriyle denklem çözeriz.",
        coverImage: "assets/flow/u07_dogrusal_denklemler.jpg",
        cells: ["ax²+bx+c", "Parabol", "Tepe T(r,k)", "Simetri x=r", "Diskriminant Δ", "Δ > 0", "Δ = 0 Teğet", "Kök Toplamı", "Kök Çarpımı", "Maksimum", "Minimum", "Karmaşık Kök"],
        k: [
          ["İkinci Dereceden Fonksiyon (Parabol)", "MAT.10.2.1"],
          ["Diskriminant ve Kök Bulma", "MAT.10.2.2"],
          ["Kökler ile Katsayılar İlişkisi", "MAT.10.2.3"]
        ],
        s: [
          {
            title: "Parabolün Tepe Noktası ve Simetri Ekseni", subtitle: "r = -b / (2a) ve k = f(r)",
            exp: ["$f(x) = ax^2 + bx + c$ ($a \\ne 0$) grafiği bir paraboldür; $a \\gt 0$ ise kollar yukarı (en küçük değeri alır), $a \\lt 0$ ise kollar aşağıdır.", "Tepe noktası $T(r, k)$ için simetri ekseni **$r = -\\frac{b}{2a}$** olup $k = f(r)$ fonksiyonun en küçük/en büyük değeridir."],
            sent: "$f(x) = x^2 - 6x + 11$ parabolünün simetri ekseni $x = -\\frac{-6}{2} =$ {0} doğrusudur ve fonksiyonun alabileceği en küçük değer $f(3) =$ {1} olur.",
            blanks: [["3", ["-3", "3", "6"]], ["2", ["2", "5", "11"]]],
            vTitle: "Parabol Tepe Analizi",
            vNums: [["r = -(-6)/2", "= 3 (Simetri ekseni)", 1], ["k = 3² - 6(3) + 11", "= 2 (Minimum)", 1]],
            vSum: "Tam kareye tamamlarsak $f(x) = (x - 3)^2 + 2$ hemen $T(3, 2)$'yi gösterir!",
            hint: "$3^2 - 18 + 11 = 2$ olur."
          },
          {
            title: "Diskriminant ($\\Delta = b^2 - 4ac$) Yorumu", subtitle: "Parabol x-Eksenini Kaç Noktada Keser?",
            steps: ["$\\Delta \\gt 0$ ise denklemin iki farklı gerçek kökü vardır (parabol $x$-eksenini $2$ noktada keser).", "$\\Delta = 0$ ise çakışık iki eşit kökü vardır (parabol $x$-eksenine **teğettir**).", "$\\Delta \\lt 0$ ise gerçek kökü yoktur ($x$-eksenini kesmez); kökler karmaşık $\\mathbb{C}$ kümesindedir."],
            q: "$x^2 + 4x + k = 0$ denkleminin birbirine eşit iki gerçek kökü (çakışık kökü) olması için $k$ kaç olmalıdır?",
            qc: ["2", "4", "8"], qa: "4",
            hint: "$\\Delta = 4^2 - 4(1)(k) = 0 \\implies 16 = 4k$."
          },
          {
            title: "Parabol Denklemi Kurma Sorusu", subtitle: "Kökleri Bilinen Parabol",
            stem: "$x$-eksenini $(-1, 0)$ ve $(3, 0)$ noktalarında kesen ve $y$-eksenini $(0, -6)$ noktasında kesen $f(x)$ parabolü için $f(4)$ kaçtır?",
            opts: ["$6$", "$8$", "$10$", "$12$"], ans: "C",
            hint: "Kökleri $x_1=-1, x_2=3$ ise $f(x) = a(x+1)(x-3)$ yazıp $(0, -6)$'dan $a$'yı bul.",
            sol: "$f(0) = a(1)(-3) = -6 \\implies a = 2$. O halde $f(x) = 2(x+1)(x-3)$ ve $f(4) = 2(5)(1) = 10$.",
            badge: "Parabol Mimarı"
          },
          {
            title: "Kökler Toplamı ve Kökler Çarpımı (Vieta)", subtitle: "Kökleri Bulmadan Hesapla!",
            exp: ["$ax^2 + bx + c = 0$ denkleminin kökleri $x_1, x_2$ ise kökler toplamı **$x_1 + x_2 = -\\frac{b}{a}$**, kökler çarpımı **$x_1 \\cdot x_2 = \\frac{c}{a}$** olur.", "Bu iki bağıntıyla $x_1^2 + x_2^2$ veya $\\frac{1}{x_1} + \\frac{1}{x_2}$ gibi simetrik ifadeleri kökleri çözmeden hesaplayabiliriz."],
            sent: "$2x^2 - 8x + 6 = 0$ denkleminin kökler toplamı $x_1 + x_2 =$ {0} ve kökler çarpımı $x_1 \\cdot x_2 =$ {1} olur.",
            blanks: [["4", ["-4", "4", "8"]], ["3", ["-3", "3", "6"]]],
            vTitle: "Vieta Formülleri",
            vNums: [["x₁ + x₂ = -(-8)/2", "= 4", 1], ["x₁ · x₂ = 6/2", "= 3", 1]],
            vSum: "Başkatsayı $a$'ya ($2$'ye) bölmeyi asla unutma!",
            hint: "$-\\frac{-8}{2} = 4$ ve $\\frac{6}{2} = 3$."
          },
          {
            title: "Alan Optimizasyonu (Parabolle Maksimum)", subtitle: "Çevresi Sabit Dikdörtgen",
            steps: ["Bir duvarın önüne toplam $40\\text{ m}$ çitle üç kenarı çevrili dikdörtgen bir bahçe yapalım.", "Kısa kenarlar $x$ olursa duvar karşısı kenar $40 - 2x$ olur ve Alan $A(x) = x(40 - 2x) = -2x^2 + 40x$.", "Maksimum alan tepe noktasında gerçekleşir: $x = -\\frac{40}{2(-2)} = 10\\text{ m}$ için Maks Alan $= 10(20) = 200\\text{ m}^2$."],
            q: "Toplamları $16$ olan iki gerçek sayının çarpımı **en çok** kaç olabilir?",
            qc: ["48", "60", "64"], qa: "64",
            hint: "$f(x) = x(16 - x) = -x^2 + 16x$ parabolünün tepe noktası $x=8$'dedir: $8 \\times 8 = 64$."
          },
          {
            title: "Kök-Katsayı Sorusu", subtitle: "Terslerin Toplamı",
            stem: "$x^2 - 5x + 2 = 0$ denkleminin kökleri $x_1$ ve $x_2$ olduğuna göre $\\frac{1}{x_1} + \\frac{1}{x_2}$ toplamının değeri kaçtır?",
            opts: ["$\\frac{2}{5}$", "$\\frac{5}{2}$", "$-\\frac{5}{2}$", "$10$"], ans: "B",
            hint: "Payda eşitlediğinde $\\frac{x_1 + x_2}{x_1 \\cdot x_2}$ ifadesi ortaya çıkar.",
            sol: "Payda eşitlenirse $\\frac{x_2 + x_1}{x_1 \\cdot x_2}$. Vieta'dan $x_1+x_2 = 5$ ve $x_1 x_2 = 2$ olduğundan sonuç $\\frac{5}{2}$.",
            badge: "Kuadratik Usta"
          }
        ]
      }),
      makeUnit({
        track: "10", grade: 10, no: 3,
        title: "Kareköklü, Rasyonel ve Ters Fonksiyonlar",
        subtitle: "Fonksiyon Türleri, Bire Bir-Örten ve Ters Fonksiyon (TYMM 10)",
        desc: "Kareköklü ve rasyonel fonksiyonların tanım-görüntü kümelerini belirler, bire bir ve örten fonksiyonların tersini alırız.",
        coverImage: "assets/flow/u03_karekoklu_ifadeler.jpg",
        cells: ["Tanım Kümesi", "Görüntü", "Bire Bir", "Örten", "Ters f⁻¹", "y=x Simetri", "√(x-a)", "Rasyonel", "Asimptot", "Kısıtlama", "Denklem", "Grafik"],
        k: [
          ["Bire Bir, Örten ve Ters Fonksiyon", "MAT.10.2.4"],
          ["Kareköklü Referans Fonksiyonlar", "MAT.10.2.5"],
          ["Rasyonel Fonksiyonlar ve Tanım Kümesi", "MAT.10.2.6"]
        ],
        s: [
          {
            title: "Bire Bir, Örten ve Ters Fonksiyon ($f^{-1}$)", subtitle: "y ve x Yer Değiştirir",
            exp: ["Bir fonksiyonun tersinin de fonksiyon olabilmesi için **bire bir ve örten** olması şarttır.", "$f(x)$ ile $f^{-1}(x)$ grafikleri daima **$y = x$ doğrusuna göre simetriktir** ve $f(a)=b \\iff f^{-1}(b)=a$ sağlanır."],
            sent: "$f(x) = 3x - 7$ fonksiyonunun tersini bulurken $x$'i yalnız bırakarak $f^{-1}(x) =$ {0} elde ederiz; burada $f^{-1}(8)$ değeri {1} olur.",
            blanks: [["(x + 7)/3", ["(x - 7)/3", "(x + 7)/3", "3x + 7"]], ["5", ["3", "5", "17"]]],
            vTitle: "Ters Alma Adımları",
            vNums: [["y = 3x - 7", "y+7 = 3x", 0], ["f⁻¹(x) = (x+7)/3", "x ve y yer değişir", 1], ["f⁻¹(8) = 15/3", "= 5", 1]],
            vSum: "$f(5) = 3(5) - 7 = 8$ olduğu için $f^{-1}(8) = 5$ doğrulanır.",
            hint: "$y = 3x - 7$ eşitliğinde $x = \\frac{y+7}{3}$ olur."
          },
          {
            title: "Kareköklü Fonksiyonda Tanım ve Görüntü", subtitle: "Çift Kök İçi ≥ 0 Olmalı",
            steps: ["$f(x) = \\sqrt{x - 2} + 3$ fonksiyonunda karekökün içi negatif olamayacağından $x - 2 \\ge 0 \\implies x \\ge 2$ tanım kümesidir: $[2, \\infty)$.", "Karekök sonucu en az $0$ olabildiği için $f(x) \\ge 3$ olur; yani görüntü kümesi $[3, \\infty)$'dir.", "Grafik $(2, 3)$ başlangıç noktasından sağa yukarı açılan yarım parabol koludur."],
            q: "$g(x) = \\sqrt{5 - x}$ fonksiyonunun en geniş gerçek tanım kümesi nedir?",
            qc: ["[5, ∞)", "(-∞, 5]", "(-∞, -5]"], qa: "(-∞, 5]",
            hint: "$5 - x \\ge 0 \\implies x \\le 5$ olmalıdır."
          },
          {
            title: "Rasyonel Fonksiyonda Ters ve Tanımsızlık", subtitle: "Payda Sıfır Olamaz!",
            stem: "$f: \\mathbb{R} \\setminus \\{a\\} \\to \\mathbb{R} \\setminus \\{b\\}$ bire bir ve örten $f(x) = \\frac{4x - 5}{2x - 6}$ fonksiyonu veriliyor. Buna göre $a + b$ toplamı kaçtır?",
            opts: ["$4$", "$5$", "$6$", "$7$"], ans: "B",
            hint: "Paydayı sıfırlayan değer $a$'yı, $f^{-1}(x) = \\frac{6x - 5}{2x - 4}$'ün paydasını sıfırlayan değer ise $b$'yi verir.",
            sol: "Tanım kümesinden atılan $a$: $2x - 6 = 0 \\implies a = 3$. Değer kümesinden atılan $b$, ters fonksiyonun paydasını sıfırlar (veya $x$'lerin katsayıları oranı): $b = \\frac{4}{2} = 2$. Toplam $a + b = 3 + 2 = 5$.",
            badge: "Ters Fonksiyon Ustası"
          },
          {
            title: "Kısa Yoldan Kesirli Ters Alma", subtitle: "f(x) = (ax+b)/(cx+d)",
            exp: ["$f(x) = \\frac{ax + b}{cx + d}$ rasyonel fonksiyonunun tersi pratik olarak paydaki $a$ ile paydadaki $d$'nin **hem yerini hem işaretini** değiştirerek bulunur.", "Yani $f^{-1}(x) = \\frac{-dx + b}{cx - a}$ elde edilir (önce terimleri $x$'li başa, sabit sona dizmeyi unutma!)."],
            sent: "$f(x) = \\frac{2x + 3}{x - 5}$ fonksiyonunun kısa yoldan tersini alırken $2$ ve $-5$ yer ve işaret değiştirir; böylece $f^{-1}(x) =$ {0} olur ve $f^{-1}(4)$ değeri {1} çıkar.",
            blanks: [["(5x + 3)/(x - 2)", ["(5x + 3)/(x - 2)", "(-5x + 3)/(x + 2)", "(x - 5)/(2x + 3)"]], ["23/2", ["11/2", "23/2", "20/3"]]],
            vTitle: "Çapraz İşaret Değişimi",
            vNums: [["a=2, d=-5", "Yer & işaret değişir", 1], ["Pay: +5x + 3", "Payda: x - 2", 1]],
            vSum: "Yer ve işaret değişecek sayılar mutlaka üstteki $x$'in katsayısı ile alttaki sabittir.",
            hint: "$\\frac{5(4)+3}{4-2} = \\frac{23}{2}$ olur."
          },
          {
            title: "Kareköklü Fonksiyonun Tersini Alma", subtitle: "Tanım-Görüntü Takası Şart!",
            steps: ["$f: [1, \\infty) \\to [4, \\infty)$, $f(x) = \\sqrt{x - 1} + 4$ fonksiyonunun tersini almak için $y - 4 = \\sqrt{x - 1}$ yazarız.", "İki tarafın karesini alınca $(y - 4)^2 = x - 1 \\implies x = (y - 4)^2 + 1$.", "Böylece $f^{-1}: [4, \\infty) \\to [1, \\infty)$, $f^{-1}(x) = (x - 4)^2 + 1$ olur (tanım kümesi $[4,\\infty)$ olmasaydı bire bir olmazdı!)."],
            q: "$f: [2, \\infty) \\to [0, \\infty)$, $f(x) = \\sqrt{x - 2}$ fonksiyonu için $f^{-1}(3)$ değeri kaçtır?",
            qc: ["5", "11", "7"], qa: "11",
            hint: "$\\sqrt{x - 2} = 3 \\implies x - 2 = 9 \\implies x = 11$."
          },
          {
            title: "Tanım Kümesi Kesişim Sorusu", subtitle: "Kök ve Kesir Birlikte",
            stem: "$f(x) = \\frac{\\sqrt{x + 4}}{x - 1}$ fonksiyonunun en geniş gerçek tanım kümesinde **kaç tane negatif tam sayı** vardır?",
            opts: ["$2$", "$3$", "$4$", "$5$"], ans: "C",
            hint: "Karekök içi $x + 4 \\ge 0 \\implies x \\ge -4$ ve payda $x \\ne 1$ olmalıdır.",
            sol: "Tanım kümesi $[-4, \\infty) \\setminus \\{1\\}$ olur. Bu aralıktaki negatif tam sayılar $-4, -3, -2, -1$ olmak üzere $4$ tanedir.",
            badge: "Analiz Kaşifi"
          }
        ]
      }),
      makeUnit({
        track: "10", grade: 10, no: 4,
        title: "Sayma, Kombinasyon ve Koşullu Olasılık",
        subtitle: "Çarpma Yöntemi, P(n,r), C(n,r) ve P(A|B) (TYMM 10)",
        desc: "Toplama ve çarpma sayma ilkelerini, permütasyon ve kombinasyonu kullanır, koşullu olasılık ve bağımsız olayları hesaplarız.",
        coverImage: "assets/flow/u05_olasilik.jpg",
        cells: ["Sayma İlkesi", "Faktöriyel n!", "Permütasyon", "Kombinasyon", "C(n,r)", "Alt Küme", "Koşullu P(A|B)", "A ∩ B", "Bağımsız Olay", "Ağaç Şeması", "Seçme", "Sıralama"],
        k: [
          ["Sayma Stratejileri ve Faktöriyel", "MAT.10.4.1"],
          ["Permütasyon (Sıralama) ve Kombinasyon (Seçme)", "MAT.10.4.2"],
          ["Koşullu Olasılık ve Bağımsız Olaylar", "MAT.10.4.3"]
        ],
        s: [
          {
            title: "Permütasyon (Sıralama) vs Kombinasyon (Seçme)", subtitle: "Sıra Önemli mi?",
            exp: ["$n$ nesneden $r$ tanesini **sırayla dizmek** permütasyondur: $P(n,r) = \\frac{n!}{(n-r)!}$ (ör. yarışta 1., 2., 3.'lük).", "Sıra gözetmeden sadece $r$ kişilik bir **ekip seçmek** ise kombinasyondur: $C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$."],
            sent: "$6$ kişiden $2$ kişilik bir nöbetçi çifti seçerken sıra önemli olmadığı için $\\binom{6}{2} =$ {0} farklı grup oluşur; bu gruptan biri başkan diğeri yardımcı olacaksa $P(6,2) =$ {1} farklı seçim yapılır.",
            blanks: [["15", ["12", "15", "30"]], ["30", ["15", "30", "36"]]],
            vTitle: "Seçme vs Sıralama",
            vNums: [["C(6,2) = (6·5)/2", "= 15 (Grup)", 1], ["P(6,2) = 6·5", "= 30 (Görev dağılımı)", 1]],
            vSum: "Aynı soruda hem seçme hem sıralama varsa önce seç ($\\binom{n}{r}$), sonra sırala ($r!$).",
            hint: "$\\frac{6 \\cdot 5}{2} = 15$ ve $6 \\cdot 5 = 30$."
          },
          {
            title: "Koşullu Olasılık P(A | B)", subtitle: "Daraltılmış Örnek Uzay",
            steps: ["$B$ olayının gerçekleştiği **bilindiğine göre** $A$'nın gerçekleşme olasılığı $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{s(A \\cap B)}{s(B)}$ formülüyle hesaplanır.", "Verilen koşul ($B$) artık yeni evrensel kümemiz (paydamız) olur!", "Eğer $P(A \\mid B) = P(A)$ ise $A$ ve $B$ olayları **bağımsız olaylardır** ($P(A \\cap B) = P(A)\\cdot P(B)$)."],
            q: "Bir sınıfta $12$ kız (4'ü gözlüklü) ve $8$ erkek (2'si gözlüklü) vardır. Seçilen öğrencinin **gözlüklü olduğu bilindiğine göre** kız olma olasılığı kaçtır?",
            qc: ["1/3", "2/3", "4/12"], qa: "2/3",
            hint: "Toplam gözlüklü sayısı $4 + 2 = 6$'dır; bunların $4$'ü kız olduğundan $\\frac{4}{6} = \\frac{2}{3}$."
          },
          {
            title: "Basamak ve Sayma Sorusu", subtitle: "Çarpma İlkesi",
            stem: "$\\{1, 2, 3, 4, 5\\}$ kümesinin elemanlarıyla rakamları **farklı** kaç tane $3$ basamaklı **çift** sayı yazılabilir?",
            opts: ["$12$", "$24$", "$36$", "$48$"], ans: "B",
            hint: "Kısıtlama birler basamağındadır: çift olması için sona sadece $2$ veya $4$ ($2$ seçenek) gelebilir.",
            sol: "Birler basamağına $\\{2, 4\\}$'ten $2$ rakam gelir. Geriye $4$ rakam kalır: yüzlere $4$, onlara $3$ rakam seçilir. $4 \\times 3 \\times 2 = 24$ sayı yazılır.",
            badge: "Sayma Stratejisti"
          },
          {
            title: "Kombinasyonla Geometri (Üçgen ve Doğru)", subtitle: "Doğrusal Olmayan 3 Nokta",
            exp: ["Herhangi $3$'ü doğrusal olmayan $n$ noktadan $\\binom{n}{2}$ tane doğru ve $\\binom{n}{3}$ tane üçgen geçer.", "Eğer noktaların bir kısmı aynı doğru üzerindeyse, o doğrudan seçilen ikililer tek bir doğru ve sıfır üçgen oluşturduğu için çıkarılmalıdır."],
            sent: "Çember üzerinde işaretlenen $7$ farklı noktadan hiçbir üçü doğrusal olmadığı için köşeleri bu noktalar olan {0} tane üçgen çizilebilir; aynı $7$ noktadan bir doğru üzerindeki $3$ noktanın oluşturacağı üçgen sayısı ise {1} tanedir.",
            blanks: [["35", ["21", "35", "42"]], ["0", ["0", "1", "3"]]],
            vTitle: "Noktalardan Üçgen Seçimi",
            vNums: [["C(7, 3) = (7·6·5)/6", "= 35 üçgen", 1], ["Doğrusal 3 nokta", "Üçgen oluşturmaz (0)", 1]],
            vSum: "Doğrusal noktaların kendi içinden $3$'lü seçimi çıkarılır.",
            hint: "$\\frac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$; aynı doğru üzerindeki $3$ nokta düz çizgidir."
          },
          {
            title: "Bağımsız Olaylar ve Çarpım Kuralı", subtitle: "Zar ve Para Birlikte",
            steps: ["İki bağımsız olayın (ör. zar ve para atışı) aynı anda gerçekleşme olasılığı olasılıklarının çarpımıdır.", "Hilesiz bir paranın tura gelmesi $\\frac{1}{2}$, zarın $5$'ten büyük ($6$) gelmesi $\\frac{1}{6}$'dır.", "İkisinin birlikte gerçekleşme olasılığı $\\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$ bulunur."],
            q: "İki basketbolcunun serbest atışı sayı yapma olasılıkları sırasıyla $\\frac{2}{3}$ ve $\\frac{3}{4}$'tür. İkisinin de isabet ettirme olasılığı kaçtır?",
            qc: ["1/2", "5/7", "11/12"], qa: "1/2",
            hint: "Atışlar birbirinden bağımsızdır: $\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$."
          },
          {
            title: "Ekip Seçme Kombinasyon Sorusu", subtitle: "En Az Biri Koşulu",
            stem: "$4$ doktor ve $5$ hemşire arasından içinde **en az $1$ doktor** bulunan $3$ kişilik bir sağlık ekibi kaç farklı biçimde oluşturulabilir?",
            opts: ["$64$", "$74$", "$80$", "$84$"], ans: "B",
            hint: "Tüm $9$ kişiden $3$'lü seçip ($\\binom{9}{3}$), hiç doktor olmayan (hepsi hemşire) $\\binom{5}{3}$ durumu çıkar!",
            sol: "Tüm ekipler $\\binom{9}{3} = \\frac{9 \\cdot 8 \\cdot 7}{6} = 84$. Hiç doktor olmayan (tamamı hemşire) ekipler $\\binom{5}{3} = 10$. İstenen $84 - 10 = 74$ farklı ekiptir.",
            badge: "Olasılık Stratejisti"
          }
        ]
      }),
      makeUnit({
        track: "10", grade: 10, no: 5,
        title: "Dik Üçgende Trigonometri ve Sinüs-Kosinüs Teoremi",
        subtitle: "sin, cos, tan, cot ve Geniş Açılı Üçgen Çözümü (TYMM 10)",
        desc: "Dik üçgende temel trigonometrik oranları tanımlar, $30^\\circ$-$45^\\circ$-$60^\\circ$ değerlerini kullanır ve sinüs-kosinüs teoremleriyle kenar-açı buluruz.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        cells: ["sin α", "cos α", "tan α", "cot α", "sin²+cos²=1", "tan·cot=1", "30°-45°-60°", "Kosinüs Teoremi", "Sinüs Teoremi", "Sinüs Alan", "Tümler", "Birim Çember"],
        k: [
          ["Dik Üçgende Trigonometrik Oranlar", "MAT.10.3.1"],
          ["Temel Özdeşlikler ve Özel Açılar", "MAT.10.3.2"],
          ["Sinüs ve Kosinüs Teoremleri", "MAT.10.3.3"]
        ],
        s: [
          {
            title: "Dik Üçgende Dört Temel Oran", subtitle: "Karşı, Komşu, Hipotenüs",
            exp: ["Bir dar $x$ açısı için $\\sin x = \\frac{\\text{Karşı}}{\\text{Hipotenüs}}$, $\\cos x = \\frac{\\text{Komşu}}{\\text{Hipotenüs}}$, $\\tan x = \\frac{\\text{Karşı}}{\\text{Komşu}}$ ve $\\cot x = \\frac{\\text{Komşu}}{\\text{Karşı}}$ olarak tanımlanır.", "Her zaman $\\tan x = \\frac{\\sin x}{\\cos x}$, $\\tan x \\cdot \\cot x = 1$ ve **$\\sin^2 x + \\cos^2 x = 1$** özdeşlikleri geçerlidir."],
            sent: "$5$-$12$-$13$ dik üçgeninde en küçük açının karşısındaki kenar $5$ ise bu dar $\\alpha$ açısı için $\\sin\\alpha =$ {0} ve $\\tan\\alpha =$ {1} bulunur.",
            blanks: [["5/13", ["5/12", "5/13", "12/13"]], ["5/12", ["5/12", "5/13", "12/5"]]],
            vTitle: "5-12-13 Üçgeni Oranları",
            vNums: [["Karşı = 5, Komşu = 12", "Hipotenüs = 13", 0], ["sin α = 5/13", "tan α = 5/12", 1]],
            vSum: "Birbirini $90^\\circ$'ye tamamlayan tümler açıların sinüsü diğerinin kosinüsüne eşittir.",
            hint: "Karşı $5$, komşu $12$ ve hipotenüs $13$'tür."
          },
          {
            title: "Kosinüs Teoremi: Üçgenin Genel Pisagor'u", subtitle: "İki Kenar ve Aradaki Açı Biliniyorsa",
            steps: ["Dik olmayan herhangi bir $ABC$ üçgeninde $b, c$ kenarları ve aralarındaki $A$ açısı biliniyorsa karşı kenar $a$ şu formülle bulunur:", "$a^2 = b^2 + c^2 - 2bc \\cdot \\cos A$.", "$A = 90^\\circ$ olduğunda $\\cos 90^\\circ = 0$ olduğundan formül bildiğimiz Pisagor ($a^2 = b^2 + c^2$) haline dönüşür!"],
            q: "Kenarları $b = 5$, $c = 8$ ve aralarındaki açı $m(\\widehat{A}) = 60^\\circ$ olan üçgende $a$ kenarı kaçtır? ($\\cos 60^\\circ = \\frac{1}{2}$)",
            qc: ["7", "√89", "√129"], qa: "7",
            hint: "$a^2 = 25 + 64 - 2(5)(8)\\cdot\\frac{1}{2} = 89 - 40 = 49 \\implies a = 7$."
          },
          {
            title: "Trigonometrik Özdeşlik Sorusu", subtitle: "tan + cot ve sin·cos",
            stem: "Dar bir $x$ açısı için $\\sin x \\cdot \\cos x = \\frac{1}{3}$ olduğuna göre $\\tan x + \\cot x$ toplamı kaçtır?",
            opts: ["$\\frac{4}{3}$", "$2$", "$3$", "$6$"], ans: "C",
            hint: "$\\tan x + \\cot x = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}$ yazıp payda eşitle ve $\\sin^2 x + \\cos^2 x = 1$ kullan!",
            sol: "$\\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cdot \\cos x} = \\frac{1}{1/3} = 3$ bulunur.",
            badge: "Trigonometri Ustası"
          },
          {
            title: "Sinüs Alan Formülü ve Sinüs Teoremi", subtitle: "Alan = (1/2) b·c·sin A",
            exp: ["Bir üçgenin yüksekliğini bilmesek bile iki kenarı ($b, c$) ve aralarındaki açının sinüsüyle alanını bulabiliriz: **$\\text{Alan} = \\frac{1}{2} b \\cdot c \\cdot \\sin A$**.", "Ayrıca her üçgende kenarların karşısındaki açıların sinüslerine oranı sabittir: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$."],
            sent: "İki kenarı $8\\text{ cm}$ ve $10\\text{ cm}$, aralarındaki açı $30^\\circ$ olan üçgenin alanı $\\frac{1}{2} \\cdot 8 \\cdot 10 \\cdot \\sin 30^\\circ$ formülünden {0} $\\text{cm}^2$ bulunur ($\\sin 30^\\circ =$ {1}).",
            blanks: [["20", ["20", "40", "20√3"]], ["1/2", ["1/2", "√2/2", "√3/2"]]],
            vTitle: "Sinüs Alan Hesabı",
            vNums: [["sin 30° = 1/2", "Özel açı değeri", 1], ["1/2 · 8 · 10 · 1/2", "= 20 cm²", 1]],
            vSum: "Açı $150^\\circ$ olsa bile $\\sin 150^\\circ = \\sin 30^\\circ = 1/2$ olduğundan aynı alan çıkar!",
            hint: "$40 \\times \\frac{1}{2} = 20$."
          },
          {
            title: "30°, 45°, 60° Değer Tablosu", subtitle: "Hızlı Hesap Tekniği",
            steps: ["$\\sin 30^\\circ = \\frac{1}{2},\\; \\sin 45^\\circ = \\frac{\\sqrt{2}}{2},\\; \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ şeklinde kök içi sırasıyla $1, 2, 3$ artar.", "Kosinüs değerleri tam tersidir: $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2},\\; \\cos 60^\\circ = \\frac{1}{2}$.", "$\\tan 45^\\circ = \\cot 45^\\circ = 1$ ve $\\tan 60^\\circ = \\sqrt{3}$'tür."],
            q: "$\\frac{\\sin 30^\\circ + \\cos 60^\\circ}{\\tan 45^\\circ}$ ifadesinin değeri kaçtır?",
            qc: ["1/2", "1", "√3"], qa: "1",
            hint: "$\\frac{1/2 + 1/2}{1} = \\frac{1}{1} = 1$."
          },
          {
            title: "Sinüs Teoremi Kenar Sorusu", subtitle: "Kenar-Açı Orantısı",
            stem: "Bir $ABC$ üçgeninde $m(\\widehat{A}) = 45^\\circ$, $m(\\widehat{B}) = 30^\\circ$ ve $|BC| = 8\\sqrt{2}\\text{ cm}$ olduğuna göre $|AC|$ uzunluğu kaç santimetredir?",
            opts: ["$4$", "$6$", "$8$", "$8\\sqrt{2}$"], ans: "C",
            hint: "Sinüs teoremini kur: $\\frac{|BC|}{\\sin A} = \\frac{|AC|}{\\sin B}$ ($a=|BC|$, $b=|AC|$).",
            sol: "$\\frac{8\\sqrt{2}}{\\sin 45^\\circ} = \\frac{|AC|}{\\sin 30^\\circ} \\implies \\frac{8\\sqrt{2}}{\\sqrt{2}/2} = \\frac{|AC|}{1/2} \\implies 16 = 2|AC| \\implies |AC| = 8\\text{ cm}$.",
            badge: "Teorem Kaşifi"
          }
        ]
      }),
      makeUnit({
        track: "10", grade: 10, no: 6,
        title: "Analitik Düzlemde Doğru ve Kategorik Veri",
        subtitle: "Eğim, Paralel-Dik Doğrular ve İki Yönlü Tablolar (TYMM 10)",
        desc: "Analitik düzlemde uzaklık, orta nokta ve doğru denklemlerini inceler; iki kategorik değişkeni çapraz tablolarla çözümleriz.",
        coverImage: "assets/flow/u07_dogrusal_denklemler.jpg",
        cells: ["Uzaklık", "Orta Nokta", "Eğim m", "y=mx+n", "Paralel m₁=m₂", "Dik m₁·m₂=-1", "Nokta-Doğru", "Kesişim", "Çapraz Tablo", "Kategorik", "Koşullu Oran", "İlişki"],
        k: [
          ["İki Nokta Uzaklığı ve Orta Nokta", "MAT.10.3.4"],
          ["Doğrunun Eğimi, Paralellik ve Diklik", "MAT.10.3.5"],
          ["İki Kategorik Değişkenli Veriler", "MAT.10.5.1"]
        ],
        s: [
          {
            title: "Eğim, Paralellik ($m_1=m_2$) ve Diklik ($m_1 \\cdot m_2 = -1$)", subtitle: "Doğruların Birbirine Göre Durumu",
            exp: ["$A(x_1, y_1)$ ve $B(x_2, y_2)$ noktalarından geçen doğrunun eğimi **$m = \\frac{y_2 - y_1}{x_2 - x_1}$** ve $ax + by + c = 0$ doğrusunun eğimi **$m = -\\frac{a}{b}$**'dir.", "İki doğru **paralelse** eğimleri eşittir ($m_1 = m_2$); **dik kesişiyorsa** eğimleri çarpımı **$-1$** olur."],
            sent: "$y = 2x + 5$ doğrusuna paralel bir doğrunun eğimi {0} olur; bu doğruya **dik** olan bir doğrunun eğimi ise çarpımları $-1$ edeceği için {1} olmalıdır.",
            blanks: [["2", ["-2", "-1/2", "2"]], ["-1/2", ["-2", "-1/2", "1/2"]]],
            vTitle: "Doğru Eğim Kuralları",
            vNums: [["Paralel (d₁ ∥ d₂)", "m₁ = m₂ (2 = 2)", 0], ["Dik (d₁ ⊥ d₂)", "m₁ · m₂ = -1", 1]],
            vSum: "Dik doğrunun eğimini bulmak için ters çevirip işaret değiştiririz.",
            hint: "$2 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{2}$."
          },
          {
            title: "İki Kategorik Değişken ve Çapraz Tablo", subtitle: "TYMM 10 İstatistiksel Araştırma",
            steps: ["İki kategorik değişkeni (ör. Cinsiyet ile Kitap Türü tercihi) aynı anda incelemek için **iki yönlü çapraz tablo** kullanılır.", "Satır veya sütun yüzdelerini (koşullu göreli sıklıkları) karşılaştırarak iki değişken arasında ilişki olup olmadığını değerlendiririz.", "Örneğin farklı gruplarda tercih oranları çok benziyorsa değişkenler arası ilişki zayıf, bariz farklıysa güçlüdür."],
            q: "Ankette $40$ kızdan $24$'ü, $20$ erkekten $12$'si Basketbolu seçmişse iki grup için ne söylenebilir?",
            qc: ["İki grupta da Basketbol oranı %60 olduğundan cinsiyet ile tercih bağımsız görünmektedir.", "Kızlar oransal olarak daha çok seçmiştir.", "Erkekler iki kat daha fazla seçmiştir."], qa: "İki grupta da Basketbol oranı %60 olduğundan cinsiyet ile tercih bağımsız görünmektedir.",
            hint: "$\\frac{24}{40} = 0{,}60$ ve $\\frac{12}{20} = 0{,}60$!"
          },
          {
            title: "Paralel Doğru Denklemi Sorusu", subtitle: "Nokta ve Eğimle Denklem",
            stem: "$3x - 2y + 7 = 0$ doğrusuna **paralel** olan ve $P(2, -1)$ noktasından geçen doğrunun denklemi aşağıdakilerden hangisidir?",
            opts: ["$3x - 2y - 8 = 0$", "$3x + 2y - 4 = 0$", "$2x + 3y - 1 = 0$", "$3x - 2y + 4 = 0$"], ans: "A",
            hint: "Paralel doğrunun $x$ ve $y$ katsayıları aynı orandadır: $3x - 2y + c = 0$ yazıp $P(2, -1)$'i yerine koy.",
            sol: "Paralel olduğundan $3x - 2y + c = 0$ şeklindedir. $(2, -1)$ sağlanmalı: $3(2) - 2(-1) + c = 0 \\implies 6 + 2 + c = 0 \\implies c = -8$. Denklem $3x - 2y - 8 = 0$.",
            badge: "Analitik Ustası"
          },
          {
            title: "Belli Oranda Bölen Nokta ve Köşegen Ortası", subtitle: "Paralelkenarda Köşe Koordinatı",
            exp: ["Bir paralelkenarın köşegenleri birbirini ortaladığı için karşılıklı köşelerin $x$ ve $y$ koordinatları toplamları daima eşittir: $x_A + x_C = x_B + x_D$ ve $y_A + y_C = y_B + y_D$.", "Bu özellik sayesinde $3$ köşesi verilen paralelkenarın $4.$ köşesini çizim yapmadan saniyeler içinde bulabiliriz."],
            sent: "$ABCD$ paralelkenarında $A(1, 2)$, $B(5, 3)$, $C(7, 8)$ verildiğinde $D(x, y)$ köşesi için $1 + 7 = 5 + x$ eşitliğinden $x =$ {0}, $2 + 8 = 3 + y$ eşitliğinden $y =$ {1} bulunur.",
            blanks: [["3", ["2", "3", "4"]], ["7", ["6", "7", "8"]]],
            vTitle: "Paralelkenar Kuralı",
            vNums: [["xA + xC = xB + xD", "8 = 5 + x → x = 3", 1], ["yA + yC = yB + yD", "10 = 3 + y → y = 7", 1]],
            vSum: "Karşılıklı köşelerin koordinatları aynı ortalamaya (ortak merkeze) sahiptir.",
            hint: "$8 - 5 = 3$ ve $10 - 3 = 7$."
          },
          {
            title: "Noktanın Doğruya Uzaklığı", subtitle: "Dik İzdüşüm Formülü",
            steps: ["$P(x_0, y_0)$ noktasının $ax + by + c = 0$ doğrusuna en kısa (dik) uzaklığı $d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$ formülüyle bulunur.", "Payda dik katsayı vektörünün uzunluğudur ($3$-$4$-$5$ gibi tam çıkan sayılar seçilir).", "Eğer nokta doğrunun üzerindeyse pay $0$ çıkar ve $d = 0$ olur."],
            q: "$P(3, 1)$ noktasının $3x + 4y - 3 = 0$ doğrusuna olan uzaklığı kaç birimdir?",
            qc: ["2", "5", "10"], qa: "2",
            hint: "$\\frac{|3(3) + 4(1) - 3|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 + 4 - 3|}{5} = \\frac{10}{5} = 2$."
          },
          {
            title: "10. Sınıf Dik Doğrular Sorusu", subtitle: "Kesişen ve Dik Doğru",
            stem: "$A(-2, 4)$ ve $B(4, 2)$ noktalarından geçen $[AB]$ doğru parçasının **orta dikme doğrusunun eğimi** kaçtır?",
            opts: ["$-\\frac{1}{3}$", "$\\frac{1}{3}$", "$-3$", "$3$"], ans: "D",
            hint: "Önce $m_{AB} = \\frac{2 - 4}{4 - (-2)}$ eğimini bul, sonra orta dikme ona dik olduğundan $m_{AB} \\cdot m_d = -1$ uygula.",
            sol: "$m_{AB} = \\frac{2 - 4}{4 - (-2)} = \\frac{-2}{6} = -\\frac{1}{3}$. Dik olduğu doğrunun eğimi $m_d = -\\frac{1}{-1/3} = 3$ bulunur.",
            badge: "10. Sınıf Mezunu"
          }
        ]
      })
    ],
    "11": [
      makeUnit({
        track: "11", grade: 11, no: 1,
        title: "Trigonometrik Fonksiyonlar ve Periyodik Modeller",
        subtitle: "Radyan, Esas Ölçü, İndirgeme ve Grafik (TYMM 11)",
        desc: "Açı ölçü birimlerini radyana çevirir, birim çemberde esas ölçü ve indirgeme kurallarını uygular, sin ve cos grafiklerinin periyodunu analiz ederiz.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        cells: ["Radyan π", "Esas Ölçü", "Birim Çember", "Bölgeler İşaret", "İndirgeme", "90°±x İsim Değişir", "Periyot T", "Genlik |A|", "sin Grafik", "cos Grafik", "tan/cot", "Model"],
        k: [
          ["Yönlü Açılar, Radyan ve Esas Ölçü", "MAT.11.1.1"],
          ["Bölgelerde İşaret ve İndirgeme", "MAT.11.1.2"],
          ["Trigonometrik Fonksiyon Grafikleri", "MAT.11.1.3"]
        ],
        s: [
          {
            title: "Derece, Radyan ve Esas Ölçü", subtitle: "180° = π Radyan Dönüşümü",
            exp: ["Tam çember $360^\\circ = 2\\pi$ radyan olduğundan dönüştürme formülü **$\\frac{D}{180} = \\frac{R}{\\pi}$** şeklindedir.", "Bir açının $[0, 2\\pi)$ veya $[0^\\circ, 360^\\circ)$ aralığındaki denk açısına **esas ölçü** denir (tam turlar atılır)."],
            sent: "$\\frac{5\\pi}{6}$ radyanlık açının derece karşılığı {0} derecedir; $-100^\\circ$ açısının pozitif esas ölçüsü ise $360^\\circ$ eklenince {1} derece olur.",
            blanks: [["150", ["120", "150", "210"]], ["260", ["80", "100", "260"]]],
            vTitle: "Esas Ölçü ve Radyan",
            vNums: [["5π/6 rad", "= 5·180/6 = 150°", 1], ["-100° + 360°", "= 260° (IV. Bölge)", 1]],
            vSum: "Esas ölçü daima $0^\\circ \\le \\alpha \\lt 360^\\circ$ aralığındadır.",
            hint: "$\\pi$ yerine $180^\\circ$ yazarak $150^\\circ$ bul."
          },
          {
            title: "Bölgelerde İşaret ve İndirgeme", subtitle: "180° Sabit, 90° ve 270° İsim Değişir!",
            steps: ["I. bölgede tüm oranlar $+$; II. bölgede sadece $\\sin (+)$; III. bölgede $\\tan, \\cot (+)$; IV. bölgede sadece $\\cos (+)$'dır.", "$\\pi \\pm x$ ve $2\\pi - x$ indirgemelerinde fonksiyon adı **değişmez**, yalnızca bölgenin işareti önüne konur.", "$\\frac{\\pi}{2} \\pm x$ ve $\\frac{3\\pi}{2} \\pm x$'te ise $\\sin \\leftrightarrow \\cos$ ve $\\tan \\leftrightarrow \\cot$ **isim değiştirir** (işaret eski fonksiyona göre belirlenir!)."],
            q: "$\\cos(90^\\circ + x) + \\sin(180^\\circ - x)$ ifadesi sadeleşince neye eşit olur?",
            qc: ["0", "2 sin x", "-2 sin x"], qa: "0",
            hint: "II. bölgede $\\cos$ eksi olduğundan $\\cos(90^\\circ+x) = -\\sin x$, $\\sin(180^\\circ-x) = +\\sin x$!"
          },
          {
            title: "Radyan Esas Ölçü Sorusu", subtitle: "Kesirli Radyanda 2kπ Atma",
            stem: "$\\frac{23\\pi}{4}$ radyanlık açının **esas ölçüsü** aşağıdakilerden hangisidir?",
            opts: ["$\\frac{\\pi}{4}$", "$\\frac{3\\pi}{4}$", "$\\frac{5\\pi}{4}$", "$\\frac{7\\pi}{4}$"], ans: "D",
            hint: "Payı ($23$'ü) paydanın **$2$ katına** ($8$'e) bölüp kalanı paya yaz.",
            sol: "$23 \\div 8 = 2$ kalan $7$. Bu nedenle esas ölçü $\\frac{7\\pi}{4}$ radyan olur.",
            badge: "Birim Çember Ustası"
          },
          {
            title: "Periyot (T) ve Genlik Analizi", subtitle: "Dalga Boyu ve Yükseltisi",
            exp: ["$f(x) = a + b \\sin(cx + d)$ fonksiyonunda **periyot** $T = \\frac{2\\pi}{|c|}$ (sadece $x$'in katsayısı $c$'ye bağlıdır) ve **genlik** $|b|$'dir.", "Tanjant ve kotanjantta ise temel periyot $\\pi$ olduğundan $T = \\frac{\\pi}{|c|}$ olur."],
            sent: "$f(x) = 3 - 4\\cos(2x + \\frac{\\pi}{3})$ fonksiyonunun esas periyodu $\\frac{2\\pi}{2} =$ {0} olur; ayrıca $-1 \\le \\cos(\\dots) \\le 1$ olduğundan $f(x)$'in alabileceği en büyük değer {1} çıkar.",
            blanks: [["π", ["π/2", "π", "2π"]], ["7", ["4", "5", "7"]]],
            vTitle: "Periyot ve Değer Aralığı",
            vNums: [["T = 2π / |2|", "= π", 1], ["cos = -1 iken", "3 - 4(-1) = 7 (Maks)", 1]],
            vSum: "Önündeki $-$ işaretinden dolayı $\\cos$ en küçük ($-1$) değerini alınca fonksiyon maksimuma çıkar!",
            hint: "Katsayı $c=2$ ve maksimum değer için $\\cos(\\dots) = -1$ al."
          },
          {
            title: "Trigonometrik Değer Sıralaması", subtitle: "Hepsini I. Bölge sin ve tan'a Çevir",
            steps: ["Açıları I. bölgeye indirgeyip $\\sin$ ve $\\tan$'a çevirdiğimizde $0^\\circ$–$90^\\circ$ arasında açı büyüdükçe değerler artar.", "Aynı $x \\in (0^\\circ, 90^\\circ)$ için her zaman $\\tan x \\gt \\sin x$ sağlanır.", "Örneğin $\\sin 50^\\circ \\lt \\sin 70^\\circ$ iken $\\cos 20^\\circ = \\sin 70^\\circ$ olarak karşılaştırılır."],
            q: "$a = \\sin 20^\\circ$, $b = \\cos 50^\\circ$ ve $c = \\tan 45^\\circ$ sayılarının küçükten büyüğe sıralaması hangisidir?",
            qc: ["a < b < c", "b < a < c", "a < c < b"], qa: "a < b < c",
            hint: "$b = \\cos 50^\\circ = \\sin 40^\\circ$ ve $c = \\tan 45^\\circ = 1$."
          },
          {
            title: "Birim Çember Bölge Sorusu", subtitle: "Öteleme ve Özdeşlik",
            stem: "$\\frac{3\\pi}{2} \\lt x \\lt 2\\pi$ (IV. bölge) ve $\\cos x = \\frac{5}{13}$ olduğuna göre $\\sin x + \\tan x$ toplamı kaçtır?",
            opts: ["$-\\frac{204}{65}$", "$-\\frac{216}{65}$", "$\\frac{156}{65}$", "$-\\frac{96}{65}$"], ans: "B",
            hint: "IV. bölgede $\\sin x$ ve $\\tan x$'in ikisi de negatiftir; $5$-$12$-$13$ dik üçgeni çizip işaretleri yaz.",
            sol: "Dik üçgenden mutlak değerler $\\sin x = -\\frac{12}{13}$ ve $\\tan x = -\\frac{12}{5}$. Toplam $-\\frac{12}{13} - \\frac{12}{5} = -\\frac{60 + 156}{65} = -\\frac{216}{65}$.",
            badge: "Periyot Kaptanı"
          }
        ]
      }),
      makeUnit({
        track: "11", grade: 11, no: 2,
        title: "Trigonometrik Denklemler ve Ters Fonksiyonlar",
        subtitle: "arcsin, arccos, arctan ve Denklem Çözüm Kümesi (TYMM 11)",
        desc: "Ters trigonometrik fonksiyonların tanımlı olduğu aralıkları inceler, temel ve indirgenebilir trigonometrik denklemleri çözeriz.",
        coverImage: "assets/flow/u07_dogrusal_denklemler.jpg",
        cells: ["arcsin x", "arccos x", "arctan x", "[-π/2, π/2]", "[0, π]", "sin x = sin α", "cos x = cos α", "tan x = tan α", "2kπ", "kπ", "Çözüm Kümesi", "Kök Sayısı"],
        k: [
          ["Ters Trigonometrik Fonksiyonlar", "MAT.11.1.4"],
          ["sin x = a ve cos x = a Denklemleri", "MAT.11.1.5"],
          ["tan x = a ve İndirgenebilir Denklemler", "MAT.11.1.6"]
        ],
        s: [
          {
            title: "Ters Trigonometrik Fonksiyonlar (arc)", subtitle: "Görüntü Aralıklarını Sakın Karıştırma!",
            exp: ["Trigonometrik fonksiyonlar periyodik olduğundan terslenebilmek için bire bir oldukları temel aralıklara kısıtlanır.", "$\\arcsin x$ ve $\\arctan x$ değerleri **$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$** (I. ve IV. bölge), $\\arccos x$ ise **$[0, \\pi]$** (I. ve II. bölge) aralığındadır!"],
            sent: "$\\arcsin\\left(-\\frac{1}{2}\\right)$ değeri IV. bölgede eksi açıyla {0} olurken, $\\arccos\\left(-\\frac{1}{2}\\right)$ değeri II. bölgede {1} olarak çıkar.",
            blanks: [["-30°", ["-30°", "150°", "210°"]], ["120°", ["-60°", "120°", "240°"]]],
            vTitle: "Ters Fonksiyon Bölgeleri",
            vNums: [["arcsin & arctan", "I. (+) ve IV. (-) bölge", 1], ["arccos", "I. (+) ve II. (-) bölge", 1]],
            vSum: "Negatif girdilerde $\\arcsin(-u) = -\\arcsin u$, ancak $\\arccos(-u) = \\pi - \\arccos u$ olur!",
            hint: "$\\sin(-30^\\circ) = -1/2$ ve $\\cos(120^\\circ) = -1/2$."
          },
          {
            title: "sin x = sin α ve cos x = cos α Çözümü", subtitle: "İki Kök Ailesi Unutulmaz",
            steps: ["$\\sin x = \\sin\\alpha$ denkleminde iki kök kolu vardır: $x_1 = \\alpha + 2k\\pi$ veya $x_2 = (\\pi - \\alpha) + 2k\\pi$.", "$\\cos x = \\cos\\alpha$ denkleminde ise $x_1 = \\alpha + 2k\\pi$ veya $x_2 = -\\alpha + 2k\\pi$.", "$\\tan x = \\tan\\alpha$ denkleminde tek kol yeterlidir: $x = \\alpha + k\\pi$ ($k \\in \\mathbb{Z}$)."],
            q: "$[0, 2\\pi)$ aralığında $\\cos x = \\frac{1}{2}$ denklemini sağlayan kaç farklı $x$ kökü vardır?",
            qc: ["1", "2", "4"], qa: "2",
            hint: "$\\frac{\\pi}{3}$ ($60^\\circ$) ve $2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$ ($300^\\circ$) olmak üzere $2$ kök vardır."
          },
          {
            title: "Ters Trigonometrik Değer Sorusu", subtitle: "Üçgen Çizerek Bileşke Çözme",
            stem: "$\\cos\\left(\\arctan\\left(\\frac{3}{4}\\right)\\right)$ ifadesinin değeri kaçtır?",
            opts: ["$\\frac{3}{5}$", "$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{4}$"], ans: "B",
            hint: "İçerideki ifadeye $\\theta = \\arctan(3/4)$ adını ver: $\\tan\\theta = \\frac{3}{4}$ olan $3$-$4$-$5$ dik üçgeninden $\\cos\\theta$'yı oku.",
            sol: "$\\tan\\theta = \\frac{3}{4}$ ($\\theta$ I. bölgede) olduğundan hipotenüs $5$ olur. Buradan $\\cos\\theta = \\frac{4}{5}$ elde edilir.",
            badge: "Ters Trig Ustası"
          },
          {
            title: "Katsayılı Denklemlerde Kök Sayısı", subtitle: "sin(nx) = a Periyodu Daraltır!",
            exp: ["$\\sin(2x) = \\frac{\\sqrt{3}}{2}$ denklemini $[0, 2\\pi)$ aralığında çözerken $2x = 60^\\circ + 360^\\circ k$ ve $2x = 120^\\circ + 360^\\circ k$ yazıp her iki tarafı $2$'ye böleriz.", "Böylece periyot $180^\\circ$'ye düştüğü için $[0, 360^\\circ)$ aralığına tam $4$ farklı kök sığar!"],
            sent: "$\\tan(3x) = 1$ denkleminin temel çözümü $3x = 45^\\circ + 180^\\circ k$ olduğundan $x =$ {0} elde edilir; $[0, 180^\\circ)$ aralığında $k = 0, 1, 2$ için toplam {1} kök bulunur.",
            blanks: [["15° + 60°k", ["15° + 60°k", "15° + 120°k", "45° + 60°k"]], ["3", ["1", "2", "3"]]],
            vTitle: "3x = 45° + 180°k Çözümü",
            vNums: [["3'e bölünce", "x = 15° + 60°k", 1], ["k=0,1,2", "15°, 75°, 135° (3 kök)", 1]],
            vSum: "Periyot kaça bölündüyse kök sayısı o oranda çoğalır; en son sadeleştirme yapmak yerine baştan böl!",
            hint: "$45 \\div 3 = 15$ ve $180 \\div 3 = 60$."
          },
          {
            title: "Lineer (a sin x + b cos x = c) Tipi", subtitle: "sin ve cos İlişkisi",
            steps: ["$\\sin x = \\cos 2x$ gibi farklı isimli eşitliklerde birini $90^\\circ - \\alpha$ ile diğerinin cinsine çeviririz.", "Örneğin $\\cos 2x = \\sin(90^\\circ - 2x)$ yazdığımızda iki taraf da $\\sin$ olur.", "Ardından $\\sin x = \\sin(90^\\circ - 2x)$ şeklinde iki klasik kola ayırarak çözeriz."],
            q: "$\\sin 2x = \\cos x$ denklemini sağlayan en küçük pozitif $x$ açısı kaç derecedir?",
            qc: ["15°", "30°", "45°"], qa: "30°",
            hint: "$\\cos x = \\sin(90^\\circ - x) \\implies 2x = 90^\\circ - x \\implies 3x = 90^\\circ \\implies x = 30^\\circ$."
          },
          {
            title: "Trigonometrik Denklem Sorusu", subtitle: "İkinci Dereceden Çarpanlar",
            stem: "$[0, 2\\pi)$ aralığında $2\\sin^2 x - \\sin x - 1 = 0$ denklemini sağlayan kaç farklı $x$ kökü vardır?",
            opts: ["$1$", "$2$", "$3$", "$4$"], ans: "C",
            hint: "$(2\\sin x + 1)(\\sin x - 1) = 0$ biçiminde çarpanlarına ayırıp her iki kökü $[0, 360^\\circ)$'ta say.",
            sol: "$(2\\sin x + 1)(\\sin x - 1) = 0 \\implies \\sin x = -\\frac{1}{2}$ veya $\\sin x = 1$. $[0, 2\\pi)$'da $\\sin x = 1 \\implies x = 90^\\circ$ ($1$ kök); $\\sin x = -\\frac{1}{2} \\implies x = 210^\\circ, 330^\\circ$ ($2$ kök). Toplam $3$ kök vardır.",
            badge: "Denklem Çözücü"
          }
        ]
      }),
      makeUnit({
        track: "11", grade: 11, no: 3,
        title: "Üstel ve Logaritmik Fonksiyonlar",
        subtitle: "a^x Üstel Modeli, log_a(x) Kuralları ve Denklemler (TYMM 11)",
        desc: "Üstel büyüme-azalma modellerini kurar, logaritma fonksiyonunun kurallarını uygular ve üstel-logaritmik denklemleri çözeriz.",
        coverImage: "assets/flow/u02_uslu_ifadeler.jpg",
        cells: ["Üstel a^x", "Büyüme a>1", "Azalma 0<a<1", "e Sayısı", "ln x", "log_a x", "Tanım Şartı", "Çarpım→Toplam", "Taban Değiş", "Üs Başa İner", "Log Denklem", "pH / Deprem"],
        k: [
          ["Üstel Fonksiyon ve Büyüme/Azalma", "MAT.11.2.1"],
          ["Logaritma Özellikleri ve Taban Değiştirme", "MAT.11.2.2"],
          ["Üstel ve Logaritmik Denklemler", "MAT.11.2.3"]
        ],
        s: [
          {
            title: "Üstel Fonksiyonun Tersi = Logaritma", subtitle: "y = a^x ⟺ x = log_a(y)",
            exp: ["$a \\gt 0$ ve $a \\ne 1$ olmak üzere $f(x) = a^x$ üstel fonksiyonudur; $a \\gt 1$ ise hızla büyür, $0 \\lt a \\lt 1$ ise azalır.", "Bu fonksiyonun tersi **$f^{-1}(x) = \\log_a x$** logaritma fonksiyonudur. Tanımlı olabilmesi için mutlaka iç kısım ($x \\gt 0$), taban ($a \\gt 0, a \\ne 1$) sağlanmalıdır!"],
            sent: "$\\log_3(81) =$ {0} değerine eşittir çünkü $3^4 = 81$'dir; $e \\approx 2{,}718$ tabanlı logaritma ise {1} biçiminde yazılır.",
            blanks: [["4", ["3", "4", "9"]], ["ln x", ["log x", "ln x", "e^x"]]],
            vTitle: "Üstel ↔ Logaritma Geçişi",
            vNums: [["3⁴ = 81", "⟺ log₃ 81 = 4", 1], ["log₁₀ x = log x", "Onluk logaritma", 0], ["logₑ x = ln x", "Doğal logaritma", 1]],
            vSum: "Taban yazılmamışsa ($\\log x$) taban $10$, $\\ln x$ ise taban $e$'dir.",
            hint: "$3$'ün kaçıncı kuvveti $81$ eder? Doğal logaritma $\\ln$'dir."
          },
          {
            title: "Altın Logaritma Kuralları", subtitle: "Çarpma Toplama, Bölme Çıkarmaya Dönüşür",
            steps: ["$\\log_a(x \\cdot y) = \\log_a x + \\log_a y$ ve $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$.", "**Kuvvet başa iner:** $\\log_{a^m}(x^n) = \\frac{n}{m}\\log_a x$.", "**Taban değiştirme:** $\\log_a b = \\frac{\\log_c b}{\\log_c a}$ ve $\\log_a b \\cdot \\log_b c = \\log_a c$."],
            q: "$\\log_4 25 \\cdot \\log_5 8$ çarpımının sonucu kaçtır?",
            qc: ["3/2", "3", "6"], qa: "3",
            hint: "$\\log_{2^2}(5^2) \\cdot \\log_5(2^3) = \\frac{2}{2}\\log_2 5 \\cdot 3\\log_5 2 = 1 \\cdot 3 = 3$!"
          },
          {
            title: "Logaritma Tanım Kümesi Sorusu", subtitle: "Hem Taban Hem İçi Kontrolü",
            stem: "$f(x) = \\log_{(x - 2)}(7 - x)$ fonksiyonunun **en geniş tanım kümesindeki tam sayıların toplamı** kaçtır?",
            opts: ["$9$", "$14$", "$15$", "$20$"], ans: "C",
            hint: "Üç şartı aynı anda sağla: $7 - x \\gt 0$, $x - 2 \\gt 0$ ve $x - 2 \\ne 1$ ($x \\ne 3$)! Sakın $x=3$'ü toplama!",
            sol: "$x \\lt 7$, $x \\gt 2$ ve $x \\ne 3$. Uygun tam sayılar $4, 5, 6$ olup toplamları $4 + 5 + 6 = 15$.",
            badge: "Logaritma Ustası"
          },
          {
            title: "Gerçek Yaşamda Logaritmik Ölçek", subtitle: "Deprem Şiddeti (Richter) ve pH",
            exp: ["Deprem büyüklüğü ($M$), pH ölçeği ve ses şiddeti (desibel) $10$ tabanlı logaritmik modellerle ölçülür.", "Logaritmik ölçekte $1$ birim artış, gerçek enerjinin veya asitliğin **$10$ kat** artması demektir!"],
            sent: "Richter ölçeğinde $M = 6$ büyüklüğündeki bir depremin genliği $M = 4$ olan depremden $10^{6-4} =$ {0} kat fazladır; $f(t) = 2000 \\cdot (0{,}5)^t$ radyoaktif bozunma modelinde $t=3$ yıl sonunda kalan madde {1} gramdır.",
            blanks: [["100", ["2", "20", "100"]], ["250", ["250", "500", "1000"]]],
            vTitle: "Üstel Bozunma ve Log Ölçek",
            vNums: [["10⁶ / 10⁴", "= 10² = 100 kat", 1], ["2000 · (1/2)³", "= 2000 / 8 = 250 g", 1]],
            vSum: "Üstel azalmada $0 \\lt a \\lt 1$ çarpanı zamanla miktarı düşürür.",
            hint: "$10^2 = 100$ ve $2000 \\div 8 = 250$."
          },
          {
            title: "Üstel Denklemlerde Logaritma Kullanımı", subtitle: "Taban Eşitlenemiyorsa Logaritma Al",
            steps: ["$2^x = 12$ denkleminde $12$ sayısı $2$'nin tam kuvveti değildir.", "Tanımı uygularsak $x = \\log_2 12 = \\log_2(4 \\cdot 3) = 2 + \\log_2 3$ biçiminde tam ifade ederiz.", "Değer aralığı $2^3 = 8 \\lt 12 \\lt 16 = 2^4$ olduğundan $x \\in (3, 4)$ aralığındadır."],
            q: "$\\log 2 = a$ olduğuna göre $\\log 5$ ifadesinin $a$ türünden eşiti nedir?",
            qc: ["1 - a", "1 + a", "5a/2"], qa: "1 - a",
            hint: "$\\log 5 = \\log\\left(\\frac{10}{2}\\right) = \\log 10 - \\log 2 = 1 - a$!"
          },
          {
            title: "Logaritma ve İkinci Dereceden Denklem", subtitle: "Değişken Değiştirme",
            stem: "$9^x - 4 \\cdot 3^x + 3 = 0$ üstel denkleminin gerçek köklerinin **toplamı** kaçtır?",
            opts: ["$0$", "$1$", "$3$", "$4$"], ans: "B",
            hint: "$3^x = t$ dönüşümü yaparsan $t^2 - 4t + 3 = 0$ çıkar; $t$ değerlerinden $x$'leri bul.",
            sol: "$3^x = t \\implies (t-1)(t-3) = 0$. $t = 1 \\implies 3^x = 1 \\implies x_1 = 0$; $t = 3 \\implies 3^x = 3 \\implies x_2 = 1$. Kökler toplamı $0 + 1 = 1$.",
            badge: "Üstel & Logaritma Şefi"
          }
        ]
      }),
      makeUnit({
        track: "11", grade: 11, no: 4,
        title: "Fonksiyonlarda İşlemler, Bileşke ve Dönüşüm",
        subtitle: "4 İşlem, (f∘g)(x), Parçalı Fonksiyon ve Öteleme (TYMM 11)",
        desc: "Fonksiyonlarda dört işlem ve bileşke kurar, parçalı tanımlı fonksiyonları yorumlar ve grafik öteleme-simetri dönüşümlerini uygularız.",
        coverImage: "assets/flow/u11_donusum_geometrisi.jpg",
        cells: ["(f+g)(x)", "Ortak Tanım", "(f∘g)(x)", "Bileşke Ters", "Parçalı f", "Öteleme f(x-h)", "Dikey +k", "-f(x) Yansıma", "f(-x) Yansıma", "Tek-Çift f", "|f(x)| Grafiği", "Dönüşüm"],
        k: [
          ["Fonksiyonlarda Dört İşlem ve Parçalı Yapı", "MAT.11.2.4"],
          ["Fonksiyonlarda Bileşke ve Tersi", "MAT.11.2.5"],
          ["Grafik Öteleme, Yansıma ve Tek-Çift", "MAT.11.2.6"]
        ],
        s: [
          {
            title: "Fonksiyonlarda Dört İşlem ve Ortak Tanım", subtitle: "A ∩ B Kesişim Şartı",
            exp: ["İki fonksiyonu toplayıp çıkarabilmek veya çarpabilmek için yalnızca **ortak tanım kümesinde ($D_f \\cap D_g$)** işlem yapabiliriz.", "$(f + g)(x) = f(x) + g(x)$ ve $(f \\cdot g)(x) = f(x) \\cdot g(x)$ biçiminde hesaplanır; bölümde ayrıca $g(x) \\ne 0$ şartı aranır."],
            sent: "$f = \\{(1, 4), (2, 5), (3, 7)\\}$ ve $g = \\{(2, -1), (3, 3), (4, 6)\\}$ kümelerinin ortak apsisleri $2$ ve $3$ olduğundan $(2f - g)(3) = 2(7) - 3 =$ {0} olur; ikisinin de tanımsız kalmadığı tanım kümesi ise {1} kümesidir.",
            blanks: [["11", ["4", "11", "14"]], ["{2, 3}", ["{1, 2, 3}", "{2, 3}", "{1, 2, 3, 4}"]]],
            vTitle: "Ortak Tanımda İşlem",
            vNums: [["Df = {1, 2, 3}", "Dg = {2, 3, 4}", 0], ["Df ∩ Dg", "= {2, 3}", 1], ["(2f - g)(3)", "= 2·7 - 3 = 11", 1]],
            vSum: "Ortak tanım kümesi dışındaki elemanlarda dört işlem tanımlı değildir.",
            hint: "$D_f \\cap D_g = \\{2, 3\\}$ ortak elemanlarıdır."
          },
          {
            title: "Grafik Öteleme ve Simetri Dönüşümleri", subtitle: "f(x - h) Sağ, f(x) + k Yukarı",
            steps: ["$y = f(x) + k$ grafiği $f(x)$'i $k$ birim **yukarı** ($k \\lt 0$ ise aşağı) öteler.", "**Dikkat:** $y = f(x - h)$ grafiği ise $x$'i $h$ birim **sağa** (ters işaretle!), $f(x + h)$ ise $h$ birim **sola** öteler.", "$-f(x)$ grafiği $x$-eksenine göre, $f(-x)$ ise $y$-eksenine göre simetri alır."],
            q: "Tepe noktası $(2, -3)$ olan $y = f(x)$ parabolünden elde edilen $g(x) = f(x + 1) + 5$ parabolünün tepe noktası neresidir?",
            qc: ["(3, 2)", "(1, 2)", "(1, -8)"], qa: "(1, 2)",
            hint: "$f(x+1)$ grafiği $1$ birim **sola** ($2 - 1 = 1$), $+5$ ise $5$ birim **yukarı** ($-3 + 5 = 2$) taşır!"
          },
          {
            title: "Bileşke ve Parçalı Fonksiyon Sorusu", subtitle: "f(g(x)) Zinciri",
            stem: "$f(x) = \\begin{cases} 2x + 1, & x \\lt 3 \\\\ x^2 - 4, & x \\ge 3 \\end{cases}$ parçalı fonksiyonu veriliyor. Buna göre $(f \\circ f)(1) + f(4)$ toplamı kaçtır?",
            opts: ["$12$", "$15$", "$17$", "$19$"], ans: "C",
            hint: "Önce $f(1) = 2(1)+1 = 3$ hesapla; sonra $f(f(1)) = f(3)$ için alttaki kuralı ($x \\ge 3$) kullan!",
            sol: "$f(1) = 3$. Sonra $f(3) = 3^2 - 4 = 5$. Ayrıca $f(4) = 4^2 - 4 = 12$. Toplam $5 + 12 = 17$.",
            badge: "Bileşke Ustası"
          },
          {
            title: "Tek ve Çift Fonksiyonların Simetrisi", subtitle: "f(-x) Testi",
            exp: ["$f(-x) = f(x)$ şartını sağlayan fonksiyonlar **çift fonksiyondur** ve grafikleri **$y$-eksenine göre simetriktir** (ör. $x^2, \\cos x$).", "$f(-x) = -f(x)$ sağlayanlar **tek fonksiyondur** ve grafikleri **orijine göre simetriktir** (ör. $x^3, \\sin x$)."],
            sent: "$f(x) = 3x^4 + ax^3 - 5x^2 + 2$ fonksiyonu çift fonksiyon ise tek dereceli terim bulunamayacağı için $a =$ {0} olmalıdır; ayrıca bir $g(x)$ tek fonksiyonunda $g(-4) = 9$ ise $g(4) =$ {1} olur.",
            blanks: [["0", ["-1", "0", "3"]], ["-9", ["-9", "0", "9"]]],
            vTitle: "Tek & Çift Kontrolü",
            vNums: [["Çift f: y simetri", "Tek üslü x katsayısı = 0", 1], ["Tek g: orijin simetri", "g(4) = -g(-4) = -9", 1]],
            vSum: "Bir fonksiyon ne tek ne çift de olabilir (ör. $x^2 + x$).",
            hint: "Çift polinomda $x^3$ teriminin katsayısı sıfırlanmalı; tekte işaret zıttır."
          },
          {
            title: "Bileşke Fonksiyonun Tersi: (f∘g)⁻¹ = g⁻¹∘f⁻¹", subtitle: "Sıra Tersine Döner!",
            steps: ["İki fonksiyonun bileşkesinin tersi alınırken **sıra mutlaka ters çevrilir**: $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$.", "Eğer $f(2x - 1) = 6x + 5$ gibi bir ifade verilirse içine bakarak $2x - 1 = k$ deyip pratik çözebiliriz.", "Hatta $f(2x - 1) = y \\implies f^{-1}(y) = 2x - 1$ ilişkisi ters sorularda çok hızlıdır."],
            q: "$f(x - 2) = 4x + 1$ olduğuna göre $f^{-1}(13)$ değeri kaçtır?",
            qc: ["1", "3", "5"], qa: "1",
            hint: "Çıkışın $13$ olması için $4x + 1 = 13 \\implies x = 3$; içeride $x - 2 = 3 - 2 = 1$!"
          },
          {
            title: "Bileşke Denklem Sorusu", subtitle: "Bilinmeyen Fonksiyonu Çekme",
            stem: "$(f \\circ g)(x) = 4x - 3$ ve $g(x) = 2x + 1$ olduğuna göre $f(5)$ değeri kaçtır?",
            opts: ["$3$", "$5$", "$7$", "$9$"], ans: "B",
            hint: "$g(x)$'in $5$ olması için $2x + 1 = 5 \\implies x = 2$ vermen yeterlidir!",
            sol: "$f(g(x)) = 4x - 3$ eşitliğinde $g(x) = 2x + 1 = 5$ olması için $x = 2$ seçelim: $f(5) = 4(2) - 3 = 5$.",
            badge: "Dönüşüm Uzmanı"
          }
        ]
      }),
      makeUnit({
        track: "11", grade: 11, no: 5,
        title: "Özel Dörtgenler ve Çokgenler",
        subtitle: "Düzgün Çokgenler, Yamuk, Paralelkenar, Eşkenar Dörtgen ve Deltoid (TYMM 11)",
        desc: "Çokgenlerin açı-köşegen kurallarını ve yamuk, paralelkenar, eşkenar dörtgen, kare ve deltoidin uzunluk-alan özelliklerini sentezleriz.",
        coverImage: "assets/flow/u10_eslik_benzerlik.jpg",
        cells: ["Dış Açı 360°", "(n-2)·180°", "Düzgün Altıgen", "Yamuk Orta Taban", "İkizkenar Yamuk", "Paralelkenar", "Eşkenar Dörtgen", "Dikdörtgen", "Kare", "Deltoid", "Alan Oranı", "Kelebek"],
        k: [
          ["Çokgenler ve Düzgün Çokgen Özellikleri", "MAT.11.3.1"],
          ["Yamuk ve Paralelkenarda Uzunluk-Alan", "MAT.11.3.2"],
          ["Eşkenar Dörtgen, Kare ve Deltoid", "MAT.11.3.3"]
        ],
        s: [
          {
            title: "Düzgün Çokgenlerde Dış Açı Kısayolu", subtitle: "Bütün Çokgenlerin Dış Açıları Toplamı 360°!",
            exp: ["$n$ kenarlı bir konveks çokgenin iç açıları toplamı $(n-2)\\cdot 180^\\circ$ olsa da, düzgün çokgende **bir dış açı $= \\frac{360^\\circ}{n}$** formülünü kullanmak her zaman çok daha hızlıdır.", "Bir iç açı ile bir dış açı bütünlerdir ($\\text{İç} + \\text{Dış} = 180^\\circ$)."],
            sent: "Düzgün bir sekizgenin ($n=8$) bir dış açısı $\\frac{360^\\circ}{8} =$ {0} derece olduğundan bir iç açısı {1} derecedir.",
            blanks: [["45", ["36", "45", "60"]], ["135", ["120", "135", "144"]]],
            vTitle: "Düzgün Sekizgen Hesabı",
            vNums: [["Dış açı = 360° / 8", "= 45°", 1], ["İç açı = 180° - 45°", "= 135°", 1]],
            vSum: "İç açı verilen her düzgün çokgende hemen $180^\\circ$'den çıkarıp dış açıyı bul!",
            hint: "$360 \\div 8 = 45$, $180 - 45 = 135$."
          },
          {
            title: "Yamukta Paralel Orta Taban ve Alan Paylaşımı", subtitle: "Üçgenlerden Gelen Oranlar",
            steps: ["Yamukta alt taban $a$, üst taban $c$ iken orta taban $e = \\frac{a+c}{2}$'dir; köşegenlerin orta noktaları arasındaki parça $\\frac{|a-c|}{2}$ uzunluktadır.", "İkizkenar yamukta iki köşeden dik indirildiğinde sağ ve sol tarafta uzunluğu $\\frac{a-c}{2}$ olan iki eş dik üçgen ayrılır.", "Bir dörtgende iki köşegen çizildiğinde karşılıklı üçgen alanlarının çarpımları eşittir: $S_1 \\cdot S_3 = S_2 \\cdot S_4$."],
            q: "Alt tabanı $18\\text{ cm}$, üst tabanı $8\\text{ cm}$ ve yan kenarları $13\\text{ cm}$ olan ikizkenar yamuğun yüksekliği kaç santimetredir?",
            qc: ["5 cm", "12 cm", "13 cm"], qa: "12 cm",
            hint: "Üst köşelerden dik inince yan parça $\\frac{18-8}{2} = 5\\text{ cm}$; $5$-$12$-$13$ dik üçgeninden yükseklik $12\\text{ cm}$!"
          },
          {
            title: "Düzgün Çokgen Sorusu", subtitle: "Dış Açıdan Kenar Sayısına",
            stem: "Bir iç açısının ölçüsü bir dış açısının ölçüsünün **$5$ katı** olan düzgün çokgen kaç kenarlıdır?",
            opts: ["$8$", "$10$", "$12$", "$15$"], ans: "C",
            hint: "Dış açıya $\\alpha$ dersek iç açı $5\\alpha$ olur; toplamları $\\alpha + 5\\alpha = 180^\\circ$!",
            sol: "$6\\alpha = 180^\\circ \\implies \\alpha = 30^\\circ$ (bir dış açı). Kenar sayısı $n = \\frac{360^\\circ}{30^\\circ} = 12$.",
            badge: "Çokgen Ustası"
          },
          {
            title: "Deltoid ve Karede Simetri Ekseni", subtitle: "Tabanları Çakışık İki İkizkenar Üçgen",
            exp: ["**Deltoid**, tabanları ortak iki ikizkenar üçgenden oluşur; tepe noktalarını birleştiren **ana köşegen** hem açıortay hem de diğer köşegenin orta dikmesidir.", "Böylece köşegenleri dik kesiştiği için deltoidin alanı da eşkenar dörtgen gibi $\\frac{e \\cdot f}{2}$ formülüyle hesaplanır."],
            sent: "Bir $ABCD$ deltoidinde $|AB| = |AD| = 5\\text{ cm}$, $|CB| = |CD| = 10\\text{ cm}$ ve tepe açısı $m(\\widehat{B}) = 110^\\circ$ ise simetri gereği karşısındaki {0} açısı da $110^\\circ$ olur; köşegenleri $8\\text{ cm}$ ve $13\\text{ cm}$ ise alanı {1} $\\text{cm}^2$'dir.",
            blanks: [["D", ["A", "C", "D"]], ["52", ["42", "52", "104"]]],
            vTitle: "Deltoid Özellikleri",
            vNums: [["Simetrik açılar", "m(∠B) = m(∠D)", 1], ["Alan = (8 × 13) / 2", "= 52 cm²", 1]],
            vSum: "Deltoidde yalnızca tepe olmayan karşılıklı iki açı birbirine eşittir!",
            hint: "Eşit kenarların birleştiği $B$ ve $D$ köşe açıları eşittir; $\\frac{8 \\cdot 13}{2} = 52$."
          },
          {
            title: "Paralelkenarda Alan Parçalama", subtitle: "Taban Oranları ve Yükseklik",
            steps: ["Paralelkenarın içindeki herhangi bir $P$ noktası ile $[AB]$ veya $[DC]$ üzerine kurulan bir üçgenin alanı tüm paralelkenar alanının **tam yarısıdır**.", "Ayrıca açıortaylar paralel iki doğru arasında dik açı ($90^\\circ$) oluşturarak kesişirler!", "Kare içinde eş dik üçgenler (eşlik/benzerlik) döndürme sorularının vazgeçilmez anahtarıdır."],
            q: "Bir $ABCD$ paralelkenarında $[DC]$ üzerinde alınan bir $E$ noktasıyla oluşturulan $\\triangle ABE$ üçgeninin alanı $28\\text{ cm}^2$ ise paralelkenarın tüm alanı kaç $\\text{cm}^2$'dir?",
            qc: ["42 cm²", "56 cm²", "84 cm²"], qa: "56 cm²",
            hint: "Aynı taban ve yüksekliğe sahip üçgen paralelkenarın tam yarısıdır."
          },
          {
            title: "Dikdörtgen Katlama / Dik Üçgen Sorusu", subtitle: "Özel Dörtgen Sentezi",
            stem: "Bir $ABCD$ karesinin köşegen uzunluğu $8\\sqrt{2}\\text{ cm}$ olduğuna göre bu karenin alanı kaç $\\text{cm}^2$'dir?",
            opts: ["$32$", "$48$", "$64$", "$128$"], ans: "C",
            hint: "Kenarı $a$ olan karenin köşegeni $a\\sqrt{2}$'dir (veya köşegenler dik olduğundan Alan $= \\frac{e^2}{2}$!).",
            sol: "Köşegen $a\\sqrt{2} = 8\\sqrt{2} \\implies a = 8\\text{ cm}$. Alan $= 8^2 = 64\\text{ cm}^2$ (ayrıca $\\frac{(8\\sqrt{2})^2}{2} = \\frac{128}{2} = 64$).",
            badge: "Dörtgen Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "11", grade: 11, no: 6,
        title: "İki Nicel Değişken ve Doğrusal Korelasyon",
        subtitle: "Saçılım Grafiği, Korelasyon Katsayısı (r) ve Regresyon Doğrusu (TYMM 11)",
        desc: "İki nicel değişken arasındaki doğrusal ilişkinin yönünü ve gücünü saçılım grafiği ve korelasyon katsayısıyla analiz eder, uyum doğrusuyla tahmin yaparız.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        cells: ["Nicel Değişken", "Saçılım Grafiği", "Korelasyon r", "-1 ≤ r ≤ 1", "Pozitif İlişki", "Negatif İlişki", "Güçlü |r|≈1", "Zayıf |r|≈0", "Uyum Doğrusu", "Eğim", "Tahmin", "Nedensellik"],
        k: [
          ["Saçılım Grafiği ve İlişkinin Yönü-Biçimi", "MAT.11.4.1"],
          ["Korelasyon Katsayısı (r) Yorumlama", "MAT.11.4.2"],
          ["Doğrusal Uyum Doğrusu ile Tahmin", "MAT.11.4.3"]
        ],
        s: [
          {
            title: "Korelasyon Katsayısı ($r$) Neyi Ölçer?", subtitle: "-1 ile +1 Arasındaki Güç Ölçüsü",
            exp: ["İki nicel değişken arasındaki doğrusal ilişkinin yönünü ve kuvvetini **korelasyon katsayısı ($r$)** ölçer ve daima **$-1 \\le r \\le +1$** aralığındadır.", "$r$'nin işareti yönü ($+$ aynı yön, $-$ ters yön); mutlak değeri $|r|$ ise gücü ($1$'e yakın güçlü, $0$'a yakın ilişki yok) gösterir!"],
            sent: "$r = -0{,}92$ değeri $x$ artarken $y$'nin azaldığı {0} yönlü çok **güçlü** bir doğrusal ilişkiyi gösterirken, $r = +0{,}08$ değeri doğrusal ilişkinin {1} derecede zayıf olduğunu gösterir.",
            blanks: [["negatif", ["pozitif", "negatif", "sıfır"]], ["yok denecek", ["çok güçlü", "tam kesin", "yok denecek"]]],
            vTitle: "r Katsayısı Yorum Rehberi",
            vNums: [["r = +0,95", "Güçlü pozitif doğrusal", 1], ["r = -0,92", "Güçlü negatif doğrusal", 1], ["r = 0,05", "Doğrusal ilişki yok", 0]],
            vSum: "Dikkat: $-0{,}90$ ilişkisi $+0{,}50$ ilişkisinden çok daha güçlüdür!",
            hint: "Güç mutlak değere ($|-0{,}92| = 0{,}92 \\approx 1$), yön ise işarete bakar."
          },
          {
            title: "Doğrusal Uyum (Regresyon) Doğrusu ile Tahmin", subtitle: "İç Tahmin vs Dış Tahmin Riski",
            steps: ["Veri bulutuna en yakın geçen doğruya **en iyi uyum doğrusu** denir: $\\hat{y} = ax + b$.", "Eğim $a$, $x$'teki $1$ birimlik artışa karşılık $y$'deki ortalama beklenen değişimi verir.", "Veri aralığının çok dışındaki değerler için tahmin (ekstrapolasyon) yapmak hatalı sonuçlara yol açabilir."],
            q: "Bir reklam harcaması ($x$, bin TL) ile satış geliri ($\\hat{y}$, bin TL) modeli $\\hat{y} = 4{,}5x + 12$ ise reklam $10\\text{ bin TL}$ artırıldığında satış ortalama nasıl değişir?",
            qc: ["4,5 bin TL artar.", "45 bin TL artar.", "57 bin TL artar."], qa: "45 bin TL artar.",
            hint: "Değişim yalnızca eğimle bulunur: $10 \\times 4{,}5 = 45\\text{ bin TL}$ artış (sabit terim $+12$ başlangıçtır)."
          },
          {
            title: "Korelasyon Karşılaştırma Sorusu", subtitle: "Hangi Veri Seti Doğruya En Yakın?",
            stem: "Dört farklı deneyden elde edilen doğrusal korelasyon katsayıları $r_1 = 0{,}62$, $r_2 = -0{,}88$, $r_3 = 0{,}79$ ve $r_4 = -0{,}15$ şeklindedir. Saçılım grafiğinde noktaların uyum doğrusu etrafında **en sıkı toplandığı (en güçlü)** veri seti hangisidir?",
            opts: ["$r_1$", "$r_2$", "$r_3$", "$r_4$"], ans: "B",
            hint: "İşaret yalnızca eğimin yönünü gösterir; sıkılık/güç $|r|$ mutlak değerine bağlıdır!",
            sol: "Mutlak değerleri karşılaştıralım: $|-0{,}88| = 0{,}88 \\gt 0{,}79 \\gt 0{,}62 \\gt 0{,}15$. En güçlü doğrusal ilişki $r_2$'dedir.",
            badge: "Korelasyon Analisti"
          },
          {
            title: "Korelasyon Nedensellik Demek Değildir!", subtitle: "Gizli Üçüncü Değişken Tuzağı",
            exp: ["Yaz aylarında dondurma satışları ile güneş gözlüğü satışları arasında güçlü pozitif korelasyon ($r \\approx +0{,}90$) çıkabilir.", "Ancak dondurma yemek güneş gözlüğü aldırmaz; her ikisini de artıran **gizli değişken (hava sıcaklığı)** vardır!"],
            sent: "İki nicel değişken arasında güçlü korelasyon bulunması mutlaka birinin diğerinin {0} olduğu anlamına gelmez; bu ilişkiyi açıklayan gizli bir {1} değişken bulunabilir.",
            blanks: [["nedeni", ["nedeni", "zıttı", "oranı"]], ["üçüncü", ["üçüncü", "sıfır", "sabit"]]],
            vTitle: "İstatistiksel Eleştirel Düşünme",
            vNums: [["Korelasyon (r)", "Birlikte değişim ölçüsü", 0], ["Nedensellik", "Kontrollü deney gerektirir", 1]],
            vSum: "'Korelasyon nedenselliği kanıtlamaz' ilkesi TYMM 11 veri okuryazarlığının temelidir.",
            hint: "Gözlemsel veri birlikteliği gösterir ama sebep-sonuç kanıtlamaz."
          },
          {
            title: "Eğrisel (Doğrusal Olmayan) İlişki", subtitle: "r ≈ 0 Olması İlişki Yok Demek Değildir!",
            steps: ["Korelasyon katsayısı $r$, yalnızca **doğrusal** ilişkinin gücünü ölçer.", "Eğer noktalar tam bir **parabol** veya **çember** şeklindeyse çok net bir matematiksel ilişki olmasına rağmen $r \\approx 0$ çıkabilir!", "Bu yüzden sadece $r$'ye bakmak yetmez; mutlaka önce **saçılım grafiğini** çizip şekle bakmalıyız."],
            q: "Bir saçılım grafiğinde noktalar simetrik bir U şeklinde parabol oluşturuyorsa korelasyon katsayısı $r$ hakkında ne söylenebilir?",
            qc: ["r = +1 çıkmalıdır.", "Doğrusal olmadığı için r sıfıra yakın çıkabilir.", "Grafik hatalıdır."], qa: "Doğrusal olmadığı için r sıfıra yakın çıkabilir.",
            hint: "Parabolün sol kolu azalan, sağ kolu artan olduğu için doğrusal eğilimler birbirini dengeler!"
          },
          {
            title: "11. Sınıf Regresyon Tahmin Sorusu", subtitle: "Model Değerlendirmesi",
            stem: "Öğrencilerin boy ($x$ cm) ile ayakkabı numaralarını inceleyen uyum doğrusu $\\hat{y} = 0{,}2x + 7$ olarak verilmiştir. Boyu $175\\text{ cm}$ olan bir öğrencinin tahmini ayakkabı numarası kaçtır?",
            opts: ["$40$", "$41$", "$42$", "$43$"], ans: "C",
            hint: "Doğru denkleminde $x = 175$ değerini yerine yaz.",
            sol: "$\\hat{y} = 0{,}2(175) + 7 = 35 + 7 = 42$ numara olarak tahmin edilir.",
            badge: "11. Sınıf Mezunu"
          }
        ]
      })
    ]
,
    "12_okul": [
      makeUnit({
        track: "12_okul", grade: 12, no: 1,
        title: "Üstel ve Logaritmik Fonksiyonlar",
        subtitle: "Üstel Büyüme, Logaritma Kuralları ve Denklemler",
        desc: "2018 MEB 12. sınıf programı kapsamında üstel ve logaritmik fonksiyonların özelliklerini, doğal logaritmayı ($\\ln x$) ve denklem/eşitsizlik çözümlerini öğreniriz.",
        coverImage: "assets/flow/u02_uslu_ifadeler.jpg",
        visuals: ["assets/flow/u02_uslu_ifadeler.jpg", "assets/flow/flow_sade_ders_konsept.jpg", "assets/flow/u08_esitsizlikler.jpg"],
        cells: ["Üstel", "Artan", "Azalan", "Ters", "Taban", "Doğal", "ln e", "Çarpım", "Bölüm", "Kuvvet", "Tanım", "Usta"],
        k: [
          ["Üstel Fonksiyon ve Özellikleri", "12.1.1.1"],
          ["Logaritma Fonksiyonu ve Kuralları", "12.1.2.1"],
          ["Üstel-Logaritmik Denklem ve Eşitsizlikler", "12.1.3.1"]
        ],
        s: [
          {
            title: "Üstel Fonksiyonun Monotonluğu", subtitle: "Taban $a \\gt 1$ vs $0 \\lt a \\lt 1$",
            exp: ["$a \\in \\mathbb{R}^+ \\setminus \\{1\\}$ olmak üzere $f: \\mathbb{R} \\to \\mathbb{R}^+$, $f(x) = a^x$ biçimindeki fonksiyonlara **üstel fonksiyon** denir.", "Taban $a \\gt 1$ ise $x$ büyüdükçe $a^x$ büyür (**artan**); $0 \\lt a \\lt 1$ ise $x$ büyüdükçe $a^x$ küçülür (**azalan**). Her iki durumda da üstel fonksiyon bire bir ve örtendir, bu yüzden tersi vardır!"],
            sent: "$f(x) = 3^x$ fonksiyonu tüm reel sayılarda kesin {0} bir fonksiyon iken, $g(x) = \\left(\\frac{1}{2}\\right)^x$ fonksiyonu kesin {1} bir fonksiyondur.",
            blanks: [["artan", ["artan", "azalan", "sabit"]], ["azalan", ["artan", "azalan", "periyodik"]]],
            vTitle: "Üstel Fonksiyon Davranışı",
            vNums: [["a > 1", "Hızlı üstel büyüme", 1], ["0 < a < 1", "Üstel azalma (yarılanma)", 1], ["f(0) = 1", "Grafik daima (0,1)'den geçer", 0]],
            vSum: "Üstel fonksiyon daima pozitif değer alır ($a^x \\gt 0$).",
            hint: "Taban $1$'den büyükse büyür, $0$ ile $1$ arasındaysa küçülür."
          },
          {
            title: "Üstel Fonksiyonun Tersi: Logaritma", subtitle: "Tanım Kümesi ve Temel Dönüşüm",
            steps: ["Üstel fonksiyon bire bir ve örten olduğundan tersi vardır: $y = a^x \\iff x = \\log_a y$.", "Logaritmanın tanımlı olması için üç şart gerekir: taban $a \\gt 0$, taban $a \\ne 1$ ve içi $y \\gt 0$ olmalıdır.", "Özel tabanlar: $10$ tabanı yazılmaz ($\\log x = \\log_{10} x$), $e$ tabanı **doğal logaritma** olarak $\\ln x = \\log_e x$ yazılır."],
            q: "$\\log_2(x - 3) = 4$ denklemini sağlayan $x$ değeri kaçtır?",
            qc: ["$11$", "$15$", "$19$"],
            qa: "$19$",
            hint: "Ok yay yöntemi: $\\log_2(x - 3) = 4 \\iff x - 3 = 2^4 = 16$."
          },
          {
            title: "Logaritma Kuralları Hesap Sorusu", subtitle: "Çarpım, Bölüm ve Kuvvet Özellikleri",
            stem: "$\\log_6 4 + \\log_6 9 + \\log_2 8$ toplamının sonucu kaçtır?",
            opts: ["$4$", "$5$", "$6$", "$8$"], ans: "B",
            hint: "Aynı tabanlı toplamayı çarpıma dönüştür: $\\log_6 4 + \\log_6 9 = \\log_6(4 \\cdot 9)$. Sonra $\\log_2(2^3)$ değerini ekle.",
            sol: "$\\log_6 4 + \\log_6 9 = \\log_6(36) = \\log_6(6^2) = 2$ ve $\\log_2 8 = \\log_2(2^3) = 3$'tür. Toplam $2 + 3 = 5$ bulunur.",
            badge: "Logaritma Ustası"
          },
          {
            title: "Doğal Logaritma ($\\ln$) ve Taban Değiştirme", subtitle: "Tabanlar Arası Geçiş",
            exp: ["Farklı tabanlı logaritmaları ortak bir tabana geçirmek için $\\log_a b = \\frac{\\log_c b}{\\log_c a}$ **taban değiştirme** kuralı kullanılır.", "Bunun doğrudan sonucu olarak $\\log_a b \\cdot \\log_b a = 1$ ve $\\ln e = 1$, $\\log 10 = 1$ özdeşlikleri elde edilir."],
            sent: "$\\ln e$ ifadesinin sayısal değeri {0} iken, $\\log_{10} 1000$ ifadesinin değeri {1} olarak bulunur.",
            blanks: [["bir", ["sıfır", "bir", "on"]], ["üç", ["iki", "üç", "yüz"]]],
            vTitle: "Önemli Logaritma Değerleri",
            vNums: [["ln(1) = 0", "Her tabanda 1'in logaritması 0", 0], ["ln(e) = 1", "e tabanında e eşittir 1", 1], ["log(1000) = 3", "10^3 = 1000", 1]],
            vSum: "Taban ile içindeki kuvvet birbirini dengeler: $\\log_{a^m}(b^n) = \\frac{n}{m}\\log_a b$.",
            hint: "$e^1 = e$ ve $10^3 = 1000$ eşitliklerini düşün."
          },
          {
            title: "Logaritmik Eşitsizliklerde Taban ve Tanım Kümesi", subtitle: "Çift Yönlü Kontrol",
            steps: ["Logaritmik eşitsizlik çözerken **ilk adım** daima iç kısmın sıfırdan büyük ($\\text{iç} \\gt 0$) olmasını yazmaktır.", "Taban $a \\gt 1$ iken eşitsizlik yönü **değişmez**; taban $0 \\lt a \\lt 1$ iken üslü hale geçerken eşitsizlik **yön değiştirir**.", "Bulunan aralık ile tanım kümesi aralığının kesişimi kesin çözüm kümesini verir."],
            q: "$\\log_{\\frac{1}{2}}(x - 1) \\gt -2$ eşitsizliğinin çözüm kümesi nedir?",
            qc: ["$(1, 5)$", "$(-\\infty, 5)$", "$(5, \\infty)$"],
            qa: "$(1, 5)$",
            hint: "Tanım şartı $x - 1 \\gt 0 \\implies x \\gt 1$. Taban $\\frac{1}{2} \\lt 1$ olduğu için işaret yön değiştirir: $x - 1 \\lt (\\frac{1}{2})^{-2} = 4$."
          },
          {
            title: "Üstel İkinci Derece Denklem Sorusu", subtitle: "Değişken Değiştirme ($t = e^x$)",
            stem: "$e^{2x} - 5e^x + 6 = 0$ denkleminin gerçel köklerinin toplamı kaçtır?",
            opts: ["$\\ln 5$", "$\\ln 6$", "$e^5$", "$5$"], ans: "B",
            hint: "$e^x = t$ değişken dönüşümü yaparak $t^2 - 5t + 6 = 0$ denklemini çöz, sonra $x = \\ln t$ geçişini yap.",
            sol: "$t = e^x$ dersek $t^2 - 5t + 6 = (t - 2)(t - 3) = 0$ buradan $t_1 = 2$ ve $t_2 = 3$ bulunur (her ikisi de pozitif). $e^{x_1} = 2 \\implies x_1 = \\ln 2$ ve $e^{x_2} = 3 \\implies x_2 = \\ln 3$. Kökler toplamı $\\ln 2 + \\ln 3 = \\ln(2 \\cdot 3) = \\ln 6$'dır.",
            badge: "Üstel Denklem Fatihi"
          }
        ]
      }),
      makeUnit({
        track: "12_okul", grade: 12, no: 2,
        title: "Diziler (Aritmetik ve Geometrik Diziler)",
        subtitle: "Genel Terim, İndirgeme ve İlk n Terim Toplamı",
        desc: "Gerçel sayı dizilerinin tanımını kavrar, aritmetik dizilerde ortak farkı, geometrik dizilerde ortak çarpanı ve ilk $n$ terim toplamını hesaplarız.",
        coverImage: "assets/flow/k4_ekok_disliler.jpg",
        visuals: ["assets/flow/k4_ekok_disliler.jpg", "assets/flow/flow_sade_ders_konsept.jpg", "assets/flow/k2_carpan_yontemleri.jpg"],
        cells: ["Dizi", "Genel Terim", "Sabit", "Monoton", "Aritmetik", "Fark (d)", "Toplam", "Geometrik", "Çarpan (r)", "Orta Terim", "İndirgeme", "Usta"],
        k: [
          ["Dizi Kavramı ve Genel Terim", "12.2.1.1"],
          ["Aritmetik Diziler ve Toplam Formülü", "12.2.1.2"],
          ["Geometrik Diziler ve Uygulamaları", "12.2.1.3"]
        ],
        s: [
          {
            title: "Gerçel Sayı Dizisinin Tanımı", subtitle: "$f: \\mathbb{Z}^+ \\to \\mathbb{R}$",
            exp: ["Tanım kümesi yalnızca **pozitif doğal sayılar** ($\\mathbb{Z}^+ = \\{1, 2, 3, \\dots\\}$) olan özel fonksiyonlara **gerçel sayı dizisi** denir.", "$a_n$ ifadesine dizinin **genel terimi** denir. Tüm $n \\in \\mathbb{Z}^+$ değerleri için $a_n$ tanımlı olmak zorundadır (paydayı $0$ yapan pozitif tam sayı olmamalıdır)."],
            sent: "Bir dizinin tanım kümesi yalnızca {0} sayılardan oluşur ve $n$. adımdaki kuralı veren $a_n$ ifadesine dizinin {1} adı verilir.",
            blanks: [["pozitif doğal", ["tüm reel", "pozitif doğal", "negatif tam"]], ["genel terimi", ["genel terimi", "sabit terimi", "limit değeri"]]],
            vTitle: "Dizi Terim Örnekleri",
            vNums: [["a_1", "n = 1 için ilk terim", 1], ["a_n", "n. genel terim", 1], ["n in Z+", "n = 0 veya -2 olamaz!", 0]],
            vSum: "Her terim sırayla numaralandırılmış bir sıradadır: $1., 2., 3., \\dots$",
            hint: "Dizi terimleri $1.$ terimden başlar; $0.$ veya $1{,}5.$ terim olmaz."
          },
          {
            title: "İndirgemeli Diziler", subtitle: "Önceki Terimden Sonrakine Geçiş",
            steps: ["Bazı diziler doğrudan $n$ formülü yerine $a_{n+1} = a_n + f(n)$ gibi **indirgeme bağıntısı** ile verilir.", "Sabit bir $d$ ekleniyorsa merdiven gibi $a_{10} = a_1 + 9d$ yazılır; her adımda farklı ekleniyorsa bağıntılar alt alta yazılıp taraf tarafa toplanır (teleskopik toplam).", "Tüm terimleri birbirine eşit olan diziye **sabit dizi** ($a_n = c$) denir."],
            q: "$a_1 = 3$ ve her $n \\ge 1$ için $a_{n+1} = a_n + 4$ olduğuna göre $a_{10}$ kaçtır?",
            qc: ["$35$", "$39$", "$43$"],
            qa: "$39$",
            hint: "$a_1$'den $a_{10}$'a geçerken $9$ kez $+4$ eklenir: $3 + 9 \\cdot 4$."
          },
          {
            title: "Aritmetik Dizi ve $S_n$ Sorusu", subtitle: "Ortak Fark ve İlk 10 Terim Toplamı",
            stem: "Bir $(a_n)$ aritmetik dizisinde $a_4 = 13$ ve $a_{10} = 31$ olduğuna göre bu dizinin ilk $10$ teriminin toplamı $S_{10}$ kaçtır?",
            opts: ["$155$", "$165$", "$175$", "$185$"], ans: "C",
            hint: "Önce $a_{10} - a_4 = 6d$ eşitliğinden ortak fark $d$'yi ve ilk terim $a_1$'i bul; sonra $S_{10} = \\frac{10}{2}(a_1 + a_{10})$ formülünü kullan.",
            sol: "$a_{10} - a_4 = 6d = 31 - 13 = 18 \\implies d = 3$ bulunur. Buradan $a_1 = a_4 - 3d = 13 - 9 = 4$ olur. İlk $10$ terim toplamı $S_{10} = \\frac{10}{2}(a_1 + a_{10}) = 5(4 + 31) = 175$ olarak hesaplanır.",
            badge: "Aritmetik Dizi Ustası"
          },
          {
            title: "Aritmetik ve Geometrik Orta Özellikleri", subtitle: "Eşit Uzaklıktaki Terimler",
            exp: ["Aritmetik dizide her terim, kendisinden eşit uzaklıktaki iki terimin **aritmetik ortalamasıdır**: $a_k = \\frac{a_{k-p} + a_{k+p}}{2}$.", "Geometrik dizide ise her terimin karesi, kendisinden eşit uzaklıktaki iki terimin çarpımına eşittir: $a_k^2 = a_{k-p} \\cdot a_{k+p}$."],
            sent: "$a + c = 2b$ bağıntısı $a, b, c$ sayılarının bir {0} dizinin ardışık terimleri olduğunu gösterirken, $b^2 = a \\cdot c$ bağıntısı bir {1} diziyi gösterir.",
            blanks: [["aritmetik", ["aritmetik", "geometrik", "sabit"]], ["geometrik", ["aritmetik", "geometrik", "harmonik"]]],
            vTitle: "Ortanca Terim Kuralları",
            vNums: [["a_n = a_1 + (n-1)d", "Aritmetik genel terim", 1], ["a_n = a_1 · r^(n-1)", "Geometrik genel terim", 1]],
            vSum: "Aritmetik dizide toplamlar ($+$), geometrik dizide çarpımlar ($\\cdot$) simetriktir!",
            hint: "Toplama ortalaması aritmetik, çarpma ortalaması geometrik dizidir."
          },
          {
            title: "Geometrik Dizide Genel Terim ve Toplam", subtitle: "Ortak Çarpan ($r$) Analizi",
            steps: ["Ardışık terimleri oranı sabit olan diziye **geometrik dizi** denir: $\\frac{a_{n+1}}{a_n} = r$.", "Herhangi iki terim arasında $a_n = a_k \\cdot r^{n-k}$ ilişkisi her zaman geçerlidir.", "İlk $n$ terim toplamı ($r \\ne 1$ için) $S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$ formülüyle bulunur."],
            q: "$a_2 = 6$ ve $a_5 = 48$ olan bir geometrik dizinin ortak çarpanı $r$ kaçtır?",
            qc: ["$2$", "$3$", "$4$"],
            qa: "$2$",
            hint: "$a_5 = a_2 \\cdot r^3 \\implies 48 = 6 \\cdot r^3$ denkleminden $r$'yi çöz."
          },
          {
            title: "Geometrik Dizi Ardışık Terimler Sorusu", subtitle: "Orta Terim Karesi Özdeşliği",
            stem: "Pozitif terimli bir geometrik dizinin ardışık ilk üç terimi sırasıyla $x - 1$, $x + 1$ ve $x + 5$ olduğuna göre $x$ değeri kaçtır?",
            opts: ["$2$", "$3$", "$4$", "$5$"], ans: "B",
            hint: "Geometrik dizide ortadaki terimin karesi, iki yanındaki terimlerin çarpımına eşittir: $(x + 1)^2 = (x - 1)(x + 5)$.",
            sol: "$(x + 1)^2 = (x - 1)(x + 5) \\implies x^2 + 2x + 1 = x^2 + 4x - 5$. Buradan $6 = 2x \\implies x = 3$ bulunur. Terimler $2, 4, 8$ olup gerçekten $r = 2$ ortak çarpanlı pozitif bir geometrik dizidir.",
            badge: "Dizi Çözümleyicisi"
          }
        ]
      }),
      makeUnit({
        track: "12_okul", grade: 12, no: 3,
        title: "Trigonometri (Toplam-Fark, İki Kat Açı, Denklemler)",
        subtitle: "Açılımlar, Yarım/İki Kat Açı ve Genel Çözüm Kümeleri",
        desc: "İki açının toplam ve fark trigonometrik formüllerini, iki kat açı özdeşliklerini ve trigonometrik denklemlerin çözüm kümelerini kurarız.",
        coverImage: "assets/flow/u09_ucgenler.jpg",
        visuals: ["assets/flow/u09_ucgenler.jpg", "assets/flow/flow_sade_ders_konsept.jpg", "assets/flow/u11_donusum_geometrisi.jpg"],
        cells: ["sin(a+b)", "cos(a+b)", "tan(a+b)", "sin 2x", "cos 2x", "tan 2x", "Yarım Açı", "sin=sin", "cos=cos", "tan=tan", "Kökler", "Usta"],
        k: [
          ["Toplam ve Fark Formülleri", "12.3.1.1"],
          ["İki Kat Açı Formülleri", "12.3.1.2"],
          ["Trigonometrik Denklemler", "12.3.2.1"]
        ],
        s: [
          {
            title: "Toplam ve Fark Formüllerinin Yapısı", subtitle: "Sinüs Paylaşır, Kosinüs Bencildir!",
            exp: ["Sinüs toplam-fark formülü iki fonksiyonu karıştırır ve işareti korur: $\\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b$.", "Kosinüs ise kendi türünü yan yana toplar ama işareti **ters** çevirir: $\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b$."],
            sent: "$\\sin(a + b)$ açılımında aradaki işaret {0} kalırken, $\\cos(a + b)$ açılımında aradaki işaret {1} olur.",
            blanks: [["aynı", ["aynı", "ters", "sıfır"]], ["ters", ["aynı", "ters", "çift"]]],
            vTitle: "Toplam-Fark Özet Kartı",
            vNums: [["sin(a+b)", "sin·cos + cos·sin", 1], ["cos(a+b)", "cos·cos - sin·sin", 1], ["tan(a+b)", "(tan a + tan b)/(1 - tan a·tan b)", 0]],
            vSum: "$\\sin 75^\\circ$ veya $\\cos 15^\\circ$ gibi açıları $45^\\circ \\pm 30^\\circ$ diye parçalarız.",
            hint: "Sinüs 'uyumlu' (işaret aynı), kosinüs 'dik başlı' (işaret ters) davranır."
          },
          {
            title: "Tanjant Toplam-Fark ve Geometrik Uygulamalar", subtitle: "Dik Üçgen ve Köşe Açıları",
            steps: ["$\\tan(a + b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b}$ ve $\\tan(a - b) = \\frac{\\tan a - \\tan b}{1 + \\tan a\\tan b}$ bağıntıları birim kare ve dikdörtgen sorularında çok sık kullanılır.", "Bir açıyı iki dik üçgenin açılarının toplamı veya farkı olarak yazıp her dik üçgenden $\\tan$ değerini okuruz.", "Eğer iki taraftan da tanıdık toplam kalıbı geliyorsa ifadeyi tek bir $\\sin(a\\pm b)$ veya $\\cos(a\\pm b)$ altında toplayabiliriz."],
            q: "$\\sin 42^\\circ \\cos 18^\\circ + \\cos 42^\\circ \\sin 18^\\circ$ işleminin sonucu nedir?",
            qc: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{2}$"],
            qa: "$\\frac{\\sqrt{3}}{2}$",
            hint: "$\\sin a\\cos b + \\cos a\\sin b = \\sin(a + b)$ kalıbıyla $42^\\circ + 18^\\circ = 60^\\circ$ olur."
          },
          {
            title: "İki Kat Açı Özdeşliği Sorusu", subtitle: "Kare Alarak $\\sin 2x$ Bulma",
            stem: "$\\sin x + \\cos x = \\frac{\\sqrt{6}}{2}$ olduğuna göre $\\sin 2x$ değeri kaçtır?",
            opts: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$1$"], ans: "B",
            hint: "Eşitliğin her iki tarafının karesini al ve $\\sin^2 x + \\cos^2 x = 1$ ile $2\\sin x\\cos x = \\sin 2x$ özdeşliklerini kullan.",
            sol: "$(\\sin x + \\cos x)^2 = \\sin^2 x + \\cos^2 x + 2\\sin x\\cos x = 1 + \\sin 2x$ olur. Sağ tarafın karesi $\\left(\\frac{\\sqrt{6}}{2}\\right)^2 = \\frac{6}{4} = \\frac{3}{2}$'dir. Buradan $1 + \\sin 2x = \\frac{3}{2} \\implies \\sin 2x = \\frac{1}{2}$ bulunur.",
            badge: "İki Kat Açı Ustası"
          },
          {
            title: "$\\cos 2x$ İki Kat Açısının Üç Yüzü", subtitle: "$1$'leri Yok Etme Tekniği",
            exp: ["$\\cos(x + x)$ açılımından $\\cos 2x = \\cos^2 x - \\sin^2 x$ gelir. Temel özdeşlikle ($\\sin^2 x + \\cos^2 x = 1$) iki güçlü form daha elde ederiz:", "$\\cos 2x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$. Sadeleştirme sorularında yanındaki $+1$ veya $-1$'i yok edecek formu seçeriz!"],
            sent: "Soruda $1 - \\cos 2x$ ifadesi varsa $1$'i yok etmek için $2\\sin^2 x$ elde edilir; $1 + \\cos 2x$ varsa {0} elde edilir. $\\sin 2x$ ise {1} çarpımına eşittir.",
            blanks: [["iki kosinüs kare", ["iki kosinüs kare", "iki sinüs kare", "tanjant kare"]], ["iki sinüs kosinüs", ["iki sinüs kosinüs", "kosinüs kare", "bir"]]],
            vTitle: "İki Kat Açı Ailesi",
            vNums: [["sin 2x", "2·sin x·cos x", 1], ["cos 2x", "cos^2 x - sin^2 x", 1], ["tan 2x", "(2·tan x)/(1 - tan^2 x)", 0]],
            vSum: "Kosinüs yarım açıda $1 + \\cos 2x = 2\\cos^2 x$ hayat kurtarır.",
            hint: "$1 + (2\\cos^2 x - 1) = 2\\cos^2 x$ ve $\\sin 2x = 2\\sin x\\cos x$."
          },
          {
            title: "Temel Trigonometrik Denklemler", subtitle: "Genel Çözüm Aileleri",
            steps: ["$\\sin x = \\sin\\alpha$ denkleminin iki ailesi vardır: $x = \\alpha + 2k\\pi$ veya $x = (\\pi - \\alpha) + 2k\\pi$ ($k \\in \\mathbb{Z}$).", "$\\cos x = \\cos\\alpha$ denkleminin iki ailesi: $x = \\alpha + 2k\\pi$ veya $x = -\\alpha + 2k\\pi$.", "$\\tan x = \\tan\\alpha$ denkleminin tek ailesi vardır (periyodu $\\pi$): $x = \\alpha + k\\pi$."],
            q: "$[0, 2\\pi)$ aralığında $\\cos x = \\frac{1}{2}$ denkleminin kaç tane kökü vardır?",
            qc: ["1 kök", "2 kök", "4 kök"],
            qa: "2 kök",
            hint: "Kosinüs 1. ve 4. bölgede pozitif ($\\frac{1}{2}$) olur: $\\frac{\\pi}{3}$ ve $\\frac{5\\pi}{3}$."
          },
          {
            title: "İkinci Dereceden Trigonometrik Denklem Sorusu", subtitle: "Çarpanlara Ayırma ve Kök Toplamı",
            stem: "$x \\in [0, 2\\pi)$ olmak üzere $2\\sin^2 x - \\sin x - 1 = 0$ denklemini sağlayan $x$ değerlerinin toplamı kaç radyandır?",
            opts: ["$\\frac{5\\pi}{2}$", "$3\\pi$", "$\\frac{7\\pi}{2}$", "$4\\pi$"], ans: "C",
            hint: "$\\sin x = t$ yazıp $2t^2 - t - 1 = (2t + 1)(t - 1) = 0$ şeklinde çarpanlarına ayır ve $[0, 2\\pi)$ içindeki tüm açıları bul.",
            sol: "$(2\\sin x + 1)(\\sin x - 1) = 0$ olduğundan: 1) $\\sin x = 1 \\implies x = \\frac{\\pi}{2}$. 2) $\\sin x = -\\frac{1}{2} \\implies$ 3. ve 4. bölgede $x = \\frac{7\\pi}{6}$ ve $x = \\frac{11\\pi}{6}$. Kökler toplamı $\\frac{\\pi}{2} + \\frac{7\\pi}{6} + \\frac{11\\pi}{6} = \\frac{3\\pi + 18\\pi}{6} = \\frac{21\\pi}{6} = \\frac{7\\pi}{2}$ bulunur.",
            badge: "Trigonometri Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "12_okul", grade: 12, no: 4,
        title: "Limit ve Süreklilik",
        subtitle: "Sağ-Sol Limit, $0/0$ Belirsizliği ve Süreklilik Şartları",
        desc: "Bir noktada yaklaşım kavramını, parçalı fonksiyonlarda sağ-sol limit eşitliğini, $0/0$ belirsizliğini gidermeyi ve sürekliliği inceleriz.",
        coverImage: "assets/flow/u07_dogrusal_denklemler.jpg",
        visuals: ["assets/flow/u07_dogrusal_denklemler.jpg", "assets/flow/u06_cebirsel_ozdeslik.jpg", "assets/flow/flow_sade_ders_konsept.jpg"],
        cells: ["Yaklaşım", "Sağ Limit", "Sol Limit", "Varlık", "Parçalı", "0/0", "Çarpan", "Eşlenik", "Süreklilik", "Tanım", "Süreksiz", "Usta"],
        k: [
          ["Sağ-Sol Limit ve Limitin Varlığı", "12.5.1.1"],
          ["0/0 Belirsizliği", "12.5.1.3"],
          ["Fonksiyonların Sürekliliği", "12.5.2.1"]
        ],
        s: [
          {
            title: "Limit Yaklaşımdır, Nokta Değeri Değil!", subtitle: "Sağ ve Sol Limit",
            exp: ["Bir fonksiyonun $x = a$ noktasında limitinin var olması için **sol limit** ($\\lim_{x\\to a^-} f(x)$) ile **sağ limitin** ($\\lim_{x\\to a^+} f(x)$) birbirine **eşit** ve sonlu bir gerçel sayı olması gerekir.", "Önemli nokta: Limit bakılırken $x$ hiçbir zaman $a$'ya eşit kabul edilmez; sadece $a$'nın çok yakınına bakılır. Bu yüzden $f(a)$ değerinin farklı veya tanımsız olması limiti engellemez!"],
            sent: "$x = a$ noktasında limitin var olması için sağ ve sol limitlerin birbirine {0} olması şarttır; ancak limit değerinin $f(a)$ fonksiyon değerine eşit olması {1}.",
            blanks: [["eşit", ["eşit", "zıt", "büyük"]], ["gerekmez", ["gerekir", "gerekmez", "imkansızdır"]]],
            vTitle: "Limit Varlık Kriteri",
            vNums: [["x -> a-", "Soldan yaklaşım", 1], ["x -> a+", "Sağdan yaklaşım", 1], ["f(a)", "Limit için şart değil", 0]],
            vSum: "$\\lim_{x\\to a^-} f(x) = \\lim_{x\\to a^+} f(x) = L \\iff \\lim_{x\\to a} f(x) = L$.",
            hint: "Limit yoldaki gidişata bakar, duraktaki noktanın içi boş olsa bile yol aynı yere gidiyorsa limit vardır."
          },
          {
            title: "Parçalı ve Mutlak Değerli Fonksiyonlarda Limit", subtitle: "Kritik Nokta İncelemesi",
            steps: ["Polinom ve rasyonel fonksiyonlarda kritik olmayan noktalarda limit doğrudan değeri yerine yazarak bulunur.", "Parçalı, mutlak değerli veya paydası sıfır olan **kritik noktalarda** mutlaka sağdan ve soldan ayrı ayrı limit hesaplanır.", "Sağ ve sol limitler farklıysa o noktada limit **yoktur**."],
            q: "$f(x) = \\begin{cases} 2x + 1, & x \\lt 2 \\\\ x^2 + k, & x \\ge 2 \\end{cases}$ fonksiyonunun $x = 2$'de limiti varsa $k$ kaçtır?",
            qc: ["$0$", "$1$", "$3$"],
            qa: "$1$",
            hint: "Sol limit $2(2) + 1 = 5$ değerini sağ limit $2^2 + k = 4 + k$ değerine eşitle."
          },
          {
            title: "$0/0$ Belirsizliği Hesap Sorusu", subtitle: "Köklü İfadede Eşlenik Tekniği",
            stem: "$\\lim_{x \\to 3} \\frac{x^2 - 9}{\\sqrt{x + 1} - 2}$ limitinin değeri kaçtır?",
            opts: ["$6$", "$12$", "$18$", "$24$"], ans: "D",
            hint: "$x = 3$ yazınca $\\frac{0}{0}$ belirsizliği çıkar! Payı iki kare farkıyla $(x - 3)(x + 3)$ yaz, pay ve paydayı paydanın eşleniği $(\\sqrt{x + 1} + 2)$ ile çarp.",
            sol: "Pay ve paydayı $(\\sqrt{x + 1} + 2)$ ile çarpalım: payda $(\\sqrt{x + 1})^2 - 2^2 = x + 1 - 4 = x - 3$ olur. Paydaki $(x - 3)(x + 3)$ ile sadeleşince geriye $\\lim_{x \\to 3} (x + 3)(\\sqrt{x + 1} + 2) = (3 + 3)(2 + 2) = 6 \\cdot 4 = 24$ kalır.",
            badge: "Belirsizlik Çözücüsü"
          },
          {
            title: "$0/0$ Belirsizliğini Giderme Yöntemleri", subtitle: "Sadeleşen Kökü Yakala",
            exp: ["$x \\to a$ iken hem pay hem payda $0$ oluyorsa bu her ikisinin içinde $(x - a)$ çarpanı saklı olduğu anlamına gelir.", "Polinomlarda **çarpanlara ayırma**, köklü ifadelerde **eşlenikle çarpma** yaparak sıfır yapan çarpanları sadeleştirip yeniden yerine koyarız."],
            sent: "$\\frac{0}{0}$ belirsizliği ile karşılaştığımızda önce pay ve paydadaki {0} yapan ortak çarpanı {1} veya eşlenik çarpımıyla sadeleştiririz.",
            blanks: [["sıfır", ["bir", "sıfır", "sonsuz"]], ["çarpanlara ayırma", ["çarpanlara ayırma", "karekök alma", "yer değiştirme"]]],
            vTitle: "$0/0$ Kurtarma Çantası",
            vNums: [["a^2 - b^2", "(a - b)(a + b)", 1], ["sqrt(A) - B", "Eşleniği sqrt(A) + B", 1]],
            vSum: "Saklı $(x - a)$ çarpanı sadeleştiği anda belirsizlik ortadan kalkar!",
            hint: "Hem payı hem paydayı $0$ yapan çarpanı bulup götürmeliyiz."
          },
          {
            title: "Süreklilik Şartları", subtitle: "Üçlü Kontrol Zinciri",
            steps: ["$f$'nin $x = a$'da sürekli olması için 3 şart birlikte sağlanmalıdır: 1) $f(a)$ tanımlı, 2) $\\lim_{x\\to a} f(x)$ var, 3) $\\lim_{x\\to a} f(x) = f(a)$.", "Tanımsız yapan (örneğin paydasını sıfır yapan) noktalarda fonksiyon kesinlikle süreksizdir.", "Grafik üzerinde kalemi kaldırmadan çizilebilen bölgeler sürekli bölgelerdir."],
            q: "$f(x) = \\frac{x + 2}{x^2 - 5x + 6}$ fonksiyonu kaç farklı gerçek sayı noktasında süreksizdir?",
            qc: ["1 noktada", "2 noktada", "Hiçbir noktada"],
            qa: "2 noktada",
            hint: "Rasyonel fonksiyon paydanın $0$ olduğu noktalarda tanımsız ve süreksizdir: $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$."
          },
          {
            title: "Tüm Reel Sayılarda Süreklilik Sorusu", subtitle: "Diskriminant ile Payda Kontrolü",
            stem: "$f(x) = \\frac{3x - 1}{x^2 - 2ax + 9}$ fonksiyonu tüm reel sayılarda sürekli olduğuna göre $a$ tam sayısının alabileceği kaç farklı değer vardır?",
            opts: ["$3$", "$4$", "$5$", "$7$"], ans: "C",
            hint: "Kesrin tüm reel sayılarda sürekli olması için paydanın hiçbir gerçel kökü olmaması gerekir; yani $\\Delta \\lt 0$ olmalıdır.",
            sol: "Paydanın $0$ olmaması için $x^2 - 2ax + 9 = 0$ denkleminin reel kökü bulunmamalıdır: $\\Delta = (-2a)^2 - 4 \\cdot 1 \\cdot 9 = 4a^2 - 36 \\lt 0 \\implies a^2 \\lt 9 \\implies -3 \\lt a \\lt 3$. Bu aralıktaki tam sayılar $\\{-2, -1, 0, 1, 2\\}$ olmak üzere $5$ tanedir.",
            badge: "Limit ve Süreklilik Ustası"
          }
        ]
      }),
      makeUnit({
        track: "12_okul", grade: 12, no: 5,
        title: "Türev ve Uygulamaları",
        subtitle: "Anlık Değişim, Alma Kuralları, Teğet ve Ekstremum",
        desc: "Anlık değişim oranından türevi tanımlar, kuvvet/çarpım/bölüm/zincir kurallarıyla türev alır, teğet denklemi ve maksimum-minimum problemlerini çözeriz.",
        coverImage: "assets/flow/u06_cebirsel_ozdeslik.jpg",
        visuals: ["assets/flow/u06_cebirsel_ozdeslik.jpg", "assets/flow/u07_dogrusal_denklemler.jpg", "assets/flow/flow_sade_ders_konsept.jpg"],
        cells: ["Değişim", "Türev", "Teğet Eğimi", "Kuvvet", "Çarpım", "Bölüm", "Zincir", "Artan", "Azalan", "Ekstremum", "Optimizasyon", "Usta"],
        k: [
          ["Türev Tanımı ve Alma Kuralları", "12.5.3.1"],
          ["Bileşke Türevi ve Teğet Denklemi", "12.5.3.4"],
          ["Artan-Azalanlık ve Ekstremum Problemleri", "12.5.4.1"]
        ],
        s: [
          {
            title: "Türevin Anlamı ve Süreklilik İlişkisi", subtitle: "Anlık Hız ve Teğet Eğimi",
            exp: ["$f'(a) = \\lim_{h\\to 0} \\frac{f(a+h) - f(a)}{h}$ limiti fonksiyonun $x = a$ noktasındaki **anlık değişim oranını** ve grafiğe çizilen **teğetin eğimini** verir.", "Bir fonksiyon $x = a$ noktasında türevlenebilir ise o noktada mutlaka **süreklidir**; ancak sürekli her fonksiyon (örneğin mutlak değer köşesi gibi sivri/kırılma noktalarında) türevlenebilir olmayabilir."],
            sent: "$f'(a)$ değeri grafiğin $x = a$ apsisli noktasındaki {0} verir. Bir noktada türevli olan her fonksiyon o noktada kesinlikle {1}.",
            blanks: [["teğetin eğimini", ["teğetin eğimini", "alanın yarısını", "kök sayısını"]], ["süreklidir", ["tanımsızdır", "süreklidir", "sabittir"]]],
            vTitle: "Türev - Süreklilik Zinciri",
            vNums: [["Türevli => Sürekli", "Her zaman doğru", 1], ["Kırılma Noktası", "Sürekli ama türevsiz", 0], ["f'(a) = m_t", "Teğet eğimi", 1]],
            vSum: "Sivri uçta sağ ve sol teğet eğimleri farklı olduğu için türev yoktur!",
            hint: "Türev teğet eğimidir; türevlilik için önce sürekli olup sağ-sol türevlerin eşit olması gerekir."
          },
          {
            title: "Temel Türev Alma Kuralları", subtitle: "Sabit, Kuvvet, Çarpım ve Bölüm",
            steps: ["Sabitin türevi $0$, kuvvet kuralı $(x^n)' = n \\cdot x^{n-1}$ biçimindedir.", "Çarpım türevi: $(f \\cdot g)' = f'g + fg'$; Bölüm türevi: $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$.", "Köklü ifadelerde $( \\sqrt{x} )' = \\frac{1}{2\\sqrt{x}}$ kısayolu çok zaman kazandırır."],
            q: "$f(x) = 3x^4 - 5x^2 + 7x - 9$ olduğuna göre $f'(1)$ değeri kaçtır?",
            qc: ["$6$", "$9$", "$14$"],
            qa: "$9$",
            hint: "Terim terim türev al: $f'(x) = 12x^3 - 10x + 7$, sonra $x = 1$ yaz."
          },
          {
            title: "Zincir Kuralı ve Teğet Denklemi Sorusu", subtitle: "$y - f(a) = f'(a)(x - a)$",
            stem: "$f(x) = (2x - 1)^3$ eğrisine $x = 1$ apsisli noktasından çizilen teğet doğrusunun denklemi aşağıdakilerden hangisidir?",
            opts: ["$y = 6x - 5$", "$y = 6x + 5$", "$y = 3x - 2$", "$y = 2x - 1$"], ans: "A",
            hint: "Önce değme noktasını ($1, f(1)$) bul; sonra bileşke (zincir) kuralıyla $f'(x) = 3(2x-1)^2 \\cdot 2$ yazıp $f'(1)$ eğimini hesapla.",
            sol: "Değme noktası için $f(1) = (2(1) - 1)^3 = 1$, yani nokta $(1, 1)$'dir. Zincir kuralıyla $f'(x) = 3(2x - 1)^2 \\cdot 2 = 6(2x - 1)^2$ bulunur. $x = 1$ için teğet eğimi $m = f'(1) = 6(1)^2 = 6$'dır. Doğru denklemi $y - 1 = 6(x - 1) \\implies y = 6x - 5$ olur.",
            badge: "Teğet Eğimi Ustası"
          },
          {
            title: "Birinci Türevle Artan-Azalanlık İncelemesi", subtitle: "$f'(x)$ İşaret Tablosu",
            exp: ["Bir aralıkta $f'(x) \\gt 0$ ise teğet eğimleri pozitiftir ve $f$ fonksiyonu o aralıkta **artan**dır.", "Aynı şekilde $f'(x) \\lt 0$ olduğu aralıklarda teğet eğimleri negatiftir ve $f$ fonksiyonu **azalan**dır. $f'$'in $+$'dan $-$'ye geçtiği noktada yerel maksimum, $-$'den $+$'ya geçtiği noktada yerel minimum oluşur."],
            sent: "Bir aralıkta birinci türev $f'(x) \\gt 0$ ise fonksiyon o aralıkta {0}; $f'(x) \\lt 0$ ise o aralıkta {1} özellik gösterir.",
            blanks: [["artan", ["artan", "azalan", "sabit"]], ["azalan", ["artan", "azalan", "tanımsız"]]],
            vTitle: "Türev İşaret Tablosu",
            vNums: [["f' > 0", "f artan (yukarı)", 1], ["f' < 0", "f azalan (aşağı)", 1], ["+ -> -", "Yerel maksimum tepe", 0]],
            vSum: "Ekstremum için $f'(c) = 0$ tek başına yetmez; işaret değişimi şarttır!",
            hint: "Pozitif eğim yokuş yukarı (artan), negatif eğim yokuş aşağı (azalan) demektir."
          },
          {
            title: "Maksimum-Minimum Optimizasyon Problemleri", subtitle: "Tek Değişkene İndirip Türevi Sıfırla",
            steps: ["En büyük veya en küçük olması istenen büyüklüğü tek bir değişken cinsinden $A(x)$ fonksiyonu olarak yaz.", "Verilen kısıtlamayı (örneğin çevre, toplam vb.) kullanarak ikinci değişkeni yok et.", "Türevi $A'(x) = 0$ yapan kritik değeri bulup istenen en büyük/küçük değeri hesapla."],
            q: "Çevresi $40\\text{ cm}$ olan bir dikdörtgenin alanı en çok kaç $\\text{cm}^2$ olabilir?",
            qc: ["$80$", "$96$", "$100$"],
            qa: "$100$",
            hint: "Kenarlar $x$ ve $20 - x$ olur; $A(x) = 20x - x^2$ fonksiyonunun türevini $0$'a eşitle."
          },
          {
            title: "Yerel Ekstremum Değeri Sorusu", subtitle: "Üçüncü Derece Polinomda Yerel Minimum",
            stem: "$f(x) = x^3 - 3x^2 - 9x + 5$ fonksiyonunun **yerel minimum değeri** kaçtır?",
            opts: ["$-27$", "$-22$", "$-10$", "$10$"], ans: "B",
            hint: "$f'(x) = 0$ denkleminin köklerini bul ve işaret tablosuyla hangisinde $- \\to +$ geçişi (yerel minimum) olduğunu belirle.",
            sol: "$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) = 0 \\implies x = -1$ ve $x = 3$ kökleri bulunur. Başkatsayı pozitif olduğundan işaret $+, -, +$ gider: $x = -1$'de yerel maksimum, $x = 3$'te ($- \\to +$) yerel minimum vardır. Yerel minimum değeri $f(3) = 3^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$ bulunur.",
            badge: "Türev Uygulamaları Fatihi"
          }
        ]
      }),
      makeUnit({
        track: "12_okul", grade: 12, no: 6,
        title: "İntegral ve Alan Hesabı",
        subtitle: "Belirsiz İntegral, Değişken Değiştirme ve Eğri Altı Alan",
        desc: "Türevin tersi olan belirsiz integrali kavrar, $u$-değişken değiştirme tekniğini uygular, belirli integral ile eğri ve doğrular arasında kalan alanları hesaplarız.",
        coverImage: "assets/flow/u12_geometrik_cisimler.jpg",
        visuals: ["assets/flow/u12_geometrik_cisimler.jpg", "assets/flow/flow_sade_ders_konsept.jpg", "assets/flow/u09_ucgenler.jpg"],
        cells: ["Belirsiz", "Sabit +c", "Kuvvet", "u-Dönüşüm", "Riemann", "Belirli", "Sınırlar", "Simetri", "Üst Alan", "Alt Alan", "İki Eğri", "Mezun"],
        k: [
          ["Belirsiz İntegral ve Değişken Değiştirme", "12.6.1.1"],
          ["Belirli İntegral ve Temel Teorem", "12.6.2.1"],
          ["İntegral ile Alan Hesabı", "12.6.3.1"]
        ],
        s: [
          {
            title: "Türevin Tersi: Belirsiz İntegral", subtitle: "$\\int f'(x)\\,dx = f(x) + c$",
            exp: ["Türevi verilen bir fonksiyonun kendisini bulma işlemine **belirsiz integral (ters türev)** denir: $\\int F'(x)\\,dx = F(x) + c$.", "Sabitin türevi $0$ olduğu için belirsiz integralin sonuna mutlaka bir **integral sabiti** ($+c$) eklenir! Kuvvet kuralı: $n \\ne -1$ için $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c$."],
            sent: "Belirsiz integral alma işlemi türev almanın {0} işlemidir; farklı sabitlerin türevi sıfır olduğundan sonuca mutlaka $+c$ adı verilen integral {1} eklenir.",
            blanks: [["ters", ["aynı", "ters", "karesi"]], ["sabiti", ["sabiti", "değişkeni", "katsayısı"]]],
            vTitle: "Türev ve İntegral Köprüsü",
            vNums: [["d/dx (x^3 + 5)", "3x^2", 0], ["int 3x^2 dx", "x^3 + c", 1], ["x^n kuralı", "Üssü 1 artır, yeni üsse böl", 1]],
            vSum: "İntegral sonucunun doğru olup olmadığını tekrar türev alarak hemen test edebilirsin!",
            hint: "Türevde üs çarpılıp $1$ azalır; integralde tersi yapılır: üs $1$ artar ve yeni üsse bölünür."
          },
          {
            title: "Değişken Değiştirme ($u$-Dönüşümü)", subtitle: "Zincir Kuralının Tersi",
            steps: ["İntegral içinde hem bir $g(x)$ ifadesi hem de onun türevi $g'(x)$ çarpım halindeyse $u = g(x)$ dönüşümü yapılır.", "İki tarafın diferansiyeli alınır: $du = g'(x)\\,dx$. Böylece karmaşık ifade basit $\\int u^n\\,du$ formuna döner.", "Sonuç bulunduktan sonra $u$ yerine tekrar ilk $g(x)$ ifadesi yazılır (belirli integralde sınırlar da değiştirilir)."],
            q: "$\\int (6x^2 + 4x - 1)\\,dx$ belirsiz integrali aşağıdakilerden hangisidir?",
            qc: ["$2x^3 + 2x^2 - x + c$", "$6x^3 + 4x^2 - x + c$", "$12x + 4 + c$"],
            qa: "$2x^3 + 2x^2 - x + c$",
            hint: "Her terimin üssünü $1$ artırıp yeni üsse böl: $6\\frac{x^3}{3} + 4\\frac{x^2}{2} - x + c$."
          },
          {
            title: "Belirli İntegralde $u$-Dönüşümü Sorusu", subtitle: "Sınırları Güncelleyerek Hesap",
            stem: "$\\int_{0}^{\\sqrt{7}} 3x\\sqrt{x^2 + 9}\\,dx$ belirli integralinin değeri kaçtır?",
            opts: ["$27$", "$37$", "$49$", "$64$"], ans: "B",
            hint: "$x^2 + 9 = u$ dönüşümü yap ($2x\\,dx = du \\implies x\\,dx = \\frac{du}{2}$) ve $x = 0$ ile $x = \\sqrt{7}$ sınırlarını $u$ cinsine çevir.",
            sol: "$u = x^2 + 9$ dersek $du = 2x\\,dx \\implies 3x\\,dx = \\frac{3}{2}\\,du$ olur. Yeni sınırlar: $x = 0 \\to u = 9$ ve $x = \\sqrt{7} \\to u = 7 + 9 = 16$. İntegral $\\frac{3}{2}\\int_{9}^{16} u^{1/2}\\,du = \\frac{3}{2} \\cdot \\frac{2}{3} \\left[u^{3/2}\\right]_{9}^{16} = 16^{3/2} - 9^{3/2} = 64 - 27 = 37$ bulunur.",
            badge: "Belirli İntegral Ustası"
          },
          {
            title: "Belirli İntegral ve Temel Özellikleri", subtitle: "Newton-Leibniz Teoremi",
            exp: ["$F'(x) = f(x)$ olmak üzere $\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$ eşitliğiyle hesaplanan sabit sayıya **belirli integral** denir.", "Sınırlar aynıysa ($\\int_a^a f(x)\\,dx$) sonuç $0$'dır; sınırlar yer değiştirirse integralin işareti değişir: $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$."],
            sent: "Belirli integralde alt ve üst sınırlar birbirine eşitse sonuç {0} olur; alt ve üst sınırlar yer değiştirdiğinde ise integralin {1} tersine döner.",
            blanks: [["sıfır", ["sıfır", "bir", "sonsuz"]], ["işareti", ["işareti", "derecesi", "değişkeni"]]],
            vTitle: "Belirli İntegral Kuralları",
            vNums: [["F(b) - F(a)", "Temel integral teoremi", 1], ["a = b", "İntegral değeri 0", 0], ["Tek f, [-a,a]", "Simetrik aralıkta 0", 1]],
            vSum: "Belirli integral sonucunda $+c$ sabitleri $F(b)+c - (F(a)+c)$ içinde birbirini götürür!",
            hint: "Genişliği sıfır olan aralığın alanı sıfırdır; ters yönde toplama eksi işaret getirir."
          },
          {
            title: "İntegral ile Alan Paylaşımı", subtitle: "Eksen Altı-Üstü ve İki Eğri Arası",
            steps: ["$[a, b]$ aralığında $x$-ekseninin **üstündeki** bölgenin alanı $+\\int_a^b f(x)\\,dx$, **altındaki** bölgenin alanı ise $-\\int_a^b f(x)\\,dx$ ile bulunur.", "İki eğri $y = f(x)$ (üstte) ve $y = g(x)$ (altta) arasında kalan kapalı alan için önce kesişim apsisleri ($f(x) = g(x)$) bulunur.", "Sonra Alan $= \\int_{a}^{b} \\big(f_{\\text{üst}}(x) - g_{\\text{alt}}(x)\\big)\\,dx$ integrali hesaplanır."],
            q: "$y = 3x^2$ eğrisi, $x$-ekseni, $x = 0$ ve $x = 2$ doğruları arasında kalan kapalı bölgenin alanı kaç birimkaredir?",
            qc: ["$4$", "$6$", "$8$"],
            qa: "$8$",
            hint: "$\\int_0^2 3x^2\\,dx = [x^3]_0^2$ işlemini hesapla."
          },
          {
            title: "İki Eğri Arasındaki Alan Sorusu", subtitle: "Parabol ile Doğru Kesişimi",
            stem: "Dik koordinat düzleminde $y = x^2$ parabolü ile $y = 2x$ doğrusu arasında kalan sınırlı bölgenin alanı kaç birimkaredir?",
            opts: ["$\\frac{2}{3}$", "$\\frac{4}{3}$", "$2$", "$\\frac{8}{3}$"], ans: "B",
            hint: "Önce $x^2 = 2x$ eşitliğinden kesişim noktalarını ($0$ ve $2$) bul; $[0, 2]$ aralığında $y = 2x$ doğrusunun üstte olduğuna dikkat et.",
            sol: "Kesişim apsisleri $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0$ ve $x = 2$'dir. $x = 1$ için $2x = 2 \\gt 1 = x^2$ olduğundan doğru üsttedir. Alan $= \\int_{0}^{2} (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_{0}^{2} = \\left(4 - \\frac{8}{3}\\right) - 0 = \\frac{4}{3}$ birimkare bulunur.",
            badge: "12. Sınıf Mezunu"
          }
        ]
      })
    ],
    "12_yks": [
      makeUnit({
        track: "12_yks", grade: 12, no: 1,
        title: "(TYT) Temel Kavramlar, Basamak Analizi ve Bölünebilme",
        subtitle: "Tek-Çift, Çözümleme, Bölme Kuralları ve Periyodik Problemler",
        desc: "ÖSYM TYT'nin temelini oluşturan tek-çift analizini, basamak çözümlemeyi, bölünebilme kurallarını ve periyodik tekrar sorularını hız ve doğruluk odaklı çalışırız.",
        coverImage: "assets/flow/kapak_carpanlar_katlar.jpg",
        visuals: ["assets/flow/kapak_carpanlar_katlar.jpg", "assets/flow/k1_carpan_bloklari.jpg", "assets/flow/k4_ekok_disliler.jpg"],
        cells: ["Tek-Çift", "Ardışık", "Asal", "Çözümleme", "Kalan", "15 ile Böl.", "36 ile Böl.", "EBOB", "EKOK", "Periyot", "TYT Hız", "Usta"],
        k: [
          ["Tek-Çift ve Ardışık Sayılar", "TYT.SAY.1"],
          ["Basamak Analizi ve Bölünebilme", "TYT.SAY.2"],
          ["EBOB-EKOK ve Periyodik Problemler", "TYT.SAY.3"]
        ],
        s: [
          {
            title: "TYT Tek-Çift ve Ardışık Sayı Analizi", subtitle: "ÖSYM Tarzı Kesinlik Yorumları",
            exp: ["Tek ve çift tam sayılarda: **Tek + Tek = Çift**, **Tek · Tek = Tek**, bir çarpımda en az bir **Çift** varsa çarpım kesin **Çift**tir!", "Dikkat: $a^b$ ifadesinde üs $b = 0$ veya negatif olabileceğinden, $a, b \\in \\mathbb{Z}^+$ denmedikçe $2^a$ her zaman çift olmayabilir ($2^0 = 1$ tektir!)."],
            sent: "İki tam sayının çarpımı tek ise çarpanların ikisi de kesinlikle {0} sayıdır; çarpım çift ise çarpanlardan {1} çift olması yeterlidir.",
            blanks: [["tek", ["tek", "çift", "asal"]], ["en az birinin", ["ikisinin de", "en az birinin", "büyüğünün"]]],
            vTitle: "TYT ÖSYM Uyarı Kartı",
            vNums: [["T ± T = Ç", "Aynı tür toplam çift", 0], ["T · T = T", "Çarpım tekse hepsi tek", 1], ["2^0 = 1", "Üs 0 olunca tek olur!", 1]],
            vSum: "'Her zaman doğrudur' sorularında önce $0$ ve negatif değerleri test et!",
            hint: "Tek sonuç veren tek çarpma biçimi Tek × Tek'tir."
          },
          {
            title: "Basamak Çözümleme Stratejileri", subtitle: "$\\overline{ab} = 10a + b$",
            steps: ["İki basamaklı $\\overline{ab}$ sayısı $10a + b$, üç basamaklı $\\overline{abc}$ sayısı $100a + 10b + c$ diye çözümlenir.", "$\\overline{ab} + \\overline{ba} = 11(a + b)$ ve $\\overline{ab} - \\overline{ba} = 9(a - b)$ kalıpları TYT'de sıkça zaman kazandırır.", "Baş harflerin (en soldaki rakamların) sıfır olamayacağını ($a \\ne 0, b \\ne 0$) unutma."],
            q: "Rakamları yer değiştirildiğinde değeri $45$ azalan iki basamaklı $\\overline{ab}$ sayısı için $a - b$ farkı kaçtır?",
            qc: ["$4$", "$5$", "$6$"],
            qa: "$5$",
            hint: "$\\overline{ab} - \\overline{ba} = 9(a - b) = 45$ eşitliğini kullan."
          },
          {
            title: "TYT Bölünebilme Kalan Sorusu", subtitle: "15 İle Bölümden Kalan $2$",
            stem: "Dört basamaklı $\\overline{3A4B}$ sayısının $15$ ile bölümünden kalan $2$ olduğuna göre $A$'nın alabileceği **en büyük** değer kaçtır?",
            opts: ["$6$", "$7$", "$8$", "$9$"], ans: "D",
            hint: "$15 = 3 \\times 5$ olduğundan önce $5$ ile bölümden kalanın $2$ olmasından $B$'yi bul ($B \\in \\{2, 7\\}$); sonra $3$ ile bölümden kalanın $2$ olmasını incele.",
            sol: "$\\overline{3A4B}$'nin $5$ ile bölümünden kalan $2$ ise $B = 2$ veya $B = 7$ olabilir. $3$ ile bölümünden kalan $2$ olması için rakamlar toplamı $3k + 2$ olmalıdır: 1) $B = 2$ ise $9 + A = 3k + 2 \\implies A \\in \\{2, 5, 8\\}$. 2) $B = 7$ ise $14 + A = 3k + 2 \\implies A \\in \\{0, 3, 6, 9\\}$. Dolayısıyla $A$'nın en büyük değeri $9$'dur ($3947 = 15 \\cdot 263 + 2$).",
            badge: "TYT Sayı Avcısı"
          },
          {
            title: "Periyodik Tekrar ve Modüler Mantık", subtitle: "Gün ve Nöbet Çevrimleri",
            exp: ["Haftanın günleri $7$ günde bir, saatler $24$ saatte bir, şekil dizileri ise grup uzunluğu kadar adımda bir başa döner.", "Sorulan toplam adım sayısı periyoda bölünür ve yalnızca **kalan** kadar ileri (veya geçmiş soruluyorsa geri) sayılır."],
            sent: "Haftanın günleri {0} günde bir başa döndüğünden $N$ gün sonrasını bulmak için $N$'nin bu sayıya bölümünden elde edilen {1} kadar ileri sayılır.",
            blanks: [["yedi", ["beş", "yedi", "on"]], ["kalan", ["bölüm", "kalan", "toplam"]]],
            vTitle: "Periyot Hızlı Hesap",
            vNums: [["100 mod 7 = 2", "14 hafta + 2 gün", 1], ["kalan = 0", "Aynı güne denk gelir", 0]],
            vSum: "Saymaya daima verilen başlangıç gününü $0$ alarak kalan gün kadar ekle!",
            hint: "Bir haftada $7$ gün var; tam haftalar günü değiştirmez, sadece artan kalan değiştirir."
          },
          {
            title: "Gün Hesabı Hızlı Kontrolü", subtitle: "Kalan Kadar İlerle",
            steps: ["Önce geçecek tam gün sayısını $7$'ye bölüp kalanı bul.", "İleri bir tarih soruluyorsa kalan kadar ileri, geçmiş soruluyorsa geri git.", "Kalan $0$ ise gün değişmeden aynı kalır."],
            q: "Bugün günlerden Salı ise $100$ gün sonra hangi gün olur?",
            qc: ["Çarşamba", "Perşembe", "Cuma"],
            qa: "Perşembe",
            hint: "$100 = 7 \\cdot 14 + 2$ olduğundan Salı'dan $2$ gün ileri say."
          },
          {
            title: "ÖSYM Tarzı Nöbet EKOK Sorusu", subtitle: "İlk Nöbet Sayılır Mı Tuzağı!",
            stem: "İki hemşireden biri $6$ günde bir, diğeri $8$ günde bir nöbet tutmaktadır. İkisi **birlikte ilk kez Pazar günü** nöbet tuttuklarına göre, birlikte tuttukları **$3.$ nöbet** hangi güne denk gelir?",
            opts: ["Cuma", "Cumartesi", "Pazartesi", "Salı"], ans: "B",
            hint: "Birlikte nöbet periyodu $\\text{EKOK}(6, 8) = 24$ gündür. Dikkat: $1.$ nöbet bugün (Pazar) tutulduğuna göre $3.$ nöbet için $3$ periyot değil, $2$ periyot ($48$ gün) geçer!",
            sol: "İki hemşire $\\text{EKOK}(6, 8) = 24$ günde bir birlikte nöbet tutar. $1.$ birlikte nöbet Pazar günü tutulduğundan $2.$ nöbet $24$ gün sonra, $3.$ nöbet ise $2 \\times 24 = 48$ gün sonra tutulur. $48 = 7 \\cdot 6 + 6$ olduğundan Pazar gününden $6$ gün ileri gidilirse (veya $1$ gün geri gelinirse) **Cumartesi** bulunur.",
            badge: "TYT Temel Ustası"
          }
        ]
      }),
      makeUnit({
        track: "12_yks", grade: 12, no: 2,
        title: "(TYT) Oran-Orantı, Yüzde, Hareket ve Sayı Problemleri",
        subtitle: "EKOK Kesir Atama, Kâr-Zarar, Karışım ve Hız-İşçi Modelleri",
        desc: "TYT sınavının en büyük soru ağırlığını oluşturan problem türlerini hızlı kesir atama, saf madde koruma ve bağıl hız modelleriyle çözeriz.",
        coverImage: "assets/flow/u04_veri_analizi.jpg",
        visuals: ["assets/flow/u04_veri_analizi.jpg", "assets/flow/k3_ebob_atolye.jpg", "assets/flow/u07_dogrusal_denklemler.jpg"],
        cells: ["Oran k", "EKOK Bütün", "Yüzde", "Kâr-Zarar", "Karışım", "Zıt Hız", "Aynı Hız", "Ort. Hız", "Tren", "İşçi", "Yaş", "Usta"],
        k: [
          ["Oran-Orantı ve Kesir Problemleri", "TYT.PROB.1"],
          ["Yüzde, Kâr-Zarar ve Karışım", "TYT.PROB.2"],
          ["Hareket ve İşçi Problemleri", "TYT.PROB.3"]
        ],
        s: [
          {
            title: "Kesir Problemlerinde Kesirsiz Çözüm Taktikleri", subtitle: "Paydaların EKOK'unu Bütüne Ver!",
            exp: ["Bir soruda bir sayının $\\frac{1}{3}$'ü ve kalanın $\\frac{1}{4}$'ü gibi ifadeler geçiyorsa bütüne $x$ demek yerine paydaların çarpımı/EKOK'u olan $12k$ vermek rasyonel işlemlerden kurtarır!", "Yaş problemlerinde ise hangi yıla gidilirse gidilsin iki kişi arasındaki **yaş farkının değişmediği** gerçeği kilit anahtardır."],
            sent: "Kesir sorularında bütüne paydaların {0} değerinin katını ($12k$ gibi) atamak kesirlerle uğraşmayı önler. Yaş sorularında zaman ilerledikçe iki kişinin yaş {1} asla değişmez.",
            blanks: [["EKOK", ["EBOB", "EKOK", "toplam"]], ["farkı", ["oranı", "farkı", "toplamı"]]],
            vTitle: "Problem Kurma Anahtarları",
            vNums: [["12k", "1/3 ve 1/4 için rahat bütün", 1], ["Yaş Farkı = Sabit", "Her yıl aynı kalır", 1]],
            vSum: "Problemin tamamını okumadan denklem kurmaya başlama; bilinmeyen sayısını az tut!",
            hint: "Paydaları bölen sayı EKOK'tur; yıllar geçse de herkes aynı yaşlandığından fark sabit kalır."
          },
          {
            title: "Oran-Orantı Sabit $k$ Tekniği", subtitle: "Doğru ve Ters Orantı",
            steps: ["$\\frac{a}{b} = \\frac{3}{5}$ verildiğinde doğrudan $a = 3k$, $b = 5k$ yazılır.", "Doğru orantıda çoklukların bölümü ($\\frac{x}{y}=k$), ters orantıda ise çarpımı ($x\\cdot y = k$) sabittir.", "Bileşik orantıda $( \\text{Yapılan İş}_1 ) / ( \\text{Diğer Çarpanlar}_1 ) = ( \\text{Yapılan İş}_2 ) / ( \\text{Diğer Çarpanlar}_2 )$ formülü tüm iş-işçi sorularını tek satırda çözer."],
            q: "Bir sınıfta kız öğrencilerin erkek öğrencilere oranı $\\frac{3}{5}$ ve sınıf mevcudu $32$ ise kaç kız öğrenci vardır?",
            qc: ["$12$", "$15$", "$20$"],
            qa: "$12$",
            hint: "Kız $3k$, erkek $5k \\implies 3k + 5k = 32$ denkleminden $k$'yi bul."
          },
          {
            title: "ÖSYM Tarzı Yüzde Değişim Sorusu", subtitle: "Önce İndirim Sonra Zam ($100$ Modeli)",
            stem: "Bir mağaza bir ürünün etiket fiyatı üzerinden önce $\\%20$ indirim yapıyor, ardından indirimli fiyat üzerinden $\\%25$ zam yapıyor. Son fiyatın ilk etiket fiyatına göre değişimi nedir?",
            opts: ["$\\%5$ zarar", "Değişmez", "$\\%5$ kâr", "$\\%10$ kâr"], ans: "B",
            hint: "İlk etiket fiyatını $100\\text{ TL}$ kabul et! İndirim sonrası $80\\text{ TL}$'nin $\\%25$'ini (dörtte birini) ekleyince kaça ulaşılıyor?",
            sol: "İlk fiyat $100\\text{ TL}$ olsun. $\\%20$ indirimle fiyat $100 - 20 = 80\\text{ TL}$'ye düşer. İndirimli $80\\text{ TL}$'ye $\\%25$ zam yapılırsa $80 \\cdot \\frac{25}{100} = 20\\text{ TL}$ artar ve son fiyat $80 + 20 = 100\\text{ TL}$ olur. Yani fiyat **değişmez**.",
            badge: "Yüzde ve Oran Ustası"
          },
          {
            title: "Karışım Problemlerinde Saf Madde Yasası", subtitle: "$m_1 c_1 + m_2 c_2 = m_{\\text{son}} c_{\\text{son}}$",
            exp: ["Farklı oranlardaki iki tuzlu/şekerli su karıştırıldığında **toplam saf madde miktarı** korunur.", "Saf su eklenirse eklenen suyun tuz yüzdesi **$\\mathbf{0}$**, saf tuz eklenirse eklenen tuzun tuz yüzdesi **$\\mathbf{100}$** alınır; buharlaşma olursa ekleme yerine çıkarma (saf su %0) yapılır!"],
            sent: "Karışıma saf su eklendiğinde eklenen miktarın şeker yüzdesi {0}, saf şeker eklendiğinde ise şeker yüzdesi {1} kabul edilir.",
            blanks: [["sıfır", ["sıfır", "elli", "yüz"]], ["yüz", ["sıfır", "elli", "yüz"]]],
            vTitle: "Karışım Altın Formülü",
            vNums: [["Saf Su", "%0 tuz / şeker", 0], ["Saf Tuz", "%100 tuz", 1], ["Buharlaşma", "Yalnızca su eksilir (-)", 1]],
            vSum: "Bir karışımdan homojen bir kısım dökülürse oranı ($c\\%$) asla değişmez!",
            hint: "Saf suda hiç tuz yoktur ($0\\%$), saf tuzun tamamı tuzdur ($100\\%$)."
          },
          {
            title: "Hareket Problemleri ve Ortalama Hız Tuzağı", subtitle: "$V_{\\text{ort}} = \\frac{\\text{Toplam Yol}}{\\text{Toplam Zaman}}$",
            steps: ["Zıt yönde hareket eden iki aracın birbirine yaklaşma/uzaklaşma hızı $v_1 + v_2$; aynı yönde gidenlerde hız farkı $|v_1 - v_2|$ alınır.", "Ortalama hız asla hızların aritmetik ortalaması ($\\frac{v_1+v_2}{2}$) DEĞİLDİR! Daima $\\frac{\\text{Toplam Yol}}{\\text{Toplam Zaman}}$ hesaplanır.", "Yol bilinmiyorsa hızların EKOK'u olan rahat bir yol uzunluğu seçilir."],
            q: "A'dan B'ye $60\\text{ km/sa}$ hızla gidip hiç durmadan aynı yoldan $40\\text{ km/sa}$ hızla dönen bir aracın gidiş-dönüş **ortalama hızı** kaç $\\text{km/sa}$'tir?",
            qc: ["$48$", "$50$", "$52$"],
            qa: "$48$",
            hint: "Yol $120\\text{ km}$ olsun: gidiş $2$ saat, dönüş $3$ saat sürer. Toplam yol $240\\text{ km}$, toplam süre $5$ saat!"
          },
          {
            title: "İşçi Problemi EKOK Modeli Sorusu", subtitle: "Kapasite Atama Tekniği",
            stem: "Bir işi tek başına Ali $12$ günde, Veli $18$ günde bitirebilmektedir. İkisi birlikte $4$ gün çalıştıktan sonra Ali işi bırakıyor. Kalan işi Veli tek başına kaç günde bitirir?",
            opts: ["$6$", "$7$", "$8$", "$9$"], ans: "C",
            hint: "İşin tamamına $\\text{EKOK}(12, 18) = 36k$ birim de! Ali günde $3k$, Veli günde $2k$ iş yapar.",
            sol: "İş $= 36k$ birim olsun. Ali'nin günlük işi $\\frac{36k}{12} = 3k$, Veli'nin günlük işi $\\frac{36k}{18} = 2k$'dır. Birlikte $4$ günde $(3k + 2k) \\cdot 4 = 20k$ iş yaparlar. Kalan iş $36k - 20k = 16k$ olur. Veli kalan işi tek başına $\\frac{16k}{2k} = 8$ günde bitirir.",
            badge: "TYT Problem Fatihi"
          }
        ]
      }),
      makeUnit({
        track: "12_yks", grade: 12, no: 3,
        title: "(AYT) Polinomlar, 2. Derece Denklemler ve Parabol",
        subtitle: "Kalan Teoremi, Kök-Katsayı İlişkileri, Parabol ve Eşitsizlik",
        desc: "AYT cebirin temel direkleri olan polinom bölme, diskriminant ve kök ilişkileri, parabol tepe noktası ile işaret tablosu eşitsizliklerini pekiştiririz.",
        coverImage: "assets/flow/u08_esitsizlikler.jpg",
        visuals: ["assets/flow/u08_esitsizlikler.jpg", "assets/flow/u06_cebirsel_ozdeslik.jpg", "assets/flow/flow_sade_ders_konsept.jpg"],
        cells: ["Polinom", "P(1)/P(0)", "Kalan", "Delta", "x1+x2", "x1·x2", "Parabol", "Tepe", "Simetri", "Tablo", "Çift Kök", "Usta"],
        k: [
          ["Polinomlar ve Kalan Teoremi", "AYT.CEB.1"],
          ["Kök-Katsayı İlişkileri ve Diskriminant", "AYT.CEB.2"],
          ["Parabol ve İkinci Derece Eşitsizlikler", "AYT.CEB.3"]
        ],
        s: [
          {
            title: "Polinom Olma Şartı ve Özel Değerler", subtitle: "Üsler Doğal Sayı, $P(1)$ ve $P(0)$",
            exp: ["Bir cebirsel ifadenin **polinom** olması için değişkenin tüm üslerinin **doğal sayı** ($0, 1, 2, \\dots$) olması gerekir (kök içinde $x$ veya paydada $x$ olmamalıdır).", "Bir polinomda $x = 1$ yazınca tüm **katsayılar toplamı**, $x = 0$ yazınca ise **sabit terim** bulunur. $P(x)$'in $x - a$ ile bölümünden kalan doğrudan $P(a)$'dır."],
            sent: "$P(x)$ polinomunda katsayılar toplamını bulmak için $x$ yerine {0}, sabit terimi bulmak için $x$ yerine {1} yazılır.",
            blanks: [["bir", ["sıfır", "bir", "eksi bir"]], ["sıfır", ["bir", "sıfır", "sonsuz"]]],
            vTitle: "Polinom Hızlı Formülleri",
            vNums: [["x^n (n in N)", "Polinom şartı", 1], ["P(1)", "Katsayılar toplamı", 0], ["x - a -> P(a)", "Kalan teoremi", 1]],
            vSum: "Dikkat: '$P(2x+1)$ polinomunun sabit terimi' denirse $x=0$ konur ve $P(1)$ bulunur!",
            hint: "$1^n = 1$ olduğundan katsayılar ortaya çıkar; $0^n = 0$ ($n\\ge 1$) olduğundan sadece sabit terim kalır."
          },
          {
            title: "Kalan Teoremi ve Bölen Derecesi", subtitle: "Böleni Sıfırlayan Değer",
            steps: ["$P(x)$'i $x - a$'ya bölerken böleni $0$'a eşitle ($x = a$) ve bunu $P$'de yerine koy.", "Eğer bölen $2.$ derecedense kalan en fazla $1.$ dereceden ($mx + n$) bir polinom olabilir.", "Tam bölünme (çarpan olma) $P(a) = 0$ demektir."],
            q: "$P(x) = x^3 - 2x^2 + ax + 5$ polinomunun $x - 2$ ile bölümünden kalan $9$ ise $a$ kaçtır?",
            qc: ["$1$", "$2$", "$4$"],
            qa: "$2$",
            hint: "$P(2) = 2^3 - 2(2^2) + 2a + 5 = 9$ eşitliğini çöz."
          },
          {
            title: "Kök-Katsayı İlişkisi Sorusu", subtitle: "$x_1^2 + x_2^2$ Özdeşliği",
            stem: "$x^2 - 6x + m - 2 = 0$ denkleminin kökleri $x_1$ ve $x_2$'dir. $x_1^2 + x_2^2 = 20$ olduğuna göre $m$ değeri kaçtır?",
            opts: ["$6$", "$8$", "$10$", "$12$"], ans: "C",
            hint: "$x_1 + x_2 = -\\frac{b}{a} = 6$ ve $x_1 \\cdot x_2 = \\frac{c}{a} = m - 2$ yaz; sonra $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$ özdeşliğini kullan.",
            sol: "$x_1 + x_2 = 6$ ve $x_1 \\cdot x_2 = m - 2$'dir. Tam kare özdeşliğinden $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 6^2 - 2(m - 2) = 20$ bulunur. Buradan $36 - 2m + 4 = 20 \\implies 2m = 20 \\implies m = 10$ elde edilir ($\\Delta = 36 - 32 = 4 \\gt 0$ olduğundan gerçel kökler mevcuttur).",
            badge: "Cebir & Kök Ustası"
          },
          {
            title: "Parabolün Tepe Noktası ve Simetri Ekseni", subtitle: "$T(r, k)$",
            exp: ["$f(x) = ax^2 + bx + c$ ($a \\ne 0$) parabolünün tepe noktası $T(r, k)$ iken $r = -\\frac{b}{2a}$ ve $k = f(r)$ olur.", "$x = r$ doğrusu parabolün **simetri eksenidir**; $f(r - d) = f(r + d)$ eşittir. Kollar yukarıysa ($a \\gt 0$) $k$ en küçük, aşağıysa ($a \\lt 0$) $k$ en büyük değerdir."],
            sent: "$f(x) = ax^2 + bx + c$ parabolünde $a \\gt 0$ iken tepe noktasının ordinatı $k = f(r)$ fonksiyonun alabileceği {0} değeri verir; $x = r$ doğrusu parabolün {1} eksenidir.",
            blanks: [["en küçük", ["en büyük", "en küçük", "sıfır"]], ["simetri", ["yatay", "simetri", "asimptot"]]],
            vTitle: "Parabol Özellik Kartı",
            vNums: [["r = -b / 2a", "Tepe apsis (simetri)", 1], ["a > 0", "Kollar yukarı (min)", 0], ["Delta = 0", "x-eksenine teğet", 1]],
            vSum: "Kökleri $x_1, x_2$ olan parabolde simetri ekseni $r = \\frac{x_1 + x_2}{2}$ tam ortadadır!",
            hint: "Kollar yukarı doğru açılıyorsa dip nokta en küçük değeri verir."
          },
          {
            title: "İkinci Derece Eşitsizlik İşaret Tablosu", subtitle: "Çift Kat Kök ve Payda Uyarısı",
            steps: ["Önce payın ve paydanın tüm köklerini küçükten büyüğe sayı doğrusuna yerleştir.", "**Çift kat kökte** (örneğin $(x-1)^2$) tablo geçilirken işaret **değişmez**; tek kat köklerde değişir.", "$\\le 0$ veya $\\ge 0$ durumlarında payın kökleri **dahil**, paydanın kökleri ise tanımsızlık nedeniyle daima **hariç (boş halka)** bırakılır!"],
            q: "$f(x) = x^2 - 4x + 11$ parabolünün tüm gerçel sayılarda alabileceği **en küçük değer** kaçtır?",
            qc: ["$3$", "$7$", "$11$"],
            qa: "$7$",
            hint: "Tepe apsisini bul: $r = -\\frac{-4}{2} = 2$, sonra $f(2)$ değerini hesapla."
          },
          {
            title: "AYT Rasyonel Eşitsizlik Sorusu", subtitle: "Payda Kökü Hariç Kuralı",
            stem: "$\\frac{(x - 3)(x + 1)}{x - 2} \\le 0$ eşitsizliğini sağlayan en büyük **negatif** tam sayı ile en küçük **pozitif** tam sayının toplamı kaçtır?",
            opts: ["$-1$", "$1$", "$2$", "$4$"], ans: "C",
            hint: "Kökler $-1$ (dahil), $2$ (payda: hariç!), $3$ (dahil). İşaret tablosunda eksi bölgeleri yaz ve uç noktaları dikkatle kontrol et.",
            sol: "Kökler $-1, 2, 3$ olup başkatsayılar oranı $+$ olduğundan en sağ ($x \\gt 3$) $+$ ile başlar: $(-\\infty, -1]$ eksi, $(-1, 2)$ artı, $(2, 3]$ eksi, $(3, \\infty)$ artıdır. Çözüm kümesi $(-\\infty, -1] \\cup (2, 3]$ olur. En büyük negatif tam sayı $-1$'dir; $(2, 3]$ aralığındaki ($2$ hariç!) en küçük pozitif tam sayı $3$'tür. Toplam $-1 + 3 = 2$ bulunur.",
            badge: "AYT Cebir Fatihi"
          }
        ]
      }),
      makeUnit({
        track: "12_yks", grade: 12, no: 4,
        title: "(AYT) Üstel-Logaritma ve Diziler (ÖSYM Tarzı)",
        subtitle: "Sıralama, Logaritmik Modelleme ve Karma Dizi Problemleri",
        desc: "AYT sınavında sıkça çıkan logaritma aralık tahmini, denklem çözümünde tanım kümesi elemesi ve $S_n$ toplamından genel terim bulma sorularını çözeriz.",
        coverImage: "assets/flow/u02_uslu_ifadeler.jpg",
        visuals: ["assets/flow/u02_uslu_ifadeler.jpg", "assets/flow/k4_ekok_disliler.jpg", "assets/flow/flow_sade_ders_konsept.jpg"],
        cells: ["Sıralama", "Taban Değ.", "Türünden", "Tanım El.", "pH/Richter", "Basamak", "Sn - Sn-1", "Hem A hem G", "İndirgeme", "Orta", "AYT Hız", "Usta"],
        k: [
          ["Logaritma Özdeşlikleri ve Sıralama", "AYT.LOG.1"],
          ["Logaritmik Denklemler ve Modelleme", "AYT.LOG.2"],
          ["ÖSYM Tarzı Dizi Analizi", "AYT.DIZ.1"]
        ],
        s: [
          {
            title: "Logaritma Değeri ve Aralık Tahmini", subtitle: "ÖSYM'nin Sevdiği Cetvel/Kutu Soruları",
            exp: ["$\\log_a b$ ifadesi 'a tabanının kaçıncı kuvveti $b$ eder?' sorusudur. $a^k \\lt b \\lt a^{k+1}$ ise $k \\lt \\log_a b \\lt k + 1$ olur.", "Örneğin $2^4 = 16 \\lt 25 \\lt 32 = 2^5$ olduğundan $\\log_2 25$ değeri kesinlikle $4$ ile $5$ arasında ($4{,}...$) bir sayıdır!"],
            sent: "$3^2 = 9 \\lt 20 \\lt 27 = 3^3$ olduğundan $\\log_3 20$ sayısı {0} ile {1} ardışık tam sayıları arasındadır.",
            blanks: [["iki", ["bir", "iki", "üç"]], ["üç", ["iki", "üç", "dört"]]],
            vTitle: "Hızlı Tahmin Örnekleri",
            vNums: [["log_2 25", "4 ile 5 arası (2^4=16, 2^5=32)", 1], ["log_5 100", "2 ile 3 arası (5^2=25, 5^3=125)", 1]],
            vSum: "Tabanın tam sayı kuvvetlerini ezberden bilmek ÖSYM logaritma sorularını $15$ saniyeye indirir!",
            hint: "$3^2 = 9$ ve $3^3 = 27$ kuvvetleri arasına $20$ düşer."
          },
          {
            title: "Türünden Yazma ve Asal Çarpan Parçalama", subtitle: "İçini Asallara Ayır",
            steps: ["$\\log_a b$ türünden başka bir logaritma istenirse verilen sayıyı asal çarpanlarına ayır.", "Çarpma logaritmayı toplamaya ($\\log(xy) = \\log x + \\log y$), üssü başa çarpan olarak indir.", "Farklı taban verildiyse taban değiştirme formülüyle istenen tabana geç."],
            q: "$\\log_2 3 = a$ olduğuna göre $\\log_2 24$ ifadesinin $a$ cinsinden eşiti nedir?",
            qc: ["$3a$", "$a + 3$", "$a + 8$"],
            qa: "$a + 3$",
            hint: "$24 = 8 \\cdot 3 = 2^3 \\cdot 3$ diye parçala: $\\log_2(2^3) + \\log_2 3$."
          },
          {
            title: "Logaritmik Denklemde Kök Eleme Sorusu", subtitle: "Tanım Kümesine Uymayanı At!",
            stem: "$\\log_3(x - 2) + \\log_3(x + 4) = 3$ denklemini sağlayan $x$ gerçel sayısı kaçtır?",
            opts: ["$4$", "$5$", "$6$", "$7$"], ans: "B",
            hint: "Toplamı tek logaritmada çarpıma dönüştür: $\\log_3((x-2)(x+4)) = 3 \\implies (x-2)(x+4) = 27$. Çıkan köklerden $x \\gt 2$ şartını sağlamayanı ele!",
            sol: "Tanım gereği $x - 2 \\gt 0$ ve $x + 4 \\gt 0 \\implies x \\gt 2$ olmalıdır. $\\log_3((x - 2)(x + 4)) = 3 \\implies (x - 2)(x + 4) = 3^3 = 27 \\implies x^2 + 2x - 35 = 0$. $(x + 7)(x - 5) = 0$ denkleminden $x = -7$ ($x \\gt 2$ sağlamaz, elenir!) ve $x = 5$ bulunur.",
            badge: "Logaritma Avcısı"
          },
          {
            title: "$S_n$ Toplamından $a_n$ Terimi Bulma", subtitle: "$a_n = S_n - S_{n-1}$",
            exp: ["Bir dizinin ilk $n$ terim toplamı $S_n = a_1 + a_2 + \\dots + a_{n-1} + a_n$ olarak tanımlanır.", "Buradan $n \\ge 2$ için tek bir terimi çekmek istediğimizde $a_n = S_n - S_{n-1}$ eşitliğini ve ilk terim için $a_1 = S_1$ kuralını kullanırız."],
            sent: "İlk $n$ terim toplamı $S_n$ verilen bir dizide $10.$ terimi bulmak için $S_{10}$ değerinden {0} çıkarılır; ilk terim $a_1$ ise doğrudan {1} değerine eşittir.",
            blanks: [["S_9", ["S_1", "S_9", "S_11"]], ["S_1", ["S_0", "S_1", "S_2"]]],
            vTitle: "$S_n$ ve $a_n$ İlişkisi",
            vNums: [["a_1 = S_1", "İlk terim doğrudan S_1", 1], ["a_n = S_n - S_{n-1}", "n >= 2 için geçerli", 1]],
            vSum: "Dikkat: $S_n - S_{n-1}$ formülüyle uğraşmak yerine tek bir terim soruluyorsa doğrudan sayı yaz ($a_5 = S_5 - S_4$)!",
            hint: "İlk $10$ terimin toplamından ilk $9$ terimin toplamını atarsan geriye sadece $10.$ terim kalır."
          },
          {
            title: "Toplam Formülünden Terim Bulma Uygulaması", subtitle: "Tek Satırda $S_5 - S_4$",
            steps: ["Önce sorulan indeksin kendisi ($n$) ve bir küçüğü ($n - 1$) için $S_n$ formülünü hesapla.", "İki toplamın farkını alırken terimleri dikkatlice çıkar.", "Tüm genel terim sorulursa $S_n - S_{n-1}$ cebirsel olarak sadeleştirilir."],
            q: "Bir $(a_n)$ dizisinin ilk $n$ terim toplamı $S_n = n^2 + 3n$ ise $a_5$ kaçtır?",
            qc: ["$10$", "$12$", "$14$"],
            qa: "$12$",
            hint: "$a_5 = S_5 - S_4 = (25 + 15) - (16 + 12)$ işlemini yap."
          },
          {
            title: "ÖSYM İkonik Dizi Sorusu", subtitle: "Hem Aritmetik Hem Geometrik Dizi",
            stem: "Hem aritmetik hem de geometrik dizi olan bir $(a_n)$ dizisinin ilk üç terimi $a_1 = 2x - 3$, $a_2 = y + 1$ ve $a_3 = x + 4$ olduğuna göre $x + y$ toplamı kaçtır?",
            opts: ["$13$", "$15$", "$17$", "$19$"], ans: "C",
            hint: "Bir dizi hem aritmetik hem de geometrik dizi ise bu dizinin tüm terimleri birbirine eşit, yani **sabit dizi** olması zorunludur!",
            sol: "Hem aritmetik hem geometrik olan bir dizide $d = 0$ ve $r = 1$ olmak zorundadır; yani sabit dizidir ($a_1 = a_2 = a_3$). $2x - 3 = x + 4 \\implies x = 7$ bulunur. Buradan $a_1 = 2(7) - 3 = 11$ olur. $a_2 = y + 1 = 11 \\implies y = 10$ gelir. Toplam $x + y = 7 + 10 = 17$ bulunur.",
            badge: "AYT Logaritma & Dizi Ustası"
          }
        ]
      }),
      makeUnit({
        track: "12_yks", grade: 12, no: 5,
        title: "(AYT) Trigonometri ve Analitik Geometri",
        subtitle: "Birim Çember, Özdeşlikler, Doğru ve Çember Analitiği",
        desc: "Trigonometrik sadeleştirmeleri analitik düzlemdeki doğru eğimi, nokta-doğru uzaklığı ve çemberin genel denklemiyle birleştirerek çözeriz.",
        coverImage: "assets/flow/u10_eslik_benzerlik.jpg",
        visuals: ["assets/flow/u10_eslik_benzerlik.jpg", "assets/flow/u07_dogrusal_denklemler.jpg", "assets/flow/u11_donusum_geometrisi.jpg"],
        cells: ["Birim Ç.", "İşaret", "Sadeleştir", "Eğim", "Dik Doğru", "Uzaklık", "Paralel", "Çember", "Merkez", "Yarıçap", "Teğet", "Usta"],
        k: [
          ["Trigonometrik Özdeşlikler ve Sadeleştirme", "AYT.TRIG.1"],
          ["Doğrunun Analitik İncelenmesi", "AYT.ANA.1"],
          ["Çemberin Analitik İncelenmesi", "AYT.ANA.2"]
        ],
        s: [
          {
            title: "Birim Çemberde Bölge İşaretleri ve Özdeşlikler", subtitle: "$\\sin^2 x + \\cos^2 x = 1$",
            exp: ["Koordinat düzleminde birim çember üzerindeki noktanın apsisi $\\cos\\theta$, ordinatı $\\sin\\theta$ olduğundan $\\cos^2\\theta + \\sin^2\\theta = 1$ sağlanır.", "Bölgelere göre işaretler: I. bölgede hepsi ($+$), II. bölgede $\\sin$ ($+$), III. bölgede $\\tan, \\cot$ ($+$), IV. bölgede $\\cos$ ($+$) işaretlidir."],
            sent: "Birim çemberde II. bölgede yalnızca {0} pozitif iken IV. bölgede yalnızca {1} fonksiyonu pozitif değer alır (tümleyici tersleri hariç).",
            blanks: [["sinüs", ["sinüs", "kosinüs", "tanjant"]], ["kosinüs", ["sinüs", "kosinüs", "kotanjant"]]],
            vTitle: "Birim Çember İşaret Rehberi",
            vNums: [["I. Bölge", "Hepsi (+)", 1], ["II. Bölge", "sin (+)", 0], ["III. Bölge", "tan ve cot (+)", 0], ["IV. Bölge", "cos (+)", 1]],
            vSum: "Sadeleştirme sorularında $1$'lerin yerine $\\sin^2 x + \\cos^2 x$ yazmak sıkışıklığı açar!",
            hint: "'Bütün Sınıf Kara Tahtada Coşar': I Hepsi, II Sin, III Tan/Cot, IV Cos."
          },
          {
            title: "Yarım Açı ile Kesir Sadeleştirme", subtitle: "ÖSYM'nin Klasik Özdeşlik Sorusu",
            steps: ["$\\tan x = \\frac{\\sin x}{\\cos x}$ ve $\\cot x = \\frac{\\cos x}{\\sin x}$ yazarak ifadeyi $\\sin$ ve $\\cos$ cinsine çevir.", "Kesirde $1 + \\cos 2x$ görürsen $2\\cos^2 x$, $1 - \\cos 2x$ görürsen $2\\sin^2 x$ yaz.", "$\\sin 2x$ yerine $2\\sin x\\cos x$ yazıp ortak çarpanları sadeleştir."],
            q: "$0 \\lt x \\lt \\frac{\\pi}{2}$ olmak üzere $\\frac{\\sin 2x}{1 + \\cos 2x}$ ifadesi hangisine eşittir?",
            qc: ["$\\sin x$", "$\\tan x$", "$\\cot x$"],
            qa: "$\\tan x$",
            hint: "Pay $2\\sin x\\cos x$, payda $1 + (2\\cos^2 x - 1) = 2\\cos^2 x$ olur."
          },
          {
            title: "Noktanın Doğruya Uzaklığı Sorusu", subtitle: "$d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$",
            stem: "Dik koordinat düzleminde $A(1, -2)$ noktasının $3x - 4y + 9 = 0$ doğrusuna uzaklığı kaç birimdir?",
            opts: ["$3$", "$4$", "$5$", "$6$"], ans: "B",
            hint: "Noktanın koordinatlarını doğru denkleminde yerine yazıp mutlak değerini al; sonra katsayıların pisagoru olan $\\sqrt{3^2 + (-4)^2}$'ye böl.",
            sol: "Uzaklık formülünden $d = \\frac{|3(1) - 4(-2) + 9|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 8 + 9|}{\\sqrt{9 + 16}} = \\frac{20}{5} = 4$ birim bulunur.",
            badge: "Doğru Analitiği Ustası"
          },
          {
            title: "Çemberin Standart ve Genel Denklemi", subtitle: "Tam Kareye Tamamlama",
            exp: ["Merkezi $M(a, b)$ ve yarıçapı $r$ olan çemberin standart denklemi $(x - a)^2 + (y - b)^2 = r^2$ şeklindedir.", "Genel denklem $x^2 + y^2 + Dx + Ey + F = 0$ biçiminde verildiğinde merkez $M(-\\frac{D}{2}, -\\frac{E}{2})$ ve yarıçap $r = \\frac{1}{2}\\sqrt{D^2 + E^2 - 4F}$ formülüyle (veya tam kareyle) bulunur."],
            sent: "Merkezi $M(a, b)$ olan çember denkleminde $x^2$ ve $y^2$ terimlerinin katsayıları eşit ($1$) olmalı ve denklemde $x \\cdot y$ çarpım terimi {0}. Merkez $D, E$ katsayılarının {1} yarısıdır.",
            blanks: [["bulunmamalıdır", ["bulunmalıdır", "bulunmamalıdır", "pozitif olmalıdır"]], ["eksi", ["artı", "eksi", "iki katı"]]],
            vTitle: "Çember Analitik Özet",
            vNums: [["(x-a)^2+(y-b)^2=r^2", "Merkez (a,b), yarıçap r", 1], ["xy terimi yok!", "Varsa çember değildir", 0]],
            vSum: "Bir doğru çembere teğetse merkezin doğruya uzaklığı tam olarak yarıçapa ($r$) eşittir!",
            hint: "$(x - a)^2 = x^2 - 2ax + a^2$ açılımında $D = -2a \\implies a = -D/2$."
          },
          {
            title: "Genel Çember Denkleminden Yarıçap Bulma", subtitle: "Tam Kare veya Formül",
            steps: ["Önce $x^2$ ve $y^2$ katsayılarının $1$ olduğundan emin ol (değilse böl).", "$x$'li terimi $(x + D/2)^2$, $y$'li terimi $(y + E/2)^2$ şeklinde tam kareye tamamla.", "Sağ tarafta kalan pozitif sayı $r^2$'dir; karekökü yarıçap $r$'yi verir."],
            q: "$x^2 + y^2 - 6x + 8y - 11 = 0$ denklemiyle verilen çemberin yarıçapı kaç birimdir?",
            qc: ["$5$", "$6$", "$7$"],
            qa: "$6$",
            hint: "$(x - 3)^2 + (y + 4)^2 = 11 + 9 + 16$ yazıp sağ tarafın karekökünü al."
          },
          {
            title: "Çembere Teğet Doğru Analitik Sorusu", subtitle: "Uzaklık Formülü = Yarıçap",
            stem: "Dik koordinat düzleminde merkezi $M(2, -1)$ olan ve $x + y - 5 = 0$ doğrusuna teğet olan çemberin yarıçapı kaç birimdir?",
            opts: ["$\\sqrt{2}$", "$2$", "$2\\sqrt{2}$", "$4$"], ans: "C",
            hint: "Çember doğruya teğet olduğuna göre merkez $M(2, -1)$ noktasının $x + y - 5 = 0$ doğrusuna uzaklığı yarıçapı $r$'yi verir.",
            sol: "Teğetlik gereği $r = d(M, d) = \\frac{|1(2) + 1(-1) - 5|}{\\sqrt{1^2 + 1^2}} = \\frac{|-4|}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$ birim bulunur.",
            badge: "Analitik Geometri Şampiyonu"
          }
        ]
      }),
      makeUnit({
        track: "12_yks", grade: 12, no: 6,
        title: "(AYT) Limit, Türev ve İntegral Uygulamaları (ÖSYM Çizgisi)",
        subtitle: "Bileşke Limit, $f'$ Grafiği Yorumu, Polinom Türev ve Alan Paylaşımı",
        desc: "AYT matematiğin belirleyici analiz sorularını (grafik üzerinden sağ-sol limit, $f'(x)$ işaret grafiği, polinom-türev kurgusu ve integral alan simetrisi) ustalıkla çözeriz.",
        coverImage: "assets/flow/u12_geometrik_cisimler.jpg",
        visuals: ["assets/flow/u12_geometrik_cisimler.jpg", "assets/flow/u06_cebirsel_ozdeslik.jpg", "assets/flow/flow_sade_ders_konsept.jpg"],
        cells: ["Bileşke Lim", "Grafik Lim", "f' İşareti", "Ekstremum", "Polinom f'", "Teğet", "Simetri", "u-Dönüşüm", "Alan (+)", "Alan (-)", "Ters İnt.", "YKS Hazır"],
        k: [
          ["Grafik ve Bileşke Limit Yorumu", "AYT.ANA.2"],
          ["f'(x) Grafiği ve Polinom-Türev İlişkisi", "AYT.ANA.3"],
          ["ÖSYM Tarzı Belirli İntegral ve Alan", "AYT.ANA.4"]
        ],
        s: [
          {
            title: "Bileşke Fonksiyonlarda Sağ-Sol Limit Yönü", subtitle: "Yukarıdan mı Aşağıdan mı Yaklaşıyor?",
            exp: ["$\\lim_{x\\to a^+} f(g(x))$ hesaplanırken içteki $g(x)$'in yaklaştığı değer $L$'yi bulmak yetmez; $L$'ye $L$'den **büyük ($L^+$)** değerlerden mi yoksa **küçük ($L^-$)** değerlerden mi yaklaştığı kritik önem taşır!", "Eğer grafik $L$'ye yukarıdan iniyorsa $f(L^+)$, aşağıdan çıkıyorsa $f(L^-)$ olarak dış fonksiyona aktarılır."],
            sent: "$\\lim_{x\\to a^+} f(g(x))$ limitinde $g(x)$ grafiği $L$ değerine üstten (daha büyük değerlerden) yaklaşıyorsa dış fonksiyona {0} yönünden, alttan yaklaşıyorsa {1} yönünden girilir.",
            blanks: [["sağ", ["sağ", "sol", "sıfır"]], ["sol", ["sağ", "sol", "orta"]]],
            vTitle: "Bileşke Limit Yön Anahtarı",
            vNums: [["Üstten L'ye", "L+ (sağdan yaklaşım)", 1], ["Alttan L'ye", "L- (soldan yaklaşım)", 1], ["Sabit L", "Doğrudan f(L) değeri", 0]],
            vSum: "İç fonksiyon sabitse yaklaşım yönü kalmaz; doğrudan $f(L)$ nokta değerine bakılır!",
            hint: "Sayı doğrusunda $L$'den büyük değerler $L$'nin sağında ($L^+$), küçük değerler solundadır ($L^-$)."
          },
          {
            title: "$f'(x)$ Türev Grafiğinden $f(x)$ Yorumlama", subtitle: "ÖSYM'nin Vazgeçilmez Sorusu",
            steps: ["$f'(x)$ grafiği verildiğinde yokuş çıkıp inmediğine DEĞİL, $x$-ekseninin **üstünde ($+$)** mi yoksa **altında ($-$)** mı olduğuna bak!", "$f'$ grafiği $x$-eksenini $+$'dan $-$'ye geçerek kesiyorsa $f$'nin o noktada **yerel maksimumu** vardır.", "$f'$ grafiği $x$-eksenini $-$'den $+$'ya geçerek kesiyorsa **yerel minimum** oluşur; teğet geçerse işaret değişmediğinden ekstremum olmaz!"],
            q: "$f'(x)$ türev fonksiyonunun grafiği $x = 2$ noktasında $x$-eksenini pozitif bölgeden negatif bölgeye geçerek kesiyorsa $x = 2$'de $f$ için ne söylenir?",
            qc: ["Yerel minimum vardır", "Yerel maksimum vardır", "Süreksizdir"],
            qa: "Yerel maksimum vardır",
            hint: "Türev $+$'dan $-$'ye geçiyorsa $f$ önce artmış sonra azalmıştır; bu bir tepe (maksimum) oluşturur."
          },
          {
            title: "Polinom ve Simetri Ekseni Türev Sorusu", subtitle: "Köklerden Tepeye Hızlı Geçiş",
            stem: "Başkatsayısı $1$ olan ikinci dereceden bir $P(x)$ polinomu için $P(1) = P(5) = 0$ olduğuna göre $P'(3)$ ve $P(3)$ değerleri sırasıyla aşağıdakilerden hangisidir?",
            opts: ["$0$ ve $-4$", "$2$ ve $-4$", "$0$ ve $4$", "$-2$ ve $0$"], ans: "A",
            hint: "Başkatsayı $1$ ve kökler $1, 5$ olduğundan $P(x) = (x - 1)(x - 5)$ yaz; hem $P(3)$'ü hem de türev alıp $P'(3)$'ü bul (ayrıca $x=3$ tepe noktasıdır!).",
            sol: "$P(x) = 1 \\cdot (x - 1)(x - 5) = x^2 - 6x + 5$ olur. Türevi $P'(x) = 2x - 6$ olduğundan $P'(3) = 2(3) - 6 = 0$ bulunur (köklerin tam ortası $x = 3$ tepe noktasıdır). $P(3) = (3 - 1)(3 - 5) = 2(-2) = -4$ olur. Sırasıyla $0$ ve $-4$ bulunur.",
            badge: "AYT Türev Ustası"
          },
          {
            title: "İntegral ile İşaretli Alan İlişkisi", subtitle: "Eksen Altı Eksi, Üstü Artı",
            exp: ["$\\int_a^b f(x)\\,dx$ belirli integrali eğri ile $x$-ekseni arasındaki **işaretli alanı** verir: $x$-ekseninin üstündeki alan $+S$, altındaki alan $-S$ olarak hesaba katılır.", "Tek fonksiyonlarda ($f(-x) = -f(x)$) simetrik $[-a, a]$ aralığında integral $0$, çift fonksiyonlarda ($f(-x) = f(x)$) ise $2\\int_0^a f(x)\\,dx$ olur."],
            sent: "Belirli integralde $x$-ekseninin altında kalan $S$ alanlı bölgenin integral değeri {0} olarak alınır; tek fonksiyonların $[-a, a]$ simetrik aralığındaki belirli integrali daima {1} olur.",
            blanks: [["-S", ["+S", "-S", "2S"]], ["sıfır", ["sıfır", "iki kat", "bir"]]],
            vTitle: "Alan vs İntegral Ayrımı",
            vNums: [["Üst Bölge", "Alan = +S, İntegral = +S", 1], ["Alt Bölge", "Alan = +S, İntegral = -S", 1], ["[-a, a] Tek f", "İntegral = 0", 0]],
            vSum: "Soru 'alan' soruyorsa eksi bölgeleri mutlak değerle artı yap; 'integral değeri' soruyorsa eksili bırak!",
            hint: "Tek fonksiyonların sol ve sağ yarıları birbirinin zıt işaretlisi olduğundan toplandığında $0$ olur."
          },
          {
            title: "Simetrik Aralıkta Tek-Çift İntegral Kısayolu", subtitle: "$[-a, a]$ Sınırlarında Hız",
            steps: ["Alt ve üst sınır $-a$ ve $+a$ biçiminde simetrikse integrali almaya başlamadan tek terimleri ($x, x^3, x^5, \\sin x$) hemen ele!", "Çünkü tek kuvvetlerin $[-a, a]$ integral değeri sıfırdır.", "Geriye yalnızca çift kuvvetler ($x^2, x^4, \\text{sabit}$) kalır ve $2\\int_0^a (\\text{çift kısım})\\,dx$ ile hızla çözülür."],
            q: "$\\int_{-2}^{2} (x^5 + 3x^3 + 4)\\,dx$ belirli integralinin değeri kaçtır?",
            qc: ["$8$", "$12$", "$16$"],
            qa: "$16$",
            hint: "$x^5$ ve $3x^3$ tek fonksiyon olduklarından $[-2, 2]$ aralığında integralleri $0$'dır; sadece $\\int_{-2}^{2} 4\\,dx$ kalır!"
          },
          {
            title: "AYT Değişken Değiştirme İntegral Sorusu", subtitle: "ÖSYM'nin En Sevdiği Dönüşüm",
            stem: "$\\int_{1}^{3} f(x)\\,dx = 12$ olduğuna göre $\\int_{0}^{1} f(2x + 1)\\,dx$ belirli integralinin değeri kaçtır?",
            opts: ["$4$", "$6$", "$12$", "$24$"], ans: "B",
            hint: "$2x + 1 = u$ dönüşümü yap ($2\\,dx = du \\implies dx = \\frac{du}{2}$) ve $x = 0$ ile $x = 1$ sınırlarını $u$ sınırlarına ($1$ ve $3$) dönüştür.",
            sol: "$u = 2x + 1$ dönüşümüyle $du = 2\\,dx \\implies dx = \\frac{du}{2}$ olur. Sınırlar: $x = 0 \\implies u = 1$ ve $x = 1 \\implies u = 3$'tür. İstenen integral $\\int_{1}^{3} f(u)\\,\\frac{du}{2} = \\frac{1}{2}\\int_{1}^{3} f(u)\\,du = \\frac{12}{2} = 6$ bulunur.",
            badge: "YKS Matematik Şampiyonu"
          }
        ]
      })
    ]
  };

  window.NARTES_GRADES_1_12 = {
    tracks,
    readinessByTrack,
    bridges,
    unitsByTrack
  };
})();
