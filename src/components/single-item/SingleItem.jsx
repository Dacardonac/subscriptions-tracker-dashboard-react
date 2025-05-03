import {  moneyFormat } from '../../helpers/helpers';
import './SingleItem.css'

const SingleItem = ({ price, type, id }) => {

  const urlImage = `/public/images/${type}.webp`;
  console.log(id);

  return (
    <div className='single-item'>
      <a href="#"><img src={urlImage} alt="" /></a>
      <h3>Price: {moneyFormat(Number(price))}</h3>
      <div className='buttons'>
      <button className='delete'>
        <a href="">Delete</a>
      </button>
      <button className='edit'>
        <a href="">Edit</a>
      </button>
      </div>
    </div>
  );
};


export default SingleItem;