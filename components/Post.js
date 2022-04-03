import React from 'react';
import Link from 'next/link';

const Post = ({ post }) => {
    const event = new Date(post.frontmatter.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className='card'>
            <img src={post.frontmatter.cover_image} alt='' />
            <h3>{post.frontmatter.title}</h3>
            <div className='post-date'>Realesed on {event.toLocaleDateString(undefined, options)}</div>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a className='btn'>Read More</a>
            </Link>
        </div>
    );
};

export default Post;
