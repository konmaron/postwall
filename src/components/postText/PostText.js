import classes from './PostText.module.css';
import withAppContext from "../../context/withAppContext";

function PostText({context, index}){
    return (
        <div className={classes.container}>
            <div className={classes['post-data']}>
                <span className={classes['post-author']}>{context.posts[index].author}</span>
                <span>{context.posts[index].date}</span>
            </div>
            <div className={classes['post-content']}>
                <h4>{context.posts[index].title}</h4>
                <p className={classes['post-text']}>{context.posts[index].content}</p>
            </div>
        </div>
    )
}

export default withAppContext(PostText);