import React from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { MessagesHeader } from '../components/messages/MessagesHeader';
import { ContactList } from '../components/messages/ContactList';
import { ChatWindow } from '../components/messages/ChatWindow';
import { MessagesRightPanel } from '../components/messages/MessagesRightPanel';

export const MessagesView = () => {
  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <MessagesHeader />
          <div className="flex flex-col xl:flex-row gap-6">
            <ContactList />
            <ChatWindow />
          </div>
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <MessagesRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};
