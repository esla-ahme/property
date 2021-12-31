import React from 'react'
import { MdSearch } from 'react-icons/md'
const SearchBar = ({ handleSearchText }) => {

  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input type="text" placeholder='search...' onChange={e => handleSearchText(e.target.value)} />
    </div>
  )
}

export default SearchBar;