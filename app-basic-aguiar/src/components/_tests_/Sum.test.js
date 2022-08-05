const sum = require('../Sum.js');

test('Quando chamado e passado dois numeros, ele retorna a soma de ambos', () => {
    const x = Math.random()*10;
    const y = Math.random()*10;

    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
    expect(sum(x, y)).toBe(x + y);
}
);
