import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css';

import { createConfig } from './config.jsx';
import { setLang } from './chatbotLang';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import ChatbotButton from '../ChatbotButton/ChatbotButton';
import { useLang } from '../../contexts/LanguageContext';

const ChatbotComponent = () => {
  const [showBot, setShowBot] = useState(false);
  const { lang } = useLang();

  // Keep module lang in sync
  setLang(lang);

  return (
    <div className="chatbot-wrapper">
      {showBot && (
        <div className="chatbot-container">
          {/* key={lang} remounts the chatbot when language changes, resetting messages */}
          <Chatbot
            key={lang}
            config={createConfig(lang)}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <ChatbotButton onClick={() => setShowBot(v => !v)} isOpen={showBot} />
    </div>
  );
};

export default ChatbotComponent;
