import React from 'react';
import { useState } from 'react';

const filter = (props) => {
    const [filterClass, setFilterClass] = useState('filter__hidden');
    const [filterVisibility, setFilterVisibility] = useState(false);

    let filterButton = document.querySelector('.filter__open');

    function clearFilter() {
        if (filterButton) {
            filterButton.classList.remove('filter__open');
            filterButton.classList.add('filter__hidden');
        }
    }

    clearFilter();

    function updateFilter() {
        if (!filterVisibility) {
            setFilterClass('filter__open');
        } else {
            setFilterClass('filter__hidden');
        }
        setFilterVisibility(!filterVisibility);
    }

    return (
        <div onClick={updateFilter} className="filter__button button-author _btn-text">
            {props.filterBlock.parameter}
            <div className={filterClass}>
                <ul className="filter__scroll_items">
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