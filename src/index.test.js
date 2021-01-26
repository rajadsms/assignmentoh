const stringToNumber = require('./index');
describe('String To Number', () => {
  test('Simple string to number', () => {
    let stringData = '42';
    expect(stringToNumber(stringData)).toBe(42);
  });
  test('0 to number', () => {
    let stringData = '0';
    expect(stringToNumber(stringData)).toBe(0);
  });
  test('42a to number', () => {
    let stringData = '42a';
    expect(stringToNumber(stringData)).toBe(42);
  });
  test('42a35 to number', () => {
    let stringData = '42a35';
    expect(stringToNumber(stringData)).toBe(42);
  });
  test('abc42 to number', () => {
    let stringData = 'abc42';
    expect(stringToNumber(stringData)).toBe(0);
  });
  test('-42 to number', () => {
    let stringData = '-42';
    expect(stringToNumber(stringData)).toBe(-42);
  });
});
