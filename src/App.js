//import logo from './logo.svg';
import React from 'react';

import './App.css';

import Header from './components/Header';
import Hello from './components/Hello';
import Form from './components/Form';
import Range from './components/Range';
import Blog from './components/Blog';

class App extends React.Component
{
    state =
        {
            posts:
            [
                {
                    id: "1",
                    title: "Погода",
                    content: "Летят две стаи напильников, одина на сервер, другая на восток"
                },
                {
                    id: "2",
                    title: "О ценах",
                    content: "Сколько стоит киллограм гвозрей, если пика козырь"
                },
                {
                    id: "3",
                    title: "О людях",
                    content: "Вам 27 лет."
                }
            ],
        }
    removePost = (id) =>
    {
        this.setState({ posts: this.state.posts.filter(post => post.id !== id) });
    }   
    render()
    {
        return (
            <div className="App">
                <Header />
                <Hello />
                <hr/>
                <br/>
                <Form />
                <hr />
                <br />
                <Range />
                <hr />
                <br />
                <Blog posts={this.state.posts} removePost={ this.removePost } />
            </div>
        );
    }
};

export default App;
