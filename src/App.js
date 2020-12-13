import React from 'react';
import Posts from "./components/posts/Posts";
import withAppContext from "./context/withAppContext";
import WholePost from "./components/wholePost/WholePost";
import Header from "./components/header/Header";

function App({context}){
    return(
        <>
            <Header/>
            {context.path === '/posts' && <Posts/>}
            {context.path === '/post0' && <WholePost index='0'/>}
            {context.path === '/post1' && <WholePost index='1'/>}
            {context.path === '/post2' && <WholePost index='2'/>}
        </>
    )
}

export default withAppContext(App);