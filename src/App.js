import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(()=>{
    tg.ready();
  }, [])

  return (
    <div className="App">
      work
    </div>
  );
}

export default App;
