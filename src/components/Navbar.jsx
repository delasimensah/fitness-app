import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

// mui
import { Stack } from "@mui/material";

const color = "#3a1212";

const linkStyle = {
  textDecoration: "none",
  color,
};

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "123px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt=""
          style={{ width: "45px", height: "45px", margin: "0px 18px" }}
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        fontFamily="Nunito"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{ ...linkStyle, borderBottom: "3px solid #ff2625" }}
        >
          Home
        </Link>
        <a href="#exercises" style={linkStyle}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
