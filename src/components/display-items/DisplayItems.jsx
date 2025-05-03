import SingleItem from '../single-item/SingleItem';
import './DisplayItems.css';

const DisplayItems = ({ subs, deleteItem }) => {
  return (
    <>
      <h2>Subscriptions</h2>
      {
        subs.map(item => (
          <SingleItem
            key={item.id}
            id={item.id}
            price={item.price}
            type={item.type}
            deleteItem={deleteItem}
          />
        ))
      }
    </>
  );
};

export default DisplayItems;