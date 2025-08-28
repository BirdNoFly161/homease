const professionals = [
  { name: "Sarah Chen", role: "Web Developer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoxnzOvac64k-5ZkY0DTJVGDXmxSMpfD5qsFLyEGXKmochTllaI8Yo2riKVF8qkrygjTMF8T_k1IvqHpHCuvD_pc7BBvtbDdiIumrwqWvUrQgny_3Iw4M54--SY60NoD-HLBDZz07zaaclRsL8ljVrGEADmqF-ANnUQAVOrBNQKSSKIF18vAh7xCt6JtJD80e_eFLniaOt4ylK8XXx0sgQpUQ4k1JkO24FCbgeY9kxGwYQcNjEnLkXu7nUu-rW0-RLg6SO2hOjkrTU" },
  { name: "David Lee", role: "Graphic Designer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcN-KNOmzP6uE9mqFSE8XcmgwIbAUaYHmtdb0PrgERFy1B7qBboQ0C5CfF_rF-r7x2-cV6tPCTa6jYhok6cdSSfKyMYfido1zOqRA__ZbuNVxJlzaGW7HG6AXt82LbEIKle2urCrTms8C2lB0gERlcAySx08UZ_Fv_Bh4Rp0FTAXerIokBCDpz7-tsDkl1DBAhN15oI1vpZNvBdRgnwQshrZdVzff8XJNZgDjEK8sxuCbMK79OygzbZYIHMDDUsZqY91eFpGSvrDPC" },
  { name: "Emily Rodriguez", role: "Marketing Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoydEavwCtjCyS7H8jfAibJ_4leGGWoqWdrzMPfNG8BsDEMdDhsHA-nCXfbv8wwb-oYP6C5M-caG5mUaL7KMOgaDvjUFYGuIz3-nRK8XI1zzp85MkzGaDzdzrk8Xzbp1GKmeQ-44kRRuB1xS33SbaD1smEAsMscBLLoNEzEU70k4lHxlPY65IRKA45k2R3FEZF3kM10HAYoZco2S8HeISTnQyB6KrxJbHTKnOyqDNgKpqTivMBvnI6zX-sWEPAUCJZIEfELX67PBm4" },
];

const FeaturedProfessionals = () => {
  return (
    <section className="px-4 pt-5">
      <h2 className="text-white text-[22px] font-bold pb-3">Featured Professionals</h2>
      <div className="flex overflow-y-auto gap-3">
        {professionals.map((pro, idx) => (
          <div key={idx} className="flex flex-col gap-4 min-w-60">
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${pro.img})` }}
            />
            <div>
              <p className="text-white text-base font-medium">{pro.name}</p>
              <p className="text-[#9eb7a8] text-sm">{pro.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProfessionals;