import React from 'react';
import Content from './content';
import Search from './img/icon/search.svg';


const main_center = () => {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
          <img src={Search} className="search__svg"></img>
          <input className="search__text" type="search" placeholder="Поиск" name="search"></input>
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <div className="filter__button button-author _btn-text">исполнителю</div>
          <div className="filter__button button-year _btn-text">году выпуска</div>
          <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
      <Content/>
    </div>
  )
}

export default main_center;