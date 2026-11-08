# 6. EKOK Problemleri

Kazanım: **M.8.1.1.2**. Metaword bölüm başlangıcı: **s.29**.

Kaynak denetimi: Metaword s.29–32: birlikte tekrar, doğrusal ortak uzunluk, alt/üst sınır ve sayma. MEB s.22–24. Alan/hacim hesaplatılmaz.

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
- **6.1 EKOK problem türleri**
  - 6.1.1 Aynı anda yeniden: ışık, zil ve tekrar
  - 6.1.2 Eş gruplarla aynı toplamı oluşturma
- 6.2 EKOK probleminde çözüm planı
- **6.3 Örnek problem dizisi**
  - 6.3.1 Bir aralıkta ortak tekrarları sayma
  - 6.3.2 Alt ve üst sınırla ortak toplam seçme
  - 6.3.3 EBOB mu EKOK mu? Gerekçeyle ayırma

---

### 6.1.1 Aynı anda yeniden: ışık, zil ve tekrar

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Birlikte başlayan iki düzenli olayın ilk sonraki ortak anını EKOK’la bulur. Başlangıcı yeniden karşılaşma sanmaz.

**Ön bilgi:** EKOK ve zaman çizgisi.

**Görsel / somut model:** 6 ve8 dakikalık iki ışığın0,6,12,... ve0,8,16,... çizgileri.0 başlangıç,24 ilk yeniden buluşma.

