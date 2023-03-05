import React from 'react';
import { useState } from 'react';
import Content from './content';
import Search from './img/icon/search.svg';
// import Filter from './filter';
import styles from "../css/main_center.module.css";
import classNames from 'classnames';



const main_center = () => {

  const artists = ["Linkin Park", "Stray Kids", "Arctic Monkeys", "twenty one pilots", "Michael Jackson", "Nirvana", "Sting", "Adele", "Grimes"]

  const years = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2011", "2012"]
  
  const  genres = ["Rock","Pop", "K-Pop", "Classic", "Hip-Hop", "RNB", "Electronic", "Country", "Jazz", "Folk"]


const [active, setActive] = useState('');

const [filterClass, setFilterClass] = useState(`${styles.filter__hidden}`);


function checkActive(option) {
    if (active === option) {
        setActive('');
        setFilterClass(`${styles.filter__hidden}`)
    } else {
        setFilterClass(`${styles.filter__open}`)
    }
    setActive(option)
}

  return (
    <div className={classNames(styles.main__centerblock, styles.centerblock)}>
      <div className={classNames(styles.center__search, styles.search)}>
          <img src={Search} className={styles.search__svg}></img>
          <input className={styles.search__text} type="search" placeholder="Поиск" name="search"></input>
      </div>
      <h2 className={styles.h2}>Треки</h2>

      <div className={classNames(styles.center__filter, styles.filter)}>
        <div className={styles.filter__title}>Искать по:</div>
            <div onClick={() => checkActive('artist')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                исполнителю
                {active === 'artist' ? <div className={filterClass}>
                    <ul className={styles.scroll_items}>
                        {artists.map(artist => <li key={1}>{artist}</li>)}
                    </ul>
                </div> : null}

            </div>
            <div  onClick={() => checkActive('year')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                году выпуска
                {active === 'year' ? <div className={filterClass}>
                    <ul className={styles.scroll_items}>
                        {years.map(year => <li key={2}>{year}</li>)}
                    </ul>
                </div> : null}

            </div>
            <div  onClick={() => checkActive('genre')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                жанру
                {active === 'genre' ? <div className={filterClass}>
                    <ul className={styles.scroll_items}>
                        {genres.map(genre => <li key={3}>{genre}</li>)}
                    </ul>
                </div> : null}

            </div>
      </div>
      <Content/>
    </div>
  )
}

export default main_center;