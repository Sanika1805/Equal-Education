import React from 'react';
import Chatbot from './Chatbot';

function AlumniLayout({ children, activePage }) {
    // ... existing layout code ...
    
    return (
        <div className="layout">
            {/* ... existing layout content ... */}
            {children}
            <Chatbot />
        </div>
    );
}

export default AlumniLayout; 