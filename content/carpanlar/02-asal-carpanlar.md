# 2. Asal Çarpanlara Ayırma

Kazanım: **M.8.1.1.1**. Metaword bölüm başlangıcı: **s.13**.

Kaynak denetimi: Metaword s.13–16: asal tanımı, ağaç, algoritma, üslü yazım ve geri oluşturma. MEB s.14–16 bölen listesi; ADA s.13–15 ağaç ve algoritma.

Kitapta tek ana başlık **Asal Çarpanlara Ayırma**dır. “Asal sayılar”, “ağaç”, “algoritma” ve “üslü çarpım” aşağıdaki özgün öğretim mikro alanlarıdır; dört ayrı kitap ünitesi değildir. Önceki plandaki “birden fazla çarpanı olan sayılar bileşiktir” ifadesi düzeltilmiştir: bileşik sayılar 1’den büyüktür ve ikiden fazla farklı pozitif böleni vardır.

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
- **2.1 Asal sayılar**
  - 2.1.1 Asal sayının tanımı
  - 2.1.2 1 neden asal değildir?
  - 2.1.3 2: tek çift asal sayı
  - 2.1.4 Bileşik sayılar
  - 2.1.5 Küçük bir sayının asallığını kontrol
- **2.2 Asal çarpan ağacı**
  - 2.2.1 Asal çarpan ağacı nasıl kurulur?
  - 2.2.2 60 için adım adım ağaç
  - 2.2.3 Farklı dallar, aynı asal çarpanlar
- **2.3 Asal çarpan algoritması**
  - 2.3.1 En küçük asal bölenle sıralı bölme
  - 2.3.2 Bölme şeridi ve yan yana yazım
  - 2.3.3 84 için algoritmayı tamamlama
  - 2.3.4 Algoritma ne zaman biter?
- **2.4 Üslü çarpım biçiminde yazma**
  - 2.4.1 Tekrarlanan asalları üs ile yazma
  - 2.4.2 60 = 2² × 3 × 5
  - 2.4.3 Üslü çarpımdan sayıyı oluşturma

---

### 2.1.1 Asal sayının tanımı

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** 1’den büyük ve tam iki farklı pozitif böleni olan sayıyı tanır. Asal rakam ile asal sayı ayrımını görür.

**Ön bilgi:** Tüm pozitif bölenleri listeleme.

**Görsel / somut model:** 7 için yalnız 1 ve 7 kartları; 9 için 1,3,9 kartları. 1,2,9,13 seçim kartları korunur.

**Ön video kararı:** 2.1.1 için kısa anlatım, “Asal sayının tanımı” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “7’nin pozitif bölenleri 1 ve □; bölen sayısı □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7; 2`.
- İlk yanlışta ipucu: “7’yi tam bölen sayıları dene.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “7’yi tam bölen sayıları dene.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tüm pozitif bölenleri listeleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Tam iki farklı pozitif böleni olan 7 sayısı □dır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `asal`.
- İlk yanlışta ipucu: “Tanımdaki iki farklı bölen koşuluna bak.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Tanımdaki iki farklı bölen koşuluna bak.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tüm pozitif bölenleri listeleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “1,2,9,13 arasındaki asal sayılar □ ve □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 13`.
- İlk yanlışta ipucu: “9’un üçüncü böleni 3; 1’in yalnız bir böleni var.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “9’un üçüncü böleni 3; 1’in yalnız bir böleni var.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tüm pozitif bölenleri listeleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 19’un yalnız 1 ve 19 bölenleri vardır; asaldır. Tek basamaklı olmaması asallığını değiştirmez.

**Örnek 2.** 23 için 2,3,4 ile bölme denemelerinde tam bölünme yoktur; çift eşler tarandığında yalnız 1×23 kalır. Asaldır.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 11 asal mıdır? Bölenlerini yaz.
   - **Cevap / kontrol:** Evet; 1,11.

2. **Soru:** Asal rakamları yaz.
   - **Cevap / kontrol:** 2,3,5,7

**Yaygın öğrenci hataları:** Her tek sayıyı asal saymak; asal sayıları tek basamaklılarla sınırlamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.1.2 1 neden asal değildir?** ile bir sonraki fikri inceleyelim.”

---

### 2.1.2 1 neden asal değildir?

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Tanımdaki iki farklı bölen koşulunu 1 üzerinde sınar. 1’in asal da bileşik de olmadığını ayırt eder.

