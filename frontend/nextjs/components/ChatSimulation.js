```javascript
import React, { useState, useEffect } from 'react';

const ChatSimulation = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSendMessage = () => {
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
    }

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].sender !== 'ai') {
            setTimeout(() => {
                setMessages([...messages, { text: 'AI response', sender: 'ai' }]);
            }, 1000);
        }
    }, [messages]);

    return (
        <div id="chatSimulation">
            <div className="chatWindow">
                {messages.map((message, index) => (
                    <div key={index} className={message.sender}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chatInput">
                <input type="text" value={input} onChange={handleInputChange} />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatSimulation;
```