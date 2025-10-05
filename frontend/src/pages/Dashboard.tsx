import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import DocumentAnalysis from '../components/Dashboard/DocumentAnalysis';
import api from '../services/api';

const Dashboard: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  const handleAnalyzeDocument = async (fileKey: string) => {
    setLoadingAnalysis(true);
    setAnalysisError(null);
    setAnalysisResult(null);
    try {
      const response = await api.post('/documents/analyze', { file_key: fileKey });
      setAnalysisResult(response.data.analysis);
    } catch (error: any) {
      setAnalysisError(error.message || "Failed to get document analysis.");
    } finally {
      setLoadingAnalysis(false);
    }
  };

  return (
    <Layout onAnalyzeDocument={handleAnalyzeDocument}>
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-4">Select a document to view its analysis.</p>

      {loadingAnalysis && <p className="mt-4">Analyzing document...</p>}
      {analysisError && <p className="mt-4 text-red-500">Error: {analysisError}</p>}
      {analysisResult && <DocumentAnalysis analysisResult={analysisResult} />}
    </Layout>
  );
};

export default Dashboard;