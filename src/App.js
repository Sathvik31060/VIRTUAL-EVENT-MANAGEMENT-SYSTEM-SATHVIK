import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import EventList from './components/EventList';
import RegistrationForm from './components/RegistrationForm';
import LiveInteraction from './components/LiveInteraction';
import Chatbot from './components/Chatbot';
import SessionDetail from './components/SessionDetails';
import JoinSession from './components/JoinSession';
import RegisterSession from './components/RegisterSession';
import UserManagement from './components/UserManagement'; // Import User Management only once

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="/events" element={<EventList />} />
                        <Route path="/live-interaction" element={<LiveInteraction />} />
                        <Route path="/chatbot" element={<Chatbot />} />
                        <Route path="/session/:id" element={<SessionDetail />} />
                        <Route path="/join-session/:sessionId" element={<JoinSession />} />
                        <Route path="/register-session/:sessionId" element={<RegisterSession />} />
                        <Route path="/user-management" element={<UserManagement />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
