import './buttonGroup.css'
const ButtonGroup = ({ role, label, options, unit, selected, handleValue }) => {

  const radioHandler = (e) => {
    const alreadySelected = e.target.classList.contains('selected')
    const children = e.target.parentNode.children
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('selected')
    }
    alreadySelected || e.target.classList.add('selected')
  }
  const checkHandler = (e) => {
    if (selected === null) {
      handleValue([e.target.value])
      return
    }
    const newSelected = selected
    const index = newSelected.indexOf(e.target.value)
    index === -1 ? newSelected.push(e.target.value) : newSelected.splice(index, 1)
    handleValue(newSelected)
  }
  return (
    <div className="btn-group flex">
      <div>{label}:</div>
      <div className='options flex'>
        {
          role === 'check' ?
            options.map(option =>
              <button key={option} className={`option ${selected?.includes("option") ? "selected" : ""} `}
                onClick={checkHandler}>
                {option}</button>)
            :
            options.map(option =>
              <button key={option} className={`option  ${selected && selected === "option" ? "selected" : ""}`}
                onClick={radioHandler}>
                {option}</button>)
        }</div>
      {unit && <div>{unit}</div>}

    </div>
  )
}

export default ButtonGroup;
