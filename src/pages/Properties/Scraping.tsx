import { Box, Stack, Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Scraping = () => {
  return (
    <Box sx={{ pt: 1 }}>
      <Stack direction='row' spacing={1}>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<FileUploadOutlinedIcon />}
        >
          Upload
        </Button>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<FileDownloadOutlinedIcon />}
        >
          Download
        </Button>
      </Stack>
    </Box>
  );
};

export default Scraping;
