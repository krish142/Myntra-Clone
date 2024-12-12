import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Main from './Layout/Main'

function App() {

  return (
    <>
      <div className='sticky top-0'>
        <Header />
      </div>
      <Main />
      <Footer />
    </>
  )
}

export default App