**Ön bilgi:** 2.1.1.

**Görsel / somut model:** 1×1’in iki ucu aynı 1 kartına bağlanır; 2 için farklı 1 ve 2 kartları.

**Ön video kararı:** 2.1.2 için kısa anlatım, “1 neden asal değildir?” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “1’in farklı pozitif bölen sayısı □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `1`.
- İlk yanlışta ipucu: “1×1’deki iki yazım aynı sayıdır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “1×1’deki iki yazım aynı sayıdır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.1.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Asal olmak için □ farklı pozitif bölen gerekir.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2`.
- İlk yanlışta ipucu: “1 ile kendisi farklı olmalıdır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “1 ile kendisi farklı olmalıdır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.1.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “1 sayısı asal □; bileşik de □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `değildir; değildir`.
- İlk yanlışta ipucu: “1’den büyük olma koşulunu iki sınıfta da koru.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “1’den büyük olma koşulunu iki sınıfta da koru.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.1.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 1’in listesi yalnız {1} olduğundan iki farklı bölen bulunamaz; asal değildir.

**Örnek 2.** 2’nin listesi {1,2}’dir; iki farklı böleni vardır. 1’den farklı olarak asal koşulunu sağlar.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** “1 yalnız 1’e bölünür, o hâlde asaldır” doğru mu?
   - **Cevap / kontrol:** Hayır; iki farklı pozitif bölen gerekirdi.

2. **Soru:** 0,1,3 arasındaki asal hangisi?
   - **Cevap / kontrol:** Yalnız 3.

**Yaygın öğrenci hataları:** 1 ve kendisini iki ayrı bölenmiş gibi saymak; asal olmayan her sayıyı bileşik ilan etmek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.1.3 2: tek çift asal sayı** ile bir sonraki fikri inceleyelim.”

---

### 2.1.3 2: tek çift asal sayı

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** 2’nin asal olduğunu ve daha büyük çift sayıların 2 böleni nedeniyle asal olamadığını açıklar.

**Ön bilgi:** Asal tanımı, çift sayının ikişerli gruplanması.

**Görsel / somut model:** 2 nokta ve 10 nokta ikişerli gruplar; 10’da 1,2,10 bölen kartları farklıdır.

**Ön video kararı:** 2.1.3 için kısa anlatım, “2: tek çift asal sayı” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “2’nin bölenleri 1 ve □ olduğundan 2 □dır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; asal`.
- İlk yanlışta ipucu: “İki farklı bölen say.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki farklı bölen say.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal tanımı, çift sayının ikişerli gruplanması.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “10’un 1 ve kendisi dışında □ böleni vardır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2`.
- İlk yanlışta ipucu: “İkişerli gruplayınca artan var mı?”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İkişerli gruplayınca artan var mı?” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal tanımı, çift sayının ikişerli gruplanması.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “2’den büyük çift sayılar asal □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `değildir`.
- İlk yanlışta ipucu: “2 üçüncü bir farklı bölen olur.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2 üçüncü bir farklı bölen olur.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal tanımı, çift sayının ikişerli gruplanması.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 14’ün 1,2,7,14 bölenleri vardır. 2 böleni bulunduğu için asal değildir.

**Örnek 2.** 2’nin 2’ye bölünmesi onu bileşik yapmaz; 2 zaten kendisidir. Farklı bölenler yalnız 1 ve 2’dir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** En küçük asal sayı hangisi?
   - **Cevap / kontrol:** 2

2. **Soru:** “Bütün asal sayılar tektir” önermesini çürüten sayı?
   - **Cevap / kontrol:** 2

**Yaygın öğrenci hataları:** 2’yi çift diye elemek; “tek çift asal” sözünü tek sayı sanmak; her teki asal sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.1.4 Bileşik sayılar** ile bir sonraki fikri inceleyelim.”

---

### 2.1.4 Bileşik sayılar

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** 1’den büyük ve ikiden fazla pozitif böleni olan sayıları sınıflar. Asal olmadığını göstermek için tek bir ek bölenin yeterli olduğunu görür.

**Ön bilgi:** Asal tanımı ve çarpan çiftleri.

**Görsel / somut model:** 21→3×7 ve 25→5×5 çift kartları; 1 ayrı “iki sınıfın dışında” kutusunda.

**Ön video kararı:** 2.1.4 için kısa anlatım, “Bileşik sayılar” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “21 = 3 × □; 1 ve 21 dışında 3 böleni vardır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7`.
- İlk yanlışta ipucu: “21’i 3’e böl.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “21’i 3’e böl.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal tanımı ve çarpan çiftleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.4/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “21 sayısı □tir (asal/bileşik).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `bileşik`.
- İlk yanlışta ipucu: “İkiden fazla pozitif bölen var.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İkiden fazla pozitif bölen var.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal tanımı ve çarpan çiftleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.4/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “25 = □ × □; eş çarpan olması bileşik olmasını değiştirir mi? □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `5; 5; hayır`.
- İlk yanlışta ipucu: “Bölenler 1,5,25 olmak üzere üç farklı sayı.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bölenler 1,5,25 olmak üzere üç farklı sayı.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal tanımı ve çarpan çiftleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.4/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 33=3×11. 3,1’den ve 33’ten farklı bir bölen olduğundan 33 bileşiktir.

