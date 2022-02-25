import { BsChatLeftTextFill, BsThreeDotsVertical, BsArrowLeftCircle, BsFillPencilFill } from "react-icons/bs"
import { Container, Row, Col, Modal } from "react-bootstrap"
import { useSelector } from 'react-redux'


const SideBarHeader = () => {

     const currentUser = useSelector(state => state.user.currentUser)

     return (

          <Container>
               <Row style={{ border: '1px solid gray' }}>
                    <Col xs={9}>
                         <img src={currentUser.avatar} alt="avatar" style={{ borderRadius: "50%" }} />
                         <p className='text-light nav_text'> <BsArrowLeftCircle /> Profile</p>

                         <Modal.Dialog>
                              <Modal.Header>
                                   <Modal.Title className='mx-3' >
                                        <img className='profile_img' alt="" src={currentUser.avatar} />
                                        <div className='name_space mt-5'>
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
                    <Col xs={3}>
                         <BsChatLeftTextFill style={{ fontSize: "20px", color: "gray" }} />
                         <BsThreeDotsVertical style={{ fontSize: "20px", color: "rgb(84 101 11)" }} />
                    </Col>

               </Row>
          </Container>




     )
}
export default SideBarHeader