import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
import {TbWorld, TbFiles, TbLogout} from "react-icons/tb";
import {RiUserSearchLine, RiGalleryLine} from "react-icons/ri";
import {HiOutlineDocumentDuplicate} from "react-icons/hi";
import {useState} from "react";
import {MdLibraryBooks, MdOutlineSettingsApplications} from "react-icons/md";
import Dashboard from "./pages/Dashboard";
import Header from "../components/Header";

export default function App() {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const main = [
    {
      id: 1,
      title: "Dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      id: 2,
      title: "Discover",
      submenu: true,
      submenuItems: [
        {
          title: "test 1",
        },
        {
          title: "test 2",
        },
      ],
      icon: <TbWorld />,
    },
    {
      id: 3,
      title: "Users",
      icon: <RiUserSearchLine />,
    },
    {
      id: 4,
      title: "Documents",
      icon: <MdLibraryBooks />,
    },
    {
      id: 5,
      title: "Applications",
      icon: <MdOutlineSettingsApplications />,
    },
    {
      id: 6,
      title: "Pages",
      icon: <HiOutlineDocumentDuplicate />,
    },
  ];
  const secondary = [
    {
      id: 1,
      title: "Support Center",
      icon: <BiHelpCircle />,
    },
    {
      id: 2,
      title: "Inbox",
      icon: <RiGalleryLine />,
    },
    {
      id: 3,
      title: "File Manager",
      icon: <TbFiles />,
    },
    {
      id: 4,
      title: "Data List",
      icon: <AiOutlineUnorderedList />,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Settings",
      icon: <AiOutlineSetting />,
    },
    {
      id: 2,
      title: "Logout",
      icon: <TbLogout />,
    },
  ];

  return (
    <>
      <div className='flex'>
        <div className={`h-screen w-16 md:w-72`}>
          <div className='w-4/5 mx-auto'>
            <h1 className='text-black text-center text-xl font-semibold mt-2'>
              Artemis
            </h1>
            <h1 className={`text-gray-500 text-xs hidden md:block mt-3`}>
              MAIN
            </h1>
            {main.map((d, i) => {
              return (
                <div key={i}>
                  <div className='flex py-2 group hover:bg-[#382BDB] hover:rounded-sm px-2 hover:text-white'>
                    <div className='text-gray-600 group-hover:text-[#FFFFFF] mr-2 mt-1'>
                      {d.icon}
                    </div>
                    <p
                      className={`text-gray-600 group-hover:text-[#FFFFFF] hidden md:block`}>
                      {d.title}
                    </p>
                    {d.submenu && (
                      <div className='group-hover:text-[#FFFFFF]'>
                        <AiFillCaretDown
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                          color='#5A5A5A'
                          className='ml-28 mt-1'
                          size={20}
                        />
                      </div>
                    )}
                  </div>
                  {d.submenu &&
                    subMenuOpen &&
                    d.submenuItems.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className='px-3 py-1 flex gap-2 duration-300'>
                          <span className='mt-1'>
                            <AiOutlineUnorderedList />
                          </span>
                          <p className='hidden md:block'>{item.title}</p>
                        </div>
                      );
                    })}
                </div>
              );
            })}
            <h1 className={`text-gray-500 text-xs mt-5 hidden md:block`}>
              SECONDARY
            </h1>
            {secondary.map((d, i) => {
              return (
                <div
                  key={i}
                  className='flex py-2 group hover:bg-[#382BDB] hover:rounded-sm px-2 hover:text-white'>
                  <span className='text-gray-600 mr-2 mt-1 group-hover:text-[#FFFFFF]'>
                    {d.icon}
                  </span>
                  <p
                    className={`text-gray-600 group-hover:text-[#FFFFFF] hidden md:block`}>
                    {d.title}
                  </p>
                </div>
              );
            })}
            <div className='mt-9'></div>
            {data.map((d, i) => {
              return (
                <div
                  key={i}
                  className='flex py-2 group hover:bg-[#382BDB] hover:rounded-sm px-2 hover:text-white'>
                  <div className='text-gray-600 mr-2 mt-1 group-hover:text-[#FFFFFF]'>
                    {d.icon}
                  </div>
                  <p
                    className={`text-gray-600 group-hover:text-[#FFFFFF] hidden md:block `}>
                    {d.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  );
}
