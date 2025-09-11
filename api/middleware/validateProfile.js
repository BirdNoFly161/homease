import * as Yup from "yup";

const profileSchema = Yup.object().shape({
  about: Yup.string()
    .required("About section is required")
    .min(10, "About section must be at least 10 characters"),
  category: Yup.string().required("Category is required"),
  education: Yup.array().of(
    Yup.object().shape({
      school: Yup.string().required("School or University is required"),
      degree: Yup.string(), // optional
      startDate: Yup.string().required("Start Date is required"),
      endDate: Yup.string().required("End Date is required"),
    })
  ),
  workExperience: Yup.array().of(
    Yup.object().shape({
      jobTitle: Yup.string().required("Job Title is required"),
      company: Yup.string().required("Company is required"),
      startDate: Yup.string().required("Start Date is required"),
      endDate: Yup.string().required("End Date is required"),
      description: Yup.string(), // optional
    })
  ),
});

export const validateProfile = (req, res, next) => {
  // Validate body first
  profileSchema
    .validate(req.body, { abortEarly: false })
    .then(() => {
      // Check file separately
      if (!req.file) {
        return res.status(400).json({ errors: [{ field: "profilePic", message: "Profile picture is required" }] });
      }
      next();
    })
    .catch((err) => {
      const errors = err.inner.map((e) => ({ field: e.path, message: e.message }));
      res.status(400).json({ errors });
    });
};
