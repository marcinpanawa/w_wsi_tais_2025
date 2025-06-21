import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 data-testid="counter-display">Licznik: {count}</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        <button 
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Zwiększ
        </button>
        <button 
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
          disabled={count <= 0}
        >
          Zmniejsz
        </button>
        <button 
          onClick={reset}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none'
          }}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}


export default Counter;