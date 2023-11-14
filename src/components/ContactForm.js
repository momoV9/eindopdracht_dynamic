import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestoreDB } from '../services/firebase';
import {FormContainer, Input, Label, SubmitButton, Textarea, Form} from "./StyledComponents";




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
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Label>Name:</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <Label>Email:</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Label>Message:</Label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </FormContainer>
    );
}

export default ContactForm;
