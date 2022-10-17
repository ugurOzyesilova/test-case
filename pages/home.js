/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import Nav from "../components/Nav"
import Actions from "../components/Actions"
import styles from "../styles/home.module.scss"
import * as API from './api'


const home = ({data}) => {


  return (
    <div className = {styles.home}>
        <Nav/>
        <Actions data = {data} />
    </div>
  )
}


export async function getStaticProps() {
  var data = await API.getActions();
  return {
    props: {
      data: data
    },
  };
}

export default home