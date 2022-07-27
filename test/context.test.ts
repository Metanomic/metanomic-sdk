import { context } from '../src';

describe('Context', () => {
  it('receives player info', () => {

    expect(context()).toBeTruthy();
  });
});
