import { useState } from 'react'
import './App.css'

function GridButton({currentColor, pixelWidth, hideGrid}){
  const [pixelColor, setPixelColor] = useState("transparent")
  function handlePixelClick() {
    setPixelColor(currentColor)
  }
  if (hideGrid === true) {
    return(
      <>
      <button style={{background:pixelColor, width:pixelWidth, border:"none"}} className={"gridButton"} onClick={handlePixelClick}></button>
      </>
    )
  }
  return(
    <>
    <button style={{background:pixelColor, width:pixelWidth}} className={"gridButton"} onClick={handlePixelClick}></button>
    </>
  )
}

function GridButtonGroup({currentColor, numberOfPixels, pixelWidth, backgroundColor, groupHideGrid}) {
  const gridButtons = []
  while (gridButtons.length < numberOfPixels) {
    gridButtons.push(<GridButton currentColor={currentColor} pixelWidth={pixelWidth} hideGrid={groupHideGrid}/>)
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
  "#78281F","#943126", "#B03A2E", "#CB4335", "#E74C3C", "#EC7063",
  "#800020","#800000", "#B22222","#DC143C", "#D2042D","#FF6347",

  "#C71585","#FF1493", "#FF00FF","#DB7093", "#FF69B4", "#FF91A4",

  "#512E5F", "#633974", "#76448A", "#884EA0", "#9B59B6", "#AF7AC5",
  "#301934", "#5B2C6F", "#6C3483", "#7D3C98", "#8E44AD", "#A569BD",
  "#4B0082", "#483D8B", "#6A5ACD", "#8A2BE2", "#9370DB", "#AB82FF", 

  "#154360", "#1A5276", "#1F618D", "#2471A3", "#2980B9", "#5499C7",
  "#1B4F72", "#21618C", "#2874A6", "#2E86C1", "#3498DB", "#5DADE2",
  "#000080", " #0072CE","#4169E1", "#1E90FF", "#00BFFF", "#87CEEB", 
  
  "#0E6251", "#117864", "#148F77", "#17A589", "#1ABC9C", "#48C9B0",
  "#0B5345", "#0E6655", "#117A65", "#138D75", "#16A085", "#45B39D",
  "#186A3B", "#1D8348", "#239B56", "#28B463", "#2ECC71", "#58D68D",
  "#013220", "#4B5320", "#00FF00", "#32CD32", "#BFFF00", "#90EE90",

  "#ca9456", "#FFD700", "#ffda03","#fff44f", "#FFFF00", "#FFFFE0",
  "#7D6608", "#9A7D0A", "#B7950B", "#D4AC0D", "#F1C40F", "#F4D03F",

  "#CC5500", "#ff8c00", "#ed9121","#FFA62F", "#FFA500", "#FFD580", 
  
  "#7E5109", "#9C640C", "#B9770E", "#D68910", "#F39C12", "#F5B041",
  "#784212", "#935116", "#AF601A", "#CA6F1E", "#E67E22", "#EB984E",
  "#6E2C00", "#873600", "#A04000", "#BA4A00", "#D35400", "#DC7633",
  "#483C32", "#5C4033", "#8B7355","#A0522D",  "#CD853F", "#DEB887",

  "#FF8C69", "#FFA07A", "#FFB6C1","#FFDBAC", "#FFDAB9", "#FFDDC1",

  "#7B7D7D", "#979A9A", "#B3B6B7", "#D0D3D4", "#ECF0F1", "#F0F3F4",
  "#626567", "#797D7F", "#909497","#A6ACAF", "#BDC3C7", "#CACFD2",
  "#4D5656", "#5F6A6A", "#717D7E", "#839192", "#95A5A6", "#AAB7B8",
  "#424949", "#515A5A", "#616A6B", "#707B7C", "#7F8C8D", "#99A3A4",
  "#1B2631", "#212F3C", "#283747", "#2E4053", "#34495E", "#5D6D7E",
  "#17202A", "#1C2833", "#212F3D", "#273746", "#2C3E50", "#566573",
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

function HideGridButton({hideGrid, handleGridHide}) {
  return (
    <div className="hideGridCheckbox">
    <input type="checkbox" id="showBorder" checked={hideGrid} onChange={(e) => handleGridHide(e.target.checked)}>
    </input>
      <label for="showBorder" className="showGridLabel">Hide Grid</label>
    </div>
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

  const [hideGrid, setHideGrid] = useState(false)

  if (resolution === "MORE PIXELS") {
    return (
      <div className="pageContainer">
      <GridButtonGroup currentColor={currentColor} numberOfPixels={1800} pixelWidth="2%" backgroundColor={gridBackground} groupHideGrid={hideGrid}/>
      <ColorButtonGroup setColorFunction={handleColorChange}/>
      <div className='sideButtons'>
      <ActiveColor currentColor={currentColor}/>
      <HideGridButton hideGrid={hideGrid} handleGridHide={setHideGrid}/>
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
      <GridButtonGroup currentColor={currentColor} numberOfPixels={660} pixelWidth="3.3%" backgroundColor={gridBackground} groupHideGrid={hideGrid}/>
      <ColorButtonGroup setColorFunction={handleColorChange}/>
      <div className='sideButtons'>
      <ActiveColor currentColor={currentColor}/>
      <HideGridButton hideGrid={hideGrid} handleGridHide={setHideGrid}/>
      <FillBackgroundButton backgroundFunction={hangleGridBackgroundChange}/>
      <MoreButton purpose="morePixels" resolutionChangeFunction={handleResolutionChange}/>
      <ResetButton/>
      </div>
      </div>
    )
  }
}

export default App
