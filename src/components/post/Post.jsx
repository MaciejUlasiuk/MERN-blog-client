import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>

          <span className="postTitle">{post.title}</span>

          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <div className="postDescBox">
          <p className="postDesc">{post.desc}</p>
        </div>
        {post.workTime ? (
          <p className="postAuthor">Learning time: {post.workTime}</p>
        ) : null}
        <p className="postAuthor">Maciej Ułasiuk</p>
      </div>
    </Link>
  );
}
