import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import TableContainer from '@mui/material/TableContainer'; 
import Paper from '@mui/material/Paper';

export function Create() {


  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const navigate = useNavigate();

   const postdata= ()=>{
    const newData= {

      firstname: firstname,
      lastname: lastname,
    }
    // console.log(newData);
    fetch("https://6419fb10c152063412d0b3cc.mockapi.io/crud",{
      method:"POST",
      body:JSON.stringify(newData),
      headers:{"Content-Type": "application/json",},

    })
   navigate("/read");
  }
  return (
    <Paper className="form" elevation={3}>
      
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
      <Button onClick={postdata} type="submit" variant="contained">
        Submit
      </Button>
    </Paper>
  );
}
