import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAeFfCK1EeGHeBPg8xrKrGkhAJxZ0qTeSw';
//Create a new component which should produce some html
const App = () => {
    return  <div>
                <SearchBar />
            </div>
}
//put dat html in da dom

ReactDOM.render(<App />, document.querySelector('.container'));