import React from 'react'
import Styles from "./Carousel.module.css";
import LeftArrow from "../../assets/LeftArrow.svg";

const LeftNavButton = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={`${Styles.navBtn} ${Styles.prevBtn}`}
      aria-label="Previous"
      {...props}
    >
      <img src={LeftArrow} alt="Next" width={32} height={32} />
    </button>
  )
})

export default LeftNavButton;

