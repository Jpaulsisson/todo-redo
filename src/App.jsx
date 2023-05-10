import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import HandImg from '../resources/hand-img.png';
import './App.css'
import TodoForm from './components/todo-form/todo-form.component';
import List from './components/list/list.component';
import Completed from './components/completed/completed.component';

function App() {
  const [ listItems, setListItems ] = useState([]);
  const [viewingCompleted, setViewingCompleted] = useState(false);
  const [ isDisabled, setIsDisabled ] = useState(false);

  function setStatus() {
    setViewingCompleted(!viewingCompleted);
    setIsDisabled(!isDisabled);
  }


// useEffect(() => {
//   console.log(viewingCompleted);
// }, [viewingCompleted]);


  return (
    <>
      <img className='top-left-img' src={HandImg} alt="sketch of hand holding a pencil" />
      <TodoForm listItems={listItems} setListItems={setListItems} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      
      {
      viewingCompleted ? 
        <Completed listItems={listItems} setListItems={setListItems} />
      :
        <List listItems={listItems} setListItems={setListItems} viewingCompleted={viewingCompleted} />
        }
        <FontAwesomeIcon className='icon-clipboard' style={viewingCompleted ? {color: 'var(--mainClrGreen)'} : {color: 'black'}} onClick={setStatus} icon={faClipboardList} />
    </>
  )
}

export default App

