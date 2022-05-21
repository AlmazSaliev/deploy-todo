import { Component } from "react"
import Modal  from "./Modal"

class Button extends Component{
    constructor(props){
        super(props)
        this.state={
            modal: false,
            id: props.id,
            name: props.name,
            age: props.age,
            btn: () => {props.func(this.props.id)},
        }
    }
    click= () =>{
      return this.setState((prev)=>{
            return {
                modal: !prev.modal
            }
        })
    }
    
    ren(i){
        return(
            <span key={i.id}>Ваше имя: {i.name} , вам {i.age} лет.</span>
        )
    }
    render(){
        return(
            <div key={this.state.id} className='cont'>
                {this.ren(this.state)}
                <button  onClick={this.click}>Удалить</button>
                {this.state.modal && <Modal net={this.click} id={this.state.id} yes={this.state.btn}/>}
            
            </div>
        )
    }
}
export default Button;