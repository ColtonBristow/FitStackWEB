import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import withStyles, { createUseStyles } from 'react-jss';
import {PlayCircleFilledRounded, ShopRounded } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import AppleIcon from '@material-ui/icons/Apple'
import { Colors } from '../../constants/Colors';

const ColorButton = withStyles((theme: any) => ({
    root: {
        "&.MuiButton-root": {
            color: 'white',
            backgroundColor: Colors.mainButtonColor,
            minWidth: 180,
            maxWidth: 180,
            height: 42,
            borderRadius: 10,
            marginRight: 8,
            "&:hover": {
                backgroundColor: Colors.mainButtonColor,
            },
        },
        
    },
}))(Button);

const FitStackStoreButton = (props: any) => {
    const styles = makeUseStyles();
    const altStyles = makeAltStyles();
    return(
        <div className={altStyles.container} > 
            
            <ColorButton
                onClick={props.onClick}
                type={props.type}
                variant="contained"
                className={styles.margin}
            >
                {props.apple && 
                <AppleIcon className={styles.storeIcons} />
                }
                {props.google &&
                <ShopRounded className={styles.storeIcons} />
                }
                {props.demo && 
                <PlayCircleFilledRounded className={styles.demoIcon} />
                }
                {props.signIn &&
                <PersonIcon className={styles.personIcon} />
                }
                {props.title}
            </ColorButton>
        </div>
    )
}

export default FitStackStoreButton;
const makeUseStyles = makeStyles({
    margin: {
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: "center",
    },
    storeIcons: {
        marginRight: '4%',
        paddingBottom: '3%'
    },
    demoIcon: {
        marginRight: '4%',
    },
    personIcon: {
        marginRight: '4%',
    }
});

const makeAltStyles = createUseStyles({
    container:{
        display: 'flex',
        flexDirection: 'row',
    }
})