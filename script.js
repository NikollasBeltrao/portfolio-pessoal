const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navLinks.classList.toggle('is-open', !isOpen);
});

navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }
});

if (!['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
  if (window.location.hostname === 'nikollas-beltrao.duckdns.org') {
    const corenotes = document.querySelector('[data-demo="8184"]');
    if (corenotes) {
      corenotes.href = 'https://nikollas-beltrao-projects.duckdns.org:8440/';
      corenotes.removeAttribute('data-demo');
      const details = corenotes.closest('.project-card').querySelector('[data-local-info]');
      if (details) {
        details.removeAttribute('data-local-info');
      }
    }
    const academico = document.querySelector('[data-demo="8288"]');
    if (academico) {
      academico.href = 'https://nikollas-beltrao-projects.duckdns.org:8441/';
      academico.removeAttribute('data-demo');
      const details = academico.closest('.project-card').querySelector('[data-local-info]');
      if (details) {
        details.removeAttribute('data-local-info');
      }
    }
    const resultados = document.querySelector('[data-demo="8282"]');
    if (resultados) {
      resultados.href = 'https://nikollas-beltrao-projects.duckdns.org:8442/';
      resultados.removeAttribute('data-demo');
      const details = resultados.closest('.project-card').querySelector('[data-local-info]');
      if (details) {
        details.removeAttribute('data-local-info');
      }
    }
    const grafica = document.querySelector('[data-demo="8283"]');
    if (grafica) {
      grafica.href = 'https://nikollas-beltrao-projects.duckdns.org:8443/';
      grafica.removeAttribute('data-demo');
      const details = grafica.closest('.project-card').querySelector('[data-local-info]');
      if (details) {
        details.removeAttribute('data-local-info');
      }
    }
    const talkroom = document.querySelector('[data-demo="8187"]');
    if (talkroom) {
      talkroom.href = 'https://nikollas-beltrao-projects.duckdns.org:8446/';
      talkroom.removeAttribute('data-demo');
    }
    const mural = document.querySelector('[data-demo="8185"]');
    if (mural) {
      mural.href = 'https://nikollas-beltrao-projects.duckdns.org:8445/home';
      mural.removeAttribute('data-demo');
      const details = mural.closest('.project-card').querySelector('[data-local-info]');
      if (details) {
        details.removeAttribute('data-local-info');
        details.querySelector('p').append(' A demonstração aceita até 20 publicações no total.');
      }
    }
  }
  document.querySelectorAll('[data-demo], [data-local-info]').forEach((element) => element.remove());
}

document.querySelector('#year').textContent = new Date().getFullYear();
