import withAppContext from "../../context/withAppContext";
import Comment from "../comment/Comment";

function CommentList({context, index}){
    return (
        <div>
            {context.posts[index].comments.map((comment, indexComment) =>
                <Comment
                    index={index}
                    indexComment={indexComment}
                    key={indexComment}
                />
            )}
        </div>
    )
}

export default withAppContext(CommentList);