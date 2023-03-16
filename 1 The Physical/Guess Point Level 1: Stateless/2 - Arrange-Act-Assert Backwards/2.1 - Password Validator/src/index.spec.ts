import {combineResults, TextUtils} from "./index";
import {FailureResult, ValidationResult} from "./types";

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
    describe('.containsDigits', () => {
        it('Should validate text with 1 digit', () => {
            expect(() => TextUtils.containsAtLeastDigits('abc1').isValid).toBeTruthy();
        });

        const cases: [string, number, boolean][] = [
            ['abc', 1, false],
            ['a2bc', 1, true],
            ['a2bc3', 2, true],
            ['a2b2c3', 2, true],
            ['a2bc30', 3, true],
        ];
        it.each(cases)('Given text "%s" and %i digits requirement should return "%p"', (text: string, digits: number, isValid: boolean) => {
            expect(TextUtils.containsAtLeastDigits(text, digits).isValid).toBe(isValid);
        });
    });
    describe('.containsAtLeastUppercase', () => {
        it('Should validate text with 1 uppercase letter', () => {
            expect(() => TextUtils.containsAtLeastUppercase('aBc').isValid).toBeTruthy();
        });
        const cases: [string, number, boolean][] = [
            ['AbC', 2, true],
            ['A2BC', 2, true],
            ['Abb', 2, false],
            ['AbB', 3, false],
            ['A1B2C3', 3, true],
        ];
        it.each(cases)('Given text "%s" and %i uppercase letters requirement should return "%p"', (text: string, digits: number, isValid: boolean) => {
            expect(TextUtils.containsAtLeastUppercase(text, digits).isValid).toBe(isValid);
        });
    });
    describe('combineResults', () => {
        it('Should combine with 1 failure', () => {
            const results: ValidationResult[] = [
                {isValid: true},
                {
                    isValid: false,
                    errors: [
                        {
                            type: 'INVALID_LENGTH',
                            message: ''
                        }
                    ]
                },
                {isValid: true},
            ];
            const combined = combineResults(results);
            expect(combined.isValid).toBeFalsy();
            expect((combined as FailureResult).errors).toHaveLength(1);
        });
        it('Should combine without failures', () => {
            const results: ValidationResult[] = [
                {isValid: true},
                {isValid: true},
            ];
            const combined = combineResults(results);
            expect(combined.isValid).toBeTruthy();
            expect((combined as any).errors).toBeUndefined();
        });
    });
})

