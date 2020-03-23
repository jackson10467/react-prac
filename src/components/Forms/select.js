import React from 'react';
import "./form.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Select = (props) => (
	<>	
    <form action="$">
    <label for={props.label}>{props.label}</label>
    <input
      list="list"
      name={props.label}
      label={props.label}
      placeholder={props.label}
      className={props.type} />
      <datalist id="list">
      <option value={props.option}>{props.option}</option>
      <option value={props.option2}>{props.option2}</option>
      <option value={props.option3}>{props.option3}</option>
      </datalist>
      

    </form>
  </>
)

export default Select; 
