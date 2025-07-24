import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css';

import config from './config.jsx';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import ChatbotButton from '../ChatbotButton/ChatbotButton';

const ChatbotComponent = () => {
  const [showBot, setShowBot] = useState(false);

  const toggleBot = () => {
    setShowBot(!showBot);
  };

  return (
    <div className="chatbot-wrapper">
      {showBot && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <ChatbotButton onClick={toggleBot} isOpen={showBot} />
    </div>
  );
};

export default ChatbotComponent; 