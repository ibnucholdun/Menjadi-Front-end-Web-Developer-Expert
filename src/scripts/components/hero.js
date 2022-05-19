class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <div tabindex="0" class="hero_inner">
            <h1 class="hero_title">Selamat Datang Di <span class="hero_bold">IT Resto</span></h1>
            <p class="hero_tagline">Kurus dan gendut adalah pilihan tapi makan enak adalah kebutuhan!</p>
            <a href="#main-content" class="hero_button">Baca Selengkapnya...</a>
        </div>
    </div>
        `;
  }
}

customElements.define('hero-element', Hero);
