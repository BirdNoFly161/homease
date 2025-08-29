import BookingRow from "@/components/common/BookingRow";

function BookingTableSection(){
  return (
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#3d5245] bg-[#111714]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#1c2620] text-white text-sm font-medium">
                <th className="px-4 py-3 text-left w-[400px]">Date</th>
                <th className="px-4 py-3 text-left w-[400px]">Time</th>
                <th className="px-4 py-3 text-left w-[400px]">Client</th>
                <th className="px-4 py-3 text-left w-[400px]">Service</th>
                <th className="px-4 py-3 text-left w-60">Status</th>
              </tr>
            </thead>
            <tbody>
              <BookingRow
                date="July 15, 2024"
                time="2:00 PM"
                client="Emily Carter"
                service="Portrait Session"
                status="Confirmed"
              />
              <BookingRow
                date="July 20, 2024"
                time="10:00 AM"
                client="David Lee"
                service="Event Photography"
                status="Pending"
              />
              <BookingRow
                date="July 25, 2024"
                time="4:00 PM"
                client="Olivia Brown"
                service="Family Photoshoot"
                status="Confirmed"
              />
            </tbody>
          </table>
        </div>
      </div>);
}

export default BookingTableSection;