/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', (I) => {
  I.seeElement('#explore-restaurant-list');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async (I) => {
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');

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
});
