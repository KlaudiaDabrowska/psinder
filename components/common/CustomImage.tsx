import { useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export const CustomImage = ({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return <Image src={src} alt={alt} width={isSmallScreen ? "250" : "400"} />;
};
