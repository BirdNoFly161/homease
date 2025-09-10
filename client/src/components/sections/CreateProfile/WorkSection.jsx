import React from "react";
import { Field, FieldArray, useFormikContext } from "formik";

export default function WorkSection() {
  const { values } = useFormikContext(); // access Formik values

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium leading-6 text-white mb-4">
        Work Experience
      </h3>

      <FieldArray name="workExperience">
        {({ push, remove }) => (
          <div className="space-y-6">
            {values.workExperience && values.workExperience.length > 0
              ? values.workExperience.map((work, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-[#29382f] bg-[#111714] p-4 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-medium">
                        Work Experience {index + 1}
                      </h4>
                      {index > 0 && (
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-400"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium text-white mb-2"
                        htmlFor={`workExperience.${index}.jobTitle`}
                      >
                        Job Title
                      </label>
                      <Field
                        as="input"
                        className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm placeholder:text-gray-400 p-3"
                        id={`workExperience.${index}.jobTitle`}
                        name={`workExperience.${index}.jobTitle`}
                        placeholder="e.g. Senior Software Engineer"
                        type="text"
                      />
                    </div>

                    <div className="mt-4">
                      <label
                        className="block text-sm font-medium text-white mb-2"
                        htmlFor={`workExperience.${index}.company`}
                      >
                        Company
                      </label>
                      <Field
                        as="input"
                        className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm placeholder:text-gray-400 p-3"
                        id={`workExperience.${index}.company`}
                        name={`workExperience.${index}.company`}
                        placeholder="e.g. Google"
                        type="text"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                      <div>
                        <label
                          className="block text-sm font-medium text-white mb-2"
                          htmlFor={`workExperience.${index}.startDate`}
                        >
                          Start Date
                        </label>
                        <Field
                          as="input"
                          className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm p-3"
                          id={`workExperience.${index}.startDate`}
                          name={`workExperience.${index}.startDate`}
                          type="month"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium text-white mb-2"
                          htmlFor={`workExperience.${index}.endDate`}
                        >
                          End Date
                        </label>
                        <Field
                          as="input"
                          className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm p-3"
                          id={`workExperience.${index}.endDate`}
                          name={`workExperience.${index}.endDate`}
                          type="month"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        className="block text-sm font-medium text-white mb-2"
                        htmlFor={`workExperience.${index}.description`}
                      >
                        Description (Optional)
                      </label>
                      <Field
                        as="textarea"
                        className="form-textarea block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm placeholder:text-gray-400 p-4"
                        id={`workExperience.${index}.description`}
                        name={`workExperience.${index}.description`}
                        placeholder="Describe your responsibilities and achievements."
                        rows="4"
                      />
                    </div>
                  </div>
                ))
              : null}

            <button
              type="button"
              className="flex items-center gap-2 text-sm font-medium text-[#38e07b] hover:text-green-400 mt-4"
              onClick={() =>
                push({
                  jobTitle: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
            >
              <span className="material-symbols-outlined text-lg">
                add_circle_outline
              </span>
              <span>Add another work experience</span>
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}