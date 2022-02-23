import { Row, Col, Container, ListGroup, ListGroupItem, Form, FormControl } from "react-bootstrap"
import SingleChat from "./SingleChat"


const SideBarChat = () => {
    return (
        <Container >
            <Row>
                <Col xs={5}>
                    <FormControl className="mb-3" type="search" />
                   <SingleChat />
                </Col>
            </Row>
        </Container>
    )
}
export default SideBarChat
