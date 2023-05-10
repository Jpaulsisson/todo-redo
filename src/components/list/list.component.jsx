import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../list/list.styles.css';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function List({ listItems, setListItems }) {
  const [newTodo, setNewTodo] = useState('');

  function toggleStatus(id) {
    const target = listItems.find((item) => item.id === id);
    target.completed = !target.completed;
    setListItems([...listItems]);
  }

  const editItem = (id) => {
    const target = listItems.find((item) => item.id === id);
    target.editing = !target.editing;
    setListItems([...listItems]);
  };

  const captureInput = (e) => {
    setNewTodo(e.target.value);
  };

  const finishEdit = (id) => {
    const target = listItems.find((item) => item.id === id);
    target.task = newTodo;
    target.editing = false;
    setListItems([...listItems]);
    setNewTodo('');
  };

  const removeItem = (id) => {
    return setListItems([...listItems].filter((item) => item.id !== id));
  };

  return (
    <div className="list-container">
      {listItems.map((todo, index) => {
        const task = todo.task;
        const id = todo.id;
        const completed = todo.completed;
        const editing = todo.editing;

        return (
          <div className="list-item-container" id={id} key={id}>
            <li className="list-item" onClick={() => toggleStatus(id)}>
              <span
                type="checkbox"
                className={
                  'checkbox' + `-${completed ? 'complete' : 'incomplete'}`
                }
              >
                {completed ? '√' : ''}
              </span>
              {!editing ? (
                <p
                  className={
                    'list-item-text' +
                    `-${completed ? 'complete' : 'incomplete'}`
                  }
                >
                  {task}
                </p>
              ) : (
                <form>
                  <input
                    type="text"
                    value={newTodo}
                    onChange={captureInput}
                    className="edit-input"
                    placeholder={task}
                  />
                  <button
                    type="submit"
                    className="finish-edit-btn"
                    onClick={() => finishEdit(id)}
                  >
                    Done
                  </button>
                </form>
              )}
            </li>
            <button onClick={() => editItem(id)} className="square-pen-icon">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button onClick={() => removeItem(id)} className="trash-can-icon">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;

List.propTypes = {
  listItems: PropTypes.array,
  setListItems: PropTypes.func,
};
