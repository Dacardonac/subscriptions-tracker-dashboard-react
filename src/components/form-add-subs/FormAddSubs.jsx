import { useState } from 'react';
import Swal from 'sweetalert2';
import SubmitBtn from '../submit-btn/SubmitBtn';
import '../sweet-alert/SweetAlert.css';
import './FormAddSubs.css';

const FormAddSubs = ({ setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, count }) => {
  const [typeError, setTypeError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

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

    const priceNumber = Number(price);
    const oldPrice = subs.find(sub => sub.id === editId)?.price || 0;
    const adjustedSpent = editId ? spent - Number(oldPrice) : spent;

    if (count - adjustedSpent < priceNumber) {
      setErrorMoney(true);
      Toast.fire({
        icon: 'error',
        title: 'You don\'t have enough money',
        background: '#ff4c5b',
        color: '#fff',
        customClass: {
          timerProgressBar: 'toast-error-bar',
        }
      });
      return;
    };

    setPriceError(false);
    setTypeError(false);
    setErrorMoney(false);

    if (editId !== "") {
      setEditId('');
      const newSubs = subs.map(item => {
        if (item.id === editId) {
          return {...item, type, price };
        };
        return item;
      });
      setSubs(newSubs);
      Toast.fire({
        icon: 'success',
        title: 'Subscription Edited',
        background: '#4caf50',
        color: '#fff',
        customClass: {
          timerProgressBar: 'toast-success-bar',
        }
      });
    } else {
      const data = {
        type: type,
        price: price,
        id: crypto.randomUUID(),
      };
      setSubs([...subs, data]);
      Toast.fire({
        icon: 'success',
        title: 'Subscription Added',
        background: '#4caf50',
        color: '#fff',
        customClass: {
          timerProgressBar: 'toast-success-bar',
        }
      });
    }

    setType('');
    setPrice('');
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
          <option value="">-- Chose --</option>
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
        <input className={priceError || errorMoney ? 'input-error' : ''}
                type="number"
                placeholder="$20"
                onChange={e => setPrice(Number(e.target.value))}
                onFocus={() => {setPriceError(false); setErrorMoney(false);}}
                value={price}
        />
        { editId != ""  ? <SubmitBtn marginTop="1.5rem">Edit</SubmitBtn>
                        : <SubmitBtn marginTop="1.5rem">Add</SubmitBtn>
        }
      </form>
    </div>
  );
};

export default FormAddSubs;