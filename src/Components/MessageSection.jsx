import { Container, Row, Col } from 'react-bootstrap'
import HMHeader  from './HMHeader'
import HystoryMessage  from './HystoryMessage'
import HMFooter  from './HMFooter'


const MessageSection = () => {
    return (
        <Container>
            <Row className="flex-column justify-content-between">
                <Col >
                    <HMHeader />
                    </Col>
                    <Col>
                    <HystoryMessage /></Col>
                    <Col>
                    <HMFooter />
                </Col>
            </Row>
        </Container>


    )
}

export default MessageSection