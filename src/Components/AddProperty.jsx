import { useState } from 'react'
function AddProperty({ handleAddProperty }) {
  const [locality, setLocality] = useState(null)
  const [name, setName] = useState(null)
  const [bedrooms, setBedrooms] = useState(null)
  const addProperty = (e) => {
    const property = {
      name,
      locality,
      bedrooms
    }
    handleAddProperty(property)
  }
  return (

    <form onSubmit={(e) => { e.preventDefault() }}>
      <label>name</label> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <label>locality</label> <input type="text" value={locality} onChange={(e) => setLocality(e.target.value)} /> <br />
      <label>bedrooms</label> <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} /> <br />
      <button onClick={addProperty}>Add</button>
    </form>
  )
}

export default AddProperty;
