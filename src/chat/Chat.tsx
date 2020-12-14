import React from 'react';
import { SideNav } from './components/side-nav';
import { ChatWindow } from './components/chat-window';

const Chat = () => (
  <div className="container h-screen">
    <div className="flex h-full">
      <div className="w-3/12">
        <SideNav />
      </div>
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  </div>
);

export default Chat;
