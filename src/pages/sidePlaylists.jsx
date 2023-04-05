import React from 'react';
import '../css/style.css';
import styles from '../css/sidePlaylists.module.css';
import Main_nav from '../components/main_nav';
import Player from '../components/player';
import Volume from '../components/volume';
import Watch from '../components/img/icon/watch.svg';
import Playlist_item from '../components/playlist_item';
import classNames from 'classnames';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import formatDuration from '../utils/formatDuration';
import { useGetPlaylistByIdQuery } from '../redux/musicApi';
import { useSelector } from 'react-redux';

const sidePlaylist = () => {
    const theme = useContext(ThemeContext);
    const playlistId = useSelector((state) => state.playlist.id);
    const playlistName = useSelector((state) => state.playlist.name);
    const { data, isSuccess } = useGetPlaylistByIdQuery(playlistId);

    console.log(playlistId);
    console.log(playlistName);

    if (isSuccess) {
        return (
            <div className={classNames(styles.app, styles.container)}>
                <SkeletonTheme
                    baseColor={theme.theme === 'light' ? '#D9D9D9' : '#202020'}
                    highlightColor={theme.theme === 'light' ? '#fff' : '#444'}
                >
                    <div className={styles.main}>
                        <Main_nav />
                        <div
                            className={classNames(
                                styles.main__centerblock,
                                styles.centerblock
                            )}
                        >
                            <div
                                className={classNames(
                                    styles.center__search,
                                    styles.search
                                )}
                            >
                                {theme.theme === 'dark' ? (
                                    <svg
                                        className={styles.search__svg}
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.67139 10.7749L13.1137 15.0645"
                                            stroke="white"
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx="6.22874"
                                            cy="6.48526"
                                            r="5.5"
                                            transform="rotate(-38.7469 6.22874 6.48526)"
                                            stroke="white"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className={styles.search__svg}
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.92773 10.7744L13.3701 15.064"
                                            stroke="black"
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx="6.48509"
                                            cy="6.48477"
                                            r="5.5"
                                            transform="rotate(-38.7469 6.48509 6.48477)"
                                            stroke="black"
                                        />
                                    </svg>
                                )}
                                <input
                                    className={styles.search__text}
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                ></input>
                            </div>
                            <h2 className={styles.h2}>{playlistName}</h2>

                            <div className={styles.content}>
                                <div
                                    className={classNames(
                                        styles.title,
                                        styles.playlist_title
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            styles.title__col,
                                            styles.col01
                                        )}
                                    >
                                        Трек
                                    </div>
                                    <div
                                        className={classNames(
                                            styles.title__col,
                                            styles.col02
                                        )}
                                    >
                                        ИСПОЛНИТЕЛЬ
                                    </div>
                                    <div
                                        className={classNames(
                                            styles.title__col,
                                            styles.col03
                                        )}
                                    >
                                        АЛЬБОМ
                                    </div>
                                    <div
                                        className={classNames(
                                            styles.title__col,
                                            styles.col04
                                        )}
                                    >
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
                                    {data.items?.map(
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
                        </div>
                    </div>
                    <div className={styles.bar}>
                        <div className={styles.content}>
                            <div className={styles.player_progress}></div>
                            <div className={styles.player_block}>
                                <Player />
                                <Volume />
                            </div>
                        </div>
                    </div>
                    <footer className={styles.footer}></footer>
                </SkeletonTheme>
            </div>
        );
    }
};

export default sidePlaylist;
