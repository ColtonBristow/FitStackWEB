import React, { useState } from "react";
import { createUseStyles } from "react-jss";
//import { ReactComponent as Logo } from "../../images/AppLogo.svg";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { Divider } from "@mui/material";
import * as yup from "yup";
import { observer } from "mobx-react-lite";
import s from './RegisterCard.module.css'
import { useStore } from "../../../stores/store";
import FitStackCloseButton from "../../atoms/FitStackCloseButton/FitStackCloseButton";
import FitStackTextInput from "../../atoms/FitStackTextInput/FitStackTextInput";
import FitStackButton from "../../atoms/FitStackButton/FitStackButton";

const RegisterCard: React.FC = (props: any) => {
  const { modalStore, userStore } = useStore();
  const [page, setPage] = useState(1);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required for sign in."),
    password: yup.string().required("Password is required for sign in."),
    confirmPassword: yup.string().required("Confirm Password is required for sign in."),
  });
  return (
    <div className={s.cardContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <div className={s.logoTextContainer}>
            {/* <Logo fill={Colors.mainButtonColor} className={styles.logo} /> */}
          </div>
          <div
            className={s.iconContainer}
            onClick={() => modalStore.setSignInRegisterModalIsOpen(false)}
          >
            <FitStackCloseButton />
          </div>
        </div>
        <div className={s.bodyContainer}>
          <h2>Register</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              
              resetForm();
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => {
              return (
                <>
                  <div className={s.bodyContainer}>
                    
                    <FitStackTextInput
                        //label='Password'
                        label='Email'
                        id="email"
                        value={values.email}
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        helperText={
                          errors.email && touched.email
                            ? errors.email
                            : "Enter email address"
                        }
                        error={
                          errors.email && touched.email ? true : false
                        }
                        onBlur={handleBlur}
                      />
                      <FitStackTextInput
                        //label='Password'
                        label='Password'
                        id="password"
                        value={values.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : "Enter password"
                        }
                        error={
                          errors.password && touched.password ? true : false
                        }
                        onBlur={handleBlur}
                      />
                      <FitStackTextInput
                        //label='Password'
                        label='Confirm Password'
                        id="confirmPassword"
                        value={values.password}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        helperText={
                          errors.confirmPassword && touched.confirmPassword
                            ? errors.password
                            : "Confirm password"
                        }
                        error={
                          errors.confirmPassword && touched.confirmPassword ? true : false
                        }
                        onBlur={handleBlur}
                      />
                      <FitStackButton
                        title="Register"
                        onClick={() => handleSubmit()}
                      />
                    
                  </div>
                </>
              );
            }}
          </Formik>
          <div className={s.linkContainer} onClick={() => userStore.setIsRegistering(false)}>
              <h4>Already have an account? </h4>
              <h5 onClick={() => userStore.setIsRegistering(false)} className={s.h5} >Click Here</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(RegisterCard);

