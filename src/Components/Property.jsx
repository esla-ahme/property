import { GoLocation } from 'react-icons/go/'
import { FaDollarSign } from 'react-icons/fa'
import { BiBed, BiBath } from 'react-icons/bi'
import { MdSquareFoot } from 'react-icons/md'

import { AiOutlineEye, AiOutlineStar, AiFillStar } from 'react-icons/ai'


import thumbnail from '../assets/temp.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Property({ property, recentelyViewed, setRecentelyViewed }) {
  const [favorited, setFavorited] = useState(property.isFavorited)
  const hist = useNavigate()
  const handlClick = () => {
    hist(`/property/${property.id}`)
    property.views += 1
    const len = recentelyViewed.length
    let rvList
    if (len >= 5) {
      rvList = recentelyViewed.slice(0, 4)
    }
    else {
      rvList = recentelyViewed.slice()
    }
    let index = rvList.indexOf(property.id)
    if (index !== -1) {
      rvList.splice(index, 1)
    }
    rvList?.unshift(property.id)
    console.log(rvList)
    setRecentelyViewed(rvList)
  }

  const handleFavorite = (e) => {
    property.isFavorited = !property.isFavorited;
    setFavorited(!favorited)



    e.stopPropagation()
  }

  return (
    <div className="property " onClick={handlClick}>
      <img className='prop-img' src={property.thumbnail?.data_url || thumbnail} alt="property" />
      <div className='prop-details flex-col'>

        <h3 className='prop-name'>{property.name}</h3>
        <div className='prop-locality w-icon'><GoLocation /> <span> {property.locality}</span></div>
        <div className='prop-feature flex'>
          <div className="w-icon"> <span>{property.bedrooms}</span> <BiBed /></div>
          <div className="w-icon"> <span>{property.bathes}</span> <BiBath /></div>
          <div className="w-icon"> <span>{property.carbetArea} sq.m</span> <MdSquareFoot /></div>

        </div>
        <div className='w-icon'><FaDollarSign /><h4>{property.price} k</h4></div>
        <div className='prop-feature flex'>
          <div className="w-icon"> <span>{property.views}</span> <AiOutlineEye /></div>
          <div className="favorite w-icon"
            onClick={handleFavorite}>
            {favorited ? <span><AiFillStar /></span> : <AiOutlineStar />} </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
