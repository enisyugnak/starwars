import { useState, useEffect } from "react";

const useBlurImage = (image) => {
  console.log("blur-image: iamge", image);
  const [blurDataURL, setBlurDataURL] = useState(null);

  useEffect(() => {
    const fetchBlurDataURL = async () => {
      const response = await fetch(`/api/blur/${encodeURIComponent(image)}`);
      const data = await response.json();
      setBlurDataURL(data.blurDataURL);
    };

    fetchBlurDataURL();
  }, [image]);

  return blurDataURL;
};

export default useBlurImage;
