import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Create } from "./Create";
import { Read } from "./Read";
import { Update } from "./Update";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CRUD Operation
          </Typography>
          <Button onClick={() => navigate("/create")} color="inherit">Create</Button>

          <Button onClick={() => navigate("/read")} color="inherit">Read</Button>
          {/* <Button onClick={() => navigate("/update")} color="inherit">Update</Button> */}

        </Toolbar>
      </AppBar>
      <div className="main-con">
        
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update:id" element={<Update />} />
          </Routes>
        
      </div>
    </div>
  );
}
