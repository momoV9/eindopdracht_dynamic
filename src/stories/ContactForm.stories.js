
import React from 'react';
import ContactForm from "../components/ContactForm";


export default {
    title: 'ContactForm',
    component: ContactForm,

};

const Template = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithValues = Template.bind({});
WithValues.args = {
    name: 'momo',
    email: 'momo@hotmail.com',
    message: 'Ik ben momo en test storybook!',
};
