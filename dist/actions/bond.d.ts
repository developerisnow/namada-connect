import { DerivedAccount } from "../types";
import BigNumber from "bignumber.js";
export type TxBondArgs = TxArgs;
type TxArgs = {
    chainId: string;
    account: DerivedAccount;
    amount: BigNumber;
    nativeToken: string;
    validator: string;
    memo?: string;
    feeAmount?: BigNumber;
    gasLimit?: BigNumber;
    disposableSigningKey?: boolean;
};
export declare const submitBond: (txTransferArgs: TxBondArgs) => Promise<void>;
export {};
