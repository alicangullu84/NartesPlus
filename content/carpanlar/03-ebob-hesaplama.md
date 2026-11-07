# 3. EBOB Hesaplama

Kazanım: **M.8.1.1.2**. Metaword bölüm başlangıcı: **s.17**.

Kaynak denetimi: Metaword s.17–20: liste, ortak asal bölen algoritması, küçük üs ve kat/eşit sayı durumları. MEB s.19–20; ADA s.17–19.

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
- 3.1 EBOB tanımı
- 3.2 Ortak çarpanları listeleme yöntemi
- 3.3 Asal çarpanlarla EBOB: küçük üsler
- 3.4 İki sayıda sonuç kontrolü ve özel durumlar
- 3.5 Ortak asal bölen algoritması

---

### 3.1 EBOB tanımı

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** İki pozitif sayıyı da bölen sayıların en büyüğünü seçer. EBOB’un sayılardan büyük olamayacağını anlamıyla açıklar.

**Ön bilgi:** Çarpan ve ortak olma.

**Görsel / somut model:** 16 ve 28 için iki bölen şeridi; ortak 1,2,4 kartları ortada, en büyük olan 4 çift çerçeveli.

**Ön video kararı:** 3.1 için kısa anlatım, “EBOB tanımı” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “16 ve 28’in ortak bölenleri 1,2,□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4`.
- İlk yanlışta ipucu: “Her adayı iki sayıya da böl.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Her adayı iki sayıya da böl.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Çarpan ve ortak olma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.1/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “Ortak bölenlerin en büyüğü □; EBOB(16,28)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4; 4`.
- İlk yanlışta ipucu: “Ortak listede en sağdaki sayıyı seç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Ortak listede en sağdaki sayıyı seç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Çarpan ve ortak olma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.1/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “EBOB, küçük sayı 16’dan büyük □ (olabilir/olamaz).”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `olamaz`.
- İlk yanlışta ipucu: “16’yı tam bölen pozitif sayı 16’yı aşamaz.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “16’yı tam bölen pozitif sayı 16’yı aşamaz.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Çarpan ve ortak olma.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.1/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 14’ün bölenleri 1,2,7,14; 22’nin 1,2,11,22. Ortaklar 1 ve 2; EBOB=2.

**Örnek 2.** 25’in bölenleri 1,5,25; 35’in 1,5,7,35. Ortaklar 1 ve 5; EBOB=5.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EBOB(9,21)?
   - **Cevap / kontrol:** 3

2. **Soru:** EBOB(12,20)=24 iddiası neden yanlış?
   - **Cevap / kontrol:** 24 sayısı 12’yi ve 20’yi bölemez; EBOB küçük sayıdan büyük olamaz.

**Yaygın öğrenci hataları:** İki sayıdan büyüğünü doğrudan seçmek; en küçük ortak bölen olan 1’i otomatik seçmek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **3.2 Ortak çarpanları listeleme yöntemi** ile bir sonraki fikri inceleyelim.”

---

### 3.2 Ortak çarpanları listeleme yöntemi

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Her iki bölen listesini eksiksiz çıkarır, kesişimi bulur ve en büyüğünü seçer. Ortak asal bölenle ortak böleni karıştırmaz.

**Ön bilgi:** Tüm çarpanları listeleme.

**Görsel / somut model:** 18 ve 24’ün önceki bölen kartları korunur; kesişimde 1,2,3,6. Yanında yeni 20 ve 32 tablosu.

