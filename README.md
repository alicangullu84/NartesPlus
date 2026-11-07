# Nartes+

LGS öğrencileri için kişiselleştirilmiş bir öğrenme platformu. İlk sürüm (V1) tüm LGS konularını kapsar; önce Ali Can'ın kendi öğrencilerine ve yakın öğretmen arkadaşlarına açılarak eksikler giderilir.

Bu depo, 7 Kasım 2026'da (Europe/Istanbul) anlatılan ürünün resmi kaydıdır. Buradaki "karar" maddeleri o konuşmadan gelir. "Öneri" olarak işaretlenenler henüz onaylanmamıştır.

## Ne yapar?

Öğrenci sisteme girdiğinde o güne kadarki müfredata göre kısa, dinamik bir hazır bulunuşluk sınavı yapılır. Sınav en fazla 20 sorudur; seviye erken belli olursa 5 veya 10 soruda da bitebilir. Sonuçtan çocuğa özel bir öğrenme planı çıkar. Planın içinde Khan Academy'deki gibi videolar ve Matikon'daki gibi adım adım etkinlikler vardır.

## Öğrenci akışı

1. Tarihe ve resmi müfredata bakılır. Örneğin Kasım'daysak, öğrencinin o ana kadar gördüğü konular bilinir.
2. Bu konulara göre dinamik bir hazır bulunuşluk sınavı üretilir.
3. Sınav öğrencinin seviyesini ölçer; çok uzun değildir, üst sınır 20 sorudur.
4. Seviyeye göre kişiye özel öğrenme planı çıkarılır.
5. Öğrenci planındaki adımları çeşit çeşit etkinliklerle işler: video, anlatım, boşluk doldurma, eşleme, uygulama, oyun, test, açık uçlu ve çoktan seçmeli soru.

## V1 kararları

- Hedef kitle: kendi öğrenciler ve yakın öğretmen arkadaşları. Amaç, V1'deki eksikleri birlikte görmek.
- Kapsam: tüm LGS konuları. Konu konu Khan Academy incelenmesi istenmiştir.
- Kurulum yeri: kiralanan 128 sunucusu (`WIN-JK616J8OTQD`). Her şey oraya kaydedilir, sistem orada kurulur.
- Hazır bulunuşluk: müfredata bağlı, dinamik, en fazla 20 soru.
- Öğrenme: kişiye özel plan + Khan Academy tarzı video + Matikon tarzı etkinlik çeşitleri.
- Soru üretimi V1 ölçeğinde 128'deki yerel model ile yapılabilir; bu iş için Nvidia ekran kartı şart değildir.
- 128'de kullanılabilir bir Nvidia kart görünmemektedir. Video ve ses üretimini Mac'te yapmak, dosyayı 128'e kaydetmek daha hızlıdır.

Ayrıntılar `docs/` klasöründedir.

## Klasörler

- `docs/01-urun-tanimi.md` — ürünün ne olduğu ve neden var olduğu
- `docs/02-ogrenci-akisi.md` — hazır bulunuşluk sınavı ve kişisel plan
- `docs/03-icerik-tipleri.md` — video ve etkinlik çeşitleri
- `docs/04-v1-kapsam.md` — V1'e girenler ve henüz konuşulmayanlar
- `docs/05-altyapi.md` — 128 sunucusu, yerel model, makineler
- `docs/06-mevcut-durum.md` — bugün elde olan parçalar
- `docs/07-kaynaklar-ve-sonraki-adimlar.md` — bilgi kaynağı ve sıradaki işler
