import {AppModule} from './app.module';

describe('AppModule', () => {
  let module: AppModule;

  beforeAll(() => {
    module = new AppModule();
  });

  it('Should be created', () => {
      expect(module).toBeTruthy();
  });

});
