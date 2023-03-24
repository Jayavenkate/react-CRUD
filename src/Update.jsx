import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";

export function Update(){
  const [data, setData] = useState(null);
const {id} =useParams();
useEffect(()=>{
    fetch(`https://6419fb10c152063412d0b3cc.mockapi.io/crud/${id}`)
    .then((res)=>res.json())
    .then((data)=>setData(data));
  
},[id]);
    return data? <UpdateForm data={data}/>:<h1>loading.....</h1>
        
    
}
 function UpdateForm({data}) {
  const [firstname, setFirstName] = useState(data.firstname);
  const [lastname, setLastName] = useState(data.lastname);
  const navigate = useNavigate();

   const updatedata= ()=>{
    const newData= {
      firstname: firstname,
      lastname: lastname,
    }
    console.log(newData);
    fetch("https://6419fb10c152063412d0b3cc.mockapi.io/crud",{
      method:"PUT",
      body:JSON.stringify(newData),
      headers:{"Content-Type": "application/json",},

    })
   navigate("/read");
  }
  return (
    <div className="form">
      <TextField
        onChange={(event) => setFirstName(event.target.value)}
        label="FirstName"
        variant="outlined"
      />
      <br />
      <TextField
        onChange={(event) => setLastName(event.target.value)}
        label="LastName"
        variant="outlined"
      />
      <br />
      <Button onClick={updatedata} type="submit" variant="contained">
        Update
      </Button>
    </div>
  );
}