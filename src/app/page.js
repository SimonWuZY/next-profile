import { getAllPosts } from "@/lib/posts";
import Link from "next/link";


export default function Home() {
  // 获取文件
  const posts = getAllPosts();
  return (
    <div>
      <h2>Hello Simon!</h2>
      <ul>
        {" "}
        {posts.map((post) => {
          <li>
            <Link href={`posts/${post.slug}`}> {post.title}</Link>
            <p> {post.date}</p>
          </li>
        })}
      </ul>
    </div>
  );
}