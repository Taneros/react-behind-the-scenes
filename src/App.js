import React, { useState, useCallback } from 'react'

import './App.css'
import Button from './components/UI/Button/Button'
import DemoOutput from './Demo/Demo'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) setShowParagraph((prev) => !prev)
  }, [allowToggle])

  const toggleButton = () => {
    setAllowToggle((prev) => !prev)
  }

  console.log(`app js`)

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleButton} children={'Allow toggling'} />
      <Button
        onClick={toggleParagraphHandler}
        children={'Toggle paragraph'}
        className={'toggle-btn'}
        disabled={!allowToggle}
      />
    </div>
  )
}

export default App
