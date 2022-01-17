import {useState} from 'react';
import { Interface } from 'readline';
import './App.css';


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


  const [people, setPeople] = useState<Ippl['ppl']>([]);

  

  return (
    <div className="App">
      <h1>This I gotta do</h1>
    </div>
  );
}

export default App;
