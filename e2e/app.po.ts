import { browser, element, by } from 'protractor';

export class Ng2ShoplistPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root .footer-copyright .container')).getText();
  }
}
