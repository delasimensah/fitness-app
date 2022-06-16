import { Routes, Route } from "react-router-dom";

// mui
import { Box } from "@mui/material";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

import "./App.css";

const App = () => {
  return (
    <Box width="400px" m="auto" sx={{ width: { xl: "1488px" } }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  );
};

export default App;
