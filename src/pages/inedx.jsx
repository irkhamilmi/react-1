import post from "../post.json"
import Artikel from "../components/Artikel"

function Homepage() {
    return(
        <>
        <h1>simple blog</h1>
        {post.map((blog) => {
            <Artikel title={blog.title} tags={blog.tags} date={blog.date}/>
        })}
        </>
    )
}

export default Homepage;