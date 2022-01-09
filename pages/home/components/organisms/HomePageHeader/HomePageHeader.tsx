import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import { Agent } from 'http';
import React from 'react';
import { createUseStyles } from 'react-jss';
import FitStackStoreButton from '../../../../../globalComponents/atoms/FitStackStoreButton/FitStackStoreButton';
import { useStore } from '../../../../../stores/store';
import s from './HomePageHeader.module.css'


const HomePageHeader = (props: any) => {
    const {modalStore} = useStore();
    return(
        <div className={s.pageContainer} >
            <div className={s.headerContainer} >
                <div className={s.h1} >Meet trainings. Take challenges</div>
                <h5 className={s.h5} >We offer fresh fitness tutorials, workouts, and exercises that will help you on your road to healthy living, weight loss, and stress relief</h5>
                <div className={s.buttonContainer} >
                    <FitStackStoreButton signIn={true} title="Sign In" onClick={() => modalStore.setSignInRegisterModalIsOpen(true)}/>
                    <FitStackStoreButton demo={true} title="Demo" onClick={() => {
                        console.log('demo');
                    }} />  
                </div>
            </div>
        </div>
    )
}

export default HomePageHeader;

