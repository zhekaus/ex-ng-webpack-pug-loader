import { EngmePage } from './app.po';

describe('engme App', function() {
  let page: EngmePage;

  beforeEach(() => {
    page = new EngmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
