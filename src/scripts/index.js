import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#bar-menu'),
  content: document.querySelector('#main-content'),
  drawer: document.querySelector('#drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
