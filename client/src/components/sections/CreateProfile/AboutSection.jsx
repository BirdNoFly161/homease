function AboutSection() {
  return (
    <div className="w-full">
      <label
        className="block text-sm font-medium text-white mb-2"
        htmlFor="about"
      >
        About You
      </label>
      <div className="mt-1">
        <textarea
          id="about"
          name="about"
          rows="6"
          placeholder="Describe your skills, experience, and what you offer to clients. Be specific and professional."
          className="form-textarea block w-full rounded-md border border-[#29382f] shadow-sm focus:border-green-500 sm:text-sm placeholder:text-gray-400 p-4 bg-[#111714] text-white"
        ></textarea>
      </div>
      <p className="mt-2 text-xs text-gray-400">
        This will be the first thing clients see. Make it count!
      </p>
    </div>
  );
}

export default AboutSection;