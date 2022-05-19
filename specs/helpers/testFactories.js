/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/likebutton-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-db';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
