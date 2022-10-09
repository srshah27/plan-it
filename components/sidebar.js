import { BsPlus, BsCalendar2Event, BsGearFill } from 'react-icons/bs';
import { IoMdCheckmark } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import Image from 'next/image'

const SideBar = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col flex-start
                  bg-white dark:bg-gray-900 shadow-lg">

                <SideBarIcon icon={<Image src="/img/Planit.svg" width={50} height={40} />} />
                <Divider />
                <SideBarIcon icon={<BsPlus size="32" />} />
                <SideBarIcon icon={<IoMdCheckmark size="32" />} />
                <SideBarIcon icon={<BsCalendar2Event size="24" />} />
                <Divider />
            </div>
            <div className="fixed left-0 bottom-3 flex flex-col w-16 shadow-lg">
                <Divider />
                <SideBarIcon icon={<FiSettings size="22" />} />
            </div>
        </div>
    );
};


const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
