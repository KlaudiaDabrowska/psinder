import { Box, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { useDropzone } from "react-dropzone";

export const ImageDropzone = () => {
  const { values, setFieldValue } = useFormikContext();

  const onDrop = (acceptedFiles: any[]) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { image: ["image/*"] },
    onDrop,
  });
  return (
    <Box {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <Box
        sx={{
          backgroundColor: "#F8F8F8",
          color: "#000",
          border: "dashed",
          borderWidth: 2,
          borderRadius: "15px",
          padding: 3,
          minHeight: "150px",
          textAlign: "center",
        }}
      >
        <Typography>Dej psiaka</Typography>
      </Box>
    </Box>
  );
};
