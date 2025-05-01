import './SubmitBtn.css';

const SubmitBtn = ({ children, marginTop }) => {
  return (
    <button type="submit"
            className="form-submit-btn"
            style={{ marginTop }}
    >
      {children}
    </button>
  );
}

export default SubmitBtn;
