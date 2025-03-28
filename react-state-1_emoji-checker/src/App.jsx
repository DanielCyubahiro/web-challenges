import './styles.css';
import {useEffect, useState} from 'react';

export default function App() {
  const [code, setCode] = useState('');

  const validCode = 'ABC';

  const resetCode = (init = '') => {
    setCode(init);
  };

  function handleClick(emoji) {
    setCode(code + emoji);
    if (code.length >= 3) {
      resetCode(emoji)
    }
  }

  return (
      <div className="container">
        <div className="button-container">
          <button
              type="button"
              onClick={() => {
                handleClick('A');
              }}
          >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
          </button>
          <button
              type="button"
              onClick={() => {
                handleClick('C');
              }}
          >
          <span role="img" aria-label="Whale">
            🐋
          </span>
          </button>
          <button
              type="button"
              onClick={() => {
                handleClick('B');
              }}
          >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
          </button>
        </div>

        <button
            type="button"
            onClick={() => {
              resetCode();
            }}
        >
          Reset
        </button>

        {code === validCode && <p>Valid code! 🎉</p>}
      </div>
  );
}