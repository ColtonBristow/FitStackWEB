import { Button} from '@mui/material';
import { makeStyles, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Colors } from '../../constants/Colors';


export default function FitStackCloseButton (props: any) {
    const materialStyles = makeUseStyles();

    const ColorButton = withStyles(() => ({
    root: {
        maxWidth: '1em',
        width: '1em',
        "&:hover": {
            backgroundColor: Colors.mainBackgroundColor,
        },
    },
}))(Button);
    return(
        <div>
            <ColorButton onClick={props.onClick}>
                <CloseIcon className={materialStyles.text} />
            </ColorButton>
        </div>
    )

}

const makeUseStyles = makeStyles({

    text: {
        color: Colors.mainButtonColor,
        fontSize: '3em',
    }
})