import { Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from "yup";
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import { CompassCalibrationOutlined, ContactsOutlined, ErrorSharp } from '@material-ui/icons';
import { useStore } from '../../../stores/store';
import FitStackTextInput from '../../../globalComponents/atoms/FitStackTextInput/FitStackTextInput';
import FitStackFileDropzone from '../../../globalComponents/atoms/FitStackFileDropzone/FitStackFileDropzone';
import FitStackButton from '../../../globalComponents/atoms/FitStackButton/FitStackButton';
import s from './GraphicDesignApplicationForm.module.css'

const GraphicDesignApplicationForm = (props:any ) => {
    const {applicationStore} = useStore();
    const [page, setPage] = useState(1);
    const [isResumeValid, setIsResumeValid] = useState(true);

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("Please enter your first name to continue"),
        lastName: yup.string().required("Please enter your last name to continue"),
        email: yup.string().email("Valid email address is required").required("Please enter your email address to continue"),
        phone: yup.string().required("Please enter your first name to continue"),
      });
    return(
        <div className={s.pageContainer} >
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
                  <div className={s.bodyContainer}>
                    {page === 1 && 
                      <div className={s.pageOneContainer} >
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
                    <div className={s.secondPageContainer} >
                      <div className={s.dropzoneLabel} >Resume (.pdf, .docx, .doc):</div>
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
                        <label className={s.errorLabels} >^Please upload a copy of your resume to continue^</label>
                        : <div></div>
                      }
                      <div className={s.dropzoneLabel} >Examples: (.jpeg, .png, .jpg)</div>
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
                      <div className={s.twoButtonContainer} >
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

