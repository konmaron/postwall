import classes from './AddComment.module.css';
import withAppContext from "../../context/withAppContext";

function AddComment({context, index}){
    return (
        <div className={classes.container} id={index}>
            <form action='#' onSubmit={context.submitHandler} id={index}>
                <p>Leave your comment</p>
                <input
                    type='text'
                    placeholder='Type your name'
                    name='inpAuthor'
                />
                <textarea
                    type='text'
                    placeholder='Type your comment'
                    name='inpText'
                />
                <div className={classes.button}>
                    <button id={index}>add comment</button>
                </div>
            </form>
        </div>
    )
}

export default withAppContext(AddComment);