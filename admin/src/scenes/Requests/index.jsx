import React from "react";
import { useState, useEffect } from "react";
import API from "@/api";
import { useNavigate } from "react-router-dom";
const requests = [
  {
    id: "REQ001",
    client: "Olivia Bennett",
    description: "Website design for a small business",
    status: "Open",
    action: "Assign",
  },
  {
    id: "REQ002",
    client: "Ethan Carter",
    description: "Mobile app development",
    status: "Open",
    action: "Assign",
  },
  {
    id: "REQ003",
    client: "Sophia Davis",
    description: "Content writing for blog",
    status: "In Progress",
    action: "View",
  },
  {
    id: "REQ004",
    client: "Liam Foster",
    description: "Social media marketing campaign",
    status: "Open",
    action: "Assign",
  },
  {
    id: "REQ005",
    client: "Ava Green",
    description: "Graphic design for logo",
    status: "Completed",
    action: "View",
  },
];

import { BiCheck } from "react-icons/bi";

const Requests = () => {

  const [requests, setRequests] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const navigate = useNavigate()


  async function fetchProfessionals() {
    try {
      const { data, ok, msg } = (await API.get("users/professionals")).data;
      console.log("got data: ", data);
      if (!ok) return;
      setProfessionals(data);
    } catch (error) {
      console.log(error);
    }
  }


  async function fetchRequests() {
    try {
      const response = (await API.get("bookings"));
      const data = response.data
      console.log("got data: ", data);
      setRequests(data.bookings);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRequests();
    fetchProfessionals();
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#111714] dark group/design-root overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SkillHub</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Requests</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Professionals</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Clients</a>
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#29382f] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  />
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCybprzO3KCe846AZak_WVJQTbipzQ3qFR7Nz3bmGFgYjNdpXcsvWuYd4nxIXEJOPXBtvHAIz3dDpd72Ej2xAXFyKI6Fir2ej_Xvjv0-VH6UqVand2yD5kSmUnnLtrYEOAw-NQM-qKR7od17jVbtAvRRU33Xe2W071qk1Ut2ZSEPuE2ueaOvE_uKxjGA0Tpj3JJpw-2mon5BVR3X0K92whTeCbKGf2kv6PVpsCwZgW3Iue2ERTqpCjeBaIHwr1ESNJcvyuFNw3Sjs2D")',
              }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1080px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Client Job Requests</p>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Manage and assign professionals to client requests.</p>
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-lg border border-[#3d5245] bg-[#111714]">
                <table className="flex-1 w-full">
                  <thead>
                    <tr className="bg-[#1c2620]">
                      <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Request ID</th>
                      <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Client</th>
                      <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Telephone</th>
                      <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Category</th>
                      <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Job Description</th>
                      <th className="px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">Status</th>
                      <th className="px-4 py-3 text-left text-[#9eb7a8] w-60 text-sm font-medium leading-normal">Assign Professional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((req) => (
                      <tr key={req._id} className="border-t border-t-[#3d5245]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">{req._id}</td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">{req.firstName} {req.lastName}</td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">{req.telephone}</td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">{req.category}</td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#9eb7a8] text-sm font-normal leading-normal">{req.description}</td>
                        <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#29382f] text-white text-sm font-medium leading-normal w-full"
                          >
                            <span className="truncate">{req.status}</span>
                          </button>
                        </td>
                        <td className="flex flex-0 flex-col h-[72px] px-4 py-2 w-60 text-[#9eb7a8] text-sm font-bold leading-normal tracking-[0.015em]">
                          {
                            <select
                              className="bg-[#1c2620] text-white rounded-lg px-2 py-1"
                              defaultValue={req.assigned_professional ? req.assigned_professional._id : null}
                              onChange={async e => {
                                // handle assignment here, e.g. call API to assign professional
                                // Example: assignProfessional(req._id, e.target.value)
                                let response = await API.put(`bookings/${req._id}`, { ...req, assigned_professional: e.target.value })
                                console.log(response)
                                navigate("/requests")
                              }}
                            >
                              {professionals.map((professional) => (<option key={professional._id} value={professional._id}>{professional.firstName} {professional.lastName}</option>))}F
                            </select>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;