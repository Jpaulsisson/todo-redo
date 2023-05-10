import '../completed/completed.styles.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Completed({ listItems, setListItems }) {
  const completedItems = listItems.filter((item) => item.completed === true);

  const removeItem = (id) => {
    return setListItems([...listItems].filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    return setListItems([...listItems].filter((item) => item.completed !== true));
  }

  return (
    <>
      <div className="completed-container">
        {completedItems.map((item) => {
          const id = item.id;
          const task = item.task;

          return (
            <div className="completed-item-container" key={id} id={id}>
              <div className="completed-item">
              <span
                type="checkbox"
                className='checkbox'  
              >
                √
              </span>
              <p className='completed-item-text' >{task}</p>
              </div>
              <button onClick={() => removeItem(id)} className="trash-can-icon">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          );
        })}
      </div>
      <div className="button-div">
        <button className='delete-all-btn' onClick={deleteAll} >Clear Completed Tasks</button>
      </div>
    </>
  );
}

export default Completed;

Completed.propTypes = {
  listItems: PropTypes.array,
  setListItems: PropTypes.func,
};
