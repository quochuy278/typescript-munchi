import logo from "../../logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, Button } from "@mui/material";
import { authActions } from "../../store/auth-slice";
const HomePage = () => {
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(isAuthenticated)
      const logoutHandler = (event: any) => {
        event.preventDefault();
        dispatch(authActions.logout());
        navigate("/login", { replace: true });
      };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {isAuthenticated ? <p>You are authenticated</p> : null}
        </p>
        <Link className="App-link" to="/login">
          Learn React
        </Link>
        {isAuthenticated ? (
          <Box component="form" onSubmit={logoutHandler}>
            <Button variant="outlined" type="submit">
              Logout
            </Button>
          </Box>
        ) : null}
      </header>
    </div>
  );
};

export default HomePage;
