/*
 * Denizcilik ve Yelken Kulübü — fotoğraf galerisi
 *
 * Fotoğraflar fotograflar.json dosyasından okunur:
 *  - galeri.html: her albüm, kendi kategorisinin altında gösterilir.
 *  - index.html: listenin SON 3 fotoğrafı (en yeni önce) gösterilir.
 * Bu dosyayı düzenlemeniz gerekmez; yeni fotoğraf için sadece
 * fotograflar.json'a bir satır ekleyin.
 */
(function () {
  var RESIM_KLASORU = 'images/';

  function el(tag, style, text) {
    var e = document.createElement(tag);
    if (style) e.setAttribute('style', style);
    if (text) e.textContent = text;
    return e;
  }

  function fotoKutusu(f, href) {
    var a = el('a');
    a.href = href || RESIM_KLASORU + f.dosya;
    if (!href) { a.target = '_blank'; a.rel = 'noopener'; }
    var img = el('img', 'display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #DCE3E8');
    img.src = RESIM_KLASORU + f.dosya;
    img.alt = f.aciklama || '';
    img.loading = 'lazy';
    a.appendChild(img);
    return a;
  }

  function bosMesaj(metin) {
    return el('p', 'margin: 32px 0 0; padding-top: 16px; border-top: 1px solid #C9D2D9; color: #4A5A6A', metin);
  }

  function albumBlogu(album, fotolar) {
    var kutu = el('div', 'margin-top: 40px; scroll-margin-top: 24px');
    kutu.id = album.id;
    var ust = el('div', 'display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 24px; margin-bottom: 16px; padding-top: 16px; border-top: 1px solid #C9D2D9');
    ust.appendChild(el('h3', "margin: 0; font-family: 'Archivo', sans-serif; font-stretch: 85%; font-weight: 700; font-size: 24px; line-height: 1.2", album.baslik));
    if (album.bilgi) {
      ust.appendChild(el('span', "font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #4A5A6A", album.bilgi));
    }
    kutu.appendChild(ust);
    var izgara = el('div', 'display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px');
    fotolar.forEach(function (f) { izgara.appendChild(fotoKutusu(f)); });
    kutu.appendChild(izgara);
    return kutu;
  }

  function goster(veri) {
    var albumler = veri.albumler || [];
    var fotograflar = veri.fotograflar || [];

    // Ana sayfa: son eklenen 3 fotoğraf, en yeni önce
    var son = document.querySelector('[data-son-fotograflar]');
    if (son) {
      son.textContent = '';
      var son3 = fotograflar.slice(-3).reverse();
      if (!son3.length) {
        son.appendChild(el('p', 'margin: 0; color: #4A5A6A', 'Fotoğraflar çok yakında burada.'));
      }
      son3.forEach(function (f) {
        son.appendChild(fotoKutusu(f, 'galeri.html#' + encodeURIComponent(f.album)));
      });
    }

    // Galeri sayfası: kategorilere göre albümler
    var kaplar = document.querySelectorAll('[data-albumler]');
    Array.prototype.forEach.call(kaplar, function (kap) {
      kap.textContent = '';
      var kategori = kap.getAttribute('data-albumler');
      var eklendi = 0;
      albumler.forEach(function (album) {
        if (album.kategori !== kategori) return;
        var fotolar = fotograflar.filter(function (f) { return f.album === album.id; });
        if (!fotolar.length) return;
        kap.appendChild(albumBlogu(album, fotolar));
        eklendi++;
      });
      if (!eklendi) kap.appendChild(bosMesaj('Bu bölüme henüz fotoğraf eklenmedi.'));
    });

    // galeri.html#album-id ile gelindiyse o albüme kaydır
    if (location.hash) {
      var hedef = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (hedef) hedef.scrollIntoView();
    }
  }

  fetch('fotograflar.json', { cache: 'no-cache' })
    .then(function (r) {
      if (!r.ok) throw new Error('fotograflar.json bulunamadı (' + r.status + ')');
      return r.json();
    })
    .then(goster)
    .catch(function (hata) {
      console.error('Galeri yüklenemedi:', hata);
      goster({ albumler: [], fotograflar: [] });
    });
})();
