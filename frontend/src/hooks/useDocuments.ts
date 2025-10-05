import { useState, useEffect } from 'react';
import api from '../services/api';

interface Document {
  name: string;
  key: string;
  size: number;
  last_modified: string;
}

const useDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getDocuments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Document[]>('/documents/list');
      setDocuments(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return { documents, loading, error, getDocuments };
};

export default useDocuments;