import React from 'react';

export const Blogs = ({ blog }) => {
    return (
        <article className='articles__article'>
            <div className='article__top'>
                <div className='article__category'>{blog.category}</div>
                <a href={blog.urlSite} className='article__image-link'>
                    <div className='article__mask'>
                        <img
                            src={blog.urlImg}
                            alt='articulo uno'
                            className='article__image'
                        />
                        <div className='article__logo'>
                            <i className='article__icon fa-solid fa-book'></i>
                        </div>
                    </div>
                </a>
            </div>
            <div className='article__bottom'>
                <time dateTime='2024-08-30' className='article__date'>
                    {blog.date}
                </time>

                <a href={blog.urlSite} className='article__link'>
                    <h2 className='article__title'>
                        {blog.title} - {blog.description}
                    </h2>
                </a>
            </div>
        </article>
    );
};
