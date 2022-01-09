import React, { useState } from "react";
import { createUseStyles } from "react-jss";
//import { ReactComponent as Logo } from "../../images/AppLogo.svg";
import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { Divider } from "@mui/material";
import * as yup from "yup";
import { observer } from "mobx-react-lite";
import s from './SignInCard.module.css'
import { useStore } from "../../../stores/store";
import FitStackCloseButton from "../../atoms/FitStackCloseButton/FitStackCloseButton";
import { LoginDto } from "../../../Dtos/LoginDto";
import FitStackTextInput from "../../atoms/FitStackTextInput/FitStackTextInput";
import FitStackButton from "../../atoms/FitStackButton/FitStackButton";

const SignInCard: React.FC = (props: any) => {
  const { modalStore, userStore } = useStore();
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });
  const [displayFormStatus, setDisplayFormStatus] = useState(false);

  interface IFormStatus {
    message: string;
    type: string;
  }

  interface IFormStatusProps {
      [key: string]: IFormStatus;
  }

  const formStatusProps: IFormStatusProps = {
      success: {
          message: "Signed up successfully.",
          type: "success",
      },
      error: {
          message: "Incorrect email or password. Please try again",
          type: "error",
      },
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required for sign in."),
    password: yup.string().required("Password is required for sign in."),
  });
  return (
    <div className={s.cardContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <div className={s.logoTextContainer}>
           {/*  <Logo fill={Colors.mainButtonColor} className={styles.logo} /> */}
          </div>
          <div
            className={s.iconContainer}
            onClick={() => modalStore.setSignInRegisterModalIsOpen(false)}
          >
            <FitStackCloseButton />
          </div>
        </div>
        <div className={s.bodyContainer}>
          <h2>Sign In</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm })  => {
              const creds: LoginDto = {
                email: values.email,
                password: values.password,
              }
              await userStore.login(creds).catch((error: any) => {
                const res = error.response;
                if(res && res.data && res.status){
                  if(res.data === 'Incorrect email or password' && res.status === 401) setFormStatus(formStatusProps.error)
                }
              }).finally(() => setDisplayFormStatus(true));
              
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
                        onChange={(event: any) => {
                          handleChange(event)
                          setDisplayFormStatus(false);
                        }}
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
                        onChange={(event: any) => {
                          handleChange(event)
                          setDisplayFormStatus(false);
                        }}
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
                      {displayFormStatus &&
                        <div>
                          <p className={s.errorMessage}>{formStatus?.message}</p>
                        </div> 
                        
                      }
                      <FitStackButton
                        title="Sign In"
                        onClick={handleSubmit}
                      />
                    
                  </div>
                </>
              );
            }}
          </Formik>
          <div className={s.linkContainer} onClick={() => userStore.setIsRegistering(true)}>
              <h4>Need an account?</h4>
              <h5 onClick={() => userStore.setIsRegistering(true)} className={s.h5} >Click Here</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(SignInCard);

