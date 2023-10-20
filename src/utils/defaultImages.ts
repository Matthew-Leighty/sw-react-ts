import sample1 from "../assets/images/sample/sample-1.jpg";
import sample2 from "../assets/images/sample/sample-2.jpg";
import sample3 from "../assets/images/sample/sample-3.jpg";
import sample4 from "../assets/images/sample/sample-4.jpg";
import sample5 from "../assets/images/sample/sample-5.jpg";
import { ImageData } from "../types/Images.types";

export const defaultImageData: ImageData[] = [
  {
    id: crypto.randomUUID(),
    name: "sample-1.jpg",
    src: sample1,
  },
  {
    id: crypto.randomUUID(),
    name: "sample-2.jpg",
    src: sample2,
  },
  {
    id: crypto.randomUUID(),
    name: "sample-3.jpg",
    src: sample3,
  },
  {
    id: crypto.randomUUID(),
    name: "sample-4.jpg",
    src: sample4,
  },
  {
    id: crypto.randomUUID(),
    name: "sample-5.jpg",
    src: sample5,
  },
];
