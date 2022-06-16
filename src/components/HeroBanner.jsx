import React from "react";
// import heroBannerImage from "../assets/images/banner.png";
// import heroBannerImage2 from "../assets/images/banner2.jpg";
import heroBannerImage3 from "../assets/images/banner3.jpg";

// mui
import { Box, Stack, Typography } from "@mui/material";

const color = "#2c3e50";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color={color} fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>

      <Typography fontSize="20px" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>

      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: color,
            padding: "14px",
            fontSize: "18px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>

      <Typography
        fontWeight={600}
        color={color}
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "195px",
        }}
      >
        Exercise
      </Typography>

      <img
        src={heroBannerImage3}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
