"use strict";

// Чекаємо поки завантажиться сторінка та усі її ресурси
window.addEventListener("load", windowLoad);
window.addEventListener("scroll", pageScroll);

function windowLoad() {
   // Відслідковуємо кліки на усій сторінці
   document.addEventListener("click", documentActions);
}

function documentActions(e) {
   const targetElement = e.target; // Елемент на який клікнули
   const bodyEl = document.body;

   // Функціонал для іконки меню
   if (targetElement.closest(".menu-icon")) {
      bodyEl.classList.toggle("menu-open");
   }

   // Закриваємо мобільне меню при кліках на посилання
   if (targetElement.closest(".menu__link") && bodyEl.classList.contains("menu-open")) {
      bodyEl.classList.remove("menu-open");
   }

   // Плавний перехід до секцій сторінки при кліках на навігацію
   if (targetElement.hasAttribute("data-goto")) {
      e.preventDefault();

      const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
      const headerContainerEl = document.querySelector(".header__container");
      const headerContainerHeight = headerContainerEl ? headerContainerEl.offsetHeight : 0;

      if (gotoElement) {
         window.scrollTo({
            top: gotoElement.offsetTop - headerContainerHeight,
            behavior: "smooth",
         });
      }
   }
}

function pageScroll() {
   scrollY > 50
      ? document.querySelector(".header").classList.add("scroll")
      : document.querySelector(".header").classList.remove("scroll");
}


// -------------- Animations (IntersectionObserver) -------------------

// const items = document.querySelectorAll("[data-watch]");
// const options = {
//    threshold: 0.2,
// }
// const callback = (entries) => {
//    entries.forEach(entry => {
//       entry.isIntersecting ? entry.target.classList.add("active") : entry.target.classList.remove("active");
//    });
// }
// const observer = new IntersectionObserver(callback, options);

// items.forEach(item => {
//    observer.observe(item);
// });