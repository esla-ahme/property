import { nanoid } from 'nanoid'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import 'react-responsive-modal/styles.css';

import HomePage from './Components/HomePage'
import PropertyDetail from './Components/PropertyDetail';
import RecentelyViewed from './Components/ReventelyViewed';

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
      views: 1854,
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
      views: 854,
      price: 350,
      isFavorited: false,
      date: "11/01/2021"
    }
  ])

  const findProperty = (id) => {

    for (let i = 0; i < properties.length; i++) {
      if (properties[i].id === id) {

        return properties[i]

      }
    }
  }

  //Search parmeters
  const [searchParameters, setSearchParameters] = useState([])

  function weeksBetween(d1, d2) {
    console.log(Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000)))
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  const filterProperties = (properties) => {
    const filteredList = []
    for (let i = 0; i < properties.length; i++) {
      let flag = true;
      if (searchParameters.locality && (searchParameters.locality.length !== 0) && !searchParameters.locality.includes(properties[i].locality)) {
        flag = false;
        continue;
      }
      if (searchParameters.added && (Number(searchParameters.added) <= weeksBetween(new Date(Date.parse(properties[i].date)), new Date()))) {
        flag = false;
        continue;
      }
      if (searchParameters.bedrooms && (Number(searchParameters.bedrooms) > properties[i].bedrooms)) {
        flag = false;
        continue;
      }
      if (searchParameters.bathes && (Number(searchParameters.bathes) > properties[i].bathes)) {
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

  //recentel viewed 
  const [recentelyViewed, setRecentelyViewed] = useState([])
  console.log(recentelyViewed)
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/property/:id"
            element={<PropertyDetail findProperty={findProperty} />} />
          <Route path="/"
            element={<HomePage
              properties={properties} setProperties={setProperties}
              filterProperties={filterProperties}
              setSearchParameters={setSearchParameters}
              recentelyViewed={recentelyViewed} setRecentelyViewed={setRecentelyViewed}
            />} />

        </Routes>
        <RecentelyViewed recentelyViewed={recentelyViewed} setRecentelyViewed={setRecentelyViewed} findProperty={findProperty} />
      </Router>
    </div>
  );
}

export default App;
