import React, { useState } from 'react'

import styles from '../../../styles/ContactPage/loginPage.module.css'
const xImg = require('../../../images/X.svg')
const LoginForm = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [validateName, setValidateName] = useState(undefined)
    const [validateEmail, setValidateEmail] = useState(undefined)
    const [validateMessage, setValidateMessage] = useState(undefined)
    const [sendEmail, setSendEmail] = useState('')
    const [confirmation, setConfirmation] = useState(false)

    const confirmed = () => setConfirmation(!confirmation)
    
    const closeConfirmation = () => {
        setConfirmation(!confirmation)
        setEmail('')
        setName('')
        setMessage('')
    }
    const ConfirmationSuccess = () => (
        <section className={styles.confirmation}>
            <div className={styles.confirmedTitle}>
                <h2>Thank you for getting in touch!</h2>
                <button onClick={closeConfirmation} onKeyDown={closeConfirmation}>
                    <img src={xImg} alt={"close confirmation page"} />
                </button>
            </div>
            <div className={styles.confirmedMessage}>
                We appreciate you contacting Websites By Trevor. Have a great day!
            </div>
            <div className={styles.confirmedDone}>
                <button onClick={closeConfirmation}>done</button>
            </div>
        </section>
    )
    /*
    const setURL = () => setSendEmail("http://localhost:4000/api/send-email")
    */
    const useInput = (props) => {
        const handleChange = (e) => {
            switch(e.target.name) {
                case 'email':
                     if (validateEmail !== undefined) {
                         setValidateEmail(undefined)
                     }
                    setEmail(e.target.value)
                    break;
                case 'name':
                    if (validateName !== undefined) {
                        setValidateName(undefined)
                    }
                    setName(e.target.value)
                    break;
                case 'message':
                    if (validateMessage !== undefined) {
                        setValidateMessage(undefined)
                    }
                    setMessage(e.target.value)
                    break;
              }
          }
        return(
        <div>
            <label htmlFor="name">Name:</label> {validateName}  <br />
            <input type="text" id="name" value={name} onChange={handleChange} name="name" key='name' placeholder="Enter name..." className={styles.nameInput}/><br />
            <label htmlFor="email">Email:</label> {validateEmail} <br />
            <input type="text" id="email" value={email} onChange={handleChange} name="email" key='email'  placeholder="Enter email..." className={styles.emailInput}/><br />
            <label htmlFor="message">Message:</label> {validateMessage} <br />
            <textarea type="text" rows="5" id="message" value={message} onChange={handleChange} name="message" key='message' placeholder="Enter message..." className={styles.messageInput}/>
        </div>
        )
    }
    const validateError = (label, which) => {
        const errorMessage = () => (
            <div className={styles.validation}>
            * {which} input is empty
            </div>
        )
        console.log(label)
       switch (label) {
           case name:
                setValidateName(errorMessage)
                break;
           case email:
               setValidateEmail(errorMessage)
               break;
            case message:
                setValidateMessage(errorMessage)
                break;
       }
    }
const handleClick = (e) => {
    switch ('') {
        case name:
            validateError(name, 'name');
            e.preventDefault()
            break;
        case email:
            validateError(email, 'email')
            e.preventDefault()
            break;
        case message:
            validateError(message, 'message');
            e.preventDefault()
            break;
       
        default:
           /* setURL() */
           confirmed()
           e.preventDefault()
    }
}
return (
    <>
    <div className={styles.login}>
        <div className={styles.wrapper}>
           
            <form method="POST" action={sendEmail} onSubmit={handleClick}>
                <div className={styles.title}>
                    Contact us and we'll get back with you within a week!
                </div>
                <div className={styles.label}>
                    {useInput()}
                </div>
                <input type="submit" value="send" className={styles.btn} />
            </form> 
        </div>
    </div>
    {confirmation === true ? <ConfirmationSuccess /> : null}
    </>
)}
export default LoginForm;