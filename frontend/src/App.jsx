// frontend/src/App.jsx
import React from 'react';
import Home from './pages/Home.jsx';
import BottomBar from './pages/BottomBar.jsx';

const App = () => {
    return (
        <div className='overflow-auto min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <Home />
            <BottomBar />
        </div>
    );
};

export default App;
