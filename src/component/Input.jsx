import { Component } from "react"
import Button  from "./Button"

class Input extends Component{
    constructor(){
        super()
        this.state={
            value: '',
            value2: '',
            result: [],
            isModal: false,
            isModal2: false,
        }
    }
    getValue=(e)=>{ 
        this.setState(()=>{
            return{
              value: e.target.value  
            }
            
        })
    }
    getValue2=(e)=>{ 
        this.setState(()=>{
           return {
               value2: e.target.value
            }
        })
    }
    allData=(e)=>{
        e.preventDefault()
        if(this.state.value.trim().length=== 0){
            this.setState(()=>{
                 return {
                     isModal: true
                    }
            }
            )
            return
         }
         if(this.state.value2.trim().length=== 0){
            this.setState(()=>{
                return {
                    isModal2: true
                    }
                })
             return
         }
        this.setState((p)=>{
           return {
                result: [...p.result, {name:this.state.value, age:this.state.value2, id: Math.random().toString()}]
            }
        })
    }
    delet=(a)=>{
        console.log('hi');
        this.setState(()=>{
           let newprev= this.state.result.filter((el) => el.id !== a)
           return {
               result: newprev
           }
        }    
        )
        console.log(a);
        
    }
    name=()=>{
        return this.setState(()=>{
            return {
                isModal: false
            }
        })
    }
    age=()=>{
        return this.setState(()=>{
        return {
            isModal2: false
        }
        })
    }
    Textage=(a)=>{
        return(
            <div className="modal">
                <div className="div">
                    <h3>Заполните возраст пользователья</h3>
                    <button onClick={a}>Да</button>
                </div>
            </div>
        )
    }
    Textname=(a)=>{
        return(
            <div className="modal">
                <div className="div">
                    <h3>Заполните имя пользователья</h3>
                    <button onClick={a}>Да</button>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div>
                <form className="box" onSubmit={this.allData}>
                        {this.state.isModal2 && this.Textage(this.age)}
                        {this.state.isModal && this.Textname(this.name)}
                    <h2>To Do list</h2>
                    <div className="box1">
                        <input type="text" onChange={this.getValue} value={this.state.value} placeholder='Как вас зовут?'/>
                        <input type="number" onChange={this.getValue2} value={this.state.value2} placeholder='Сколько вам лет?'/>
                        <input type="submit" value="Добавить" className="button"/>
                    </div>   
                </form>
                
                <div className="box2" key={Math.random().toString()}>
                    {this.state.result.map((i)=><Button func={this.delet}  id={i.id} name={i.name} age={i.age}></Button>)}

                </div>
            </div>
        )
    }
}
export default Input