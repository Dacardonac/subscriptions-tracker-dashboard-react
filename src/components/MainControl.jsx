import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";

const MainControl = ({ count }) => {
  return (
    <div className="main-control">
      <Balance count={count} />
      <FormAddSubs />
    </div>
  );
}

export default MainControl;