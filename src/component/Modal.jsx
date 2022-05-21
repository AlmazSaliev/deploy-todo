import { Component } from 'react';
import ReactDOM from 'react-dom';

// function Func(props) {
    
//     return <div className="modal">
//         <div className="div">
//             <h3>Вы точно хотите удалить этого пользователья?</h3>
//             <button id={props.id} onClick={()=>props.yes()}>Да</button>
//             <button onClick={() => props.net()}>Нет</button>
//         </div>
//     </div>
// }
// export const Modal = (props) => {
//     return <>
//         {ReactDOM.createPortal(
//             <Func yes={props.yes}  id={props.id} net={props.net}/>,
//             document.getElementById('Modal')
//         )}
//     </>
// }

class Modal extends Component{
    constructor(props){
        super()
        this.state={
            yes: ()=>{props.yes()},
            id: props.id,
            net: ()=>{props.net()},
        }
    }
    Func(props) {
    
        return <div className="modal">
            <div className="div">
                <h3>Вы точно хотите удалить этого пользователья?</h3>
                <button id={props.id} onClick={()=>props.yes()}>Да</button>
                <button onClick={() => props.net()}>Нет</button>
            </div>
        </div>
    }

    render(){
        return(
            <>
                {ReactDOM.createPortal(
                    this.Func(this.state),
                    document.getElementById('Modal')
                )}
            </>
        )
    }
}
export default Modal