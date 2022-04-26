"use script";

window.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const navs = document.querySelector(".nav-menu-left");
  const menuParent = document.querySelector(".dropdown-menu");
  const navLinks = document.querySelector(".nav-link");
  const gistItem = document.querySelector(".gist-item");

  const basics = {
    FirstStepsInCodingLab: [
      "Hello SoftUni.js",
      "Nums 1...10.js",
      "Square Area.js",
      "Inches to Centimet.js",
      "Greeting by Name.js",
      "Concatenate Data.js",
      "Projects Creation.js",
      "Pet Shop.js",
      "Yard Greening.js",
    ],
  };

  function navActive(items) {
    items.forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        e.preventDefault();
        item.classList.add("active");
      });

      item.addEventListener("mouseout", (e) => {
        e.preventDefault();
        item.classList.remove("active");
      });
    });
  }

  function basicsNavs() {
    navs.innerHTML = "";

    basics.FirstStepsInCodingLab.forEach((extense, i) => {
      navs.innerHTML += `
                <li class="nav-item">
                   <a class="nav-link basics" href="#">${i + 1}.${extense}</a>
                </li>
             `;
    });
  }

  function basicsLinks() {
    gistItem.innerHTML = "";

    basics.FirstStepsInCodingLab.forEach((extense, i) => {
      gistItem.innerHTML += `
                <li class="nav-item">
                   <a class="nav-link basics" href="#">${i + 1}.${extense}</a>
                </li>
             `;
    });
  }

  menuParent.addEventListener("click", (e) => {
    e.preventDefault();
    basicsNavs();
  });

  navLinks.addEventListener("click", (e) => {
    e.preventDefault();
    basicsLinks();
  });
});