**Örnek 2.** 49=7×7. Bölenleri 1,7,49; yalnız üç farklı bölen bile bileşik demek için yeterlidir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 35 asal mı bileşik mi; bir kanıt yaz.
   - **Cevap / kontrol:** Bileşik; 5×7=35.

2. **Soru:** 1 bileşik midir?
   - **Cevap / kontrol:** Hayır; 1’den büyük değildir ve tek pozitif böleni vardır.

**Yaygın öğrenci hataları:** İki farklı asalın çarpımı olmayı zorunlu sanmak; asal karesini asal saymak; 1’i bileşik saymak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.1.5 Küçük bir sayının asallığını kontrol** ile bir sonraki fikri inceleyelim.”

---

### 2.1.5 Küçük bir sayının asallığını kontrol

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** İki basamaklı sayılarda gerekli küçük bölen denemeleriyle asallığı sınar. Yalnız son basamağa bakarak karar vermez.

**Ön bilgi:** Çarpan çiftleri, asal bölenler 2,3,5,7.

**Görsel / somut model:** 43 ve 77 için 2,3,5,7 deneme tablosu: bölüm ve kalan ayrı sütunlarda; kural ezberi yok.

**Ön video kararı:** 2.1.5 için kısa anlatım, “Küçük bir sayının asallığını kontrol” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “43÷2 işleminde kalan □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `1`.
- İlk yanlışta ipucu: “2×21=42.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2×21=42.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Çarpan çiftleri, asal bölenler 2,3,5,7.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.5/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “43 için 3,5,7 ile denemelerde tam bölünme yoktur; 43 □dır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `asal`.
- İlk yanlışta ipucu: “İki basamaklı sayılarda bu asal denemeleri yeterlidir; tüm çiftleri de kontrol edebilirsin.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki basamaklı sayılarda bu asal denemeleri yeterlidir; tüm çiftleri de kontrol edebilirsin.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Çarpan çiftleri, asal bölenler 2,3,5,7.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.5/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “77 = 7 × □ olduğundan 77 □tir.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `11; bileşik`.
- İlk yanlışta ipucu: “7 denemesini atlama.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “7 denemesini atlama.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Çarpan çiftleri, asal bölenler 2,3,5,7.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.1.5/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 53: 2×26=52,3×17=51,5×10=50,7×7=49. Hiçbiri tam bölmez; iki basamaklı 53 asaldır.

**Örnek 2.** 87: 3×29=87. 3 ek böleni bulunduğu anda bileşik olduğu anlaşılır; bütün bölenleri yazmak gerekmez.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 59 asal mıdır?
   - **Cevap / kontrol:** Evet; 2,3,5,7 tam bölmez.

2. **Soru:** 69 asal mıdır?
   - **Cevap / kontrol:** Hayır; 69=3×23.

**Yaygın öğrenci hataları:** Tek sayıyı otomatik asal saymak; yalnız 2 ve 3’ü denemek; iki basamak için verilen kontrolü sınırsız sayılara genellemek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.2.1 Asal çarpan ağacı nasıl kurulur?** ile bir sonraki fikri inceleyelim.”

---

### 2.2.1 Asal çarpan ağacı nasıl kurulur?

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Bileşik düğümü iki çarpana ayırır, asal yaprakları değiştirmez. Son yaprak çarpımının başlangıç sayısını verdiğini denetler.

**Ön bilgi:** Asal-bileşik ayrımı, çarpan çiftleri.

