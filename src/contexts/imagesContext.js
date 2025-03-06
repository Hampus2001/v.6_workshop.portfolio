import { createContext, useEffect, useState } from "react";

export const HandleImagesContext = createContext([]);

export default function ImagesContext({ children }) {
  const [images, setImages] = useState([]);

  return (
    <HandleImagesContext.Provider value={{ images, setImages }}>
      {children}
    </HandleImagesContext.Provider>
  );
}
