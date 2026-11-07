# 4. EBOB Problemleri

Kazanım: **M.8.1.1.2**. Metaword bölüm başlangıcı: **s.21**.

Kaynak denetimi: Metaword s.21–24: ayrı türleri eş paketleme, eş parça, doğrusal aralık, kesim ve kısıtlı paket. MEB s.19–21; ADA s.19. Kitaptaki alan/hacim içeren modeller kapsam dışıdır.

## Ortak ders ve geri bildirim sözleşmesi
- **Bu bir içerik ve ders senaryosu planıdır; çalışan arayüz değildir.** Yazılan “açılır”, “seçer”, “gösterilir” ifadeleri uygulama kararıdır, yapılmış yazılım iddiası değildir.
- Sıra kararı: **kısa konu videosu → görsel/model → sıralı satır içi boşluk etkinliği → iki çalışılmış örnek → bağımsız alıştırmalar → sonraki yaprak**. Hiçbir video üretilmedi; aşağıdaki metinler video/geri dönüş üretim notudur. Ana video cevapları peşinen göstermeden yöntemi tanıtır.
- Her adımın bütün boşlukları doğruysa bir sonraki adım açılır. İlk yanlışta o satırın ipucu gösterilir; tekrar yanlışta o satırın kısa açıklama/video notuna dönülür. Yanlışta otomatik geçiş ve cevap ezberletmek için kilit açma yoktur. Öğrenci yeniden dener; doğru yaptığında kaldığı yerden ilerler. Önceden açılan adımlar tekrar incelenebilir.
- Her yaprakta iki örnek çözüm ayrı açıklama kartıdır. Ardından alıştırmalar sırayla gelir; her alıştırma doğru olduğunda diğeri açılır. Hepsi doğru olduğunda sonraki yaprağa geçiş önerilir. Yanlış alıştırmada “Yaygın hatalar” başlığındaki ilgili hata ve bu yaprağın görseline geri dönüş kullanılır; işlem yeniden aynı sayılarla gösterilmezse benzer küçük bir örnek anlatılır. Cevap anahtarı öğretmen/yazar içindir, öğrenciye başlangıçta gösterilmez.
- Metin girişinde kenar boşlukları ve Türkçe büyük/küçük harfler normalleştirilir. Çarpan kümelerinde sıra önemsiz olabilir; “küçükten büyüğe” isteniyorsa sıralama ayrı geri bildirimle denetlenir. Fazladan ve eksik eleman ayrı bildirilir. Çoklu boşluklarda tüm alanlar birlikte kontrol edilir; doğru olan alan korunur.
- Çoklu doğru diziliş olabilecek ağaçlarda çarpım ve asallık kontrol edilir; küçükten büyüğe özel istem verilmemişse ters eşler de kabul edilir. Üslü yazımda `2²`, `2^2`, `2**2` eşdeğer giriş olarak planlanır; asal taban koşulu ayrıca sınanır.
- Renk tek başına bilgi taşımaz: metin etiketi, çerçeve ve işaret eşlik eder. Her boşluğun görünür adı ve ileride erişilebilir etiketi bulunacak; klavyeyle kullanılabilirlik sonraki uygulama kabul ölçütüdür.
- Bu ünitede sayılar pozitiftir; EKOK’ta **en küçük ortak pozitif kat** aranır. 0/negatif sayı özel durumları açılmaz. Uzun bölünebilme kuralları, Öklid algoritması, alan/hacim problemi yoktur.

## Bölüm ağacı
- **4.1 EBOB problem türleri**
  - 4.1.1 Eşit sayılı paketleme ve paylaştırma
  - 4.1.2 En büyük ortak parça ve kesim sayısı
  - 4.1.3 Doğrusal eş aralıklar: uçları sayma
- 4.2 EBOB probleminde çözüm planı
- **4.3 Örnek problem dizisi**
  - 4.3.1 Kısıtlı paket büyüklüğü: EBOB yetmez
  - 4.3.2 Karışık EBOB problem dizisi

---

