import { Button } from "bootstrap";
import { Card, CardBody, div, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import Dropdowntable from "../common/Dropdowntable";



function Waitercontent() {
    return(
        <>
        <Row>
  <Col sm="3">
   <Card body>
      <CardTitle tag="h4">
       Categories
      </CardTitle>
      <li className="Categoriestitle">
        <a href="#">Drinks</a>
      </li>
      <li className="Categoriestitle">
        <a href="#">Drinks</a>
      </li>
      <li className="Categoriestitle">
        <a href="#">Drinks</a>
      </li>
      <li className="Categoriestitle">
        <a href="#">Drinks</a>
      </li>
    </Card>
  </Col>
  <Col sm="9">
    <Row>
    <div className="menu">1. Drinks</div>
  <Col sm="3">
  <Card body>
      <CardTitle tag="h5">
        Tea
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="../assets/dish.jpeg"
      top
      width="100%">

      </CardImg> 
        <div>No of dishes<Dropdowntable /></div>
    <button>Select</button>
     
    </Card>
  </Col>
  <Col sm="3">
  <Card body>
      <CardTitle tag="h5">
        Tea
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="../assets/dish.jpeg"
      top
      width="100%">

      </CardImg> 
        <div>No of dishes<Dropdowntable /></div>
    <button>Select</button>
     
    </Card>
  </Col>
  <Col sm="3">
  <Card body>
      <CardTitle tag="h5">
        Tea
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="../assets/dish.jpeg"
      top
      width="100%">

      </CardImg> 
        <div>No of dishes<Dropdowntable /></div>
    <button>Select</button>
     
    </Card>
  </Col>
  <Col sm="3">
  <Card body>
      <CardTitle tag="h5">
        Tea
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="../assets/dish.jpeg"
      top
      width="100%">

      </CardImg> 
        <div>No of dishes<Dropdowntable /></div>
    <button>Select</button>
     
    </Card>
  </Col>
  <Col sm="3">
  <Card body>
      <CardTitle tag="h5">
        Tea
      </CardTitle>
      <CardImg
      alt="Card image cap"
      src="../assets/dish.jpeg"
      top
      width="100%">

      </CardImg> 
        <div>No of dishes<Dropdowntable /></div>
    <button>Select</button>
     
    </Card>
  </Col>
  </Row>
  </Col>
</Row>
        </>
    );
}

export default Waitercontent;