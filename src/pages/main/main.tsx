import { Badge, IconButton, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import DeliveryPage from "./delivery/index";
import EatInPage from "./eatin/index";
import TakeOutPage from "./takeout/index";
import { Cart, LiveLocation } from "../../assets";

import styles from "./main.module.css";

import { TabContext, TabPanel } from "@mui/lab";

const CustomTabPanel = styled(TabPanel)(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "100vw",
  alignItems: "center",

  justifyContent: "center",
  marginLeft: "20px",
  marginRight: "20px",
  padding: 0,
  overflow: "hidden",
}));

const MainPage = () => {
  const [value, setValue] = useState("delivery");

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
              <img src={LiveLocation} alt="livelocation" />
            </IconButton>
          </div>

          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              allowScrollButtonsMobile={false}
            >
              <Tab label="Delivery" value="delivery" />
              <Tab label="Eat In" value="eatin" />
              <Tab label="Take Out" value="takeout" />
            </Tabs>
          </div>
          <div>
            <IconButton>
              <Badge
                badgeContent={4}
                color="primary"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <img src={Cart} alt="cart" />
              </Badge>
            </IconButton>
          </div>
        </div>

        <CustomTabPanel value="delivery" className={styles.tabpanel}>
          <DeliveryPage />
        </CustomTabPanel>
        <CustomTabPanel value="eatin" className={styles.tabpanel}>
          <EatInPage />
        </CustomTabPanel>
        <CustomTabPanel value="takeout" className={styles.tabpanel}>
          <TakeOutPage />
        </CustomTabPanel>
        {/* {value === "delivery" && (
          <Box sx={{flex: 1}}>
            <DeliveryPage />
          </Box>
        )} */}
      </TabContext>
    </div>
  );
};
export default MainPage;
