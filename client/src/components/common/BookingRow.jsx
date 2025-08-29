const BookingRow = ({ date, time, client, service, status }) => (
  <tr className="border-t border-t-[#3d5245]">
    <td className="px-4 py-2 text-[#9eb7a8] text-sm font-normal">{date}</td>
    <td className="px-4 py-2 text-[#9eb7a8] text-sm font-normal">{time}</td>
    <td className="px-4 py-2 text-[#9eb7a8] text-sm font-normal">{client}</td>
    <td className="px-4 py-2 text-[#9eb7a8] text-sm font-normal">{service}</td>
    <td className="px-4 py-2 text-sm font-normal">
      <button className="flex items-center justify-center h-8 px-4 bg-[#29382f] rounded-full text-white text-sm font-medium w-full">
        {status}
      </button>
    </td>
  </tr>
);

export default BookingRow;