import { useState } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < RegistrationForm />
    </>
  )
}

export default App
