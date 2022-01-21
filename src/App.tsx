import {useState} from 'react';
import './App.css';
import AddContent from './components/AddContent';
import List from './components/List';

interface Ippl {
  ppl: {
    name: string,
    age: number,
    urlImg: string,
    note?: string,
    confirmed: boolean

  }[]
}


function App() {


  const [people, setPeople] = useState<Ippl['ppl']>([
    {
     name:'Dio Brando',
     age: 25,
     urlImg: 'https://www.anime-planet.com/images/characters/19367.jpg?t=1587909581',
     note:'peanut allergy',
     confirmed: false 
    },
    {
      name:'Jonathan Joestar',
      age: 22,
      urlImg: 'https://pbs.twimg.com/media/E3-DrGtWYAQv9BQ.jpg',
      confirmed: true 
     },
  ]);


  console.dir(people);
  

  return (
    <div className="App">
      
     <div className='thumb'>
     <h1>JoJo's Birthday's party</h1> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JoJo%27s_Bizarre_Adventure_logo.png/250px-JoJo%27s_Bizarre_Adventure_logo.png"/>
     </div>
     <AddContent/>
      <List dataInvitedPpl={people}/> 
      {/* pessoa é o nome da interface */}
      
    </div>
  );
}

export default App;
