import React, { useState, useEffect } from 'react';
import Board from './Components/Board/Board'
import initializeDeck from './deck'
function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension,setDimension]=useState(400);

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])
  const handleClick = (id) => setFlipped([...flipped, id]);
  const resizeBoard= ()=>{
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ))
  }
  return (
    <div className="App">
      <h2>Puedes recordar donde estan las cartas?</h2>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick} />
    </div>
  );
}

export default App;
