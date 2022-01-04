import { makeAutoObservable, runInAction } from "mobx";
import agent from "../axios/agent";
import { LoginDto } from "../Dtos/LoginDto";
import { AppUser } from "../models/appUser";

export default class UserStore{
    isRegistering: boolean = false;
    currentUser: AppUser | undefined = undefined; 

    constructor(){
        makeAutoObservable(this);
    }

    setIsRegistering = (state: boolean) => {
        runInAction(() => {
            this.isRegistering = state;
        })
    }

    login = async (creds: LoginDto) => {
        await agent.Account.login(creds).then((res: AppUser) => {
            runInAction(() => {
                this.currentUser = res;
            })
        }).catch((error) => {throw error})

        console.log("Current user is: ", this.currentUser);
    }
}