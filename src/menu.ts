export const setupMenu = () => {
  const navToggle = document.getElementById("nav-toggle")!;
  const navContainer = document.getElementById("nav-container")!;

  const toggle = () => {
    navToggle.setAttribute(
      'aria-label',
      navContainer.hasAttribute('data-show') ? 'Apri menu' : 'Chiudi menu',
    );

    navContainer.toggleAttribute("data-show");
  };

  navToggle.addEventListener("click", toggle);

  navContainer.addEventListener("click", e => {
    const nav = document.querySelector('#nav-container > nav')!;

    if (nav.contains(e.target as HTMLElement)) {
      return;
    }

    toggle();
  });
}