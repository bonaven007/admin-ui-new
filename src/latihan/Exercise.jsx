import PostCard from "./PostCard";
// import posts from "./Services";
import { postsData } from "../postsData";

function Exercise() {
  return (
    <main className="min-h-screen bg-special-mainBg px-8 py-6">
      <h1 className="text-center text-3xl font-bold text-special-red2 mb-6">
        Post Cards
      </h1>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </main>
  );
}

export default Exercise;
