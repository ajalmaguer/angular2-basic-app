import { BasicAppPage } from './app.po';

describe('basic-app App', function() {
  let page: BasicAppPage;

  beforeEach(() => {
    page = new BasicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
