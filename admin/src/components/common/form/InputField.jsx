const InputField = ({ id, name, value, onBlur, onChange, label, type = "text", placeholder }) => (
  <label className="flex flex-col min-w-40 flex-1">
    <p className="text-white text-base font-medium leading-normal pb-2">{label}</p>
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#29382f] bg-[#111714] focus:border-[#29382f] h-14 placeholder:text-[#b89d9f] p-[15px] text-base font-normal leading-normal"
    />
  </label>
);

export default InputField;