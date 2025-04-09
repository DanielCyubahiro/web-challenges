import { add, divide, multiply, subtract } from "./index.js";

test('Should return 5 when add(3,2) is called', () => {
  expect(add(3,2)).toBe(5);
})

test('Should return 5 when subtract(10,5) is called', () => {
  expect(subtract(10,5)).toBe(5);
})

test('Should return 15 when multiply(3,5) is called', () => {
  expect(multiply(3,5)).toBe(15);
})

test('Should return 5 when divide(15,3) is called', () => {
  expect(divide(15,3)).toBe(5);
})

test('Should return "You should not do this!" when divide(15,0) is called', () => {
  expect(divide(15,0)).toBe("You should not do this!");
})