
export interface MovementVm {
        id: string;
        description: string;
        amount: string;
        balance: string;
        transaction: Date;
        realTransaction: Date;
        accountId: string;
}

export interface AccountVm {
        id: string;
        iban: string;
        name: string;
      balance: string;
      lastTransaction: Date;
    }

export const accountEmpty = () : AccountVm => ({
        id: "",
        iban: "",
        name: "",
      balance: "",
      lastTransaction: new Date,
    });