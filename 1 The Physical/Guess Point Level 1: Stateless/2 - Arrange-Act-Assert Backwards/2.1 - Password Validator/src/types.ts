type ErrorType = 'INVALID_LENGTH';

interface ValidationError {
    type: ErrorType;
    message: string;
}

interface SuccessfulResult {
    isValid: true;
}

interface FailureResult {
    isValid: false;
    errors: ValidationError[];
}

export type ValidationResult = SuccessfulResult | FailureResult;