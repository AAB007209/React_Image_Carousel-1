import './App.css'
import { Carousel } from './data/components/Carousel'

import { slides } from './data/carouselData.json'

function App() {

  return (
    <div className="App">
      <h1 className='header'>Image Carousel</h1>
      <Carousel data={slides} />
    </div>
  )
}

export default App
