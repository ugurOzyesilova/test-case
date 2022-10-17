import React from 'react'
import Link from 'next/link';
import Logo from '../public/tick.png'
import Image from 'next/image'
import Nav from "../components/Nav"
import styles from "../styles/view.module.scss"
const congratulations = () => {
  return (
    <Link href="/mypoints">
      <div className={styles.view}>
        <Nav/>
        <section>
          <div>
            <Image
              src={Logo}
              alt='Test Case Logo'
              width={80 }
              height={60}
            />
            <h3>Congratulations</h3>
            <p>You have earned points for your participation! <br />
              Keep up the great work !
            </p>
            <Link href = "/home">
              <button>Close</button>
            </Link>
            

          </div>

        </section>

      </div>
    </Link>

  )
}

export default congratulations