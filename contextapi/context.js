import React, { createContext, useReducer, useState } from "react";

export const Context = createContext();

export const StateProvider = (props) => {

    const [completedTasks, setCompletedTasks] = useState([]);
    const [points, setPoints] = useState(0);

    const addCompletedTasks = (title, point) => {
        setCompletedTasks((prevState) => [...prevState, { title, point }])
        console.log(completedTasks.length);
    }
    
    const totalPoint = completedTasks.reduce((total, item) => {
        return (total += item.point);
    }, 0);

    return (
        <Context.Provider
            value={{
                completedTasks,
                addCompletedTasks,
                totalPoint

            }}
        >
            {props.children}
        </Context.Provider>
    );
};