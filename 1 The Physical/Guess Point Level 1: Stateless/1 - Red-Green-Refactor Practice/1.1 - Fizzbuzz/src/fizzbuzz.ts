export function fizzbuzz(numbers: number[]): string {
    return numbers.reduce<string>((acc: string, n: number) => {
        if(n % 3 === 0 && n % 5 === 0) return acc += 'FizzBuzz';
        if(n % 3 === 0) return acc += 'Fizz';
        if(n % 5 === 0) return acc += 'Buzz';
        return acc += n;
    }, '');
}