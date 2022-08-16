import React from 'react';
import './BotsContainer.css';
import {Bot} from "../Bot.model";
import styles from "../../home/bullet/Bullet.module.css";

function BotsContainer(props: { bots: Bot[] }) {
    const bots = props.bots;
    return (
        <div>
            {bots.map((bot: Bot, index: number) => {
                return <div className={styles.Bullet}  key={index}>
                    <div>my name is: {bot.name}</div>
                    <div>my messages per month is: {bot.messageNumPerMonth}</div>
                    <div>my cost per month is: {bot.costPerMonth}</div>
                </div>
            })}
        </div>
    )
}

export default BotsContainer;