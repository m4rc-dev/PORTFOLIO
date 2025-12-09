// Flowise AI Chat Widget
// Configuration
const FLOWISE_CONFIG = {
    // UPDATE THIS with your Flowise endpoint after deployment
    apiUrl: 'http://localhost:3000/api/v1/prediction',
    // UPDATE THIS with your chatflow ID from Flowise
    chatflowId: '2ac65b3e-578f-489a-b739-a7a00d8458cb'
};

// Chat state
let chatHistory = [];
let isOpen = false;

// DOM Elements
const chatButton = document.getElementById('ai-chat-button');
const chatWindow = document.getElementById('ai-chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

// Initialize chat widget
function initChatWidget() {
    // Add welcome message
    addMessage('ai', 'Hi! I\'m Marcelo\'s AI assistant. Feel free to ask me about his projects, skills, or experience!');

    // Event listeners
    chatButton.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendMessage);

    // Send on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (isOpen &&
            !chatWindow.contains(e.target) &&
            !chatButton.contains(e.target)) {
            toggleChat();
        }
    });
}

// Toggle chat window
function toggleChat() {
    isOpen = !isOpen;
    chatWindow.classList.toggle('active');
    chatButton.classList.toggle('hidden');

    if (isOpen) {
        chatInput.focus();
    }
}

// Add message to chat
function addMessage(sender, text, isLoading = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message${isLoading ? ' loading' : ''}`;

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    if (isLoading) {
        messageContent.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
    } else {
        messageContent.textContent = text;
    }

    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageDiv;
}

// Send message to Flowise
async function sendMessage() {
    const message = chatInput.value.trim();

    if (!message) return;

    // Add user message
    addMessage('user', message);
    chatInput.value = '';

    // Show loading indicator
    const loadingMessage = addMessage('ai', '', true);

    try {
        // Prepare request
        const response = await fetch(`${FLOWISE_CONFIG.apiUrl}/${FLOWISE_CONFIG.chatflowId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: message,
                history: chatHistory
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Remove loading message
        loadingMessage.remove();

        // Add AI response
        const aiResponse = data.text || data.answer || 'Sorry, I could not process that.';
        addMessage('ai', aiResponse);

        // Update chat history
        chatHistory.push({
            role: 'user',
            content: message
        });
        chatHistory.push({
            role: 'assistant',
            content: aiResponse
        });

        // Keep only last 10 messages in history to avoid token limits
        if (chatHistory.length > 20) {
            chatHistory = chatHistory.slice(-20);
        }

    } catch (error) {
        console.error('Error sending message:', error);

        // Remove loading message
        loadingMessage.remove();

        // Show error message
        addMessage('ai', 'Sorry, I\'m having trouble connecting. Please make sure Flowise is running and try again.');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
    initChatWidget();
}
