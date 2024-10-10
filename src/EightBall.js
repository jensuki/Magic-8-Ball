import { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
    // set state for msg and color
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    // state to track counts for each color
    const [greenCount, setGreenCount] = useState(0);
    const [goldenCount, setGoldenCount] = useState(0);
    const [redCount, setRedCount] = useState(0);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const { msg, color } = answers[randomIndex];
        setMsg(msg);
        setColor(color);

        // update color count based on color
        if (color === 'green') setGreenCount(greenCount + 1);
        if (color === 'goldenrod') setGoldenCount(goldenCount + 1);
        if (color === 'red') setRedCount(redCount + 1);
    }
    const restart = () => {
        setMsg('Think of a Question');
        setColor('black');
        setGreenCount(0);
        setGoldenCount(0);
        setRedCount(0);
    }

    return (
        <div className="EightBall-container">
            <div className="EightBall"
                onClick={handleClick}
                style={{ backgroundColor: color }}>
                <p>{msg}</p>
            </div>
            {/* color counter */}
            <div className="EightBall-stats">
                <p>Green: {greenCount}</p>
                <p>Golden: {goldenCount}</p>
                <p>Red: {redCount}</p>
            </div>
            <button className="EightBall-reset" onClick={restart}>Reset</button>
        </div>
    )

}

export default EightBall;