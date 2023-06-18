console.info('[GitHub]: mute notifications 🔇');

const style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(`
  .notification-indicator .mail-status.unread,
  .AppHeader .AppHeader-button.AppHeader-button--hasIndicator::before {
    display: none !important;
  }
`));

document.documentElement.appendChild(style);
