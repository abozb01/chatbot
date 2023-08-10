// responses 
const responses = {
    greetings: [
        "Hello! My name is Reginald. How can I assist you today?",
        "Hi there! How can I help?",
        "Hey! How can I be of service?"
    ],
    help: [
        "Feel free to ask me any questions.",
        "I'm here to help. What do you need?",
        "Ask me anything, I'm here for you."
    ],
    goodbye: [
        "Goodbye! Have a great day!",
        "Farewell! Take care.",
        "See you later! Stay well."
    ],
    weather: [
        "Sure, I can help you with the weather. Where are you located?",
        "Looking for weather info? Let me know your location.",
        "Weather details? Just tell me where you are."
    ],
    time: [
        "The current time is...",
        "Let me check the time for you...",
        "The clock says... it's time for an answer!"
    ],
};

function getRandomResponse(responsesArray) {
    const randomIndex = Math.floor(Math.random() * responsesArray.length);
    return responsesArray[randomIndex];
}

function getResponse(input) {
    const lowerInput = input.toLowerCase();

    for (const keyword in responses) {
        if (lowerInput.includes(keyword)) {
            return getRandomResponse(responses[keyword]);
        }
    }

    return "I'm sorry, I didn't understand your question.";
}

// Export the function for external use
module.exports = {
    getResponse
};
