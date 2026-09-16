import Link from 'next/link';
import React from 'react';

const page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
    return (
        <div>
            <h2>User loaded</h2>
            {
            data.map(da=><div key={da.id} className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{da.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <Link href ={`/users/${da.id}`}><button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>)
            }
            
        </div>
    );
};

export default page;