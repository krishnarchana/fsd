import { FSDUI2Page } from './app.po';

describe('fsdui2 App', function() {
  let page: FSDUI2Page;

  beforeEach(() => {
    page = new FSDUI2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
