import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, TextField } from "@mui/material";
import { FormError } from "./FormError";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { ErrorAlert } from "../common/ErrorAlert";

export const LoginForm = () => {
  const [loginError, setLoginError] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      })
        .then(async (x) => {
          if (x?.ok) {
            await router.push("/dashboard/chooseDog");
          } else {
            setLoginError(true);
          }
        })
        .catch((err) => {
          setLoginError(true);
        });
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
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
            />
            {formik.errors.password && formik.touched.password && (
              <FormError error={formik.errors.password} />
            )}
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
          {loginError && <ErrorAlert />}
        </Grid>
      </form>
    </Container>
  );
};
