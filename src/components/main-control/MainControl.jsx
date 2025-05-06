import { useState } from 'react';
import Balance from "../balance/Balance";
import FormAddSubs from "../form-add-subs/FormAddSubs";
import ResetBtn from "../reset-btn/ResetBtn";
import DisplayItems from '../display-items/DisplayItems';
import './MainControl.css';

const MainControl = ({ count, setCount, setIsValid, subs, setSubs, spent, setSpent }) => {

  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState('');

  const handleReset = () => {
    setCount(0);
    setIsValid(false);
    setSubs([]);
    setType('');
    setPrice('');
    setSpent(0);
    localStorage.removeItem('count');
    localStorage.removeItem('isValid');
    localStorage.removeItem('subs');
    localStorage.removeItem('spent');
  };

  const deleteItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList);
    localStorage.setItem('subs', JSON.stringify(newList));
  };

  const editItem = (id) => {
    setEditId(id);
    const itemToEdit = subs.find((item) => item.id === id);
    if (itemToEdit) {
      setType(itemToEdit.type);
      setPrice(itemToEdit.price);
    };
  };


  return (
    <>
      <article className="main-control">
        <div>
          <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
          <ResetBtn onClick={handleReset}>Reset</ResetBtn>
        </div>
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
          editId={editId}
          setEditId={setEditId}
          spent={spent}
          count={count}
        />
      </article>
      <DisplayItems
        subs={subs}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </>
  );
}

export default MainControl;