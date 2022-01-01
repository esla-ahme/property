import './App.css';
import Property from './Components/Property';
import ListofProp from './Components/ListofProp'
import Filters from './Components/Filters/Filters';
import AddProperty from './Components/AddProperty';

import { nanoid } from 'nanoid'
import { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
function App() {
  //properties
  const [properties, setProperties] = useState([
    {
      id: nanoid(),
      name: "Amazing apartment in river side",
      locality: "Cairo",
      bedrooms: 3,
      bathes: 2,
      carbetArea: 165,
      viewes: 1854,
      price: 205,
      isFavorited: false,
      date: "12/15/2021"
    },
    {
      id: nanoid(),
      name: "Wide Apartment in secure compound",
      locality: "Giza",
      bedrooms: 5,
      bathes: 3,
      carbetArea: 205,
      viewes: 854,
      price: 350,
      isFavorited: false,
      date: "11/01/2021"
    }
  ])

  //Search parmeters
  const [searchParameters, setSearchParameters] = useState({})
  function weeksBetween(d1, d2) {
    console.log(Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000)))
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  const filterProperties = (properties) => {
    const filteredList = []
    console.log(searchParameters)
    for (let i = 0; i < properties.length; i++) {
      let flag = true;
      if (searchParameters.locality && !searchParameters.locality.includes(properties[i].locality)) {
        flag = false;
        continue;
      }
      if (searchParameters.added && (Number(searchParameters.added) <= weeksBetween(new Date(Date.parse(properties[i].date)), new Date()))) {
        flag = false;
        continue;
      }
      if (searchParameters.bedrooms && (Number(searchParameters.bedrooms) >= properties[i].bedrooms)) {
        flag = false;
        continue;
      }
      if (searchParameters.bathes && (Number(searchParameters.bathes) >= properties[i].bathes)) {
        flag = false;
        continue;
      }
      if (searchParameters.carbetRange
        && ((Number(searchParameters.carbetRange[0]) >= properties[i].carbetArea)
          || (Number(searchParameters.carbetRange[1]) <= properties[i].carbetArea))) {
        flag = false;
        continue;
      }
      if (searchParameters.price
        && ((Number(searchParameters.price[0]) >= properties[i].price)
          || (Number(searchParameters.price[1]) <= properties[i].price))) {
        flag = false;
        continue;
      }

      flag && filteredList.push(properties[i])
    }
    return filteredList
  }

  //add Propery
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleAddProperty = (property) => {
    const newProperties = [property, ...properties]
    setProperties(newProperties)
  }
  return (
    <div className="App">

      <div className='flex'><Filters setSearchParameters={setSearchParameters} />
        <button className="add" onClick={onOpenModal}>add property</button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Add New Property</h2>
        <AddProperty handleAddProperty={handleAddProperty} />

      </Modal>
      <ListofProp>
        {filterProperties(properties).map(p => <Property k={p.id} property={p} />)}
      </ListofProp>
    </div>
  );
}

export default App;
