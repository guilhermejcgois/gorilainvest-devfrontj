import { Ng2ShoplistPage } from './app.po';

describe('ng2-shoplist App', function() {
  let page: Ng2ShoplistPage;

  beforeEach(() => {
    page = new Ng2ShoplistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
