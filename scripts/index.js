// nav
const nav = document.querySelector(".nav");
const backgroundBlur = document.querySelector(".background-blur");

const openNav = () => {
  nav.classList.add("active");
  setBackgrounBlurRight();
};

const closeNav = () => {
  nav.classList.remove("active");
};

const setBackgrounBlurRight = () => {
  backgroundBlur.style.right = nav.offsetWidth + "px";
};

window.addEventListener("resize", setBackgrounBlurRight);

// lang (juste l'effet select)
const langOptions = document.querySelector(".lang-button");

const showLangOptions = (e) => {
  e.stopPropagation();

  if (e.key) {
    if (e.key === "Enter") langOptions.classList.toggle("active");
  } else {
    langOptions.classList.toggle("active");
  }
};

const hideLangOptions = () => {
  langOptions.classList.remove("active");
};

window.addEventListener("click", hideLangOptions);
