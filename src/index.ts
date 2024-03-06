import { InitNamada } from "./actions/index";
export const checkExtension = () => {
    if(window?.namada) {
        return true
    }
}
export default InitNamada