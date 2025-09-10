import AboutSection from "@/components/sections/CreateProfile/AboutSection";
import CategorySection from "@/components/sections/CreateProfile/CategorySection";
import ProfilePictureSection from "@/components/sections/CreateProfile/ProfilePictureSection";
import SubmitSection from "@/components/sections/CreateProfile/SubmitSection";
import React from "react";
import toast from "react-hot-toast";
import API from "@/api";
import { Formik } from "formik";
import { toFormData } from "axios";
import { useNavigate } from "react-router-dom";
import WorkSection from "@/components/sections/CreateProfile/WorkSection";
import EducationSection from "@/components/sections/CreateProfile/EducationSection";
import { createProfileValidationSchema } from "./validation";

function CreateProfile() {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="pt-20 layout-container flex h-full grow flex-col items-center justify-center">
        <div className="flex flex-1 justify-center py-5 w-full">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-10 px-8 flex-1 items-center rounded-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Create Your Professional Profile
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Showcase your skills and attract clients.
              </p>
            </div>
            <Formik
            validationSchema={createProfileValidationSchema}
              initialValues={{
                profilePic: null,
                about: "",
                category: "",
                education: [
                  {
                    school: "",
                    degree: "",
                    startDate: "",
                    endDate: "",
                  },
                ],
                workExperience: [
                  {
                    jobTitle: "",
                    company: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  },
                ],
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const fd = toFormData(values);
                  let response = await API.post("/users/create-profile", fd);
                  toast.success("Succesfully created account!");
                } catch (err) {
                  console.error(err);
                  toast.error("Error: Failed To Submit!")
                } finally {
                  setSubmitting(false);
                  navigate("/");
                }
              }}
            >
              {({ setFieldValue, isSubmitting }) => (
                <form className="space-y-8 w-full">
                  <ProfilePictureSection setFieldValue={setFieldValue} />
                  <AboutSection />
                  <CategorySection />
                  <EducationSection />
                  <WorkSection />
                  <SubmitSection />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;