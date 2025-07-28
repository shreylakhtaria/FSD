import { Component } from "react";
class Prop extends Component {

    render(){
        const {dept,institute} = this.props
        return(
            <div>   
                <h1>welcome to react js -  {dept} , {institute}</ h1>
            </div>
        )
    }
}