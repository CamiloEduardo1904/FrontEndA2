// Carrossel do topo — vanilla JS, acessível e sem dependências.
(function () {
  "use strict";

  var car = document.querySelector(".carrossel");
  if (!car) return;

  var trilho = car.querySelector(".carrossel__trilho");
  var slides = Array.prototype.slice.call(car.querySelectorAll(".slide"));
  var pontos = Array.prototype.slice.call(car.querySelectorAll(".ponto"));
  var atual = 0;
  var timer = null;
  var semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function mostrar(n) {
    atual = (n + slides.length) % slides.length;
    trilho.style.transform = "translateX(-" + (atual * 100) + "%)";
    slides.forEach(function (s, k) {
      s.setAttribute("aria-hidden", k === atual ? "false" : "true");
    });
    pontos.forEach(function (p, k) {
      if (k === atual) { p.setAttribute("aria-current", "true"); }
      else { p.removeAttribute("aria-current"); }
    });
  }

  function proximo() { mostrar(atual + 1); }
  function anterior() { mostrar(atual - 1); }

  function iniciar() {
    if (semMovimento || slides.length < 2) return;
    parar();
    timer = window.setInterval(proximo, 6000);
  }
  function parar() { if (timer) { window.clearInterval(timer); timer = null; } }
  function reiniciar() { parar(); iniciar(); }

  var btAnt = car.querySelector(".carrossel__seta--ant");
  var btProx = car.querySelector(".carrossel__seta--prox");
  if (btAnt) btAnt.addEventListener("click", function () { anterior(); reiniciar(); });
  if (btProx) btProx.addEventListener("click", function () { proximo(); reiniciar(); });

  pontos.forEach(function (p, k) {
    p.addEventListener("click", function () { mostrar(k); reiniciar(); });
  });

  car.addEventListener("mouseenter", parar);
  car.addEventListener("mouseleave", iniciar);
  car.addEventListener("focusin", parar);
  car.addEventListener("focusout", iniciar);

  mostrar(0);
  iniciar();
})();
