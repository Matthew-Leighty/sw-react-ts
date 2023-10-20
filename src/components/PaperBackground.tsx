import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const PaperBackground = styled(Paper)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  borderRadius: 0,
  overflow: "hidden",
}));
