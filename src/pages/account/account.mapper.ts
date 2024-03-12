
import { Account as ApiAccount } from "./api/account.api-model";
import { Account as VmAccount } from "./account.vm";

export const mapAccountApiToVm = (account: ApiAccount): VmAccount => {
    return {
        type: account.type,
        name: account.name,
    };
};

export const mapAccountVmToApi = (account: VmAccount): ApiAccount => {
    return {
        id: "", 
        iban: "", 
        type: account.type,
        name: account.name,
        balance: 0,
        lastTransaction: "", 
    };
};
