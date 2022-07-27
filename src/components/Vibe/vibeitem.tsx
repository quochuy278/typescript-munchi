import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import { Burger, Thai, Kebab, Pizza } from "../../assets";
import styles from './vibeitem.module.css'

const VibeItem= (props: any) => {
  const {name , image} = props.data
  return (
    <Card className={styles.card__container}>
      <CardMedia
        component="img"
        height={90}
        width={90}
        image={image}
        alt="trending"
      />
      <Typography textAlign={"center"} variant={"h5"} sx={{ marginTop: "5px" }}>
        {name}
      </Typography>
    </Card>
  );
}

export default VibeItem;