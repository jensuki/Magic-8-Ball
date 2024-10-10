import { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
    // set state for msg and color
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const { msg, color } = answers[randomIndex];
        setMsg(msg);
        setColor(color);
    }
    return (
        <div className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: color }}>
            <p>{msg}</p>
        </div>
    )

}

export default EightBall;