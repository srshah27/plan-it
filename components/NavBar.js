import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Planit from '../public/img/Planit.svg'
import Link from 'next/link';
const NavBar = () => {
    return (
        <div className={styles.topnavigation} >
            <Image
                src={Planit}
                width="110px"
                height="80px"
            />
            <Title />
            <Link href="/api/auth/signin"><a><button className={styles.signup}>Sign Up!</button></a></Link>
        </div>
    );
};

const Title = () => <h5 className={styles.titletext}>Plan-it!</h5>;


export default NavBar;