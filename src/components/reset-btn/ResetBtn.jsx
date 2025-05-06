
import './ResetBtn.css';

const ResetBtn = ({ onClick, children }) => {
  return (
    <button className="btn-reset" onClick={onClick}>
      {children}
    </button>
  );
}

export default ResetBtn