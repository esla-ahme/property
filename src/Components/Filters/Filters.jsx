/* eslint-disable no-unused-expressions */
import SearchBar from "./SearchBar";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { MdTune } from 'react-icons/md'
import { useState } from "react";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
const Filters = () => {
  const [showFilters, setShowFilters] = useState(false)
  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }
  const [locality, setLocality] = useState(null)
  const [added, setAdded] = useState(null)
  const [bathes, setBathes] = useState(null)
  const [bedroms, setBedrooms] = useState(null)

  return (
    <div className="filters flex-col">
      <div className="flex">
        <SearchBar />
        <button className="filters-btn w-icon" onClick={toggleFilters}><MdTune size="2rem" /><h4>Filters</h4></button>

      </div>
      <div className={`filters-list ${showFilters ? "show" : ""}`}>
        <ButtonGroup role="check" selected={locality} handleValue={setLocality} label="locality" options={["Cairo", "Giza", "Alex"]}></ButtonGroup>
        <ButtonGroup role="radio" label="added" unit="weeks ago" options={[1, 2, 5]}></ButtonGroup>
        <ButtonGroup role="radio" label="bedrooms" unit={"or more"} options={[2, 3, 4, 5]}></ButtonGroup>
        <ButtonGroup role="radio" label="bathes" options={[1, 2, 3]} unit="or more"></ButtonGroup>
        <div className="price">
          <div>Carbet area</div>
          <Range style={{ width: "240px" }} min={50} max={500}
            defaultValue={[50, 500]}
            handleStyle={[{ borderColor: "#001D3E" },
            { borderColor: "#001D3E" }]}
            trackStyle={[{ backgroundColor: "#001D3E" }]}
            marks={{ 50: 50, 100: 100, 200: 200, 400: 400, 500: 500, 300: 300 }}
            allowCross={false} />
        </div>
        <div className="price">
          <div>Price range</div>
          <Range style={{ width: "240px" }} min={100} max={1000}
            dots step={100}
            defaultValue={[100, 1000]}
            dotsStyle={[{ borderColor: "#001D3E" }]}
            handleStyle={[{ borderColor: "#001D3E" },
            { borderColor: "#001D3E" }]}
            trackStyle={[{ backgroundColor: "#001D3E" }]}
            marks={{ 100: 100, 200: 200, 400: 400, 700: 700, 1000: 1000 }}
            allowCross={false} />
        </div>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  )
}

export default Filters;
