import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import DATA from '../data.json';

// toggle
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});
hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});
main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

// DOM manipulation explore restaurant list
const getExploreRestaurant = (data) => {
    data.restaurants.forEach(restaurant => {
        const restaurantItem = document.getElementById('explore-restaurant-list');
        restaurantItem.innerHTML += `
        <article tabindex="0" class="card">
            <div class="card-img-container">
                <img class="card-image" alt="${restaurant.name}" src="${restaurant.pictureId}"/>
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>

            <div class="card-content">
                <p class="card-content-title">${restaurant.name} - ${restaurant.city}</p>
                <p class="card-content-title-description">Description: </p>
                <p class="card-content-description">${restaurant.description}</p>
            </div>
        </article>
        `;
    })
}
getExploreRestaurant(DATA);