import Header from '../header/Header';
import FormAddMoney from '../form-add-money/FormAddMoney';
import MainControl from '../main-control/MainControl';
import './Dashboard.css';

function Dashboard({ count, setCount, isValid, setIsValid, subs, setSubs, spent, setSpent }) {
  return (
    <div className="dashboard">
      <Header />
      {
        isValid
          ? <MainControl
              count={count}
              setCount={setCount}
              setIsValid={setIsValid}
              subs={subs}
              setSubs={setSubs}
              spent={spent}
              setSpent={setSpent}
            />
          : <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
      }
    </div>
  );
}

export default Dashboard;
