import { makeAutoObservable, runInAction } from "mobx";

export default class ModalStore{
    signRegisterModalIsOpen: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    setSignInRegisterModalIsOpen = (state: boolean) => {
        runInAction(() => {
            this.signRegisterModalIsOpen = state;
        })
        console.log("SignInRegisterModalState is: ", this.signRegisterModalIsOpen);
    }
}