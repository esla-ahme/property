import { GoLocation } from 'react-icons/go/'
import { FaDollarSign } from 'react-icons/fa'
import { BiBed, BiBath, BiArrowBack } from 'react-icons/bi'
import { MdSquareFoot } from 'react-icons/md'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineStar, AiFillStar } from 'react-icons/ai'
import SimpleImageSlider from "react-simple-image-slider";


import thumbnail from '../assets/temp.jpg'

import {
  useParams, Link
} from "react-router-dom";


function PropertyDetail({ findProperty }) {
  let { id } = useParams();

  const property = findProperty(id)
  const [favorited, setFavorited] = useState(property.isFavorited)

  const handleFavorite = (e) => {
    property.isFavorited = !property.isFavorited;
    setFavorited(!favorited)
    e.stopPropagation()
  }

  return (
    <div className="prop-detail">
      <div style={{ position: "fixed", left: 0, marginLeft: "10px", }}><Link to="/"><BiArrowBack size="1.5em" /></Link></div>
      {
        property.images ?
          <SimpleImageSlider
            width={"80vw"}
            height={300}
            images={property.images.map(i => { return { url: i.data_url } })}
            showBullets={true}
            showNavs={true}
          />
          : <img className='prop-img' src={property.thumbnail?.data_url || thumbnail} alt="property" />
      } <div className='prop-details flex-col'>

        <h3 className='prop-name'>{property.name}</h3>
        <small>Added: {property.date}</small>
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
            {favorited ? <AiFillStar /> : <AiOutlineStar />} </div>

        </div>
      </div>
    </div >
  )
}

export default PropertyDetail;
