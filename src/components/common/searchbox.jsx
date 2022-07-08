import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.search.value)
        alert(this.search.value)
    }

    render() { 
        return ( 
            <div className="searchbox col-10 col-sm-9 col-md-6">
                <Form onSubmit={(value)=>{this.handleSubmit(value)}}>
                    <FormGroup>
                        <Row>
                            <Col className='d-flex' >
                                <Input md={10} className='form-control bold search-box ' name='search' innerRef={(input)=>{this.search=input}} placeholder='Type cusine name' />
                                <button md={2} className="searchbtn black "> search </button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </div>
         );
    }
}
 

export default SearchBox;