**Ön video kararı:** 3.2 için kısa anlatım, “Ortak çarpanları listeleme yöntemi” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “18 ve 24’ün ortak bölenleri 1,2,3,□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `6`.
- İlk yanlışta ipucu: “6 iki listede de var mı?”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “6 iki listede de var mı?” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tüm çarpanları listeleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.2/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “En büyük ortak bölen □; asal olması gerekir mi? □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `6; hayır`.
- İlk yanlışta ipucu: “EBOB ortak bölenlerden seçilir, yalnız asallardan değil.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EBOB ortak bölenlerden seçilir, yalnız asallardan değil.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tüm çarpanları listeleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.2/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “20 ve 32’nin ortak bölenleri 1,2,4; EBOB=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4`.
- İlk yanlışta ipucu: “En büyük ortak kartı işaretle.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “En büyük ortak kartı işaretle.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Tüm çarpanları listeleme.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.2/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 26:1,2,13,26; 39:1,3,13,39. Kesişim 1,13; EBOB=13.

**Örnek 2.** 32:1,2,4,8,16,32; 56:1,2,4,7,8,14,28,56. Kesişim 1,2,4,8; EBOB=8.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EBOB(15,28), ortak listeyle?
   - **Cevap / kontrol:** Ortak liste 1; EBOB=1.

2. **Soru:** EBOB(27,45), ortak listeyle?
   - **Cevap / kontrol:** Ortaklar 1,3,9; EBOB=9.

**Yaygın öğrenci hataları:** Yalnız bir sayının bölenlerini kullanmak; 6 gibi bileşik ortak böleni dışlamak; listeyi eksik yazmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **3.3 Asal çarpanlarla EBOB: küçük üsler** ile bir sonraki fikri inceleyelim.”

---

### 3.3 Asal çarpanlarla EBOB: küçük üsler

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Yalnız ortak asal tabanları seçer; her tabanın iki sayıda da bulunan en az tekrarını kullanır. Küçük üs kuralını ortak çarpan modelinden çıkarır.

**Ön bilgi:** Asal üslü çarpım.

**Görsel / somut model:** 18=2×3² ve 24=2³×3 kartları üst üste hizalanır; eşleşen bir 2 ve bir 3 daire içine alınır.

**Ön video kararı:** 3.3 için kısa anlatım, “Asal çarpanlarla EBOB: küçük üsler” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “18 ve 24’te ortak asal tabanlar □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2,3`.
- İlk yanlışta ipucu: “İki satırın ikisinde de görünen tabanları seç.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki satırın ikisinde de görünen tabanları seç.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal üslü çarpım.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.3/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “EBOB=2 üzeri □×3 üzeri □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `1; 1`.
- İlk yanlışta ipucu: “Her asaldan iki sayıda da bulunan miktarı al.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Her asaldan iki sayıda da bulunan miktarı al.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal üslü çarpım.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.3/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “2¹×3¹=□; ortak olmayan asal EBOB’a □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `6; alınmaz`.
- İlk yanlışta ipucu: “Bir sayıda hiç yoksa ikisini birden bölemez.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Bir sayıda hiç yoksa ikisini birden bölemez.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Asal üslü çarpım.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.3/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 80=2⁴×5,112=2⁴×7. Yalnız 2 ortak; küçük üs 4. EBOB=2⁴=16; 5 ve 7 dışarıda kalır.

**Örnek 2.** 108=2²×3³,126=2×3²×7. EBOB=2×3²=18. 2 için 1,3 için 2 tekrar ortaklaşır.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EBOB(2³×3²,2²×3×5)?
   - **Cevap / kontrol:** 2²×3=12

2. **Soru:** EBOB(45,77)?
   - **Cevap / kontrol:** 1; ortak asal taban yok.

**Yaygın öğrenci hataları:** Büyük üs almak; ortak olmayan tabanları eklemek; iki sayıda ortak 3 tekrarını toplamak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **3.4 İki sayıda sonuç kontrolü ve özel durumlar** ile bir sonraki fikri inceleyelim.”

---

### 3.4 İki sayıda sonuç kontrolü ve özel durumlar

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Hesaplanan EBOB’un her iki sayıyı kalansız böldüğünü denetler. Birbirinin katı, eşit sayı ve 1 ile eşleşme durumlarını yorumlar.

**Ön bilgi:** 3.1–3.3.

**Görsel / somut model:** 12 ve 60 çubukları 12’lik bloklara ayrılır; 18 ve 18 eş şeritler; 1 ve 17 kartları.

