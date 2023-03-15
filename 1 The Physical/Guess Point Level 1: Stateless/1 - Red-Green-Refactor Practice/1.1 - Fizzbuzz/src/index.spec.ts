import {fizzbuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    const cases: [number[], string][] = [
        [[], ''],
        [[1], '1'],
        [[3], 'Fizz'],
        [[3, 6], 'FizzFizz'],
        [[5], 'Buzz'],
        [[5,10], 'BuzzBuzz'],
        [[15], 'FizzBuzz'],
        [[15, 30], 'FizzBuzzFizzBuzz'],
        [[1,2,3,4,5], '12Fizz4Buzz'],
        [[3,4,5,15], 'Fizz4BuzzFizzBuzz'],
    ];
    it.each(cases)('Given numbers %s should render "%s"', (numbers: number[], expected: string) => {
        expect(fizzbuzz(numbers)).toBe(expected);
    });
});
