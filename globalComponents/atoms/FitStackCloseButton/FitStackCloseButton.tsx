import { Button, createStyles} from '@mui/material';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import s from './FitStackCloseButton.module.css';
import styled from '@material-ui/styles/styled';
import { maxWidth } from '@mui/system';


export default function FitStackCloseButton (props: any) {
    const styles = makeUseStyles();
    const ColorButton = withStyles(() => 
        createStyles({
            root: {
                maxWidth: '1em',
                width: '1em',
                "&:hover": {
                    backgroundColor: Colors.mainBackgroundColor,
                },
            },
        })
)(Button);

    return(
        <div>
            {/* <Button className={s.colorButton} onClick={props.onClick}>
                <CloseIcon className={s.text} />
            </Button> */}
            <ColorButton>
                <CloseIcon className={styles.text} />
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
