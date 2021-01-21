import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    service = new StateService();
  });

  it('should be created', () => {
    expect(service.model.title).toEqual('Demo');
  });
});
