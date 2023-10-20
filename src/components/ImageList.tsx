import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Dispatch, SetStateAction, useState } from "react";
import { ImageData } from "../types/Images.types";
import { MockImageApi } from "../utils/mockApi";
import CircularProgress from "@mui/material/CircularProgress";

interface ImageListProps {
  imageApi: MockImageApi;
  images: ImageData[];
  setImages: Dispatch<SetStateAction<ImageData[]>>;
  setError: Dispatch<SetStateAction<string>>;
}

export default function StyledImageList({
  images,
  imageApi,
  setImages,
  setError,
}: ImageListProps) {
  const [visDelete, setVisDelete] = useState("");
  const [loadingId, setLoadingId] = useState("");

  const onDelete = (id: string) => {
    setLoadingId(id);
    imageApi.deleteImage(id).then((r) => {
      if (r.error) {
        setError(r.error);
        setLoadingId("");
        return;
      }
      if (r.data) {
        setImages(r.data);
      }
      setError("");
      setLoadingId("");
    });
  };

  if (!images.length) {
    return <Typography variant="h4">No images found</Typography>;
  }

  return (
    <ImageList sx={{ marginBottom: "auto" }} variant="masonry" cols={3} gap={8}>
      {images.map((image) => (
        <ImageListItem
          key={image.id}
          onMouseEnter={() => setVisDelete(image.id)}
          onMouseLeave={() => setVisDelete("")}
        >
          <img
            srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={image.name}
            src={image.src}
            loading="lazy"
          />
          {visDelete === image.id ? (
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={image.name}
              position="top"
              actionIcon={
                <IconButton
                  onClick={() => onDelete(image.id)}
                  sx={{ color: "white" }}
                  aria-label={`delete ${image.name}`}
                >
                  {loadingId === image.id ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : (
                    <DeleteForeverIcon />
                  )}
                </IconButton>
              }
              actionPosition="left"
            />
          ) : null}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
