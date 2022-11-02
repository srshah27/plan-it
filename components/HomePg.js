import Image from 'next/image'
import homepage from '../public/img/homepage.svg'
import styles from '../styles/Home.module.css'
import About from './About';

const Home = () => {
    return (
        <div className={styles.homepg}>
            <About />
            <Image
                src={homepage}
                width="950px"
                height="900px"
            />
        </div>
    );
};

export default Home;