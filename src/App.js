import { HStack } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

export default function App() {
  return (
    <Router>
      <div>
        <HStack spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
        </HStack>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
