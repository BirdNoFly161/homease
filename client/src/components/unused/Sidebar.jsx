import { useSelector} from "react-redux";

function Sidebar({ loading }) {
  const user = useSelector((state) => state.user.currentUser);
  if (!user) return null;
  return (
    <div className="h-full bg-primary-100 py-6 px-4 w-72">

    </div>
  );
}

export default Sidebar;
