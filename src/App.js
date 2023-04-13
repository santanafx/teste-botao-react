import React from 'react'


function App() {

  const [botao, setBotao] = React.useState(false);

  const ativado = () => {
    setBotao(!botao)
  }

  return (
    <div>
      <button onClick={() => ativado()} style={{ color: 'white', backgroundColor: 'blue' }}>Abrir</button>
      <h1>{botao ? 'Ativado' : 'desativado'}</h1>
    </div>
  );
}

export default App;
