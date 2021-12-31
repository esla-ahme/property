import './buttonGroup.css'
const ButtonGroup = ({ role, label, options, unit, selected, handleValue }) => {

  const radioHandler = (e) => {
    if (selected == null) {
      //if no filter applied
      handleValue(e.target.textContent)
    } else {
      //add to already existed filters (remove)
      selected === e.target.textContent ? handleValue(null)
        : handleValue(e.target.textContent)
    }
  }
  const checkHandler = (e) => {
    //handle button group as check boxes
    if (selected == null) {
      //if no filter applied
      handleValue([e.target.textContent])
    } else {
      //add to already existed filters (remove)
      const newSelected = selected
      const index = newSelected?.indexOf(e.target.textContent)
      index === -1 ? newSelected?.push(e.target.textContent)
        : newSelected?.splice(index, 1)
      handleValue([...newSelected])
    }
  }
  return (
    <div className="btn-group flex">
      <div>{label}:</div>
      <div className='options flex'>
        {
          role === 'check' ?
            options.map(option =>
              <button key={label + option} className={`option ${selected?.includes(option) ? "selected" : ""} `}
                onClick={checkHandler}>
                {option}</button>)
            :
            options.map(option =>
              <button key={label + option} className={`option  ${selected === option ? "selected" : ""}`}
                onClick={radioHandler}>
                {option}</button>)
        }</div>
      {unit && <div>{unit}</div>}

    </div>
  )
}

export default ButtonGroup;
