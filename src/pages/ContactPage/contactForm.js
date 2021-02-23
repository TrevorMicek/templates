 
 
import React, { useState } from 'react'
import styles from '../../styles/ContactPage/loginPage.module.css'

const xImg = require('../../images/X.svg')
const LoginForm = (props) => {
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
            <h2>confirmed!</h2>
            
            <img src={xImg} alt={"close confirmation page"} onClick={closeConfirmation} />
            
            </div>
        </section>
    )

    

    const setURL = () => setSendEmail("http://localhost:4000/api/send-email")

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
       
        <label>Email:</label> {validateEmail}
        <input type="text" id="email" value={email} onChange={handleChange} name="email" key='email'  placeholder="Enter email..." className={styles.input}/><br />
        <label>Name:</label> {validateName}
        <input type="text" id="name" value={name} onChange={handleChange} name="name" key='name' placeholder="Enter name..." className={styles.input}/><br />
        <label>Message:</label><br /> {validateMessage}
        <textarea type="text" rows="10" id="message" value={message} onChange={handleChange} name="message" key='message' placeholder="Enter message..." className={styles.input}/>
        </div>
        )
    }
    const validateError = (label) => {
        const errorMessage = () => (
            <div className={styles.validation}>
            * {label} input is empty
            </div>
        )
        
       switch (label) {
           case email:
               setValidateEmail(errorMessage)
               break;
            case name:
                setValidateName(errorMessage)
                break;
            case name:
                setValidateMessage(errorMessage)
                break;
       }
    }
const handleClick = (e) => {
    switch ('') {
        case email:
            validateError(email)
            e.preventDefault()
            break;
        case name:
            validateError(name);
            e.preventDefault()
            break;
        case message:
            validateError(message);
            e.preventDefault()
            break;
       
        default:
           /* setURL() */
           confirmed()
           e.preventDefault()
    }
}

    return (
    <div className={styles.login}>
        <div className={styles.wrapper}>
           {confirmation === true ? <ConfirmationSuccess /> : null}
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
    )}
export default LoginForm;
