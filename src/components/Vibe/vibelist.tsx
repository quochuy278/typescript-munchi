import { Fragment } from "react";
import VibeItem from "./vibeitem";
import { Burger, Thai, Kebab, Pizza } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Virtual } from "swiper";

const DUMMY_DATA = [
  {
    name: "Burger",
    image: Burger,
  },
  {
    name: "Pizza",
    image: Pizza,
  },
  {
    name: "Kebab",
    image: Kebab,
  },
  {
    name: "Thai",
    image: Thai,
  },
  {
    name: "Pasta",
    image: Kebab,
  },
  {
    name: "Asian Food",
    image: Kebab,
  },
  {
    name: "Vegan",
    image: Thai,
  },
];

const VibeList = () => {
  return (
    <Fragment>
      <Swiper
        modules={[Virtual]}
        spaceBetween={10}
        slidesPerView={4}
        virtual
        direction="horizontal"
        style={{ overflow: "hidden", padding: 0 }}
      >
        {DUMMY_DATA.map((data) => {
          return (
            <SwiperSlide>
              <VibeItem data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default VibeList;
