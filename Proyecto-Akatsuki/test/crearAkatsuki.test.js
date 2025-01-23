const { crearAkatsuki } = require("../testUnitarios/crearAkatsuki");

test("crearAkatsuki should be a function", () => {
 expect(typeof crearAkatsuki('Itachi')).toBe("String");
});