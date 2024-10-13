import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending....');

        const request = await emailjs.sendForm(
            'service_fthko31',
            'template_50m95gd',
            form.current,
            'qJx6Q_vdA-EtjNUkD'
        );
        const data = await request;
        if (data.status === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
            setButtonText('Send');
        } else {
            setStatus({
                succes: false,
                message: 'Something went wrong, please try again later.',
            });
            setButtonText('Send');
        }
        form.current.reset();
    };

    return (
        <section className='content__page content__contact'>
            <header className='contact__header'>
                <h1 className='contact__title'>Contact</h1>
            </header>

            <div className='contact__container'>
                <section className='contact__info'>
                    <div className='contact__data'>
                        <i className='contact__icon fa-solid fa-location-dot'></i>
                        <h2 className='contact__subtitle'>Egypt</h2>
                    </div>

                    <div className='contact__data'>
                        <i className='contact__icon fa-solid fa-phone'></i>
                        <h2 className='contact__subtitle'>+39 379 2742621</h2>
                    </div>

                    <div className='contact__data'>
                        <i className='contact__icon fa-solid fa-envelope'></i>
                        <h2 className='contact__subtitle'>
                            franklindavid [dot] maciasavellan [at] gmail [dot]
                            com
                        </h2>
                    </div>

                    <div className='contact__data'>
                        <i className='contact__icon fa-solid fa-circle-check'></i>
                        <h2 className='contact__subtitle'>
                            Frontend Web Developer
                        </h2>
                    </div>
                </section>

                <section className='contact__form-box'>
                    <div className='contact__map' id='load-iframe-map'>
                        <iframe
                            className='contact__iframe'
                            frameBorder='0'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27610.935230914754!2d31.323251133119815!3d30.112312942900466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815dcc3e4e599%3A0x6c67c22e4aa39206!2sHeliopolis%2C%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate%204470351!5e0!3m2!1sen!2seg!4v1728848310570!5m2!1sen!2seg'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                        <span className='loader'></span>
                    </div>
                    <header className='contact__form-header'>
                        <h3 className='form-header__title'>
                            How can I help
                            <span className='title__color'> you?</span>
                        </h3>
                    </header>

                    <form
                        className='contact__form'
                        ref={form}
                        onSubmit={handleSubmit}
                    >
                        <div className='form__container'>
                            <section className='form__left'>
                                <div className='form__group'>
                                    <input
                                        type='text'
                                        className='form__input'
                                        name='name'
                                        id='name'
                                        required
                                        placeholder='Name'
                                    />
                                    <label
                                        htmlFor='name'
                                        className='form__label'
                                    >
                                        Name
                                    </label>
                                </div>

                                <div className='form__group'>
                                    <input
                                        type='email'
                                        className='form__input'
                                        name='email'
                                        id='email'
                                        required
                                        placeholder='Email'
                                    />
                                    <label
                                        htmlFor='email'
                                        className='form__label'
                                    >
                                        Email
                                    </label>
                                </div>

                                <div className='form__group'>
                                    <input
                                        type='text'
                                        className='form__input'
                                        name='subject'
                                        id='subject'
                                        required
                                        placeholder='Subject'
                                    />
                                    <label
                                        htmlFor='subject'
                                        className='form__label'
                                    >
                                        Subject
                                    </label>
                                </div>
                            </section>
                            <section className='form__right'>
                                <div className='form__group form__group--textarea'>
                                    <textarea
                                        className='form__input form__input--textarea'
                                        name='message'
                                        id='message'
                                        required
                                        placeholder='Message'
                                    ></textarea>
                                    <label
                                        htmlFor='message'
                                        className='form__label'
                                    >
                                        Message
                                    </label>
                                </div>
                            </section>
                        </div>
                        <input
                            type='submit'
                            value={buttonText}
                            className='form__button'
                        />
                    </form>
                </section>
            </div>
        </section>
    );
};
