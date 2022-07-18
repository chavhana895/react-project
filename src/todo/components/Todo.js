import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../redux/actions'
// import {addTodo, deleteTodo, removeTodo} from '../todo/redux/actions/index'
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {

  const [inputData, setInputData] = useState('')
  const list = useSelector((state)=> state.todoReducers.list)
  const dispatch = useDispatch()
  return (
    <>
    <div className='container'>
        <div className='child-comp'>
            <figure>
                <figcaption> Add Your list here </figcaption>
            </figure>
            <div className='addItems'>
              <input type='text' value={inputData} onChange={(event)=> setInputData( event.target.value)} placeholder='write add items' />
              <button onClick={()=> dispatch(addTodo(inputData), setInputData(''))}>Submit </button>
            </div>
            <div className='showItems'>
              {
                list.map((elem) =>{
                  return(
                  <div className='eachItem' key={elem.id}> 
                    <h3> {elem.data}  <DeleteIcon  title='Delete item' onClick={()=> dispatch(deleteTodo(elem.id))}></DeleteIcon> </h3>  
                  </div>
                  )
                })
              }
            </div>

            <div className='showItems'>
               <button className='remove-all' onClick={()=>dispatch(removeTodo())}>
                   <span> Check List </span>
               </button>
            </div>
        </div>
    </div>
    </>
  ) 
}

export default Todo