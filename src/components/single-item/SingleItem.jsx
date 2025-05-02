import {  moneyFormat } from '../../helpers/helpers';
import './SingleItem.css'

const SingleItem = ({ price, type, id }) => {

  const urlImage = `/public/images/${type}.webp`;
  console.log(id);

  return (
    <div className='single-item'>
      <img src={urlImage} alt="" />
      <h3>Price: {moneyFormat(Number(price))}</h3>
      <button>
        <a href="">Delete</a>
      </button>
      <button>
        <a href="">Edit</a>
      </button>
    </div>
  );
};


export default SingleItem;