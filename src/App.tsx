import './App.css'
import Hero from './components/Hero'
import DaysCounter from './components/DaysCounter'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Secrets from './components/Secrets'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main>
        <Hero />
        <DaysCounter />
        <Timeline />
        <Gallery />
        <Secrets />
      </main>
      <Footer />
    </>
  )
}

export default App
