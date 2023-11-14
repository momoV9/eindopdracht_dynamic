import React from 'react';
import ContactForm from '../components/ContactForm';
import {AdditionalText, Heading, PageContainer} from "../components/StyledComponents";


function ContactPage() {
    return (
        <PageContainer>
            <Heading>Contact Us</Heading>
            <AdditionalText>
                Have a question or feedback? Please fill out the form below, and I'll get back to you as soon as possible.
            </AdditionalText>
            <ContactForm />
            <AdditionalText>
                Thank you for reaching out to me. I appreciate your feedback and look forward to assisting you.
            </AdditionalText>
        </PageContainer>
    );
}

export default ContactPage;
