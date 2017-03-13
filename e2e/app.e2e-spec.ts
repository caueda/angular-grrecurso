import { AngularGrrecursoPage } from './app.po';

describe('angular-grrecurso App', () => {
  let page: AngularGrrecursoPage;

  beforeEach(() => {
    page = new AngularGrrecursoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
