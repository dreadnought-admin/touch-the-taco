import React from 'react'
import tacobg from "../src/assets/images/tacobg.jpg"

const Winner = ({ count, setCount }) => {
    
    const handleResetGame = () => {
        if (count >= 50) {
            setCount(0);
        }
        else {
            return null
        }
    };

  return (
    <div className="winner">
        <h1>You won!</h1>
        <button onClick={handleResetGame}>Play Again?</button>
    </div>
  )
}

export default Winner