**Ön video kararı:** 6.1.1 için kısa anlatım, “Aynı anda yeniden: ışık, zil ve tekrar” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “Birlikte başlangıçtan sonraki ilk ortak süre EKOK(6,8)=□ dakika.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `24`.
- İlk yanlışta ipucu: “İki sürenin ilk pozitif ortak katını seç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki sürenin ilk pozitif ortak katını seç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK ve zaman çizgisi.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.1.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “24 dakikada birinci ışık □, ikinci ışık □ aralık tamamlar.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4; 3`.
- İlk yanlışta ipucu: “Süreyi her periyoda böl.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Süreyi her periyoda böl.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK ve zaman çizgisi.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.1.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Başlangıçtaki0 yeniden birlikte yanma sayısına □ (dahildir/dahil değildir).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `dahil değildir`.
- İlk yanlışta ipucu: ““Yeniden” sözcüğü başlangıçtan sonrasını sorar.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. ““Yeniden” sözcüğü başlangıçtan sonrasını sorar.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK ve zaman çizgisi.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.1.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** İki ses sırasıyla10 ve14 dakikada tekrarlanıyor, birlikte başlıyor. EKOK70; ilk sonraki ortak ses70 dakika sonra.

**Örnek 2.** İki gösterge9 ve15 saniyede yanıyor, birlikte başlıyor. EKOK45 saniye; biri5,diğeri3 aralık tamamlayınca buluşur.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 4 ve10 dakikalık iki olay birlikte başlarsa sonraki buluşma?
   - **Cevap / kontrol:** 20 dakika sonra.

2. **Soru:** 8 ve12 saniyelik olaylarda0’dan sonraki ikinci ortak an?
   - **Cevap / kontrol:** 48 saniye; ilk24.

**Yaygın öğrenci hataları:** Süreleri toplamak;0’ı ilk sonraki ortak an saymak; birlikte başlamayan olaylara aynı yöntemi koşulsuz uygulamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **6.1.2 Eş gruplarla aynı toplamı oluşturma** ile bir sonraki fikri inceleyelim.”

---

### 6.1.2 Eş gruplarla aynı toplamı oluşturma

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** İki farklı paket büyüklüğüyle oluşturulabilen aynı en küçük toplamı ortak katla modeller. Paket sayılarının farklı olabileceğini anlar.

**Ön bilgi:** Kat ve EKOK.

**Görsel / somut model:** 6’lı ve10’lu rozet paketleri ayrı satırlarda birikir;30 toplamında birleşir. Alan veya hacim modeli yok.

**Ön video kararı:** 6.1.2 için kısa anlatım, “Eş gruplarla aynı toplamı oluşturma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “6’lı ve10’lu paketlerle ayrı ayrı elde edilebilen en küçük eş toplam □ rozettir.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `30`.
- İlk yanlışta ipucu: “Toplam her iki paket büyüklüğünün katı olmalı.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Toplam her iki paket büyüklüğünün katı olmalı.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Kat ve EKOK.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.1.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “30 rozet için6’lıdan □,10’ludan □ paket gerekir.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `5; 3`.
- İlk yanlışta ipucu: “Eşit olan paket sayısı değil toplam nesne sayısıdır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Eşit olan paket sayısı değil toplam nesne sayısıdır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Kat ve EKOK.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.1.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Bu model ortak □ (bölen/kat) arar.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `kat`.
- İlk yanlışta ipucu: “Küçük paketleri birleştirerek büyüğe gidiyoruz.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Küçük paketleri birleştirerek büyüğe gidiyoruz.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Kat ve EKOK.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.1.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 8’li ve14’lü kart paketleri: eş en küçük toplam EKOK56 kart. İlk tür7,ikinci tür4 paket gerektirir.

**Örnek 2.** 9’lu ve12’li etiket paketleri: EKOK36. Ayrı ayrı36 etiket için4 ve3 paket alınır; toplam iki tür paket sayısı7’dir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 15’li ve20’li kutularla en küçük eş toplam ve paket adetleri?
   - **Cevap / kontrol:** 60 nesne;4 ve3 paket.

2. **Soru:** 7’li ve11’li paketlerle eş en küçük toplam?
   - **Cevap / kontrol:** 77 nesne;11 ve7 paket.

**Yaygın öğrenci hataları:** Eşit toplam ile eşit paket sayısını karıştırmak; birleştirme modelinde EBOB kullanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **6.2 EKOK probleminde çözüm planı** ile bir sonraki fikri inceleyelim.”

---

### 6.2 EKOK probleminde çözüm planı

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Ortak kat gerektiren koşulu belirtir, ilk pozitif çözümü bulur ve sorulan süre/saat/adede dönüştürür. Başlangıç anının ortak olduğunu kontrol eder.

**Ön bilgi:** 6.1 ve zaman toplama.

**Görsel / somut model:** “Birlikte başlangıç var mı? → periyotlar → EKOK → aranan birim → yerine koy” akış kartları.

**Ön video kararı:** 6.2 için kısa anlatım, “EKOK probleminde çözüm planı” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “8 ve20 dakikalık olaylar birlikte başlıyor; ortak tekrar süresi □ dakika.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `40`.
- İlk yanlışta ipucu: “8 ve20’nin en küçük ortak katını hesapla.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “8 ve20’nin en küçük ortak katını hesapla.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **6.1 ve zaman toplama.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Başlangıç09.10 (Europe/İstanbul) ise sonraki ortak an □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `09.50`.
- İlk yanlışta ipucu: “Bulduğun40 dakikayı başlangıca ekle.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bulduğun40 dakikayı başlangıca ekle.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **6.1 ve zaman toplama.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “40÷8=□,40÷20=□; iki olay da tam sayıda aralık tamamlar.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `5; 2`.
- İlk yanlışta ipucu: “Sonucun her periyodun katı olduğunu kontrol et.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Sonucun her periyodun katı olduğunu kontrol et.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **6.1 ve zaman toplama.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 14 ve21 dakikalık iki döngü09.05’te birlikte başlar (Europe/İstanbul). EKOK42; ilk sonraki ortak an09.47. Süre ile saat ayrı yanıt türüdür.

**Örnek 2.** 16 ve24 saniyelik iki sinyal birlikte başlar. EKOK48;120 saniye içinde başlangıç hariç ortak anlar48 ve96’dır:2 kez.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 6 ve15 dakikalık olaylar10.45’te birlikte başlıyor (Europe/İstanbul); sonraki ortak saat?
   - **Cevap / kontrol:** 11.15 (Europe/İstanbul); EKOK30 dakika.

2. **Soru:** 10 ve25 saniyelik sinyallerde0 hariç ilk ortak süre?
   - **Cevap / kontrol:** 50 saniye.

**Yaygın öğrenci hataları:** EKOK sonucunu doğrudan saat diye yazmak; saat toplarken60 dakikayı taşımamak; birlikte başlangıç koşulunu atlamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **6.3.1 Bir aralıkta ortak tekrarları sayma** ile bir sonraki fikri inceleyelim.”

---

### 6.3.1 Bir aralıkta ortak tekrarları sayma

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** EKOK’u bulduktan sonra verilen zaman aralığına düşen ortak katları listeler. Başlangıç ve bitişin dahil olup olmadığını ayrı kontrol eder.

**Ön bilgi:** EKOK ve sınır ifadeleri.

**Görsel / somut model:** 6 ve14 dakikalık olaylar için0–130 zaman çizgisi;0 açık,42,84,126 dolu noktalar. Uç açıklaması metinle verilir.

**Ön video kararı:** 6.3.1 için kısa anlatım, “Bir aralıkta ortak tekrarları sayma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “Ortak tekrar aralığı EKOK(6,14)=□ dakika.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `42`.
- İlk yanlışta ipucu: “2×3×7 hesapla.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2×3×7 hesapla.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK ve sınır ifadeleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “0 hariç130 dakika içinde ortak anlar42,84,□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `126`.
- İlk yanlışta ipucu: “42’şer ekle,130’u aşma.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “42’şer ekle,130’u aşma.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK ve sınır ifadeleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Başlangıç hariç □ kez; başlangıç da dahil □ kez.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3; 4`.
- İlk yanlışta ipucu: “0 için ayrıca bir işaret ekle.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “0 için ayrıca bir işaret ekle.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK ve sınır ifadeleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 8 ve18 dakikalık iki olayın EKOK’u72.0’dan sonraki216 dakika dahil ortak anlar72,144,216;3 kez. Başlangıç dahil4 kez.

