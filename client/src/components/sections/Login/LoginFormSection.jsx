import InputField from "@/components/common/form/InputField";
import SocialLoginSection from "./SocialLoginSection";
import { Formik } from "formik";
import * as Yup from "yup"
import Spinner from "@/components/unused/spinner";
import API from "@/api";
import toast from "react-hot-toast";

const LoginFormSection = () => (
  <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-5 flex-1 items-center">
    <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
      Log in to SkillHub
    </h2>

    <Formik
      //can i do a funciton here that sets the user using useState and return the object so it can work with the formik prop aswell?
      initialValues={{
        username: "oussama161",
        password: "Passowrd123&&",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("User name is required"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /(?=.*[A-Z])/,
            "Password must contain atleast one uppercase letter",
          )
          .matches(
            /(?=.*[a-z])/,
            "Password must contain atleast one lowercase letter",
          )
          .matches(/(?=.*\d)/, "Password must contain atleast one number")
          .matches(
            /(?=.*[-_~!@#$%^&+])/,
            "Password must contain atleast one symbol",
          ),
        profile: Yup.mixed(),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("trying to submit sign up with values: ", values);
        let response = await API.post("/users/login", values);
        setSubmitting(false);
        if (response.status === 200) {
          toast.success("Logged in");
        }
        console.log(response);
      }}
    >
      {(formik) => (
        <form
          className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-5 flex-1 items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
            <InputField id="username" name="username" label="Username" type="text" placeholder="username" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} />
          </div>
          <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
            <InputField id="password" name="password" label="Password" type="password" placeholder="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
          </div>
          <div>
            {formik.touched.username && formik.errors.username ? (
              <div className="bg-red-500 border-b-red-700 text-white">
                {formik.errors.username}
              </div>
            ) : null}
            {formik.touched.password && formik.errors.password ? (
              <div className="bg-red-500 border-b-red-700 text-white">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex w-full max-w-[480px] px-4 py-3 justify-center">
            <button type="submit" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate text-[#111714]">{formik.isSubmitting ? <Spinner /> : <span>Log in</span>}</span>
            </button>
          </div>


          <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline text-center">
            Forgot password?
          </p>

        </form>
      )}
    </Formik>
    <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
      Or continue with
    </p>

    <SocialLoginSection />
  </div>
);

export default LoginFormSection;