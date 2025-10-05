import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Layout from '../components/Layout/Layout';
import api from '../services/api';

const Upload: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    const formData = new FormData();
    acceptedFiles.forEach(file => {
      formData.append('file', file);
    });

    try {
      await api.post('/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadSuccess("File(s) uploaded successfully!");
    } catch (error: any) {
      setUploadError(error.message || "Failed to upload file(s).");
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Upload Document</h1>
      <div {...getRootProps()} className={`mt-8 border-2 border-dashed rounded-lg p-16 text-center ${isDragActive ? 'border-primary' : 'border-gray-600'}`}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      {uploading && <p className="mt-4">Uploading...</p>}
      {uploadError && <p className="mt-4 text-red-500">Error: {uploadError}</p>}
      {uploadSuccess && <p className="mt-4 text-green-500">{uploadSuccess}</p>}
    </Layout>
  );
};

export default Upload;
