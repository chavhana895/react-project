import React, { useState } from 'react'
import {useSelector,  useDispatch }  from 'react-redux'

const Employees = () =>{
  const dispatch = useDispatch()
 const emps = useSelector((state) => state.emps);
 const handleClick = id => dispatch({
   type: 'ADD_EMP',
   payload: id,
 })

 if(!emps || !emps.length){
return <h1>No Employees</h1>
}

return(
  <ul>
    {emps.map(todo => <li onClick={ () => handleClick(emps.id)}>{emps.label}</li>)}
  </ul>
)
}

const EmpInput = () =>{

   const dispatch = useDispatch();
   const [newEmp, setEmp] = useState();
   const handleChange = event => setEmp(event.target.value); 
   const handleClick = () => dispatch(
     {
       type:'ADD_EMP',
       payload:{
         label: newEmp,
         id: Math.ceil(Math.random() *100)
       }
     }
   )
   return(
     <>
     <input value={newEmp} onChange={handleChange} type='text' />
     <button onClick={handleClick}>Add Employee</button>
     </>
   )
}

function EmpList() {
  return (
    <div>
      <p>Employee List</p>
      <EmpInput/>
      <Employees/>
    </div>
  )
}

export default EmpList