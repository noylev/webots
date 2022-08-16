import { createContext } from 'react';
import {Bot} from "../components/bots/Bot.model";

const initialState: {bots: Bot[], loading: boolean, error: any} = {
    bots: [
        {
            name: "Diana Prince",
            messageNumPerMonth: 100,
            costPerMonth: 52,
        },
        {
            name: "Bruce Wayne",
            messageNumPerMonth: 33,
            costPerMonth: 359,
        },
        {
            name: "Clark Kent",
            messageNumPerMonth: 549,
            costPerMonth: 444,
        }
    ],
    loading: false,
    error: null
};

const BotsContext = createContext([initialState]);

export default BotsContext;