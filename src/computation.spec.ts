import './computation';
const evaluate = (global as any).ICM.Computation.evaluate;

test('should add multiple numbers for one expression', () => {
    const expr = [{ Name: "x1", Function: "ADD", Parameters: ["a", "b", "c"] }];
    const context = { a: 1, b: 2, c: 3 };
    expect(evaluate(expr, context)).toEqual({ "x1": 6 });
})