import {
  AppBar,
  Box,
  IconButton,
  styled,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import CenterWrapper from "../../containers/CenterWrapper";
import DeliveryPage from "./delivery/index";
import EatInPage from "./eatin/index";
import TakeOutPage from "./takeout/index";
import { LiveLocation } from "../../assets";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import styles from "./main.module.css";
import CartIcon from "../../components/UI/cart";
import NavBar from "../../components/UI/nav-bar";
import { TabContext, TabPanel } from "@mui/lab";
import { TabletSharp } from "@mui/icons-material";

const CustomTab = styled(Tab)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  width: "81px",
  height: "34px",
  borderRadius: "20px",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "16px",
  textAlign: "center",
  font: "F37Ginger",
  padding: 0,
  textTransform: "none",
  "&:focus": {
    height: "20px",
    color: "white",
  },
  "&:active": {
    backgroundColor: "grey",
    color: "white",
  },
}));
const CustomTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: "10px",
  marginRight: "10px",
  "& .Mui-selected ": {
    backgroundColor: "black",
    color: "white",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
const CustomTabPanel = styled(TabPanel)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "	.MuiButtonBase-root": {
    color: "black",
    backgroungColor: "white",
  },
}));
const TabName = styled("span")(() => ({}));

const MainPage = () => {
  const [value, setValue] = useState("delivery");
  const theme = useTheme();
  const [active, setActive] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className={styles.container}>
      <TabContext value={value}>
        {/* Nav bar */}
        <div className={styles.navContainer}>
          <div>
            <IconButton>
              <img src={LiveLocation} />
            </IconButton>
          </div>
          <div>
            <CustomTabs value={value} onChange={handleChange} centered>
              <CustomTab label="Delivery" value="delivery" />
              <CustomTab label="Eat In" value="eatin" />
              <CustomTab label="Take Out" value="takeout" />
            </CustomTabs>
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
        <div className={styles.mainScreen}>
          <CustomTabPanel value="delivery">
            <DeliveryPage />
          </CustomTabPanel>
          <CustomTabPanel value="eatin">
            <EatInPage />
          </CustomTabPanel>
          <CustomTabPanel value="takeout">
            <TakeOutPage />
          </CustomTabPanel>
        </div>
      </TabContext>
    </div>
  );
};
export default MainPage;
