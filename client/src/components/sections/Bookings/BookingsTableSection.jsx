import { useEffect, useState } from "react";
import BookingsRow from "../../common/BookingsRow";
import API from "@/api";

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const year = String(date.getFullYear()).slice(-2); // get last two digits

  return `${day}/${month}/${year}`;
}

export default function BookingsTableSection({ clientId }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        console.log("Fetching booking data.")
        const res = await API.get(`/bookings/client`);
        const data = res.data.bookings;

        console.log("Bookings: ", data)

        // determine status based on assigned_professional
        const formattedBookings = data.map(b => ({
          ...b,
          status: b.assigned_professional ? "assigned" : "not assigned",
        }));

        setBookings(formattedBookings);
      } catch (err) {
        console.error("Error fetching bookings", err);
      }
    }

    fetchBookings();
  }, [clientId]);

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
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#29382f]">
          {bookings.map((b, i) => (
            <BookingsRow
              key={b._id}
              id={b._id}
              date={formatDate(b.date)}
              email={b.client?.email}
              category={b.category}
              description={b.description}
              status={b.status}
              actions={{ editable: true, deletable: true }}
              onDelete={(id) => {
                setBookings((prev) => prev.filter((b) => b._id !== id));
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
