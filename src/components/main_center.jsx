import React, { useContext } from 'react';
import { useState } from 'react';
import Content from './content';
import styles from "../css/main_center.module.css";
import classNames from 'classnames';
import { ThemeContext } from '../context/ThemeContext';



const main_center = () => {

  const artists = ["Linkin Park", "Stray Kids", "Arctic Monkeys", "twenty one pilots", "Michael Jackson", "Nirvana", "Sting", "Adele", "Grimes"]
  
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

const theme = useContext(ThemeContext);

  return (
    <div className={classNames(styles.main__centerblock, styles.centerblock)}>
      <div className={classNames(styles.center__search, styles.search)}>
        { theme.theme === 'dark' ? 
            <svg className={styles.search__svg} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.67139 10.7749L13.1137 15.0645" stroke="white" strokeLinecap="round"/>
                <circle cx="6.22874" cy="6.48526" r="5.5" transform="rotate(-38.7469 6.22874 6.48526)" stroke="white"/>
            </svg> :
            <svg className={styles.search__svg} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.92773 10.7744L13.3701 15.064" stroke="black" strokeLinecap="round"/>
                <circle cx="6.48509" cy="6.48477" r="5.5" transform="rotate(-38.7469 6.48509 6.48477)" stroke="black"/>
            </svg>}

          <input className={styles.search__text} type="search" placeholder="Поиск" name="search"></input>
      </div>
      <h2 className={styles.h2}>Треки</h2>

      <div className={classNames(styles.center__filter, styles.filter)}>
        <div className={styles.filter__title}>Искать по:</div>
            <div onClick={() => checkActive('artist')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                исполнителю
                {active === 'artist' ? <div className={filterClass}>
                    <ul className={styles.scroll_items}>
                        {artists.map(artist => <li key={artist}>{artist}</li>)}
                    </ul>
                </div> : null}

            </div>
            <div  onClick={() => checkActive('year')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                году выпуска
                {active === 'year' ?
                    <div className={active === 'year' ? styles.years : styles.filter__hidden}>
                            <div className={styles.year_block}>
                                <input className={styles.input_year1} id="radio1" name='radio' type="radio" />
                                <label className={styles.radio_label} htmlFor="radio1"></label>
                                <label className={styles.radio_label_text} htmlFor="radio1">Более старые</label>

                                <input className={styles.input_year2}  id='radio2' name='radio' type="radio" />
                                <label className={styles.radio_label} htmlFor="radio2"></label>
                                <label className={styles.radio_label_text} htmlFor="radio2">Более новые</label>
                            </div>
                    </div> : null }

            </div>
            <div  onClick={() => checkActive('genre')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                жанру
                {active === 'genre' ? <div className={filterClass}>
                    <ul className={styles.scroll_items}>
                        {genres.map(genre => <li key={genre}>{genre}</li>)}
                    </ul>
                </div> : null}

            </div>
      </div>
      <Content/>
    </div>
  )
}

export default main_center;