const { traerAkatsuki } = require('../testUnitarios/traerAkatsuki');

test('traerAkatsuki should be a function', () => {
    let input = traerAkatsuki('chibi');
    expect(typeof input).toBe('string');
});


