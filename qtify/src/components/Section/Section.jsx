
import styles from './Section.module.css'; // Adjust the path as necessary

import Card from '../Card/Card'; // Adjust the path as necessary
import { useEffect, useState } from 'react';
import axios from 'axios';

const Section = ({ endpoint,  sectionType}) => {
const [albums, setAlbums] = useState([]);
const [showAll, setShowAll] = useState(false);
const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endpoint);
            setAlbums(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }finally {
            setLoading(false);
        }
    };
    fetchData();
},[endpoint])

const showAlbums = showAll ? albums : albums.slice(0, 8);

  return (

    <div key={showAlbums.id} className={styles.section}>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{sectionType}</h2>
            <button className={styles.sectionButton} onClick={()=> setShowAll((prev)=> !prev)}>{showAll?"collapse":"Show All"}</button>
        </div>
        <div className={styles.sectionContent}>
            {/* Add your content here */}
            {loading ? (
                <div >Loading...</div>
            ):(
                showAlbums.map((album, index) => (
                <Card key={index} album={album} section={sectionType} />
            ))
            )}
        </div>
    </div>
  )
}

export default Section