import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import SearchBox from '../components/common/searchbox';
import Login from './Login';
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
  return (
    <div>
       <div className='container'>
         <div className='row'>
          <div className='RestroAround col-md-6' href="/">RestroAround</div>
          <div className='col-md-6 p-2'> <Login />  </div>
         </div>
       </div>
<SearchBox />
<Card inverse>
<CardImg className="Backgroundimg"
  alt="Card image cap"
  src="./assets/Background.png"
  width="100%"
/>
</Card>
</div>
  );
}
}

export default Home;
