"use strict";

document.getElementById("nav-toggle").addEventListener("click", () => {
  document.querySelector("header nav").toggleAttribute("data-show")
});
