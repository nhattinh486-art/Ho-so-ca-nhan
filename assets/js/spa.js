(function () {
  const pageContainer = document.getElementById('page-content');
  const headerTitleEl = document.querySelector('.magic-text');
  const isFileProtocol = window.location.protocol === 'file:';

  function resolveRouteKey(raw) {
    if (!raw || raw === '/' || raw === '/index.html') return 'home';
    const clean = raw.replace(/^#?\/?/, '').split('?')[0].toLowerCase();
    if (clean === '' || clean === 'index.html') return 'home';
    if (window.SPA_PAGES && window.SPA_PAGES[clean]) return clean;
    return 'home';
  }

  function closeHeaderPopup() {
    const popup = document.getElementById('header-popup');
    const toggle = document.getElementById('header-menu-toggle');
    if (popup && !popup.classList.contains('hidden')) {
      popup.classList.add('hidden');
      if (toggle) {
        const icon = toggle.querySelector('i');
        if (icon) icon.className = 'ri-menu-3-line';
      }
    }
  }

  function navigateTo(routeKey, push = true) {
    const pages = window.SPA_PAGES || {};
    const page = pages[routeKey] || pages.home;
    if (!page || !pageContainer) return;

    closeHeaderPopup();

    pageContainer.classList.remove('page-entering');
    pageContainer.classList.add('page-leaving');

    setTimeout(() => {
      pageContainer.innerHTML = page.render();
      if (headerTitleEl) headerTitleEl.textContent = page.title;
      document.title = page.docTitle;

      pageContainer.classList.remove('page-leaving');
      pageContainer.classList.add('page-entering');

      if (push) {
        if (isFileProtocol) {
          window.location.hash = routeKey === 'home' ? '#/' : `#/${routeKey}`;
        } else {
          const targetUrl = routeKey === 'home' ? '/' : `/${routeKey}`;
          try {
            window.history.pushState({ route: routeKey }, '', targetUrl);
          } catch (e) {
            window.location.hash = `#/${routeKey}`;
          }
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (typeof window.onSpaPageLoaded === 'function') {
        window.onSpaPageLoaded(routeKey);
      }
    }, 240);
  }

  window.navigateSpa = navigateTo;

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a.spa-link');
    if (!link) return;
    e.preventDefault();
    const routeKey = link.dataset.spa || resolveRouteKey(link.getAttribute('href'));
    navigateTo(routeKey, true);
  });

  window.addEventListener('popstate', () => {
    const key = isFileProtocol
      ? resolveRouteKey(window.location.hash)
      : resolveRouteKey(window.location.pathname);
    navigateTo(key, false);
  });

  window.addEventListener('DOMContentLoaded', () => {
    const initialKey = isFileProtocol
      ? resolveRouteKey(window.location.hash)
      : resolveRouteKey(window.location.pathname);
    const pages = window.SPA_PAGES || {};
    const page = pages[initialKey] || pages.home;
    if (page && pageContainer) {
      pageContainer.innerHTML = page.render();
      if (headerTitleEl) headerTitleEl.textContent = page.title;
      document.title = page.docTitle;
      if (typeof window.onSpaPageLoaded === 'function') {
        window.onSpaPageLoaded(initialKey);
      }
    }
  });
})();
