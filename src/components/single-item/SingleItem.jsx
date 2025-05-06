import Swal from 'sweetalert2';
import {  moneyFormat } from '../../helpers/helpers';
import './SingleItem.css'
import '../sweet-alert/SweetAlert.css';

const SingleItem = ({ price, type, id, deleteItem, editItem }) => {

  const linkImage = `https://www.${type}.com/`;
  const urlImage = `/images/${type}.webp`;
  const altImage = `${type} logo`;

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

  const HandleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      iconColor: '#ff9040',
      showCancelButton: true,
      background: '#3a3a3a',
      color: '#fff',
      confirmButtonColor: '#4caf50',
      cancelButtonColor: '#ff4c5b',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'swal2-small',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
        Toast.fire({
          icon: 'success',
          title: 'Deleted!',
          background: '#4caf50',
          color: '#fff',
          customClass: {
            timerProgressBar: 'toast-succes-bar',
          }
        });
      };
    });
  };

  const HandleEdit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Edit Item',
      text: 'You can edit the item here.',
      icon: 'info',
      iconColor: '#ff9040',
      background: '#3a3a3a',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#4caf50',
      cancelButtonColor: '#ff4c5b',
      confirmButtonText: 'Edit',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'swal2-small',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        editItem(id);
      };
    });
  }

  return (
    <div className='single-item'>
      <a href={linkImage} target='_blank' rel="noopener noreferrer"><img src={urlImage} alt={altImage} /></a>
      <h3>Price: <span>{moneyFormat(Number(price))}</span></h3>
      <div className='buttons'>
      <button className='delete' onClick={HandleDelete}>
        Delete
      </button>
      <button className='edit' onClick={HandleEdit}>
        Edit
      </button>
      </div>
    </div>
  );
};

export default SingleItem;