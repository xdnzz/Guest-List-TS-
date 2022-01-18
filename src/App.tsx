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


  const [people, setPeople] = useState<Ippl['people']>([]);

  

  return (
    <div className="App">
      <h1>This I gotta do</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
