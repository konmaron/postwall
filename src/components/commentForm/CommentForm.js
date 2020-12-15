import classes from './CommentForm.module.css';
import React from 'react';

export default class CommentForm extends React.Component{
    state = {
        author: '',
        text: ''
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit({
            author: this.state.author,
            text: this.state.text
        });
        this.setState({author: '', text: ''});
    }

    render() {
        return (
            <div className={classes.container}>
                <p>Leave your comment</p>
                <input
                    type='text'
                    placeholder='Type your name'
                    value={this.state.author}
                    onChange={event => this.setState({author: event.target.value})}
                />
                <textarea
                    placeholder='Type your comment'
                    value={this.state.text}
                    onChange={event => this.setState({text: event.target.value})}
                />
                <div className={classes.button}>
                    <button onClick={this.submitHandler}>add comment</button>
                </div>
            </div>
        )
    }


}

