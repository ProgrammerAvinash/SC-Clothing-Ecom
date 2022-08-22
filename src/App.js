import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header/Header";
import SignInAndOut from "./Components/Sign-IN-Out";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignInAndOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
