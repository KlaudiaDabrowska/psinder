import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, TextField } from "@mui/material";

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First name"
              fullWidth
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
              }}
            />
            {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last name"
              fullWidth
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && <div>{formik.errors.lastName}</div>}
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
            />
            {formik.errors.email && <div>{formik.errors.email}</div>}
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
            />
            {formik.errors.password && <div>{formik.errors.password}</div>}
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
        </Grid>
      </form>
    </Container>
  );
};
