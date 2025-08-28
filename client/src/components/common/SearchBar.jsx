const SearchBar = ({ placeholder, small = false }) => {
  return (
    <label className={`flex flex-col min-w-40 ${small ? "!h-10 max-w-64" : "h-14 w-full max-w-[480px]"}`}>
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <div className="text-[#9eb7a8] flex bg-[#29382f] items-center justify-center pl-4 rounded-l-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width={small ? "24px" : "20px"} height={small ? "24px" : "20px"} fill="currentColor" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </svg>
        </div>
        <input
          placeholder={placeholder}
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#29382f] placeholder:text-[#9eb7a8] px-4"
        />
      </div>
    </label>
  );
};

export default SearchBar;
