import React from 'react';

interface DocumentAnalysisProps {
  analysisResult: {
    key_information: string;
    risk_assessment: string;
    summary: string;
  };
}

const DocumentAnalysis: React.FC<DocumentAnalysisProps> = ({ analysisResult }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Document Analysis</h2>
      
      <h3 className="text-xl font-semibold mt-4">Key Information</h3>
      <p className="whitespace-pre-wrap">{analysisResult.key_information}</p>

      <h3 className="text-xl font-semibold mt-4">Risk Assessment</h3>
      <p className="whitespace-pre-wrap">{analysisResult.risk_assessment}</p>

      <h3 className="text-xl font-semibold mt-4">Summary</h3>
      <p className="whitespace-pre-wrap">{analysisResult.summary}</p>
    </div>
  );
};

export default DocumentAnalysis;