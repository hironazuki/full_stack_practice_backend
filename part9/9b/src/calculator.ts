export type Connector = 'multiply' | 'add' | 'divide';

type Result = number | string;
export const calculator = (
  a: number,
  b: number,
  connector: Connector
): Result => {
  switch (connector) {
    case 'multiply':
      return a * b;
    case 'add':
      return a + b;
    case 'divide':
      return a / b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
};

try {
  console.log(calculator(1, 5, 'divide'));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}
