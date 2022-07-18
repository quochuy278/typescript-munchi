import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CenterWrapper from "../../containers/CenterWrapper";
import { RootState } from "../../store";
import { authActions } from "../../store/auth-slice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log(isAuthenticated);
  const submitHandler = (event: any) => {
    event.preventDefault();
    dispath(authActions.login());
    navigate('/', {replace:true})
  };
  return (
    <CenterWrapper>
      <Box component="form" onSubmit={submitHandler}>
        <Button variant="outlined" color="primary" type="submit">
          Login
        </Button>
      </Box>
    </CenterWrapper>
  );
};

export default LoginPage;
