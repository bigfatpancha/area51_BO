import { Area51FrontPage } from './app.po';

describe('area51-front App', () => {
  let page: Area51FrontPage;

  beforeEach(() => {
    page = new Area51FrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
