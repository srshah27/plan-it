import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Register.module.css'
import { useState } from 'react'
export default function Register() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  const handleSubmit = async () => {
    if (password == confirmPassword && password.length >= 8 && email.includes('@')) {
      let result = await fetch('api/register', {
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword: confirmPassword
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      if (result.status == 200) {
        window.location.href = '/api/auth/signin';
      }
      if (result.status == 400) {
        // console.log(await result.json().mesasge);
        let e= await result.json()
        setError(e.message);
  
      }

      }
    }

    return (
      <>
        <Head>
          <title>Register | Plan IT!</title>
        </Head>
        <nav>
          <div>
            <h3 className='text-center text-6xl text-custom-green mt-8' >Register Here!</h3>
          </div>
        </nav>

        <div className={styles.form}>
          <div className={styles.formbody}>
            <div className={styles.name}>
              <input type="text" name="" id="name" className={styles.form_input} value={name} onChange={(e) => handleInputChange(e)} placeholder="User Name" />
            </div>
            <div className={styles.email}>
              <input type="email" id="email" className={styles.form_input} value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
              <div className= {styles.warning}>
              {(email != '' && !email.includes('@')) ? <p>Invalid Email</p> : null}
              </div>
            </div>
            <div className={styles.password}>
              <input className={styles.form_input} type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
              <div className= {styles.warning}>
            {(password != '' && password.length < 8) ? <p>Password Length should be more than 8</p> : null}
              </div>
            </div>
            <div className={styles.confirmpassword}>
              <input className={styles.form_input} type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
              <div className= {styles.warning}>
              {(password != '' && confirmPassword != '' && password != confirmPassword) ? <p>Password does not match</p> : null}
              </div>
            </div>
          </div>
          <div className= {styles.warning}>
            {(error != '') ? <p>{error}</p> : null}
          </div>
            <button onClick={() => handleSubmit()} type="submit" className= {styles.btn}>Register</button>
        </div>
      </>
    )
  }
