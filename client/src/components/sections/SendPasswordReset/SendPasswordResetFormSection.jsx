import InputField from "@/components/common/form/InputField";
import { Formik } from "formik";
import * as Yup from "yup"
import Spinner from "@/components/unused/spinner";
import API from "@/api";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const SendPasswordResetFormSection = () => {
  const { t } = useTranslation();
  return (
    <div className="layout-content-container flex flex-col w-full max-w-none py-5">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        {t("sendPasswordReset.title")}
      </h2>

      <Formik
        //can i do a funciton here that sets the user using useState and return the object so it can work with the formik prop aswell?
        initialValues={{
          email: "test@email.com",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required(t("sendPasswordReset.fields.email.required")),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("trying to submit sign up with values: ", values);
          let response = await API.post("/users/reset-password", values);
          setSubmitting(false);
          if (response.status === 200) {
            toast.success(t("sendPasswordReset.successMessage"));
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
                  label={t("sendPasswordReset.fields.email.label")}
                  type="text"
                  placeholder={t("sendPasswordReset.fields.email.placeholder")}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>

              {/*TODO just show all form errors here no need to do each field*/}
              <div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="bg-red-500 border-b-red-700 text-white">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="py-3">
              <button type="submit" className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{formik.isSubmitting ? <Spinner /> : <span>{t("sendPasswordReset.submitButton")}</span>}</span>
              </button>
            </div>
          </form>
        )}
      </Formik>

    </div>
  );
};

export default SendPasswordResetFormSection;