import React, { useState } from "react";
import "./login.css";
import login from "../images/pictoshield.png";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Login = () => {
  const [showHidePass, setShowHidePass] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  const handleBorder = (e)=>{
    e.target.classList.toggle("borderRed") 
}

  return (
    <div className="containerr">
      <div className="left-child">
        <div className="login-img">
          {" "}
          <img src={login}></img>
        </div>
      </div>
      <div className="right-child">
        {/* ---- */}
        <div className="form">
          <span className="signup">SIGN IN</span>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div>
            <h3>PASSWORD</h3>
            <ImageList
              sx={{ width: 350, height: 350 }}
              cols={4}
              rows={4}
              rowHeight={50}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img} className="hover-zoom">
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    onClick={handleBorder}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="forget-password">
            <Link to={"/forget-password"}>~Forget Password </Link>
          </div>
          <div className="form--marketing">
            <label htmlFor="okayToEmail" className="checkbox">
              Create a new account -
            </label>
            <Link to={"/register"} className="sign-up">
              Sign Up
            </Link>
          </div>
          <button className="form--submit"> Sign In </button>
        </div>
        {/* ---- */}
      </div>
    </div>
  );
};

export default Login;
