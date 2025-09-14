import BookingsRow from "../../common/BookingsRow";

export default function BookingsTableSection() {
  const bookings = [
  {
    date: "2025-09-14",
    email: "sophia.carter@example.com",
    category: "Graphics Design",
    catColor: "bg-green-900 text-green-300",
    description:
      "Design a modern, minimalist logo for a new tech startup focused on renewable energy solutions. The logo should be versatile enough for both digital and print media. Please include a full color palette and typography guidelines.",
    status: "assigned", // options: "assigned", "not assigned", "complete"
    actions: {
      editable: true,
      deletable: true,
    },
  },
  {
    date: "2025-09-13",
    email: "ethan.bennett@example.com",
    category: "Programming",
    catColor: "bg-blue-900 text-blue-300",
    description:
      "Develop a cross-platform mobile application for a fitness tracker. The app should include features like step counting, heart rate monitoring, sleep tracking, and a social sharing component. The backend should be built with Node.js and the database with MongoDB.",
    status: "complete",
    actions: {
      editable: true,
      deletable: true,
    },
  },
  {
    date: "2025-09-12",
    email: "olivia.hayes@example.com",
    category: "Video Editing",
    catColor: "bg-purple-900 text-purple-300",
    description:
      "Edit a high-energy promotional video for a new product launch. The video should be around 2 minutes long and feature dynamic cuts, engaging music, and professional color grading. Raw footage will be provided.",
    status: "not assigned",
    actions: {
      editable: true,
      deletable: true,
    },
  },
];


  return (
    <div className="overflow-hidden rounded-lg border border-[#29382f] bg-[#111714] shadow-sm">
      <table className="w-full">
        <thead className="bg-[#29382f]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#29382f]">
          {bookings.map((b, i) => (
            <BookingsRow key={i} {...b} />
          ))}
        </tbody>
      </table>
    </div>
  );
}