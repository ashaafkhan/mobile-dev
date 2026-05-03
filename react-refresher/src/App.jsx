import React, {useState, useEffect} from 'react'

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [count, setCount] = useState(0);

    function onToggleTheme(){
        setDarkMode(!darkMode);
    };
    
    // 1. Without dependency array
    //mount on reload and re-rendering both.
    // useEffect(()=>{
    //     console.log("Runs on every render");
    // })

    // 2.with empty dependency array
    //mount only on reload
    // useEffect(()=>{
    //     console.log("Hello from useEffect");
    // },[])

    //3. with dependency array
    //works on mount and when the dependency changes
    useEffect(()=>{
        console.log("Hello from useEffect");
    },[count])



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

        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>        
    </div>
  )
}

export default App