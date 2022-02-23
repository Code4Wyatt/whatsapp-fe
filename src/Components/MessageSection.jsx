import { Container, Row, Col } from 'react-bootstrap'
import HMHeader  from './HMHeader'
import HystoryMessage  from './HystoryMessage'
import HMFooter  from './HMFooter'


const MessageSection = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <HMHeader />
                    <HystoryMessage />
                    <HMFooter />
                </Col>
            </Row>
        </Container>


    )
}

export default MessageSection