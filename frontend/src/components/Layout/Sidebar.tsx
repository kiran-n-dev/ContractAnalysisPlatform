import React from 'react';
import { useDocuments } from '../../hooks/useDocuments';

interface SidebarProps {
  onAnalyzeDocument?: (fileKey: string) => void; // Made optional
}

const Sidebar: React.FC<SidebarProps> = ({ onAnalyzeDocument }) => {
  const { documents, loading, error } = useDocuments();

  const handleViewAnalysisClick = (fileKey: string) => {
    if (onAnalyzeDocument) {
      onAnalyzeDocument(fileKey);
    }
  };

  return (
    <aside className="bg-gray-800 w-64 p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Upload Document</h2>
        <input type="file" className="mb-4" />
        <button className="bg-primary text-white px-4 py-2 rounded w-full">Upload</button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Documents</h2>
        {loading && <p>Loading documents...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && documents.length === 0 && <p>No documents uploaded yet.</p>}
        <ul>
          {documents.map((doc) => (
            <li key={doc.key} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
              <span>{doc.name}</span>
              <button 
                onClick={() => handleViewAnalysisClick(doc.key)} 
                className="bg-primary text-white px-3 py-1 rounded text-sm"
                disabled={!onAnalyzeDocument} // Disable button if no handler is provided
              >
                View Analysis
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
