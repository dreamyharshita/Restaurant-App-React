import React from "react";
import './ItemModal.css';

import ReactDOM from 'react-dom';


const Backdrop=props=>{
    return <div className="backdrop" onClick={props.onClose}></div>
}

const ModalOverlay=props=>{
    return <div className="modal">
        <div className="content"> {props.children}</div>
    </div>
}
 
const ItemModal=(props)=>{
    return (<React.Fragment>
  
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
        </React.Fragment>);
}

export default ItemModal;