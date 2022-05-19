import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
  loading,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div>
          <div id="indikator-loading"></div>
          <div class="main">
            <h2 tabindex="0" class="explore-restaurant__label">Explore Restaurant</h2>
            <section id="explore-restaurant-list"></section>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const indikatorLoading = document.getElementById('indikator-loading');
    const mainContainer = document.getElementsByClassName('main');
    indikatorLoading.innerHTML = loading();
    mainContainer.innerHTML = '';
    const restaurantContainer = document.getElementById('explore-restaurant-list');
    restaurantContainer.innerHTML = '';

    try {
      const listRestaurant = await RestaurantSource.getRestaurants();
      listRestaurant.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      indikatorLoading.style.display = 'none';
    } catch (error) {
      indikatorLoading.style.display = 'none';
      restaurantContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    }
  },
};

export default Home;
