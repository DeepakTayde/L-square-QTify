import styles from "./Section.module.css"; // Adjust the path as necessary
import Card from "../Card/Card"; // Adjust the path as necessary
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel";



const Section = ({ endpoint, sectionType }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(true);



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
          <Carousel items={showAlbums} renderItem={(album)=> <Card album={album} section={sectionType} />}/>

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
