import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1 )
    setCounter((prevCounter) => prevCounter + 1 )
    setCounter((prevCounter) => prevCounter + 1 )
     setCounter((prevCounter) => prevCounter + 1 )
     setCounter((prevCounter) => prevCounter + 1 )

    
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


return (
  <>
  <h1> Shivam Aur code:{counter}</h1>
  <h2> Counter Value : {counter}</h2>

  <button onClick={addValue}>Add Value{counter} </button>
  <button onClick={removeValue}>Remove value{counter}</button>
  <p>fotter:{counter}</p>
  </>
)
}
export default App
