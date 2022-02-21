// import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
// import Header from './Layouts/Header'
import Landing from './Pages/Landing'
import Dasboard from './Pages/Dasboard'
// import Footer from './Layouts/Footer'
import FirstTemplateWeb from './Pages/FirstTemplateWeb'

// const Container = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
//   margin: 0;
// `
const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/profile/:userName" element={<FirstTemplateWeb />} />

        {/* <Dasboard /> */}
        {/* <Footer /> */}
        {/* <FirstTemplateWeb /> */}
      </Routes>
    </>
  )
}

export default App
