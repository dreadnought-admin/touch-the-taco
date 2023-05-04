import React, { useEffect, useState } from 'react'
import Winner from './Winner'
import taco from "../src/assets/images/99_taco.png"
import burrito from "../src/assets/images/18_burrito.png"

const App = () => {

  const [countIsTwentyFive, setCountIsTwentyFive] = useState(false);
  const [count, setCount] = useState(0)
  const [checkCount, setCheckCount] = useState(false);

  const handleTacoClick = (e) => {
    if (count < 50) {
      setCount(count => count += 1);
    }
   }

   const handleCheckCount = () => {
    if (count != 0) {
      setCheckCount(true)
    }
    else {
      setCheckCount(false)
    }
   };

   const checkIfTwentyFive = () => {
    if (count >= 25) {
      setCountIsTwentyFive(true)
    }
    else {
      setCountIsTwentyFive(false)
    }
   };

   useEffect(() => {
    handleCheckCount();
    checkIfTwentyFive();
   })

  return (
    <>
      <div className="floating center mt-50">
          <button onClick={handleTacoClick}><img src={countIsTwentyFive ? burrito : taco}/></button>
      </div>
      <div className="center">
        {countIsTwentyFive ? <h1>Woah! Burrito Time!</h1> : <h1>Touch the taco.</h1>}
      </div>
      <div className="center">
        {checkCount  ? <p>You touched the {countIsTwentyFive ? "burrito" : "taco" } {count} times.</p> : <p>Go on. Do it.</p>}
      </div>
      <div className="center">
        { count >= 50 ?  <Winner count={count} setCount={setCount}/> : null}
      </div>  
    </>
  )
}

export default App