import * as yup from "yup";

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required").min(8, "min lenght of password shold be atleast 8 characters"),
    cPassword: yup.string().required("confirm password is required")
    .min(8, "min lenght of confirm password shold be atleast 8 characters")
    .oneOf([yup.ref("password")], "password do not match"),

  })
  .required();


export const signInSchema = yup
  .object({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required").min(8, "min lenght of password shold be atleast 8 characters"),
  })
  .required();
