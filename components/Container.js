import React, {useState} from 'react';
import styles from "../styles/component-style/container.module.scss";
import Link from 'next/link';



const Container = () => {

  const [context, setContext] = useState([
    {title: "Welcome to TestCase APP!" , content: "We created this exercise to gain insights about your development skills.", button: "Start"}
  ])




  return (
    <div className={styles.container}>
      {context.map((data) => {
        return <>
        <h2>{data.title}</h2> 
        <p>{data.content}</p>
        <Link href= "/home">
          <button>{data.button}</button>
        </Link>
        </>
      })}
    </div>
  )
}

export default Container