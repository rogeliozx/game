import React, { useState, useEffect } from 'react';
import Board from './Components/Board/Board'
import initializeDeck from './deck'
import './App.css';
function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension,setDimension]=useState(400);
const [solved,setSolved]=useState([]);
const [disabled,setDisabled]=useState(false);
let finish=false;
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
   
  }, [])

  useEffect(()=>{
    preloadImages()
  },cards)

  useEffect(()=>{
    const resizeListener=window.addEventListener('resize', resizeBoard)
    return ()=>window.removeEventListener('resize',resizeListener)
  })



  const handleClick = (id) => {

   setDisabled(true)

   if(flipped.length ===0){ 
    setFlipped([ id])
    setDisabled(false)
    
   }else{
     if(sameCardClicked(id)) return
     setFlipped([flipped[0], id])
     if(isMatch(id)){
       setSolved([...solved,flipped[0],id])
      resetCard()
      
     
     
     }else{
       setTimeout(resetCard,1000)
     }
   }
    
  
  }
 
  if(solved.length===cards.length){
    finish=true;
          }
const preloadImages=()=>{
  cards.map(card=>{
    const src=`/img/${card.type}.png`
    new Image().src=src
  })  
  
}

  const resetCard= ()=>{
    setFlipped([])
    setDisabled(false)
  }
  const sameCardClicked= (id)=>flipped.includes(id);

  const isMatch=(id)=>{
    const clickCard=cards.find(card=>card.id===id);
    const flippedCard=cards.find(card=>flipped[0]===card.id);
    return flippedCard.type===clickCard.type
  }

    const resizeBoard= ()=>{
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ),)
  }
  return (
    <div className="App">
      <h2 className="font">Memorama Lenguaje de Señas</h2>
      <Board
      dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick} 
        disabled={disabled}
        solved={solved}
        finish={finish}
        />
    </div>
  );
}

export default App;
