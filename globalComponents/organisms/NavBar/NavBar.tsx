import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo from '../../../images/AppLogo.svg'
import Link from 'next/link';
import FitStackStoreButton from '../../atoms/FitStackStoreButton/FitStackStoreButton';
import s from './NavBar.module.css'

const NavBar = (props: any) => {
    return(
        <div className={s.navContainer} > 
            <div className={s.itemsContainer} >
                <div className={s.logoAndNavItems} >
                    <img src={"/AppLogo.svg"} alt="FitStack" className={s.logo} />
                    <Link href={"/home"}>
                        <div className={s.navItems} >Home</div>
                    </Link>
                    <div className={s.navItems} >Features</div>
                    <div className={s.navItems} >About</div> 
                    <Link href="/careers">
                        <div className={s.navItems} >Careers</div> 
                    </Link>
                     
                </div>
                <div className={s.storeLinks} >
                    <div className={s.navItems} >Available In</div>
                    <FitStackStoreButton apple={true} title="Apple Store" /> 
                    <FitStackStoreButton google={true} title="Google Play" /> 
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;
