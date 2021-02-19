 
 
import React, { useState } from 'react'
import styles from '../../styles/ContactPage/loginPage.module.css'

const LoginForm = (props) => {
    const [name, setUsername] = useState('')
    const [message, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [emailInput, setEmailInput] = useState(true)
    const [account, setAccount] = useState('')
    const [login, setLogin] = useState(false)


    const useInput = (props) => {
          
      
          
        const handleChange = (e) => {
            switch(e.target.name) {
                case 'email':
                     
                    setEmail(e.target.value)
                    break;
                case 'name':
                    setUsername(e.target.value)
                    break;
              
              }
          }
         
         
        return(
        <div>
       
        <label>Email:</label>
        <input type="text" id="email" value={email} onChange={handleChange} name="email" key='email'  placeholder="Enter email..." className={styles.input}/><br />
        <label>Name:</label>
        <input type="text" id="name" value={name} onChange={handleChange} name="name" key='name' placeholder="Enter name..." className={styles.input}/><br />
        <label>Message:</label>
        <textarea type="text" rows="10" id="message" value={message} onChange={handleChange} name="message" key='message' placeholder="Enter message..." className={styles.input}/>
        </div>
        )
    }



    return (
    <div className={styles.login}>
        <div className={styles.wrapper}>
<form method="post" action="http://localhost:4000/api/register" onSubmit={props.onSubmit}  >

    <div className={styles.title}>
        Contact us and we'll get back with you within a week!
    </div>
    
    <div className={styles.label}>
   {useInput()}
    </div>
    <input type="submit" value="contact" className={styles.btn} />
   

</form> 
</div>
 </div>
    )}
export default LoginForm;
