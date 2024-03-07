import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, MovementVm, accountEmpty } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { useParams } from "react-router-dom";
import { getAccount, getMovements } from "./api";
import { mapAccountFromApiToVm, mapMovementListFromApiToVm } from "./movement-list.mapper";


export const MovementListPage: React.FC = () => {

const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

const [account, setAccount] = React.useState<AccountVm>(accountEmpty());

const { id: accountId } = useParams<{ id: string }>();

React.useEffect(() => {
  if (accountId) {
    Promise.all([getAccount(accountId), getMovements(accountId)])
      .then(([accountResult, movementsResult]) => {
        setAccount(mapAccountFromApiToVm(accountResult));
        setMovementList(mapMovementListFromApiToVm(movementsResult));
      })
  }
}, [accountId]);
  
  return (
    <AppLayout>
      <div className={classes.root}>
      <React.Fragment>
            <div className={classes.headerContainer}>
              <h1>Saldos y Últimos movimientos</h1>
              <div className={classes.availableBalance}>
              <p className={classes.balanceLabel}>SALDO DISPONIBLE</p>
            <p className={classes.balance}>{account.balance} €</p>
            </div>  
            </div>
            <div className={classes.headerBottom}>
              <span>Alias: {account.name}</span>
              <span>IBAN: {account.iban}</span>
            </div>
          </React.Fragment>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};