import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import React from "react";
import { useStore } from "../../stores/store";
import { Modal } from "@mui/material";
import HomePageHeader from "./components/organisms/HomePageHeader/HomePageHeader";
import HomePageBody from "./components/organisms/HomePageBody/HomePageBody";
import NavBar from "../../globalComponents/organisms/NavBar/NavBar";
import SignInCard from "../../globalComponents/organisms/SignInCard/SignInCard";
import RegisterCard from "../../globalComponents/organisms/RegisterCard/RegisterCard";
import s from './HomePage.module.css'

const Home: NextPage = observer((props: any) => {
  const {modalStore, userStore} = useStore();
  return (
    <div className={s.homePageContainer}>
      <Modal
        open={modalStore.signRegisterModalIsOpen}
        onClose={() => modalStore.setSignInRegisterModalIsOpen(false)}
        onBackdropClick={() => modalStore.setSignInRegisterModalIsOpen(false)}
      >
        {userStore.isRegistering ? <RegisterCard/>  : <SignInCard/>}
      </Modal>
      <NavBar />
      <HomePageHeader />
      <HomePageBody />
    </div>
  );
})

export default Home

