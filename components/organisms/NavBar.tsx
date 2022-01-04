import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Colors } from '../../constants/Colors';
import FitStackStoreButton from '../atoms/FitStackStoreButton';
import Logo from '../../../images/AppLogo.svg'
import Link from 'next/link';

const NavBar = (props: any) => {
    const styles = htmlStyles();
    return(
        <div className={styles.navContainer} > 
            <div className={styles.itemsContainer} >
                <div className={styles.logoAndNavItems} >
                    <img src={"/AppLogo.svg"} alt="FitStack" className={styles.logo} />
                    <Link href={"/home"}>
                        <div className={styles.navItems} >Home</div>
                    </Link>
                    <div className={styles.navItems} >Features</div>
                    <div className={styles.navItems} >About</div> 
                    <Link href="/careers">
                        <div className={styles.navItems} >Careers</div> 
                    </Link>
                     
                </div>
                <div className={styles.storeLinks} >
                    <div className={styles.navItems} >Available In</div>
                    <FitStackStoreButton apple={true} title="Apple Store" /> 
                    <FitStackStoreButton google={true} title="Google Play" /> 
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;

const htmlStyles = createUseStyles({
    fitStackName:{
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '3.5vh',
        marginLeft: '5%',
        marginRight: '5%'
    },
    navItems: {
        fontWeight: 'bold',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: '1.75vh',
        whiteSpace: 'nowrap',
        color: 'white',
        cursor: "pointer"
    },
    logo: {
        height: '50%',
        marginLeft: '5%',
        marginRight: '5%', 
        color: Colors.mainButtonColor,
    },
    navContainer: { 
        display: 'flex',
        width: '100%',
        height: '10vh',
    },
    itemsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoAndNavItems: {
        width: '100%', 
        flex: 1,
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    storeLinks: { 
        justifyContent: 'space-around',
        height: '100%',
        width: '25%',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '1%',
    }
})