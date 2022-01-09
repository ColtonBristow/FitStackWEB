import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import React from 'react';
import { Colors } from '../../../constants/Colors';
import s from './FitStackTextInput.module.scss'



    const CssTextField = withStyles({
        root: {
            minWidth: 300,
            "& label.Mui-focused": {
                color: Colors.mainButtonColor,
                "&:hover fieldset": {
                    borderColor: Colors.mainBackgroundColor,
                },
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: Colors.mainButtonColor,
                color: Colors.mainButtonColor,
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: Colors.mainButtonColor,
                    color: Colors.mainButtonColor,
                },
                "&:hover fieldset": {
                    borderColor: Colors.mainBackgroundColor,
                    color: Colors.mainButtonColor,
                },
                "&.Mui-focused fieldset": {
                    borderColor: Colors.mainButtonColor,
                    color: Colors.mainButtonColor,
                },
            },
            "&. MuiStandardInput-input":{
                color: 'black',
                "&:hover fieldset": {
                    borderColor: Colors.mainBackgroundColor,
                    color: Colors.mainButtonColor,
                },
            }
            
        },
    })(TextField);

export default function FitStackTextInput (props: any)  {
    return(
        <div className={s.container}>
            <CssTextField
                  className={s.textInput}
                  label={props.label}
                  placeholder={props.label}
                  variant="standard"
                  type={props.type}
                  value={props.value}
                  name={props.name}
                  onChange={props.onChange}
                  InputLabelProps={props.InputLabelProps}
                  SelectProps={props.SelectProps}
                  InputProps={props.InputProps}
                  helperText={props.helperText}
                  error={props.error}
            />
{/* 
            <TextField
                className={s.cssTextField}
                label={props.label}
                placeholder={props.label}
                variant="standard"
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                InputLabelProps={props.InputLabelProps}
                SelectProps={props.SelectProps}
                InputProps={props.InputProps}
                helperText={props.helperText}
                error={props.error}
            /> */}
        </div>
    )
}