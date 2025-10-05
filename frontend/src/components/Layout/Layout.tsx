import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  onAnalyzeDocument?: (fileKey: string) => void; // Made optional
}

const Layout: React.FC<LayoutProps> = ({ children, onAnalyzeDocument }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Conditionally pass onAnalyzeDocument to Sidebar */}
        <Sidebar onAnalyzeDocument={onAnalyzeDocument} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;