**Görsel / somut model:** 44 kökü 4 ve 11’e; 4 ise 2 ve 2’ye dallanır. Bileşik düğümler içi boş, asal yapraklar çift çerçeveli; renk zorunlu değil.

**Ön video kararı:** 2.2.1 için kısa anlatım, “Asal çarpan ağacı nasıl kurulur?” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “44 = 4 × □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `11`.
- İlk yanlışta ipucu: “44÷4 işlemini yap.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “44÷4 işlemini yap.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal-bileşik ayrımı, çarpan çiftleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “4 = □ × □; 11 asal olduğu için o dal □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 2; durur`.
- İlk yanlışta ipucu: “Bileşik kutuyu aç, asal kutuyu koru.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bileşik kutuyu aç, asal kutuyu koru.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal-bileşik ayrımı, çarpan çiftleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Son yapraklar 2,2,11; çarpımları □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `44`.
- İlk yanlışta ipucu: “Yalnız son yaprakları çarp.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Yalnız son yaprakları çarp.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal-bileşik ayrımı, çarpan çiftleri.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 28→4×7,4→2×2. Son yapraklar 2,2,7; 2×2×7=28. 4 son yaprak olarak bırakılamaz.

**Örnek 2.** 63→7×9,9→3×3. Son yapraklar 7,3,3; çarpımları 63 olur.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 52→4×13 ağacını bitir.
   - **Cevap / kontrol:** 4→2×2; son yapraklar 2,2,13.

2. **Soru:** 75→3×25 ağacında hangi düğüm açılmalı?
   - **Cevap / kontrol:** 25; 5×5 olarak.

**Yaygın öğrenci hataları:** Toplamla dallandırmak; 1’i gereksiz dal yapmak; iç düğümü de son çarpıma katmak; bileşik yaprakta durmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.2.2 60 için adım adım ağaç** ile bir sonraki fikri inceleyelim.”

---

### 2.2.2 60 için adım adım ağaç

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** 60’ı ardışık dallarla asal çarpanlarına ayırır. Tekrarlı 2 yapraklarını farklı asal çarpan listesinden ayırır.

**Ön bilgi:** 2.2.1.

**Görsel / somut model:** 60→2×30,30→2×15,15→3×5; boşluk sırası soldan aşağıya 2,2,3,5.

**Ön video kararı:** 2.2.2 için kısa anlatım, “60 için adım adım ağaç” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “60 = □ × 30.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2`.
- İlk yanlışta ipucu: “60÷30 sonucunu bul.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “60÷30 sonucunu bul.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.2.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “30 = □ × 15; 15 = □ × □ (küçük asal önce).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 3; 5`.
- İlk yanlışta ipucu: “15’i iki asalın çarpımı olarak yaz.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “15’i iki asalın çarpımı olarak yaz.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.2.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “60’ın farklı asal çarpanları □; tekrarlarıyla yaprak sayısı □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2,3,5; 4`.
- İlk yanlışta ipucu: “2 iki kez görünür ama farklı asal listesinde bir kez yer alır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2 iki kez görünür ama farklı asal listesinde bir kez yer alır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.2.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 60 ağacının 2,2,3,5 yaprakları çarpılır: 2×2=4,4×3=12,12×5=60. Dört yaprak üç farklı asal içerir.

**Örnek 2.** 88→2×44,44→2×22,22→2×11. Yapraklar 2,2,2,11; çarpımları 88, farklı asallar 2 ve 11’dir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 60→6×10 dallarını tamamla.
   - **Cevap / kontrol:** 6→2×3,10→2×5; yapraklar 2,3,2,5.

2. **Soru:** 60’ın en büyük asal çarpanı ve tüm bölenlerinin en büyüğü nedir?
   - **Cevap / kontrol:** 5 ve 60.

**Yaygın öğrenci hataları:** 30’u asal sanmak; tekrar eden 2’yi çarpımdan silmek; 60’ın en büyük bölenine 5 demek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.2.3 Farklı dallar, aynı asal çarpanlar** ile bir sonraki fikri inceleyelim.”

---

### 2.2.3 Farklı dallar, aynı asal çarpanlar

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Aynı sayının farklı çarpan çiftleriyle başlayan ağaçlarını karşılaştırır. Son yaprak sırası değişse de tekrar adetlerinin aynı kaldığını fark eder.

**Ön bilgi:** Tamamlanmış ağaç ve çarpım kontrolü.

