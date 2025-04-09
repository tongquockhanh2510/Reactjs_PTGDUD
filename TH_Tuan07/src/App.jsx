import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './component/Menu'
import Header from './component/Header'
import Content from './component/Content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container shadow-lg'>
    <Header className="header"/>
    <Menu class="menu"/>
    <Content className="content"/>
    </div>
    
   
    
    
     
       
    </>
  )
}

export default App
