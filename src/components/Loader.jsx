import React from "react";
import { Rings } from "react-loader-spinner";

// mui
import { Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Rings color="#2c3e50" />
    </Stack>
  );
};

export default Loader;
