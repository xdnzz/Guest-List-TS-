import {useState} from 'react';
import './App.css';
import List from './components/List';

interface Ippl {
  people: {
    name: string,
    age: number,
    urlImg: string,
    note?: string,
    confirmed: boolean

  }[]
}


function App() {


  const [people, setPeople] = useState<Ippl['people']>([
    {
     name:'danilo',
     age: 25,
     urlImg: 'https://ovicio.com.br/wp-content/uploads/diobrando.jpg',
     note:'qpowekqwe',
     confirmed: true 
    }
  ]);

  

  return (
    <div className="App">
      <h1>This I gotta do</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
