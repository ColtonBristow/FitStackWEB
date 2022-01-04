import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../constants/Colors";
//import { ReactComponent as Logo } from "../../images/AppLogo.svg";
import { useStore } from "../../stores/store";
import FitStackCloseButton from "../atoms/FitStackCloseButton";
import FitStackTextInput from "../atoms/FitStackTextInput";
import { Button } from "@material-ui/core";
import FitStackStoreButton from "../atoms/FitStackStoreButton";
import { Field, Form, Formik } from "formik";
import { Divider } from "@mui/material";
import FitStackButton from "../atoms/FitStackButton";
import * as yup from "yup";
import { observer } from "mobx-react-lite";
import agent from "../../axios/agent";
import { LoginDto } from "../../Dtos/LoginDto";
import { responsePathAsArray } from "graphql";

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

  const styles = useStyles();
  return (
    <div className={styles.cardContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.logoTextContainer}>
           {/*  <Logo fill={Colors.mainButtonColor} className={styles.logo} /> */}
          </div>
          <div
            className={styles.iconContainer}
            onClick={() => modalStore.setSignInRegisterModalIsOpen(false)}
          >
            <FitStackCloseButton />
          </div>
        </div>
        <div className={styles.bodyContainer}>
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
              await userStore.login(creds).catch((error) => {
                const res = error.response;
                if(res && res.data && res.status){
                  if(res.data === 'Incorrect email or password' && res.status === 401) setFormStatus(formStatusProps.error)
                }
              }).finally(() => setDisplayFormStatus(true));
              
              //resetForm();
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
                  <div className={styles.bodyContainer}>
                    
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
                          <p className={styles.errorMessage}>{formStatus?.message}</p>
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
          <div className={styles.linkContainer} onClick={() => userStore.setIsRegistering(true)}>
              <h4>Need an account?</h4>
              <h5 onClick={() => userStore.setIsRegistering(true)} className={styles.h5} >Click Here</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(SignInCard);

const useStyles = createUseStyles({
  cardContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: "25%",
    backgroundColor: Colors.mainBackgroundColor,
    borderRadius: 20,
    marginBottom: "15%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    height: "3em",
    width: "3em",
    marginRight: "1em",
  },
  headerText: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  headerContainer: {
    marginTop: '1em',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "15%",
    alignItems: "center",
    width: "100%",
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
  errorMessage: {
    color: "red",
  },
});
