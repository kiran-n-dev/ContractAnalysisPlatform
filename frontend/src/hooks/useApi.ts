import { useState } from 'react';
import api from '../services/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useApi = <T,>() => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const request = async (url: string, method: 'get' | 'post' | 'put' | 'delete' = 'get', data?: any) => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await api[method](url, data);
      setState({ data: response.data, loading: false, error: null });
    } catch (error: any) {
      setState({ data: null, loading: false, error: error.message });
    }
  };

  return { ...state, request };
};

export default useApi;
