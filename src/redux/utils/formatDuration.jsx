export default function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor(durationInSeconds - minutes * 60)
    if (seconds <= 9) {
        return `${minutes}:0${seconds}`    
    } else {
        return `${minutes}:${seconds}`
    }
}