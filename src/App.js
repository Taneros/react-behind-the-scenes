import React, { useState } from 'react'

import './App.css'
import Button from './components/UI/Button/Button'
import DemoOutput from './Demo/Demo'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => !prev)
  }

  console.log(`app js`)

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button
        onClick={toggleParagraphHandler}
        children={'Toggle paragraph'}
        className={'toggle-btn'}
      />
    </div>
  )
}

export default App
