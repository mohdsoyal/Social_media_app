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
            <div className="flex flex-col items-center mb-8 space-y-2 font-[Times_New_Roman]">
              <h1 className="text-3xl font-bold text-blue-800 text-center">
                Social Media Application
              </h1>
              <p className="text-center text-base text-gray-700 w-[80%] italic tracking-wide">
                Connecting here with our Social Media Application — Stay Updated, Stay Connected!
              </p>
            </div>


            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>

            </Routes>



          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Authentication;
