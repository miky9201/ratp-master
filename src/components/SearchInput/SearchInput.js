import React from 'react';
import './SearchInput.css';

const SearchInput = ({ setSearchValue }) => {
      const getInput = (e) => {
            setSearchValue(e.target.value)
      }
      return (
            <div className="search-input-container">
                  <label htmlFor="site-search">Trouvez votre Commerce :</label>
                  <input onChange={getInput} type="search" id="shop-search" name="q" aria-label="Barre de recherche"/>
            </div>
      )
}

export default SearchInput;