import Balance from "../balance/Balance";
import FormAddSubs from "../form-add-subs/FormAddSubs";
import './MainControl.css';

const MainControl = ({ count }) => {
  return (
    <div className="main-control">
      <Balance count={count} />
      <FormAddSubs />
    </div>
  );
}

export default MainControl;