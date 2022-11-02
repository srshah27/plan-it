import { useState, useEffect } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import AddTask from './AddTask';
import { useSession } from "next-auth/react"
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'


const taskAdded = () => toast.success("Task Added")

const ChannelBar = (props) => {
  const { data: session, status } = useSession()
  const [Tasks, setTasks] = useState(null);
  // setTasks(props.task)

  let date = new Date(props.date);
  if (props.inc != 0) {
    date.setDate(date.getDate() + props.inc)
  }


  const month = date.toLocaleString("en-US", { month: "long" })
  const day = date.toLocaleString("en-US", { day: "2-digit" })
  let today = [];
  props.task?.forEach(task => {
    let taskDate = new Date(task?.Start)
    if (date.getDate() == taskDate.getDate()) {
      today.push(task)
    }
  });
  let todaySet = new Set(today)
  today = Array.from(todaySet)
  // console.log(today);

  return (
    <div className='channel-bar m-0 border-r-2 mt-16'>
      <Dropdown header={month + ', ' + day} tasks={today} date={date} />
    </div>
  );
};

const Dropdown = ({ header, tasks, date }) => {
  const [expanded, setExpanded] = useState(true);
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  return (
    <div className='dropdown'>
      <Toaster />
      <div className='flex flex-col'>
        <div className='dropdown-header'>
          {/* <ChevronIcon expanded={expanded} /> */}
          <Link href={`?$=${date.getMonth() + 1}/${date.toLocaleString("en-US", { day: '2-digit' })}/${date.getFullYear()}`}>
            <h5
              className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
            >
              {header}
            </h5>
          </Link>
          <button onClick={() => { setAddTaskVisible(true) }}><FaPlus size='16' className='text-accent text-opacity-80 my-auto ml-40 mr-2' /></button>
          <AddTask modalIsOpen={addTaskVisible} toggleModal={() => { setAddTaskVisible(false) }} date={date}></AddTask>
        </div>
        <Divider />
      </div>
      {expanded &&
        tasks &&
        tasks.map((task, i) => <TopicSelection key={i} task={task} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-4';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ task }) => (
  <div className='dropdown-selection'>
    <FiCheckSquare size='18' className='text-gray-400 mr-2' />
    <h5 className='dropdown-selection-text'>{task.Title}</h5>
  </div>
);

const CurDate = () => (

  <div className='channel-block'>
    <h5 className='channel-block-text'>{new Date().toLocaleString("en-US", { month: "long" })}, {new Date().toLocaleString("en-US", { day: '2-digit' })}</h5>
  </div>
);
const Divider = () => <hr className="content-hr" />;
export default ChannelBar;