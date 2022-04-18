import { PrefixPipe } from './prefix.pipe';

fdescribe('PrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new PrefixPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a prefixed string', () => {
    const pipe = new PrefixPipe();
    expect(pipe.transform('mockValue', 'mockPrefix:')).toBe('mockPrefix:mockValue');
  });
});
