import InputField from "@/components/common/form/InputField";
import RadioSection from "./RadioSection";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup"
import Spinner from "@/components/unused/spinner";
import API from "@/api";
import { toFormData } from "axios";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const SignupFormSection = () => {
  const { t } = useTranslation();
  const phoneRegExp = /^\+213\d{9}?$/
  return (
    <div className="layout-content-container flex flex-col w-full max-w-none py-5">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        {t("signupForm.title")}
      </h2>

      <Formik
        //can i do a funciton here that sets the user using useState and return the object so it can work with the formik prop aswell?
        initialValues={{
          email: "test@example.com",
          username: "oussama161",
          firstName: "Oussama",
          lastName: "Benmansour",
          telephone: "+213510989586",
          password: "Passowrd123&&",
          role: "professional"
        }}
        validationSchema={Yup.object({
          email: Yup.string().required(t("signupForm.fields.email.required")),
          username: Yup.string().required(t("signupForm.fields.username.required")),
          firstName: Yup.string().required(t("signupForm.fields.firstName.required")),
          lastName: Yup.string().required(t("signupForm.fields.lastName.required")),
          telephone: Yup.string()
            .matches(phoneRegExp, t("signupForm.fields.telephone.invalid"))
            .required(t("signupForm.fields.telephone.required")),
          password: Yup.string()
            .required(t("signupForm.fields.password.required"))
            .matches(
              /(?=.*[A-Z])/,
              t("signupForm.fields.password.uppercase"),
            )
            .matches(
              /(?=.*[a-z])/,
              t("signupForm.fields.password.lowercase"),
            )
            .matches(/(?=.*\d)/, t("signupForm.fields.password.number"))
            .matches(
              /(?=.*[-_~!@#$%^&+])/,
              t("signupForm.fields.password.symbol"),
            ),
          profile: Yup.mixed(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("trying to submit sign up with values: ", values);
          const fd = toFormData(values)
          let response = await API.post("/users/register", fd);
          setSubmitting(false);
          if (response.status === 200) {
            toast.success(t("signupForm.successMessage"));
          }
          console.log(response);
        }}
      >
        {(formik) => (
          <form
            className="mx-auto w-full max-w-[480px] px-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col gap-3 w-full">
              <div className="py-1">
                <InputField
                  id="email"
                  name="email"
                  label={t("signupForm.fields.email.label")}
                  type="text"
                  placeholder={t("signupForm.fields.email.placeholder")}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="py-1">
                <InputField
                  id="username"
                  name="username"
                  label={t("signupForm.fields.username.label")}
                  type="text"
                  placeholder={t("signupForm.fields.username.placeholder")}
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="py-1">
                <InputField
                  id="firstName"
                  name="firstName"
                  label={t("signupForm.fields.firstName.label")}
                  type="text"
                  placeholder={t("signupForm.fields.firstName.placeholder")}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="py-1">
                <InputField
                  id="lastName"
                  name="lastName"
                  label={t("signupForm.fields.lastName.label")}
                  type="text"
                  placeholder={t("signupForm.fields.lastName.placeholder")}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="py-1">
                <InputField
                  id="telephone"
                  name="telephone"
                  label={t("signupForm.fields.telephone.label")}
                  type="text"
                  placeholder={t("signupForm.fields.telephone.placeholder")}
                  value={formik.values.telephone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="py-1">
                <InputField
                  id="password"
                  name="password"
                  label={t("signupForm.fields.password.label")}
                  type="password"
                  placeholder={t("signupForm.fields.password.placeholder")}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
              {/*TODO just show all form errors here no need to do each field*/}
              <div>
                {formik.touched.username && formik.errors.username ? (
                  <div className="bg-red-500 border-b-red-700 text-white">
                    {formik.errors.username}
                  </div>
                ) : null}

                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="bg-red-500 border-b-red-700 text-white">
                    {formik.errors.firstName}
                  </div>
                ) : null}

                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="bg-red-500 border-b-red-700 text-white">
                    {formik.errors.lastName}
                  </div>
                ) : null}
                {formik.touched.telephone && formik.errors.telephone ? (
                  <div className="bg-red-500 border-b-red-700 text-white">
                    {formik.errors.telephone}
                  </div>
                ) : null}

                {formik.touched.password && formik.errors.password ? (
                  <div className="bg-red-500 border-b-red-700 text-white">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="py-3">
              <button type="submit" className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{formik.isSubmitting ? <Spinner /> : <span>{t("signupForm.submitButton")}</span>}</span>
              </button>
            </div>
          </form>
        )}
      </Formik>

    </div>
  );
};

export default SignupFormSection;