import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [items,setitems] = useState([]);
  const [title,setTitle] = useState('');
  const [isEditing,setIsEditing] = useState(false);
  const [editingIndex,setEditingIndex] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newItem = {title};
    if(isEditing){
      const updateditmes = [...items];
      updateditmes[editingIndex] = newItem;
      setitems(updateditmes);
      setIsEditing(false);
      setEditingIndex(null);
    }else{
      setitems([...items,newItem])
    }
    setTitle('');
    setCount(0);
  };

  const handleEditing = (index)=>{
    const item = items[index];
    setTitle(item.title);
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleDelete = (index)=>{
    const updatedItems = items.filter((_,i)=>i!=index);
    setitems(updatedItems);
  }

 return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Items Collection Manager</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="item Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          {isEditing ? 'Update item' : 'Add item'}
        </button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>
            <button style={{ marginLeft: '10px' }} onClick={() => handleEditing(index)}>
              Edit
            </button>
              <button onClick={() => setCount((count) => count + 1)}>vote {count}
             </button>
            <button style={{ marginLeft: '5px', color: 'red' }} onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
