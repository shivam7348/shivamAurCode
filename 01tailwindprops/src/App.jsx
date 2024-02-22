import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    usename: "shivam",
    age: 21

  }
  let newArr = [1,2,3,4,5]

  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl m-4'> Tailwind css</h1>
   <Card username="shivamAur Code" btnText="Click me" />
      <Card username="mahek" btnText="Show me"/>

    </>
  )
}

export default App
