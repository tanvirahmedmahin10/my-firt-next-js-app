import React from 'react';

const page = async ({ params }) => {
    const { userId } = await params
      console.log(userId);
    const userdata=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  
    const kisob= await userdata.json()

    return (
        <div>
            <h2>{kisob.name}</h2>
        </div>
    );
};

export default page;