import React from 'react';
import './Home.css';
import Bullet from "../Bullet/Bullet";

function Home() {
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
                <button>Let's Start</button>
                <button>Get to know Wix's AI</button>
            </div>
        </div>
    )
}

export default Home;