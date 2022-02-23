import { ListGroup } from "react-bootstrap"
import {BsCheckAll} from 'react-icons/bs'


const SingleChat = async ()=>{
     return (<>
     
     <ListGroup>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center ml-3 mb-2 mt-0 px-2">
                                <img
                                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                    className="sidebar-Home2-images ml-0 mt-0 d-flex align-items-baseline "
                                />
                                <div className="">
                                    <p className="text-dark">
                                        <strong className="p-3 "> Dominic McGregor</strong>
                                    </p>
                                    <BsCheckAll size={20} className="ml-2"/> 
                                    <small className="m-2">Assalomu Alaykum</small>
                                </div>
                            </div>
                            <div className="date">
                                <p>{new Date().getDate()}/{new Date().getFullYear()}</p>
                            </div>
                        </ListGroup.Item>

                    </ListGroup>
     </>
     
     
     )
}
     export default SingleChat