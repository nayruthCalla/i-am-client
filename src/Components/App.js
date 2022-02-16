import styled from 'styled-components'

// import Header from './Layouts/Header'
// import Landing from './Pages/Landing'
// import Dasboard from './Pages/Dasboard'
// import Footer from './Layouts/Footer'
import FirstTemplateWeb from './Pages/FirstTemplateWeb'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
`
const App = () => {
  return (
    <Container>
      {/* <Header /> */}
      {/* <Landing />
       */}
      {/* <Dasboard /> */}
      {/* <Footer /> */}
      <FirstTemplateWeb />
    </Container>
  )
}

export default App
