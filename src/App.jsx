import { useState } from 'react'
import './App.css'
import InfiniteScroll from './apps/InfiniteScroll'
import PopOver from './apps/PopOver'
import DebouncedSearch from './apps/DebouncedSearch'

function App() {

  return (
    <div>
      {/* <InfiniteScroll /> */}
      {/* <PopOver /> */}
      <DebouncedSearch />
    </div>
  )
}

export default App
