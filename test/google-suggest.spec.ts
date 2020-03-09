import { $, browser } from 'protractor';

describe('Click on the first suggestion for The name of the w', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then by using the suggestion should go to Patrick Rothfuss The Books Page', async () => {
    await browser.get('http://www.google.com');
    await(browser.sleep(10000));
    await $('.gLFyf.gsfi').sendKeys('The name of the w');
    await(browser.sleep(3000));
    await $('.sbl1').click();
    await(browser.sleep(5000));
    await $('[href="https://www.patrickrothfuss.com/content/books.asp').click();
  });
});
