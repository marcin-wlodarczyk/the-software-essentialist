import {ValidationError, ValidationResult} from "./types";

export class TextUtils {
    public static hasLengthBetween(text: string, min: number, max: number): ValidationResult {
        if (min > max) throw new Error(`Invalid argument. Min must be lower than max`);

        if (text.length < min || text.length > max) {
            return {
                isValid: false,
                errors: [
                    {
                        type: "INVALID_LENGTH",
                        message: `Provided input's length is invalid. Must be between ${min} and ${max}`
                    }
                ]
            }
        }
        return {
            isValid: true
        }
    }

    public static containsAtLeastDigits(text: string, nDigits = 1): ValidationResult {
        const count = text.replace(/[^0-9]/g, '').length

        return count >= nDigits
            ? {isValid: true}
            : {
                isValid: false,
                errors: [
                    {
                        type: "INSUFFICIENT_DIGITS",
                        message: `Provided input contains insufficient number of digits(${count}). Must be at least ${nDigits}`
                    }
                ]
            };
    }

    public static containsAtLeastUppercase(text: string, nLetters = 1): ValidationResult {
        const count = text.replace(/[^A-Z]/g, '').length

        return count >= nLetters
            ? {isValid: true}
            : {
                isValid: false,
                errors: [
                    {
                        type: "INSUFFICIENT_UPPERCASE_LETTERS",
                        message: `Provided input contains insufficient number of uppercase letters(${count}). Must be at least ${nLetters}`
                    }
                ]
            };
    }
}

export function combineResults(results: ValidationResult[]): ValidationResult {
    let isValid = true;
    let errors: ValidationError[] = [];
    for(const res of results) {
        if(!res.isValid) {
            if(isValid) isValid = false;
            errors.push(...res.errors);
        }
    }
    return isValid ? {isValid} : {isValid, errors};
}

export class Password {
    public static isValid(input: string): ValidationResult {
        return combineResults([
            TextUtils.hasLengthBetween(input, 5, 15),
            TextUtils.containsAtLeastDigits(input, 1),
            TextUtils.containsAtLeastUppercase(input, 1),
        ]);
    }
}