import React from 'react'
import Modal from 'react-modal'
import { useSession } from "next-auth/react"
import { useState } from 'react'
Modal.setAppElement('#__next')
import styles from '../styles/Task.module.css'
import { AiOutlineClose } from 'react-icons/ai';

const notify = () => {const notify = new Notification("Planned IT!")}

export default function AddTask(props) {


  const { data: session, loading } = useSession();
  const email = session?.user?.email;
  const [Title, setTitle] = useState('');
  const [Duration_Minutes, setDuration_Minutes] = useState('15');
  const [Duration_Hours, setDuration_Hours] = useState('0');
  
  let d = new Date()
  if(props.date){
    d = new Date(props.date)
  }
  
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  const [Due, setDue] = useState(d.toJSON().slice(0, 10));
  const [Start, setStart] = useState(d.toJSON().slice(0, 10));
  const [Description, setDescription] = useState('');
  const handleSubmit = async () => {
    // console.log(Title, Duration_Minutes, Duration_Hours, (int(Duration_Minutes) + 60 * int(Duration_Hours)) , Due, Start, Description, session.user.email);
    const res = await fetch('/api/task/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Title, Duration_Minutes: parseInt(Duration_Minutes), Duration_Hours: parseInt(Duration_Hours), Duration: parseInt(parseInt(Duration_Minutes) + 60 * parseInt(Duration_Hours)), Due, Start, Description, User: email, Priority: 1, Completed: false, Deleted: false
      }),
    });
    const data = await res.json();
    if(data){
      const notify = new Notification(`Task Added: ${Title}`)
    }
    console.log(data);
    console.log("Sent");
    props.toggleModal()
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "title") {
      setTitle(value);
    }
    if (id === "estimate_minutes") {
      setDuration_Minutes(value);
    }
    if (id === "estimate_hours") {
      setDuration_Hours(value);
    }
    if (id === "start") {
      setStart(value);
    }
    if (id === "due") {
      setDue(value);
    }
    if (id === "description") {
      setDescription(value);
    }
  }
  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.toggleModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          },
          content: {
            position: 'absolute',
            top: '15%',
            left: '31%',
            right: '31%',
            bottom: '15%',
            border: '2px solid #E0E0E0',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            // borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        <div>
          <h1 className={styles.head}>
            <div>
              Add task to <bn className={styles.hv}>Tasks</bn>
            </div>
            <button className={styles.cl} onClick={props.toggleModal}>
              < Icon icon={<AiOutlineClose size="16" />} />
            </button>
          </h1>
            <Divider></Divider>
          <div className='form-div' >
            <div className = 'form'>
              <input id='title' type="text" value={Title} placeholder='Task Title' onChange={(e) => handleInputChange(e)}  className={styles.form}/>
              <br />
              <div className={styles.inp}>
              <label htmlFor="estimate_minutes" className='px-10'>Minutes</label>
              <input id='estimate_minutes' type="text" placeholder = 'mm' value={Duration_Minutes} onChange={(e) => handleInputChange(e)} />
              <br />
              <label htmlFor="estimate_hours" className='px-10'>Hours</label>
              <input id='estimate_hours' type="text" placeholder = 'hh' value={Duration_Hours} onChange={(e) => handleInputChange(e)} />
              <br />
              <label htmlFor="start" className='px-10'>Start</label>
              <input id='start' type="date"  value={Start} onChange={(e) => handleInputChange(e)} />
              <br />
              <label htmlFor="due" className='px-10'>Due</label>
              <input id='due' type="date" value={Due} onChange={(e) => handleInputChange(e)} />
              <br />
              <label htmlFor="description" className='px-10'>Description</label>
              <input id='description' type="textarea" value={Description} placeholder='Add Description' onChange={(e) => handleInputChange(e)} />
              <br />
              </div>
              <button type="cancel" onClick={props.toggleModal}  className={styles.btn}>Cancel</button>
              <button onClick={() => handleSubmit()} className={styles.btn}>Add</button>
        
            </div>
          </div>
        </div>

      </Modal>

    </>
  )
}

const Icon = ({ icon }) => (
  <div>
    {icon}
  </div>
);

const Divider = () => <hr className={styles.barhr} />;