import React from 'react';
import { useState } from 'react';
import styles from '../css/filter.module.css';
// eslint-disable-next-line no-undef
let classNames = require('classnames');

const filter = (props) => {
    const [filterClass, setFilterClass] = useState(`${styles.filter__hidden}`);
    const [filterVisibility, setFilterVisibility] = useState(false);



    function updateFilter() {
        if (!filterVisibility) {
            setFilterClass(`${styles.filter__open}`);
        } else {
            setFilterClass(`${styles.filter__hidden}`);
        }
        setFilterVisibility((prev) => !prev);
    }

    return (
        <div onClick={updateFilter} className={classNames(styles.button, styles.button_author, styles.btn_text)}>
            {props.filterBlock.parameter}
            <div className={filterClass}>
                <ul className={styles.scroll_items}>
                    <li>Linkin Park</li>
                    <li>Arctic Monkeys</li>
                    <li>Stray Kids</li>
                    <li>Adele</li>
                    <li>Madonna</li>
                    <li>twenty one pilots</li>
                    <li>Taylor Swift</li>
                    <li>BTS</li>
                    <li>Mike Shinoda</li>
                    <li>Michael Jackson</li>    
                    <li>Lady Gaga</li>
                    <li>Chase Atlantic</li>
                    <li>Bring Me the Horizon</li>
                    <li>Grimes</li>    
                </ul> 
            </div>
        </div>
    
    )
}

export default filter;