import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { FormError } from "./FormError";
import { ChangeEvent } from "react";

interface IInitialValues {
  dogName: string;
  dogDescription: string;
  images: string[];
}
export const ImageArray = () => {
  const { values, setFieldValue, handleBlur, errors, touched } =
    useFormikContext<IInitialValues>();

  const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const images = event.target.value.split(", ");
    setFieldValue("images", images);
  };

  return (
    <>
      <TextField
        label="Dog images (separate with a comma)"
        fullWidth
        id="images"
        name="images"
        type="text"
        onChange={handleImagesChange}
        onBlur={handleBlur}
        value={values.images}
      />
      {errors.images && touched.images && <FormError error={errors.images} />}
    </>
  );
};
