import React from 'react';

const Contact = ({ ref, onSubmit, result }) => (
    <div id='contact'>
        <h2>Let's Get in Touch</h2>
        <form ref={ref} onSubmit={onSubmit}>
            <input required type="text" placeholder="Name" name="form_name" />
            <input required type="email" placeholder="Email" name="form_email" />
            <textarea required rows="6" placeholder="Message" name="message"></textarea>
            <button type="submit">Send</button>
        </form>
        <p id='result'>{result}</p>
    </div>
);

export default Contact;