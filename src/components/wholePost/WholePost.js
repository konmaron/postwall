import withAppContext from "../../context/withAppContext";
import PostText from "../postText/PostText";
import CommentList from "../commentsList/CommentsList";
import AddComment from "../addComment/AddComment";

function WholePost({context, index}){
    return (
        <div>
            <PostText index={index}/>
            <CommentList index={index}/>
            <AddComment index={index}/>
        </div>
    )
}

export default withAppContext(WholePost);