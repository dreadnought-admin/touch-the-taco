import React, { useEffect, useState } from 'react'
import Winner from './Winner'
import taco from "../src/assets/images/99_taco.png"
import burrito from "../src/assets/images/18_burrito.png"

const App = () => {

  const [countIsTen, setCountIsTen] = useState(false);
  const [count, setCount] = useState(0)
  const [checkCount, setCheckCount] = useState(false);

  const handleTacoClick = (e) => {
    if (count >= 50) {
      setCount(count => count += 1);
    }
    else {
      return null 
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

   const checkIfTen = () => {
    if (count >= 10) {
      setCountIsTen(true)
    }
    else {
      setCountIsTen(false)
    }
   };

   useEffect(() => {
    handleCheckCount();
    checkIfTen();
   })

  return (
    <>
      <div className="floating center mt-50">
          <button onClick={handleTacoClick}><img src={countIsTen ? burrito : taco}/></button>
      </div>
      <div className="center">
        {countIsTen ? <h1>Woah! Burrito Time!</h1> : <h1>Touch the taco.</h1>}
      </div>
      <div className="center">
        {checkCount  ? <p>You clicked the {countIsTen ? "burrito" : "taco" } {count} times.</p> : <p>Go on. Do it.</p>}
      </div>
      <div className="center">
        { count >= 50 ?  <Winner count={count} setCount={setCount}/> : null}
      </div>  
    </>
  )
}

export default App