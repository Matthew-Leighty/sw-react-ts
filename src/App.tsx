import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useMemo, useState } from "react";
import { PaperBackground } from "./components/PaperBackground";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import { muiTheme } from "./utils/muiTheme";
import UploadModal from "./components/UploadModal";
import StyledImageList from "./components/ImageList";
import LoadingIcon from "./components/LoadingIcon";
import { MockImageApi } from "./utils/mockApi";
import { Alert } from "@mui/material";
import { ImageData } from "./types/Images.types";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [images, setImages] = useState<ImageData[]>([]);

  const imageApi = useMemo(() => new MockImageApi(), []);

  useEffect(() => {
    setLoading(true);
    imageApi.getImages(searchTerm).then((r) => {
      if (r.error) {
        setError(r.error);
        return;
      }
      if (r.data) {
        setImages(r.data);
      }
      setError("");
      setLoading(false);
    });
  }, [searchTerm, imageApi]);

  return (
    <ThemeProvider theme={muiTheme}>
      <PaperBackground>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <PrimarySearchAppBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setUploadModalOpen={setUploadModalOpen}
          imageApi={imageApi}
        />
        {loading ? (
          <LoadingIcon />
        ) : (
          <StyledImageList
            images={images}
            imageApi={imageApi}
            setImages={setImages}
            setError={setError}
          />
        )}
      </PaperBackground>
      <UploadModal
        uploadModalOpen={uploadModalOpen}
        setUploadModalOpen={setUploadModalOpen}
        setImages={setImages}
        imageApi={imageApi}
      />
    </ThemeProvider>
  );
}

export default App;
