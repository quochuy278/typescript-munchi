import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dummy, HappyFace } from "../../assets";
import styles from "./trendingitem.module.css";
import { getPlatforms } from "@ionic/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const DUMMY_DATA = [
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
  {
    name: "Beijing 8 Kortteli",
    time: "25-35 min",
    dish: "Dumpling and tea",
    rating: "9.4",
  },
];


const TrendingItem = (props: any) => {


    const {name,time,dish,rating} = props.data
   
  return (
    <Card className={styles.card__container}>
      <CardMedia
        component="img"
        height="122"
        image={Dummy}
        alt="trending"
      />
      <Box component={"div"} className={styles.card__title}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{time}</Typography>
      </Box>
      <Box component={"div"} className={styles.card__title}>
        <Typography variant="h4" color="text.disabled">
          {dish}
        </Typography>
        <Box component={"div"} className={styles.card__content}>
          <img src={HappyFace} />
          <Typography variant="body2">{rating}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TrendingItem;
