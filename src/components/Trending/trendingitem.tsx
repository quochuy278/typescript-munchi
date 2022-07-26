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
  console.log(getPlatforms());
  const [isDesktop, setIsDesktop] = useState(false);
  const platform = getPlatforms();
  console.log(platform);
    const {name,time,dish,rating} = props.data
    console.log("🚀 ~ file: trendingitem.tsx ~ line 66 ~ TrendingItem ~ rating", rating)
    console.log("🚀 ~ file: trendingitem.tsx ~ line 66 ~ TrendingItem ~ dish", dish)
    console.log("🚀 ~ file: trendingitem.tsx ~ line 66 ~ TrendingItem ~ time", time)
    console.log("🚀 ~ file: trendingitem.tsx ~ line 66 ~ TrendingItem ~ name", name)
  return (
    <Card className={styles.card__container}>
      <CardMedia
        component="img"
        height="122"
        image={Dummy}
        alt="green iguana"
      />
      <Box component={"div"} className={styles.card__title}>
        <Typography variant="h5">Beijing 8 Kortteli</Typography>
        <Typography variant="body2">25-35 min</Typography>
      </Box>
      <Box component={"div"} className={styles.card__title}>
        <Typography variant="h4" color="text.disabled">
          Dumplings and tea
        </Typography>
        <Box component={"div"} className={styles.card__content}>
          <img src={HappyFace} />
          <Typography variant="body2">9.4</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TrendingItem;
