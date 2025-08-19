const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");

let active = 0;
const total = items.length;
let timer;

function showItem(index) {
  // Corrige índice para circular
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  // Remove classes ativas
  document.querySelector(".carousel-item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  // Adiciona classes ativas ao item e dot atual
  items[index].classList.add("active");
  dots[index].classList.add("active");

  // Atualiza o número (com zero à esquerda)
  numberIndicator.textContent = String(index + 1).padStart(2, "0");

  active = index;
}

function next() {
  showItem(active + 1);
  resetTimer();
}
function prev() {
  showItem(active - 1);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    showItem(active + 1);
  }, 6000);
}

// Eventos dos botões
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);

// Eventos dos dots
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    showItem(idx);
    resetTimer();
  });
});

// Inicia carrossel
showItem(0);
timer = setInterval(() => {
  showItem(active + 1);
}, 6000);