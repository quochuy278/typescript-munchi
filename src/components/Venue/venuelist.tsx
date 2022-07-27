import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";
import { Fragment } from "react";
import TrendingItem from "./venueitem";
import VenueItem from "./venueitem";

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


const VenueList = () => {
  return (
    <Fragment>
      <Swiper
        modules={[Virtual]}
        spaceBetween={30}
        slidesPerView={4}
        virtual
        style={{padding: 0 }}
        direction="vertical"
      >
        {DUMMY_DATA.map((data) => {
          return (
            <SwiperSlide>
              <VenueItem data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default VenueList;
