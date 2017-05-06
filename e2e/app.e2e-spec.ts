import { SaylentWeatherAppPage } from './app.po';

describe('saylent-weather-app App', () => {
  let page: SaylentWeatherAppPage;

  beforeEach(() => {
    page = new SaylentWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
