const DrawerInitiator = {
  init({
    button,
    content,
    drawer,
    hero,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
