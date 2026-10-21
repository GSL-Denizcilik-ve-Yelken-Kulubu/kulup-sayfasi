/*
 * Denizcilik ve Yelken Kulübü — fotoğraf galerisi
 *
 * Fotoğraflar fotograflar.json dosyasından okunur:
 *  - galeri.html: bütün fotoğraflar tek albümde, en yeni önce gösterilir.
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

  function goster(veri) {
    var fotograflar = (veri.fotograflar || []).slice().reverse(); // en yeni önce

    // Ana sayfa: son eklenen 3 fotoğraf
    var son = document.querySelector('[data-son-fotograflar]');
    if (son) {
      son.textContent = '';
      var son3 = fotograflar.slice(0, 3);
      if (!son3.length) {
        son.appendChild(el('p', 'margin: 0; color: #4A5A6A', 'Fotoğraflar çok yakında burada.'));
      }
      son3.forEach(function (f) {
        son.appendChild(fotoKutusu(f, 'galeri.html#' + encodeURIComponent(f.dosya)));
      });
    }

    // Galeri sayfası: bütün fotoğraflar tek ızgarada
    var galeri = document.querySelector('[data-galeri]');
    if (galeri) {
      galeri.textContent = '';
      if (!fotograflar.length) {
        galeri.appendChild(el('p', 'margin: 0; color: #4A5A6A', 'Henüz fotoğraf eklenmedi.'));
      }
      fotograflar.forEach(function (f) {
        var kutu = fotoKutusu(f);
        kutu.id = f.dosya;
        kutu.style.scrollMarginTop = '24px';
        galeri.appendChild(kutu);
      });
      var sayac = document.querySelector('[data-foto-sayisi]');
      if (sayac) sayac.textContent = fotograflar.length + ' FOTOĞRAF';
    }

    // galeri.html#dosya-adi ile gelindiyse o fotoğrafa kaydır
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
      goster({ fotograflar: [] });
    });
})();
