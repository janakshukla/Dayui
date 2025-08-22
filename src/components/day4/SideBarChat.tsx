import { Settings, Headphones } from "lucide-react";

const SideBarChat = ({ isopen }: { isopen: boolean }) => {
  const chatList = [
    { id: 1, name: "Clipboard Issue Fix" },
    { id: 2, name: "Image Request Summary" },
    { id: 3, name: "Delivery Update Message" },
    { id: 4, name: "Design Feedback" },
  ];
  const spaces = [
    { id: 1, name: "General Design Tips", dotcolor: "#4338CA" },
    { id: 2, name: "Contracts & Business", dotcolor: "#F59E0B" },
    { id: 3, name: " Dev Space", dotcolor: "#10B981" },
  ];

  return (
    <div
      className={`min-h-8/10 flex pt-4 flex-col justify-between font-inter w-full ${
        isopen ? " " : "opacity-0"
      } `}
    >
      <div>
        {/* conversation */}
        <div>
          <h3 className="flex px-2 xl:px-10 items-center gap-3 text-xs text-[#A3A3A3] uppercase py-2 tracking-wide">
            Conversations{" "}
          </h3>
          <div className="flex flex-col gap-2 px-2 xl:px-10 ">
            {chatList.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center   text-xs text-[#5C5C5C] py-2 hover:bg-gray-200 cursor-pointer"
              >
                <span>{chat.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* spaces */}
        <div>
          <h3 className="flex px-2 xl:px-10 items-center gap-3 text-xs text-[#A3A3A3] uppercase py-2 tracking-wide">
            spaces{" "}
          </h3>
          <div className="flex flex-col gap-2 px-2 xl:px-10 ">
            {spaces.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center  gap-2 text-xs text-[#5C5C5C] py-2 hover:bg-gray-200 cursor-pointer"
              >
                <div
                  className="w-2 h-2 rounded-full  "
                  style={{ backgroundColor: chat.dotcolor }}
                ></div>
                <span className="" >{chat.name}</span>
                <span className="text-[0.65rem]  text-gray-500 ml-auto">
                  {chat.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* options */}
      <div>
        <h3 className="flex xl:px-8 px-4 items-center  gap-3 text-xs text-[#5C5C5C] py-2  tracking-tight">
          {" "}
          <Settings size={18} /> <span>Settings{" "}</span>
        </h3>
        <h3 className="flex xl:px-8 px-4 items-center  gap-3 text-xs text-[#5C5C5C]  py-2 tracking-tight">
          <Headphones size={18} /> Support{" "}
        </h3>
      </div>
    </div>
  );
};

export default SideBarChat;
