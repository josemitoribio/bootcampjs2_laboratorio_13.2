import { AppLayout } from "@/layouts";
import React from "react";
import { AccountFormComponent } from "./components";
import { Account as VmAccount} from "./account.vm";
import { mapAccountVmToApi } from "./account.mapper";
import { saveAccount } from "./api/account.api";
import classes from "./account.page.module.css"

export const AccountPage: React.FC = () => {
  
  const handleAccount = (accountInfo: VmAccount) => {
    const mappedAccount = mapAccountVmToApi(accountInfo);
    saveAccount(mappedAccount).then((savedAccount) => {
      if (savedAccount) {
        alert ("Cuenta añadida con éxito");
      }else {
        alert ("Error al añadir la cuenta");
      }
    });
};
      
  return (
    <AppLayout>
      <div className={classes.container}>
      <h1 className={classes.title}>Cuenta Bancaria</h1>
      <AccountFormComponent onUpdate={handleAccount} />
      </div>
    </AppLayout>
  );
};
