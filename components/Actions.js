import React, {useEffect, useState} from 'react'
import styles from "../styles/component-style/actions.module.scss";
import Action from "./Action"
import Link from 'next/link';
import Router from "next/router"
import Image from 'next/image'
import Search from '../public/search.png'

const Actions = ({ data }) => {


  const [mainData, setMainData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("")

  const filterActions = (id) => {
    let removedActions = mainData.filter((mission) => mission.id !== id);
    setMainData(removedActions);
  }

  console.log("mymainData" + mainData.length)

  const searchMission = (e) => {
    e.preventDefault();
    console.log("Im Searchin ")
    const filteredMissions = mainData.filter((mission) => mission.title.includes(searchTerm))
    console.log(filteredMissions)
    setMainData(filteredMissions)
  }

  return (
    <div className={styles.actions}>
      <h2>Actions to be completed</h2>
      <div className = "search">
        <input type="text" placeholder="Search by title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Image
          src={Search}
          alt='Test Case Search'
          width={27}
          onClick={searchMission}
        />
        
      </div>
      {mainData?.length === 0 ? (
        <div>Loading</div>
      ) : (
        mainData?.map((mission) => (
          <ul key={mission.key}>
            <Action
              filterActions = {filterActions}
              title={mission.title}
              description={mission.description}
              id={mission.id}
              image = {mission.image}
              point = {mission.point}
            />

          </ul>
        ))
      )}
    </div>
  )
}




export default Actions