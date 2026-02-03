import { useState } from 'react'
import './App.css'
import InfiniteScroll from './apps/InfiniteScroll'
import PopOver from './apps/PopOver'
import DebouncedSearch from './apps/DebouncedSearch'
import Carousel from './apps/Carousel'
import Accordian from './apps/Accordian'

function App() {

  return (
    <div>
      {/* <InfiniteScroll /> */}
      {/* <PopOver /> */}
      {/* <DebouncedSearch /> */}
      {/* <Carousel /> */}
      <Accordian />
    </div>
  )
}

export default App
