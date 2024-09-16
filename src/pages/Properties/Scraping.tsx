import { useState } from 'react';
import { Box, Stack, Button, CircularProgress } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { uploadFile } from '../../api/properties';
import FileUpload from '../../components/FileUpload';
import { Property } from '../../types/properties';
import PropertyList from './PropertyList';

const Scraping = () => {
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [propertiesList, setPropertiesList] = useState<Property[]>([]); // List of properties
  const [displaySearchBar, setDisplaySearchBar] = useState<boolean>(false); // Search bar display state

  // Handle file change and upload
  const handleFileChange = async (file: File) => {
    setLoading(true); // Start loading state

    try {
      const result = await uploadFile(file);
      setPropertiesList(result); // Update the properties list with the result
      console.log(result);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Handle search bar display
  const handleOpenSearch = () => {
    setDisplaySearchBar(!displaySearchBar);
  };

  return (
    <Box>
      <Stack direction='row' spacing={1} alignItems='center'>
        {/* Pass loading state and handleFileChange function to FileUpload */}
        <FileUpload handleFileChange={handleFileChange} loading={loading} />
        <Button
          variant='contained'
          color='secondary'
          startIcon={<FileDownloadOutlinedIcon />}
          disabled={loading} // Disable download button while loading
        >
          Download
        </Button>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<SearchIcon />}
          disabled={loading}
          onClick={handleOpenSearch}
        >
          Search
        </Button>
        {loading && <CircularProgress size={24} />} {/* Show loading spinner */}
      </Stack>
      <Stack>
        {/* Pass the properties list to PropertyList */}
        <PropertyList
          properties={propertiesList}
          displaySearchBar={displaySearchBar}
        />
      </Stack>
    </Box>
  );
};

export default Scraping;
