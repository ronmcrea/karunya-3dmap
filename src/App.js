import "./styles.css";
import React, { useState } from "react";
    
    export default function App() {
      const modelRef = React.useRef();
    
      return (
        <model-viewer
           //className="model-viewer"
          bounds="tight"
          enable-zoom
          src="./k.glb"
          alt="campus_build"
          exposure="0.45"
          camera-controls 
          camera-orbit="220deg 78deg 2.5m"
          auto-rotate
          shadow-intensity = "1"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ref={(ref) => {
            modelRef.current = ref;
          }}
        >
        
        </model-viewer>
      );
    }