**Görsel / somut model:** 72 için yan yana iki ağaç: 8×9 ve 6×12. Son yapraklar asal türüne göre hizalanır; teorem ispatı istenmez.

**Ön video kararı:** 2.2.3 için kısa anlatım, “Farklı dallar, aynı asal çarpanlar” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “72=8×9 ağacında 8’den □ tane 2, 9’dan □ tane 3 gelir.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3; 2`.
- İlk yanlışta ipucu: “8=2×2×2,9=3×3.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “8=2×2×2,9=3×3.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tamamlanmış ağaç ve çarpım kontrolü.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “72=6×12 ağacında toplam □ tane 2 ve □ tane 3 vardır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3; 2`.
- İlk yanlışta ipucu: “6=2×3 ve 12=2×2×3.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “6=2×3 ve 12=2×2×3.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tamamlanmış ağaç ve çarpım kontrolü.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “İki ağacın son yaprak çarpımı □; asal tekrar adetleri □ (aynı/farklı).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `72; aynı`.
- İlk yanlışta ipucu: “Dalların biçimine değil asal yapraklara bak.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Dalların biçimine değil asal yapraklara bak.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tamamlanmış ağaç ve çarpım kontrolü.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.2.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 40→4×10 ile 40→5×8: ilkinde 2,2,2,5; ikincide 5,2,2,2. Sıra farklı, üç 2 ve bir 5 aynı.

**Örnek 2.** 90→9×10 ile 90→3×30: ikisinde de 2,3,3,5 oluşur. Her iki çarpım da 90’dır.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 56→7×8 ve 56→4×14 sonunda ortak yaprak çokluğu?
   - **Cevap / kontrol:** 2,2,2,7

2. **Soru:** “Farklı ağaç farklı asal çarpım verir” doğru mu?
   - **Cevap / kontrol:** Hayır; yaprakların sırası değişebilir, tekrar adetleri değişmez.

**Yaygın öğrenci hataları:** Dal sayısını asal çarpan sayısı sanmak; sıralamayı farklı çarpanlaşma gibi değerlendirmek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.3.1 En küçük asal bölenle sıralı bölme** ile bir sonraki fikri inceleyelim.”

---

### 2.3.1 En küçük asal bölenle sıralı bölme

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Her satırda eldeki sayıyı tam bölen en küçük asalı seçer. Aynı asal hâlâ bölüyorsa tekrar kullanır.

**Ön bilgi:** Asal sayılar ve tam bölme.

**Görsel / somut model:** 66 sayısının solunda bölümler, sağında denenebilir 2,3,5,7,11 kartları; yalnız tam bölen seçilir.

**Ön video kararı:** 2.3.1 için kısa anlatım, “En küçük asal bölenle sıralı bölme” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “66’yı tam bölen en küçük asal □; bölüm □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 33`.
- İlk yanlışta ipucu: “Önce 2’yi dene.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Önce 2’yi dene.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal sayılar ve tam bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “33’ü 2 tam bölmez; sıradaki uygun asal □, bölüm □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3; 11`.
- İlk yanlışta ipucu: “33=3×11.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “33=3×11.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal sayılar ve tam bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “11’i □ ile bölünce 1 olur; işlem □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `11; biter`.
- İlk yanlışta ipucu: “Eldeki sayı asal ise kendisini son bölen yaz.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Eldeki sayı asal ise kendisini son bölen yaz.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal sayılar ve tam bölme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 76÷2=38,38÷2=19,19÷19=1. Bölenler 2,2,19; 2’yi bir kez kullanıp atlamıyoruz.

**Örnek 2.** 99 için 2 uygun değildir; 99÷3=33,33÷3=11,11÷11=1. Bölenler 3,3,11.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 68 için sağdaki bölen dizisini yaz.
   - **Cevap / kontrol:** 2,2,17

2. **Soru:** “Bir kez 2 kullandım, artık 3’e geçmeliyim” doğru mu?
   - **Cevap / kontrol:** Hayır; yeni bölüm hâlâ 2’ye bölünüyorsa 2 tekrar edilir.

**Yaygın öğrenci hataları:** Bileşik bölen seçmek; her asalı yalnız bir kez kullanmak; kalansız bölmeyen asalı zorlamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.3.2 Bölme şeridi ve yan yana yazım** ile bir sonraki fikri inceleyelim.”

---

