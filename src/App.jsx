import { useState } from 'react'
import './App.css'

function GridButton({currentColor}){
  const [pixelColor, setPixelColor] = useState('')
  function handlePixelClick() {
    setPixelColor(currentColor)
  }
  return(
    <>
    <button style={{background:pixelColor}} class={"gridButton"} onClick={handlePixelClick}></button>
    </>
  )
}

function GridButtonGroup({currentColor}) {
  return (
    <div className='grid'>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    <GridButton currentColor={currentColor}/>
    </div>
  )
  }


function ColorButtonGroup({setColorFunction}) {
  return (
    <>
    <ColorButton Color="#0072CE" handleColorClick={setColorFunction}/>
    <ColorButton Color="red" handleColorClick={setColorFunction}/>
    </>
  )
}


function ColorButton({Color, handleColorClick}) {
  return (
    <>
    <button style={{background:Color}} onClick={handleColorClick}></button>
    </>
  )
}

function App() {

  const [currentColor, setCurrentColor] = useState('')
  function handleColorChange(event) {
    setCurrentColor(event.target.style.background)
  }



  return (
    <>
    <GridButtonGroup currentColor={currentColor}/>
    <ColorButtonGroup setColorFunction={handleColorChange}/>
    </>
  )
}

export default App
