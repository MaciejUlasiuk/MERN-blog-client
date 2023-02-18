import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

import { useLocation } from "react-router";
import request from "../../helpers/request";
import Loader from "../../components/loader/Loader";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await request.get("/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        {posts.length > 0 ? <Posts posts={posts} /> : <Loader />}
        <Sidebar />
      </div>
    </>
  );
}
