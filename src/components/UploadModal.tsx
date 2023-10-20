import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "@mui/material/styles";
import placeholder from "../assets/images/ph.jpg";
import { ImageData } from "../types/Images.types";
import { MockImageApi } from "../utils/mockApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "75%",
  color: "white",
  border: "2px solid #000",
  boxShadow: "24",
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  gap: theme.spacing(2),
}));

const BoxRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  height: "75%",
  objectFit: "contain",
}));

interface UploadModalProps {
  uploadModalOpen: boolean;
  setUploadModalOpen: Dispatch<SetStateAction<boolean>>;
  setImages: Dispatch<SetStateAction<ImageData[]>>;
  imageApi: MockImageApi;
}

export default function UploadModal({
  uploadModalOpen,
  setUploadModalOpen,
  setImages,
  imageApi,
}: UploadModalProps) {
  const [previewImageUrl, setPreviewImageUrl] = useState<string>("");
  const [previewImageName, setPreviewImageName] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) throw new Error("no files found");
    const file = e.target.files[0];
    setPreviewImageUrl(URL.createObjectURL(file));
    setPreviewImageName(file.name);
  };

  const onCancel = () => {
    setPreviewImageUrl("");
    setError("");
  };

  const onUpload = () => {
    setLoading(true);
    const newImage: ImageData = {
      id: crypto.randomUUID(),
      name: previewImageName,
      src: previewImageUrl,
    };

    if (!previewImageUrl) return;
    imageApi.UploadImage(newImage).then((r) => {
      if (r.error) {
        setError(r.error);
        setLoading(false);
        return;
      }
      if (r.data) {
        setImages(r.data);
      }
      setError("");
      setPreviewImageUrl("");
      setLoading(false);
      setUploadModalOpen(false);
    });
  };

  return (
    <div>
      <Modal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        aria-labelledby="modal-image-upload"
      >
        <ModalBox>
          {previewImageUrl ? (
            <>
              <Typography variant="body1" color="red">
                {error}
              </Typography>
              {loading ? (
                <CircularProgress color="inherit" size={100} />
              ) : (
                <StyledImg src={previewImageUrl} alt={"image preview"} />
              )}
              <Typography variant="body1">
                {previewImageName ?? error}
              </Typography>
              <BoxRow>
                <Button
                  onClick={onCancel}
                  variant="contained"
                  component="label"
                >
                  Cancel
                </Button>
                <Button
                  onClick={onUpload}
                  variant="contained"
                  component="label"
                >
                  Upload
                </Button>
              </BoxRow>
            </>
          ) : (
            <>
              <StyledImg src={placeholder} alt={"image placeholder"} />
              <Button variant="contained" component="label">
                Select File
                <input
                  onChange={onSelect}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </Button>
            </>
          )}
        </ModalBox>
      </Modal>
    </div>
  );
}
