import React from 'react'
import { incNumber } from '../redux/actions';
import {decNumber} from '../redux/actions'
import {Button} from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { name } from './Marketplace';

function Homepage(props) {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();   

  return (
    <>  
      <div className="comp">
      
     
      <h1>Increment/Decrement counter</h1>
      <h3>{name}</h3>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <Button onClick={props.Decrement}><span> Decrement </span></Button>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <Button onClick={() => dispatch(incNumber())}><span> Increment </span></Button>
      </div>
  
        </div>  
    </>
  )
}

const mapStateToProps = state =>{
  return{
     changeTheNumber: state.changeTheNumber
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    Decrement: () => dispatch(decNumber())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Homepage)


