import React, { useState ,useEffect,useRef} from "react";
import { RiFileAddLine } from "react-icons/ri";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value: "");
  const inputRef = useRef(null);

  useEffect(()=> {
    inputRef.current.focus();
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };
  return (
    
    <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Add a Note !'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <RiFileAddLine onClick={handleSubmit}  className="add-icon"
        />
      </>
    )}
  </form>
  );
}

export default TodoForm;
