import {
    FieldValidationResult,
    buildRequiredFieldValidationFailedResponse,
    buildValidationSucceededResult,
    isStringValueInformed,
  } from "@/common/validations";

  export const validateTypeField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
      return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
  };
  
  export const validateAliasField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
      return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSucceededResult();
  };