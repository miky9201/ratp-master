import React, { useState, useEffect } from 'react';
import './Table.css';

import { callApi } from '../../utils/callApi';

const Table = ({ shopList, setShopList, searchValue, pageLevel, setPageLevel }) => {

      const [isAscendingSort, setIsAscendingSort] = useState(true);

      useEffect(() => {
            callApi(setShopList, searchValue, pageLevel, isAscendingSort)
      }, [setShopList, searchValue, pageLevel, isAscendingSort])

      useEffect(() => {
            setPageLevel(1) // Coming back to the first page of the search
      }, [searchValue, setPageLevel])

      const handleClick = () => {
            setIsAscendingSort(!isAscendingSort)
      }

      return (
            <div className="table-container">
                  <div className="array-line heading">
                        <div className="case">Nom</div>
                        <div className="case">Adresse</div>
                        <button className="case heading" onClick={handleClick}>
                              Code Postal {isAscendingSort ? "↑" : "↓"}
                        </button>
                        <div className="case">Ville</div>
                  </div>
                  {shopList.map((shopDatas, i) => {
                        return (
                              <div key={i} className="array-line">
                                    <div className="case">{shopDatas.libelle}</div>
                                    <div className="case">{shopDatas.address}</div>
                                    <div className="case">{shopDatas.cp}</div>
                                    <div className="case">{shopDatas.city}</div>
                              </div>
                        )
                  })}
            </div>
      )
}

export default Table;