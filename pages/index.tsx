import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { createUseStyles } from 'react-jss'
import styles from '../styles/Home.module.css'
import HomePageBody from '../components/organisms/HomePageBody'
import HomePageHeader from '../components/organisms/HomePageHeader'
import NavBar from '../components/organisms/NavBar'
import Modal from 'react-modal'

Modal.setAppElement("#__next");

const Home: NextPage = () => {
  return (
    <div className={styles.homePageContainer}>
    {/*       <Modal
            open={modalStore.signRegisterModalIsOpen}
            onClose={() => modalStore.setSignInRegisterModalIsOpen(false)}
            onBackdropClick={() => modalStore.setSignInRegisterModalIsOpen(false)}
          >
            {userStore.isRegistering ? <RegisterCard/>  : <SignInCard/>}
          </Modal> */}
{/*           <NavBar />
          <HomePageHeader />
          <HomePageBody /> */}
        </div>
  )
}

export default Home

const createStyles = createUseStyles({
  homePageContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundImage: ''
  },
});
