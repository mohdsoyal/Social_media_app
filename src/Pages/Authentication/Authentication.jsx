import React from "react";
import { Grid, Card } from "@mui/material"; 
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from 'react-router-dom'

function Authentication() {
  return (
    <div className="h-screen flex items-center justify-center"> 
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={8} md={6} lg={5}> 
          <Card sx={{ padding: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
            <div className="flex flex-col items-center mb-5 space-y-1">
              <h1 className="text-center">Social Media Application</h1>
              <p className="text-center text-sm w-[70%]">
                Connecting Here Our Social Media Application
              </p>
            </div>

            <Routes>
            <Route path="/" element={<Login/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              
            </Routes>

      
          
        </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Authentication;
