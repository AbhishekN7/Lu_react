
import {useState} from 'react';

function Header(props){

    let [country,setCountry]=useState("India");
    

    let name="Letsupgrade";

  

    function changeName(){

       setCountry("Australia");
    }

    return(
        <div>
            <h1 className="welcome">Welcome to the News App</h1>        
            <h3 className="welcome">Here you can find the News of your interest</h3>        

        </div>
        
    )

}

export default Header;