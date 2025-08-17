const Day1 = () => {
  return (
    <div className="h-screen w-screen bg-Day1-primary flex justify-center p items-center ">
      <div className=" h-4/5 w-5/6  animation  ">
        <div className="h-1/5">
          <h1 className="font-semibold text-5xl text-shadow-lg tracking-tighter font-geist text-center">
            Pricing plans
          </h1>
          <p className=" font-geist font-medium  text-shadow-lg -tracking-normal mt-4 text-center">
            Choose the right plan for your needs.
          </p>
        </div>
        <div className="w-full h-4/5 flex gap-8 justify-center">
          <div className="w-1/4 h-full shadow-2xl border rounded-4xl border-white/10 bg-white  ">
            <div className="h-1/2 w-full shadow-2xl rounded-4xl border-b  border-b-white/10 ">
              <div className="h-1/2  m-4 bg-[#EFEFEF] rounded-4xl flex flex-col justify-between p-4  ">
                <h1 className=" font-inter text-black/80 text-center  text-xs font-bold rounded-4xl bg-white px-2 py-1 w-16 ">
                  Starter
                </h1>
                <h1 className="text-3xl font-geist tracking-tight font-semibold ">
                  $0
                  <span className="text-xl font-normal font-geist">/month</span>
                </h1>
              </div>
              <h3 className="font-inter font-medium m-4 px-4 text-sm ">
                Perfect for small teams
              </h3>
              <button className="font-inter font-medium mx-2 px-28 rounded-4xl bg-[#1A1A1A] text-white py-2 drop-shadow-2xl shadow-inner shadow-white backdrop-blur-md text-nowrap text-sm hover:bg-black ">
                Start Hiring
              </button>
            </div>
            <ul className="h-1/2 m-8 px-4 list-image-[url(/Check.svg)]">
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                3 projects
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                AI applicant screening
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                AI Recruiter
              </li>
            </ul>
          </div>
          <div className="w-1/4 h-full shadow-2xl border rounded-4xl border-white/10 bg-white  ">
            <div className="h-1/2 w-full shadow-2xl rounded-4xl border-b  border-b-white/10 ">
              <div className="h-1/2  m-4 bg-gradient-to-r  from-[#C145FF]/20 to-[#1FDDF2]/20 rounded-4xl flex flex-col justify-between p-4  ">
                <h1 className=" font-inter text-black/80 text-center  text-xs font-bold rounded-4xl bg-white px-2 py-1 w-28 ">
                  PROFESSIONAL
                </h1>
                <h1 className="text-3xl font-geist tracking-tight font-semibold ">
                  $99
                  <span className="text-xl font-normal font-geist">/month</span>
                </h1>
              </div>
              <h3 className="font-inter font-medium m-4 px-4 text-sm ">
                Perfect for growing teams
              </h3>
              <button className="font-inter font-medium mx-2 px-28 rounded-4xl bg-[#1A1A1A] text-white py-2 drop-shadow-2xl shadow-inner shadow-white backdrop-blur-md text-nowrap text-sm hover:bg-black ">
                Start Hiring
              </button>
            </div>
            <ul className="h-1/2 m-8 px-4   list-image-[url(/Check.svg)]">
              <li className="font-inter  font-semibold text-black/80 my-2 p-1 text-xs">
                Unlimited projects
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                AI applicant screening
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                AI Recruiter
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                Risk-free guarantee
              </li>
            </ul>
          </div>
          <div className="w-1/4 h-full shadow-2xl border rounded-4xl border-white/10 bg-white  ">
            <div className="h-1/2 w-full shadow-2xl rounded-4xl border-b  border-b-white/10 ">
              <div className="h-1/2  m-4 bg-[#EFEFEF] rounded-4xl flex flex-col justify-between p-4  ">
                <h1 className=" font-inter text-black/80 text-center  text-xs font-bold rounded-4xl bg-white px-2 py-1 w-24 ">
                  Enterprise
                </h1>
                <h1 className="text-3xl font-geist tracking-tight font-semibold ">
                  Custom
                </h1>
              </div>
              <h3 className="font-inter font-medium m-4 px-4 text-sm ">
                For large organizations
              </h3>
              <button className="font-inter font-medium mx-2 px-28 rounded-4xl bg-[#1A1A1A] text-white py-2 drop-shadow-2xl shadow-inner shadow-white backdrop-blur-md text-nowrap text-sm hover:bg-black ">
                Contact Us
              </button>
            </div>
            <ul className="h-1/2 m-8 px-4 list-image-[url(/Check.svg)]">
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                Unlimited projects
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                AI applicant screening
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                Custom Skill Assessments
              </li>
              <li className="font-inter font-semibold text-black/80 my-2 p-1 text-xs">
                Custom AI Recruiter
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day1;
