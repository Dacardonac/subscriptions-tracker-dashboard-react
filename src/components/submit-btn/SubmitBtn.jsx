import './SubmitBtn.css';

const SubmitBtn = ({ children, marginTop }) => {
  return (
    <button type="submit"
            className="form-submit-btn"
            style={{ marginTop }}
            value={ children }
    >
      {children}
    </button>
  );
}

export default SubmitBtn;
