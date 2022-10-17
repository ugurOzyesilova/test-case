import React from 'react'
import styles from "../styles/component-style/mypoint.module.scss";

const MyPoint = ({title, point}) => {
  return (
      <div className = {styles.mypoint}>
          <p>{title}</p>
          <span>+{point}</span>
      </div>
  )
}

export default MyPoint