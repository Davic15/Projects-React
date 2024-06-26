import { useState } from 'react'
import { Item } from './Components/Item';
import './styles/styles.css'

function App() {
  const [items, setItems] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove
    });
    setItems(newItems);
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div className='shopping-list'>
        <h2>Items to buy</h2>
        <form onSubmit={onSubmit}>
          <input type='text' name='item' placeholder='Add a new item' required />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
