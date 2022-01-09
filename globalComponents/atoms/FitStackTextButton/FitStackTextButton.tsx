import { Button } from '@mui/material'
import React from 'react'
import s from './FitStackTextButton.module.css'

export default function FitStackTextButton (props: any) {
    return (
        <div>
            <Button
                className={s.button}
                variant='text'
                onClick={props.onClick}
                type={props.type}
            >
                {props.title}
            </Button>
        </div>
        
    )
}

