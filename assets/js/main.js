"use strict";

const toggle = document.getElementById("nav-toggle");

toggle.addEventListener("click", () => {
  const nav = document.getElementById("nav-container");

  toggle.setAttribute(
    'aria-label',
    nav.hasAttribute('data-show') ? 'Apri menu' : 'Chiudi menu',
  );

  nav.toggleAttribute("data-show");
});
