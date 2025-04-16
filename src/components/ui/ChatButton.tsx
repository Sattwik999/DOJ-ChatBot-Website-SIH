// ChatbotButton.tsx
import React, { useEffect } from 'react';

const ChatbotButton: React.FC = () => {
  useEffect(() => {
    // Load the Botpress script when the component mounts
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/2c100010-0123-4183-9bcb-82eb8070818c/webchat/v2.1/config.js';
    configScript.async = true;
    document.body.appendChild(configScript);

    return () => {
      // Cleanup scripts if necessary
      document.body.removeChild(botpressScript);
      document.body.removeChild(configScript);
    };
  }, []);

  const handleButtonClick = () => {
    (window as any).BotpressWebChat?.sendEvent({ type: 'show' });
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        cursor: 'pointer',
        fontSize: '24px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      💬
    </button>
  );
};

export default ChatbotButton;
