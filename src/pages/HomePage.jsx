import { Container, Row, Col } from 'react-bootstrap'
import MessageSection from '../Components/MessageSection'
import SingleChat from '../Components/SingleChat'


const HomePage = () => {

     return (
          <Container>
               <Row>
                    <Col xs={12} md={5} >
                         <h2>Chat section</h2>
                         <SingleChat />
                    </Col>
                    <Col xs={12} md={7} >
                         <MessageSection />
                    </Col>
               </Row>
          </Container>
     )

}
export default HomePage