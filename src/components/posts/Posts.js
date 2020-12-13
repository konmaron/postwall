import Post from "../post/Post";
import withAppContext from "../../context/withAppContext";

function Posts({context}){
    return (
        <div>
            {context.posts.map((post, index) =>
              <Post
                  index={index}
                  key={index}
              />
            )}

        </div>
    )
}

export default withAppContext(Posts)
