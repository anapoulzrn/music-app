import React, { useState } from "react"
import { changeStyles } from "../changeStyles";
import { ThemeContext } from "../context/ThemeContext"

const themeProvider = ({children}) => {

    const [ theme, setTheme ] = useState(localStorage.getItem('theme') || 'dark');

    changeStyles(theme);

    function changeTheme(theme) {
        localStorage.setItem('theme', theme);
        setTheme(theme);
        changeStyles(theme);
    }

    return <ThemeContext.Provider value={{
        theme,
        changeTheme,
    }}
    >
        {children}
    </ThemeContext.Provider>
}

export default themeProvider;
