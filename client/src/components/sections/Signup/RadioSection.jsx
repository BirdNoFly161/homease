import { useFormikContext } from "formik";
const RadioSection = () => {

  const { values, setFieldValue } = useFormikContext();
  const handleRadioChange = (event) => {
    // Manually set the Formik field value when a radio button is selected
    setFieldValue('role', event.target.value);
  }

  return (

    <div role="group" className="flex flex-wrap gap-3 p-4 justify-center">
      <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#29382f] bg-[#111714] px-4 h-11 text-white has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#38e07b] relative cursor-pointer">
        I'm a customer
        <input type="radio" value="customer" onChange={handleRadioChange} checked={values.role === 'customer'} className="invisible absolute" name="role" />
      </label>
      <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#29382f] bg-[#111714] px-4 h-11 text-white has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#38e07b] relative cursor-pointer">
        I'm a professional
        <input type="radio" value="professional" onChange={handleRadioChange} checked={values.role === 'professional'} className="invisible absolute" name="role" />
      </label>
    </div>
  );
}
export default RadioSection;