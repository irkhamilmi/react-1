import { useState, useEffect } from "react";

function blog() {
    const [post, setPos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => setPos(json));
      }, []);

      return(
        <>
        <h2>my blog posts</h2>
        {post.map((item, index) => (
        <div key={index}>- {item.title}</div>
        ))}
        </>
      )

}

export default blog;