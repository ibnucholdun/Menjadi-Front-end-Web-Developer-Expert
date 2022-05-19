/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {

  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((Restaurant) => Restaurant.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurants;
  },

  putRestaurant(Restaurant) {
    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(Restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(Restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((Restaurant) => Restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
