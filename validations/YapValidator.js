import * as Yup from "yup";

export const createNewProjectValidator = Yup.object().shape({
    description: Yup.string()
      .min(40, "Too Short!")
      .max(500, "Too Long!")
      .required("deskription is Required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    websiteUrl: Yup.string().required("websiteUrl is required"),
    name: Yup.string().required("name is required"),
  });
  