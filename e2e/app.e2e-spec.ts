import { MockupsPage } from './app.po';

describe('mockups App', function() {
  let page: MockupsPage;

  beforeEach(() => {
    page = new MockupsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
