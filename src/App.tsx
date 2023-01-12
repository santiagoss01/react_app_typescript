import React from 'react';

import './App.css';
import { useState, useEffect } from 'react';

interface Sub{
  nick:string,
  subMonths:number,
  avatar:string,
  description?:string,

}
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
  subs: Array<Sub>
}


function App() {
  const [subs, setSubs] = useState <AppState['subs']> ([
 
  ]) // <number string> antes del () lo convertirian en un tipo dinamico.
  useEffect(()=> setSubs(INITIAL_STATE),[])

  return (
    <div className="App">
      <h1>Mis subs</h1>
      <ul>
        {
          subs.map(sub =>{
            return(
              <li key={sub.nick}>
                <img src={sub.avatar} alt = {`Avatar for ${sub.nick}`}/>
                <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
          </li>
            )
          })
        }

      </ul>
   

    </div>
  );
}

export default App;
