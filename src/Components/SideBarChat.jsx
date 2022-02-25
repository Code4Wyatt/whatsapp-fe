import { Row, Col, Container, FormControl } from "react-bootstrap"
import SingleChat from "./SingleChat"
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {addNewChat} from '../redux/actions'



const SideBarChat = async() => {

const dispatch = useDispatch()
const [search, setSearch] = useState('')
const currentUser = useSelector(state => state.user.currentUser)
const chats = useSelector(state => state.chat.chatList)


const updateChat = ()=>{
    if(currentUser){
const singleChat = currentUser.chats.length === 0 ?[]:(currentUser.chats.map(c=>c.includes(search.toLowerCase())))

console.log(singleChat)
dispatch(addNewChat(singleChat[0]|| singleChat))
    }}

useEffect(()=>{
updateChat()
    }, [search, currentUser]
)


    return (
        <Container >
            <Row>{ currentUser && (
                <Col xs={5}>
                    <FormControl className="mb-3" type="search" placeholder="search" value={search} onChange={e=>setSearch(e.target.value)}/>
                   {chats.map(c=><SingleChat c={chats}/>)}
                </Col>
            )}
            </Row>
        </Container>
    )
}


export default SideBarChat
