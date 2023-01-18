import React from 'react';

import './App.css';
import { useState, useRef ,useEffect } from 'react';

import List from './components/List'
import Form from './components/Form'
import {Sub} from './types';


const INITIAL_STATE =[
{
  nick: 'Lolupo',
  subMonths: 3,
  avatar:'https://i.pravatar.cc/150?u=Lolupo',
  description:'Lolupo es moderador '
},
{
  nick: 'Lola_Montes',
  subMonths: 7,
  avatar:'https://i.pravatar.cc/150?u=Lola_montes',
  
}]
interface AppState {
  subs: Array<Sub>,
  newSubs: number
}


function App() {
  const [subs, setSubs] = useState <AppState['subs']> ([
 
  ]) 
  // <number string> antes del () lo convertirian en un tipo dinamico.
  
  const [newSubs, setnewSubs] = useState <AppState['newSubs']>(0) 

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=> setSubs(INITIAL_STATE),[])

  const handleNewSub = (newSubs: Sub): void =>{
    setSubs(subs => [...subs, newSubs])
  }

  return (
    <div className="App" ref={divRef}>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
   </div>
  );
}

export default App;
