{/* <button type="submit" className="form-submit-btn">Submit</button>
    <button type="submit">Add</button> */}

import './SubmitBtn.css';

const SubmitBtn = ({ text, marginTop }) => {
  return (
    <button type="submit"
            className="form-submit-btn"
            style={{ marginTop }}
    >
      {text}
    </button>
  );
}

export default SubmitBtn;
