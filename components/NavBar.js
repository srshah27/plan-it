import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Planit from '../public/img/Planit.svg'
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';



const NavBar = () => {
    return (
        <div className={styles.topnavigation} >
            <Image
                src={Planit}
                width="110px"
                height="80px"
            />
            <Title />
            <div>
                <button onClick={notify} className={styles.signup}>Add Task!</button>
                <Toaster />
            </div>
        </div>
    );
};

const Title = () => <h5 className={styles.titletext}>Plan-it!</h5>;
const notify = () => toast('Task Added');


export default NavBar;

