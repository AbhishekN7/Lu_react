import Nav from './Nav';
import { useState } from 'react';

function Header(props){
    let [country,setCountry] = useState("India");

    let name = "LetsUpgrade";

    function changeName() {
        
        setCountry('Australia');
    }

    return(
        <div>
            <h1>Header</h1>
            <p>{name}</p>
            <p>{country}</p>
            <p>Data recieved from props = {props.data}</p>
            <Nav/>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}


export default Header;