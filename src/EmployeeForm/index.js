import React from 'react';
import './styles.css';
// import { reduxForm } from 'redux-form';

const EmployeeForm = () => (
  <form
    className="EmployeeForm-form"
    onSubmit=''
  >
    <div>
      <input
        type="text"
        placeholder="First Name"
        className="EmployeeForm-input"
      
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Last Name"
        className="EmployeeForm-input"
       
      />
    </div>
    <button
      type="submit"
      className="EmployeeForm-button"
    >
      Submit
    </button>
  </form>
);

export default (EmployeeForm);
