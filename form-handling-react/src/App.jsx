import { useState } from 'react'
import { RegistrationForm } from './components/RegistrationForm'
import './App.css'
import FormikForm from './components/formikForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < RegistrationForm />
      < FormikForm />
    </>
  )
}

export default App
