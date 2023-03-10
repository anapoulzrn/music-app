export function changeStyles(theme) {
    const root = document.querySelector(':root');

    const components = [
        'body-bg',
        'bar-bg',
        'text',
        'song-icon',
        'player-progress-bg'
    ];

    components.forEach((component) => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        )
    })

}