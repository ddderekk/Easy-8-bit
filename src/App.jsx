import { useState } from 'react'
import './App.css'

function GridButton({currentColor, pixelWidth}){
  const [pixelColor, setPixelColor] = useState("transparent")
  function handlePixelClick() {
    setPixelColor(currentColor)
  }
  return(
    <>
    <button style={{background:pixelColor, width:pixelWidth}} className={"gridButton"} onClick={handlePixelClick}></button>
    </>
  )
}

function GridButtonGroup({currentColor, numberOfPixels, pixelWidth, backgroundColor}) {
  const gridButtons = []
  while (gridButtons.length < numberOfPixels) {
    gridButtons.push(<GridButton currentColor={currentColor} pixelWidth={pixelWidth}/>)
  }
  return (
    <div className='grid' style={{background:backgroundColor}}>
    {gridButtons}
    </div>
  )
  }


  function ColorButton({Color, handleColorClick}) {
    return (
      <>
      <button className="colorButton" style={{background:Color}} onClick={handleColorClick}></button>
      </>
    )
  }

  function EraserButton({handleColorClick}) {
    return (
      <button className='colorButton eraserButton' style={{background:"transparent"}} onClick={handleColorClick}>
      </button>
    )

  }

  

function ColorButtonGroup({setColorFunction}) {
  const colorCodes = ["#641E16", "#943126", "#922B21", "#A93226", "#C0392B", "#CD6155",
  "#4A235A", "#5B2C6F", "#6C3483", "#7D3C98", "#8E44AD", "#9B59B6",
  "#1B4F72", "#21618C", "#2874A6", "#2E86C1", "#3498DB", "#5DADE2",
  "#0E6251", "#117864", "#148F77", "#17A589", "#1ABC9C", "#48C9B0",
  "#145A32", "#196F3D", "#1E8449", "#229954", "#27AE60", "#52BE80",
  "#7D6608", "#9A7D0A", "#B7950B", "#D4AC0D", "#F1C40F", "#F9E79F",
  "#7E5109", "#A04000", "#BA4A00", "#D35400", "#E67E22", "#F5CBA7",
  "#784212", "#9C640C", "#BA7835", "#D68910", "#EB984E", "#FAD7A0",
  "#6E2C00", "#873600", "#A04000", "#BA4A00", "#DC7633", "#F5B041",
  "#7B7D7D", "#979A9A", "#B3B6B7", "#D0D3D4", "#E5E7E9", "#F4F6F7",
  "#4D5656", "#616A6B", "#808B96", "#AEB6BF", "#D2D7D3", "#EAEDED",
  "#424949", "#515A5A", "#616A6B", "#707B7C", "#7F8C8D", "#99A3A4",
  "#1B2631", "#283747", "#34495E", "#4A6785", "#5D6D7E", "#85929E",
  "#17202A", "#212F3C", "#2C3E50", "#34495E", "#566573", "#808B96",
  "red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white"
]
  const colorButtons = []
  colorCodes.forEach((color) => {colorButtons.push(<ColorButton Color={color} handleColorClick={setColorFunction}/>)})
  return (
    <div className='colorbuttonGroup'>
    {colorButtons}
    <EraserButton handleColorClick={setColorFunction}/>
    </div>
  )
}



function ActiveColor({currentColor}) {
  return (
    <>
    <div className="activeColor" style={{background:currentColor}}></div>
    <p>Selected Color</p>
    </>
    
  )
}

function FillBackgroundButton({backgroundFunction}) {
  return (
    <>
    <button className="fillBackgroundButton" onClick={backgroundFunction}>FILL BACKGROUND</button>
    </>
  )
}

function MoreButton({purpose, resolutionChangeFunction}){
  if (purpose === "morePixels"){
    return (
      <div className="moreButtonContainer">
      <button className="moreButton" onClick={resolutionChangeFunction}>MORE PIXELS</button>
      </div>
    )
  }
  else {
    return (
      <div className="moreButtonContainer">
      <button className="moreButton" onClick={resolutionChangeFunction}>LESS PIXELS</button>
      </div>
    )
  }
}

function ResetButton() {
  return (
    <div>
    <button className="resetButton" onClick={()=>location.reload()}>RESET</button>
    </div>
  )
}

function App() {

  const [currentColor, setCurrentColor] = useState("transparent")
  function handleColorChange(event) {
    setCurrentColor(event.target.style.background)
  }

  const [resolution, setResolution] = useState("Less Pixels")
  function handleResolutionChange(event) {
    setResolution(event.target.innerText)
  }

  const [gridBackground, setGridBackground] = useState("transparent")
  function hangleGridBackgroundChange() {
    setGridBackground(currentColor)
  }
  if (resolution === "MORE PIXELS") {
    return (
      <div className="pageContainer">
      <GridButtonGroup currentColor={currentColor} numberOfPixels={1200} pixelWidth="2.44%" backgroundColor={gridBackground}/>
      <ColorButtonGroup setColorFunction={handleColorChange}/>
      <div className='sideButtons'>
      <ActiveColor currentColor={currentColor}/>
      <FillBackgroundButton backgroundFunction={hangleGridBackgroundChange}/>
      <MoreButton purpose="lessPixels" resolutionChangeFunction={handleResolutionChange}/>
      <ResetButton/>
      </div>
      </div>
    )
  }
  else {
    return (
      <div className="pageContainer">
      <GridButtonGroup currentColor={currentColor} numberOfPixels={600} pixelWidth="3.3%" backgroundColor={gridBackground}/>
      <ColorButtonGroup setColorFunction={handleColorChange}/>
      <div className='sideButtons'>
      <ActiveColor currentColor={currentColor}/>
      <FillBackgroundButton backgroundFunction={hangleGridBackgroundChange}/>
      <MoreButton purpose="morePixels" resolutionChangeFunction={handleResolutionChange}/>
      <ResetButton/>
      </div>
      </div>
    )
  }
}

export default App
