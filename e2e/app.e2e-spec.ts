import { MabryPortfolioPage } from './app.po';

describe('mabry-portfolio App', () => {
  let page: MabryPortfolioPage;

  beforeEach(() => {
    page = new MabryPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
