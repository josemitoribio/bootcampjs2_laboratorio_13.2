import { Account } from "../account.vm";
import { validateAccountForm } from "./account-form.validation";
import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";

describe("pages/account/validation/account-form.validation.specs", () => {
    it("Should return validation succeeded when both fields are informed", () => {
    // Arrange
        const account: Account = {
          type: "Cuenta Corriente",
          name: "Gastos mayores",
        };
    // Act
        const result = validateAccountForm(account);
    // Assert
        expect(result.succeeded).toBeTruthy();
        expect(result.errors.type).toEqual("");
        expect(result.errors.name).toEqual("");
    });
      it("Should return validation failed when type is empty", () => {
        // Arrange
        const credentials: Account = {
            type: "",
            name: "Gastos mayores",
        };
    // Act
        const result = validateAccountForm(credentials);
    // Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errors.type).toEqual(REQUIRED_FIELD_MESSAGE);
        expect(result.errors.name).toEqual("");
    });
      it("Should return validation failed when name is empty", () => {
        // Arrange
        const account: Account = {
            type: "Cuenta Corriente",
            name: "",
        };
    // Act
        const result = validateAccountForm(account);
    // Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errors.type).toEqual("");
        expect(result.errors.name).toEqual(REQUIRED_FIELD_MESSAGE);
    });
      it("Should return validation failed when both type and name is empty", () =>
    {
    // Arrange
        const account: Account = {
            type: "",
            name: "",
    };
    // Act
    const result = validateAccountForm(account);
    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.type).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.name).toEqual(REQUIRED_FIELD_MESSAGE);
}); 
});