import { Container, Row, Col } from 'react-bootstrap'
import MessageSection from '../Components/MessageSection'
import SideBar from '../Components/SideBar'

const HomePage = () => {

     return (
          <Container>
               <Row>
                    <Col xs={12} md={5} >
                         <SideBar />
                    </Col>
                    <Col xs={12} md={7} >
                         <MessageSection />
                    </Col>
               </Row>
          </Container>
     )

}
export default HomePage