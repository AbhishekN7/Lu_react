
import { useState,useEffect } from "react";

function Users(){

    let [name,setName] = useState("Abhishek");
    let [age,setAge] = useState(21);

    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
        })
    },[])


    return(
        <div>
            <h1>Api Consumption</h1>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={()=>{setName("dwayne")}}></button>

        </div>
    )

}

export default Users;