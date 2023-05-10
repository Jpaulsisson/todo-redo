import { useState } from 'react';
import PropTypes from 'prop-types'
import '../todo-form/todo-form.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


//// pulling in listItems from App to hold/alter the whole list
function TodoForm({ listItems, setListItems, isDisabled }) {
////state management for the new todo list item
  const [ newTodo, setNewTodo ] = useState('');

  function generateID() {
    return Math.floor(Math.random() * 923868909);
  }

////every time a letter is added or removed to the input field, it's captured here.
  const captureInput = (e) => {  
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemToAdd = {
      id: generateID(),
      task: newTodo,
      completed: false,
      editing: false
    }
    setListItems([...listItems, itemToAdd]);
    setNewTodo('');
  }

  return (
    <div className="todo-form-container">
      <h1 className='header'>{`Today's Tasks`}</h1>
      <form className='input-form-container'>
        <label htmlFor='task-input' className='task-input-label' >ENTER TASK</label>
        <input disabled={isDisabled} type='text' value={newTodo} onChange={captureInput} id='task-input' className='task-input' placeholder='ENTER TASK'/>
        <button type='submit' className='submit-button' onClick={handleSubmit} >
          <FontAwesomeIcon icon={faPlus} className='plus-icon'/>
        </button>
      </form>
    </div>
  )
}

export default TodoForm

TodoForm.propTypes = {
  listItems: PropTypes.array,
  setListItems: PropTypes.func,
  isDisabled: PropTypes.bool,
}