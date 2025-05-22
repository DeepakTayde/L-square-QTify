import React from 'react'
import styles from "./Button.module.css";

const Button = ({children="Give Feedback", ...props}) => {
  return (
    <>
        <button className={styles.button} {...props} >{children}</button>
    </>
  )
}

export default Button