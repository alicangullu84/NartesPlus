# NartesPlus

Nartes+ LGS V1 öğrenme platformu kayıtları.

## Öğrenci arayüzü

İlk ekran `web/index.html` dosyasındadır. Hesap, sunucu veya kurulum gerekmez.

Dosyayı tarayıcıda açın (çift tıklama veya `file://` adresi yeter). Sol menüde 12 LGS matematik konusu durur. Yalnız **Çarpanlar ve Katlar** açıktır; diğer konular “Yakında”dır.

Renkler `web/css/site.css` dosyasının başındaki değişkenlerdedir (`--bg`, `--sidebar`, `--text`, `--accent`, `--progress-start`, `--progress-done`). Paleti değiştirmek için bu satırlar yeter.

GitHub Pages kullanılacaksa yayın klasörü `/web` olmalıdır. Bu depo canlı bir adres açmaz.

## İçerik kaynağı

Çarpanlar ve Katlar adımları `content/carpanlar/` altındaki ders senaryolarından üretilir. Yenilemek için:

```bash
python3 tools/build_lesson_data.py
node tools/test-lesson.mjs
```
