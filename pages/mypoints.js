/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { Context } from "../contextapi/context";
import styles from "../styles/mypoints.module.scss"
import Nav from "../components/Nav"
import MyPoint from "../components/MyPoint"

const mypoints = () => {
    const { completedTasks } = useContext(Context)
    return (
        <>
            <div className={styles.mypoints}>
                {completedTasks.length === 0 ? (
                    <>
                        <Nav />
                        <div>
                            <p style = {{position : "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>You did not earn any points</p>
                        </div> 
                    </>
                ) : (
                    <>
                        <Nav />
                        <h3>Completed Actions</h3>
                        <div>
                            {completedTasks.map((task) => (
                                <>
                                    <MyPoint title= {task.title} point= {task.point}/>
                                </>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>

    )
}

export default mypoints