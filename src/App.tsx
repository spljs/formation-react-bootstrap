import {useEffect, useState} from "react";
import PostDTO from "./core/models/post";

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts').then(r => r.json()).then(setPosts);
    }, []);

    return (
        <div className="App">
            <h1>My app</h1>
            {posts.map((post: PostDTO, idx) => <div key={idx}>{post.title}</div>)}
        </div>
    );

}

export default App;
