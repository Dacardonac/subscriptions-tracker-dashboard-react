import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Dashboard
        count={count}
        setCount={setCount}
        isValid={isValid}
        setIsValid={setIsValid}
      />
    </div>
  );
}

export default App;

