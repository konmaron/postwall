import React from 'react';
import PostList from "./components/postList/PostList";
import withAppContext from "./context/withAppContext";
import WholePost from "./components/postView/PostView";
import Header from "./components/header/Header";

function App({context}){
    return(
        <>
            <Header/>
            {context.path === 'list' && <PostList posts={context.posts}/>}
            {context.path === 'view' && <WholePost post={context.currentPath}/>}
        </>
    )
}

export default withAppContext(App);