**Örnek 2.** 9 ve12 saniyelik sinyallerin EKOK’u36.0<t<108 için36 ve72;2 kez.108 dahil olsaydı3 kez olurdu.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 4 ve6 dakikalık döngüler; başlangıç hariç60 dakika dahil kaç ortak an?
   - **Cevap / kontrol:** EKOK12;12,24,36,48,60:5 kez.

2. **Soru:** Aynı durumda başlangıç dahil kaç ortak an?
   - **Cevap / kontrol:** 6 kez.

**Yaygın öğrenci hataları:** Dahil sınırı atlamak; başlangıcı her soruda otomatik eklemek; periyotları ayrı ayrı sayıp toplamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **6.3.2 Alt ve üst sınırla ortak toplam seçme** ile bir sonraki fikri inceleyelim.”

---

### 6.3.2 Alt ve üst sınırla ortak toplam seçme

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** EKOK’un kendisi koşulu sağlamıyorsa onun katlarını sınırla karşılaştırır. “En az” ve “en çok” ifadesini ortak kat modeli kurulduktan sonra kullanır.

**Ön bilgi:** EKOK’un katları, birim eşitleme.

**Görsel / somut model:** 8’li ve12’li paketlerin ortak toplamları24,48,72,96,120;50’den büyük ve100’den küçük bölge şeridi.

**Ön video kararı:** 6.3.2 için kısa anlatım, “Alt ve üst sınırla ortak toplam seçme” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “8 ve12 için ortak toplamların temel adımı □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `24`.
- İlk yanlışta ipucu: “EKOK24’tür.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EKOK24’tür.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK’un katları, birim eşitleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “50’den büyük en küçük ortak toplam □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `72`.
- İlk yanlışta ipucu: “24,48,72 listesini50 ile karşılaştır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “24,48,72 listesini50 ile karşılaştır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK’un katları, birim eşitleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “100’den küçük en büyük ortak toplam □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `96`.
- İlk yanlışta ipucu: “120 sınırı aşar;96 aşmaz.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “120 sınırı aşar;96 aşmaz.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EKOK’un katları, birim eşitleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 10’lu ve14’lü paketlerle200’den büyük en küçük eş toplam: EKOK70;70,140,210. Yanıt210, paket adetleri21 ve15.

