import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Virtual } from "swiper";
import { Fragment } from "react";
import TrendingItem from "./trendingitem";

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

const TrendingList = () => {
  return (
    <Fragment>
      <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={2} virtual>
        {DUMMY_DATA.map((data) => {
          return (
            <SwiperSlide>
              <TrendingItem data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default TrendingList;
