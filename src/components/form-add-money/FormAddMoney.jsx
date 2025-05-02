import { useState } from 'react';
import Swal from 'sweetalert2';
import SubmitBtn from '../submit-btn/SubmitBtn';
import './FormAddMoney.css';
import '../sweet-alert/SweetAlert.css';

const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: '#fff',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) <= 0) {
      setError(true);
      Toast.fire({
        icon: 'error',
        title: 'Invalid Budget',
        background: '#ff4c5b',
        color: '#fff',
        customClass: {
          timerProgressBar: 'toast-error-bar',
        }
      });
      return;
    };
    setError(false);
    setCount(Number(input));
    setIsValid(true);
    setInput("");
  };

  return (
      <form className="form-add-money" action="#" onSubmit={ handleForm }>
        <div className="form-group">
          <label htmlFor="amount">Add an Amount:</label>
          <input
            className={error ? 'input-error' : ''}
            type="number"
            id="amount"
            name="amount"
            placeholder="e.g. $10.00"
            value={input}
            onChange={e => setInput(e.target.value)}
            onFocus={() => setError(false)}
          />
        </div>
        <SubmitBtn>
          Submit
        </SubmitBtn>
      </form>
  );
};

export default FormAddMoney;
