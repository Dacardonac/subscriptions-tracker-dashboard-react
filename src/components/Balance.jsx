import "./Balance.css";

const Balance = ({ count }) => {
  return (
    <div className="balance">
      <h3>Budget: <span>${count}</span></h3>
      <h3>Spent: <span>${count}</span></h3>
      <h3>Remaining: <span>${count}</span></h3>
    </div>
  );
}

export default Balance;