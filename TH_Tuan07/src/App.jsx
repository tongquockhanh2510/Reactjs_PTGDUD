import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './component/Menu'
import Header from './component/Header'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Analytics from './pages/Analytics'
import Project from './pages/Project'
import Teams from './pages/Teams'
import Messages from './pages/Messages'
import Integrations from './pages/Integrations'

function App() {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/':
      case '/dashboard':
        return 'Dashboard';
      case '/analytics':
        return 'Analytics';
      case '/project':
        return 'Project';
      case '/team':
        return 'Teams';
      case '/message':
        return 'Messages';
      case '/integration':
        return 'Integrations';
      default:
        return 'Dashboard';
    }
  };

  return (
    <>
    <div className='container shadow-lg'>
    <Header title={getPageTitle()}/>
    <Menu class="menu"/>
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/integration" element={<Integrations />} />
      </Routes>
    
    </div>
    </>
  )
}

export default App
