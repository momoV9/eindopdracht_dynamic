import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestoreDB } from '../services/firebase';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contactsRef = collection(firestoreDB, 'contacts');


        try {
            await addDoc(contactsRef, {
                name: name,
                email: email,
                message: message,
            });

            console.log('Form data submitted successfully to Firestore.');


            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error adding document to Firestore: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
