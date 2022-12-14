import React, {useEffect, useState} from 'react';
import axios from "axios";

function Users() {

    const [users,setUsers]=useState([]);
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);

    // useEffect(()=>{
    //     axios("https://jsonplaceholder.typicode.com/users")
    //         .then((res)=>{
    //             setUsers(res.data);
                
    //             axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
    //                 .then((res)=>setPosts(res.data))
    //         }).catch((error)=>{
    //             console.log("error",error)
    //         })
    //         .finally(()=>setLoading(false));
    //     //getData();
    // },[]);

    // const getData = async () => {
    //    try {
    //     const { data: users} = await axios("https://jsonplaceholder.typicode.com/users");
    //     const { data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
    
    
    //     setLoading(false);
    //     setUsers(users);
    //     setPosts(posts); 
    //    }catch(error){
    //         console.log("error",error);
    //    }
    
    // };

    useEffect(()=>{
        (async()=>{
            try {
                const { data: users} = await axios("https://jsonplaceholder.typicode.com/users");
                const { data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
            
            
                setLoading(false);
                setUsers(users);
                setPosts(posts); 
               }catch(error){
                    console.log("error",error);
               }
        })();
    },[]);
  
   
  
  
  
  
    return (
    <div>
        <h2>Users</h2>

        {loading && <div>Yükleniyor...</div>}

        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

        <ul>
            {posts.map((posts)=>(
                <li key={posts.id}>{posts.title}</li>
            ))}
        </ul>
    </div>

  )
}

export default Users;