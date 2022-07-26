import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Virtual } from "swiper";
import styles from './imageslider.module.css'
import { Dummy } from "../../assets";

const DUMMY_DATA = [
  {
    url: Dummy,
    caption: "Slide 1",
  },
  {
    url: Dummy,
    caption: "Slide 2",
  },
  {
    url: Dummy,
    caption: "Slide 3",
  },
  {
    url: Dummy,
    caption: "Slide 4",
  },
  {
    url: Dummy,
    caption: "Slide 5",
  },
  {
    url: Dummy,
    caption: "Slide 6",
  },
];


const ImageSlider= () => {
  return (
    <Fragment>
      <div className={styles.slider__container}>
        <div className={styles.slideshow__container}>
          <Swiper
            modules={[Virtual, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            virtual
            centeredSlidesBounds
            className={styles.mySwiper}
            pagination={{
              el: ".my-custom-pagination-div",
              clickable: true,
            }}
            centeredSlides
          >
            {DUMMY_DATA.map((slideContent, index) => (
              <SwiperSlide key={slideContent.caption} virtualIndex={index}>
                <img src={slideContent.url} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`my-custom-pagination-div ${styles.swiperpagination}`}
          ></div>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageSlider;