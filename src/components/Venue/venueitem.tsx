import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dummy, HappyFace } from "../../assets";
import styles from "./venueitem.module.css";


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


const VenueItem = (props: any) => {
  
    const { name, time, dish, rating } = props.data;
  return (
    <Card className={styles.card__container}>
      <CardMedia component={"img"} width={358} height={190} src={Dummy} />
      <Box component={"div"} className={styles.card__title}>
        <Typography variant="h3">Beijing 8 Kortteli</Typography>
        <Typography variant="body1">25-35 min</Typography>
      </Box>
      <Box component={"div"} className={styles.card__title}>
        <Typography variant="subtitle2" color="text.disabled">
          Dumpling and tea"
        </Typography>
        <Box component={"div"} className={styles.card__content}>
          <img src={HappyFace} />
          <Typography variant="body1">9.4</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default VenueItem;
