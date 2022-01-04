import { url } from "inspector";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import React, {useState} from "react";
import { createUseStyles } from "react-jss";
import { useStore } from "../../stores/store";
import HomePageBody from "../../components/organisms/HomePageBody";
import HomePageHeader from "../../components/organisms/HomePageHeader";
import NavBar from "../../components/organisms/NavBar";
import RegisterCard from "../../components/organisms/RegisterCard";
import SignInCard from "../../components/organisms/SignInCard";
import { Modal } from "@mui/material";


const Home: NextPage = observer((props: any) => {
  const {modalStore, userStore} = useStore();
  const styles = createStyles();
  return (
    <div className={styles.homePageContainer}>
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

const createStyles = createUseStyles({
  homePageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
