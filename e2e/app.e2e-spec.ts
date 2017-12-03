import { Ang4BootstarpPage } from './app.po';

describe('ang4-bootstarp App', () => {
  let page: Ang4BootstarpPage;

  beforeEach(() => {
    page = new Ang4BootstarpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
