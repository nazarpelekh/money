import { MoneyPage } from './app.po';

describe('money App', function() {
  let page: MoneyPage;

  beforeEach(() => {
    page = new MoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
