# 5. EKOK Hesaplama

Kazanım: **M.8.1.1.2**. Metaword bölüm başlangıcı: **s.25**.

Kaynak denetimi: Metaword s.25–28: ortak kat, tüm asal bölenler, büyük üs, kat durumları. Çarpım ilişkisi açıkça s.25’te vardır. MEB s.22–23; ADA’nın EBOB/EKOK bölümü.

Kapsam kararı: çekirdek kazanım iki sayı üzerindedir. MEB tanımında “en az iki” dense de taranan ilgili örneklerde bağımsız üç-sayılı hesaplama dizisi saptanmadığından bu sürümde üç sayıya ayrı ders açılmadı; iki sayılı senaryolar derinleştirildi.

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
- 5.1 EKOK tanımı: ilk ortak pozitif kat
- 5.2 Ortak katları listeleme yöntemi
- 5.3 Asal çarpanlarla EKOK: büyük üsler
- 5.4 İki sayıda EKOK kontrolü ve özel durumlar
- 5.5 EBOB-EKOK çarpım ilişkisi
- 5.6 Ortak asal bölen algoritmasıyla EKOK

---

### 5.1 EKOK tanımı: ilk ortak pozitif kat

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** İki pozitif sayının ortak pozitif katlarının en küçüğünü seçer. Başlangıçtaki 0’ın bu sorularda aranan kat olmadığını anlar.

**Ön bilgi:** Kat kavramı ve ritmik sayma.

**Görsel / somut model:** 6 ve 8 için 0’dan başlayan iki paralel sayı doğrusu; 0 gri başlangıç,24 ilk pozitif ortak nokta.

**Ön video kararı:** 5.1 için kısa anlatım, “EKOK tanımı: ilk ortak pozitif kat” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “6’nın katları 6,12,18,□;8’in katları 8,16,□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `24; 24`.
- İlk yanlışta ipucu: “İki listede ilk tekrar eden pozitif sayıyı ara.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki listede ilk tekrar eden pozitif sayıyı ara.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Kat kavramı ve ritmik sayma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “EKOK(6,8)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `24`.
- İlk yanlışta ipucu: “En küçük ortak pozitif katı seç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “En küçük ortak pozitif katı seç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Kat kavramı ve ritmik sayma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “0 başlangıç noktasıdır; bu etkinlikte cevap olarak □ (alınır/alınmaz).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `alınmaz`.
- İlk yanlışta ipucu: “Yeniden buluşma için pozitif ilerleme gerekir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Yeniden buluşma için pozitif ilerleme gerekir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Kat kavramı ve ritmik sayma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 4’ün pozitif katları4,8,12,...;6’nın6,12,... İlk ortak12; EKOK=12.

**Örnek 2.** 5 ve7: listeler5,10,15,20,25,30,35 ile7,14,21,28,35. İlk ortak35; EKOK=35.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EKOK(3,8)?
   - **Cevap / kontrol:** 24

2. **Soru:** EKOK(7,9)=1 olabilir mi?
   - **Cevap / kontrol:** Hayır;1 iki sayının katı değildir; EKOK63’tür.

**Yaygın öğrenci hataları:** En küçük ortak bölen 1’i seçmek; 0’ı cevap yapmak; ilk ortak yerine herhangi ortak katı seçmek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **5.2 Ortak katları listeleme yöntemi** ile bir sonraki fikri inceleyelim.”

---

### 5.2 Ortak katları listeleme yöntemi

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Kat listelerini ilk pozitif ortak değere kadar ilerletir. Ortak katların EKOK’un pozitif katları olduğunu örnek üzerinden görür.

**Ön bilgi:** 5.1.

**Görsel / somut model:** 4 ve10 kat şeritleri;20,40,60 ortak noktaları,20 ilk ortak. 9 ve12 için önceki36 geri çağırma kartı.

**Ön video kararı:** 5.2 için kısa anlatım, “Ortak katları listeleme yöntemi” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “4:4,8,12,16,□;10:10,□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `20; 20`.
- İlk yanlışta ipucu: “Katları ardışık ekleyerek üret.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Katları ardışık ekleyerek üret.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **5.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “EKOK(4,10)=□; sonraki ortak pozitif kat □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `20; 40`.
- İlk yanlışta ipucu: “Ortak noktalar20’şer ilerler.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Ortak noktalar20’şer ilerler.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **5.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “9 ve12 için ilk pozitif ortak işaret □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `36`.
- İlk yanlışta ipucu: “9,18,27,36 ve12,24,36 listelerini karşılaştır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “9,18,27,36 ve12,24,36 listelerini karşılaştır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **5.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 6 ve14:6,12,18,24,30,36,42;14,28,42. EKOK42; sonraki ortak84.

**Örnek 2.** 8 ve10:8,16,24,32,40;10,20,30,40. EKOK40;120 de ortak kattır ama en küçük değildir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 4 ve9’un ilk iki ortak pozitif katı?
   - **Cevap / kontrol:** 36,72

