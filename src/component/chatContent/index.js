import React from "react";
import './chatContent.css';
class chatContent extends React.Component{
    render(){
        return(<div className="chatContent ct">
            <div className="av-c">
                <img src="https://i.pinimg.com/originals/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg"></img>
            </div>
            <div className="content">
            {this.props.chat}
                <div className="time">{this.props.time}</div>
            </div>
        </div>)
    }
}
export default chatContent;