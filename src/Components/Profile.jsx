import React from 'react'
import { Card, Col, Modal, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircle, BsFillPencilFill } from 'react-icons/bs'

export const Profile = () => {
  return (
      <>
                <Row className=''>
                    <Col xs={3} >
                    <div className='nav_profile'>

    <p className='text-light nav_text'> <BsArrowLeftCircle  /> Profile</p>
  </div>
  <Modal.Dialog>
  <Modal.Header>
    <Modal.Title className='mx-3' >
         <img className='profile_img' src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
 />
       <div className= 'name_space mt-5'>
            <p className='mb-4 ' >Name</p>
            <h3>Asadbek</h3> <BsFillPencilFill className='icons' />
       </div>
    </Modal.Title>
    <br />
  </Modal.Header>

  <Modal.Body>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Adipisci, consequatur.

    </p>
  </Modal.Body>

  <Modal.Title>
       <p className='m-4'>Description</p>
       <BsFillPencilFill className='icon2nd' />
  </Modal.Title>

</Modal.Dialog>
                    </Col>
                    </Row>
                    </> )
}
