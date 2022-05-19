/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async (I) => {
  I.amOnPage('/');
  I.seeElement('.card-content-title');
  const firstCardRestaurant = locate('.card-content-title a').first();
  const firstCardRestaurantTitle = await I.grabTextFrom(firstCardRestaurant);
  I.click(firstCardRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstCardRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#explore-restaurant-list');
});
