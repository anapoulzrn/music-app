/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useState } from 'react';
import Content from './content';
import styles from "../css/main_center.module.css";
import classNames from 'classnames';
import { ThemeContext } from '../context/ThemeContext';
import { useGetAllTracksQuery } from '../redux/musicApi';
import { useDispatch, useSelector } from 'react-redux';
import {  addFilterByAuthor, addFilterByGenre, addFilterByYear, deleteAuthors, deleteGenres } from '../redux/slices/filterSlice';


const main_center = () => {

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
const { data } = useGetAllTracksQuery('');
const dispatch = useDispatch();


const genresRaw = [];
data?.map(({genre}) => genresRaw.push(genre));
const genres = [... new Set(genresRaw)]


const authorsRaw = [];
data?.map(({author}) => authorsRaw.push(author));
const authors = [... new Set(authorsRaw)]


const setAuthorFilter = (e) => {
    if (authors) {
        dispatch(deleteGenres())
        dispatch(deleteAuthors())
        dispatch(addFilterByAuthor(e.target.getAttribute('data-value')))
    }
}

const setGenresFilter = (e) => {
    if (genres) {   
        dispatch(deleteGenres())
        dispatch(deleteAuthors())
        dispatch(addFilterByGenre(e.target.getAttribute('data-value')))
    }
}

const setYearFilter = (e) => {
    dispatch(deleteGenres())
    dispatch(deleteAuthors())
    dispatch(addFilterByYear(e.target.value))
    console.log(e.target)
}


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
                        {authors?.map((author) => <li onClick={setAuthorFilter} data-value={author} key={author}>{author}</li>)}
                    </ul>
                </div> : null}

            </div>
            <div  onClick={() => checkActive('year')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                году выпуска
                {active === 'year' ?
                    <div className={active === 'year' ? styles.years : styles.filter__hidden}>
                            <div className={styles.year_block}>
                                <label className={styles.radio_label} htmlFor="radio1"></label>
                                <input onClick={setYearFilter} 
                                    className={styles.input_year} value='oldest'
                                    id="radio1" name='radio' type="radio" />
                                <label className={styles.radio_label_text} htmlFor="radio1">Более старые</label>

                                <label className={styles.radio_label} htmlFor="radio2"></label>
                                <input onClick={setYearFilter} 
                                    className={styles.input_year}  value='newest' 
                                    id='radio2' name='radio' type="radio" />
                                <label className={styles.radio_label_text} htmlFor="radio2">Более новые</label>
                            </div>
                    </div> : null }

            </div>
            <div  onClick={() => checkActive('genre')} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
                жанру
                {active === 'genre' ? <div className={filterClass}>
                    <ul className={styles.scroll_items}>
                        {genres?.map((genre) => <li onClick={setGenresFilter} data-value={genre} key={genre}>{genre}</li>)}
                    </ul>
                </div> : null}

            </div>
      </div>
      <Content/>
    </div>
  )
}

export default main_center;