import { Formik } from 'formik';
import React, { useState } from 'react';
import FitStackTextInput from '../atoms/FitStackTextInput';
import * as yup from "yup";
import { Colors } from '../../constants/Colors';
import { createUseStyles } from 'react-jss';
import FitStackButton from '../atoms/FitStackButton';
import FileDropzone from '../atoms/FileDropzone';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import FitStackFileDropzone from '../atoms/FitStackFileDropzone';
import { CompassCalibrationOutlined, ContactsOutlined, ErrorSharp } from '@material-ui/icons';

const GraphicDesignApplicationForm = (props:any ) => {
    const {applicationStore} = useStore();
    const [page, setPage] = useState(1);
    const [isResumeValid, setIsResumeValid] = useState(true);

    const styles = useStyles();

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("Please enter your first name to continue"),
        lastName: yup.string().required("Please enter your last name to continue"),
        email: yup.string().email("Valid email address is required").required("Please enter your email address to continue"),
        phone: yup.string().required("Please enter your first name to continue"),
      });
    return(
        <div className={styles.pageContainer} >
             <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              resume: undefined,
              examples: undefined,
            }}
            onSubmit={(values, { resetForm }) => {
              if(values.resume === undefined) return;
              console.log("submit run");
              console.log(values);
              resetForm();
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue
            }) => {
              return (
                <>
                  <div className={styles.bodyContainer}>
                    {page === 1 && 
                      <div className={styles.pageOneContainer} >
                          <FitStackTextInput
                          //label='Password'
                          label='First Name'
                          id="firstName"
                          value={values.firstName}
                          name="firstName"
                          placeholder="First Name"
                          onChange={handleChange}
                          helperText={
                            errors.firstName && touched.firstName
                              ? errors.firstName
                              : "Enter your first name"
                          }
                          error={
                            errors.firstName && touched.firstName ? true : false
                          }
                          onBlur={handleBlur}
                        />
                        <FitStackTextInput
                          //label='Password'
                          label='Last Name'
                          id="lastName"
                          value={values.lastName}
                          name="lastName"
                          placeholder="Last Name"
                          onChange={handleChange}
                          helperText={
                            errors.lastName && touched.lastName
                              ? errors.lastName
                              : "Enter your last name"
                          }
                          error={
                            errors.lastName && touched.lastName ? true : false
                          }
                          onBlur={handleBlur}
                        />
                        <FitStackTextInput
                          //label='Password'
                          label='Email Address'
                          id="email"
                          value={values.email}
                          name="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          helperText={
                            errors.email && touched.email
                              ? errors.email
                              : "Enter your email address"
                          }
                          error={
                            errors.email && touched.email ? true : false
                          }
                          onBlur={handleBlur}
                        />
                        <FitStackTextInput
                          //label='Password'
                          label='Phone Number'
                          id="phone"
                          value={values.phone}
                          name="phone"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          helperText={
                            errors.phone && touched.phone
                              ? errors.phone
                              : "Enter your phone number"
                          }
                          error={
                            errors.phone && touched.phone ? true : false
                          }
                          onBlur={handleBlur}
                        />
                      </div>
                    }
                    <div className={styles.secondPageContainer} >
                      <div className={styles.dropzoneLabel} >Resume (.pdf, .docx, .doc):</div>
                      <FitStackFileDropzone
                        multiple={false}
                        maxFiles={1}
                        onDrop={(files: File[]) => {
                          if(files === [] || files === undefined){
                            console.log("passed files were empty");
                            setFieldValue('resume', undefined);
                            setIsResumeValid(false);
                          }else{
                            setFieldValue("resume", files[0]);
                            setIsResumeValid(true);
                          }
                          
                        }}
                      />
                      {(!isResumeValid) ?
                        <label className={styles.errorLabels} >^Please upload a copy of your resume to continue^</label>
                        : <div></div>
                      }
                      <div className={styles.dropzoneLabel} >Examples: (.jpeg, .png, .jpg)</div>
                      <FitStackFileDropzone
                        multiple={true}
                        maxFiles={4}
                        onDrop={(files: File[]) => {
                          console.log("Emample files are: ", files);
                          if(files === []){
                            setFieldValue('examples', undefined);
                          }else{
                            setFieldValue("examples", files);
                          }
                        }}
                      />
                      <div className={styles.twoButtonContainer} >
                          <FitStackButton
                              title="Submit"
                              onClick={() => {
                                if(values.resume === undefined){
                                  setIsResumeValid(false);
                                }
                                handleSubmit();
                                if(errors.firstName || errors.lastName || errors.email || errors.phone){
                                  setPage(1);
                                }
                              }}
                          />
                        </div>
                    </div>
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
    )
}

export default observer(GraphicDesignApplicationForm);

const useStyles = createUseStyles({

    secondPageContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    pageContainer: {
        width: "100%",
        display: "flex",
        maxHeight: '80%',
        flexDirection: "column",
        alignItems: 'center', 
        overflow: 'scroll',
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
        marginTop: '1em',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "15%",
        alignItems: "center",
        width: "80%",
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
    dropzoneLabel: {
      fontWeight: 'bold',
      marginTop: '5%',
    },
    twoButtonContainer: {
      display: "flex",
      flexDirection: 'row',
      width: '70%',
      justifyContent: 'center',
      marginBottom: '10%',
      marginTop: '5%'
    },
    pageOneContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    singleButtonConatiner: {
      marginTop: 15,
    },
    errorLabels: {
      color: "red",
      fontWeight: 'bold',
    },
})