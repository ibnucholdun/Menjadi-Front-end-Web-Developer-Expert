class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
        <a href="/">
            <h1 class="nav_logo">IT Resto</h1>
        </a>
        <button class="menu" id="menu" aria-label="button menu dropdown on mobile">☰</button>
        <nav id="drawer" class="nav">
            <ul class="nav_list">
                <li class="nav_item"><a href="#/">Home</a></li>
                <li class="nav_item"><a href="#/favorite">Favorite</a></li>
                <li class="nav_item"><a href="https://github.com/ibnucholdun" target="_blank" rel="noopener">About
                        Us</a></li>
            </ul>
        </nav>
    </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
