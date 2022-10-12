
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <div className="flex-row">
            <Heading1 />
            <Heading2 />
        </div>
    );
};

const Heading1 = () => <h5 className={styles.Heading1}>Assistant of your own!</h5>;
const Heading2 = () => <h5 className={styles.Heading2}>Add tasks, deadlines and collaborate with colleagues! Let us save time together!</h5>;

export default About;