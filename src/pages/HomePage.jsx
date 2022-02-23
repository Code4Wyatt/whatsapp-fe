import { Container, Row, Col } from 'react-bootstrap'
import MessageSection from '../Components/MessageSection'


const HomePage = () => {

     return (
          <Container>
               <Row>
                    <Col xs={12} md={5} >
                         <h2>Chat section</h2>
                    </Col>
                    <Col xs={12} md={7} >
                         <MessageSection />
                    </Col>
               </Row>
          </Container>
     )

}
export default HomePage