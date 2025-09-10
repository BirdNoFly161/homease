import { Field, useFormikContext } from "formik";

function CategorySection() {
  const { errors, touched} = useFormikContext();
  return (
    <div className="w-full">
      <label
        className="block text-sm font-medium text-white mb-2"
        htmlFor="category"
      >
        Service Category
      </label>
      <Field 
        as="select"
        id="category"
        name="category"
        className="form-select block w-full rounded-md border border-[#29382f] shadow-sm focus:border-white focus:ring-green-500 sm:text-sm p-4 bg-[#111714] text-white"
      >
        <option>Select a category</option>
        <option>Web Development</option>
        <option>Mobile Development</option>
        <option>Graphic Design</option>
        <option>Writing &amp; Translation</option>
        <option>Marketing &amp; Sales</option>
      </Field>
      {errors.category &&
          touched.category && (
            <div className="text-red-500 text-sm mt-1">
              {errors.category}
            </div>
          )}
    </div>
  );
}

export default CategorySection;