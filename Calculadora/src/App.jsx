import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora/Calculadora'
import Todo from './components/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Calculadora/>
<br /><br />
<Todo/>
    </>
  )
}

export default App
