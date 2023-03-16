import React, { useRef } from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const reForm = useRef();
    const handleSubmit = (Event) => {
        Event.preventDefault();
        const serviceId = "service_8hd6br7";
        const templateId = "template_xxniet5"
        const apikey = "ozYip14w9-_M0eoMv"

        emailjs.sendForm(serviceId, templateId, "reForm.current", apikey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error))

    }

    return (
        <>
            <form reForm={reForm} action="" onSubmit={handleSubmit}>
                <input className='NameEmail'  type="text" placeholder='Name' name='name' />
                <input className='NameEmail'  type="email" placeholder='email' name='email' />
                <textarea className='Question' placeholder='escriba aqui el motivo por el cual nos contacta' name='message' />
                <button className='Submit'>Submit</button>
            </form>
        </>
    )
}