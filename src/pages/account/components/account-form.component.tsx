import React from "react";
import { 
  Account,
  createEmptyAccount,
  AccountFormErrors,
  createEmptyAccountFormErrors
} from "../account.vm";
import { validateAccountForm } from "../validations";

import classes from "./account-form.component.module.css";

interface Props {
  onUpdate: (account: Account) => void;
}

export const AccountFormComponent: React.FC<Props> = ({ onUpdate }) => {
  const [account, setAccount] = React.useState<Account>(
    createEmptyAccount()
  );

  const [errors, setErrors] = React.useState<AccountFormErrors>(
    createEmptyAccountFormErrors()
  );

  const handleUpdateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateAccountForm(account);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onUpdate(account);
    } 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de Cuenta:</label>
            <select 
              name="type" 
              value={account.type} 
              onChange={handleUpdateField}
              className={classes.large}
            >
              <option value="">Seleccionar</option>
              <option id="1" value="Cuenta Corriente">Cuenta Corriente</option>
              <option id="2" value="Cuenta de Ahorro">Cuenta de Ahorro</option>
              <option id="3" value="Cuenta de Nómina">Cuenta de Nómina</option>
            </select>
            {errors.type && <p className={classes.error}>{errors.type}</p>}
          </div>
          <div>
            <label>Alias:</label>
            <input
              type="text"
              name="name"
              value={account.name}
              onChange={handleUpdateField}
              className={classes.large}
            />
          {errors.name && <p className={classes.error}>{errors.name}</p>}
          </div>
        </div>
        <button className={classes.button} type="submit">GUARDAR</button>
      </form>
    </div>
  );
};
