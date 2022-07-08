import { Component } from "react";
import Dropdowntable from "../common/Dropdowntable";
import SearchBox from "../common/searchbox";
import Waitercontent from "../content/Waitercontent";


class Waiterhome extends Component{
    constructor(props) {
        super(props) ;
            this.state = {

            }
    }

render(){
    return(
        <div>
               <div className='container'>
                   <div className='row'>
                       <div className='RestroAround col-md-6' href="/">RestroAround</div>
                 </div>
                </div>
    <SearchBox />
   <div>
   <div className="d-flex justify-content-center p-5">
    <div className="tableno">Table No</div>
 <Dropdowntable />
 </div>
 </div>
    <Waitercontent />
           </div>
        );
    }
}

export default Waiterhome;