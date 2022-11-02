import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Planit from '../public/img/Planit.svg'

const Footer = () => {
    return (
        <div className={styles.footersize} id="test1">
            <Image
                src={Planit}
                width="110px"
                height="80px"
            />
            <div className={styles.names}>
                <h5>Dhara Shah</h5>
                <h5>Alefiya Rampurawala</h5>
                <h5>Snehil Shah</h5>
                <h5>Aditya Sawant</h5>
            </div>
            <div className={styles.names}>
                <h5>dhara.shah15875@sakec.ac.in</h5>
                <h5>alefiya.rampurawala15491@sakec.ac.in</h5>
                <h5>snehil.shah15485@sakec.ac.in</h5>
                <h5>aditya.sawant15529@sakec.ac.in</h5>
            </div>
        </div>
    );
};

const Title = () => <h5 className={styles.titletext}></h5>;


export default Footer;