### 2.3.2 Bölme şeridi ve yan yana yazım

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Bölünen-bölen-bölüm yerlerini doğru okur. Her satırdan sonraki satıra bölümün taşındığını anlar.

**Ön bilgi:** 2.3.1.

**Görsel / somut model:** 78 | 2, 39 | 3, 13 | 13, 1 düzeni; sütun başlıkları “eldeki sayı” ve “asal bölen”; aşağı ok bölüm ilişkisini gösterir.

**Ön video kararı:** 2.3.2 için kısa anlatım, “Bölme şeridi ve yan yana yazım” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “78 | 2 satırının altına solda □ yazılır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `39`.
- İlk yanlışta ipucu: “78÷2 işleminin bölümü alta taşınır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “78÷2 işleminin bölümü alta taşınır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.3.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “39 | 3 satırının altındaki sayı □; 13’ün yanındaki asal bölen □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `13; 13`.
- İlk yanlışta ipucu: “Her satırı ayrı bölme olarak oku.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Her satırı ayrı bölme olarak oku.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.3.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “Sağ sütunun çarpımı 2×3×13=□; sol sütunun tamamı çarpılır mı? □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `78; hayır`.
- İlk yanlışta ipucu: “Sağ taraf bölenlerdir; sol taraf ara bölümlerdir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Sağ taraf bölenlerdir; sol taraf ara bölümlerdir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.3.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 50|2→25|5→5|5→1. Sol sayılar 50,25,5,1; sağ sayılar 2,5,5. Asal çarpım sağdan okunur: 2×5×5.

**Örnek 2.** 105|3→35|5→7|7→1. 105=3×5×7; alta yazılan 35 ve 7 ara bölümlerdir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 98|2 satırından sonraki sol sayı?
   - **Cevap / kontrol:** 49

2. **Soru:** 45|3→15|3→5|5→1 dizisinin sağ sütun çarpımı?
   - **Cevap / kontrol:** 3×3×5=45

**Yaygın öğrenci hataları:** Bölüm yerine kalanı alta yazmak; sağ ve sol sütunu karıştırmak; ara bölümleri çarpmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.3.3 84 için algoritmayı tamamlama** ile bir sonraki fikri inceleyelim.”

---

### 2.3.3 84 için algoritmayı tamamlama

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** 84’ün ilk üç bölenini 2,2,3 seçer, son 7’yi atlamadan çarpımı tamamlar.

**Ön bilgi:** 2.3.1–2.3.2.

**Görsel / somut model:** 84|□,42|□,21|□,7|□,1; satırlar birer birer açılır.

**Ön video kararı:** 2.3.3 için kısa anlatım, “84 için algoritmayı tamamlama” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “84÷□=42 ve 42÷□=21.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 2`.
- İlk yanlışta ipucu: “İlk iki bölüm de 2 ile elde edilir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İlk iki bölüm de 2 ile elde edilir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.3.1–2.3.2.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “21÷□=7 ve 7÷□=1.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3; 7`.
- İlk yanlışta ipucu: “21’i 2 bölmez; 7 asal ama son bölme yine yazılmalı.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “21’i 2 bölmez; 7 asal ama son bölme yine yazılmalı.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.3.1–2.3.2.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “84=2²×3×□; farklı asal çarpan sayısı □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `7; 3`.
- İlk yanlışta ipucu: “Sağ sütunda 2 iki kez var; farklı liste 2,3,7.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Sağ sütunda 2 iki kez var; farklı liste 2,3,7.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.3.1–2.3.2.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 84: 84→42→21→7→1. Sağdaki 2,2,3,7 çarpılır: 4×3×7=84. İlk üç bölen tek başına 12 verir; son 7 zorunludur.

**Örnek 2.** 132: 132→66→33→11→1; bölenler 2,2,3,11. 132=2²×3×11.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 84’te 21’in yanına 7 yazmak çarpanı bozar mı; sıralı yöntemle uyumlu mu?
   - **Cevap / kontrol:** Çarpımı bozmaz, fakat en küçük uygun asal 3 olduğundan sıralı yöntem tercihiyle uyumlu değildir.

2. **Soru:** 156 için sıralı bölen dizisi?
   - **Cevap / kontrol:** 2,2,3,13

**Yaygın öğrenci hataları:** 21’i 2’ye bölmek; 7 satırını atlamak; ilk üç böleni bütün çarpanlaşma sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.3.4 Algoritma ne zaman biter?** ile bir sonraki fikri inceleyelim.”

