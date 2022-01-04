import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material'
import React from 'react'
import { Colors } from '../../constants/Colors';


export default function FitStackTextButton (props: any) {
    const styles = useStyles();
    return (
        <div>
            <Button
                className={styles.button}
                variant='text'
                onClick={props.onClick}
                type={props.type}
            >
                {props.title}
            </Button>
        </div>
        
    )
}

const useStyles = makeStyles(() => ({
    button: {
        fontWeight: 'bold',
        color: Colors.mainButtonColor
    }
}));