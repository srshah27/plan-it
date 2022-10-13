import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Planit from '../public/img/Planit.svg'
import Link from 'next/Link'
const NavBar = () => {
    return (
        <div className={styles.topnavigation} >
            <Image
                src={Planit}
                width="110px"
                height="80px"
            />
            <Title />
            <Link className={styles.signup} href='/api/auth/signin'>Sign Up!</Link>
            <Link className={styles.getstarted} href='/auth/register'>Get Started</Link>
        </div>
    );
};

const Title = () => <h5 className={styles.titletext}>Plan-it!</h5>;


export default NavBar;