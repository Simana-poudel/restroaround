import { Component, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";


function Dropdowntable (){
  const getInitialState=()=>{
    const value = 1;
    return value;
  };
  const [value, setValue] = useState(getInitialState)
  const handleChange=(e)=>{
    console.log(e.target.value)

    setValue(e.target.value);
  };
    return(
        <div>
  <select value={value} onChange={handleChange} id = "dropdown">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
</select>
           </div>
        );
    }


export default Dropdowntable;