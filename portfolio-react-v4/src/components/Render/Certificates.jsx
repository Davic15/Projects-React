import React from 'react';

export const Certificates = ({ certificate }) => {
    return (
        <article className='certificates__certificate'>
            <div className='certificate__logo'>
                <img
                    src={certificate.url}
                    className='certificate__image'
                    alt={certificate.title}
                />
            </div>
            <div className='certificate__content'>
                <h4 className='certificate__title'>
                    {certificate.description}
                </h4>
                <span className='certificate__id'>
                    ID Verificacion: {certificate.id}
                </span>
                <span className='certificate__date'>{certificate.date}</span>
            </div>
        </article>
    );
};
