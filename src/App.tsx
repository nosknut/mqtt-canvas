import React from 'react';
import './App.css';
import CanvasDraw from "react-canvas-draw";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CanvasDraw
          onChange={null}
          loadTimeOffset={5}
          lazyRadius={30}
          brushRadius={12}
          brushColor={"black"}
          catenaryColor={"black"}
          gridColor={"black"}
          hideGrid={false}
          canvasWidth={window.innerWidth}
          canvasHeight={window.innerHeight}
          disabled={false}
          imgSrc={""}
          immediateLoading={false}
          hideInterface={false}
          gridSizeX={25}
          gridSizeY={25}
          gridLineWidth={0.5}
          hideGridX={false}
          hideGridY={false}
          enablePanAndZoom={false}
          mouseZoomFactor={0.01}
          zoomExtents={{ min: 0.33, max: 3 }}
        />
      </header>
    </div>
  );
}

export default App;
