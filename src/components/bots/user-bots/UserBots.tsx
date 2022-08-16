import React, {useContext} from 'react';
import './UserBots.css';
import BotsContext from "../../../context/BotsContext";
import BotsContainer from "../bots-container/BotsContainer";

function UserBots() {
    const [bots] = useContext(BotsContext);
    return (

        <div className="Bots">
            <BotsContainer bots={bots.bots}></BotsContainer>
        </div>
    )
}

export default UserBots;