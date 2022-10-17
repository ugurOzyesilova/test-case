import React, { useContext} from "react";
import styles from "../styles/component-style/nav.module.scss";
import Link from "next/link"
import { Context } from "../contextapi/context";

const Nav = () => {

  const {completedTasks} = useContext(Context);
  const {totalPoint} = useContext(Context);


  return (
    <nav className={styles.nav}>
    <Link href = "/home">
        <h2>TestCase<span>APP</span></h2>
    </Link>
      
      <Link href = "/mypoints">
        <button>Points: <span>{totalPoint}</span></button>
      </Link>

    </nav>
  )
}



export default Nav