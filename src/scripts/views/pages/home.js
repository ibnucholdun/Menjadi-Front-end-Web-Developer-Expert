import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div>
          <div class="main">
            <h2 tabindex="0" class="explore-restaurant__label">Explore Restaurant</h2>
            <section id="explore-restaurant-list">
            ${createSkeletonRestaurantTemplate(20)}
            </section>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.getElementById('explore-restaurant-list');
    restaurantContainer.innerHTML = '';
    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
