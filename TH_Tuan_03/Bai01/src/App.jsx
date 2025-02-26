import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './header/components/Search'
import './App.css'
import Nav from './header/components/Nav'
import Sidebar from './header/components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav></Nav>
        <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
