const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-full ${
      active ? "bg-[#29382f]" : ""
    } cursor-pointer`}
  >
    <div className="text-white">{icon}</div>
    <p className="text-white text-sm font-medium leading-normal">{label}</p>
  </div>
);

export default SidebarItem;