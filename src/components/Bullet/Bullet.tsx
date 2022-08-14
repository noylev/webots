import React from 'react';
import styles from './Bullet.module.css';
import {BsCheck} from "@react-icons/all-files/bs/BsCheck";

const bullets = [
    'Create multiple chatbots in minuets and free your time.',
    'Send marketing notifications directly to WhatsApp and Telegram with up to 90% engagement',
    'Ask for payments directly to Whatsapp and Telegram with Wix-Links.'
]

function Bullet() {
    return (
        <div>
            {bullets.map((bullet: string, index: number) => {
                return <div className={styles.Bullet}  key={index}>
                    <BsCheck className={styles.Icon} />{bullet}
                </div>
            })}
        </div>
    )
}

export default Bullet;
