import { DeleteForeverRounded } from '@material-ui/icons';
import { Button } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import React from 'react';
import s from './FitStackDeleteButton.module.css'

const ColorButton = withStyles((theme: any) => ({
    root: {
        "&.MuiButton-root": {
            color: 'red',
            width: 75,
            height: 42,
            borderRadius: 10,
            borderColor: 'red',
            "&:hover": {
                borderColor: 'red',
            },
        },
        
    },
}))(Button);

export default function FitStackDeletButton(props: any) {
    return(
        <div className={s.container} > 
            
            <ColorButton
                onClick={props.onClick}
                type={props.type}
                variant="outlined"
                className={s.margin}
            >
                <DeleteForeverRounded />
            </ColorButton>
        </div>
    )
}
