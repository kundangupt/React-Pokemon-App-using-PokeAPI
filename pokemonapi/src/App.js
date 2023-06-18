import React, { useEffect, useState } from "react";
import Pokomen from "./Component/Pokemon"
import axois from 'axios';

function App() {


 const [num, SetNum] = useState();
 const [name, SetName] = useState();
 const [moves, SetMoves]= useState();

 useEffect(()=>{
    async function getDate(){
      const res= await axois.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      SetName(res.data.name);
      SetNum(res.data.name);
      SetMoves(res.data.name);
    }
    getDate();
    
   
    
 }

 )

  return (
   <>
   <Pokomen name={name} moves={moves} num={num}/>
   </> 
  )
  }
export default App;
