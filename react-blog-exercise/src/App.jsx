import React from "react";
import { Header } from "./Header/Header";
import { BlogList } from "./BlogList/BlogList";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BlogList />
    </React.Fragment>
  );
}

export default App;
