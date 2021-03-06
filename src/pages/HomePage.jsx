import { Container, Row, Col } from 'react-bootstrap'
import MessageSection from '../Components/MessageSection'
import SideBar from '../Components/SingleChat'


const HomePage = () => {

     return (
          <Container fluid style={{marginTop:"1rem"}}>
               <Row>
                    <Col xs={12} md={5} >
                         
                         <SideBar />
                    </Col>
                    <Col xs={12} md={9} >
                         <MessageSection />
                    </Col>
               </Row>
          </Container>
     )

}
export default HomePage