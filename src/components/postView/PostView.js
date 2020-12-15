import withAppContext from "../../context/withAppContext";
import CommentForm from "../commentForm/CommentForm";
import classes from "./PostView.module.css";
import CommentRow from "../commentRow/CommentRow";

function PostView({post, context}){
    return (
        <div>
            <div className={classes.container}>
                <div className={classes['post-data']}>
                    <span className={classes['post-author']}>{post.author}</span>
                    <span>{post.date}</span>
                </div>
                <div className={classes['post-content']}>
                    <h4>{post.title}</h4>
                    <p className={classes['post-text']}>{post.content}</p>
                </div>
            </div>
            <div>
                {
                    post.comments.map((comment, index) => <CommentRow
                        key={index}
                        author={comment.author}
                        text={comment.text}
                    />)
                }
            </div>
            <CommentForm onSubmit={comment => context.addComment(post.postId, {author: comment.author, text: comment.text})}/>
        </div>
    )
}

export default withAppContext(PostView);