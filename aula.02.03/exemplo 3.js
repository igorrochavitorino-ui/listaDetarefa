import React, { useState } from 'react';

function AlternarTema() {
  // Criamos um estado para controlar se é "escuro" ou não
  const [isDark, setIsDark] = useState(false);

  const alternarTema = () => {
    setIsDark(!isDark); // Inverte o valor booleano
  };

  // Definimos os estilos baseados no estado
  const estiloPagina = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
    height: '100vh', // Para preencher a tela toda
    transition: '0.3s' // Um bônus para ficar suave
  };

  return (
    <div style={estiloPagina}>
      <h1>O tema atual é {isDark ? 'Escuro' : 'Claro'}</h1>
      <button onClick={alternarTema}>Alternar Tema</button>
    </div>
  );
}

export default AlternarTema;