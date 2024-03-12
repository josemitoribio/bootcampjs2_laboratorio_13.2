
import { REQUIRED_FIELD_MESSAGE } from "./validation.const";

export const buildValidationFailedResponse = (errorMessage: string) => ({
    succeeded: false,
    errorMessage,
});

export const buildValidationSucceededResult = () => ({
    succeeded:true,
});

export const buildRequiredFieldValidationFailedResponse = () =>
    buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);