**Örnek 2.** 6 cm ve16 cm şeritlerle ayrı ayrı tam kurulabilen,200 cm’den kısa en uzun sıra: EKOK48;48,96,144,192. Yanıt192 cm;32 ve12 şerit gerekir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 9’lu ve15’li paketlerle100’den büyük en küçük eş toplam?
   - **Cevap / kontrol:** EKOK45;135.

2. **Soru:** 4 ve10’un150’den küçük en büyük ortak katı?
   - **Cevap / kontrol:** EKOK20;140.

3. **Soru:** 8 ve12’nin72’den büyük en küçük ortak katı?
   - **Cevap / kontrol:** 96;72 sınırda olduğu için alınmaz.

**Yaygın öğrenci hataları:** Alt sınırı doğrudan cevap yapmak; EKOK’u bulup ek koşulu unutmak; büyük/eşit ifadelerini karıştırmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **6.3.3 EBOB mu EKOK mu? Gerekçeyle ayırma** ile bir sonraki fikri inceleyelim.”

---

### 6.3.3 EBOB mu EKOK mu? Gerekçeyle ayırma

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Benzer nesne hikâyelerinde bölme ve birleştirme yönünü tanır. Yalnız anahtar sözcükle değil, adayın bölen mi kat mı olması gerektiğiyle karar verir.

**Ön bilgi:** EBOB ve EKOK problem modelleri.

**Görsel / somut model:** Aynı6 ve10 sayıları iki panelde:60? değil, birinde6 ve10 nesne ortak paket büyüklüğüne bölünür; diğerinde6’lı ve10’lu paketlerle ortak toplam oluşturulur.

**Ön video kararı:** 6.3.3 için kısa anlatım, “EBOB mu EKOK mu? Gerekçeyle ayırma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “6 ve10 nesneyi artmadan eş paketlemek: paket büyüklüğü ortak □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `bölen`.
- İlk yanlışta ipucu: “Eldeki toplamlar bu sayıya bölünecek.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Eldeki toplamlar bu sayıya bölünecek.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve EKOK problem modelleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “6’lı ve10’lu paketlerle aynı toplamı kurmak: toplam ortak □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `kat`.
- İlk yanlışta ipucu: “Paketler çoğaltılıp birleştirilecek.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Paketler çoğaltılıp birleştirilecek.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve EKOK problem modelleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “İlk modelde en büyük paket □; ikinci modelde en küçük toplam □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 30`.
- İlk yanlışta ipucu: “EBOB(6,10)=2;EKOK(6,10)=30.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EBOB(6,10)=2;EKOK(6,10)=30.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **EBOB ve EKOK problem modelleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **6.3.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 14 ve22 kalem eş sayılı ayrı paketlere: EBOB2;7+11=18 paket. “En az paket” sözüne rağmen model EBOB’tur.

**Örnek 2.** 14’lü ve22’li kalem paketlerinden eş toplam: EKOK154;11 ve7 paket. “En az toplam” için kat aranır.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 18 ve30 boncuk eş en büyük paket: yöntem ve paket sayısı?
   - **Cevap / kontrol:** EBOB6;3+5=8 paket.

2. **Soru:** 18’li ve30’lu paketlerle eş en küçük toplam: yöntem ve toplam?
   - **Cevap / kontrol:** EKOK90;90 boncuk.

**Yaygın öğrenci hataları:** En az→EKOK,en çok→EBOB diye ezberlemek; her problemi sayı çarpımıyla çözmeye çalışmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **7.1 Aralarında asal: EBOB = 1** ile bir sonraki fikri inceleyelim.”

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
