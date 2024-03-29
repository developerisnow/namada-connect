var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { submitTransferTransaction } from "./transfer";
import BigNumber from "bignumber.js";
import { submitBond } from "./bond";
import { submitUnBond } from "./unbond";
import { submitVoteProposal } from "./vote-proposal";
export class InitNamada {
    constructor(nativeToken) {
        this.transfer = (to_1, amount_1, ...args_1) => __awaiter(this, [to_1, amount_1, ...args_1], void 0, function* (to, amount, memo = '', chainId, account) {
            yield submitTransferTransaction({
                target: to,
                amount: BigNumber(amount),
                token: "NAM",
                feeAmount: new BigNumber(10),
                gasLimit: new BigNumber(100),
                disposableSigningKey: false,
                memo: memo,
                nativeToken: this.nativeToken,
                account: account || (yield this.getDefaultAccount()),
                chainId: chainId || (yield this.getChainId())
            });
        });
        this.bond = (validator_1, amount_2, ...args_2) => __awaiter(this, [validator_1, amount_2, ...args_2], void 0, function* (validator, amount, memo = '', chainId, account) {
            yield submitBond({
                validator,
                amount: BigNumber(amount),
                feeAmount: new BigNumber(10),
                gasLimit: new BigNumber(100),
                disposableSigningKey: false,
                memo: memo,
                nativeToken: this.nativeToken,
                account: account || (yield this.getDefaultAccount()),
                chainId: chainId || (yield this.getChainId())
            });
        });
        this.unBond = (validator_2, amount_3, ...args_3) => __awaiter(this, [validator_2, amount_3, ...args_3], void 0, function* (validator, amount, memo = '', chainId, account) {
            yield submitUnBond({
                validator,
                amount: BigNumber(amount),
                feeAmount: new BigNumber(10),
                gasLimit: new BigNumber(100),
                disposableSigningKey: false,
                memo: memo,
                nativeToken: this.nativeToken,
                account: account || (yield this.getDefaultAccount()),
                chainId: chainId || (yield this.getChainId())
            });
        });
        this.voteProposal = (proposalId_1, vote_1, ...args_4) => __awaiter(this, [proposalId_1, vote_1, ...args_4], void 0, function* (proposalId, vote, memo = '', chainId, account) {
            yield submitVoteProposal({
                feeAmount: new BigNumber(10),
                gasLimit: new BigNumber(100),
                disposableSigningKey: false,
                memo: memo,
                nativeToken: this.nativeToken,
                account: account || (yield this.getDefaultAccount()),
                chainId: chainId || (yield this.getChainId()),
                vote,
                proposalId
            });
        });
        this.getAccounts = () => __awaiter(this, void 0, void 0, function* () {
            return yield window.namada.accounts();
        });
        this.getSigner = () => __awaiter(this, void 0, void 0, function* () {
            return yield window.namada.getSigner();
        });
        this.getChainId = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = (yield window.namada.getChain())) === null || _a === void 0 ? void 0 : _a.chainId;
        });
        this.getDefaultAccount = () => __awaiter(this, void 0, void 0, function* () {
            return yield window.namada.defaultAccount();
        });
        this.login = () => __awaiter(this, void 0, void 0, function* () {
            yield window.namada.connect();
            return this.getAccounts();
        });
        this.nativeToken = nativeToken;
    }
}
//# sourceMappingURL=index.js.map