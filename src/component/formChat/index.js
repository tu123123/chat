import React from "react";
import ChatContent from '../chatContent';
import ChatContent2 from '../chatcontent2';
import './form.css';

class form extends React.Component{
    state={
            kt:"",
      user:{
            id:1,
            chat:"22",
            time:""},
     
      
        chat:[
            {
                id:1,
                chat:"mát mẻ hẳn",
            },
            {
                id:2,
                chat:"nóng bỏ mịa ra nè",
            }
        ]
    }
    onchange=(e)=>{
        const d= new Date();
        this.setState({
            kt:e.target.value,
            user:{ id:1,
                time:d.getHours()+":"+d.getMinutes(),
                chat:e.target.value}
           
        })
    }
    componentDidUpdate(){
        if(this.state.user.chat!=""){  let a= document.querySelector(".container-c");
        a.scrollTop=a.scrollHeight;}
      
    }
    send=()=>{
        if(this.state.kt!=""){
            
            this.setState({
                kt:"",
                chat:[...this.state.chat,this.state.user]
            })
        }
        
      
    }
    render(){
        return(
            <div className="c-f">
                <div className="container-c">
                {
                    this.state.chat.map(i=>
                      i.id==1?<ChatContent2 chat={i.chat} time={i.time}/>:<ChatContent chat={i.chat} time={i.time} />
                    )
                }
                </div>
                <div className="i-f"><textarea onChange={(e)=>this.onchange(e)} value={this.state.kt}></textarea></div>
                <div className="b-f">
                <button onClick={()=>this.send()}>Gửi</button>
                </div>
            </div>
        )
    }
    
}
export default form