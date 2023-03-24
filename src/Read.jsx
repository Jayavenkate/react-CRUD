import { Table,Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer'; 
import Paper from '@mui/material/Paper';

export function Read() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const deletedata = async (id)=>{
    await fetch(`https://6419fb10c152063412d0b3cc.mockapi.io/crud/${id}`,{
      method:"DELETE"
    })
    getData();
  }

  const getData=()=>{
    fetch("https://6419fb10c152063412d0b3cc.mockapi.io/crud",{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>setData(data));
  }
  useEffect(()=>{
    getData()
  },[]);

  return (
    <TableContainer component={Paper}>

   
    <Table  sx={{ minWidth: '450' }} aria-label="simple table">
  <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Update</TableCell>

          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((data)=>(
            <TableRow>
            <TableCell>{data.firstname}</TableCell>
            <TableCell>{data.lastname}</TableCell>
            <TableCell><Button onClick={()=>deletedata(data.id)}>Delete</Button></TableCell>
            <TableCell><Button onClick={()=>navigate(`/create/update/${data.id}`)}>Update</Button></TableCell>
            </TableRow>
          ))}
        
        </TableBody>
    </Table>
    </TableContainer>
  );
}
