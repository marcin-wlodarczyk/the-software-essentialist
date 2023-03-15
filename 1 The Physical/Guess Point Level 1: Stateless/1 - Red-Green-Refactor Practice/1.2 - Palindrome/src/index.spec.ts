import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    describe('.isPalindrome', () => {
        const cases: [string, boolean][] = [
            ['abc', false],
            ['AbC', false],
            ['WoW', true],
            ['wow', true],
            ['mom', true],
            ['Mom', true],
            ['123', false],
            ['hello', false],
            ['world', false],
            ['Was It A Rat I Saw', true],
            ['Never Odd or Even', true],
        ];
        it.each(cases)('Given a word "%s" should return "%p"', (input: string, expectation: boolean) => {
            expect(isPalindrome(input)).toBe(expectation);
        });
    });
})