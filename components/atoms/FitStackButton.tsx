import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import withStyles, { createUseStyles } from 'react-jss';
import { Colors } from '../../constants/Colors';

const ColorButton = withStyles((theme: any) => ({
    root: {
        "&.MuiButton-root": {
            color: 'white',
            backgroundColor: Colors.mainButtonColor,
            width: 150,
            height: 42,
            borderRadius: 10,
            "&:hover": {
                backgroundColor: Colors.mainButtonColor,
            },
        },
        
    },
}))(Button);

export default function FitStackButton(props: any) {
    const styles = makeUseStyles();
    const altStyles = makeAltStyles();
    return(
        <div className={altStyles.container} > 
            
            <ColorButton
                disabled={props.disabled}
                onClick={props.onClick}
                type={props.type}
                variant="contained"
                className={styles.margin}
            >
                {props.title}
            </ColorButton>
        </div>
    )
}
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