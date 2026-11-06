/* Mobile menu + Contact scroll behaviour. Smooth scrolling itself is CSS (scroll-behavior + scroll-padding-top). */
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setOpen(false); btn.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) setOpen(false);
  });

  // Landing on a page with #contact in the URL: make sure the section is revealed below the fixed header
  if (location.hash === '#contact') {
    var t = document.getElementById('contact');
    if (t) setTimeout(function () { t.scrollIntoView(); }, 50);
  }
})();

/* "View work" pop-up menu on the About page */
(function () {
  var btn = document.getElementById('work-menu-btn');
  var menu = document.getElementById('work-menu');
  if (!btn || !menu) return;
  function setOpen(open) { menu.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(menu.hidden); });
  document.addEventListener('click', function (e) { if (!menu.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); btn.focus(); } });
})();

/* On phones the exhibition videos sit in small boxes: open them full screen when played */
(function () {
  [].forEach.call(document.querySelectorAll('.art-video'), function (v) {
    v.addEventListener('play', function () {
      if (window.innerWidth > 767) return;
      var go = v.requestFullscreen || v.webkitRequestFullscreen || v.webkitEnterFullscreen;
      if (go) { try { go.call(v); } catch (e) {} }
    });
  });
})();
