// import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
// import Header from './Layouts/Header'
import Landing from './Pages/Landing'
import Dasboard from './Pages/Dasboard'
// import Footer from './Layouts/Footer'
import FirstTemplateWeb from './Pages/FirstTemplateWeb'
import PageError from './Layouts/ErrorPages'

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/ia/:userName" element={<FirstTemplateWeb />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  )
}

export default App
