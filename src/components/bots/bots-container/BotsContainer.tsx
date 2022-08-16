import React from 'react';
import './BotsContainer.css';
import {Bot} from "../Bot.model";
import BotDetails from '../bot-details/BotDetails';

function BotsContainer(props: { bots: Bot[] }) {
    const bots = props.bots;
    return (
        <ul>
            {bots.map((bot: Bot, index: number) => {
                return <li key={index}><BotDetails bot={bot}></BotDetails></li>
            })}
        </ul>
    )
}

export default BotsContainer;