import FadeLeft from "@/components/FadeLeft";
import FadeRight from "@/components/FadeRight";
import FadeCenter from "@/components/FadeCenter";



const Landing = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3">
          <div className="flex items-center gap-8">
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
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Browse</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">For Pros</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#9eb7a8] flex border-none bg-[#29382f] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#29382f] focus:border-none h-full placeholder:text-[#9eb7a8] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </div>
            </label>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Post a request</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#29382f] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Log in</span>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhh_qIsKWwE-kiU9kiON6sB8AFd-NeSsKi4ZzU8LsuLM40hcfj7KZxzL1f5NjeynETB2eMYGgWFr8OyBuVIRfxPEZCIj4UNc1pXJyGQ9uVgZInRP4qdiT39JR-CmZyhvf5Ma9MkeUrW8_hLzaRJo4gS_Xt45019dskUA-b6JD0IUL9YAbFiBOPv49gAdMhA4vpU_9uKHdJtCRNOAnijB9j9F3usBm0og6nufeeCb3BU7-PWHDdn7pGKM-lgl_ozuP_tSsEJmXeW_bv")'}}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Find the perfect professional for your project
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Browse thousands of skilled professionals ready to help you with any task, from web development to graphic design.
                    </h2>
                  </div>
                  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        className="text-[#9eb7a8] flex border border-[#3d5245] bg-[#1c2620] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                          />
                        </svg>
                      </div>
                      <input
                        placeholder="Search for skills or categories"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d5245] bg-[#1c2620] focus:border-[#3d5245] h-full placeholder:text-[#9eb7a8] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        defaultValue=""
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#3d5245] bg-[#1c2620] pr-[7px]">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span className="truncate">Search</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Professionals</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoxnzOvac64k-5ZkY0DTJVGDXmxSMpfD5qsFLyEGXKmochTllaI8Yo2riKVF8qkrygjTMF8T_k1IvqHpHCuvD_pc7BBvtbDdiIumrwqWvUrQgny_3Iw4M54--SY60NoD-HLBDZz07zaaclRsL8ljVrGEADmqF-ANnUQAVOrBNQKSSKIF18vAh7xCt6JtJD80e_eFLniaOt4ylK8XXx0sgQpUQ4k1JkO24FCbgeY9kxGwYQcNjEnLkXu7nUu-rW0-RLg6SO2hOjkrTU")'}}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Sarah Chen</p>
                    <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Web Developer</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcN-KNOmzP6uE9mqFSE8XcmgwIbAUaYHmtdb0PrgERFy1B7qBboQ0C5CfF_rF-r7x2-cV6tPCTa6jYhok6cdSSfKyMYfido1zOqRA__ZbuNVxJlzaGW7HG6AXt82LbEIKle2urCrTms8C2lB0gERlcAySx08UZ_Fv_Bh4Rp0FTAXerIokBCDpz7-tsDkl1DBAhN15oI1vpZNvBdRgnwQshrZdVzff8XJNZgDjEK8sxuCbMK79OygzbZYIHMDDUsZqY91eFpGSvrDPC")'}}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">David Lee</p>
                    <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Graphic Designer</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoydEavwCtjCyS7H8jfAibJ_4leGGWoqWdrzMPfNG8BsDEMdDhsHA-nCXfbv8wwb-oYP6C5M-caG5mUaL7KMOgaDvjUFYGuIz3-nRK8XI1zzp85MkzGaDzdzrk8Xzbp1GKmeQ-44kRRuB1xS33SbaD1smEAsMscBLLoNEzEU70k4lHxlPY65IRKA45k2R3FEZF3kM10HAYoZco2S8HeISTnQyB6KrxJbHTKnOyqDNgKpqTivMBvnI6zX-sWEPAUCJZIEfELX67PBm4")'}}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Emily Rodriguez</p>
                    <p className="text-[#9eb7a8] text-sm font-normal leading-normal">Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Popular Skills</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Web Development</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Graphic Design</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Content Writing</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Social Media Marketing</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Virtual Assistant</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Data Analysis</p>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1
                    className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Join SkillHub as a Professional
                  </h1>
                  <p className="text-white text-base font-normal leading-normal max-w-[720px]">Offer your skills and connect with clients seeking your expertise.</p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span className="truncate">Become a Pro</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
