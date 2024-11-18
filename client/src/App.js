import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router basename="/ui">
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page.</p>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Feel free to reach out to us!</p>
        </div>
    );
}

export default App;