### 4.1.1 Eşit sayılı paketleme ve paylaştırma

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Türleri karıştırmadan, artıksız ve her pakette aynı sayıda nesne olacak koşulu ortak bölenle modeller. En büyük paket ile en az paket sayısını ilişkilendirir.

**Ön bilgi:** EBOB hesaplama.

**Görsel / somut model:** 24 kırmızı ve 36 mavi kalem için iki ayrı şerit; aynı paket çerçevesi iki şeritte de kullanılır.

**Ön video kararı:** 4.1.1 için kısa anlatım, “Eşit sayılı paketleme ve paylaştırma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “Paket başına sayı 24 ve 36’nın ortak □i olmalı.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `bölen`.
- İlk yanlışta ipucu: “Paket büyüklüğü toplamları artmadan bölmeli.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Paket büyüklüğü toplamları artmadan bölmeli.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB hesaplama.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “En büyük paket büyüklüğü EBOB(24,36)=□ kalem.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `12`.
- İlk yanlışta ipucu: “Ortak bölenlerden en büyüğünü seç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Ortak bölenlerden en büyüğünü seç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB hesaplama.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Paket sayısı 24÷12+36÷12=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `5`.
- İlk yanlışta ipucu: “Paket büyüklüğü değil, kaç paket istendiğine bak.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Paket büyüklüğü değil, kaç paket istendiğine bak.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB hesaplama.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 28 sarı ve 42 yeşil fiş ayrı paketlenecek. EBOB=14 fiş/paket; 28÷14+42÷14=2+3=5 paket en azdır.

**Örnek 2.** 44 beyaz ve 66 siyah düğme karışmadan eşit paketlenir. EBOB=22; paket sayısı 2+3=5. Her paketin rengi tek türdür.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 30 turuncu,45 mor kart aynı koşulla: en büyük paket ve en az paket sayısı?
   - **Cevap / kontrol:** 15 kart; 2+3=5 paket.

2. **Soru:** 32 ve 48 rozet için paket büyüklüğü 8 seçilirse kaç paket? En az mı?
   - **Cevap / kontrol:** 4+6=10; hayır,16’lık paketle 5 olur.

**Yaygın öğrenci hataları:** Paket sayısı ile içeriği karıştırmak; renkleri karıştırarak toplamın bölenini seçmek; en az sözcüğünü görünce EKOK demek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **4.1.2 En büyük ortak parça ve kesim sayısı** ile bir sonraki fikri inceleyelim.”

---

### 4.1.2 En büyük ortak parça ve kesim sayısı

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Uzunlukları artıksız eş parçalara ayırır; en uzun parçayı EBOB’la bulur. Ayrı ayrı kesilen şeritlerde parça sayısı ile kesim sayısını ayırır.

**Ön bilgi:** Uzunluk birimleri ve EBOB.

**Görsel / somut model:** 35 cm ve 49 cm iki şerit; 7 cm sınırları, her şeridin iç kesim çizgileri ayrı numaralı.

