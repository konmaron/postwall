import classes from './CommentRow.module.css';

export default function CommentRow({author, text}){
    return (
        <div className={classes.container}>
            <p className={classes['comment-author']}>{author}</p>
            <p className={classes['comment-text']}>{text}</p>
        </div>
    )
}
