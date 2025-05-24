import React from 'react'
import Styles from "./Carousel.module.css";
import RightArrow from "../../assets/RightArrow.svg";

const RightNavButton = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={`${Styles.navBtn} ${Styles.nextBtn}`}
      aria-label="Next"
      {...props}
    >
      <img src={RightArrow} alt="Next" width={32} height={32} />
    </button>
  )
})

export default RightNavButton

