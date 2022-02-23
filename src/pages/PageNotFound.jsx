import { Container, Row, Col } from 'react-bootstrap'

const pageNotFound =  ()=>{
     return (
         <Container>
             <Row>
                 <Col>
                 <h2>This page doesn't exits</h2>
                 </Col>
             </Row>
         </Container>
     )
}
     export default pageNotFound