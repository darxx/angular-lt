import { ColorDirective } from './color.directive';

describe('ColorDirective', () => {
  const elementRef: any = {
    nativeElement: {
      style: {
        color: ''
      }
    }
  }
  it('should create an instance', () => {
    const directive = new ColorDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
