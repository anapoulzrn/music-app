import React from 'react';
// import { useState } from 'react';
import Content from './content';
import Search from './img/icon/search.svg';
import Filter from './filter';


const main_center = () => {

  const filterBlocks = [
    {id: "1", parameter: "исполнителю"},
    {id: "2", parameter: "году выпуска"},
    {id: "3", parameter: "жанру"}
  ]

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
          <img src={Search} className="search__svg"></img>
          <input className="search__text" type="search" placeholder="Поиск" name="search"></input>
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
          {filterBlocks.map(filterBlock => <Filter filterBlock={filterBlock} key={filterBlock.id} />)}
      </div>
      
      <Content/>
    </div>
  )
}

export default main_center;