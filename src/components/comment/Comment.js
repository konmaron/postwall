import classes from './Comment.module.css';
import withAppContext from "../../context/withAppContext";

function Comment({context, index, indexComment}){
    return (
        <div className={classes.container}>
            <p className={classes['comment-author']}>{context.posts[index].comments[indexComment].author}</p>
            <p className={classes['comment-text']}>{context.posts[index].comments[indexComment].text}</p>
        </div>
    )
}

export default withAppContext(Comment)