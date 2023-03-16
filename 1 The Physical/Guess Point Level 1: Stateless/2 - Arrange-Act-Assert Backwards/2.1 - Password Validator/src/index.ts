import {ValidationResult} from "./types";

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
}