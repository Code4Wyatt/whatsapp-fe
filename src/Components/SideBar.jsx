import SideBarHeader from "./SideBarHeader"
import SideBarAlert  from "./SideBarAlert"
import SideBarChat  from "./SideBarChat"
import {Container, Row, Col} from 'react-bootstrap'



const SideBar =  ()=>{

     return (
<Container className="flex-column justify-content-between">
     <Row >
          <Col xs={12}>
               <SideBarHeader />
           </Col >    
           <Col xs={12}><SideBarAlert /></Col>
            <Col xs={12}><SideBarChat /></Col>   
          
     </Row>
</Container>

     )
}

export default SideBar