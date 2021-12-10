import { useEffect , useState} from "react";
import axios from "axios";

export default () =>{
    const [userList , setUserList] = useState([]);
    const [name, setName]= useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [isEditMode, setIsEditMode]=useState(false);
    useEffect(() =>{
        Fetchdata();
       
    },[]);

    const Fetchdata=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>{
            console.log(response.data);
            if (response && response.data) {
                setUserList(response.data)
            }
        })
    }
  const onNameChange =(event) =>{
      setName(event.target.value);
  }
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const onEmailChange =(event) =>{
    setEmail(event.target.value);
}
const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };


const onFormSubmit =(event) =>{
    event.preventDefault();
    console.log(name, email);
    axios.post("https://jsonplaceholder.typicode.com/users",{ 
        name,
        username,
        userId: 1,
        email,
        phone,
        website,}).then((response)=>{
        console.log(response);
        alert("Added");
        Fetchdata();
        setName("");
        setUserName("");
        setEmail("");
        setPhone("");
        setWebsite("");
    })
}
const onDelete=(id)=>{
    axios.delete("https://jsonplaceholder.typicode.com/users/"+ id).then((response)=>{
        if(response){
            Fetchdata();
            alert("Deleted");
        }
    })
}
const onEdit = (userObject)=>{
   console.log(userObject);
   setIsEditMode(true);
   setName(userObject.name);
   setUserName(userObject.username);
   setEmail(userObject.email);
   setPhone(userObject.phone);
   setWebsite(userObject.website);
}
const onReset= (event)=>{
   event.preventDefault();
   setIsEditMode(false);
   setName("");
   setUserName("");
   setEmail("");
   setPhone("");
   setWebsite("");

}

    return(
        <>
        <h1>From Userhooks</h1>
        <h2>User Form</h2>
        <form onSubmit={onFormSubmit}>
            <label>Name</label>
            <input name="name" value={name} onChange={onNameChange}/>
            <label>User Name</label>
          <input name="username" value={username} onChange={onUserNameChange} />
            <label>Email</label>
            <input name="email" value={email} onChange={onEmailChange}/>
            <label>Phone</label>
          <input name="phone" value={phone} onChange={onPhoneChange} />
          <label>Website</label>
          <input name="website" value={website} onChange={onWebsiteChange} />
            <button type="submit">{isEditMode?"Update":"Submit"}</button>
            {isEditMode && <button onClick={onReset}>Reset</button>}
        </form>
        <table>
            <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Options</th>
            <th>Edit</th>
            </tr>
            </thead>
            <tbody>
                 {userList.map((user, index)=>{
                     return(
                         <tr key={user.id}>
                             <td>{user.id}</td>
                             <td>{user.name}</td>
                             <td>{user.username}</td>
                             <td>{user.email}</td>
                             <td>{user.phone}</td>
                             <td>{user.website}</td>
                             <td><button onClick={()=>{onDelete(user.id)}}>Delete</button></td>
                             <td><button onClick={()=>{onEdit(user)}}>Edit</button></td>
                         </tr>
                     )
                 })}
            </tbody>
        </table>
        </>
    )
}