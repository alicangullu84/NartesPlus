# Altyapı

7 Kasım 2026'da (Europe/Istanbul) 128 sunucusu okunarak alınan durumdur. O turda sunucuda hiçbir şey değiştirilmemiştir.

## Makineler

| Ad | Bilgisayar | Rol (pratik) |
| --- | --- | --- |
| 128 | `WIN-JK616J8OTQD` | Sistemin kurulacağı ve her şeyin kaydedileceği sunucu |
| 12 | `WIN-8STPF1N5UUL` | Daha hafif işler |
| Mac | `Ali-MacBook-Pro.local` | Günlük iş; ses ve video üretimi burada daha hızlı |
| iPhone | iPhone 14 Pro Max | Uzaktan takip ve yönetim |

## 128 donanımı

- İşlemci: Intel Xeon E5-2680 v4, 2.40 GHz, 14 çekirdek / 28 iş parçacığı
- Bellek: yaklaşık 128 GB
- Disk: C: üzerinde o okumada yaklaşık 1,49 TB boş
- Kullanıcı hesabı: `AliCangUllu-26`
- Nvidia: `nvidia-smi` ve NVIDIA sürücüsü görünmedi; kullanılabilir bir Nvidia kart yoktu

## Yerel model

Ollama 0.40.15, API yalnızca `127.0.0.1:11434` (dış ağa açık değil).

| Model | Ayrıntı | O okumadaki durum |
| --- | --- | --- |
| `qwen2.5:14b` | Q4_K_M, 14.8B, yaklaşık 9.0 GB, bağlam uzunluğu metadata'da 32768 | Kurulu, bellekten boşta |
| `qwen2.5:7b` | Q4_K_M, 7.6B, yaklaşık 4.7 GB | Kurulu, yüklü değil |
| `bge-m3:latest` | F16, gömme modeli, 1024 boyut, yaklaşık 1.2 GB | Kurulu, yüklü değil |

`qwen2.5:14b` manifest yolu:

`C:\Users\AliCangUllu-26\.ollama\models\manifests\registry.ollama.ai\library\qwen2.5\14b`

Yazılma zamanı: 7 Kasım 2026 02:55 (Europe/Istanbul). vLLM veya ayrı bir llama.cpp sunucusu yoktu.

## Ekran kartı gerekir mi?

Konuşmada sorulan net soru şuydu: soru üretmek, video yapmak, videoları yayınlamak ve render almak için 128'de Nvidia kart şart mı?

Verilen yanıt: V1 için şart değil.

- Soru üretimi CPU ve 128 GB bellek ile olur. 14B model bu makinede çalışabilir; daha yavaştır ama kendi öğrenci ve yakın öğretmen ölçeği için yeterlidir. Üslü ifadeler pilotu da böyle üretilmiştir.
- Videoyu yayınlamak kart istemez; dosya 128'e kaydedilir, gerekirse YouTube veya Drive üzerinden paylaşılır.
- Video yapmak ve render almak yönteme bağlıdır. Slayt, seslendirme ve birleştirme CPU ile yapılır; süre uzar. Nvidia (özellikle NVENC) çok video kodlarken veya yerel yapay zeka videosunu hızlandırmak isterken işe yarar.
- Aynı seslendirme+video işi MacBook'ta yaklaşık 4 dakikada, 128'de yaklaşık 50 dakikada bitti. Sebep 128'in eski sunucu işlemcisi ve kartsız, tamamen yazılımsal kodlamasıdır. 128 GB bellek bu süreyi kısaltmaz.
- Sonuç: sistemi 128'de kur, dosyaları orada tut; ağır ses-video üretimini Mac'te yapıp 128'e kopyala. Kart, hız veya yerel yapay zeka videosu yetmezse ayrıca düşünülür.
