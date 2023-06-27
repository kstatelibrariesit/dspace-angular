import { DefaultAppConfig } from '../../../../config/default-app-config';
import { KsuEnvironmentBannerComponent } from './ksu-environment-banner.component';

describe('KSU Environment Banner Component', () => {
  it('is disabled when no banner configuration is provided', () => {
    const appConfig = new DefaultAppConfig();
    const component = new KsuEnvironmentBannerComponent(appConfig);

    expect(component.bannerText).toBe('');
    expect(component.bannerEnabled).toBe(false);
    expect(component.bannerStyle).toEqual({});
  });

  /* tslint:disable:no-string-literal dot-notation */
  it('is populated when banner configuration is provided', () => {
    const appConfig = new DefaultAppConfig();
    appConfig['environmentBanner'] = { // eslint-disable-line @typescript-eslint/dot-notation
      text: 'Unit Test Environment',
      foregroundColor: '#fff',
      backgroundColor: '#996f00',
      enabled: true
    };

    const component = new KsuEnvironmentBannerComponent(appConfig);
    component.ngOnInit();

    expect(component.bannerText).toBe('Unit Test Environment');
    expect(component.bannerEnabled).toBe(true);
    expect(component.bannerStyle).toEqual({ 'color': '#000', 'background-color': '#fff' });
  });

  it('is disabled when enabled parameter is not "true"', () => {
    const appConfig = new DefaultAppConfig();
    appConfig['environmentBanner'] = {}; // eslint-disable-line @typescript-eslint/dot-notation

    appConfig['environmentBanner']['enabled'] = false; // eslint-disable-line @typescript-eslint/dot-notation
    const component = new KsuEnvironmentBannerComponent(appConfig);
    component.ngOnInit();
    expect(component.bannerEnabled).toBe(false);
  });
  /* tslint:enable:no-string-literal dot-notation */
});
