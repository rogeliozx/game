import React from "react";
import PropTypes from 'prop-types';
import Card from '../Card';
import './board.css'
 export default function Board({
     disabled, 
     dimension,
     cards,
      flipped ,
      handleClick,
    solved,
    finish,
    }){
        if(finish!=true){

     return <div className="board">
 {
    
     cards.map((card) =>(
         
     <Card
     key={card.id}
        id={card.id}
        width={dimension/3}
        height={dimension/3}
        flipped={flipped.includes(card.id)}
        handleClick={handleClick}
        disabled={disabled || solved.includes(card.id)}
        type={card.type}
        solved={solved.includes(card.id)}
        />))
 }
 
 
     </div>
 }if(finish===true){
     return <div>
        <img src="/img/finish.gif" alt="finish" />
     </div>
 }
 
}
 Board.propTypes={
    disabled:PropTypes.bool.isRequired,
    finish:PropTypes.bool.isRequired,
     dimension:PropTypes.number.isRequired,
     cards:PropTypes.arrayOf(PropTypes.shape({})).isRequired,
     flipped:PropTypes.arrayOf(PropTypes.number).isRequired,
     solved:PropTypes.arrayOf(PropTypes.number).isRequired,
     handleClick:PropTypes.func.isRequired,
 }