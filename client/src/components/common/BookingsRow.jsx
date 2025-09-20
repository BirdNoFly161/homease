import React from "react";
import toast from "react-hot-toast";
import API from "@/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BookingsRow({ id, date, email, category, description, status, onEdit, onDelete }) {
  const navigate = useNavigate();
    const { t } = useTranslation();

  const handleEdit = () => {
    navigate("/make-request", {
      state: { booking: { _id: id, date, email, category, description, status } }
    });
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      const response = await API.delete(`/bookings/booking/${id}`);

      if (response.data.ok) {
        toast.success("Booking deleted successfully");
        if (onDelete) onDelete(id); // notify parent to remove it from the list
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting booking");
    }
  };

  return (
    <tr className="group-expand" tabIndex="0">
      {/* Date */}
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm font-medium text-white">{date}</div>
      </td>

      {/* Category */}
      <td className="whitespace-nowrap px-6 py-4">
        <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 bg-[#29382f] text-white">
          {category}
        </span>
      </td>

      {/* Description */}
      <td className="px-6 py-4 max-w-sm">
        <div className="text-sm text-gray-400">
          <p className="text-white line-clamp-2">{description}</p>
        </div>
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status === "complete" ? "bg-green-700 text-white" :
            status === "assigned" ? "bg-blue-700 text-white" :
              "bg-gray-700 text-white"
          }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>

      {/* Actions */}
      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex justify-center gap-2">
          <button onClick={handleEdit} className="bg-[#38e07b] hover:bg-[#2ecc71] text-black px-3 py-1 rounded-full text-sm">
            {t("bookings.actions.edit")}
          </button>
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm">
            {t("bookings.actions.delete")}
          </button>
        </div>
      </td>
    </tr>
  );
}
