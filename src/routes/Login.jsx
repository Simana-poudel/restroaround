import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            open:false,
            email:"",
            password:""
        };
      }

render() {
    const loginBtnHandel=()=>{
          this.setState({
            open:!this.state.open
          })
        }
    const handleOnChange=(e)=>{
        console.log(e.target.name)
          let name=e.target.name
          this.setState({
            [name]:e.target.value
          })
        }
    const loginButtonHandel=()=>{
          this.setState({
            open:false
          })
        alert(this.state.email)
        console.log({Email:this.state.email, Password:this.state.password})
    }
        return (
          <div>
            <div className='loginbtn'>
          <Button
            className='Login'
            onClick={loginBtnHandel}
          >
            Login
          </Button>
          </div>
          <Modal isOpen={this.state.open} toggle={loginBtnHandel}>
            <ModalHeader className='loginRestroAround'
              toggle={loginBtnHandel}
            >
              RestroAround
            </ModalHeader>
            <ModalBody>
            <Input placeholder='Email Address' type='text' name='email' onChange={handleOnChange} ></Input>
            <Input placeholder='Password' type='password' name='password' onChange={handleOnChange} ></Input>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={loginButtonHandel}
              >
              <Link className='Login' to="/waiter">Login For waiter</Link>{" "}
              </Button>
              <Button
                color="primary"
                onClick={loginButtonHandel}
              >
              <Link className='Login' to="/cook">Login For cook</Link>{" "}
              </Button>
              {' '}
              <Button onClick={loginBtnHandel}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>                         
        );
      }
      }
      
      export default Login;
      
