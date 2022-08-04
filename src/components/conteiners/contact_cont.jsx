import React, { Component } from 'react';
import { Contacto } from '../../models/contact.class';
import ContactComponent from '../contact';

const ContactCont = () => {
    const defaulContact = new Contacto('Julian', 'Blanco', 'j.dblanco10@gmail.com', true);

    return (
        <div>
            <div>
                <h1>Your Contact:</h1>
            </div>
            <ContactComponent contact={defaulContact}></ContactComponent>
        </div>
    );
};

export default ContactCont;
