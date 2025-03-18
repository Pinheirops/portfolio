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

const frases = ["Front-end Dev", "Analista de Teste"];
let fraseIndex = 0;  // Índice da frase atual
let typedText = "";  // Texto que será mostrado
const typedElement = document.getElementById('typing-text');  // Elemento onde o texto aparecerá

// Função para simular o efeito de digitação
function typeText() {
  if (typeof window.index === 'undefined') {
    window.index = 0; // Se index não existir, inicializa com 0
  }
  
  if (window.index < frases[fraseIndex].length) {
    typedText += frases[fraseIndex][window.index];
    typedElement.textContent = typedText;
    window.index++;
    setTimeout(typeText, 150); // Chama novamente após 150ms
  } else {
    setTimeout(deleteText, 1000); // Depois que digitar tudo, apaga o texto
  }
}

function deleteText() {
  if (typedText.length > 0) {
      typedText = typedText.slice(0, -1);  // Remove a última letra
      typedElement.textContent = typedText;
      setTimeout(deleteText, 100);  // A cada 100ms, apaga uma letra
  } else {
      fraseIndex = (fraseIndex + 1) % frases.length;
      index = 0;
      setTimeout(typeText, 500);  // Após apagar tudo, começa a digitar novamente
  }
}

typeText();

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

const toggleClasses = (elements, classNames) => {
  elements.forEach((element) => {
    classNames.forEach((className) => {
      element.classList.toggle(className);
    });
  });
};

function changeColor() {
  // Alternar o modo escuro
  body.classList.toggle("darkMode");

  // Alternar as classes para os ícones e logo
  toggleClasses(icons, ["show-off"]);
  toggleClasses(logo, ["show-off"]);

  // Alternar a cor do texto nos links de navegação
  toggleClasses(linkNav, ["text-warning"]);

  // Alternar o estilo dos parágrafos, título principal e botão
  toggleClasses(paragraphs, ["textDarkMode"]);
  toggleClasses(titleH2, ["textDarkMode"]);
  toggleClasses([mainTitle], ["textDarkMode"]);
  toggleClasses([mainSpan], ["text-warning"]);

  // Alternar as classes nos botões
  btnMain.classList.toggle("bg-darkMode");
  btnMain.classList.toggle("textButtons");
  btnPage.classList.toggle("bg-darkMode");
  btnPage.classList.toggle("textButtons");

  // Alternar as classes do projeto
  cardProject.classList.toggle("scrollzin");
  cardProject.classList.toggle("scrollzin-dark");

  // Remover o modo escuro dos cartões de projeto
  cards.forEach((item) => item.classList.remove("textDarkMode"));

  // Alternar a borda nas listas
  toggleClasses(list, ["borderDark"]);

  // Alterar a cor de fundo dos ícones sociais
  toggleClasses(social, ["bg-socialMedia"]);

  // Alternar o modo escuro no formulário
  formulario.classList.toggle("textDarkMode");

  // Remover a classe textDarkMode do resumo
  resume.forEach((item) => item.classList.remove("textDarkMode"));
}

icon.addEventListener("click", changeColor);

// ANIMAÇÃO
new SimpleAnime();