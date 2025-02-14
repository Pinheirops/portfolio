const body = document.querySelector("body");

//  NAV
const icon = document.querySelector(".icon");
const icons = document.querySelectorAll(".icon img");
const logo = document.querySelectorAll(".logo img");
const linkNav = document.querySelectorAll(".navMain a");
const list = document.querySelectorAll(".lista-principal a");

// MAIN
const mainTitle = document.querySelector("h1");
const mainSpan = document.querySelector("h1 span");
const btnMain = document.querySelector(".btn-cv");
const btnPage = document.querySelector(".btn-pg");

// PROJECT
const cards = document.querySelectorAll(".card p");
const cardProject = document.querySelector(".cartoes-projeto");

// RESUME
const resume = document.querySelectorAll(".exp-detail p");

// SOCIAL
const social = document.querySelectorAll(".social-icon a");
const formulario = document.querySelector(".form");

// DEFAULT
const paragraphs = document.querySelectorAll("p");
const titleH2 = document.querySelectorAll("h2");

function changeColor() {
  body.classList.toggle("darkMode");

  icons.forEach((icone) => {
    icone.classList.toggle("show-off");
  });

  logo.forEach((item) => {
    item.classList.toggle("show-off");
  });

  linkNav.forEach((linkNav) => {
    linkNav.classList.toggle("text-warning");
  });

  paragraphs.forEach((paragraph) => {
    paragraph.classList.toggle("textDarkMode");
    cards.forEach((item) => {
      item.classList.remove("textDarkMode");
    });
  });

  mainTitle.classList.toggle("textDarkMode");
  mainSpan.classList.toggle("text-warning");

  btnMain.classList.toggle("bg-darkMode");
  btnMain.classList.toggle("textButtons");

  btnPage.classList.toggle("bg-darkMode");
  btnPage.classList.toggle("textButtons");

  titleH2.forEach((title) => {
    title.classList.toggle("textDarkMode");
  });

  cardProject.classList.toggle("scrollzin");
  cardProject.classList.toggle("scrollzin-dark");

  resume.forEach((item) => {
    item.classList.remove("textDarkMode");
  });

  list.forEach((item) => {
    item.classList.toggle("borderDark");
  });

  social.forEach((item) => {
    item.classList.toggle("bg-socialMedia");
  });

  formulario.classList.toggle('textDarkMode');
}


icon.addEventListener("click", changeColor);


// ANIMAÇÃO

new SimpleAnime();