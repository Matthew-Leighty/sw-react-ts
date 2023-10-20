import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Dispatch, SetStateAction } from "react";
import { MockImageApi } from "../utils/mockApi";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 65,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

interface AppBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setUploadModalOpen: Dispatch<SetStateAction<boolean>>;
  imageApi: MockImageApi;
}

export default function PrimarySearchAppBar({
  searchTerm,
  setSearchTerm,
  setUploadModalOpen,
}: AppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Images..."
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              onClick={() => setUploadModalOpen(true)}
              size="large"
              aria-label="upload photo"
              color="inherit"
            >
              <FileUploadIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
