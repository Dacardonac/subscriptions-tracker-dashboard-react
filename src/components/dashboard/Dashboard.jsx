import Header from '../header/Header';
import FormAddMoney from '../form-add-money/FormAddMoney';
import MainControl from '../main-control/MainControl';
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
