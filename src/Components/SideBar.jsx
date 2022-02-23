import SideBarHeader from "./SideBarHeader"
import SideBarAlert  from "./SideBarAlert"
import SideBarChat  from "./SideBarChat"
import {Container, Row, Col} from 'react-bootstrap'


const SideBar =  ()=>{
     return (
<Container>
     <Row>
          <Col xs={12}>
               <SideBarHeader />
               <SideBarAlert />
               {/* <SideBarChat /> */}
          </Col>
     </Row>
</Container>

     )
}
     export default SideBar