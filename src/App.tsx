import React, { useState } from 'react';
import ListGroup from './components/ListGroup';
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.prompt.value);
    };

    return (
        <div className="aiImg-body">
            <header className="aiImg-header">
                <img src="src/assets/shree.jpg" alt="" className="aiImg-shree-img" />
                <span className="aiImg-span">Shree ‎</span>
                <strong className="aiImg-strong"> AI</strong>
            </header>

            <div id="defaultContent" className="aiImg-defaultContent">
                Search Images that you want our AI to generate for you!
            </div>

            <ListGroup searchQuery={searchQuery} />

            <div className="aiImg-sticky-search">
                <form onSubmit={handleSubmit} className="aiImg-form">
                    <input type="text" id="prompt" name="prompt" placeholder="Describe what you'd like to create" required className="aiImg-input" />
                    <button type="submit" className="aiImg-button">Search</button>
                </form>
            </div>
        </div>
    );
}

export default App;
