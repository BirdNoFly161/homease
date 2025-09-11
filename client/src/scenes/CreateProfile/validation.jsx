import * as Yup from "yup";

export const createProfileValidationSchema = Yup.object().shape({
  profilePic: Yup.mixed()
    .nullable()
    .required("Profile picture is required"), // or optional if you want
  about: Yup.string()
    .required("About section is required")
    .min(10, "About section must be at least 10 characters"),
  category: Yup.string()
    .required("Category is required"),
  education: Yup.array().of(
    Yup.object().shape({
      school: Yup.string()
        .required("School or University is required"),
      degree: Yup.string(), // optional
      startDate: Yup.string()
        .required("Start Date is required"),
      endDate: Yup.string()
        .required("End Date is required"),
    })
  ),
  workExperience: Yup.array().of(
    Yup.object().shape({
      jobTitle: Yup.string()
        .required("Job Title is required"),
      company: Yup.string()
        .required("Company is required"),
      startDate: Yup.string()
        .required("Start Date is required"),
      endDate: Yup.string()
        .required("End Date is required"),
      description: Yup.string(), // optional
    })
  ),
});