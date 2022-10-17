/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import styles from "../styles/component-style/action.module.scss";
import Image from 'next/image'



const Action = ({ title, description, id, image, point, filterActions}) => {
    return (
        <Link href = {"/view/" + id}>
            <div className={styles.action} onClick ={() => filterActions(id)}>
                <img src={image} alt="Color" />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <span>+{point}</span>
            </div>
        </Link>
     
    )
}

export default Action