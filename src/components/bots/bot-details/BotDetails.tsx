import React from 'react';
import './BotDetails.css';
import {Bot} from "../Bot.model";

function BotDetails(props: { bot: Bot }) {
    const bot = props.bot;
    return (
        <div className={'BotDetails'}>
            <div>my name is: {bot.name}</div>
            <div>my messages per month is: {bot.messageNumPerMonth}</div>
            <div>my cost per month is: {bot.costPerMonth}</div>
        </div>
    )
}

export default BotDetails;