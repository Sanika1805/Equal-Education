import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot({ userRole, customResponses, initialMessage }) {
    const [messages, setMessages] = useState([
        { 
            text: initialMessage || "Hi! How can I help you today?",
            type: 'bot'
        }
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const defaultResponses = {
        help: {
            keywords: ['help', 'support', 'assist', 'guide'],
            response: 'I can help you with:\n' +
                '1. Navigation assistance\n' +
                '2. Technical support\n' +
                '3. General inquiries\n' +
                'Please specify your question.'
        },
        contact: {
            keywords: ['contact', 'reach', 'email', 'phone'],
            response: 'Contact Information:\n' +
                '1. School Office: office@school.edu\n' +
                '2. Technical Support: support@school.edu\n' +
                '3. Emergency Contact: emergency@school.edu\n' +
                'Who would you like to contact?'
        }
    };

    const findBestMatch = (input) => {
        const lowercaseInput = input.toLowerCase();
        let response = null;

        // Check custom responses first
        if (customResponses) {
            for (const [category, data] of Object.entries(customResponses)) {
                if (data.keywords.some(keyword => lowercaseInput.includes(keyword))) {
                    response = data.response;
                    break;
                }
            }
        }

        // If no custom response found, check default responses
        if (!response) {
            for (const [category, data] of Object.entries(defaultResponses)) {
                if (data.keywords.some(keyword => lowercaseInput.includes(keyword))) {
                    response = data.response;
                    break;
                }
            }
        }

        // Default response if no match found
        if (!response) {
            response = `I'm here to help with any questions about ${userRole}-related tasks. Please ask about specific topics or type 'help' for options.`;
        }

        return response;
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const newMessages = [...messages, { text: input, type: 'user' }];
        
        // Generate response
        const response = findBestMatch(input);
        newMessages.push({ text: response, type: 'bot' });
        
        setMessages(newMessages);
        setInput('');
    };

    return (
        <div className="chatbot-container">
            <button 
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat assistant"
            >
                {isOpen ? '✕' : '👩‍🏫'}
            </button>
            
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        Teaching Assistant
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`message ${message.type}`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSend} className="chatbot-input-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about grading, lessons, students..."
                            className="chatbot-input"
                        />
                        <button type="submit" className="chatbot-send">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Chatbot; 