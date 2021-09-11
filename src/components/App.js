import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';


//* start your project by defining the routes
const App = () => {
    return (
        <div className='ui container'>
             <Router>
            <div>
            <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' component={StreamCreate} />
                <Route path='/streams/edit' component={StreamEdit} />
                <Route path='/streams/delete' component={StreamDelete} />
                <Route path='/streams/show' component={StreamShow} />
            </div>
        </Router>
        </div>
    )
};


export default App;