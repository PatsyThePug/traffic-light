
import { useState } from "react";
import "./App.css";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const handleColorClick = (selectedColor) => {
    setColor(selectedColor);
  };

  const alternateColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurpleLight = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="traffic-light">
      <h1>🚦 Semáforo React</h1>
      
      <div className="traffic-light-container">
        {colors.map((lightColor) => (
          <div
            key={lightColor}
            className={`light ${lightColor} ${color === lightColor ? "active" : ""}`}
            onClick={() => handleColorClick(lightColor)}
          ></div>
        ))}
      </div>

      <div className="controls">
        <button 
          className="alternate-btn"
          onClick={alternateColor}
        >
          Alternar Colores
        </button>
        
        <button 
          className="purple-btn"
          onClick={addPurpleLight}
        >
          Añadir Púrpura
        </button>
      </div>
    </div>
  );
}

export default TrafficLight;
