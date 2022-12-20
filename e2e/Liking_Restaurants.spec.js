/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(2);
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  I.wait(4);
  I.seeElement('.resto-item a');
  const firstResto = locate('.resto-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.wait(1);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.wait(1);
  I.seeElement('.resto-item');

  const likedRestoTitle = await I.grabTextFrom('.resto-item a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.seeElement('.resto-item a');

  const firstResto = locate('.resto-item a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(1);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(2);

  I.amOnPage('/#/favorite');
  I.wait(2);

  I.waitForElement('.resto-item');
  I.seeElement('.resto-item a');

  const firstRestoliked = locate('.resto-item a').first();
  const likedRestoName = await I.grabTextFrom(firstRestoliked);
  assert.strictEqual(firstRestoName, likedRestoName);
  I.click(firstRestoliked);
  I.wait(2);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(2);

  I.amOnPage('/#/favorite');
  I.wait(2);

  I.seeElement('.resto-item__not__found');
  const notFoundResto = await I.grabTextFrom('.resto-item__not__found');
  assert.strictEqual(notFoundResto, 'Tidak ada restaurant untuk ditampilkan');
});

Scenario('searching restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.wait(4);

  I.seeElement('.resto__name');

  const names = [];

  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('.resto-item a').at(i + 1));
    I.wait(1);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    names.push(await I.grabTextFrom('.resto__name'));
    I.amOnPage('/');
    I.wait(4);
  }

  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.wait(1);
  I.pressKey('Enter');
  I.wait(1);

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.resto__name');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.resto__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
