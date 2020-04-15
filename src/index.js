import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyBT3t4Vgo6KC4_08JxsrHTVJ1JzeIx5uI4';

//create a new component, it should produce some HTML

const App = () => {
    return(<div>
        <SearchBar />
    </div>
    );
}


//Take that component's HTML and put it on the page(in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));