/**
 * ARQUIVO: animacoes.js
 * RESPONSABILIDADE:
 * Reunir os efeitos visuais do portfólio:
 * 1. revelar elementos ao rolar;
 * 2. atualizar a barra de progresso;
 * 3. controlar o cursor personalizado em desktop.
 */

/* ------------------------------------------------------------
   1. REVELAÇÃO DOS ELEMENTOS
   Todo elemento com a classe .reveal começa discreto.
   Quando entra na área visível, recebe a classe .show.
------------------------------------------------------------- */
const observadorDeSecoes = new IntersectionObserver((elementosObservados) => {
  elementosObservados.forEach((elemento) => {
    if (elemento.isIntersecting) {
      elemento.target.classList.add('show');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((elementoAnimado) => {
  observadorDeSecoes.observe(elementoAnimado);
});

/* ------------------------------------------------------------
   2. BARRA DE PROGRESSO
   O elemento #progress cresce conforme a página é percorrida.
------------------------------------------------------------- */
const barraDeProgresso = document.getElementById('progress');

window.addEventListener('scroll', () => {
  if (!barraDeProgresso) return;

  const alturaRolavel = document.documentElement.scrollHeight - window.innerHeight;
  const percentualPercorrido = alturaRolavel > 0
    ? (window.scrollY / alturaRolavel) * 100
    : 0;

  barraDeProgresso.style.width = `${percentualPercorrido}%`;
});

/* ------------------------------------------------------------
   3. CURSOR PERSONALIZADO
   É ativado apenas quando o dispositivo possui ponteiro preciso,
   como mouse ou touchpad. Em celular, permanece desativado.
------------------------------------------------------------- */
const cursorInterativo = document.getElementById('cursor');

if (cursorInterativo && window.matchMedia('(pointer:fine)').matches) {
  cursorInterativo.style.display = 'block';

  document.addEventListener('mousemove', (eventoMouse) => {
    cursorInterativo.style.left = `${eventoMouse.clientX}px`;
    cursorInterativo.style.top = `${eventoMouse.clientY}px`;
  });

  const seletoresInterativos = 'a, button, .skill, .cert, .info, .exp-card';

  document.querySelectorAll(seletoresInterativos).forEach((elementoInterativo) => {
    elementoInterativo.addEventListener('mouseenter', () => {
      cursorInterativo.style.width = '38px';
      cursorInterativo.style.height = '38px';
    });

    elementoInterativo.addEventListener('mouseleave', () => {
      cursorInterativo.style.width = '18px';
      cursorInterativo.style.height = '18px';
    });
  });
}
