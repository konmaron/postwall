import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PostList from "./components/postList/PostList";
import withAppContext from "./context/withAppContext";
import PostView from "./components/postView/PostView";
import Header from "./components/header/Header";

function App({context}){
    return(
        <>
            <Header/>
            <Switch>
                <Route path='/list' exact render={() => <PostList posts={context.posts}/>}/>
                <Route path='/view' render={() => <PostView post={context.currentPath}/>}/>
                <Route path='**' render={() => <h2>404 Not Found</h2>}/>
            </Switch>
        </>
    )
}

export default withAppContext(App);