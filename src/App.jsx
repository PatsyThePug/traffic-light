import { useState } from 'react';
import './App.css';

function App() {
  const [activeLight, setActiveLight] = useState(null);

  return (
    <div id="root">
      <div className="traffic-light">
        <h1>Simulador de Semáforo 🚦</h1>

        <div className="traffic-light-container">
          <div
            className={`light red ${activeLight === 'red' ? 'active' : ''}`}
            onClick={() => setActiveLight('red')}
          ></div>
          <div
            className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
            onClick={() => setActiveLight('yellow')}
          ></div>
          <div
            className={`light green ${activeLight === 'green' ? 'active' : ''}`}
            onClick={() => setActiveLight('green')}
          ></div>
          <div
            className={`light purple ${activeLight === 'purple' ? 'active' : ''}`}
            onClick={() => setActiveLight('purple')}
          ></div>
        </div>

        <div className="controls">
          <button className="alternate-btn" onClick={() => setActiveLight(null)}>
            Apagar
          </button>
          <button className="purple-btn" onClick={() => setActiveLight('purple')}>
            Púrpura 💜
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
