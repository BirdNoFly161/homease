import { useFormikContext } from "formik";

function ProfilePictureSection() {
  const { errors, touched, setFieldValue} = useFormikContext();
  return (
    <div>
      <label
        className="block text-sm font-medium text-white mb-2"
        htmlFor="profile-picture"
      >
        Profile Picture
      </label>
      <div className="mt-1 flex items-center gap-4">
        <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border border-[#29382f]">
          <span className="material-symbols-outlined text-5xl text-gray-400">
            person
          </span>
        </span>
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer bg-[#111714] rounded-md font-medium text-[#38e07b] hover:text-[#38e07b] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 border border-[#29382f] px-4 py-2 text-sm"
        >
          <span>Upload a photo</span>
          <input
            id="file-upload"
            name="profilePic"
            type="file"
            className="sr-only"
            onChange={(event) =>
              setFieldValue("profilePic", event.currentTarget.files[0])
            } />
          {/* Show error */}
          {errors.profilePic && touched.profilePic && (
            <div className="text-red-500 text-sm mt-1">{errors.profilePic}</div>
          )}
        </label>
      </div>
    </div>
  );
}

export default ProfilePictureSection;