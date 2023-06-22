import { addANewDog, newDog } from "@/api/addANewDog";
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { FormError } from "./FormError";
import { useSession } from "next-auth/react";
import { ImageArray } from "./ImageArray";
import { SuccessInfo } from "../common/SuccessInfo";
import { useEffect } from "react";
import { ErrorAlert } from "../common/ErrorAlert";

export const AddNewDogModalForm = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const { data: sessionData } = useSession();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? 370 : 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const {
    mutate: addANewDogMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation((data: newDog) =>
    addANewDog(data, sessionData?.user.accessToken)
  );

  useEffect(() => {
    if (!open) {
      handleClose();
      reset();
    }
  }, [open, handleClose, reset]);

  return (
    <Formik
      initialValues={{ dogName: "", dogDescription: "", images: [] }}
      validationSchema={Yup.object({
        dogName: Yup.string()
          .required("Required")
          .min(3, "Min 3 characters required"),
        dogDescription: Yup.string()
          .required("Required")
          .min(3, "Min 3 characters required"),
        images: Yup.array().of(Yup.string().required("Required")),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log("VALUES");
        console.log(values);
        addANewDogMutation({
          dogName: values.dogName,
          dogDescription: values.dogDescription,
          images: values.images,
        });
        resetForm();
      }}
    >
      {(formik) => (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {isSuccess ? (
              <SuccessInfo>
                Congratulations! <br />
                You have successfully added a new dog.
              </SuccessInfo>
            ) : (
              <>
                <Typography
                  id="modal-modal-title"
                  variant="h4"
                  sx={{ mb: 2 }}
                  textAlign="center"
                >
                  Add a new dog
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Dog name"
                        fullWidth
                        id="dogName"
                        name="dogName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dogName}
                      />
                      {formik.errors.dogName && formik.touched.dogName && (
                        <FormError error={formik.errors.dogName} />
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Dog description"
                        fullWidth
                        id="dogDescription"
                        name="dogDescription"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dogDescription}
                        multiline
                      />
                      {formik.errors.dogDescription &&
                        formik.touched.dogDescription && (
                          <FormError error={formik.errors.dogDescription} />
                        )}
                    </Grid>
                    <Grid item xs={12}>
                      <ImageArray />

                      {/* <Typography>Dog images</Typography>
                  <ImageDropzone /> */}
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                      >
                        Submit
                      </Button>
                    </Grid>
                    {isError && <ErrorAlert />}
                  </Grid>
                </form>
              </>
            )}
          </Box>
        </Modal>
      )}
    </Formik>
  );
};
