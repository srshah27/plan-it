import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Planit from '../public/img/Planit.svg'

import { useSession } from "next-auth/react"
import Router from 'next/router';
const NavBar = () => {
    const { data: session, status } = useSession()

    const signIn = () => {
        Router.push('/api/auth/signin')
    }
    const signUp = () => {
        Router.push('/auth/register')
    }
    const signOut = () => {
        Router.push('/api/auth/signout')
    }
    const app = () => {
        Router.push('/app')

    }
    let sess;
    if (session) {
        sess = <><button className={styles.signup} onClick={app} >App</button><button className={styles.signup} onClick={signOut} >Sign Out</button></>
    } else {
        sess = <> <button className={styles.signup} onClick={signIn} >Sign In</button> <button className={styles.signup} onClick={signUp} >Sign Up!</button></>
    }


    return (
        <div className={styles.topnavigation} >

            <Image
                src={Planit}
                width="110px"
                height="80px"
                alt='Plan It'
            />
            <Title />
            {sess}
        </div>
    );
};

const Title = () => <h5 className={styles.titletext}>Plan-it!</h5>;


export default NavBar;

