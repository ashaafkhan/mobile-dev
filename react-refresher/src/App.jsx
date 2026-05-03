import React , {useState} from 'react'

const App = () => {

    const [name,setName] = useState("")

  return (
    <>
        <input 
        value = {name}
        placeholder = 'enter your name'
        onChange= {(e)=>setName(e.target.value)}
        />

        <p>Hello {name}</p>
    </>


)
}

export default App