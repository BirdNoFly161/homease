import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Validation schema
const RequestSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  category: Yup.string().required("Please select a category"),
});

function DescriptionField() {
  return (
    <div>
      <label
        className="block text-sm font-medium text-[#111714] mb-2"
        htmlFor="description"
      >
        Description
      </label>
      <Field
        as="textarea"
        className="form-textarea w-full h-80 rounded-md border border-[#29382f] bg-[#111714] p-3 text-white text-base min-h-36 resize-y placeholder:text-gray-400"
        id="description"
        name="description"
        placeholder="Provide a detailed description of your request..."
      />
      <ErrorMessage
        name="description"
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}

function CategoryField() {
  return (
    <div>
      <label
        className="block text-sm font-medium text-[#111714] mb-2"
        htmlFor="category"
      >
        Category
      </label>
      <Field
        as="select"
        className="form-select text-white w-full rounded-md border border-[#29382f] bg-[#111714] p-3 text-base focus:border-white"
        id="category"
        name="category"
      >
        <option className="text-gray-400" value="">
          Select a category
        </option>
        <option value="web-dev">Web Development</option>
        <option value="graphics-design">Graphics Design</option>
        <option value="content-writing">Content Writing</option>
        <option value="other">Other</option>
      </Field>
      <ErrorMessage
        name="category"
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}

function FormActions({ onCancel }) {
  return (
    <div className="flex justify-end gap-4 pt-4">
      <button
        type="button"
        onClick={onCancel}
        className="inline-flex items-center justify-center rounded-md h-12 px-8 bg-[#29382f] text-white text-sm font-semibold tracking-wide"
      >
        Cancel
      </button>
      <button
        className="inline-flex items-center justify-center rounded-md h-12 px-8 bg-[#38e07b] text-black text-sm font-semibold tracking-wide"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default function MakeRequest({ onCancel }) {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await API.post("/", values);
      console.log("Success:", response.data);
      resetForm();
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <main className="flex-1 flex justify-center py-12 bg-[#111714] h-screen">
      <div className="mt-20 w-full max-w-2xl px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">New Request</h1>
          <p className="text-gray-400 mt-2">
            Fill out the form below to submit a new request.
          </p>
        </div>

        {/* Form Section */}
        <Formik
          initialValues={{ description: "", category: "" }}
          validationSchema={RequestSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <DescriptionField />
            <CategoryField />
            <FormActions onCancel={onCancel} />
          </Form>
        </Formik>
      </div>
    </main>
  );
}

