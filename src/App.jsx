import BusStopIcon from './components/BusStopIcon/BusStopIcon';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      
      {/* Opção 1: Exibe o ícone do ônibus (ponto genérico) */}
      <BusStopIcon />

      {/* Opção 2: Exibe o número da parada no itinerário */}
      <BusStopIcon content="1" />
      <BusStopIcon content="2" />
      <BusStopIcon content="3" />

    </div>
  );
}

export default App;