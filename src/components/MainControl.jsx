import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
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