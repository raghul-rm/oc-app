import styles from './css/styles.css';

let navItems = window.oc.nav.navItems;

export default ({ name, staticPath }) =>
  `<nav class="${styles.nav}">
    <ul>
    ${navItems.map(item => `<li>${item}</li>`).join('')}
    </ul>
  </nav>`;