2. **Soru:** 6 ve10’un 100’den küçük ortak pozitif katları?
   - **Cevap / kontrol:** 30,60,90

**Yaygın öğrenci hataları:** Kat artışını her seferinde değiştirmek; ortak olan son görülen sayıyı en küçük sanmak; bölen listesini kullanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **5.3 Asal çarpanlarla EKOK: büyük üsler** ile bir sonraki fikri inceleyelim.”

---

### 5.3 Asal çarpanlarla EKOK: büyük üsler

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** İki sayıda görülen tüm asal tabanları toplar; her tabandan her iki sayıyı da kapsayacak kadar, yani en büyük üs kadar alır.

**Ön bilgi:** Asal üslü çarpım, EBOB küçük üsleri.

**Görsel / somut model:** 6=2×3 ve8=2³ için asal kartlar; üç2 ve bir3’lük kapsama şeridi. Eksik asal ayrı uyarı çerçevesinde.

**Ön video kararı:** 5.3 için kısa anlatım, “Asal çarpanlarla EKOK: büyük üsler” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “6 ve8’de görülen tüm asal tabanlar □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2,3`.
- İlk yanlışta ipucu: “Yalnız ortakları değil, iki satırdaki bütün farklı tabanları al.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Yalnız ortakları değil, iki satırdaki bütün farklı tabanları al.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal üslü çarpım, EBOB küçük üsleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “EKOK=2 üzeri □×3 üzeri □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3; 1`.
- İlk yanlışta ipucu: “Her sayı sonuçtaki çarpıma sığmalı.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Her sayı sonuçtaki çarpıma sığmalı.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal üslü çarpım, EBOB küçük üsleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “2³×3=□; EBOB için kullanılan üsler aynı mı? □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `24; hayır`.
- İlk yanlışta ipucu: “EKOK büyük, EBOB ortakların küçük üslerini kullanır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EKOK büyük, EBOB ortakların küçük üslerini kullanır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal üslü çarpım, EBOB küçük üsleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 28=2²×7,44=2²×11. EKOK=2²×7×11=308; ortak olmayan7 ve11 de alınır.

**Örnek 2.** 54=2×3³,66=2×3×11. EKOK=2×3³×11=594. 3 için büyük üs3 kullanılır.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EKOK(2³×5,2×3²)?
   - **Cevap / kontrol:** 2³×3²×5=360

2. **Soru:** EKOK(25,49)?
   - **Cevap / kontrol:** 5²×7²=1225

**Yaygın öğrenci hataları:** Yalnız ortak tabanları almak; küçük üs seçmek; iki aynı asalı gereksiz tekrar çarpmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **5.4 İki sayıda EKOK kontrolü ve özel durumlar** ile bir sonraki fikri inceleyelim.”

---

### 5.4 İki sayıda EKOK kontrolü ve özel durumlar

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Sonucun her iki sayının katı olduğunu denetler. Birbirinin katı iki sayıda büyüğü; eşit sayılarda kendisini seçer.

**Ön bilgi:** EKOK anlamı ve bölme.

**Görsel / somut model:** 14 ve56 şeritleri56’da birleşir; iki eş18 kartı aynı56 örneğinden ayrı gösterilir.

