import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div>
    <h2 tabindex="0" class="explore-restaurant__label">Favorite</h2>
    <h2 class="restaurant-item__not__found"></h2>
    <section id="explore-restaurant-list"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('explore-restaurant-list');
    const empty = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h2>Tidak ada favorite restaurant yang ditampilkan</h2>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },
};

export default Favorite;
