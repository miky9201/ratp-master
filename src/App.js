import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.png';

import Table from './components/Table/Table';
import SearchInput from './components/SearchInput/SearchInput';
import Pagination from './components/Pagination/Pagination';

const App = () => {
      const [shopList, setShopList] = useState([]); // List of shops get from the Fetch API Call
      const [searchValue, setSearchValue] = useState("");
      const [pageLevel, setPageLevel] = useState(1);

      return (
            <div className="app-container">
                  <a href="./"><img src={logo} width="50px" alt="logo ratp"/></a>
                  <SearchInput setSearchValue={setSearchValue}/>
                  <Table 
                        shopList={shopList} 
                        setShopList={setShopList} 
                        searchValue={searchValue} 
                        pageLevel={pageLevel} 
                        setPageLevel={setPageLevel}
                  />
                  <Pagination 
                        shopList={shopList} 
                        pageLevel={pageLevel} 
                        setPageLevel={setPageLevel}
                  />
            </div>
      )
}

export default App;