**Ön video kararı:** 4.1.2 için kısa anlatım, “En büyük ortak parça ve kesim sayısı” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “En uzun eş parça EBOB(35,49)=□ cm.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7`.
- İlk yanlışta ipucu: “Parça uzunluğu iki şeridi de tam bölmeli.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Parça uzunluğu iki şeridi de tam bölmeli.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Uzunluk birimleri ve EBOB.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Toplam parça 35÷7+49÷7=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `12`.
- İlk yanlışta ipucu: “İki şeritten çıkan parçaları topla.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki şeritten çıkan parçaları topla.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Uzunluk birimleri ve EBOB.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Şeritler ayrı ayrı kesilirse kesim sayısı (5−1)+(7−1)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `10`.
- İlk yanlışta ipucu: “Bir şeritte n parça için n−1 kesim gerekir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bir şeritte n parça için n−1 kesim gerekir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Uzunluk birimleri ve EBOB.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 26 ve 39 cm şeritler: EBOB=13 cm. 2+3=5 parça; ayrı kesimde 1+2=3 kesim.

**Örnek 2.** 40 ve 56 cm şeritler: EBOB=8 cm. 5+7=12 parça; ayrı kesimde 4+6=10 kesim.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 22 ve 55 cm ip: en uzun eş parça ve toplam parça?
   - **Cevap / kontrol:** 11 cm;2+5=7 parça.

2. **Soru:** 18 ve 42 cm şerit tek tek kesilecek: en az kesim?
   - **Cevap / kontrol:** EBOB=6;3+7=10 parça;2+6=8 kesim.

**Yaygın öğrenci hataları:** Parça sayısını kesim sayısı sanmak; iki şerit için toplamdan yalnız 1 çıkarmak; birim dönüşümünü atlamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **4.1.3 Doğrusal eş aralıklar: uçları sayma** ile bir sonraki fikri inceleyelim.”

---

### 4.1.3 Doğrusal eş aralıklar: uçları sayma

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** İki ayrı doğru parçasını aynı en büyük tam sayı aralıkla işaretler. Başlangıç ve bitiş dahil olduğunda işaret sayısının aralık sayısından bir fazla olduğunu görür.

**Ön bilgi:** EBOB ve sayı doğrusu.

**Görsel / somut model:** 28 m ve 42 m iki bağımsız düz yol; her yolun iki ucu dolu nokta. Alan/çevre hesaplanmaz.

**Ön video kararı:** 4.1.3 için kısa anlatım, “Doğrusal eş aralıklar: uçları sayma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “Her iki yolda en büyük ortak aralık □ m.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `14`.
- İlk yanlışta ipucu: “28 ve 42’nin EBOB’unu bul.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “28 ve 42’nin EBOB’unu bul.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve sayı doğrusu.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “28 m yolda aralık sayısı □; iki uç dahil işaret sayısı □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 3`.
- İlk yanlışta ipucu: “0,14,28 noktalarını say.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “0,14,28 noktalarını say.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve sayı doğrusu.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “42 m yolda □ işaret; iki bağımsız yolda toplam □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4; 7`.
- İlk yanlışta ipucu: “0,14,28,42 dört noktadır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “0,14,28,42 dört noktadır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve sayı doğrusu.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.1.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 20 ve 35 m ayrı yollar: aralık 5 m. İşaret sayıları 20÷5+1=5 ve 35÷5+1=8; toplam13.

**Örnek 2.** 33 ve 55 m iki ayrı şerit: en büyük ortak aralık11; işaretler4 ve6, toplam10. Ortak başlangıç varsayılmaz.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 18 ve 30 m ayrı iki yolda iki uç dahil en az toplam işaret?
   - **Cevap / kontrol:** Aralık6;4+6=10.

2. **Soru:** 40 m tek yolda 8 m aralıkla uçlar dahil kaç işaret?
   - **Cevap / kontrol:** 40÷8+1=6.

**Yaygın öğrenci hataları:** Uçları unutmak; iki bağımsız yolun bir ucunu ortak saymak; aralık sayısını nokta sayısı sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **4.2 EBOB probleminde çözüm planı** ile bir sonraki fikri inceleyelim.”

---

### 4.2 EBOB probleminde çözüm planı

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Önce aranan niceliği ve artıksızlık koşulunu belirler; modeli seçip hesaplar, sonuca birim ve anlam kontrolü yapar.

**Ön bilgi:** 4.1 problem türleri.

**Görsel / somut model:** “Veri → koşul → aranan → model → işlem → kontrol” altı kutulu akış; 52 ve 78 kart örneği.

**Ön video kararı:** 4.2 için kısa anlatım, “EBOB probleminde çözüm planı” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “52 ve 78 kart eş sayılı ayrı paketlenecek. Paket büyüklüğü iki sayıyı da □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `bölmeli`.
- İlk yanlışta ipucu: “Toplam aramıyoruz, birim paket büyüklüğünü arıyoruz.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Toplam aramıyoruz, birim paket büyüklüğünü arıyoruz.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **4.1 problem türleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “En büyük paket □; toplam paket 52÷26+78÷26=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `26; 5`.
- İlk yanlışta ipucu: “EBOB ara sonuç, paket sayısı son sonuç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EBOB ara sonuç, paket sayısı son sonuç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **4.1 problem türleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “26×2=52 ve 26×3=78 kontrolünde artan □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `0`.
- İlk yanlışta ipucu: “Bulunan paketin iki toplamı da tükettiğini sınayalım.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bulunan paketin iki toplamı da tükettiğini sınayalım.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **4.1 problem türleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 34 ve 51 pul: aranan en az paket sayısı. Paket içeriği EBOB=17 olur. Bölümler2 ve3; yanıt5 paket. “17 paket” yanlış birimdir.

**Örnek 2.** 45 ve 75 cm şerit: aranan en uzun eş parça. EBOB=15 cm doğrudan son yanıttır; toplam8 parça bilgisi sorulmadıkça sonuç yerine yazılmaz.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 38 ve 57 kart için “en büyük paket” sorusunun yanıtı?
   - **Cevap / kontrol:** 19 kart/paket.

2. **Soru:** Aynı veride “en az paket sayısı” sorusunun yanıtı?
   - **Cevap / kontrol:** 2+3=5 paket.

**Yaygın öğrenci hataları:** Önce işlem seçip soruyu sonra okumak; EBOB’u her durumda son cevap yapmak; birimsiz sonuç vermek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **4.3.1 Kısıtlı paket büyüklüğü: EBOB yetmez** ile bir sonraki fikri inceleyelim.”

---

### 4.3.1 Kısıtlı paket büyüklüğü: EBOB yetmez

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Ek üst sınır olduğunda EBOB’un bölenleri arasından koşula uyan en büyüğü seçer. En büyük ortak böleni otomatik son cevap yapmaz.

**Ön bilgi:** EBOB ve bir sayının tüm bölenleri.

**Görsel / somut model:** 36 ve 60 nesne; EBOB=12 kartının altında 1,2,3,4,6,12; “paket en çok 8” süzgeci.

**Ön video kararı:** 4.3.1 için kısa anlatım, “Kısıtlı paket büyüklüğü: EBOB yetmez” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “36 ve 60’ın EBOB’u □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `12`.
- İlk yanlışta ipucu: “2²×3 ortak çarpımını kullan.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2²×3 ortak çarpımını kullan.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve bir sayının tüm bölenleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.3.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Paket en çok 8 nesne içeriyorsa 12 uygun mu? □; uygun en büyük ortak bölen □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `hayır; 6`.
- İlk yanlışta ipucu: “12’nin bölenlerinden 8’i aşmayan en büyüğünü seç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “12’nin bölenlerinden 8’i aşmayan en büyüğünü seç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve bir sayının tüm bölenleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.3.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “6’lık paketle toplam 36÷6+60÷6=□ paket.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `16`.
- İlk yanlışta ipucu: “Kısıta uyan paket büyüklüğüyle böl.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Kısıta uyan paket büyüklüğüyle böl.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve bir sayının tüm bölenleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.3.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 48 ve 72 jeton, paket en çok10: EBOB24; bölenleri1,2,3,4,6,8,12,24. Uygun en büyük8;6+9=15 paket.

**Örnek 2.** 40 ve 64 boncuk, paket en çok6: EBOB8; uygun bölenler1,2,4. En büyük4;10+16=26 paket.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 54 ve 90 pul; paket en çok10: en az kaç paket?
   - **Cevap / kontrol:** EBOB18; uygun en büyük9;6+10=16.

2. **Soru:** 42 ve 70 kart; paket en çok8: paket büyüklüğü?
   - **Cevap / kontrol:** EBOB14; en büyük uygun bölen7.

**Yaygın öğrenci hataları:** Üst sınıra eşit her sayıyı seçmek; EBOB12 yerine 8’i bölen kontrolü yapmadan almak; kısıtı okumamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **4.3.2 Karışık EBOB problem dizisi** ile bir sonraki fikri inceleyelim.”

---

### 4.3.2 Karışık EBOB problem dizisi

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Paket, parça ve işaret sorularında aynı EBOB çekirdeğinden sonra değişen son işlemi ayırt eder. Çözüm gerekçesini bir cümleyle sunar.

**Ön bilgi:** 4.1–4.3.1.

**Görsel / somut model:** Üç sütun: nesne paketi / şerit parçası / uçları dahil çizgi. Her sütunda “EBOB neyi ölçüyor?” etiketi.

**Ön video kararı:** 4.3.2 için kısa anlatım, “Karışık EBOB problem dizisi” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “24 ve 40 kart için en büyük paket □ karttır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `8`.
- İlk yanlışta ipucu: “Bölen büyüklüğü bir paketin içeriğidir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bölen büyüklüğü bir paketin içeriğidir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **4.1–4.3.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.3.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “24 ve 40 cm şeritlerden bu büyüklükte toplam □ parça çıkar.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `8`.
- İlk yanlışta ipucu: “24÷8+40÷8.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “24÷8+40÷8.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **4.1–4.3.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.3.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “24 ve 40 m iki bağımsız yolda 8 m aralıkla uçlar dahil toplam □ işaret olur.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `10`.
- İlk yanlışta ipucu: “Her yola bir uç işareti fazlası ekle.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Her yola bir uç işareti fazlası ekle.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **4.1–4.3.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **4.3.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 27 ve 63 kalem: EBOB9; aynı büyüklükte en az3+7=10 paket. Aynı sayılar cm şerit olsaydı10 parça, ayrı kesimde8 kesim olurdu.

**Örnek 2.** 32 ve 80 m ayrı yollar: EBOB16 m; işaret sayıları3 ve6, toplam9. Aynı sayıda nesne paketlense2+5=7 paket olurdu.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 30 ve 50 nesnenin en büyük paketle paket sayısı?
   - **Cevap / kontrol:** EBOB10;3+5=8.

2. **Soru:** 30 ve 50 cm şeridi en uzun eş parçaya tek tek kesmek kaç kesim?
   - **Cevap / kontrol:** 10 cm;3+5 parça;2+4=6 kesim.

3. **Soru:** 30 ve 50 m ayrı yollara aynı en büyük aralıkla iki uç dahil toplam işaret?
   - **Cevap / kontrol:** 10 m;4+6=10.

**Yaygın öğrenci hataları:** Bağlam farklıyken aynı son formülü ezberlemek; sayı aynıysa sorulan niceliğin de aynı olduğunu sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **5.1 EKOK tanımı: ilk ortak pozitif kat** ile bir sonraki fikri inceleyelim.”

## Bölüm sonu öğretmen/yazar kontrolü
- Her yaprakta hedef, ön bilgi, tarif edilmiş özgün model, üç kademeli boşluk, cevap, ipucu ve tekrar yanlışta geri dönüş notu var.
- Her yaprakta en az iki çalışılmış örnek ve iki bağımsız alıştırma var.
- Ağaç yaprakları asal; çarpımlar başlangıç sayısını veriyor; EBOB sonuçları iki sayıyı bölüyor; EKOK sonuçları iki sayının katı. Bu ölçütlerin yazılım testleri henüz yapılmadı.
- Alan/hacim hesabı yok; satır içi boşluklar çalışma planıdır.

## Kaynak dosyaları
- `C:\Users\AliCangUllu-26\Desktop\Nartes+\kaynaklar\metaword\8_sf_metaword_matematik_v2.md`
- `C:\Users\AliCangUllu-26\Desktop\Nartes+\kaynaklar\meb-kitap\matematik8-meb.md`
- `C:\Users\AliCangUllu-26\Desktop\Nartes+\kaynaklar\meb-kitap\matematik8-ada.md`
- `C:\Users\AliCangUllu-26\Desktop\Nartes+\kaynaklar\yillik-plan\8_sinif_matematik_yillik_plan.md`
- `C:\Users\AliCangUllu-26\Desktop\Nartes+\docs\08-lgs-8-sinif-konulari.md`

[Ana plana dön](plan.md)
