import { Button } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import s from './FitStackStoreButton.module.css'
import { PlayCircleFilledRounded, ShopRounded, Person, Apple } from '@mui/icons-material';

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
    return(
        <div className={s.container} > 
            
            <ColorButton
                onClick={props.onClick}
                type={props.type}
                variant="contained"
                className={s.margin}
            >
                {props.apple && 
                <Apple className={s.storeIcons} />
                }
                {props.google &&
                <ShopRounded className={s.storeIcons} />
                }
                {props.demo && 
                <PlayCircleFilledRounded className={s.demoIcon} />
                }
                {props.signIn &&
                <Person className={s.personIcon} />
                }
                {props.title}
            </ColorButton>

{/*            <Button
                onClick={props.onClick}
                type={props.type}
                variant="contained"
                className={s.colorButton}
            >
                 {props.apple && 
                <AppleIcon className={s.storeIcons} />
                }
                {props.google &&
                <ShopRounded className={s.storeIcons} />
                }
                {props.demo && 
                <PlayCircleFilledRounded className={s.demoIcon} />
                }
                {props.signIn &&
                <PersonIcon className={s.personIcon} />
                } 
                {props.title}
            </Button>  */}
        </div>
    )
}

export default FitStackStoreButton;
