import React from 'react';
import { blogs } from '../../data/blogs';
import { Blogs } from '../Render/Blogs';

export const Blog = () => {
    return (
        <section className='content__page content__blog'>
            <header className='blog__header'>
                <h1 className='blog__title'>Blog</h1>
            </header>

            <section className='blog__articles'>
                {blogs.map((blog) => {
                    return <Blogs blog={blog} key={blog.id} />;
                })}
            </section>
        </section>
    );
};
