import { NextPage } from 'next';
import React from 'react';
import { createUseStyles } from 'react-jss';

const ContactPage: NextPage = (props: any) => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            Contact Us Page!!!
        </div>
    )
}

export default ContactPage

const useStyles = createUseStyles({
    container: {
        height: '100%',
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    }
})