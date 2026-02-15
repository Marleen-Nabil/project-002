import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Body from './layout/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}

export default App
