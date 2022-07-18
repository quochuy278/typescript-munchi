import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Button } from "@mui/material";
const HomePage = () => {
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
    console.log(isAuthenticated)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        {isAuthenticated ? ( <p>You are authenticated</p>) : null} 
        </p>
        <Link className="App-link" to="/login">
          Learn React
        </Link>
       {isAuthenticated ? (<Button variant="outlined" >Logout</Button>) : null}
      </header>
    </div>
  );
};

export default HomePage;
