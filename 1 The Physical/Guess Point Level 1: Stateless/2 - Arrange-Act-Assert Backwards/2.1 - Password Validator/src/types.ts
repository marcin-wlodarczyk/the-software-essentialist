type ErrorType = 'INVALID_LENGTH' | 'INSUFFICIENT_DIGITS' | 'INSUFFICIENT_UPPERCASE_LETTERS';

export interface ValidationError {
    type: ErrorType;
    message: string;
}

interface SuccessfulResult {
    isValid: true;
}

export interface FailureResult {
    isValid: false;
    errors: ValidationError[];
}

export type ValidationResult = SuccessfulResult | FailureResult;