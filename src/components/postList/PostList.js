import Post from "../postRow/PostRow";

export default function PostList({posts}){
    return (
        <div>
            {posts.map(post =>
              <Post
                  key={post.postId}
                  id={post.postId}
                  author={post.author}
                  desc={post.shortDesc}
                  title={post.title}
                  date={post.date}
                  commentCount={post.comments.length}
              />)}
        </div>
    )
}

