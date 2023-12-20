import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Button/Header/Header';

function App() {
  const {onToggleButton, tg}=useTelegram()

  useEffect(()=>{
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header>
        
      </Header>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
