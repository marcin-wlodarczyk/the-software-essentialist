import {ValidationResult} from "./types";

export class TextUtils {
    public static hasLengthBetween(text: string, min: number, max: number): ValidationResult {
        if(min > max) throw new Error(`Invalid argument. Min must be lower than max`);

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
}