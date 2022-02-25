import {BsChatLeftTextFill, BsThreeDotsVertical} from "react-icons/bs"
import {Container, Row, Col} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
//  here need to import user data from store

const SideBarHeader = ()=>{

     const currentUser = useSelector(state => state.user.currentUser)

     return (

          <Container>
               <Row style={{border:'1px solid gray'}}>
                    <Col xs={9}>
                    <img src={currentUser.avatar} alt="avatar" style={{borderRadius:"50%"}} />
                    </Col>
                    <Col xs={3}>
                    <BsChatLeftTextFill style={{fontSize:"20px", color:"gray"}}/>
                    <BsThreeDotsVertical style={{fontSize:"20px", color:"rgb(84 101 11)"}}/>
                    </Col>
                    
               </Row>
          </Container>

          
          
          
     )
}
     export default SideBarHeader