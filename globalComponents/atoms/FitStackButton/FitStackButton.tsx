import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import s from './FitStackButton.module.css';

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
    return(
        <div className={s.container} >          
            <ColorButton
                disabled={props.disabled}
                onClick={props.onClick}
                type={props.type}
                variant="contained"
                className={s.margin}
            >
                {props.title}
            </ColorButton>

{/*             <Button 
                disabled={props.disabled}
                onClick={props.onClick}
                type={props.type}
                variant="contained"
                className={s.colorButton}
            >
                {props.title}
            </Button> */}
        </div>
    )
}

