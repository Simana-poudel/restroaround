import { useState } from "react";
import { Table } from "reactstrap";




function Cook(){
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
        <>

        helllo
        <Table bordered>
  <thead>
    <tr>
      <th>
        Date
      </th>
      <th>
        Table
      </th>
      <th>
        Detail
      </th>
      <th>
        Status
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
      <select value={value} onChange={handleChange} id = "dropdown">
    <option value="1">Not Prepared</option>
    <option value="2">Ready</option>
    </select>
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
      <select value={value} onChange={handleChange} id = "dropdown">
    <option value="3">Not Prepared</option>
    <option value="4">Ready</option>
    </select>      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
      <select value={value} onChange={handleChange} id = "dropdown">
    <option value="5">Not Prepared</option>
    <option value="6">Ready</option>
    </select>      </td>
    </tr>
  </tbody>
</Table>
        </>
    );
}
export default Cook;