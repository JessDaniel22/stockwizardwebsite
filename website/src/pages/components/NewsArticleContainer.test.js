import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import NewsArticleComponent from './NewsArticleContainer';
import '@testing-library/jest-dom';

global.mockWebSocketInstances = [];

class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.onmessage = null;
    this.onopen = null;
    this.onclose = null;
    this.onerror = null;
    this.listeners = {};
    global.mockWebSocketInstances.push(this);
  }

  send(data) {
    // Implement if needed for testing outgoing messages
    console.log("Sending data:", data);
  
  // Simulate an immediate server response for a specific message type
  const jsonData = JSON.parse(data);
  if (jsonData.type === "REQUEST_ARTICLES") {
    this.receive({
      type: "ARTICLE_RESPONSE",
      articles: [
        { title: "Test Article 1", content: "Content for test article 1" },
        // Add more simulated articles as needed
      ],
    });
  }
  }

  close() {
    // Simulate a close event if needed
    if (this.onclose) this.onclose();
  }

  // Method to simulate receiving a message
  receive(message) {
    if (this.onmessage) {
      this.onmessage({ data: JSON.stringify(message) });
    }
  }

  addEventListener(event, callback) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(callback);
  }

  removeEventListener(event, callback) {
    if (!this.listeners[event]) return;
    const index = this.listeners[event].indexOf(callback);
    if (index > -1) {
      this.listeners[event].splice(index, 1);
    }
  }

  // Helper to trigger events for testing
  trigger(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(data));
    }
    if (event === 'open' && this.onopen) this.onopen(data);
    if (event === 'close' && this.onclose) this.onclose(data);
    if (event === 'error' && this.onerror) this.onerror(data);
  }
}


// Replace the global WebSocket with the mock
global.WebSocket = MockWebSocket;

test('displays articles received from WebSocket', async () => {
  // Render the component
  const { getByText } = render(<NewsArticleComponent />);

  // Define the mock data
  const mockData = {
    type: "ARTICLE_RESPONSE",
    articles: [
      { title: "Test Article 1", content: "Content for article 1" },
    ],
  };

  // Simulate WebSocket receiving data
  await waitFor(() => expect(global.mockWebSocketInstances.length).toBeGreaterThan(0));

  // Access the most recent MockWebSocket instance
  const mockWebSocketInstance = global.mockWebSocketInstances[global.mockWebSocketInstances.length - 1];

  // Simulate WebSocket receiving data
  act(() => {
    mockWebSocketInstance.receive(mockData);
  });


  // Wait for the component to update based on the mock WebSocket data
  await waitFor(() => {
    expect(getByText("Test Article 1")).toBeInTheDocument();
  });
});