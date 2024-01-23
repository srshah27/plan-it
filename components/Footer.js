import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Badge from '../public/img/Badge.svg'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
const Footer = () => {
    return (
        <div className={styles.footersize} id="test1">
            <div className= 'flex flex-col -ml-28 -mt-6' >
            <Image
                src={Badge}
                width="300%"
                height="100%"
            />
            <h3 className= 'text-center text-gray-700'>A one-stop solution for <br/> organizing your day!</h3>
            </div>
            {/* <div className={styles.names}>
                <h5 className='text-2xl text-custom-green font-semibold'>Join Us:</h5>
                <h5>Via GitHub</h5>
                <h5>Via Email</h5>
            </div> */}
            <div className={styles.names}>
                <h5 className='text-2xl text-custom-green font-semibold'>Group members:</h5>
                <h5>Alefiya Rampurawala</h5>
                <h5>Snehil Shah</h5>
                <h5>Aditya Sawant</h5>
                <h5>Dhara Shah</h5>
            </div>
            <div className={styles.names}>
                <h5 className='text-2xl text-custom-green font-semibold'>Contact Us:</h5>
                <h5>alefiya.rampurawala15491@sakec.ac.in</h5>
                <h5>snehil.shah15485@sakec.ac.in</h5>
                <h5>aditya.sawant15529@sakec.ac.in</h5>
                <h5>dhara.shah15875@sakec.ac.in</h5>
            </div>
            <div className='flex flex-col'>
                <Icon icon={<BsGithub size="32" />} text={"GitHub"} />
                <Icon icon={<SiGmail size="32" />} text={"GitHub"} />
            </div>
            
        </div>
    );
};

const Icon = ({ icon, text }) => (
    <div className={["group", styles.sidebaricon].join(" ")}>
        {icon}
        <span className={["group-hover:scale-100", styles.sidebartooltip].join(" ")}>
            {text}
        </span>
    </div>
);

const Title = () => <h5 className={styles.titletext}></h5>;


export default Footer;