import React from "react";
import InputField from "@/components/common/form/InputField";
import { Formik } from "formik";
import * as Yup from "yup"
import Spinner from "@/components/unused/spinner";
import API from "@/api";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

// ------------------ Page ------------------
export default function ChangePassword() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* Optional: responsive padding without affecting centering */}
      <div className="mt-20 layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 py-5">
          <div className="layout-content-container flex flex-col w-full max-w-none py-5">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              {t("changePassword.title")}
            </h2>

            <Formik
              //can i do a funciton here that sets the user using useState and return the object so it can work with the formik prop aswell?
              initialValues={{
                password: ""
              }}
              validationSchema={Yup.object({
                password: Yup.string()
                  .required(t("changePassword.fields.password.required"))
                  .matches(
                    /(?=.*[A-Z])/,
                    t("changePassword.fields.password.uppercase"),
                  )
                  .matches(
                    /(?=.*[a-z])/,
                    t("changePassword.fields.password.lowercase"),
                  )
                  .matches(/(?=.*\d)/, t("changePassword.fields.password.number"))
                  .matches(
                    /(?=.*[-_~!@#$%^&+])/,
                    t("changePassword.fields.password.symbol"),
                  ),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                console.log("trying to submit sign up with values: ", {...values, token});
                let response = await API.post("/users/change-password", {...values, token});
                setSubmitting(false);
                if (response.status === 200) {
                  toast.success(t("changePassword.successMessage"));
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
                        id="password"
                        name="password"
                        label={t("changePassword.fields.password.label")}
                        type="text"
                        placeholder={t("changePassword.fields.password.placeholder")}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                    </div>

                    {/*TODO just show all form errors here no need to do each field*/}
                    <div>
                      {formik.touched.password && formik.errors.password ? (
                        <div className="bg-red-500 border-b-red-700 text-white">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="py-3">
                    <button type="submit" className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">{formik.isSubmitting ? <Spinner /> : <span>{t("changePassword.submitButton")}</span>}</span>
                    </button>
                  </div>
                </form>
              )}
            </Formik>

          </div>
        </div>
      </div>
    </div>
  );
}