---

### 2.3.4 Algoritma ne zaman biter?

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Standart bölen listesinde son sol sayının 1 olması gerektiğini bilir. Eldeki sayı asal kaldığında onu son bölen olarak kaydedip 1’e ulaşır.

**Ön bilgi:** Asal kontrolü ve algoritma.

**Görsel / somut model:** 34|2→17|17→1; 17 kutusunda “asal kaldı, kaydet” notu. 1’in sağında boş hücre.

**Ön video kararı:** 2.3.4 için kısa anlatım, “Algoritma ne zaman biter?” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “34÷2=17. 17 asal olduğundan sağa □ yazılır.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `17`.
- İlk yanlışta ipucu: “Kalan asalı atlama, son çarpan olarak kaydet.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Kalan asalı atlama, son çarpan olarak kaydet.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal kontrolü ve algoritma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.4/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “17÷17=□; artık yeni asal bölen seçilmez.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `1`.
- İlk yanlışta ipucu: “Bölen listesinin bitiş sayısı 1’dir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bölen listesinin bitiş sayısı 1’dir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal kontrolü ve algoritma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.4/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “1 asal çarpan listesine □ (eklenir/eklenmez).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `eklenmez`.
- İlk yanlışta ipucu: “1 asal değildir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “1 asal değildir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal kontrolü ve algoritma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.3.4/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 46|2→23|23→1. 23 asal kalınca durmak, ancak 23’ü son çarpan olarak ayrıca yazmışsak tamamlanmış sayılır; standart şerit 1’e iner.

**Örnek 2.** 81|3→27|3→9|3→3|3→1. 3 asal kalınca son bir bölme daha yazılır; 81=3⁴.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 58|2→29 aşamasında eksik son satırlar?
   - **Cevap / kontrol:** 29|29→1

2. **Soru:** 17 asal sayısının bölen listesi nasıl biter?
   - **Cevap / kontrol:** 17|17→1; 17 tek asal çarpandır.

**Yaygın öğrenci hataları:** Asal bölüm görünce kaydetmeden kesmek; 1’i sağ sütuna eklemek; bölüm ile kalanı aynı adlandırmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.4.1 Tekrarlanan asalları üs ile yazma** ile bir sonraki fikri inceleyelim.”

---

### 2.4.1 Tekrarlanan asalları üs ile yazma

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Aynı asalın kaç kez çarpıldığını üs olarak kaydeder. Farklı asal sayısı ile tekrarlı çarpan adedini ayırır.

**Ön bilgi:** Asal çarpım, üs gösteriminin temel anlamı.

**Görsel / somut model:** 2,2,2,3,3 yaprakları iki kümeye ayrılır; taban 2/3, adet 3/2 etiketleriyle eşlenir.

**Ön video kararı:** 2.4.1 için kısa anlatım, “Tekrarlanan asalları üs ile yazma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “2×2×2 = 2 üzeri □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `3`.
- İlk yanlışta ipucu: “Kaç tane 2 çarpıldığını say.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Kaç tane 2 çarpıldığını say.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal çarpım, üs gösteriminin temel anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “2×2×2×3×3 = 2³×3 üzeri □ = □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 72`.
- İlk yanlışta ipucu: “İki tane 3 var; 8×9 hesapla.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki tane 3 var; 8×9 hesapla.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal çarpım, üs gösteriminin temel anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “72’nin farklı asal çarpan sayısı □; tekrarlarıyla çarpan adedi □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 5`.
- İlk yanlışta ipucu: “Tür sayısı ile yaprak sayısını ayır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Tür sayısı ile yaprak sayısını ayır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal çarpım, üs gösteriminin temel anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 200=2×2×2×5×5=2³×5². Üsler 3 ve 2; farklı asallar yalnız 2 ve 5’tir.

**Örnek 2.** 147=3×7×7=3¹×7²=3×7². Tek görünen asalın üssü 1 yazılmayabilir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 2×3×3×3×11’i üslü yaz.
   - **Cevap / kontrol:** 2×3³×11

2. **Soru:** 2⁴×7’de farklı asal sayısı ve tekrarlı çarpan adedi?
   - **Cevap / kontrol:** 2 farklı asal; 5 tekrarlı çarpan.

