import { useState } from 'react';
import './App.css';

function App() {
  const [bgcolor, setBgColor] = useState('');
  const [textcolor, setTextColor] = useState('');

  const bgColor = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [bgcolor],
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
    });
  };
  const textColor = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [textcolor],
      func: (color) => {
        document.body.style.color = color;
      },
    });
  };

  return (
    <>
      <h1 className='title'>Colorizer</h1>
      <div className="card">
        <div className="input-group">
          <input
            type="color"
            onChange={(e) => setBgColor(e.currentTarget.value)}
            value={bgcolor}
          />
          <button onClick={bgColor}>BG Color</button>
        </div>
        <div className="input-group">
          <input
            type="color"
            onChange={(e) => setTextColor(e.currentTarget.value)}
            value={textcolor}
          />
          <button onClick={textColor}>Text Color</button>
        </div>
      </div>
    </>
  );
}

export default App;
