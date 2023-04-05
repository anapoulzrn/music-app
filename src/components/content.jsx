/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Playlist_item from './playlist_item';
import Watch from './img/icon/watch.svg';
import classNames from 'classnames';
import styles from '../css/content.module.css';
import { useGetAllTracksQuery } from '../redux/musicApi';
import { useDispatch, useSelector } from 'react-redux';
import formatDuration from '../utils/formatDuration';
import { getTracksId } from '../redux/slices/playerSlice';
import { getAuthors, getGenres } from '../redux/slices/filterSlice';
import filterByYear from '../utils/filterByYear';

const content = () => {
    const dispatch = useDispatch();
    const { data, isSuccess } = useGetAllTracksQuery('');

    const filterValue = useSelector((state) => state.filter.filterYearValue);
    const authorsValue = useSelector(
        (state) => state.filter.filterAuthorsValue
    );
    const genresValue = useSelector((state) => state.filter.filterGenresValue);

    useEffect(() => {
        if (isSuccess) {
            data?.map((track) => dispatch(getTracksId(track.id)));
            data?.map((track) => dispatch(getGenres(track.genre)));
            data?.map((track) => dispatch(getAuthors(track.author)));
        }
    }, [data]);

    return (
        <div className={styles.content}>
            <div className={classNames(styles.title, styles.playlist_title)}>
                <div className={classNames(styles.title__col, styles.col01)}>
                    Трек
                </div>
                <div className={classNames(styles.title__col, styles.col02)}>
                    ИСПОЛНИТЕЛЬ
                </div>
                <div className={classNames(styles.title__col, styles.col03)}>
                    АЛЬБОМ
                </div>
                <div className={classNames(styles.title__col, styles.col04)}>
                    <img
                        src={Watch}
                        className={styles.title__svg}
                        alt="time"
                    ></img>
                </div>
            </div>
            <div
                className={classNames(
                    styles.content__playlist,
                    styles.playlist
                )}
            >
                {data
                    ?.filter(({ author }) =>
                        authorsValue.length
                            ? authorsValue.includes(author)
                            : author
                    )
                    ?.filter(({ genre }) =>
                        genresValue.length ? genresValue.includes(genre) : genre
                    )
                    .sort((a, b) => filterByYear(a, b, filterValue))
                    ?.map(
                        ({
                            id,
                            name,
                            author,
                            album,
                            track_file,
                            duration_in_seconds,
                        }) => (
                            <Playlist_item
                                key={id}
                                id={id}
                                trackTitleLink={track_file}
                                trackName={name}
                                trackAuthor={author}
                                trackAlbum={album}
                                trackDuration={formatDuration(
                                    duration_in_seconds
                                )}
                            />
                        )
                    )}
            </div>
        </div>
    );
};

export default content;