**Yaygın öğrenci hataları:** Üssü tabanla çarpmak; tekrar eden asalın tamamını silmek; tüm bölen sayısını üslerin toplamı sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.4.2 60 = 2² × 3 × 5** ile bir sonraki fikri inceleyelim.”

---

### 2.4.2 60 = 2² × 3 × 5

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Ağaç ve algoritmadan gelen aynı asal çokluğunu üslü çarpıma dönüştürür. Her tabanın asal olmasını kontrol eder.

**Ön bilgi:** 2.2.2 ve 2.4.1.

**Görsel / somut model:** 60 ağacının yaprakları ve algoritmasının sağ sütunu tek bir 2,2,3,5 şeridinde birleşir.

**Ön video kararı:** 2.4.2 için kısa anlatım, “60 = 2² × 3 × 5” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “60=2×2×3×5=2 üzeri □×3 üzeri □×5 üzeri □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 1; 1`.
- İlk yanlışta ipucu: “Her asalın tekrarını say.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Her asalın tekrarını say.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.2.2 ve 2.4.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “2²×3×5 = □×3×5 = □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4; 60`.
- İlk yanlışta ipucu: “2²,2×2’dir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2²,2×2’dir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.2.2 ve 2.4.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “4×15 aynı sayıyı verir ama tabanları asal olan gösterim □ (olur/olmaz).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `olmaz`.
- İlk yanlışta ipucu: “4 ve 15 asal değildir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “4 ve 15 asal değildir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **2.2.2 ve 2.4.1.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 60’ın farklı asal çarpanları 2,3,5; üslü çarpımı 2²×3×5. 2² terimi 4 olsa da taban asal olan 2’dir.

**Örnek 2.** 220=2×2×5×11=2²×5×11. Çarpımı 4×55=220 ile geri kontrol edilir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 60=2^a×3^b×5^c ise a+b+c?
   - **Cevap / kontrol:** 2+1+1=4

2. **Soru:** 260’ı tabanları asal üslü çarpım olarak yaz.
   - **Cevap / kontrol:** 2²×5×13

**Yaygın öğrenci hataları:** 60’ın asal çarpanları arasına 4 yazmak; üssü olmayan 3 ve 5’in çarpımda bulunmadığını sanmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **2.4.3 Üslü çarpımdan sayıyı oluşturma** ile bir sonraki fikri inceleyelim.”

---

### 2.4.3 Üslü çarpımdan sayıyı oluşturma

**Kazanım kodu:** M.8.1.1.1

**Öğrenilecek:** Her kuvveti tekrarlı çarpma olarak açar ve sayıyı hesaplar. Sonucu bölen listesiyle yeniden kontrol eder.

**Ön bilgi:** Üssün tekrar sayısı olduğu.

**Görsel / somut model:** 2³×3² için üç adet 2 ve iki adet 3 kutusu, sonra 8×9 hesap kutusu.

**Ön video kararı:** 2.4.3 için kısa anlatım, “Üslü çarpımdan sayıyı oluşturma” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “2³ = □ ve 3² = □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `8; 9`.
- İlk yanlışta ipucu: “2+2+2 değil, 2×2×2 yap.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “2+2+2 değil, 2×2×2 yap.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Üssün tekrar sayısı olduğu.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “2³×3² = □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `72`.
- İlk yanlışta ipucu: “Bulduğun 8 ve 9’u çarp.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bulduğun 8 ve 9’u çarp.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Üssün tekrar sayısı olduğu.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “3²×5 = □; asal çarpanlar □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `45; 3,5`.
- İlk yanlışta ipucu: “9×5 hesapla; asal tabanları listele.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “9×5 hesapla; asal tabanları listele.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Üssün tekrar sayısı olduğu.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **2.4.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 2²×7²=(2×2)×(7×7)=4×49=196. 196 iki kez 2 ve iki kez 7 içerir.

**Örnek 2.** 3³×11=(3×3×3)×11=27×11=297. 3³=9 değil 27’dir.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 2⁴×3 değerini bul.
   - **Cevap / kontrol:** 16×3=48

2. **Soru:** 5²×7 değerini bul.
   - **Cevap / kontrol:** 25×7=175

**Yaygın öğrenci hataları:** 2³’ü 6 sanmak; ayrı tabanları toplayıp çarpmayı unutmak; kuvveti yanlış sırada hesaplamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **3.1 EBOB tanımı** ile bir sonraki fikri inceleyelim.”

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
