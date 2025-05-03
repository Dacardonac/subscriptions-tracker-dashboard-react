import { moneyFormat } from "../../helpers/helpers";
import "./Balance.css";

const Balance = ({ count }) => {
  return (
    <div className="balance">
      <h3>Budget: <span>{moneyFormat(count)}</span></h3>
      <h3>Spent: <span>{moneyFormat(count)}</span></h3>
      <h3>Remaining: <span>{moneyFormat(count)}</span></h3>
    </div>
  );
}

export default Balance;