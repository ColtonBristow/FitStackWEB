import { Formik, yupToFormErrors } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { createUseStyles } from 'react-jss';
import FitStackButton from '../../../components/atoms/FitStackButton';
import FitStackCloseButton from '../../../components/atoms/FitStackCloseButton';
import FitStackTextInput from '../../../components/atoms/FitStackTextInput';
import GraphicDesignApplicationForm from '../../../components/organisms/GraphicDesignApplicationForm';
import NavBar from '../../../components/organisms/NavBar';
import { Colors } from '../../../constants/Colors';
import { useStore } from '../../../stores/store';


const GraphicDesign: NextPage = (props: any) => {
    const {userStore} = useStore();
    const styles = useStyles();


    return(
        <div className={styles.pageContainer}>
            <NavBar/>
            <div className={styles.formContainer}>
                <div className={styles.headerContainer} >
                    <img src="/AppLogo.svg" className={styles.logo}/>
                    <div className={styles.headerText} >Available Positions</div>
                </div>
                {/* <div className={styles.positionContainer}>
                  <div className={styles.positionText} >
                    - Graphic Design Position
                  </div>
                  <div>
                    <Link href={"/careers/graphic-design"} >
                      <FitStackButton title="Open" />
                    </Link>
                    
                  </div>
                </div> */}
                <GraphicDesignApplicationForm/> 
            </div>
        </div>
    )
}

export default GraphicDesign

const useStyles = createUseStyles({
    pageContainer: {
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: Colors.mainBackgroundColor,
        maxWidth: 700,
        minWidth: 700,
        minHeight: '80%',
        maxHeight: "85%",
        borderRadius: 20,
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center",
    },
      logo: {
        height: 100,
        width: 100,
        marginRight: '8%',
      },
      headerText: {
        fontSize: "2em",
        fontWeight: "bold",
        color: Colors.mainButtonColor
      },
      headerContainer: {
        marginTop: '2em',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "15%",
        alignItems: "center",
        width: "80%",
        marginBottom: 60,
      },
      logoTextContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        marginLeft: "3em",
      },
      iconContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%",
        marginRight: "2em",
      },
      bodyContainer: {
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "5%",
      },
      linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer'
      },
      h5: {
        marginLeft: '1em',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '100%',
        color: Colors.mainButtonColor,
      },
      positionContainer: {
        width: "70%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      positionText: {
        color: Colors.mainButtonColor,
        fontSize: 20,
        fontWeight: "bold",
      }
})
