import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "react-query";
import { createNewUser } from "@/api/createUser";
import Alert from "@mui/material/Alert";
import { FormError } from "./FormError";
import { SuccessfullRegister } from "./SuccessfullRegister";

export const SignupForm = () => {
  const {
    mutate: createNewUserMutation,
    isSuccess,
    isError,
    data,
  } = useMutation(createNewUser, {
    onSuccess: (data) => {
      console.log("success!");
      console.log(data);
    },
    onError: (error) => {
      console.log("error!");
      console.log(error);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      city: "",
      streetName: "",
      email: "",
      password: "",
      timeZoneId: "UTC",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      surname: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      createNewUserMutation({
        personalData: {
          name: values.name,
          surname: values.surname,
          addressData: {
            city: values.city,
            streetName: values.streetName,
          },
        },
        email: values.email,
        password: values.password,
        timeZoneId: values.timeZoneId,
      });
    },
  });

  return (
    <Container>
      {isSuccess ? (
        <SuccessfullRegister />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                sx={{
                  backgroundColor: "#fff",
                }}
              />
              {formik.errors.name && formik.touched.name && (
                <FormError error={formik.errors.name} />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Surname"
                fullWidth
                id="surname"
                name="surname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
                sx={{
                  backgroundColor: "#fff",
                }}
              />
              {formik.errors.surname && formik.touched.surname && (
                <FormError error={formik.errors.surname} />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                sx={{
                  backgroundColor: "#fff",
                }}
              />
              {formik.errors.email && formik.touched.email && (
                <FormError error={formik.errors.email} />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                sx={{
                  backgroundColor: "#fff",
                }}
              />
              {formik.errors.password && formik.touched.password && (
                <FormError error={formik.errors.password} />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                fullWidth
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                sx={{
                  backgroundColor: "#fff",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Street name"
                fullWidth
                id="streetName"
                name="streetName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.streetName}
                sx={{
                  backgroundColor: "#fff",
                }}
              />
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
              <Button type="submit" variant="outlined" color="secondary">
                Submit
              </Button>
            </Grid>
            {isError && (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Alert severity="error">
                  Oops! Something went wrong. Please try again.
                </Alert>
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </Container>
  );
};
