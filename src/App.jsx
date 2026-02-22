import { useState } from 'react'
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


