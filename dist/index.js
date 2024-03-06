import { InitNamada } from "./actions/index";
export const checkExtension = () => {
    if (window === null || window === void 0 ? void 0 : window.namada) {
        return true;
    }
};
export default InitNamada;
//# sourceMappingURL=index.js.map