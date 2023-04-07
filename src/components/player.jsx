/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Note from './img/icon/note.svg';
import Prev from './img/icon/prev.svg';
import Play from './img/icon/play.svg';
import Pause from './img/icon/pause.png';
import Next from './img/icon/next.svg';
import classNames from 'classnames';
import styles from '../css/player.module.css';
import {
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
    useGetTrackByIdQuery,
} from '../redux/musicApi';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentTrack,
    getTrackId,
    play,
    playNextTrack,
    playPrevTrack,
    repeatTrack,
    setTime,
    shuffleTracks,
    sortTracks,
} from '../redux/slices/playerSlice';

const player = () => {
    const dispatch = useDispatch();
    const trackId = useSelector((state) => state.player.id);
    const trackIds = useSelector((state) => state.player.ids);

    const isPlaying = useSelector((state) => state.player.isPlaying)


    const isShuffle = useSelector((state) => state.player.isShuffle);
    const isRepeat = useSelector((state) => state.player.isRepeat);
    const volumeValue = useSelector((state) => state.player.volume);
    const trackSrc = useSelector((state) => state.player.currentTrackLink);

    const { data } = useGetTrackByIdQuery(trackId);

    useEffect(() => {
        dispatch(getCurrentTrack(data?.track_file));
    }, [data]);


    const [loading, setLoading] = useState(true);
    const [currentSong, setCurrentSong] = useState(trackSrc);
    const audioRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const togglePlay = () => {
        dispatch(play(!isPlaying));
    };


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const onKeyPress = (e) => {
            if (e.keyCode === 32) {
                dispatch(play(!isPlaying));
            }
        };
        document.addEventListener('keypress', onKeyPress);
        return () => {
            document.removeEventListener('keypress', onKeyPress);
        };
    }, [isPlaying]);

    const prevTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId);
        if (!currentTrack) {
            dispatch(getTrackId(trackIds[0]));
            return;
        }
        dispatch(playPrevTrack(currentTrack));
    };

    const nextTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId);
        if (currentTrack + 1 === trackIds.length) {
            dispatch(getTrackId(trackIds[0]));
            return;
        }
        dispatch(playNextTrack(currentTrack));
        dispatch(play(isPlaying));
            audioRef.current.play();
        
    };

    const repeatSong = () => {
        audioRef.current.loop = true;
        dispatch(repeatTrack());
    };

    const shuffleSong = () => {
        if (isShuffle) {
            dispatch(sortTracks());
        } else {
            dispatch(shuffleTracks());
        }
    };

    const [addTrack, { isError, error }] = useAddFavoriteTrackMutation();
    const [deleteTrack, { isError: isDeleteError, error: deleteError }] =
        useDeleteFavoriteTrackMutation();

    const addFavorite = () => {
        addTrack(trackId);
    };

    const deleteFavorite = () => {
        deleteTrack(trackId);
    };

    if (isError) {
        console.log(error);
    }

    if (isDeleteError) {
        console.log(deleteError);
    }

    const onPlaying = () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        setCurrentSong({
            progress: (currentTime / duration) * 100,
            length: duration,
        });
        audioRef.current.volume = volumeValue;
        dispatch(setTime(currentSong.progress));

        if (audioRef.current.currentTime === audioRef.current.duration) {
            nextTrack()
        }
    };

    const progress = useSelector((state) => state.player.time);
    const [trackTime, setTrackTime] = useState(progress);

    const timeHandler = (e) => {
        const duration = audioRef.current.duration;

        setTrackTime(Number(e.target.value));
        const rewindTime = (duration * Number(e.target.value)) / 100;
        dispatch(setTime(rewindTime));
        audioRef.current.pause();
        audioRef.current.currentTime = rewindTime;
        if (rewindTime) {
            audioRef.current.play();
        }
    };

    return (
        <div className={classNames(styles.bar__player, styles.player)}>
            <div
                className={styles.progress_line}
                style={{ width: `${currentSong.progress + '%'}` }}
            ></div>
            <div className={styles.progress_back}></div>

            <input
                className={styles.player_progress}
                type="range"
                name="range"
                value={trackTime}
                min="0"
                max="100"
                step="0.1"
                onChange={timeHandler}
            ></input>
            <div className={styles.controls}>
                <div onClick={prevTrack} className={styles.btn_prev}>
                    <img
                        src={Prev}
                        className={styles.prev_svg}
                        alt="prev"
                    ></img>
                </div>
                <div
                    onClick={togglePlay}
                    className={classNames(styles.btn_play, styles.btn)}
                >
                    <audio
                        src={trackSrc}
                        ref={audioRef}
                        onTimeUpdate={onPlaying}
                    />
                    <img
                        src={isPlaying ? Pause : Play}
                        className={styles.play__svg}
                        alt="play"
                    ></img>
                </div>
                <div onClick={nextTrack} className={styles.btn_next}>
                    <img
                        src={Next}
                        className={styles.next_svg}
                        alt="next"
                    ></img>
                </div>
                <div
                    onClick={repeatSong}
                    className={classNames(styles.btn_repeat, styles.btn_icon)}
                >
                    {isRepeat ? (
                        <svg
                            className={styles.repeat_svg}
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                                fill="white"
                            />
                            <path
                                d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        <svg
                            className={styles.repeat_svg}
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                                fill="#696969"
                            />
                            <path
                                d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                                fill="#696969"
                            />
                        </svg>
                    )}
                </div>
                <div
                    onClick={shuffleSong}
                    className={classNames(styles.btn_shuffle, styles.btn_icon)}
                >
                    {isShuffle ? (
                        <svg
                            className={styles.shuffle_svg}
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 15L14 12.1132V17.8868L19 15ZM9.66317 12.0833L9.20863 12.2916L9.66317 12.0833ZM6.83683 5.91673L6.3823 6.12505L6.83683 5.91673ZM0 3.5H2.29151V2.5H0V3.5ZM6.3823 6.12505L9.20863 12.2916L10.1177 11.8749L7.29137 5.7084L6.3823 6.12505ZM14.2085 15.5H14.5V14.5H14.2085V15.5ZM9.20863 12.2916C10.1047 14.2466 12.0579 15.5 14.2085 15.5V14.5C12.449 14.5 10.8508 13.4745 10.1177 11.8749L9.20863 12.2916ZM2.29151 3.5C4.05105 3.5 5.64918 4.52552 6.3823 6.12505L7.29137 5.7084C6.39533 3.75341 4.44205 2.5 2.29151 2.5V3.5Z"
                                fill="white"
                            />
                            <path
                                d="M19 3L14 5.88675V0.113249L19 3ZM9.66317 5.91673L9.20863 5.7084L9.66317 5.91673ZM6.83683 12.0833L6.3823 11.8749L6.83683 12.0833ZM0 14.5H2.29151V15.5H0V14.5ZM6.3823 11.8749L9.20863 5.7084L10.1177 6.12505L7.29137 12.2916L6.3823 11.8749ZM14.2085 2.5H14.5V3.5H14.2085V2.5ZM9.20863 5.7084C10.1047 3.75341 12.0579 2.5 14.2085 2.5V3.5C12.449 3.5 10.8508 4.52552 10.1177 6.12505L9.20863 5.7084ZM2.29151 14.5C4.05105 14.5 5.64918 13.4745 6.3823 11.8749L7.29137 12.2916C6.39533 14.2466 4.44205 15.5 2.29151 15.5V14.5Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        <svg
                            className={styles.shuffle_svg}
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 15L14 12.1132V17.8868L19 15ZM9.66317 12.0833L9.20863 12.2916L9.66317 12.0833ZM6.83683 5.91673L6.3823 6.12505L6.83683 5.91673ZM0 3.5H2.29151V2.5H0V3.5ZM6.3823 6.12505L9.20863 12.2916L10.1177 11.8749L7.29137 5.7084L6.3823 6.12505ZM14.2085 15.5H14.5V14.5H14.2085V15.5ZM9.20863 12.2916C10.1047 14.2466 12.0579 15.5 14.2085 15.5V14.5C12.449 14.5 10.8508 13.4745 10.1177 11.8749L9.20863 12.2916ZM2.29151 3.5C4.05105 3.5 5.64918 4.52552 6.3823 6.12505L7.29137 5.7084C6.39533 3.75341 4.44205 2.5 2.29151 2.5V3.5Z"
                                fill="#696969"
                            />
                            <path
                                d="M19 3L14 5.88675V0.113249L19 3ZM9.66317 5.91673L9.20863 5.7084L9.66317 5.91673ZM6.83683 12.0833L6.3823 11.8749L6.83683 12.0833ZM0 14.5H2.29151V15.5H0V14.5ZM6.3823 11.8749L9.20863 5.7084L10.1177 6.12505L7.29137 12.2916L6.3823 11.8749ZM14.2085 2.5H14.5V3.5H14.2085V2.5ZM9.20863 5.7084C10.1047 3.75341 12.0579 2.5 14.2085 2.5V3.5C12.449 3.5 10.8508 4.52552 10.1177 6.12505L9.20863 5.7084ZM2.29151 14.5C4.05105 14.5 5.64918 13.4745 6.3823 11.8749L7.29137 12.2916C6.39533 14.2466 4.44205 15.5 2.29151 15.5V14.5Z"
                                fill="#696969"
                            />
                        </svg>
                    )}
                </div>
            </div>

            <div className={styles.track_play}>
                <div className={styles.contain}>
                    {loading ? (
                        <Skeleton
                            width={50}
                            height={50}
                            style={{ marginRight: '15px' }}
                        />
                    ) : (
                        <div className={styles.image}>
                            <img
                                className={styles.title_svg}
                                src={Note}
                                alt="music"
                            ></img>
                        </div>
                    )}
                    {loading ? (
                        <Skeleton count={2} width={90} height={15} />
                    ) : (
                        <div>
                            <div className={styles.author}>
                                <a
                                    className={styles.author_link}
                                    href="http://"
                                >
                                    {data.name}
                                </a>
                            </div>
                            <div className={styles.album}>
                                <a className={styles.album_link} href="http://">
                                    {data.author}
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.like_dis}>
                    <div
                        onClick={addFavorite}
                        className={classNames(styles.like, styles.btn_icon)}
                    >
                        <svg
                            className={styles.dislike_svg}
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99997 2.25572H8.02154C8.95343 1.44175 11.4125 0.165765 13.6127 1.76734C16.9673 4.20921 13.902 9.5 8.02154 13H7.99997M8.00003 2.25572H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H8.00003"
                                stroke="#696969"
                            />
                        </svg>
                    </div>
                    <div
                        onClick={deleteFavorite}
                        className={classNames(styles.dislike, styles.btn_icon)}
                    >
                        <svg
                            className={styles.dislike_svg}
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1L15 13.5" stroke="#696969" />
                            <path
                                d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
                                stroke="#696969"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default player;
