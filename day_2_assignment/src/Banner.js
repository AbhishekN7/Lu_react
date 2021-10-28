import { Component } from "react";

class Banner extends Component{
    
    name = "Abhishek";

    render(){
        return(
            <div>
                <h1 className = "banner">Class component example</h1>
                <p>{this.name}</p>
            </div>
        )
    }
}

export default Banner