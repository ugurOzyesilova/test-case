/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useContext, useState } from "react";
import { useRouter } from 'next/router'
import * as API from '../api'
import Container from "../../components/Container.js"
import Link from 'next/link';
import { Context } from "../../contextapi/context";
import styles from "../../styles/view.module.scss"
import Nav from "../../components/Nav"

const view = ({ data }) => {
  const router = useRouter();
  const { id } = router.query
  var title = data.title;
  var point = data.point;
  var image = data.image;
  var missionId = data.id;
  var description = data.description;
  const { completedTasks } = useContext(Context)
  const { addCompletedTasks } = useContext(Context);
  const { points } = useContext(Context);
  const { setPoints } = useContext(Context);


  const firedFunctions = () => {
    addCompletedTasks(title, point);
  }


  return (
    <div className={styles.view}>
      <Nav />
      <section>
        <div>
          <img src={image} alt="Color" />
          <span>+{point} Points</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href="/congratulations">
            <button onClick={firedFunctions}>Earn Points</button>
          </Link>
        </div>

      </section>

    </div>
  )
}

export async function getStaticPaths() {
  var actions = await API.getActions();
  const paths = actions.map((action) => ({
    params: { id: action.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  var data = await API.getActions();

  return { props: { data: data.find(d => d.id == params.id) } }
}

export default view