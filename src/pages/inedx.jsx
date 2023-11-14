import { useState, useEffect } from "react";
import postsData from "../post.json"
import Artikel from "../components/Artikel"
import Search from "../components/Search";

 function Homepage() {
    const [post, setPos] = useState(postsData)
    const [totalPosts, setTotalPosts] = useState(0);

    const onSearchChange = (value) => {
        const filterPost = postsData.filter(item => item.title.includes(value))
        setPos(filterPost)
        setTotalPosts(filterPost.length)
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => setExternalPosts(json));
      }, []);

   
        return(
            <>
            <h1>simple blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {post.map((props, index) => (
                <Artikel {...props} key={index}/>
            ))}
            </>
        )
    }

export default Homepage;