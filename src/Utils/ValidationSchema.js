import * as yup from "yup";

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    cPassword: yup
      .string()
      .required("Confirm password is required")
      .min(8, "Confirm password must be at least 8 characters")
      .oneOf([yup.ref("password")], "Passwords do not match"),
    terms: yup
      .boolean()
      .oneOf([true], "Term and Conditions required")
      .required("Accept Terms and Conditions"),
  })
  .required();

export const signInSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  })
  .required();
