import { useState } from 'react';
import Swal from 'sweetalert2';
import SubmitBtn from '../submit-btn/SubmitBtn';
import '../sweet-alert/SweetAlert.css';
import './FormAddSubs.css';

const FormAddSubs = ({ setType, setPrice, type, price, setSubs, subs }) => {
  const [typeError, setTypeError] = useState(false);
  const [priceError, setPriceError] = useState(false);

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

  const handleSubs = e => {
    e.preventDefault();
    if (type === '-- Chose --' || type === '') {
      setTypeError(true);
      Toast.fire({
        icon: 'error',
        title: 'Invalid Field',
        background: '#ff4c5b',
        color: '#fff',
        customClass: {
          timerProgressBar: 'toast-error-bar',
        }
      });
      return;
    }
    else if (price === '' || price <= 0) {
      setPriceError(true);
      Toast.fire({
        icon: 'error',
        title: 'Invalid Field',
        background: '#ff4c5b',
        color: '#fff',
        customClass: {
          timerProgressBar: 'toast-error-bar',
        }
      });
      return;
    }
    setPriceError(false);
    setTypeError(false);

    const data = {
      type: type,
      price: price,
      id: crypto.randomUUID(),
    };
    setSubs([...subs, data]); // Review this line to ensure it works as expected and doesn't cause any issues in the printing process.
    setType('');
    setPrice('');

    Toast.fire({
      icon: 'success',
      title: 'Subscription Added',
      background: '#4caf50',
      color: '#fff',
      customClass: {
        timerProgressBar: 'toast-success-bar',
      }
    });
    console.log(`Service: ${type}, Price: $${price}`);
  };

  return (
    <div className="add-subscription">
      <h3>Add Subscription</h3>
      <form className="form-add-subs" action="#" onSubmit={ handleSubs }>
        <p>Services</p>
        <select className={typeError ? 'input-error' : ''}
                name="platform"
                onChange={e => setType(e.target.value)}
                onFocus={() => setTypeError(false)}
                value={type}
        >
          <option>-- Chose --</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney Plus</option>
          <option value="hboMax">HBO Max</option>
          <option value="primeVideo">Prime Video</option>
          <option value="youtubePremium">Youtube Premium</option>
          <option value="spotify">Spotify</option>
          <option value="appleTv">Apple TV</option>
          <option value="crunchyroll">Crunchyroll</option>
          <option value="starPlus">Star+</option>
          {/* <!-- Add more options as needed --> */}
        </select>
        <p>Amount</p>
        <input className={priceError ? 'input-error' : ''}
                type="number"
                placeholder="$20"
                onChange={e => setPrice(e.target.value)}
                onFocus={() => setPriceError(false)}
                value={price}
        />
        <SubmitBtn marginTop="1.5rem">
          Add
        </SubmitBtn>
      </form>
    </div>
  );
}

export default FormAddSubs;