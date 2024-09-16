import React from 'react';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

interface FileUploadProps {
  loading: boolean;
  handleFileChange: (file: File) => void; // Pass file change handler from Scraping
}

const FileUpload: React.FC<FileUploadProps> = ({
  loading,
  handleFileChange,
}) => {
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile && selectedFile.type !== 'text/csv') {
      console.log('Please upload a valid CSV file');
      return;
    }

    if (selectedFile) {
      handleFileChange(selectedFile); // Call the handler from Scraping
    }
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div>
      <input
        accept='.csv'
        style={{ display: 'none' }}
        id='file-input'
        type='file'
        onChange={onFileInputChange} // Listen for file input changes
      />
      <Button
        variant='contained'
        color='secondary'
        startIcon={<FileUploadOutlinedIcon />}
        onClick={triggerFileInput}
        disabled={loading} // Disable button while loading
      >
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;
