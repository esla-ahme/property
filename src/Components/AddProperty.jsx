import { useState } from 'react'
import ImageUploading from "react-images-uploading";
import { BsTrash } from "react-icons/bs"
import { FaThumbsUp } from "react-icons/fa"
import { nanoid } from 'nanoid'

function AddProperty({ handleAddProperty, close }) {
  const [locality, setLocality] = useState(null)
  const [name, setName] = useState(null)
  const [bedrooms, setBedrooms] = useState(null)
  const [bathes, setBathes] = useState(null)
  const [carbetArea, setCarbetArea] = useState(null)
  const [price, setPrice] = useState(null)


  //images 
  const [images, setImages] = useState([]);
  const [thumbnail, setThumbnail] = useState(0);

  const maxNumber = 5;
  const onAddImage = (imageList) => {
    // data for submit
    setImages(imageList);
  };
  const selectThumbnail = (e, index) => {
    e.preventDefault()
    setThumbnail(index)
  }

  const addProperty = (e) => {
    const property = {
      id: nanoid(),
      name,
      locality,
      bedrooms,
      bathes,
      carbetArea,
      price,
      date: new Date().toLocaleDateString(),
      images,
      thumbnail: images[thumbnail],
      isFavorited: false,
      views: 0
    }
    handleAddProperty(property)
    close()
  }
  return (

    <form className='add-form' onSubmit={(e) => { e.preventDefault() }}>

      <ImageUploading
        multiple
        value={images}
        onChange={onAddImage}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div className='uploading-area'
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here <br /> up to 5 images
            </div>
            <div className='images-list'>{imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="80" height="80" />
                <div className="image-item-btns">
                  <button onClick={() => onImageRemove(index)}><BsTrash /></button>
                  <button onClick={(e) => selectThumbnail(e, index)}><FaThumbsUp /></button>
                </div>
              </div>
            ))}</div>
          </div>
        )}
      </ImageUploading>
      <div>
        <label>name</label> <input type="text" value={name} required onChange={(e) => setName(e.target.value)} /> <br />
      </div>
      <div>
        <label>locality</label> <input type="text" required value={locality} onChange={(e) => setLocality(e.target.value)} /> <br />
      </div>
      <div>
        <label>bedrooms</label> <input type="number" required min={2} max={12} value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} /> <br />
      </div>
      <div>
        <label>bathes</label> <input type="number" required min={1} max={6} value={bathes} onChange={(e) => setBathes(e.target.value)} /> <br />
      </div>
      <div>
        <label>carbet area</label> <input type="number" required min={50} max={400} value={carbetArea} onChange={(e) => setCarbetArea(e.target.value)} /> <span>sq.m</span><br />
      </div>
      <div>
        <label>price</label> <input type="number" required min={100} max={1000} value={price} onChange={(e) => setPrice(e.target.value)} /> <span>k</span><br />
      </div>
      <button className='add-submit-btn' onClick={addProperty}>Add</button>
    </form>
  )
}

export default AddProperty;
