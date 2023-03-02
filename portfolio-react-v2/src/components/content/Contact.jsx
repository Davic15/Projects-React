import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import contactImg from '../../assets/img/contact-img.svg';
import 'animate.css';
import './Contact.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

    const form = useRef();

    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});


    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending....')

        const request = await emailjs.sendForm('service_fthko31', 'template_50m95gd', form.current, 'qJx6Q_vdA-EtjNUkD')
        const data = await request;
        if(data.status === 200) {
            setStatus({ success: true, message: 'Message sent successfully'})
            toast.success(status.message, {
                position: 'bottom-left'
            });
            setButtonText('Send')
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
            toast.error(status.message, {
                position: 'bottom-left'
            });
            setButtonText('Send')
        } 
    }

    return (
        <section className='contact' id='connect'>
            <ToastContainer />
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt='Contact Us'/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className='px-1'>
                                                <input name='firstName' type='text' placeholder='First Name' />
                                            </Col>
                                            <Col size={12} sm={6} className='px-1'>
                                                <input name='lastName' type='text' placeholder='Last Name' />
                                            </Col>
                                            <Col size={12} sm={6} className='px-1'>
                                                <input name='email' type='email' placeholder='Email Address' />
                                            </Col>
                                            <Col size={12} sm={6} className='px-1'>
                                                <input name='phone' type='tel' placeholder='Phone No.' />
                                            </Col>
                                            <Col size={12} className='px-1'>
                                                <textarea name='message' rows='6'  placeholder='Message'></textarea>
                                                <button type='submit'><span>{buttonText}</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
