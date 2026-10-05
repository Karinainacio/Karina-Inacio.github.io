/**
 * ARQUIVO: navegacao.js
 * RESPONSABILIDADE:
 * Controlar exclusivamente o menu de navegação em telas menores.
 *
 * IDs utilizados no HTML:
 * - #nav  -> barra de navegação principal.
 * - #menu -> botão que abre/fecha o menu mobile.
 */

const menuNavegacao = document.getElementById('nav');
const botaoMenuMobile = document.getElementById('menu');

if (menuNavegacao && botaoMenuMobile) {
  // Abre ou fecha o menu quando a pessoa toca no botão ☰.
  botaoMenuMobile.addEventListener('click', () => {
    menuNavegacao.classList.toggle('open');
  });

  // Após escolher uma seção, fecha o menu para liberar a tela do celular.
  document.querySelectorAll('.nav-links a').forEach((linkNavegacao) => {
    linkNavegacao.addEventListener('click', () => {
      menuNavegacao.classList.remove('open');
    });
  });
}
