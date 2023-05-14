
import React, { useRef } from 'react';

const UseRef = () => {
  const meuElementoRef = useRef(null);

  const handleClick = () => {
    // Acessando diretamente o elemento do DOM usando a referência
    meuElementoRef.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      <button ref={meuElementoRef} onClick={handleClick}>
        Clique em mim
      </button>
    </div>
  );
}

export default UseRef