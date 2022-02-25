import {Container, Row, Col} from 'react-bootstrap'
import {IoSearch} from 'react-icons/io5'
import { BsThreeDotsVertical } from "react-icons/bs";

const HMHeader =  ()=>{


     // fetch profile by ID

     
     return (
     <Container>
          <Row className="d-flex">
               <Col xs={2} >
                    <img src="https://picsum.photos/50" alt="avatar" style={{borderRadius:"50%"}}/>
               </Col>
               <Col xs={7}><h2 style={{fontSize:"16px", color:"rgb(17 27 33)"}}>NAME SURNAME</h2>
               <h3 style={{fontSize:"13px", color:"rgb(102 119 129)"}}>all people in this room</h3>
               </Col>
               <Col xs={3} ><IoSearch style={{fontSize:"20px", color:"rgb(84 101 11)", }}/><BsThreeDotsVertical style={{fontSize:"20px", color:"rgb(84 101 11)"}}/></Col>
          </Row>
     </Container>
          )
}
     export default HMHeader