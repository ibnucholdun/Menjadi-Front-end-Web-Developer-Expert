import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="card">
            <div class="card-img-container">
                <img class="card-image" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>

            <div class="card-content">
                <p class="card-content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name} - ${restaurant.city}</a></p>
                <p class="card-content-title-description">Description: </p>
                <p class="card-content-description">${restaurant.description}</p>
            </div>
        </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
<div tabindex="0" class="container-info">
<div class="img-container">
    <img class="detail-img" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
</div>

<ul class="detail-info">
  <li class="resto-name">
    <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.name}</p>
    </li>

  <li class="resto-address">
    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
    </li>

  <li class="resto-rating">
    <i title="ratings" class="fas fa-star icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.rating}</p>
  </li>
  <h4> Description: </h4>
  <li><p class="detail-desc">${restaurant.description}</p></li>

  <li class="resto-category">${restaurant.categories
    .map(
      (category) => `
        <span class="category">${category.name}</span>
      `,
    )
    .join('')}
  </li>
</ul>
</div>
<h3 tabindex="0" >Menu</h3>

<div tabindex="0" class="detail-menu">
  <div class="detail-food">
    <h4>Food</h4>
    <ul>
      ${restaurant.menus.foods
    .map(
      (food) => `
            <li><p>${food.name}</p></li>
          `,
    )
    .join('')}
    <ul>
  </div>

  <div class="detail-drink">
    <h4>Drink</h4>
    <ul>
      ${restaurant.menus.drinks
    .map(
      (drink) => `
            <li><p>${drink.name}</p></li>
          `,
    )
    .join('')}
    <ul>
  </div>
</div>

<h3 tabindex="0" class="title-review">Reviews</h3>

<div tabindex="0" class="detail-review">
${restaurant.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>

          <p class="date-review">${review.date}</p>
        </div>

        <div class="body-review">
          ${review.review}
        </div>
      </div>
    `,
    )
    .join('')}
</div>
</div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

const loading = () => `
<div class="loading"></div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  loading,
};