**Ön video kararı:** 5.4 için kısa anlatım, “İki sayıda EKOK kontrolü ve özel durumlar” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “56=14×4 olduğundan EKOK(14,56)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `56`.
- İlk yanlışta ipucu: “Büyük sayı zaten ikisinin de katı.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Büyük sayı zaten ikisinin de katı.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK anlamı ve bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.4/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “EKOK(18,18)=□ ve EKOK(1,23)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `18; 23`.
- İlk yanlışta ipucu: “Eşit sayının ilk katı kendisidir; bütün sayılar1’in katıdır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Eşit sayının ilk katı kendisidir; bütün sayılar1’in katıdır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK anlamı ve bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.4/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “EKOK(8,14)=56 kontrolünde 56÷8=□,56÷14=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7; 4`.
- İlk yanlışta ipucu: “İki bölme de kalansız olmalı; en küçüklük yöntemle doğrulanır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki bölme de kalansız olmalı; en küçüklük yöntemle doğrulanır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK anlamı ve bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.4/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 27 ve81:81,27’nin3 katı; EKOK81. Daha küçük ortak pozitif kat olamaz çünkü81’in ilk pozitif katı81’dir.

**Örnek 2.** 19 ve19:ilk ortak pozitif kat19. “EKOK iki sayıdan mutlaka büyüktür” değil, küçük olamaz ifadesi doğrudur.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EKOK(16,48)?
   - **Cevap / kontrol:** 48

2. **Soru:** EKOK(1,37) ve EKOK(28,28)?
   - **Cevap / kontrol:** 37 ve28

**Yaygın öğrenci hataları:** Kat durumunda küçüğü seçmek; sayılardan küçük sonuç üretmek; tam bölünen her ortak katı en küçük saymak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **5.5 EBOB-EKOK çarpım ilişkisi** ile bir sonraki fikri inceleyelim.”

---

### 5.5 EBOB-EKOK çarpım ilişkisi

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Yalnız iki pozitif sayı için a×b=EBOB(a,b)×EKOK(a,b) ilişkisini kontrol ve eksik değer bulmada kullanır. İlişkinin hesaplamanın yerini gerekçesiz almadığını görür.

**Ön bilgi:** EBOB ve EKOK; çarpma-bölme.

**Görsel / somut model:** 10 ve14 çarpımı140 ile2×70 çarpımı140 iki dengeli şeritte; “iki sayı için” etiketi.

**Ön video kararı:** 5.5 için kısa anlatım, “EBOB-EKOK çarpım ilişkisi” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “10×14=□; EBOB(10,14)=2.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `140`.
- İlk yanlışta ipucu: “Önce iki sayının çarpımını hesapla.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Önce iki sayının çarpımını hesapla.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve EKOK; çarpma-bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.5/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “2×EKOK=140 ise EKOK=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `70`.
- İlk yanlışta ipucu: “140’ı2’ye böl.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “140’ı2’ye böl.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve EKOK; çarpma-bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.5/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “70÷10=□,70÷14=□; sonuç iki sayının da katıdır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7; 5`.
- İlk yanlışta ipucu: “Bölümler tam sayı olmalı.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bölümler tam sayı olmalı.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve EKOK; çarpma-bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.5/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 16 ve28 için EBOB4: EKOK=(16×28)÷4=448÷4=112. Kontrol112÷16=7,112÷28=4.

**Örnek 2.** 18 ve35’in EBOB’u1’dir. EKOK=18×35=630; ortak asal yoksa çarpım doğrudan EKOK’tur.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** a=22,b=33,EBOB=11 ise EKOK?
   - **Cevap / kontrol:** 22×33÷11=66

2. **Soru:** a×b=540,EKOK=90 ise EBOB?
   - **Cevap / kontrol:** 540÷90=6

**Yaygın öğrenci hataları:** Bölme yerine toplama yapmak; iki sayılık ilişkiyi üç sayıya doğrudan taşımak; EBOB ile EKOK’u aynı sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **5.6 Ortak asal bölen algoritmasıyla EKOK** ile bir sonraki fikri inceleyelim.”

---

### 5.6 Ortak asal bölen algoritmasıyla EKOK

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Yan yana bölme şeridinin sağındaki tüm asal bölenleri çarpar. EBOB için yalnız ortak satırların seçilmesiyle farkını açıklar.

**Ön bilgi:** 3.5 ve EKOK anlamı.

**Görsel / somut model:** 10,14|2→5,7|5→1,7|7→1,1. Sağ sütunun tamamı EKOK çerçevesinde; yalnız2 EBOB çerçevesinde.

**Ön video kararı:** 5.6 için kısa anlatım, “Ortak asal bölen algoritmasıyla EKOK” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “10 ve14’ü2’ye bölünce5,7;5’i bölerken7 aşağıya □ yazılır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7`.
- İlk yanlışta ipucu: “Bölünmeyen sütun değişmeden taşınır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bölünmeyen sütun değişmeden taşınır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **3.5 ve EKOK anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.6/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Tüm sağ bölenler2,5,7; çarpımları □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `70`.
- İlk yanlışta ipucu: “EKOK için hepsini al.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EKOK için hepsini al.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **3.5 ve EKOK anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.6/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Aynı tabloda EBOB □; EKOK □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 70`.
- İlk yanlışta ipucu: “İki sütunu birlikte bölen yalnız ilk2’dir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki sütunu birlikte bölen yalnız ilk2’dir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **3.5 ve EKOK anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **5.6/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 14,21|2→7,21|3→7,7|7→1,1. EKOK2×3×7=42; ortak son7’den EBOB7.

**Örnek 2.** 18,40|2→9,20|2→9,10|2→9,5|3→3,5|3→1,5|5→1,1. EKOK2³×3²×5=360; EBOB2.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 8,15 tablosunda tüm sağ asallar ve EKOK?
   - **Cevap / kontrol:** 2,2,2,3,5;120

2. **Soru:** Sağ sütun2,2,3,7 ise EKOK?
   - **Cevap / kontrol:** 84; başlangıç sayıları verilmeden EBOB belirlenemez.

**Yaygın öğrenci hataları:** EKOK için yalnız ortak satırları çarpmak; bölünmeyen sayıyı1 yapmak; tablodaki tekrarları silmek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **6.1.1 Aynı anda yeniden: ışık, zil ve tekrar** ile bir sonraki fikri inceleyelim.”

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
