import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="w-full h-full rounded">
      {user && (
        <>
          <div className="">
            <div className="flex justify-between items-center border-b border-border">
              <h1 className="font-bold text-4xl">Dashboard</h1>
            </div>
          </div>
        </>
      )}

      {!user && (
        <>
          <div className="bg-background w-full flex flex-col items-center gap-8 border border-border rounded p-5">
            <span>You need to login to view your dashboard</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
