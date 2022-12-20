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
  I.wait(2);
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
  I.wait(2);

  I.waitForElement('.resto-item');
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
