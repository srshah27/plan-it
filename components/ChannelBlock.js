import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import AddTask from './AddTask';

import { useSession } from "next-auth/react"
const today = ['Task 1', 'Task 2'];
const tomorrow = ['Task 3', 'Presentation'];

const getTasks = async (email) => {
  let tasks = await fetch('/api/getTasks', {
    method: 'POST',
    headers: {},
    body: {
      email: email
    }
  })
  console.log(tasks);
  return tasks
}

function getServerSideProps() {
  // console.log(session?.user?.email);
  console.log(session?.user?.email);
  let tasks = getTasks(session?.user?.email);
  props = {
    tasks
  }
  return props
}

const ChannelBar = (props) => {
  const { data: session, status } = useSession()
  console.log(props.tasks);
  console.log(props.inc);
  let date = new Date(props.date);
  if(props.inc != 0){
    date.setDate(date.getDate() + props.inc)
  }
  console.log(date);
  const month = date.toLocaleString("en-US", { month: "long" })
  const day = date.toLocaleString("en-US", { day: "2-digit" })
  return (
    <div className='channel-bar  m-0'>
      {/* <CurDate /> */}
      <Dropdown header={month + ', ' + day} selections={today} />
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  return (
    <div className='dropdown'>
      <div className='flex flex-col'>
        <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
          <ChevronIcon expanded={expanded} />
          <h5
            className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
          >
            {header}
          </h5>
          <button onClick={() => { setAddTaskVisible(true) }}><FaPlus size='16' className='text-accent text-opacity-80 my-auto ml-32 mr-2' /></button>
          <AddTask modalIsOpen={addTaskVisible} toggleModal={() => { setAddTaskVisible(false) }} ></AddTask>
        </div>
        <Divider />
      </div>
      {expanded &&
        selections &&
        selections.map((selection, i) => <TopicSelection key={i} selection={selection} />)}
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

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <FiCheckSquare size='18' className='text-gray-400 mr-2' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

const CurDate = () => (

  <div className='channel-block'>
    <h5 className='channel-block-text'>{new Date().toLocaleString("en-US", { month: "long" })}, {new Date().toLocaleString("en-US", { day: '2-digit' })}</h5>
  </div>
);
const Divider = () => <hr className="content-hr" />;
export default ChannelBar;