
import { FormValidationResult } from "@/common/validations";
import { validateAliasField, validateTypeField } from "./account-field.validation";
import { Account, AccountFormErrors } from "../account.vm";


export const validateAccountForm = (account: Account): 
FormValidationResult<AccountFormErrors> => {
    const fieldValidationResults = [
        validateTypeField(account.type),
        validateAliasField(account.name)
    ];
    return {
        succeeded: fieldValidationResults.every((f) => f.succeeded),
        errors: {
          type: fieldValidationResults[0].errorMessage ?? "",
          name: fieldValidationResults[1].errorMessage ?? "",
        }, 
    };
};