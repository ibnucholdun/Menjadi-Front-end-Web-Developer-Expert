class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
        <ul>
            <li><span>Copyright © 2022 - IC Resto</span></li>
            <li><span>handcrafted with <i title="love" class="fa fa-heart"></i> by Ibnu Choldun</span></li>
        </ul>
    </footer>
        `;
  }
}

customElements.define('footer-custom', FooterCustom);
