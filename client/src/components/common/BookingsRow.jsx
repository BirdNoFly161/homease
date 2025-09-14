import React, { useState } from "react";

export default function BookingsRow({ date, email, category, catColor, description, status, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <tr className="group-expand" tabIndex="0">

      {/* Date */}
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm font-medium text-white">{date}</div>
      </td>

      {/* Category */}
      <td className="whitespace-nowrap px-6 py-4">
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 bg-[#29382f] text-white`}>
          {category}
        </span>
      </td>

      {/* Description */}
      <td className="px-6 py-4 max-w-sm">
        <div className="text-sm text-gray-400">
          <p className={expanded ? "text-white" : "line-clamp-2 text-white"}>{description}</p>
          <button
            className="text-[#38e07b] hover:text-[#2ecc71] text-sm font-medium focus:outline-none mt-1"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          status === "complete" ? "bg-green-700 text-white" :
          status === "assigned" ? "bg-blue-700 text-white" :
              "bg-gray-700 text-white"
          }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>

      {/* Actions */}
      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={onEdit}
            className="bg-[#38e07b] hover:bg-[#2ecc71] text-black px-3 py-1 rounded-full text-sm"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
