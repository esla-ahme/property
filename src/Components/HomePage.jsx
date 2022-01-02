import { nanoid } from 'nanoid'
import { useState } from 'react'

import '../App.css';
import 'react-responsive-modal/styles.css';

import Property from './Property';
import ListofProp from './ListofProp'
import Filters from './Filters/Filters';
import AddProperty from './AddProperty';

import { AiFillPlusCircle } from 'react-icons/ai'
import { Modal } from 'react-responsive-modal';

function HomePage({ properties, setProperties, setSearchParameters, filterProperties, recentelyViewed, setRecentelyViewed }) {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleAddProperty = (property) => {
    const newProperties = [property, ...properties]
    setProperties(newProperties)
  }

  return (
    <div >

      <div className='flex nav' >
        <Filters setSearchParameters={setSearchParameters} />
        <button className="add" onClick={onOpenModal}>
          <AiFillPlusCircle size={"3rem"} />
        </button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Add New Property</h2>
        <AddProperty handleAddProperty={handleAddProperty} close={onCloseModal} />

      </Modal>
      <ListofProp>
        {filterProperties(properties).map(p => <Property k={p.id} property={p} recentelyViewed={recentelyViewed} setRecentelyViewed={setRecentelyViewed} />)}
      </ListofProp>
    </div>
  )
}

export default HomePage;
