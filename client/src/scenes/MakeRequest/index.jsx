import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "@/api";
import toast from "react-hot-toast";
import InputField from "@/components/common/form/InputField";
import { useTranslation } from "react-i18next";



export default function MakeRequest() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const booking = location.state?.booking; // booking passed from previous page
  const RequestSchema = Yup.object().shape({
    description: Yup.string().min(10, t("makeRequest.fields.description.minLength")),
    category: Yup.string().required(t("makeRequest.fields.category.required")),
    firstName: Yup.string().required(t("makeRequest.fields.firstName.required")),
    lastName: Yup.string().required(t("makeRequest.fields.lastName.required")),
    telephone: Yup.string().required(t("makeRequest.fields.telephone.required"))
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("trying to send value with : ", values)
      if (booking?._id) {
        await API.put(`/bookings/update/${booking._id}`, values);
        toast.success(t("makeRequest.messages.success.edit"));
      } else {
        await API.post("/bookings/register", values);
        toast.success(t("makeRequest.messages.success.new"));
      }
      resetForm();
      navigate(-1); // go back to previous page
    } catch (err) {
      console.error(err);
      toast.error(t("makeRequest.messages.error"));
    }
  };

  return (
    <div className="min-h-screen flex justify-center py-12 bg-[#111714]">
      <div className="w-full max-w-2xl px-4 mt-20">
        <h1 className="text-4xl font-bold text-white">{booking?._id ? t("makeRequest.title.edit") : t("makeRequest.title.new")}</h1>
        <p className="text-gray-400 mt-2">
          {booking?._id ? t("makeRequest.subtitle.edit") : t("makeRequest.subtitle.new")}
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
                <InputField id="firstName" name="firstName" label={t("makeRequest.fields.firstName.label")} type="text" placeholder={t("makeRequest.fields.firstName.placeholder")} value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} />
              </div>
              <div className="py-1">
                <InputField id="lastName" name="lastName" label={t("makeRequest.fields.lastName.label")} type="text" placeholder={t("makeRequest.fields.lastName.placeholder")} value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange} />
              </div>

              <div className="py-1">
                <InputField id="telephone" name="telephone" label={t("makeRequest.fields.telephone.label")} type="text" placeholder={t("makeRequest.fields.telephone.placeholder")} value={formik.values.telephone} onBlur={formik.handleBlur} onChange={formik.handleChange} />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white mb-2">{t("makeRequest.fields.category.label")}</label>
                <Field as="select" name="category" className="w-full rounded-md p-3 bg-[#111714] text-white border border-[#29382f]">
                  <option value="">{t("makeRequest.fields.category.placeholder")}</option>
                  <option value="web-dev">{t("makeRequest.fields.category.options.web-dev")}</option>
                  <option value="graphics-design">{t("makeRequest.fields.category.options.graphics-design")}</option>
                  <option value="content-writing">{t("makeRequest.fields.category.options.content-writing")}</option>
                  <option value="gardener">{t("makeRequest.fields.category.options.gardener")}</option>
                  <option value="translation">{t("makeRequest.fields.category.options.translation")}</option>
                  <option value="psychologist">{t("makeRequest.fields.category.options.psychologist")}</option>
                  <option value="it-specialist">{t("makeRequest.fields.category.options.it-specialist")}</option>
                  <option value="plumber">{t("makeRequest.fields.category.options.plumber")}</option>
                  <option value="electrician">{t("makeRequest.fields.category.options.electrician")}</option>
                  <option value="needle-nurse">{t("makeRequest.fields.category.options.needle-nurse")}</option>
                  <option value="pet-caretaker">{t("makeRequest.fields.category.options.pet-caretaker")}</option>
                  <option value="glass-cleaning">{t("makeRequest.fields.category.options.glass-cleaning")}</option>
                  <option value="other">{t("makeRequest.fields.category.options.other")}</option>
                </Field>
                <ErrorMessage name="category" component="div" className="text-red-500 mt-1" />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">{t("makeRequest.fields.description.label")}</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full rounded-md p-3 bg-[#111714] text-white border border-[#29382f] h-80 resize-y"
                  placeholder={t("makeRequest.fields.description.placeholder")}
                />
                <ErrorMessage name="description" component="div" className="text-red-500 mt-1" />
              </div>



              <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={() => navigate(-1)} className="bg-[#29382f] text-white px-8 py-3 rounded-md">{t("makeRequest.buttons.cancel")}</button>
                <button type="submit" className="bg-[#38e07b] text-black px-8 py-3 rounded-md">{t("makeRequest.buttons.submit")}</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}