import Link from 'next/link';
import React from 'react';

const Post = ({blog}) => {
    const {title,description,id}=blog
    return (
        <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link href={`/blog/${id}`}><button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Post;