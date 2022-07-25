import {
  AppBar,
  Box,
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
    backgroundColor: "black",
    height: "30px",
    borderRadius: "20px",
    color: "white",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    opacity: 2,
    marginBottom: "10px",
  },
}));
const CustomTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: "10px" ,
  marginRight: "10px",
  "& .Mui-selected": {
    backgroundColor: "black",
    height: "30px",
    borderRadius: "20px",
    color: "white",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    opacity: 2,
    marginBottom: "10px",
  },
  "& .MuiTabs-indicator": {
   display: "none"
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
            <img src={LiveLocation} />
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
          <TabPanel value="delivery">
            <DeliveryPage />
          </TabPanel>
          <TabPanel value="eatin">
            <EatInPage />
          </TabPanel>
          <TabPanel value="takeout">
            <TakeOutPage />
          </TabPanel>
        </div>
      </TabContext>
    </div>
  );
};
export default MainPage;
