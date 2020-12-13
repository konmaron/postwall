import classes from './Post.module.css';
import withAppContext from "../../context/withAppContext";

function Post({context, index}){
    return (
        <a onClick={(event) => {
            event.preventDefault()
            context.changePath('/post' + index)
        }}>
            <div className={classes.container}>
                <div className={classes['post-data']}>
                    <span className={classes['post-author']}>{context.posts[index].author}</span>
                    <span>{context.posts[index].date}</span>
                </div>
                <div className={classes['post-content']}>
                    <h4>{context.posts[index].title}</h4>
                    <p className={classes['post-text']}>{context.posts[index].shortDesc}</p>
                </div>
                <div>
                    <p className={classes['comments-counter']}>Comments: {context.posts[index].comments.length}</p>
                </div>
            </div>
        </a>
    )
}

export default withAppContext(Post);