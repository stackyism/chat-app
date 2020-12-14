import React from 'react';
import { SideNav } from './components/side-nav';
import { ChatWindow } from './components/chat-window';
import { MessagesProvider, UsersProvider } from '../providers';

const Chat = () => (
  <div className="container h-screen flex items-center justify-center bg-gray-200">
    <UsersProvider>
      <MessagesProvider>
        <div className="flex h-5/6 w-5/6 border-2 border-gray-300 rounded-2xl">
          <div className="w-3/12">
            <SideNav />
          </div>
          <div className="flex-1">
            <ChatWindow />
          </div>
        </div>
      </MessagesProvider>
    </UsersProvider>
  </div>
);

export default Chat;
