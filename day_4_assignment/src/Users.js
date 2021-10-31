
import { useState,useEffect } from "react";

function Users(){

    let [name,setName] = useState("Abhishek");
    let [age,setAge] = useState(20);

    let [users,setUsers] = useState([]);

    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>{
            setUsers(data);
            setAge(20);
            setName("Abhishek");
            console.log(data);
        })
    },[])


    return(
        <div>
            <h2>Hello iam: {name}</h2>
            <h2>My age is: {age} years</h2>
            <h1>Api Data Consumption:</h1>
            {
                users.map((user,index)=>{
                    return (
                        <div>
                        <h3>{user.id}. {user.name} & email: {user.email}</h3>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default Users;