# Denizcilik ve Yelken Kulübü — Web Sitesi Kılavuzu

Bu kılavuz, Galatasaray Lisesi Denizcilik ve Yelken Kulübü web sitesini güncel tutmak isteyen herkes için yazıldı: kaptanlar, porsunlar ve danışman öğretmenler. Kodlama bilgisi gerekmez. Fotoğraf eklemek, belge yüklemek veya bir yazıyı değiştirmek için ihtiyacın olan her şey adım adım burada.

Site, GitHub Pages üzerinde yayınlanan basit bir HTML sitesidir. GitHub'daki depoya (repository) yüklenen dosyalar, bir iki dakika içinde otomatik olarak sitede görünür.

---

## İçindekiler

1. [En sık yapılan işler](#1-en-sık-yapılan-işler)
2. [Klasör yapısı: hangi dosya ne işe yarar?](#2-klasör-yapısı-hangi-dosya-ne-işe-yarar)
3. [Altın kurallar](#3-altın-kurallar)
4. [GitHub'da temel işlemler](#4-githubda-temel-işlemler)
5. [Fotoğrafı hazırlamak](#5-fotoğrafı-hazırlamak)
6. [Galeriye fotoğraf eklemek](#6-galeriye-fotoğraf-eklemek)
7. [Kapak fotoğrafını değiştirmek](#7-kapak-fotoğrafını-değiştirmek)
8. [Belge (PDF) eklemek](#8-belge-pdf-eklemek)
9. [Haber kartlarını güncellemek](#9-haber-kartlarını-güncellemek)
10. [Sayfadaki yazıları değiştirmek](#10-sayfadaki-yazıları-değiştirmek)
11. [Her dönem başında yapılacaklar](#11-her-dönem-başında-yapılacaklar)
12. [Gizlilik ve izinler](#12-gizlilik-ve-izinler)
13. [Sorun giderme](#13-sorun-giderme)
14. [Teknik notlar](#14-teknik-notlar)
15. [Henüz doldurulmamış alanlar](#15-henüz-doldurulmamış-alanlar)

---

## 1. En sık yapılan işler

| Ne yapmak istiyorsun? | Hangi dosyaya dokunacaksın? | Bölüm |
|---|---|---|
| Galeriye fotoğraf eklemek | `images/` klasörü + `fotograflar.json` | [6](#6-galeriye-fotoğraf-eklemek) |
| Yeni bir albüm açmak (ör. 3. Trofe) | `fotograflar.json` | [6.3](#63-yeni-albüm-açmak) |
| Belge (PDF) eklemek veya güncellemek | `belgeler/` klasörü + `index.html` | [8](#8-belge-pdf-eklemek) |
| Kapak fotoğrafını değiştirmek | `images/` klasörü + `index.html` | [7](#7-kapak-fotoğrafını-değiştirmek) |
| Haber eklemek | `images/` klasörü + `index.html` | [9](#9-haber-kartlarını-güncellemek) |
| Kaptan isimleri, buluşma saati, yazılar | `index.html` | [10](#10-sayfadaki-yazıları-değiştirmek) |

> **Ana sayfadaki "Denizden kareler" bölümü kendiliğinden güncellenir.** Galeriye eklediğin son 3 fotoğraf otomatik olarak orada görünür. Ana sayfayı ayrıca düzenlemen gerekmez.

---

## 2. Klasör yapısı: hangi dosya ne işe yarar?

```
depo/
├── index.html            ← Ana sayfa (kulüp sayfası)
├── galeri.html           ← "Tüm fotoğraflar" sayfası
├── galeri.js             ← Fotoğrafları sayfalara yerleştiren program — DOKUNMA
├── fotograflar.json      ← Fotoğraf ve albüm listesi — en sık düzenlenen dosya
├── README.md             ← Bu kılavuz
├── images/               ← Bütün fotoğraflar
│   ├── kapak.jpg
│   ├── trofe-1-01.jpg
│   └── ...
└── belgeler/             ← Bütün PDF belgeler
    ├── kaptanlarin-gorev-ve-sorumluluklari.pdf
    └── ...
```

| Dosya / klasör | Ne işe yarar | Ne sıklıkla düzenlenir |
|---|---|---|
| `fotograflar.json` | Galerideki albümlerin ve fotoğrafların listesi | Her fotoğraf eklendiğinde |
| `images/` | Fotoğraf dosyalarının kendisi | Her fotoğraf eklendiğinde |
| `belgeler/` | PDF dosyaları | Belge eklendiğinde veya güncellendiğinde |
| `index.html` | Ana sayfanın yazıları, kapak fotoğrafı, haberler, belge bağlantıları | Dönemde birkaç kez |
| `galeri.html` | Galeri sayfasının iskeleti (başlıklar, açıklamalar) | Nadiren |
| `galeri.js` | Galeriyi çalıştıran kod | **Hiçbir zaman** |

---

## 3. Altın kurallar

Bu kurallara uyarsan sorunların neredeyse tamamı hiç yaşanmaz.

1. **Dosya adlarında sadece küçük harf, rakam ve tire (-) kullan.** Boşluk yok, Türkçe karakter yok (ç, ğ, ı, ö, ş, ü), büyük harf yok.
   - Doğru: `trofe-1-01.jpg`, `veli-izin-belgesi.pdf`
   - Yanlış: `Trofe 1.JPG`, `veli izin belgesi.pdf`, `IMG_2034.HEIC`
2. **Büyük/küçük harf farklı sayılır.** `Kapak.jpg` ile `kapak.jpg` GitHub için iki ayrı dosyadır. Bir dosyayı sayfaya yazdığın adla tıpatıp aynı adla yükle.
3. **Fotoğrafları yüklemeden önce küçült.** Telefondan gelen 5 MB'lık bir fotoğraf sayfayı yavaşlatır. Hedef: genişliği yaklaşık 1600 piksel, boyutu 500 KB'tan küçük. ([Bölüm 5](#5-fotoğrafı-hazırlamak))
4. **`fotograflar.json` dosyasında virgüllere dikkat et.** Bir virgül eksik ya da fazla olursa bütün galeri boş görünür. ([Bölüm 6.2](#62-virgül-kuralı-en-sık-yapılan-hata))
5. **Tırnak işaretleri düz olmalı: `"`** Telefonda yazarken klavye bazen kıvrık tırnak (`“ ”`) koyar; bu galeriyi bozar. Mümkünse bilgisayardan düzenle.
6. **HTML dosyalarında sadece `>` ile `<` arasındaki yazıyı değiştir.** Köşeli parantezlerin (`< >`) içindeki kodlara dokunma.
7. **Her değişiklikten sonra canlı sitede kontrol et.** Bir iki dakika bekle, sonra sayfayı zorla yenile: Windows'ta `Ctrl + Shift + R`, Mac'te `Cmd + Shift + R`.
8. **Öğrencilerin göründüğü fotoğraflar için veli izni şart.** Doldurulmuş formları, telefon numaralarını veya okul numaralarını asla siteye koyma. ([Bölüm 12](#12-gizlilik-ve-izinler))
9. **Bilgisayarında `index.html`'e çift tıklayarak test etme.** Galeri fotoğrafları bu şekilde görünmez (tarayıcı güvenlik kuralı). Her zaman canlı siteyi kontrol et.
10. **Emin olmadığın bir şeyi silmeden önce sor.** GitHub her değişikliğin geçmişini tutar, geri almak mümkündür ([Bölüm 4.5](#45-hatalı-bir-değişikliği-geri-almak)), ama sormak daha kolaydır.

---

## 4. GitHub'da temel işlemler

Bütün işlemler github.com'un web sitesinden, tarayıcıyla yapılır. Bilgisayarına program kurman gerekmez. GitHub'ın ekranları zamanla biraz değişebilir; düğme adları farklıysa benzerini ara.

### 4.1 Dosya yüklemek

**Ana klasöre (depo köküne) yüklemek:**
1. Deponun ana sayfasını aç.
2. **Add file → Upload files**'a tıkla.
3. Dosyayı kutuya sürükle.
4. Aşağıdaki **Commit changes** düğmesine bas.

**Bir klasörün içine yüklemek** (ör. `images/`):
1. Deponun ana sayfasında klasörün adına tıklayarak içine gir.
2. Klasörün içindeyken **Add file → Upload files**'a tıkla.
3. Dosyaları sürükle, **Commit changes**'a bas.

Klasörün içindeyken yüklediğin her dosya o klasöre gider.

**Yeni bir klasör oluşturmak:** GitHub boş klasör oluşturamaz. Çözüm:
1. Bilgisayarında klasörü oluştur (ör. `images`) ve dosyaları içine koy.
2. Depo ana sayfasında **Add file → Upload files**'a tıkla.
3. Dosyaları değil, **klasörün kendisini** kutuya sürükle. GitHub klasör yapısını korur.

### 4.2 Bir dosyayı düzenlemek

1. Dosyanın adına tıkla (ör. `fotograflar.json`).
2. Sağ üstteki **kalem simgesine** (Edit this file) tıkla.
3. Aradığın yeri bulmak için `Ctrl + F` (Mac'te `Cmd + F`) ile ara.
4. Değişikliği yap.
5. Sağ üstteki **Commit changes...** düğmesine bas.
6. Açılan pencerede kısa bir açıklama yaz, ör. *"1. Trofe fotoğrafları eklendi"*. Bu açıklamalar ileride neyin ne zaman değiştiğini bulmayı kolaylaştırır.
7. Tekrar **Commit changes**'a bas.

### 4.3 Bir dosyayı yenisiyle değiştirmek

Aynı adlı yeni bir dosyayı aynı klasöre yüklersen eskisinin yerine geçer. Örneğin faaliyet raporunun güncel hâlini aynı adla yüklersen, sitedeki bağlantıyı değiştirmene gerek kalmaz.

### 4.4 Bir dosyayı silmek

1. Dosyaya tıkla.
2. Sağ üstteki **"…"** menüsünden **Delete file**'ı seç.
3. **Commit changes**'a bas.

> Bir fotoğrafı `images/` klasöründen silmeden önce `fotograflar.json`'daki satırını da sil. Yoksa galeride bozuk bir kutu görünür.

### 4.5 Hatalı bir değişikliği geri almak

1. Bozulan dosyayı aç (ör. `fotograflar.json`).
2. Sağ üstteki **History** (saat simgesi) düğmesine tıkla. Dosyanın bütün geçmiş sürümleri listelenir.
3. Bozulmadan önceki sürümü bul (commit açıklamaları burada işe yarar) ve **"…" → View file**'a tıkla.
4. **Raw** düğmesine basıp bütün içeriği kopyala.
5. Dosyanın güncel hâlini düzenle (kalem), içeriğin tamamını sil, kopyaladığını yapıştır ve **Commit changes**'a bas.

### 4.6 Değişiklik yayına çıktı mı?

- Commit'ten sonra genellikle 1–2 dakika içinde sitede görünür.
- Deponun üstündeki **Actions** sekmesinde "pages build and deployment" adlı bir iş görünür: sarı daire çalışıyor, yeşil tik yayında, kırmızı çarpı sorun var demektir.
- Görünmüyorsa sayfayı zorla yenile: `Ctrl + Shift + R` (Mac: `Cmd + Shift + R`).

### 4.7 Başkalarına erişim vermek

**Settings → Collaborators → Add people** ile yeni kaptanları ve danışman öğretmenleri ekleyebilirsin. Eklenen kişiye bir davet e-postası gider; kabul ettiğinde dosyaları düzenleyebilir.

---

## 5. Fotoğrafı hazırlamak

### 5.1 Boyut

Telefondan gelen fotoğraflar çok büyüktür. Yüklemeden önce küçült:

| Yöntem | Nasıl |
|---|---|
| **Herhangi bir bilgisayar** | squoosh.app sitesine fotoğrafı sürükle. "Resize" ile genişliği 1600 yap, format olarak MozJPEG seç, kaliteyi ~75 bırak, indir. |
| **Mac** | Fotoğrafı Önizleme ile aç → Araçlar → Boyutu Ayarla → genişlik 1600 piksel → Kaydet. |
| **Windows 11** | Fotoğrafı Fotoğraflar uygulamasıyla aç → "…" menüsü → Resmi yeniden boyutlandır. |

Hedef: **genişlik ~1600 piksel, dosya boyutu < 500 KB.**

### 5.2 Format

- **JPG** (`.jpg`) kullan. `.webp` ve `.png` de çalışır.
- **iPhone'un `.heic` dosyaları çoğu tarayıcıda görünmez.** Bunları JPG'ye çevir: squoosh.app bunu yapar. Ya da iPhone'da Ayarlar → Kamera → Formatlar → "En Uyumlu" seçeneğiyle çekilen fotoğraflar doğrudan JPG olur.
- Uzantının küçük harf olduğundan emin ol: `.JPG` değil `.jpg`.

### 5.3 Dosya adı

| Fotoğraf türü | Ad kalıbı | Örnek |
|---|---|---|
| Galeri fotoğrafı | `<albüm-id>-<sıra no>.jpg` | `trofe-1-01.jpg`, `trofe-1-02.jpg` |
| Kapak fotoğrafı | `kapak.jpg` | `kapak.jpg` |
| Haber görseli | `haber-<yıl>-<ay>-<konu>.jpg` | `haber-2026-11-ilk-trofe.jpg` |

Albüm id'si ile başlamak, `images/` klasöründe hangi fotoğrafın hangi albüme ait olduğunu bir bakışta gösterir.

### 5.4 Yatay mı dikey mi?

Galeri kutuları **yatay (4:3)**'tür. Dikey bir fotoğraf eklersen kutuya sığacak şekilde üstü ve altı kırpılır. Galeri için yatay fotoğrafları tercih et. Kapak fotoğrafı ise **dikey (4:5)** bir kutudadır ([Bölüm 7](#7-kapak-fotoğrafını-değiştirmek)).

---

## 6. Galeriye fotoğraf eklemek

Galeri iki parçadan oluşur:
- **Fotoğraf dosyaları** `images/` klasöründe durur.
- **Hangi fotoğrafın hangi albümde olduğu** `fotograflar.json` dosyasında yazar.

Galeri sayfası albümleri bu listeden oluşturur. Ana sayfa da bu listedeki **son 3 fotoğrafı** (en yeni önce) otomatik gösterir.

### 6.1 Adım adım

**Adım 1 — Fotoğrafı hazırla.** [Bölüm 5](#5-fotoğrafı-hazırlamak)'e göre küçült ve adlandır, ör. `trofe-1-01.jpg`.

**Adım 2 — `images/` klasörüne yükle.** [Bölüm 4.1](#41-dosya-yüklemek)'deki gibi klasörün içine girip yükle.

**Adım 3 — `fotograflar.json`'ı düzenle.** Dosyayı açıp kalemle düzenlemeye geç. Dosya şöyle görünür:

```json
{
  "albumler": [
    { "id": "trofe-1", "kategori": "trofeler", "baslik": "1. Trofe", "bilgi": "KASIM · [TARİH] · [YER]" },
    { "id": "trofe-2", "kategori": "trofeler", "baslik": "2. Trofe", "bilgi": "[AY] · [TARİH] · [YER]" },
    { "id": "teorik-1", "kategori": "teorik-dersler", "baslik": "[DERS KONUSU]", "bilgi": "[TARİH] · [EĞİTMEN]" },
    { "id": "yaris-1", "kategori": "yaris-takimi", "baslik": "[YARIŞ / ANTRENMAN ADI]", "bilgi": "[TARİH] · [YER]" }
  ],
  "fotograflar": [
  ]
}
```

`"fotograflar": [` ile `]` arasındaki listenin **en sonuna** yeni bir satır ekle:

```json
  "fotograflar": [
    { "dosya": "trofe-1-01.jpg", "album": "trofe-1", "aciklama": "Start çizgisinde bekleyen tekneler" }
  ]
```

**Adım 4 — Commit et**, bir iki dakika bekle, siteyi zorla yenile.

Bir fotoğraf satırındaki alanlar:

| Alan | Ne yazılır | Örnek |
|---|---|---|
| `dosya` | `images/` klasöründeki dosyanın tam adı | `"trofe-1-01.jpg"` |
| `album` | Fotoğrafın ait olduğu albümün `id`'si (yukarıdaki `albumler` listesinden) | `"trofe-1"` |
| `aciklama` | Fotoğrafta ne olduğunu anlatan kısa bir cümle. Görme engelli ziyaretçilerin ekran okuyucuları bunu sesli okur. | `"Rüzgâr üstü seyir"` |

### 6.2 Virgül kuralı (en sık yapılan hata)

**Listedeki her satırın sonunda virgül olur, en sondaki hariç.**

Doğru, üç fotoğraf:

```json
  "fotograflar": [
    { "dosya": "trofe-1-01.jpg", "album": "trofe-1", "aciklama": "Start çizgisi" },
    { "dosya": "trofe-1-02.jpg", "album": "trofe-1", "aciklama": "Rüzgâr üstü seyir" },
    { "dosya": "trofe-1-03.jpg", "album": "trofe-1", "aciklama": "Dönüşte ekip" }
  ]
```

Yeni bir fotoğraf eklerken:
1. Şu an en sonda olan satırın sonuna **virgül ekle**.
2. Yeni satırını onun altına **virgülsüz** yaz.

Yanlış örnekler:

```json
    { "dosya": "a.jpg", "album": "trofe-1", "aciklama": "..." }     ← virgül eksik
    { "dosya": "b.jpg", "album": "trofe-1", "aciklama": "..." },    ← sondaki virgül fazla
  ]
```

> **İpucu:** Commit etmeden önce dosyanın tamamını kopyalayıp jsonlint.com sitesine yapıştır ve "Validate JSON"a bas. "Valid JSON" yazıyorsa sorun yok. Hata varsa hangi satırda olduğunu gösterir.

### 6.3 Yeni albüm açmak

Örneğin 3. Trofe yapıldı ve fotoğraflarını eklemek istiyorsun:

1. `fotograflar.json`'da `"albumler"` listesinin sonuna yeni bir satır ekle (aynı virgül kuralı geçerli):

```json
    { "id": "trofe-3", "kategori": "trofeler", "baslik": "3. Trofe", "bilgi": "MART · 14.03.2027 · Tuzla" }
```

2. Bu albümün fotoğraflarında `"album": "trofe-3"` yaz.

Albüm alanları:

| Alan | Ne yazılır | Kurallar |
|---|---|---|
| `id` | Albümün kısa kimliği | Benzersiz olmalı. Küçük harf, rakam, tire. Ör. `trofe-3`, `teorik-2`, `yaris-istanbul-kupasi` |
| `kategori` | Albümün hangi bölümde görüneceği | Sadece şu üçünden biri: `trofeler`, `teorik-dersler`, `yaris-takimi` |
| `baslik` | Albümün galeride görünen adı | Serbest metin, ör. `"3. Trofe"` |
| `bilgi` | Başlığın yanındaki küçük satır (tarih, yer vb.) | Serbest metin, ör. `"MART · 14.03.2027 · Tuzla"` |

Bilinmesi gerekenler:
- **Albümler, listede yazıldıkları sırayla** gösterilir. En yeniyi en üstte görmek istersen yeni albümü listenin başına ekle (virgül kuralına dikkat).
- **Hiç fotoğrafı olmayan albüm gösterilmez.** Yani albümü önceden açabilirsin; fotoğraf eklenene kadar görünmez.
- Bir bölümde hiç fotoğraf yoksa o bölümde "Bu bölüme henüz fotoğraf eklenmedi." yazar.
- **Yeni bir kategori** (ör. "Etkinlikler" diye dördüncü bir bölüm) eklemek için `galeri.html`'de değişiklik gerekir; bunun için [Bölüm 14](#14-teknik-notlar)'e bak.

### 6.4 Ana sayfada hangi fotoğraflar görünür?

Ana sayfadaki "Denizden kareler" bölümü, `fotograflar` listesinin **son 3 satırını** gösterir; en son eklenen solda. Bir fotoğrafa tıklayan, galeri sayfasında o fotoğrafın albümüne gider.

- Ana sayfada özellikle bir fotoğraf görünsün istiyorsan, satırını listenin en sonuna taşı.
- Listede 3'ten az fotoğraf varsa sadece olanlar görünür. Hiç yoksa "Fotoğraflar çok yakında burada." yazar.

### 6.5 Fotoğraf çıkarmak, değiştirmek, sırasını değiştirmek

- **Çıkarmak:** Satırını `fotograflar.json`'dan sil (virgül kuralını kontrol et). İstersen dosyayı `images/`'dan da sil.
- **Değiştirmek:** Yeni fotoğrafı aynı adla `images/`'a yükle ([Bölüm 4.3](#43-bir-dosyayı-yenisiyle-değiştirmek)). Liste aynı kalır.
- **Sırasını değiştirmek:** Bir albümdeki fotoğraflar, listede yazıldıkları sırayla gösterilir. Satırların yerini değiştirmen yeterli.

---

## 7. Kapak fotoğrafını değiştirmek

Ana sayfanın en üstündeki büyük dikey fotoğraf. Kutu **dikey (4:5)**, yani 1200 × 1500 piksel gibi bir oran idealdir.

1. Fotoğrafı hazırla, adını `kapak.jpg` yap, `images/` klasörüne yükle.
2. `index.html`'i düzenlemeye aç ve `KAPAK FOTOĞRAFI` diye ara. Şu üç satırı bulacaksın:

```html
<div style="aspect-ratio: 4 / 5; border: 1px dashed #4F6B86; background: #13314F; display: flex; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box">
<span style="font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #AFC0CF; text-align: center">[KAPAK FOTOĞRAFI]<br/>Tekne, regatta ya da ekip</span>
</div>
```

3. Bu **üç satırı** silip yerine şu tek satırı yapıştır:

```html
<img src="images/kapak.jpg" alt="Kulüp teknesi Boğaz'da" style="display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover">
```

4. `alt="..."` içini fotoğrafa göre değiştir. Hemen altındaki sarı koordinat etiketine (`41°02′ K · 28°58′ D`) dokunma; fotoğrafın köşesinde durmaya devam eder.
5. Commit et.

**Sonraki seferlerde** kapağı değiştirmek için sadece yeni fotoğrafı yine `kapak.jpg` adıyla yüklemen yeterli; `index.html`'e tekrar dokunmana gerek yok.

---

## 8. Belge (PDF) eklemek

Ana sayfadaki "Kulüp belgeleri" bölümünde üç kart var:

| Kart | Durum | Dosya adı |
|---|---|---|
| Kaptanların Görev ve Sorumlulukları | Bağlı ✅ | `belgeler/kaptanlarin-gorev-ve-sorumluluklari.pdf` |
| Faaliyet Raporları | Henüz bağlı değil | Önerilen: `belgeler/faaliyet-raporu-2026-2027.pdf` |
| Veli İzin Belgesi | Henüz bağlı değil | Önerilen: `belgeler/veli-izin-belgesi.pdf` |

### 8.1 Word dosyasını PDF'e çevirmek

Siteye her zaman **PDF** yükle; Word dosyası (`.docx`) tarayıcıda açılmaz, indirilir.

| Program | Nasıl |
|---|---|
| Microsoft Word | Dosya → Farklı Kaydet → Dosya türü: PDF |
| Google Docs | Dosya → İndir → PDF Belgesi (.pdf) |
| Mac Pages | Dosya → Dışa Aktar → PDF |

### 8.2 Bir kartı belgeye bağlamak

1. PDF'i `veli-izin-belgesi.pdf` olarak adlandır ve `belgeler/` klasörüne yükle.
2. `index.html`'i düzenlemeye aç ve `Veli İzin Belgesi` diye ara. Bulduğun satırın **iki satır yukarısında** şu satır var:

```html
<a href="#" style="display: flex; flex-direction: column; gap: 16px; min-height: 220px; ...">
```

3. O satırın başındaki `<a href="#"` kısmını şununla değiştir (satırın geri kalanına dokunma):

```html
<a href="belgeler/veli-izin-belgesi.pdf" target="_blank" rel="noopener"
```

4. Aynı kartın en altındaki `[PDF] · Belgeyi aç →` yazısında `[PDF]`'i sayfa sayısıyla değiştir, ör. `PDF · 1 sayfa · Belgeyi aç →`.
5. Commit et ve sitede karta tıklayarak dene.

**Faaliyet Raporları** kartı için de aynısını yap; aranacak yazı `Faaliyet Raporları`.

### 8.3 Faaliyet raporlarını güncel tutmak

Önerilen düzen: her dönem için tek bir PDF, ör. `faaliyet-raporu-2026-2027.pdf`. Dönem içinde yeni etkinlikler eklendikçe aynı adla güncel hâlini yükle; bağlantı değişmez. Yeni eğitim yılında yeni adla bir dosya oluştur ve kartın bağlantısını [8.2](#82-bir-kartı-belgeye-bağlamak)'deki gibi güncelle. Eski raporlar `belgeler/` klasöründe arşiv olarak kalabilir.

### 8.4 Dördüncü bir belge kartı eklemek

1. `index.html`'de `Veli İzin Belgesi` kartını bul. Kart, `<a href=` ile başlayıp `</a>` ile biten 6 satırdır.
2. Bu 6 satırı kopyala ve hemen alttaki `</a>` satırının altına yapıştır.
3. Kopyada bağlantıyı (`href`), başlığı (`Veli İzin Belgesi`) ve açıklamayı değiştir.

---

## 9. Haber kartlarını güncellemek

Ana sayfadaki "Son haberler" bölümünde üç kart var. Okulun sitesinde kulüple ilgili bir haber yayınlandığında, o habere buradan bağlantı verilir.

Bir kart şöyle görünür (`index.html`'de `HABER BAŞLIĞI` diye arayarak bulabilirsin):

```html
<article style="background: #FFFFFF">
<div style="aspect-ratio: 16 / 9; background: #DCE3E8; display: flex; align-items: center; justify-content: center"><span style="font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #4A5A6A">[HABER GÖRSELİ]</span></div>
<div style="padding: 24px">
<p style="margin: 0 0 8px; font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #4A5A6A">[GG.AA.YYYY]</p>
<h3 style="margin: 0 0 16px; font-size: 20px; line-height: 1.3; font-weight: 600">[HABER BAŞLIĞI]</h3>
<a href="https://gsl.gsu.edu.tr/etiket/denizcilik-ve-yelken-kulubu" style="font-weight: 600">Habere git →</a>
</div>
</article>
```

Doldurmak için:

1. **Görsel:** Haber görselini (yatay, 16:9 ideal) `images/` klasörüne yükle, ör. `haber-2026-11-ilk-trofe.jpg`. Sonra `[HABER GÖRSELİ]` yazan **tüm satırı** şununla değiştir:
   ```html
   <img src="images/haber-2026-11-ilk-trofe.jpg" alt="İlk trofeden bir kare" loading="lazy" style="display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover">
   ```
2. **Tarih:** `[GG.AA.YYYY]` yerine tarihi yaz, ör. `14.11.2026`.
3. **Başlık:** `[HABER BAŞLIĞI]` yerine haberin başlığını yaz.
4. **Bağlantı:** `href="..."` içindeki adresi, okul sitesindeki haberin adresiyle değiştir. Haberi okulun sitesinde açıp tarayıcının adres çubuğundan kopyala; adres `https://gsl.gsu.edu.tr/haberler/....html` gibi görünür.

**Yeni haber geldiğinde:** En yeni haber solda olsun. Yeni haberi ilk kartın yerine yaz; önceki ilk kartın içeriğini ikinciye, ikinciyi üçüncüye taşı. En eski haber düşer, ama okulun sitesinde durmaya devam eder ("Tüm kulüp haberleri →" bağlantısı oraya gider).

**Henüz hiç haber yoksa:** Boş kartların herkese açık sitede görünmesi hoş olmaz. Haber gelene kadar bütün bölümün kaldırılmasını isteyebilirsin ([Bölüm 14](#14-teknik-notlar)).

---

## 10. Sayfadaki yazıları değiştirmek

### 10.1 Genel kural

HTML dosyasındaki her yazı iki etiketin arasındadır:

```html
<p style="margin: 0; font-weight: 600">[AD SOYAD], [AD SOYAD]</p>
          ↑ bu kısma dokunma ↑         ↑ sadece burayı değiştir ↑
```

- Sadece `>` ile `<` arasındaki yazıyı değiştir.
- Türkçe karakterleri (ç, ğ, ı, İ, ö, ş, ü) gönül rahatlığıyla kullanabilirsin; dosya adlarındaki yasak yazılar için geçerli değil.
- Bir satırı ikiye bölmek için araya `<br/>` yaz. Örnek: `HER ÇARŞAMBA · 15.00<br/>SOBİT AMFİSİ`
- Değiştirmek istediğin yazıyı `Ctrl + F` ile aratarak bul.

### 10.2 Nerede ne var? (`index.html`)

| Bölüm | Aranacak yazı | Not |
|---|---|---|
| Kapaktaki tanıtım cümlesi | `Lorem Ipsum` | Kulübü bir iki cümleyle anlatan metin |
| Kaptanlar | `KAPTANLAR` | Hemen alttaki satırda isimler var |
| Danışman öğretmenler | `DANIŞMAN ÖĞRETMENLER` | Alttaki satırda isimler |
| Üye öğrenci sayısı | `ÜYE ÖĞRENCİ` | Alttaki satırda `[SAYI]` |
| Etkinlik sayısı | `ETKİNLİK` | Alttaki satırda `[SAYI]` |
| Buluşma günü ve yeri | `BULUŞMA` | Alttaki satırda |
| Vizyon / Misyon | `Vizyon` / `Misyon` | Başlığın altındaki paragraf |
| Neler yapıyoruz kartları | `Teorik Dersler`, `Trofeler`, `Regatta ve Yarışlar` | Başlığın altındaki paragraf |
| Sezon faaliyetleri | `Seyir defteri` | Bkz. [10.3](#103-sezon-faaliyetleri-listesi) |
| Belge kartları | `Kulüp belgeleri` | Bkz. [Bölüm 8](#8-belge-pdf-eklemek) |

`galeri.html`'deki bölüm açıklamaları (ör. `Kasımdan hazirana...`) da aynı şekilde değiştirilebilir.

### 10.3 Sezon faaliyetleri listesi

Her satır, `<li ...>` ile başlayıp `</li>` ile biten 5 satırlık bir bloktur:

```html
<li style="display: flex; flex-wrap: wrap; gap: 8px 32px; padding: 22px 0; border-bottom: 1px solid #C9D2D9; align-items: baseline">
<span style="flex: 0 0 140px; font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: #4A5A6A">KASIM · [TARİH]</span>
<span style="flex: 1 1 320px; font-weight: 600; font-size: 19px">Kara eğitimi: düğümler, rüzgâr ve seyir teorisi</span>
<span style="flex: 0 1 240px; color: #4A5A6A">[YER]</span>
</li>
```

- 1. yazı: ay ve tarih. 2. yazı: etkinliğin adı. 3. yazı: yer.
- **Yeni satır eklemek:** Bir bloğun tamamını (5 satır) kopyala, istediğin yere yapıştır, yazıları değiştir.
- **Satır silmek:** Bloğun 5 satırını birlikte sil.
- Satırlar sayfada yazıldıkları sırayla görünür; kronolojik sırada (Ekim → Haziran) tutmanı öneririm.
- Bölüm başlığındaki eğitim yılını (`[2026–2027]`) her yıl güncelle.

---

## 11. Her dönem başında yapılacaklar

Yeni kaptanlar seçildiğinde, devir teslimin bir parçası olarak:

- [ ] Yeni kaptanları GitHub'da **Collaborators** olarak ekle ([4.7](#47-başkalarına-erişim-vermek)); mezun olanların erişimini kaldır.
- [ ] `index.html`'de **KAPTANLAR**, **DANIŞMAN ÖĞRETMENLER**, **ÜYE ÖĞRENCİ**, **ETKİNLİK** ve **BULUŞMA** bilgilerini güncelle.
- [ ] **Sezon faaliyetleri** listesini yeni yılın planıyla değiştir ve başlıktaki eğitim yılını güncelle.
- [ ] `fotograflar.json`'a yeni yılın albümlerini ekle (ör. `trofe-1-2027`). Eski albümler galeride kalabilir.
- [ ] Yeni **faaliyet raporu** dosyasını oluşturup bağlantısını güncelle ([8.3](#83-faaliyet-raporlarını-güncel-tutmak)).
- [ ] **Veli izin belgesi** değiştiyse yenisini aynı adla yükle.
- [ ] Bu kılavuzu yeni kaptanlarla birlikte bir kez oku.
- [ ] Alan adı veya e-posta için ücretli bir hizmet kullanılıyorsa yenileme tarihini ve hesabın kimde olduğunu kontrol et.

---

## 12. Gizlilik ve izinler

Bu site herkese açıktır ve arama motorlarında çıkabilir. Ayrıca GitHub deposu da herkese açıktır: yüklenen her dosya, sitede bağlantısı olmasa bile herkes tarafından görülebilir.

- **Öğrencilerin göründüğü fotoğraflar** ancak velilerinin izni varsa yayınlanır (KVKK). Emin değilsen danışman öğretmene sor.
- Bir veli veya öğrenci fotoğrafın kaldırılmasını isterse, **aynı gün** kaldır: satırı `fotograflar.json`'dan sil **ve** dosyayı `images/`'dan sil.
- **Asla yükleme:** doldurulmuş veli izin formları, yoklama listeleri, öğrenci telefon numaraları, okul numaraları, adresler, sağlık bilgileri. Siteye yalnızca **boş** form şablonları konur.
- Fotoğraf açıklamalarına (`aciklama`) öğrencilerin tam adını yazma.
- Sitedeki içerikten okul idaresi de sorumlu tutulabilir; önemli değişiklikleri danışman öğretmenle paylaş.

---

## 13. Sorun giderme

| Belirti | Olası neden | Çözüm |
|---|---|---|
| Galeri bomboş, "Bu bölüme henüz fotoğraf eklenmedi" yazıyor ama fotoğraf eklemiştim | `fotograflar.json`'da virgül veya tırnak hatası | Dosyayı jsonlint.com'da kontrol et ([6.2](#62-virgül-kuralı-en-sık-yapılan-hata)). Telefonda kıvrık tırnak (`“ ”`) girmiş olabilir. |
| Fotoğrafın yerinde boş/bozuk bir kutu var | Dosya adı listedekiyle tıpatıp aynı değil | Büyük/küçük harfi ve uzantıyı karşılaştır: `Trofe-1-01.JPG` ≠ `trofe-1-01.jpg` |
| Fotoğraf `images/` klasöründe yok | Yanlış klasöre yüklenmiş | Deponun ana sayfasına bak; dosya orada duruyorsa sil ve `images/` içine yeniden yükle |
| Fotoğraf yanlış albümde | `album` alanı yanlış | Satırdaki `"album"` değerini albümün `id`'siyle karşılaştır |
| Bir albüm hiç görünmüyor | Albümde fotoğraf yok veya `kategori` yazımı yanlış | `kategori` sadece `trofeler`, `teorik-dersler` veya `yaris-takimi` olabilir |
| iPhone fotoğrafı görünmüyor | Dosya `.heic` formatında | JPG'ye çevir ([5.2](#52-format)) |
| Belge kartına tıklayınca "404" sayfası açılıyor | PDF yanlış klasörde veya adı farklı | PDF'in `belgeler/` içinde ve `href`'teki adla aynı olduğunu kontrol et |
| Değişiklik sitede görünmüyor | Henüz yayına çıkmadı veya tarayıcı eski sürümü gösteriyor | 2 dakika bekle, **Actions** sekmesine bak, `Ctrl + Shift + R` ile yenile |
| Bilgisayarımda `index.html`'i açınca fotoğraflar yok | Normal; tarayıcılar yerel dosyalarda listeyi okumaz | Canlı sitede kontrol et |
| Sayfanın görünümü bozuldu (yazılar kaydı, kutular dağıldı) | HTML düzenlerken bir `<` veya `>` silinmiş | Son değişikliği geri al ([4.5](#45-hatalı-bir-değişikliği-geri-almak)) |
| Actions sekmesinde kırmızı çarpı var | Yayınlama sırasında bir hata | Genellikle bir sonraki commit'te düzelir; devam ederse son değişikliği geri al |

Hiçbiri işe yaramazsa: sorunlu dosyanın içeriğini veya ekran görüntüsünü bir sonraki kaptana, danışman öğretmene ya da Claude'a gönder.

---

## 14. Teknik notlar

Bu bölüm, sitenin nasıl kurulduğunu merak edenler ve tasarım değişikliği yapmak isteyenler içindir.

### 14.1 Galeri nasıl çalışır?

- `galeri.js`, sayfa açıldığında `fotograflar.json`'ı okur.
- `galeri.html`'de `data-albumler="trofeler"` gibi işaretli üç boş kutu vardır; her biri, `kategori` alanı eşleşen albümlerle doldurulur.
- `index.html`'de `data-son-fotograflar` ile işaretli kutu, listenin son 3 fotoğrafıyla doldurulur.
- Fotoğraflar `images/` klasöründen okunur; bu klasör adı `galeri.js`'nin başındaki `RESIM_KLASORU` değişkeninde yazar.

### 14.2 Tasarım kaynağı

Sitenin tasarımı Claude'daki bir tasarım kanvasında ("Denizcilik ve Yelken Kulübü") yapıldı. `index.html` ve `galeri.html` bu kanvastan üretilir.

- **Büyük tasarım değişiklikleri** (yeni bölüm, yeni sayfa, yeni galeri kategorisi, renk veya yerleşim değişikliği) için kanvastan çalışmak en kolayıdır. Claude'dan istediğinde güncel HTML dosyaları yeniden üretilir.
- **Önemli:** Yeniden üretilen `index.html`/`galeri.html`, GitHub'da elle yaptığın değişikliklerin (isimler, haberler, belge bağlantıları, kapak fotoğrafı) üzerine yazar. Bunu önlemek için tasarım değişikliği istemeden önce GitHub'daki güncel `index.html`'i Claude'a ver, ya da elle yaptığın değişiklikleri söyle.
- **`fotograflar.json` ve `images/` bu durumdan etkilenmez**; onlar her zaman sende kalır. Yeni dosya setiyle gelen `fotograflar.json`'ı kendi dosyanın üzerine **yükleme**.

### 14.3 Yazı tipleri

Site, Archivo, IBM Plex Sans ve IBM Plex Mono yazı tiplerini Google Fonts'tan yükler. Okul kendi sunucusunda barındırmak isterse yazı tipi dosyaları indirilip depoya eklenebilir.

### 14.4 Yayın ayarları ve alan adı

- Yayın ayarı: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
- Özel bir alan adı (ör. okulun vereceği `yelken.gsl.gsu.edu.tr`) bağlamak için **Settings → Pages → Custom domain** alanına adı yaz, alan adının DNS ayarlarını GitHub'ın "custom domain" belgesine göre yap ve ardından **Enforce HTTPS** kutusunu işaretle. Okulun alt alan adı için DNS kaydını Bilgi İşlem ekler.

---

## 15. Henüz doldurulmamış alanlar

Site herkese açık hâle gelmeden önce aşağıdakilerin doldurulması gerekiyor. Köşeli parantez (`[ ]`) içindeki her şey yer tutucudur ve sitede aynen görünür.

**`index.html`**
- [ ] Kapaktaki tanıtım cümlesi (şu an `Lorem Ipsum`)
- [ ] Kapak fotoğrafı ([Bölüm 7](#7-kapak-fotoğrafını-değiştirmek))
- [ ] Kaptan isimleri `[AD SOYAD], [AD SOYAD]`
- [ ] Danışman öğretmen `[AD SOYAD]`
- [ ] Üye öğrenci ve etkinlik sayıları `[SAYI]`
- [ ] "Neler yapıyoruz" kartlarının açıklamaları (şu anki metinler ilk taslaktan kalma; ör. "Trofeler" kartında harita okumadan bahsediliyor)
- [ ] Sezon faaliyetlerindeki `[TARİH]`, `[YER]`, `[YAT KULÜBÜ / İSKELE]` ve eğitim yılı `[2026–2027]`; satırları da kronolojik sıraya koy
- [ ] Üç haber kartı ([Bölüm 9](#9-haber-kartlarını-güncellemek))
- [ ] Faaliyet Raporları ve Veli İzin Belgesi kartlarının PDF'leri ([Bölüm 8](#8-belge-pdf-eklemek))

**`fotograflar.json`**
- [ ] Albüm bilgilerindeki `[TARİH]`, `[YER]`, `[AY]`, `[DERS KONUSU]`, `[EĞİTMEN]`, `[YARIŞ / ANTRENMAN ADI]`

**`galeri.html`**
- [ ] Başlıktaki eğitim yılı `[2026–2027]`

**Okul tarafı**
- [ ] Danışman öğretmenin ve okul idaresinin onayı
- [ ] Bilgi İşlem'den: kulüpler listesine bağlantı, (isteğe bağlı) `yelken.gsl.gsu.edu.tr` alt alan adı ve kulüp e-posta adresi

---

*Son güncelleme: Ekim 2026. Bu kılavuzu güncel tutmak da sitenin bir parçasıdır: bir şey değiştiğinde buraya da yaz.*
