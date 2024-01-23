import styles from '../styles/Home.module.css'
import Image from 'next/image'
import about from '../public/img/about.svg'

const Footer = () => {
    return (
        <div className='bg-custom-cream2' id="test1">
            <div className={styles.aboutSize} >
                <h3 className='text-center'><br />About Us!</h3>
            </div>
            <div className={styles.aboutUs}>
                <div className={styles.desc}>
                    <Heading2 />
                    <AboutContent />
                </div>
                <Image className='ml-96 mr-40'
                    src={about}
                    width="900px"
                    height="300px"
                />
            </div>

            <div className='flex flex-col'>
            </div>

        </div>
    );
};

const Title = () => <h5 className={styles.titletext}></h5>;

const Heading2 = () => <h5 className={styles.Heading2} >Garnering Discipline <br /> One Task at a Time</h5>;
const AboutContent = () => <h5 className={styles.content}>Optimising time with efficient allocation and scheduling of tasks. <br/>The website can become a one-stop platform to schedule tasks, <br/>assign a time slot to said tasks and prioritise it based on the due date. <br /> Inorporating a very user friendly interface so as to reduce any sort of inconvenience. <br /> <br />This project is the combined work of: <br />Alefiya Rampurawala <br />Aditya Sawant <br />Snehil Shah <br />Dhara Shah</h5>
export default Footer;