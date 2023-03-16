import {TextUtils} from "./index";

describe('password validator', () => {
    describe('.hasLengthBetween', () => {
        it('Should throw an error with min > max', () => {
            expect(() => TextUtils.hasLengthBetween('ABC', 10, 2)).toThrow();
        });

        const cases: [string, number, number, boolean][] = [
            ['abc', 1, 3, true],
            ['abc', 3, 3, true],
            ['ab', 3, 4, false],
            ['abcd', 1, 2, false],
        ];
        it.each(cases)('Given text "%s" and length between %i and %i should return "%p"', (text: string, min: number, max: number, isValid: boolean) => {
            expect(TextUtils.hasLengthBetween(text, min, max).isValid).toBe(isValid);
        });
    });
})

