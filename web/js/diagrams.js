/* Concrete models for Çarpanlar ve Katlar. Original Nartes+ diagrams. */
(function (root) {
  "use strict";

  function leaf(label) {
    return { label: String(label), prime: true, kids: [] };
  }

  function branch(label, kids) {
    return { label: String(label), prime: false, kids: kids };
  }

  var diagrams = {
    "1.1": {
      kind: "dots",
      panels: [{ title: "14 nesne", total: 14, group: 7, note: "7 × 2 = 14" }]
    },
    "1.2": { kind: "rods", unit: 5, counts: [1, 2, 3, 4] },
    "1.3": {
      kind: "bars",
      rows: [
        { length: 12, piece: 3, caption: "12 birimlik çubuk" },
        { length: 10, piece: 4, caption: "10 birimlik çubuk" },
        { length: 21, piece: 7, caption: "21 = 7 + 7 + 7" }
      ]
    },
    "1.4": {
      kind: "pairs",
      groups: [
        { title: "28", pairs: [[1, 28], [2, 14], [4, 7]] },
        { title: "36", center: "6", note: "Ortadaki çarpan tek kutuda" }
      ]
    },
    "1.5": {
      kind: "stack",
      items: [
        {
          kind: "table",
          caption: "20’nin çiftleri",
          headers: ["Sol", "Sağ"],
          rows: [["1", "20"], ["2", "10"], ["4", "5"]]
        },
        {
          kind: "cards",
          groups: [
            { title: "20 sıralı liste", chips: ["1", "2", "4", "5", "10", "20"], tone: "focus" },
            { title: "18 geri çağırma", chips: ["1", "2", "3", "6", "9", "18"], tone: "plain" }
          ]
        }
      ]
    },
    "1.6": {
      kind: "dots",
      panels: [
        { title: "23 nokta", total: 23, group: 5, note: "4 tam grup, 3 artık" },
        { title: "24 nokta", total: 24, group: 6, note: "Tam grup, artık yok" }
      ]
    },
    "1.7": {
      kind: "pairs",
      groups: [
        { title: "25", pairs: [[1, 25]], center: "5" },
        { title: "26", pairs: [[1, 26], [2, 13]] }
      ]
    },
    "2.1.1": {
      kind: "cards",
      groups: [
        { title: "7", chips: ["1", "7"], note: "Tam iki farklı bölen", tone: "prime" },
        { title: "9", chips: ["1", "3", "9"], note: "Üç bölen", tone: "composite" },
        { title: "Seçim kartları", chips: ["1", "2", "9", "13"], tone: "plain" }
      ]
    },
    "2.1.2": {
      kind: "cards",
      groups: [
        { title: "1 × 1", chips: ["1"], note: "İki uç aynı karta bağlanır", tone: "out" },
        { title: "2", chips: ["1", "2"], note: "İki farklı kart", tone: "prime" }
      ]
    },
    "2.1.3": {
      kind: "stack",
      items: [
        {
          kind: "dots",
          panels: [
            { title: "2 nokta", total: 2, group: 2, note: "Tek çift asal" },
            { title: "10 nokta", total: 10, group: 2, note: "İkişerli grup, artık yok" }
          ]
        },
        {
          kind: "cards",
          groups: [{ title: "10’un bölenleri", chips: ["1", "2", "10"], note: "Üçü de farklı", tone: "composite" }]
        }
      ]
    },
    "2.1.4": {
      kind: "cards",
      groups: [
        { title: "21 = 3 × 7", chips: ["3", "7"], tone: "composite" },
        { title: "25 = 5 × 5", chips: ["5", "5"], tone: "composite" },
        { title: "İki sınıfın dışında", chips: ["1"], tone: "out" }
      ]
    },
    "2.1.5": {
      kind: "table",
      caption: "2, 3, 5 ve 7 denemesi",
      headers: ["Bölen", "43 bölüm", "43 kalan", "77 bölüm", "77 kalan"],
      rows: [
        ["2", "21", "1", "38", "1"],
        ["3", "14", "1", "25", "2"],
        ["5", "8", "3", "15", "2"],
        ["7", "6", "1", "11", "0"]
      ]
    },
    "2.2.1": {
      kind: "tree",
      tree: branch("44", [branch("4", [leaf(2), leaf(2)]), leaf(11)])
    },
    "2.2.2": {
      kind: "tree",
      tree: branch("60", [leaf(2), branch("30", [leaf(2), branch("15", [leaf(3), leaf(5)])])])
    },
    "2.2.3": {
      kind: "trees",
      trees: [
        { title: "72 = 8 × 9", tree: branch("72", [branch("8", [leaf(2), leaf(2), leaf(2)]), branch("9", [leaf(3), leaf(3)])]) },
        { title: "72 = 6 × 12", tree: branch("72", [branch("6", [leaf(2), leaf(3)]), branch("12", [leaf(2), leaf(2), leaf(3)])]) }
      ]
    },
    "2.3.1": {
      kind: "cards",
      groups: [
        { title: "66 için aday asallar", chips: ["2", "3", "5", "7", "11"], note: "En küçükten dene; yalnız tam böleni seç", tone: "plain" }
      ]
    },
    "2.3.2": {
      kind: "division",
      headers: ["Eldeki sayı", "Asal bölen"],
      rows: [["78", "2"], ["39", "3"], ["13", "13"], ["1", ""]],
      note: "Aşağı ok bölümü alta taşır"
    },
    "2.3.3": {
      kind: "division",
      headers: ["Eldeki sayı", "Asal bölen"],
      rows: [["84", "2"], ["42", "2"], ["21", "3"], ["7", "7"], ["1", ""]],
      reveal: [[0, 1], [2, 3]],
      note: "Sağ sütun, doğru bölme yazılınca açılır"
    },
    "2.3.4": {
      kind: "division",
      headers: ["Eldeki sayı", "Asal bölen"],
      rows: [["34", "2"], ["17", "17"], ["1", ""]],
      marks: ["", "asal kaldı, kaydet", "sağ hücre boş"]
    },
    "2.4.1": {
      kind: "piles",
      groups: [
        { base: "2", count: 3, power: "2³" },
        { base: "3", count: 2, power: "3²" }
      ]
    },
    "2.4.2": {
      kind: "ribbon",
      items: ["2", "2", "3", "5"],
      result: "60 = 2² × 3 × 5"
    },
    "2.4.3": {
      kind: "piles",
      groups: [
        { base: "2", count: 3, power: "2³ = 8" },
        { base: "3", count: 2, power: "3² = 9" }
      ],
      result: "8 × 9 = 72"
    },
    "3.1": {
      kind: "venn",
      left: { title: "16", chips: ["1", "2", "4", "8", "16"] },
      right: { title: "28", chips: ["1", "2", "4", "7", "14", "28"] },
      common: ["1", "2", "4"],
      focus: "4"
    },
    "3.2": {
      kind: "stack",
      items: [
        {
          kind: "venn",
          left: { title: "18", chips: ["1", "2", "3", "6", "9", "18"] },
          right: { title: "24", chips: ["1", "2", "3", "4", "6", "8", "12", "24"] },
          common: ["1", "2", "3", "6"],
          focus: "6"
        },
        {
          kind: "venn",
          left: { title: "20", chips: ["1", "2", "4", "5", "10", "20"] },
          right: { title: "32", chips: ["1", "2", "4", "8", "16", "32"] },
          common: ["1", "2", "4"],
          focus: "4"
        }
      ]
    },
    "3.3": {
      kind: "align",
      rows: [
        { title: "18 = 2 × 3²", cells: ["2", "3", "3"] },
        { title: "24 = 2³ × 3", cells: ["2", "2", "2", "3"] },
        { title: "Ortak, küçük üs", cells: ["2", "3"], ring: true }
      ]
    },
    "3.4": {
      kind: "stack",
      items: [
        { kind: "bars", rows: [{ length: 12, piece: 12, caption: "12" }, { length: 60, piece: 12, caption: "60, on ikişer blok" }] },
        { kind: "cards", groups: [
          { title: "18 ve 18", chips: ["18", "18"], note: "Eşit sayılar", tone: "plain" },
          { title: "1 ve 17", chips: ["1", "17"], tone: "plain" }
        ] }
      ]
    },
    "3.5": {
      kind: "shared",
      rows: [
        { nums: ["20", "28"], div: "2", tag: "ortak bölen" },
        { nums: ["10", "14"], div: "2", tag: "ortak bölen" },
        { nums: ["5", "7"], div: "5", tag: "yalnız bir sayı" },
        { nums: ["1", "7"], div: "7", tag: "yalnız bir sayı" },
        { nums: ["1", "1"], div: "", tag: "bitti" }
      ]
    },
    "4.1.1": {
      kind: "bars",
      rows: [
        { length: 24, piece: 12, caption: "24 kırmızı kalem" },
        { length: 36, piece: 12, caption: "36 mavi kalem, aynı paket çerçevesi" }
      ]
    },
    "4.1.2": {
      kind: "bars",
      rows: [
        { length: 35, piece: 7, caption: "35 cm" },
        { length: 49, piece: 7, caption: "49 cm" }
      ]
    },
    "4.1.3": {
      kind: "lines",
      min: 0,
      max: 42,
      series: [
        { label: "28 m yol, uçlar dolu", points: [0, 14, 28], common: [0, 14, 28] },
        { label: "42 m yol, uçlar dolu", points: [0, 14, 28, 42], common: [0, 14, 28, 42] }
      ]
    },
    "4.2": {
      kind: "stack",
      items: [
        { kind: "flow", steps: ["Veri", "Koşul", "Aranan", "Model", "İşlem", "Kontrol"] },
        { kind: "cards", groups: [{ title: "52 ve 78 kart", chips: ["52", "78"], tone: "plain" }] }
      ]
    },
    "4.3.1": {
      kind: "filter",
      title: "EBOB(36, 60) = 12",
      chips: ["1", "2", "3", "4", "6", "12"],
      max: 8,
      note: "Paket en çok 8"
    },
    "4.3.2": {
      kind: "panels",
      panels: [
        { title: "Nesne paketi", lines: ["EBOB neyi ölçüyor?", "Paket büyüklüğü"] },
        { title: "Şerit parçası", lines: ["EBOB neyi ölçüyor?", "Parça uzunluğu"] },
        { title: "Uçları dahil çizgi", lines: ["EBOB neyi ölçüyor?", "Aralık"] }
      ]
    },
    "5.1": {
      kind: "lines",
      min: 0,
      max: 32,
      series: [
        { label: "6’nın katları", points: [0, 6, 12, 18, 24, 30], common: [0, 24], first: 24, zeroGrey: true },
        { label: "8’in katları", points: [0, 8, 16, 24, 32], common: [0, 24], first: 24, zeroGrey: true }
      ]
    },
    "5.2": {
      kind: "stack",
      items: [
        {
          kind: "lines",
          min: 0,
          max: 60,
          series: [
            { label: "4’ün katları", points: [4, 8, 12, 16, 20, 40, 60], common: [20, 40, 60], first: 20 },
            { label: "10’un katları", points: [10, 20, 40, 60], common: [20, 40, 60], first: 20 }
          ]
        },
        { kind: "cards", groups: [{ title: "9 ve 12 geri çağırma", chips: ["36"], note: "İlk ortak pozitif kat", tone: "focus" }] }
      ]
    },
    "5.3": {
      kind: "align",
      rows: [
        { title: "6 = 2 × 3", cells: ["2", "3"] },
        { title: "8 = 2³", cells: ["2", "2", "2"] },
        { title: "Kapsama, büyük üs", cells: ["2", "2", "2", "3"], ring: true }
      ]
    },
    "5.4": {
      kind: "panels",
      panels: [
        { title: "14 ve 56", lines: ["Şeritler 56’da birleşir", "EKOK büyük olandır"] },
        { title: "18 ve 18", lines: ["Eşit kartlar", "EKOK sayının kendisi"] }
      ]
    },
    "5.5": {
      kind: "panels",
      panels: [
        { title: "10 × 14", lines: ["140"] },
        { title: "2 × 70", lines: ["140"] },
        { title: "İki sayı için", lines: ["a × b = EBOB × EKOK"] }
      ]
    },
    "5.6": {
      kind: "shared",
      rows: [
        { nums: ["10", "14"], div: "2", tag: "EBOB ve EKOK" },
        { nums: ["5", "7"], div: "5", tag: "yalnız EKOK" },
        { nums: ["1", "7"], div: "7", tag: "yalnız EKOK" },
        { nums: ["1", "1"], div: "", tag: "bitti" }
      ]
    },
    "6.1.1": {
      kind: "lines",
      min: 0,
      max: 32,
      series: [
        { label: "6 dakikalık ışık", points: [0, 6, 12, 18, 24, 30], common: [0, 24], first: 24, zeroGrey: true },
        { label: "8 dakikalık ışık", points: [0, 8, 16, 24, 32], common: [0, 24], first: 24, zeroGrey: true }
      ]
    },
    "6.1.2": {
      kind: "bundles",
      meet: "30 rozet",
      rows: [
        { label: "6’lı paket", size: "6", copies: 5 },
        { label: "10’lu paket", size: "10", copies: 3 }
      ]
    },
    "6.2": {
      kind: "flow",
      steps: ["Birlikte başlangıç var mı?", "Periyotlar", "EKOK", "Aranan birim", "Yerine koy"]
    },
    "6.3.1": {
      kind: "lines",
      min: 0,
      max: 130,
      series: [{
        label: "0–130 dakika",
        points: [0, 42, 84, 126],
        open: [0],
        common: [42, 84, 126],
        first: 42
      }]
    },
    "6.3.2": {
      kind: "band",
      values: [24, 48, 72, 96, 120],
      low: 50,
      high: 100,
      note: "50’den büyük ve 100’den küçük"
    },
    "6.3.3": {
      kind: "panels",
      panels: [
        { title: "6 ve 10 nesne", lines: ["Artmadan eş paket", "Ortak bölen"] },
        { title: "6’lı ve 10’lu paket", lines: ["Aynı toplam", "Ortak kat"] }
      ]
    },
    "7.1": {
      kind: "venn",
      left: { title: "8 bileşik", chips: ["1", "2", "4", "8"] },
      right: { title: "15 bileşik", chips: ["1", "3", "5", "15"] },
      common: ["1"],
      focus: "1"
    },
    "7.2": {
      kind: "table",
      caption: "Ortak asal, EBOB, karar",
      headers: ["Sayılar", "Ortak asal", "EBOB", "Karar"],
      rows: [
        ["9 ve 15", "3", "3", "değil"],
        ["14 ve 25", "yok", "1", "aralarında asal"]
      ]
    },
    "7.3": {
      kind: "bars",
      rows: [
        { length: 20, piece: 20, caption: "20" },
        { length: 21, piece: 20, caption: "21, fark 1 birim" }
      ]
    },
    "7.4": {
      kind: "cards",
      groups: [
        { title: "11", chips: ["1", "11"], note: "1’den büyük tek bölen kendisi", tone: "prime" },
        { title: "26", chips: ["11 sığmaz"], note: "11’in katı değil", tone: "plain" },
        { title: "33", chips: ["11", "11", "11"], note: "11 üç kez oturur", tone: "composite" }
      ]
    },
    "7.5": {
      kind: "stack",
      items: [
        {
          kind: "venn",
          left: { title: "1", chips: ["1"] },
          right: { title: "24", chips: ["1", "2", "3", "4", "6", "8", "12", "24"] },
          common: ["1"],
          focus: "1"
        },
        {
          kind: "cards",
          groups: [{ title: "15 ve 17", chips: ["fark 2"], note: "İkisi de tek, 2 bölemez", tone: "plain" }]
        }
      ]
    },
    "7.6": {
      kind: "fraction",
      from: [28, 44],
      by: 4,
      to: [7, 11],
      note: "Ortak asal kartı boş"
    },
    "8.1.1": {
      kind: "cards",
      groups: [
        { title: "Bir farklı asal", chips: ["16 = 2⁴", "27 = 3³"], tone: "prime" },
        { title: "Üç farklı asal", chips: ["30", "42", "70"], tone: "composite" },
        { title: "Adaylar", chips: ["45", "66", "81"], tone: "plain" }
      ]
    },
    "8.1.2": {
      kind: "graph",
      nodes: [
        { id: "A", value: "8" },
        { id: "B", value: "15" },
        { id: "C", value: "21" }
      ],
      edges: [
        { a: "A", b: "B", label: "EBOB 1 mi? Evet" },
        { a: "A", b: "C", label: "EBOB 1 mi? Evet" },
        { a: "B", b: "C", label: "EBOB 1 mi? Hayır" }
      ]
    },
    "8.1.3": {
      kind: "table",
      caption: "Her turda en büyük asal çarpanı çıkar. Başlangıç 50.",
      headers: ["Tur", "Sayı", "En büyük asal çarpan", "Sonuç"],
      rows: [["1", "50", "…", "…"], ["2", "…", "…", "…"]]
    },
    "8.2.1": {
      kind: "panels",
      panels: [
        { title: "Boncuk paketi", lines: ["18 boncuk", "30 boncuk", "Ayrı ayrı, artmadan"] },
        { title: "Kontrol süresi", lines: ["9 dakika", "12 dakika", "Birlikte yeniden"] }
      ]
    },
    "8.2.2": {
      kind: "table",
      caption: "Çarpımı 40 olan çiftler",
      headers: ["Çift", "Ortak bölen", "Toplam"],
      rows: [
        ["1 ve 40", "1", "41"],
        ["2 ve 20", "2", "22"],
        ["4 ve 10", "2", "14"],
        ["5 ve 8", "1", "13"]
      ]
    },
    "8.3.1": {
      kind: "table",
      caption: "Her satır kendi içinde paketlenir",
      headers: ["Satır", "Kırmızı", "Mavi", "Paket boyu", "Toplam paket"],
      rows: [
        ["A", "24", "40", "?", "?"],
        ["B", "30", "42", "?", "?"]
      ]
    },
    "8.3.2": {
      kind: "lines",
      min: 0,
      max: 100,
      series: [{
        label: "0–100 birim. A her 6, B her 15. Başlangıç hariç, 100 dahil.",
        points: [0, 30, 60, 90, 100],
        open: [0],
        common: [30, 60, 90],
        first: 30
      }]
    },
    "8.3.3": {
      kind: "panels",
      panels: [
        { title: "İddia: 14 ve 25", lines: ["Aralarında asal"] },
        { title: "İddia: 12 ve 18", lines: ["EBOB 36"] },
        { title: "İddia: 8 ve 12", lines: ["EKOK 4"] }
      ]
    }
  };

  if (typeof module === "object" && module.exports) module.exports = diagrams;
  else root.NARTES_DIAGRAMS = diagrams;
})(typeof globalThis !== "undefined" ? globalThis : this);
