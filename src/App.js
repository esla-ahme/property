import './App.css';
import Property from './Components/Property';
import ListofProp from './Components/ListofProp'
import {nanoid} from 'nanoid'
import {useState} from 'react'
function App() {
  const [properties,setProperties] = useState([
    {
    id:nanoid(),
    name:"Amazing apartment in river side",
    area:"Cairo",
    bedrooms:3,
    bathes:2,
    carbetArea:165,
    viewes:1854,
    price:205,
    isFavorited:false
  },
  {
    id:nanoid(),
    name:"Wide Apartment in secure compound",
    area:"Giza",
    bedrooms:5,
    bathes:3,
    carbetArea:205,
    viewes:854,
    price:1250,
    isFavorited:false
  }
  ])
 

  return (
    <div className="App">
    <ListofProp>
      {properties.map(p=><Property k={p.id} property={p}/>)}
    </ListofProp>
    </div>
  );
}

export default App;
