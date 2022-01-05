import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../axios/agent";
import { LoginDto } from "../Dtos/LoginDto";
import { AppUser } from "../models/appUser";

export default class UserStore{
    isRegistering: boolean = false;
    currentUser: AppUser | undefined = undefined;
    token: string | null = window.localStorage.getItem('token'); 

    constructor(){
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if(token){
                    window.localStorage.setItem("token", token);
                }else{
                    window.localStorage.removeItem('token');
                }
                
            }
        )
    }

    setIsRegistering = (state: boolean) => {
        runInAction(() => {
            this.isRegistering = state;
        })
    }

    setToken = (token: string) => {
        runInAction(() => {
            this.token = token;
        })
    }

    getTokenFromLocalStorage = () => {
        let token: string | null = localStorage.getItem("token");
        if(!token) return;
        runInAction(() => {
            this.token = token;
        })
    }

    login = async (creds: LoginDto) => {
        await agent.Account.login(creds).then((res: AppUser) => {
            runInAction(() => {
                this.currentUser = res;
                this.token = res.token;
            })
        }).catch((error) => {throw error})

        console.log("Current user is: ", this.currentUser);
    }

    getUser = async () => {
        await agent.Account.current().then((res) => {
            runInAction(() => {
                this.currentUser = res;
            })
        }).catch((e) => {
            throw e;
        })
        
    }
}