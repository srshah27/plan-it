import { useState, useEffect } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import AddTask from './AddTask';
import ViewTask from './ViewTask';
import { useSession } from "next-auth/react"
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


const taskAdded = () => toast.success("Task Added")
const taskCompleted = () => toast.success("Task Completed")
const taskDeleted = () => toast.success("Task Deleted")

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
  
  today.sort((a, b) => a.Duration - b.Duration)
  today.sort((a, b) => b.Priority - a.Priority)
  
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
  const [CObjectId, setCObjectId] = useState(null);
  const [DObjectId, setDObjectId] = useState(null);
  const [PObjectId, setPObjectId] = useState(null);
  const [viewTaskVisible, setViewTaskVisible] = useState(false);

  const TopicSelection = ({ task }) => (

    <div className='dropdown-selection'>
      <button onClick={() => { setViewTaskVisible(true) }}>
        <FiCheckSquare size='18' className='text-gray-400 mr-2' />
        <h5 className='dropdown-selection-text'>{task.Title}</h5>
      </button>
      <ViewTask modalIsOpen={viewTaskVisible} toggleModal={() => { setViewTaskVisible(false) }} task={task} />
    </div>

  );
  const { cdata, cerror } = useSWR(CObjectId ? `http://localhost:3000/api/task/complete?ObjectId=${CObjectId}` : null, fetcher)
  if (cdata) {
    setCObjectId(null)
    taskCompleted
  } else if (cerror) {
    console.log(cerror);
  }
  const { ddata, derror } = useSWR(DObjectId ? `http://localhost:3000/api/task/delete?ObjectId=${DObjectId}` : null, fetcher)
  if (ddata) {
    setDObjectId(null)
    taskDeleted
  } else if (derror) {
    console.log(derror);
  }
  const { pdata, perror } = useSWR(PObjectId ? `http://localhost:3000/api/task/priority?ObjectId=${PObjectId[0]}&Priority=${PObjectId[1]}` : null, fetcher)
  if (pdata) {
    setPObjectId(null)
    toast.success("Task Priority Updated")
  } else if (perror) {
    console.log(perror);
  }

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
          <AddTask modalIsOpen={addTaskVisible} toggleModal={() => { setAddTaskVisible(false) }} date={date} taskadded={taskAdded} ></AddTask>
        </div>
        <Divider />
      </div>
      {
        expanded &&
        tasks &&
        // tasks.map((task, i) => <TopicSelection key={i} task={task} />)}
        tasks.map((task, i) => (

          <div key={i} className='dropdown-selection'>
            <FiCheckSquare size='18' className='text-gray-400 mr-2' />
            <h5 className='dropdown-selection-text'>{task.Title}</h5>
            <button onClick={() => { setCObjectId(task._id) }}>Done</button>
            <h5 className='dropdown-selection-text'>{task.Description}</h5>
            <button onClick={() => { setDObjectId(task._id) }}>Delete</button>
            <h5 className='dropdown-selection-text'>{task.Duration} Minutes</h5>
            <input type="number" value={task.Priority} onChange={(e) => {console.log("heya, " + e.target.value) ; setPObjectId([task._id, e.target.value])}}  min="0" max="3" ></input>
          </div>
        ))}
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

const CurDate = () => (

  <div className='channel-block'>
    <h5 className='channel-block-text'>{new Date().toLocaleString("en-US", { month: "long" })}, {new Date().toLocaleString("en-US", { day: '2-digit' })}</h5>
  </div>
);
const Divider = () => <hr className="content-hr" />;
export default ChannelBar;