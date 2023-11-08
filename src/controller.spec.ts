// simple.test.ts

function sum(a: number, b: number): number {
    return a + b;
  }
  
  test('Adição simples', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
  
  test('Adição com números negativos', () => {
    const result = sum(-2, 3);
    expect(result).toBe(1);
  });
  