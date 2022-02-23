
import { ListGroup } from "react-bootstrap"
import { BsCheckAll } from 'react-icons/bs'


const SingleChat = () => {
    return (

        
            <ListGroup.Item>
                <div className="d-flex align-items-center ml-3 mb-2 mt-0 px-2">
                    <img src="https://picsum.photos/60" alt=""
                        className="sidebar-Home2-images ml-0 mt-0 d-flex align-items-baseline " />
                    <div className="">
                        <p className="text-dark">
                            <strong className="p-3 "> Dominic McGregor</strong>
                        </p>
                        <BsCheckAll size={20} className="ml-2" />
                        <small className="m-2">Assalomu Alaykum</small>
                    </div>
                </div>
                <div className="date">
                    <p>{new Date().getDate()}/{new Date().getFullYear()}</p>
                </div>
            </ListGroup.Item>

        



    )
}
export default SingleChat