**Ön video kararı:** 3.4 için kısa anlatım, “İki sayıda sonuç kontrolü ve özel durumlar” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “60=12×□ olduğundan EBOB(12,60)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `5; 12`.
- İlk yanlışta ipucu: “Küçük sayı büyük sayıyı zaten tam bölüyor.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Küçük sayı büyük sayıyı zaten tam bölüyor.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **3.1–3.3.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.4/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “EBOB(18,18)=□ ve EBOB(1,17)=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `18; 1`.
- İlk yanlışta ipucu: “Eşit sayının en büyük böleni kendisi; 1’in yalnız bir böleni var.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “Eşit sayının en büyük böleni kendisi; 1’in yalnız bir böleni var.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **3.1–3.3.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.4/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “EBOB(28,42)=14 kontrolü: 28÷14=□,42÷14=□.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2; 3`.
- İlk yanlışta ipucu: “İki bölüm de tam sayı olmalı; en büyüklük önceki yöntemle doğrulanır.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki bölüm de tam sayı olmalı; en büyüklük önceki yöntemle doğrulanır.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **3.1–3.3.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.4/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 16 ve 64: 64=16×4. 16 her ikisini böler ve küçük sayıdan daha büyük ortak bölen olamaz; EBOB=16.

**Örnek 2.** 31 ve 31: iki bölen listesi aynı; en büyük ortak bölen 31. Eşit sayıları farklı sayı gibi şartlandırmayız.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** EBOB(21,84)?
   - **Cevap / kontrol:** 21

2. **Soru:** EBOB(1,36) ve EBOB(24,24)?
   - **Cevap / kontrol:** 1 ve 24

**Yaygın öğrenci hataları:** “EBOB her zaman iki sayıdan da küçüktür” demek; tam bölen her adayı en büyük sanmak; kat durumunda büyüğü seçmek.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **3.5 Ortak asal bölen algoritması** ile bir sonraki fikri inceleyelim.”

---

### 3.5 Ortak asal bölen algoritması

**Kazanım kodu:** M.8.1.1.2

**Öğrenilecek:** Yan yana bölme tablosunda yalnız iki sayının aynı satırda bölündüğü asalları işaretler. Bölünmeyen sayının aynen aşağı taşındığını fark eder.

**Ön bilgi:** Bölen listesi ve EBOB anlamı.

**Görsel / somut model:** 20,28 |2 →10,14 |2 →5,7 |5 →1,7 |7 →1,1. İlk iki sağ bölen işaretli, son ikisi işaretsiz.

**Ön video kararı:** 3.5 için kısa anlatım, “Ortak asal bölen algoritması” sorusunu bu modelle tanıtır; sonra öğrenci kontrolü başlar. Bu not bir medya dosyası veya hazır video bağlantısı değildir.

#### Sıralı etkinlik senaryosu

**Adım 1 — öğrencinin göreceği metin:** “20 ve 28 önce 2’ye bölününce □ ve □ elde edilir.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `10; 14`.
- İlk yanlışta ipucu: “İki sütunu ayrı ayrı böl.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki sütunu ayrı ayrı böl.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Bölen listesi ve EBOB anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.5/adım 2** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 2 — öğrencinin göreceği metin:** “10 ve 14’ü birlikte bölen asal □; yeni sayılar 5,7.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `2`.
- İlk yanlışta ipucu: “İki sayı da çift.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “İki sayı da çift.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Bölen listesi ve EBOB anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.5/adım 3** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

**Adım 3 — öğrencinin göreceği metin:** “EBOB için işaretli 2×2=□; yalnız bir sütunu bölen 5 ve 7 □.”
- Satır içi boşluklar: metindeki her `□` ayrı alandır. **Doğru cevap (sırayla):** `4; alınmaz`.
- İlk yanlışta ipucu: “EBOB iki sütuna aynı anda etki eden bölenlerden gelir.”
- Tekrar yanlışta kısa açıklama/video notu: 25–45 saniyelik geri dönüş taslağı; bu yaprağın modelinde ilgili parçayı/satırı yakınlaştır. “EBOB iki sütuna aynı anda etki eden bölenlerden gelir.” cümlesini işlemle göster; öğrenci aynı boşlukları yeniden denesin. Gerekirse **Bölen listesi ve EBOB anlamı.** ön bilgisine dön. Video henüz üretilmedi.
- Açılma kuralı: bu adımın **tüm** alanları doğru → **3.5/çalışılmış örnekler** açılır; herhangi alan yanlış → bu adımda kalır, ilk ipucu/tekrar açıklama uygulanır.

#### İki özgün çalışılmış örnek

**Örnek 1.** 28,44: 2 ile 14,22; 2 ile 7,11. Sonraki 7 ve 11 yalnız bir sütunu böler. Ortak işaretler 2,2; EBOB=4.

**Örnek 2.** 30,42:2→15,21;3→5,7;5→1,7;7→1,1. İlk 2 ve 3 ortak, EBOB=6.

#### Bağımsız alıştırmalar ve cevap anahtarı

1. **Soru:** 22 ve 34 tablosunda EBOB’a katılan asal?
   - **Cevap / kontrol:** Yalnız 2; EBOB=2.

2. **Soru:** 12 ve 25’i aynı satırda bölen asal yoksa EBOB?
   - **Cevap / kontrol:** 1

**Yaygın öğrenci hataları:** Sağ sütunun tümünü çarpmak (bu EKOK’tur); bölünmeyeni yanlış azaltmak; ara satır ortaklığını başlangıçla karıştırmak.

**Sonraki alt başlığa geçiş:** “Bu kontrolü tamamladın. Şimdi **4.1.1 Eşit sayılı paketleme ve paylaştırma** ile bir sonraki fikri inceleyelim.”

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
