import { Button, Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CenterWrapper from "../../containers/CenterWrapper";
import { Initialize } from "../../servies/initialize";
import { RootState } from "../../store";
import { authActions } from "../../store/auth-slice";
import styles from "./login.module.css";
import AuthenticationService from "../../servies/authentication";
import AuthenticationProviderEnum from "../../servies/authentication/enum/authentication-provider";

//Icons
import { GoogleIcon, FacebookIcon } from "../../assets";
import AppleIcon from "@mui/icons-material/Apple";
import MailIcon from "@mui/icons-material/Mail";
import styled from "@emotion/styled";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  
  // const googleSubmitHandler = async (event: any) => {
  //   event.preventDefault();
  //   AuthenticationService.login(AuthenticationProviderEnum.Google);
    
  //   dispatch(authActions.login());
  //   navigate('/', {replace:true})
  // };


  const loginWithProvider = async (event: any, provider: string) => {
    event.preventDefault();
    AuthenticationService.login(provider);
    navigate('/')
  }
  
  const CustomButton = styled(Button)(({ theme }) => ({
    color: '#101012',
    border: '0.5px solid #ADADAD'
  }));
  return (
    <CenterWrapper>
      <Container className={styles.content_container}>
        <Box
          component="form"
          className={styles.form__wrapper}
          onSubmit={async (event: any) => {
            await loginWithProvider(event, AuthenticationProviderEnum.Google);
          }}
        >
          <CustomButton
            variant="outlined"
            type="submit"
            className={styles.login_btn}
            color="primary"
          >
            <img src={GoogleIcon} alt="logo" />
            <span> Login with Google</span>
          </CustomButton>
        </Box>
        <Box
          component="form"
          className={styles.form__wrapper}
          onSubmit={async (event: any) => {
            await loginWithProvider(event, AuthenticationProviderEnum.Facebook);
          }}
        >
          <CustomButton
            variant="outlined"
            type="submit"
            className={styles.login_btn}
          >
            <img src={FacebookIcon} alt="logo" />
            <span> Login with Facebook</span>
          </CustomButton>
        </Box>
        <Box
          component="form"
          className={styles.form__wrapper}
          onSubmit={async (event: any) => {
            await loginWithProvider(event, AuthenticationProviderEnum.Apple);
          }}
        >
          <CustomButton
            variant="outlined"
            type="submit"
            className={styles.login_btn}
          >
            <AppleIcon sx={{ color: "black" }} />
            <span> Login with Apple </span>
          </CustomButton>
        </Box>
        <Box component="form" className={styles.form__wrapper}>
          <CustomButton variant="outlined" type="submit" className={styles.login_btn}>
            <MailIcon sx={{ color: "black" }} />
            <span> Login with Email</span>
          </CustomButton>
        </Box>
      </Container>
    </CenterWrapper>
  );
};

export default LoginPage;
