const variant = require('./');

describe('variant', () => {
  it('should create a function that returns a matching prop value when passed a string', () => {
    const fn = variant('use', {
      light: '#fff',
      dark: '#000',
    });

    expect(fn({use: 'light'})).toBe('#fff');
    expect(fn({use: 'dark'})).toBe('#000');
  });

  it('should create a function that resolves a value from props', () => {
    const fn = variant('use', {
      light: props => props.colors.white,
      dark: props => props.colors.black,
    });
    const colors = {
      white: '#fff',
      black: '#000',
    };
    expect(fn({use: 'light', colors})).toBe('#fff');
    expect(fn({use: 'dark', colors})).toBe('#000');
  });
});
