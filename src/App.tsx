import {useState} from 'react';
import './App.css';
import AddToList from './components/AddContent';
import List from './components/List';

export interface Ippl {
  ppl: {
    name: string,
    age: number,
    url: string,
    note?: string,
    confirmed?: boolean

  }[]
}


function App() {


  const [people, setPeople] = useState<Ippl['ppl']>([
    {
     name:'Dio Brando',
     age: 25,
     url: 'https://www.anime-planet.com/images/characters/19367.jpg?t=1587909581',
     note:'peanut allergy',
     confirmed: false 
    }

  ]);


  

  return (
    <div className="App">
      
     <div className='thumb'>
     <h1>JoJo's Birthday's party</h1> <img alt="foto convidado" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JoJo%27s_Bizarre_Adventure_logo.png/250px-JoJo%27s_Bizarre_Adventure_logo.png"/>
     </div>
     <AddToList people={people} setPeople={setPeople}/>
      <List dataInvitedPpl={people} /> 
      
      {/* pessoa é o nome da interface */}
      
    </div>
  );
}

export default App;
