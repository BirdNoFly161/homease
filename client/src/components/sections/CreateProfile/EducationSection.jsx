import { Field, FieldArray, useFormikContext } from "formik";
import React from "react";

export default function EducationSection() {
  const { values } = useFormikContext(); // <-- get form values from context

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium leading-6 text-white mb-4">
        Education
      </h3>

      <FieldArray name="education">
        {({ push, remove }) => (
          <div className="space-y-6">
            {values.education && values.education.length > 0
              ? values.education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-[#29382f] bg-[#111714] p-4 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-medium">
                        Education {index + 1}
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
                        htmlFor={`education.${index}.school`}
                      >
                        School or University
                      </label>
                      <Field
                        as="input"
                        className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm placeholder:text-gray-400 p-3"
                        id={`education.${index}.school`}
                        name={`education.${index}.school`}
                        placeholder="e.g. University of California, Berkeley"
                        type="text"
                      />
                    </div>

                    <div className="mt-4">
                      <label
                        className="block text-sm font-medium text-white mb-2"
                        htmlFor={`education.${index}.degree`}
                      >
                        Degree (Optional)
                      </label>
                      <Field
                        as="input"
                        className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm placeholder:text-gray-400 p-3"
                        id={`education.${index}.degree`}
                        name={`education.${index}.degree`}
                        placeholder="e.g. Bachelor's in Computer Science"
                        type="text"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                      <div>
                        <label
                          className="block text-sm font-medium text-white mb-2"
                          htmlFor={`education.${index}.startDate`}
                        >
                          Start Date
                        </label>
                        <Field
                          as="input"
                          className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm p-3"
                          id={`education.${index}.startDate`}
                          name={`education.${index}.startDate`}
                          type="month"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium text-white mb-2"
                          htmlFor={`education.${index}.endDate`}
                        >
                          End Date
                        </label>
                        <Field
                          as="input"
                          className="form-input block w-full rounded-md border border-[#29382f] bg-[#111714] text-white shadow-sm focus:border-green-500 sm:text-sm p-3"
                          id={`education.${index}.endDate`}
                          name={`education.${index}.endDate`}
                          type="month"
                        />
                      </div>
                    </div>
                  </div>
                ))
              : null}

            <button
              type="button"
              className="flex items-center gap-2 text-sm font-medium text-[#38e07b] hover:text-green-400 mt-4"
              onClick={() =>
                push({
                  school: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                })
              }
            >
              <span className="material-symbols-outlined text-lg">
                add_circle_outline
              </span>
              <span>Add another education entry</span>
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}