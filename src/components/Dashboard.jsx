import Header from './Header';
import FormAddMoney from './FormAddMoney';
import MainControl from './MainControl';
import './Dashboard.css';

function Dashboard({ count, setCount, isValid, setIsValid }) {
  return (
    <div className="dashboard">
      <Header />
      {
        isValid
          ? <MainControl count={count} />
          : <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
      }
    </div>
  );
}

export default Dashboard;
