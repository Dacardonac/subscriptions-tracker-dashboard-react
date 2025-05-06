import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import './components/base/__global.css';
import './components/base/__reset.css';

function App() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? JSON.parse(storedCount) : 0;
  });

  const [isValid, setIsValid] = useState(() => {
    const storedIsValid = localStorage.getItem('isValid');
    return storedIsValid === 'true';
  });

  const [subs, setSubs] = useState(() => {
    const storedSubs = localStorage.getItem('subs');
    return storedSubs ? JSON.parse(storedSubs) : [];
  });

  const [spent, setSpent] = useState(() => {
    const initialSpent = localStorage.getItem('spent');
    return initialSpent ? JSON.parse(initialSpent) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('isValid', JSON.stringify(isValid));
    localStorage.setItem('subs', JSON.stringify(subs));
    localStorage.setItem('spent', JSON.stringify(spent));
  }, [count, isValid, subs, spent]);

  useEffect(() => {
    const total = subs.reduce((acc, item) => acc + Number(item.price), 0);
    setSpent(total);
  }, [subs]);

  return (
    <div className="App">
      <Navbar />
      <Dashboard
        count={count}
        setCount={setCount}
        isValid={isValid}
        setIsValid={setIsValid}
        subs={subs}
        setSubs={setSubs}
        spent={spent}
      />
    </div>
  );
};

export default App;
