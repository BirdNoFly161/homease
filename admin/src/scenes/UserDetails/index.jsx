import { useParams } from "react-router-dom";
import ProfileHeaderSection from "@/components/sections/UserDetails/ProfileHeaderSection";
import TabsSection from "@/components/sections/UserDetails/TabsSection";
import SkillsSection from "@/components/sections/UserDetails/SkillsSection";
import ExperienceSection from "@/components/sections/UserDetails/ExperienceSection";
import AboutMeSection from "@/components/sections/UserDetails/AboutMeSection";
import RatingSection from "@/components/sections/UserDetails/RatingSection";
import NavBar from "@/components/common/NavBar";
import API from "@/api";
import { useState, useEffect } from "react";
import Spinner from "@/components/unused/spinner";
function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function init() {
      try {
        let response = await API.get(`/users/professionals/${userId}`);
        setUser(response.data.user);
        console.log("data from uid path:", response);

      } catch (error) {
        if (error) {
          console.log(error);
        }

      }
    }
    init();
  }, []);

  return (
    user ? (<div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <NavBar />
      <main className="pt-20 layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <ProfileHeaderSection user={user} />
            <TabsSection user={user} />
            <SkillsSection user={user} />
            <ExperienceSection user={user} />
            <AboutMeSection user={user} />
            <RatingSection user={user}/>
          </div>
        </div>
      </main>
    </div>) : <Spinner />

  );
}

export default UserDetails;