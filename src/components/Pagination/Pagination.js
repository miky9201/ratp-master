import React from 'react';
import './Pagination.css';

const Pagination = ({ shopList, pageLevel, setPageLevel }) => {

      const changePage = (e) => {
            e.preventDefault();
            e.target.id === "prev" ? setPageLevel(--pageLevel) : setPageLevel(++pageLevel)
      }

      return (
            <div className="pagination-container">
                  <button disabled={pageLevel > 1 ? false : true} id="prev" onClick={changePage}>Page Précédente</button>
                  <p>{pageLevel}</p>
                  <button disabled={shopList.length < 10 ? true : false} id="next" onClick={changePage}>Page Suivante</button>
            </div>
      )
}

export default Pagination;