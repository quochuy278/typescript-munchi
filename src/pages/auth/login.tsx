import { Button, Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CenterWrapper from "../../containers/CenterWrapper";
import { Initialize } from "../../servies/initialize";
import { RootState } from "../../store";
import { authActions } from "../../store/auth-slice";
import styles from "./login.module.css";

//Icons
import { GoogleIcon, FacebookIcon } from "../../assets";
import AppleIcon from "@mui/icons-material/Apple";
import MailIcon from "@mui/icons-material/Mail";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
 
    useEffect(() => {
      Initialize();
    });
  console.log(isAuthenticated);
  const submitHandler = (event: any) => {
    event.preventDefault();
    dispatch(authActions.login());
    navigate('/', {replace:true})
  };
 
  return (
    <CenterWrapper>
  
        <Container className={styles.content_container}>
          <Box
            component="form"
            className={styles.form__wrapper}
            onSubmit={submitHandler}
          >
            <Button
              variant="outlined"
              type="submit"
              className={styles.login_btn}
              color="primary"
            >
              <img src={GoogleIcon} alt="logo" />
              <span> Login with Google</span>
            </Button>
          </Box>
          <Box
            component="form"
            className={styles.form__wrapper}
            onSubmit={submitHandler}
          >
            <Button
              variant="outlined"
              type="submit"
              className={styles.login_btn}
            >
              <img src={FacebookIcon} alt="logo" />
              <span> Login with Facebook</span>
            </Button>
          </Box>
          <Box component="form" className={styles.form__wrapper}>
            <Button
              variant="outlined"
              type="submit"
              className={styles.login_btn}
            >
              <AppleIcon sx={{ color: "black" }} />
              <span> Login with Apple (not implemented)</span>
            </Button>
          </Box>
          <Box component="form" className={styles.form__wrapper}>
            <Button
              variant="outlined"
              type="submit"
              className={styles.login_btn}
            >
              <MailIcon sx={{ color: "black" }} />
              <span> Login with Email</span>
            </Button>
          </Box>
        </Container>
      
    </CenterWrapper>
  );
};

export default LoginPage;
