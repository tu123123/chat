import React from "react";
import './chat2.css';
class chatContent2 extends React.Component{
   
    render(){

      
        return(<div className="chatContent2 ct">
            <div className="av-c2">
                <img src="https://yt3.ggpht.com/ytc/AKedOLRAIbph_gdGzZ9tOuxxzrWJYHGXFLbBXDUVz6HE2w=s900-c-k-c0x00ffffff-no-rj"></img>
            </div>
            <div className="content2 cc">
                {this.props.chat}
                <div className="time">{this.props.time}</div>
            </div>
           
        </div>)
    }
}
export default chatContent2;