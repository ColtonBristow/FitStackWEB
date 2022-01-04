import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { StylesContext } from '@material-ui/styles';
import React from 'react';
import { Colors } from '../../constants/Colors';



    const CssTextField = withStyles({
        root: {
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

    const useStyles = makeStyles(() => ({
        container: {
            marginTop: 0,
            marginBottom: 15,
        },
        textInput: {
            marginBottom: ".3em",
            width: 300,
            color: 'black',
        },
    }));

export default function FitStackTextInput (props: any)  {

    const classes = useStyles();
    return(
        <div className={classes.container}>
            <CssTextField
                  className={classes.textInput}
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
        </div>
    )
}