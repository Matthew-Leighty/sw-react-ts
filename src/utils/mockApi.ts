import { ImageData } from "../types/Images.types";
import { defaultImageData } from "./defaultImages";

export type ApiResonse = {
  data?: ImageData[];
  error?: string;
};

export class MockImageApi {
  //this is so we can actually search 'over the api'
  mockedBackendImages: ImageData[] = [];

  async getImages(searchTerm?: string): Promise<ApiResonse> {
    await this.stall();

    //randomly return an error sometimes
    if (Math.random() <= 0.1) {
      return {
        error:
          "whoops, a randomly generated API search error has occurred, please refresh the page or try a search again",
      };
    }

    if (!this.mockedBackendImages.length) {
      this.mockedBackendImages = defaultImageData;
    }

    if (searchTerm) {
      return {
        data: this.mockedBackendImages.filter((image) =>
          image.name.includes(searchTerm),
        ),
      };
    }

    return {
      data: this.mockedBackendImages,
    };
  }

  async deleteImage(id: string): Promise<ApiResonse> {
    await this.stall();

    //randomly return an error sometimes
    if (Math.random() <= 0.3) {
      return {
        error:
          "whoops, a randomly generated API delete error has occurred, please try again",
      };
    }

    this.mockedBackendImages = this.mockedBackendImages.filter(
      (image) => image.id !== id,
    );

    return {
      data: this.mockedBackendImages,
    };
  }

  async UploadImage(image: ImageData): Promise<ApiResonse> {
    await this.stall();

    //randomly return an error sometimes
    if (Math.random() <= 0.3) {
      return {
        error:
          "whoops, a randomly generated API upload error has occurred, please try again",
      };
    }

    this.mockedBackendImages.push(image);

    return {
      data: this.mockedBackendImages,
    };
  }
  async stall(stallTime = 1000) {
    await new Promise((resolve) => setTimeout(resolve, stallTime));
  }
}
