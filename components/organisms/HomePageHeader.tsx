import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import { Agent } from 'http';
import React from 'react';
import { createUseStyles } from 'react-jss';
import agent from '../../axios/agent';
import { Post } from '../../models/post';
import { useStore } from '../../stores/store';
import FitStackStoreButton from '../atoms/FitStackStoreButton';



const HomePageHeader = (props: any) => {
    const {modalStore} = useStore();

    const asdfasdstyles = makeUseStyles();
    const styles = createStyles();
    return(
        <div className={styles.pageContainer} >
            <div className={styles.headerContainer} >
                <div className={styles.h1} >Meet trainings. Take challenges</div>
                <h5 className={styles.h5} >We offer fresh fitness tutorials, workouts, and exercises that will help you on your road to healthy living, weight loss, and stress relief</h5>
                <div className={styles.buttonContainer} >
                    <FitStackStoreButton signIn={true} title="Sign In" onClick={() => modalStore.setSignInRegisterModalIsOpen(true)}/>
                    <FitStackStoreButton demo={true} title="Demo" onClick={() => {
                        agent.test.list("61b825f053eccfa84a09bd7f").then((res) => {
                            let post: Post = Object.assign({}, res.data.getPost);
                            console.log("Post is: ", post);
                        })
                    }} />  
                </div>
            </div>
        </div>
    )
}

export default HomePageHeader;

const makeUseStyles = makeStyles({
    
})

const createStyles = createUseStyles({
    h1: {
        fontSize: '325%',
        fontWeight: 'bolder',
        color: 'white',
    },
    h5: {
        width: '28%',
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '100%',
        color: 'white',
    },
    pageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '30vh',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerContainer: { 

        marginTop: '3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-around',
    }

})