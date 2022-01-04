import { createContext, useContext } from "react"
import ApplicationStore from "./applicationStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

interface Store{
    modalStore: ModalStore;
    userStore: UserStore;
    applicationStore: ApplicationStore;
}
export const store: Store = {
    modalStore: new ModalStore(),
    userStore: new UserStore(),
    applicationStore: new ApplicationStore(),
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}