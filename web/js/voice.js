/* Teacher voice for Çarpanlar ve Katlar. Definitions follow Başucu 8 patterns;
   practice sentences are original. */
(function (root) {
  "use strict";

  var GOLD = {
    "1.1": "Altın bilgi: Bir doğal sayıyı kalansız bölen pozitif tam sayılar, o sayının çarpanlarıdır. Çarpan, bölen demektir. 1 her pozitif tam sayının en küçük pozitif çarpanıdır. Sayının kendisi ise en büyük çarpanıdır.",
    "1.2": "Altın bilgi: Bir sayının katını, o sayıyı tekrar tekrar ekleyerek ya da çarparak elde edersin. Bu derste listeye pozitif katlardan başlarız.",
    "1.3": "Altın bilgi: Aynı eşitliği iki yönden oku. Küçük parça çarpandır; bütün, onun katıdır. Parça tam oturmuyorsa çarpan sayılmaz.",
    "1.5": "Altın bilgi: Çarpanları küçükten büyüğe diz. 1’i de, sayının kendisini de listeden düşürme.",
    "1.6": "Altın bilgi: Bir sayının çarpanı olması için bölmede kalan 0 olmalıdır.",
    "1.7": "Altın bilgi: Bir tam sayının kendisiyle çarpımına eşit olan sayılar tam karedir. Tam kare pozitif sayıların pozitif bölen sayısı tektir.",
    "2.1.1": "Altın bilgi: 1 ve kendisinden başka pozitif böleni olmayan, 1’den büyük tam sayılar asal sayıdır. Asal sayının tam iki pozitif çarpanı vardır.",
    "2.1.2": "Altın bilgi: 1 asal değildir; bileşik de değildir. Asal olmak için 1’den büyük olmak ve tam iki farklı pozitif böleni olmak gerekir.",
    "2.1.3": "Altın bilgi: En küçük asal sayı 2’dir. 2’den başka çift asal sayı yoktur.",
    "2.1.4": "Altın bilgi: 1’den büyük ve ikiden fazla pozitif böleni olan sayılar bileşiktir. Asal olmadığını göstermek için bir tane ek bölen yeter.",
    "2.4.1": "Altın bilgi: Aynı asalı kaç kez çarptığını üs olarak yazarsın. Farklı asal sayısı ile tekrar sayısı aynı şey değildir.",
    "3.1": "Altın bilgi: İki doğal sayıyı da bölen en büyük doğal sayı, bu sayıların EBOB’udur. EBOB sayılardan büyük olamaz.",
    "3.4": "Altın bilgi: Birbirinin katı olan iki sayıdan küçük olan EBOB’dur. Ardışık iki pozitif tam sayının EBOB’u 1’dir.",
    "5.1": "Altın bilgi: EKOK, iki sayının ortak pozitif katlarının en küçüğüdür. Bu sorularda 0 aradığın kat değildir.",
    "5.5": "Altın bilgi: Yalnız iki pozitif sayı için şu denetimi kullanabilirsin: a × b = EBOB(a, b) × EKOK(a, b).",
    "7.1": "Altın bilgi: Ortak pozitif bölenleri yalnız 1 olan iki doğal sayı aralarında asaldır. İkisinin de asal olması gerekmez."
  };

  var PROMPTS = {
    "1.1": [
      "14 nesneyi yedişer ayırırsan kaç grup görürsün? □",
      "14 = 7 × □ olduğuna göre eksik çarpanı sen yaz.",
      "14 ÷ 7 işleminde kalan □. Çarpanın diğer adı □."
    ],
    "1.2": [
      "İki tane 5’lik çubuğu ucuca eklersen uzunluk □ birim olur.",
      "5’in ilk dört pozitif katını sen sırala: 5, 10, □, □.",
      "35 = 5 × □. O hâlde 35, 5’in bir □dır."
    ],
    "1.3": [
      "12’lik çubuğa 3’lük parçadan kaç tane tam sığar? □ Kalan kaç? □",
      "Küçük olan çarpandır, büyük olan kattır. 3, 12’nin □; 12 ise 3’ün □.",
      "10 ÷ 4 işleminde kalan □. Kalan sıfır değilse 4, 10’un çarpanı □."
    ],
    "1.4": [
      "28’i çarpan çiftleriyle yaz: 28 = 1 × □ = 2 × □.",
      "28 = 4 × □. 7 × 4 yeni bir çift □.",
      "36 için 6 × 6 çiftindeki 6, bölen listesine □ kez yazılır."
    ],
    "1.5": [
      "20’nin çiftlerini tamamla: 1 × 20, 2 × 10, 4 × □.",
      "20’nin sıralı bölenleri 1, 2, □, □, 10, 20.",
      "18’in listesi 1, 2, 3, 6, 9, □. 4 bu listede yer □."
    ],
    "1.6": [
      "23 = 5 × 4 + □. Artan noktaları sen say.",
      "24 = 6 × 4 + □ olduğundan 24, 6’ya □ bölünür.",
      "Bir pozitif bölenin çarpan sayılması için kalan □ olmalıdır."
    ],
    "1.7": [
      "25’in bölenleri 1, □, 25. Toplam □ tanedir.",
      "26’nın bölenleri 1, 2, 13, 26. Bu sayı □tir (tek/çift).",
      "35 ve 81’den çarpan sayısı tek olan □ tam karedir."
    ],
    "2.1.1": [
      "7’nin pozitif bölenleri 1 ve □. Bölen sayısı □.",
      "Tam iki farklı pozitif böleni olan 7 sayısı □dır.",
      "1, 2, 9 ve 13 içinden asal olanlar □ ve □."
    ],
    "2.1.2": [
      "1’in farklı pozitif bölen sayısı □.",
      "Asal olmak için □ farklı pozitif bölen gerekir.",
      "1 asal □; bileşik de □."
    ],
    "2.1.3": [
      "2’nin bölenleri 1 ve □ olduğundan 2 □dır.",
      "10’un 1 ve kendisi dışında □ böleni vardır.",
      "2’den büyük çift sayılar asal □."
    ],
    "2.2.2": [
      "60’ı ayırmaya başla: 60 = □ × 30.",
      "30 = □ × 15. 15’i küçük asal önce gelecek şekilde □ × □ yaz.",
      "60’ın farklı asal çarpanları □. Tekrarlarla yaprak sayısı □."
    ],
    "2.3.3": [
      "84 ÷ □ = 42 ve 42 ÷ □ = 21. İlk bölenleri sen seç.",
      "21 ÷ □ = 7 ve 7 ÷ □ = 1. Son asalı atlama.",
      "84 = 2² × 3 × □. Farklı asal çarpan sayısı □."
    ],
    "2.4.2": [
      "60 = 2 × 2 × 3 × 5. Üsler: 2 üzeri □, 3 üzeri □, 5 üzeri □.",
      "2² × 3 × 5 = □ × 3 × 5 = □.",
      "4 × 15 aynı sayıyı verir; tabanları asal olan gösterim □."
    ],
    "3.1": [
      "16 ve 28’in ortak bölenlerini tamamla: 1, 2, □.",
      "Ortak bölenlerin en büyüğü □. EBOB(16, 28) = □.",
      "EBOB, küçük sayı olan 16’dan büyük □."
    ],
    "3.2": [
      "18 ve 24’ün ortak bölenleri 1, 2, 3, □.",
      "En büyük ortak bölen □. Bunun asal olması gerekir mi? □.",
      "20 ve 32’nin ortak bölenleri 1, 2, 4. EBOB = □."
    ],
    "5.1": [
      "6’nın katlarını sürdür: 6, 12, 18, □. 8’in katlarında ilk ortak □.",
      "İlk ortak pozitif kat EKOK(6, 8) = □.",
      "0 bu etkinlikte cevap olarak □ (alınır/alınmaz)."
    ],
    "7.1": [
      "8 ve 15’in ortak pozitif böleni yalnız □.",
      "EBOB(8, 15) = □. Bu sayılar aralarında □.",
      "8 ve 15’in tek tek asal olması gerekir mi? □."
    ]
  };

  function promptFor(leaf, step, index) {
    var custom = PROMPTS[leaf.id];
    if (custom && custom[index] && custom[index].split("□").length === step.prompt.split("□").length) {
      return custom[index];
    }
    return step.prompt;
  }

  function lead(id, index) {
    var sets = [
      ["Şimdi sen dene.", "Aynı fikri bir adım daha götür.", "Bunu da sen bitir."],
      ["Modele bak, acele etme.", "Devam edelim.", "Son hükmü sen ver."],
      ["Kalemini düşünerek doldur.", "Bir bağlantı daha kur.", "Artık kuralı sen söyle."]
    ];
    var bucket = 0;
    for (var i = 0; i < id.length; i += 1) bucket += id.charCodeAt(i);
    return sets[bucket % sets.length][index] || "Senin sıran.";
  }

  function fill(prompt, answers) {
    var parts = prompt.split("□");
    var out = "";
    parts.forEach(function (part, index) {
      out += part;
      if (index < answers.length) out += answers[index];
    });
    return out;
  }

  function speak(leaf) {
    return {
      gold: GOLD[leaf.id] || "",
      goal: "Bu yaprakta senden şunu istiyorum: " + leaf.goal.charAt(0).toLocaleLowerCase("tr-TR") + leaf.goal.slice(1),
      steps: leaf.steps.map(function (step, index) {
        var prompt = promptFor(leaf, step, index);
        return {
          lead: lead(leaf.id, index),
          prompt: prompt,
          hint: "Bir kez daha bak. " + step.hint,
          explain: "Beraber netleştirelim. " + step.hint + " Cümle şöyle durur: " + fill(prompt, step.answers)
        };
      })
    };
  }

  var api = { speak: speak };
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.NartesVoice = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
