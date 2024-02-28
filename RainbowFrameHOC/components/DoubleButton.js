import React from "react";

class DoubleButton extends React.Component{
    caption1Click=()=>{
        this.props.cbPressed(1);
    }
    caption2Click=()=>{
        this.props.cbPressed(2);
    }
    render (){
        return (
            <div>
                <input type="button" value={this.props.caption1} onClick={this.caption1Click}/>
                {this.props.children}
                <input type="button" value={this.props.caption2} onClick={this.caption2Click}/>
            </div>
        );
    }
}

export default DoubleButton;