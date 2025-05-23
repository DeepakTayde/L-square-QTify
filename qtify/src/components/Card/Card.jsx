import React from "react";
import Styles from "./Card.module.css";
import { Chip } from "@mui/material";


const Card = ({album}) => {


  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <img src={album.image} alt="Card Header" className={Styles.cardImage} />
        <div className={Styles.cardHeaderContent}>
          <Chip
            label={`${album.follows} follows`}
            sx={{
              backgroundColor: "var(--color-black)",
              color: "var(--color-white)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              height: "23px",
              padding: "2px 4px",
              borderRadius: "10px",
              boxShadow:"none"
            }}
          
          />
        </div>
      </div>
      <h2 className={Styles.cardTitle}>{album.title}</h2>
    </div>
  );
};

export default Card;
