import { useState } from 'react';
import Balance from "../balance/Balance";
import FormAddSubs from "../form-add-subs/FormAddSubs";
import './MainControl.css';
import DisplayItems from '../display-items/DisplayItems';

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const deleteItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList);
  };


  return (
    <>
      <div className="main-control">
        <Balance count={count} />
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
        />
      </div>
      <DisplayItems 
        subs={subs}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default MainControl;