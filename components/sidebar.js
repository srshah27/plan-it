import { BsPlus, BsCalendar2Event } from 'react-icons/bs';
import { IoMdCheckmark } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/SideBar.module.css'
import { useState } from 'react';
import AddTask from './AddTask';

const SideBar = () => {
    const [addTaskVisible, setAddTaskVisible] = useState(false);
    return (
        <div>
            <div className="top-0 left-0 h-screen w-16 flex flex-col flex-start
                  bg-custom-cream shadow-lg">

                <Link href="/"><a><SideBarLogo icon={<Image src="/img/Planit.svg" alt='Add' width={90} height={72} />} /></a></Link>
                <Divider />
                <button onClick={() => { setAddTaskVisible(true) }}><SideBarIcon icon={<BsPlus size="32" />} text={"Add"} /></button>
                <AddTask modalIsOpen={addTaskVisible} toggleModal={() => { setAddTaskVisible(false) }}  taskadded={taskAdded }></AddTask>
                <SideBarIcon icon={<IoMdCheckmark size="32" />} text={"Done"} />
                <SideBarIcon icon={<BsCalendar2Event size="24" />} text={"View"} />
                <Divider />
            </div>
            <div className="fixed left-0 bottom-0 pb-3 flex flex-col w-16 shadow-lg">
                <Divider />
                <SideBarIcon icon={<FiSettings size="22" />} text={"Settings"} />
            </div>
        </div >
    );
};


const SideBarIcon = ({ icon, text }) => (
    <div className={["group", styles.sidebaricon].join(" ")}>
        {icon}
        <span className={["group-hover:scale-100", styles.sidebartooltip].join(" ")}>
            {text}
        </span>
    </div>
);

const SideBarLogo = ({ icon, text = 'Plan-it ' }) => (
    <div className="sidebar-logo group">
        {icon}
        <span className={["group-hover:scale-100", styles.sidebartooltip].join(" ")}>
            {text}
        </span>
    </div>
);

const Divider = () => <hr className={styles.sidebarhr} />;

export default SideBar;