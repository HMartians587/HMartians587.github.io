(() => {
  const themeButton = document.getElementById('themeToggle');
  const menuButton = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const preference = matchMedia('(prefers-color-scheme: dark)');
  let manualTheme = false;
  try { manualTheme = Boolean(localStorage.getItem('theme')); } catch {}
  function renderIcons() {
    if (window.lucide) lucide.createIcons();
  }
  function setTheme(isDark, save = false) {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(isDark));
    const label = `Switch to ${isDark ? 'light' : 'dark'} theme`;
    themeButton.setAttribute('aria-label', label);
    themeButton.dataset.tooltip = label;
    themeButton.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
    if (save) {
      manualTheme = true;
      try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch {}
    }
    renderIcons();
  }
  themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme !== 'dark', true));
  preference.addEventListener('change', event => {
    if (!manualTheme) setTheme(event.matches);
  });
  setTheme(document.documentElement.dataset.theme === 'dark');
  function setMenu(open) {
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
    renderIcons();
  }
  menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!mobileNav.hidden && !event.composedPath().includes(menuButton.closest('.top-nav'))) setMenu(false);
  });
  matchMedia('(min-width: 821px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });
  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = links.map(link => document.querySelector(link.hash));
  const navigationLinks = [...document.querySelectorAll('.section-nav a, #mobileNav a, .home-link')];
  let requestedSection = sections.find(section => `#${section.id}` === location.hash) || null;
  let navigating = Boolean(requestedSection);
  let navigationTimer;
  let scheduled = false;
  function finishNavigation() {
    navigating = false;
    clearTimeout(navigationTimer);
    scheduleSectionUpdate();
  }
  function finishWhenIdle() {
    clearTimeout(navigationTimer);
    navigationTimer = setTimeout(finishNavigation, 150);
  }
  function requestSection(hash) {
    requestedSection = sections.find(section => `#${section.id}` === hash) || null;
    navigating = Boolean(requestedSection);
    finishWhenIdle();
    scheduleSectionUpdate();
  }
  function releaseRequestedSection() {
    requestedSection = null;
    navigating = false;
    clearTimeout(navigationTimer);
    scheduleSectionUpdate();
  }
  function updateSection() {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 160) current = section;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1];
    if (requestedSection) {
      const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const margin = parseFloat(getComputedStyle(requestedSection).scrollMarginTop) || 0;
      const destination = Math.max(0, Math.min(
        scrollY + requestedSection.getBoundingClientRect().top - padding - margin,
        document.documentElement.scrollHeight - innerHeight
      ));
      if (navigating || Math.abs(scrollY - destination) <= 3) current = requestedSection;
      else requestedSection = null;
    }
    navigationLinks.forEach(link => {
      if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  function scheduleSectionUpdate() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateSection);
    }
  }
  navigationLinks.forEach(link => link.addEventListener('click', event => {
    if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) requestSection(link.hash);
  }));
  addEventListener('scroll', () => {
    if (navigating) finishWhenIdle();
    scheduleSectionUpdate();
  }, { passive: true });
  addEventListener('scrollend', finishNavigation);
  for (const eventName of ['wheel', 'touchmove']) addEventListener(eventName, event => {
    if (!event.target.closest?.('.sidebar, .top-nav')) releaseRequestedSection();
  }, { passive: true });
  document.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key) || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target.closest?.('.sidebar, .top-nav')) return;
    if (event.target.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === ' ' && event.target.closest?.('button, summary')) return;
    releaseRequestedSection();
  });
  document.addEventListener('pointerdown', event => {
    if (event.target === document.documentElement) releaseRequestedSection();
  });
  addEventListener('resize', scheduleSectionUpdate);
  addEventListener('hashchange', () => requestSection(location.hash));
  addEventListener('pageshow', scheduleSectionUpdate);
  document.addEventListener('toggle', scheduleSectionUpdate, true);
  document.fonts.ready.then(scheduleSectionUpdate);
  if (navigating) finishWhenIdle();
  updateSection();
  const photo = document.getElementById('profilePhoto');
  const photoButtons = [...document.querySelectorAll('.photo-picker button')];
  photoButtons.forEach(button => {
    button.addEventListener('click', () => {
      photo.src = button.dataset.photo;
      photo.alt = button.dataset.alt;
      photoButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    });
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
