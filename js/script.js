"use strict";

// Чекаємо поки завантажиться сторінка та усі її ресурси
// window.addEventListener("load", windowLoad);

// function windowLoad() {
//    Відслідковуємо кліки на усій сторінці
//    document.addEventListener("click", documentActions);
// }

/*
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

   // Функціонал спойлерів
   if (targetElement.closest("[data-spoller]")) {
      const currentElement = targetElement.closest("[data-spoller]");
      if (!currentElement.nextElementSibling.classList.contains("--sliding")) {
         currentElement.classList.toggle("active");
      }
      slideToggle(currentElement.nextElementSibling, 500)
   }

   // Функціонал табів
   if (targetElement.closest("[data-tabs-button]")) {
      const currentElement = targetElement.closest("[data-tabs-button]");
      setTab(currentElement);
   }
}
*/

// Щоб спойлери були закриті (Додати функціонал закривання по брейкпоінту)
// const spollers = document.querySelectorAll("[data-spoller]");

// if (spollers.length) {
//    spollers.forEach(spoller => {
//       spoller.nextElementSibling.hidden = true;
//    })
// }

// Плавна поява спойлера:
// let slideDown = (target, duration = 500) => {
//    if (!target.classList.contains("--sliding")) {
//       target.classList.add("--sliding");
//       target.hidden = false;
//       let height = target.offsetHeight;

//       target.style.paddingTop = 0;
//       target.style.paddingBottom = 0;
//       target.style.marginTop = 0;
//       target.style.marginBottom = 0;

//       target.style.overflow = "hidden";
//       target.style.height = 0;

//       target.offsetHeight;

//       target.style.transitionProperty = `height, margin, padding`;
//       target.style.transitionDuration = `${duration}ms`;

//       target.style.height = `${height}px`;

//       target.style.removeProperty("padding-top");
//       target.style.removeProperty("padding-bottom");
//       target.style.removeProperty("margin-top");
//       target.style.removeProperty("margin-bottom");

//       setTimeout(() => {
//          target.style.removeProperty("height");
//          target.style.removeProperty("overflow");
//          target.style.removeProperty("transition-duration");
//          target.style.removeProperty("transition-property");
//          target.classList.remove("--sliding");
//       }, duration)
//    }
// }

// let slideUp = (target, duration = 500) => {
//    if (!target.classList.contains("--sliding")) {
//       target.classList.add("--sliding");
//       target.hidden = false;
//       let height = target.offsetHeight;

//       target.style.transitionProperty = `height, margin, padding`;
//       target.style.transitionDuration = `${duration}ms`;
//       target.style.height = `${height}px`;

//       target.offsetHeight;

//       target.style.overflow = "hidden";
//       target.style.paddingTop = 0;
//       target.style.paddingBottom = 0;
//       target.style.marginTop = 0;
//       target.style.marginBottom = 0;

//       target.style.height = 0;

//       setTimeout(() => {
//          target.style.removeProperty("padding-top");
//          target.style.removeProperty("padding-bottom");
//          target.style.removeProperty("margin-top");
//          target.style.removeProperty("margin-bottom");

//          target.style.removeProperty("height");
//          target.style.removeProperty("overflow");
//          target.style.removeProperty("transition-duration");
//          target.style.removeProperty("transition-property");
//          target.classList.remove("--sliding");

//          target.hidden = true;
//       }, duration)
//    }
// }

// let slideToggle = (target, duration = 500) => {
//    target.hidden ? slideDown(target, duration) : slideUp(target, duration);
// }

// ------------- Слайдер swiper -------------
// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
//    // Створюємо слайдер
//    new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
//       slidesPerView: 1,
//       spaceBetween: 0,
//       // autoHeight: true,
//       speed: 800,

//       // touchRatio: 0,
//       // simulateTouch: false,
//       // loop: true,
//       // preloadImages: false,
//       // lazy: true,

//       /*
//       // Ефекти
//       effect: 'fade',
//       autoplay: {
//          delay: 3000,
//          disableOnInteraction: false,
//       },
//       */

//       // Пагінація
//       /*
//       pagination: {
//          el: '.swiper-pagination',
//          clickable: true,
//       },
//       */

//       // Скроллбар
//       /*
//       scrollbar: {
//          el: '.swiper-scrollbar',
//          draggable: true,
//       },
//       */

//       // Кнопки "вліво/вправо"
//       navigation: {
//          prevEl: '.swiper-button-prev',
//          nextEl: '.swiper-button-next',
//       },
//       /*

//       // Брейкпоінти
//       breakpoints: {
//          640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//          },
//          768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//          },
//          992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//          },
//          1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//          },
//       },
//       */
//       // Події
//       on: {

//       }
//    });
// }

// ------------------ Таби ------------------
// function setTab(tabElement) {
//    const tabsParent = tabElement.closest("[data-tabs]");
//    const tabsButtons = Array.from(tabsParent.querySelectorAll("[data-tabs-button]"));
//    const tabsActiveButton = tabsParent.querySelector("[data-tabs-button].active");

//    tabsActiveButton.classList.remove("active");
//    tabElement.classList.add("active");

//    const currentButtonIndex = tabsButtons.indexOf(tabElement);
//    const tabsElements = tabsParent.querySelectorAll("[data-tab-element]");

//    tabsElements.forEach(tabsElement => {
//       tabElement.hidden = true;
//    })

//    tabsElements[currentButtonIndex].hidden = false;
// }


// ------------- smooth UP scroll -------------
// document.addEventListener("DOMContentLoaded", function () {
//    document.addEventListener("click", function (e) {
//       const targetElement = e.target

//       if (targetElement.closest(".footer__up")) {
//          window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//          })
//          e.preventDefault()
//       }
//    })
// })
// ------------- END OF smooth UP scroll -------------


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