import React from 'react';
import './Home.css';
import Bullet from "./bullet/Bullet";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <div className="Title">
                Increase sales and keep you audiance hot
                with Whatsapp and Telegram Chatbots
            </div>
            <div className="SubTitle">
                Get set up and Wix's AI will take care of the rest:
            </div>
            <Bullet></Bullet>
            <div className="Actions">
                <button onClick={() => navigate('/start') }>Let's Start</button>
                <button>Get to know Wix's AI</button>
            </div>
        </div>
    )
}

export default Home;