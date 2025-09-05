const RadioSection = () => (
  <div className="flex flex-wrap gap-3 p-4 justify-center">
    <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#29382f] bg-[#111714] px-4 h-11 text-white has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#38e07b] relative cursor-pointer">
      I'm a customer
      <input type="radio" className="invisible absolute" name="account-type" />
    </label>
    <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#29382f] bg-[#111714] px-4 h-11 text-white has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#38e07b] relative cursor-pointer">
      I'm a professional
      <input type="radio" className="invisible absolute" name="account-type" />
    </label>
  </div>
);

export default RadioSection;