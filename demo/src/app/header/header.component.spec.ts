import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  const stateService: any = {
    model: {
      title: ''
    }
  };

  beforeEach(() => {
    component = new HeaderComponent(
      stateService
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
