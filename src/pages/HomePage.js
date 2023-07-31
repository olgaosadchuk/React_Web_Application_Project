import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container-home">
    <h1 className="title-home">KIDS TOYS</h1>
    <Link to="/toys" style={{ color: "white", fontSize: "40px" }}>
      <div className="title-toys"><h2>Go to Toys</h2></div>
    </Link>
  </div>
);

export default HomePage;