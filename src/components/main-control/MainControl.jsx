import { useState, useEffect } from 'react';
import Balance from "../balance/Balance";
import FormAddSubs from "../form-add-subs/FormAddSubs";
import './MainControl.css';
import DisplayItems from '../display-items/DisplayItems';

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState('');
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const storeSubs = localStorage.getItem('subs');
    if (storeSubs) {
      setSubs(JSON.parse(storeSubs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('subs', JSON.stringify(subs));
  }, [subs]);

  const deleteItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList);
  };

  const editItem = id => {
    setEditId(id);
    subs.map(item => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
      }
    });
  };


  return (
    <>
      <div className="main-control">
        <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
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
      </div>
      <DisplayItems
        subs={subs}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </>
  );
}

export default MainControl;