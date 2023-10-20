import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingBackground = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 65px)",
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function LoadingIcon() {
  return (
    <LoadingBackground>
      <CircularProgress color="inherit" size={100} />
    </LoadingBackground>
  );
}
