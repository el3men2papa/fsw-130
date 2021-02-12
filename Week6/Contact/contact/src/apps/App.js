import React from 'react'
import ContactForm from '../components/contactForm'
import ContactList from '../components/contactList'
import './App.css';

function App() {
    return (
        <div className='container'>
            <h2>Contact Management</h2>
            <ContactForm />
            <ContactList />
        </div>
    )
}

export default App