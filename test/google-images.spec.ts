import { $, browser } from 'protractor';

describe('Go to Google Images', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should go to Google Images page', async () => {
    await browser.get('http://www.google.com');
    await(browser.sleep(10000));
    await $(".gb_g[data-pid='2']").click();
    await(browser.sleep(3000));
    await expect($('.logo-subtext').getText())
      .toBe('Imágenes');
  });
});
