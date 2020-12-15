import classes from './PostRow.module.css';
import withAppContext from "../../context/withAppContext";
import {Link} from 'react-router-dom';

function PostRow({id, author, title, desc, date, commentCount, context, props}){
    return (
        <Link to='/view' onClick={() => context.rowClickHandler(id)}>
            <div className={classes.container}>
                <div className={classes['post-data']}>
                    <span className={classes['post-author']}>{author}</span>
                    <span>{date}</span>
                </div>
                <div className={classes['post-content']}>
                    <h4>{title}</h4>
                    <p className={classes['post-text']}>{desc}</p>
                </div>
                <div>
                    <p className={classes['comments-counter']}>Comments: {commentCount}</p>
                </div>
            </div>
        </Link>
    )
}

export default withAppContext(PostRow);