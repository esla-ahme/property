import { GoLocation } from 'react-icons/go/'
import { FaDollarSign } from 'react-icons/fa'
import { BiBed, BiBath } from 'react-icons/bi'
import { MdSquareFoot } from 'react-icons/md'

import { AiOutlineEye, AiOutlineStar } from 'react-icons/ai'


import thumpnail from '../assets/temp.jpg'

function Property({ property, }) {
  return (
    <div className="property ">
      <img className='prop-img' src={thumpnail} alt="property" />
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
          <div className="favorite w-icon">  <AiOutlineStar /></div>
        </div>
      </div>
    </div>
  );
}

export default Property;
