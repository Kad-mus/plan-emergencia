// Botón "Instalar app" (PWA) + ayuda para iPhone/iPad.
(function () {
  'use strict';
  var deferred = null, btn = null, tip = null;
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  if (standalone) return;

  var css = document.createElement('style');
  css.textContent =
    '.pwa-btn{position:fixed;right:16px;bottom:16px;z-index:40;background:#ea580c;color:#fff;border:0;border-radius:999px;padding:11px 18px;font:600 14px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25);cursor:pointer;display:flex;gap:8px;align-items:center}' +
    '.pwa-btn:hover{background:#c2410c}' +
    '.pwa-tip{position:fixed;left:12px;right:12px;bottom:12px;z-index:40;background:#141a24;color:#fff;border-radius:12px;padding:12px 40px 12px 14px;font:14px/1.4 system-ui,-apple-system,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.3)}' +
    '.pwa-tip button{position:absolute;right:8px;top:8px;background:none;border:0;color:#cbd5e1;font-size:18px;cursor:pointer}' +
    '@media print{.pwa-btn,.pwa-tip{display:none!important}}';
  document.head.appendChild(css);

  function showButton() {
    if (btn || !deferred) return;
    btn = document.createElement('button');
    btn.className = 'pwa-btn';
    btn.type = 'button';
    btn.innerHTML = '📲 Instalar app';
    btn.title = 'Instalar el Plan de Emergencia como aplicación';
    btn.addEventListener('click', function () {
      if (!deferred) return;
      deferred.prompt();
      deferred.userChoice.then(function () { deferred = null; hide(); });
    });
    document.body.appendChild(btn);
  }
  function hide() { if (btn) { btn.remove(); btn = null; } }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    if (document.body) showButton(); else document.addEventListener('DOMContentLoaded', showButton);
  });
  window.addEventListener('appinstalled', function () { deferred = null; hide(); });

  // iPhone / iPad (Safari no ofrece instalación automática)
  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var seen = false; try { seen = localStorage.getItem('pwa-tip-ios') === '1'; } catch (e) {}
  if (ios && !seen) {
    document.addEventListener('DOMContentLoaded', function () {
      tip = document.createElement('div');
      tip.className = 'pwa-tip';
      tip.innerHTML = '📲 Para instalar la app: pulsa <b>Compartir</b> <span aria-hidden="true">⬆️</span> y luego <b>Añadir a pantalla de inicio</b>.<button type="button" aria-label="Cerrar">✕</button>';
      tip.querySelector('button').addEventListener('click', function () { tip.remove(); try { localStorage.setItem('pwa-tip-ios', '1'); } catch (e) {} });
      document.body.appendChild(tip);
    });
  }
})();
