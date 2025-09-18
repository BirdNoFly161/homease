import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "@/api";
import toast from "react-hot-toast";
import InputField from "@/components/common/form/InputField";

const RequestSchema = Yup.object().shape({
  description: Yup.string().min(10, "Description must be at least 10 characters"),
  category: Yup.string().required("Please select a category"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  telephone: Yup.string().required("Telephone is required")
});

export default function MakeRequest() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking; // booking passed from previous page

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("trying to send value with : ",values)
      if (booking?._id) {
        await API.put(`/bookings/update/${booking._id}`, values);
        toast.success("Booking updated");
      } else {
        await API.post("/bookings/register", values);
        toast.success("Request Submitted");
      }
      resetForm();
      navigate(-1); // go back to previous page
    } catch (err) {
      console.error(err);
      toast.error("Error submitting request");
    }
  };

  return (
    <div className="min-h-screen flex justify-center py-12 bg-[#111714]">
      <div className="w-full max-w-2xl px-4 mt-20">
        <h1 className="text-4xl font-bold text-white">{booking?._id ? "Edit Request" : "New Request"}</h1>
        <p className="text-gray-400 mt-2">
          {booking?._id ? "Update your booking below." : "Fill out the form below to submit a new request."}
        </p>

        <Formik
          initialValues={booking || { description: "", category: "" }}
          enableReinitialize
          validationSchema={RequestSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="space-y-6 mt-6">

              <div className="py-1">
                <InputField id="firstName" name="firstName" label="First name" type="text" placeholder="firstname" value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} />
              </div>
              <div className="py-1">
                <InputField id="lastName" name="lastName" label="Last name" type="text" placeholder="lastname" value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange} />
              </div>

              <div className="py-1">
                <InputField id="telephone" name="telephone" label="Telephone" type="text" placeholder="+213XXXXXXXXX" value={formik.values.telephone} onBlur={formik.handleBlur} onChange={formik.handleChange} />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white mb-2">Category (Optional)</label>
                <Field as="select" name="category" className="w-full rounded-md p-3 bg-[#111714] text-white border border-[#29382f]">
                  <option value="">Select a category</option>
                  <option value="web-dev">Web Development</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="content-writing">Content Writing</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="category" component="div" className="text-red-500 mt-1" />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full rounded-md p-3 bg-[#111714] text-white border border-[#29382f] h-80 resize-y"
                  placeholder="Provide a detailed description..."
                />
                <ErrorMessage name="description" component="div" className="text-red-500 mt-1" />
              </div>



              <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={() => navigate(-1)} className="bg-[#29382f] text-white px-8 py-3 rounded-md">Cancel</button>
                <button type="submit" className="bg-[#38e07b] text-black px-8 py-3 rounded-md">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}