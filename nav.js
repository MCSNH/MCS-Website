// Mobile menu toggle for Manchester Choral Society site
(function () {
  var btn = document.querySelector('.nav-toggle');
  if (!btn) return;
  var nav = btn.nextElementSibling;
  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setOpen(false);
    });
  }
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1060) setOpen(false);
  });
})();
