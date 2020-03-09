import { $, browser } from 'protractor';

describe('Search for The name of the wind', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should go to Patrick Rothfuss the books page', async () => {
    await browser.get('http://www.google.com');
    await(browser.sleep(10000));
    await $('.gLFyf.gsfi').sendKeys('The name of the wind');
    await(browser.sleep(3000));
    await $('.gNO89b').click();
    await(browser.sleep(5000));
    await $('[href="https://www.patrickrothfuss.com/content/books.asp').click();
  });
});
