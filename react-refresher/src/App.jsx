import React, {useState} from 'react'

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    function onToggleTheme(){
        setDarkMode(!darkMode);
        console.log(darkMode);
    }

  return (
    <div 
    style={{
        height: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffff",
        color: darkMode? "#ffffff" : "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
    }}
    >
        <h1>Mode {darkMode ? "Change to Light theme":"Change to Dark theme"}</h1>
        <button onClick = {onToggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App