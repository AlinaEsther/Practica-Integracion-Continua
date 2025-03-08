const HolaMundo = require('./index');

test('devuelve "Hola Mundo"', () => {
  expect(HolaMundo()).toBe('Hola Mundo');
});
