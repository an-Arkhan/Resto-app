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
  // … kita akan mengisi uji coba berikutnya …
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.resto-item a');

  const titles = [];

  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('.resto-item a').at(i));
    I.wait(1);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    titles.push(await I.grabTextFrom('.resto__name'));
    I.amOnPage('/');
    I.wait(2);
  }

  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('#query');
});
