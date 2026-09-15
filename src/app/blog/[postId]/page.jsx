const blogsData = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Web Development",
    date: "2026-09-01",
    description: "Learn the basics of HTML, CSS, and JavaScript and start your journey as a web developer."
  },
  {
    id: 2,
    title: "Understanding CSS Flexbox",
    author: "Sarah Smith",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    category: "CSS",
    date: "2026-09-03",
    description: "A beginner-friendly guide to understanding CSS Flexbox and creating responsive layouts."
  },
  {
    id: 3,
    title: "JavaScript Basics You Should Know",
    author: "Michael Brown",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    category: "JavaScript",
    date: "2026-09-05",
    description: "Explore variables, functions, conditions, loops, and other important JavaScript fundamentals."
  },
  {
    id: 4,
    title: "How APIs Work",
    author: "Emily Johnson",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "Programming",
    date: "2026-09-08",
    description: "Understand what APIs are, how they work, and how developers use them to connect applications."
  },
  {
    id: 5,
    title: "Introduction to JSON",
    author: "David Wilson",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "JavaScript",
    date: "2026-09-10",
    description: "Learn how JSON stores and transfers data and why it is commonly used with APIs."
  }
];

const page = async ({ params }) => {
     const { postId } = await params
     const post=blogsData.find(blog=>blog.id=== parseInt(postId))
     console.log(typeof postId,post);
    return (
        <div>
            <h2>Bal life tai loss:{ postId }</h2>

           { 
            post?<div>
               <h2> {post.title}</h2>
               <p> {post.category}</p>
                <h2>{post.author}</h2>
            </div>:'Bal chirbo amr' 
            }
        </div>
    );
};

export default page;