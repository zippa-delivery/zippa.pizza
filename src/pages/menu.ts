export const setupMenu = () => {
  const header = document.querySelector('header')!;
  const navToggle = document.getElementById('nav-toggle')!;
  const navContainer = document.getElementById('nav-container')!;

  const toggle = () => {
    navToggle.setAttribute(
      'aria-label',
      navContainer.hasAttribute('data-show') ? 'Apri menu' : 'Chiudi menu',
    );

    header.toggleAttribute('data-nav-visible');
    navToggle.toggleAttribute('data-nav-visible');
    navContainer.toggleAttribute('data-show');

    document
      .querySelector('#promo-banner-container')
      ?.toggleAttribute('data-hide');
  };

  navToggle.addEventListener('click', toggle);

  navContainer.addEventListener('click', e => {
    const nav = document.querySelector('#nav-container > nav')!;

    if (nav.contains(e.target as HTMLElement)) {
      return;
    }

    toggle();
  });
}
