import React from 'react'
import Image from 'next/image'
import Logo from '../public/testcase__logo.png'
import Container from "../components/Container.js"
import styles from "../styles/intro.module.scss"

const intro = () => {
  return (
    <div className={styles.intro}>
        <header>
            <h1>TestCase <span>APP</span></h1>
              <span>&#x22; Pixel Perfect&#x22;</span>
        </header>
          <Image
              src={Logo}
              alt='Test Case Logo'
              width={300}
              height={272} 
          />
          <Container/>
    
    </div>
  )
}

export default intro