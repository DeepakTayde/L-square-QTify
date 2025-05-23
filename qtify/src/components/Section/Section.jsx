import styles from "./Section.module.css"; // Adjust the path as necessary
import Card from "../Card/Card"; // Adjust the path as necessary
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles

const Section = ({ endpoint, sectionType }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(endpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  const showAlbums = showAll ? albums : albums.slice(0, 7);

  return (
    <div key={showAlbums.id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{sectionType}</h2>
        <button
          className={styles.sectionButton}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show All" :  "collapse"}
        </button>
      </div>

      <div className={styles.sectionContent}>
        {loading ? (
          <div>Loading...</div>
        ) : showAll ? (
          // Carousel view
          <>
            <div className={styles.carouselNav}>
              <button
                ref={prevRef}
                className={styles.navBtn + " " + styles.prevBtn}
                aria-label="Previous"
              >
                {/* SVG or arrow */}
                    <img src={LeftArrow} alt="Previous" width={32} height={32} />
              </button>
              <button
                ref={nextRef}
                className={styles.navBtn + " " + styles.nextBtn}
                aria-label="Next"
              >
                {/* SVG or arrow */}
                    <img src={RightArrow} alt="Next" width={32} height={32} />
              </button>
            </div>
            <Swiper
              slidesPerView={7}
              spaceBetween={30}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
            >
              {showAlbums.map((album) => (
                <SwiperSlide key={album.id}>
                  <Card album={album} section={sectionType} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <div className={styles.gridContent}>
            {albums.map((album) => (
              <Card key={album.id} album={album} section={sectionType} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
