import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'; // Adjust the path as necessary
import axios from 'axios';
import Card from '../Card/Card'; // Adjust the path as necessary

const Section = () => {
    const [albumData, setAlbumData] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top'); // Replace with your API endpoint
            console.log(response.data);
            setAlbumData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect( ()=>{
        fetchData();
    },[])

  return (
    <div className={styles.section}>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Top Albums</h2>
            <button className={styles.sectionButton}>collapse</button>
        </div>
        <div className={styles.sectionContent}>
            {/* Add your content here */}
            {albumData.map((album, index) => (
                <Card key={index} album={album} section={"Top Album"}/>
            ))}
        </div>
    </div>
  )
}

export default Section