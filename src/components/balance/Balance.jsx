import { useEffect } from "react";
import { moneyFormat } from "../../helpers/helpers";
import "./Balance.css";

const Balance = ({ count, subs, spent, setSpent }) => {

  const updateBalance = () => {
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
  };

  useEffect(() => {
    updateBalance();
  }, [subs]);

  return (
    <div className="balance">
      <h3>Budget: <span>{moneyFormat(count)}</span></h3>
      <h3>Spent: <span>{moneyFormat(spent)}</span></h3>
      <h3>Remaining: <span>{moneyFormat(count - spent)}</span></h3>
    </div>
  );
}

export default Balance;