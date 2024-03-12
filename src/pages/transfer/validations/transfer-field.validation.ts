import { 
  isPositiveNumber,
  isStringValueInformed,
  isValidIban,
  isValueNotNullOrUndefined,
  isDateAfterToday,
  isEMailWellFormed,
  buildRequiredFieldValidationFailedResponse,
  buildValidationFailedResponse,
  buildValidationSucceededResult,
 } from "@/common/validations";

 import { FieldValidationResult,
    INVALID_AMOUNT_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    INVALID_IBAN_MESSAGE,
    INVALID_REAL_DATE_TRANSFER_MESSAGE,
 } from "@/common/validations";


export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
}
  if (!isValidIban(value)) {
    return buildValidationFailedResponse(INVALID_IBAN_MESSAGE)
}
  return buildValidationSucceededResult();
    
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResponse(INVALID_AMOUNT_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSucceededResult();

  export const validateRealDateTransferField = (
    value?: string
  ): FieldValidationResult => {
    if (!isValueNotNullOrUndefined(value)) {
      return buildValidationSucceededResult();
    }
    if (value && !isDateAfterToday(value)) {
      return buildValidationFailedResponse(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }
    return buildValidationSucceededResult();
  };

  export const validateEmailField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
      return buildValidationSucceededResult();
    }
    if (!isEMailWellFormed(value)) {
      return buildValidationFailedResponse(INVALID_EMAIL_MESSAGE);
  }
    return buildValidationSucceededResult();
  };